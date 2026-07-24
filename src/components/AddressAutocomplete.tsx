import { useEffect, useRef, useState } from 'react';

interface GeoDetails {
  city: string;
  state: string;
  country: string;
}

interface Suggestion extends GeoDetails {
  label: string;
}

interface Props {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  onSelect?: (details: GeoDetails) => void;
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
}

export default function AddressAutocomplete({ id, label, value, onChange, onSelect, placeholder, required, maxLength }: Props) {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [open, setOpen] = useState(false);
  // Structured city/state/country from the last picked suggestion — exposed via
  // hidden fields with standard autocomplete tokens so Meta's Advanced Matching
  // (and other pixel scanners) can pick them up alongside email/phone/name.
  const [matched, setMatched] = useState<GeoDetails>({ city: '', state: '', country: '' });
  const wrapRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  function handleInput(v: string) {
    onChange(v);
    setMatched({ city: '', state: '', country: '' });
    if (debounceRef.current) clearTimeout(debounceRef.current);

    if (v.trim().length < 3) {
      setSuggestions([]);
      setOpen(false);
      return;
    }

    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/geocode?q=${encodeURIComponent(v)}`);
        if (!res.ok) return;
        const data = await res.json();
        setSuggestions(data.results || []);
        setOpen(true);
      } catch {
        // Silent — autocomplete is a convenience, not a required path
      }
    }, 300);
  }

  function pick(s: Suggestion) {
    onChange(s.label);
    const details = { city: s.city, state: s.state, country: s.country };
    setMatched(details);
    onSelect?.(details);
    setSuggestions([]);
    setOpen(false);
  }

  return (
    <div className="form-field" ref={wrapRef} style={{ position: 'relative' }}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="text"
        autoComplete="off"
        required={required}
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        onChange={e => handleInput(e.target.value)}
        onFocus={() => { if (suggestions.length) setOpen(true); }}
      />

      {/* Hidden structured fields — invisible to users, readable by Meta's
          Advanced Matching scanner and similar pixel autofill-detection */}
      <input type="hidden" name="address-level2" autoComplete="address-level2" value={matched.city} readOnly />
      <input type="hidden" name="address-level1" autoComplete="address-level1" value={matched.state} readOnly />
      <input type="hidden" name="country" autoComplete="country-name" value={matched.country} readOnly />

      {open && suggestions.length > 0 && (
        <ul
          role="listbox"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            zIndex: 20,
            margin: '4px 0 0',
            padding: '6px',
            listStyle: 'none',
            background: '#181818',
            border: '1px solid rgba(201,168,76,0.25)',
            borderRadius: '8px',
            boxShadow: '0 12px 28px rgba(0,0,0,0.45)',
            maxHeight: '220px',
            overflowY: 'auto',
          }}
        >
          {suggestions.map((s, i) => (
            <li key={`${s.label}-${i}`}>
              <button
                type="button"
                onClick={() => pick(s)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  background: 'transparent',
                  border: 'none',
                  color: '#f2f2f2',
                  fontSize: '14px',
                  padding: '10px 10px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                }}
                onMouseDown={e => e.preventDefault()}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(201,168,76,0.12)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
