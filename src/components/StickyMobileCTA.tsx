import { useEffect, useState } from 'react';
import QuickInquiryForm from './QuickInquiryForm';

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

interface Props {
  label?: string;
  formName: string;
  title?: string;
}

// Persistent bottom bar (mobile only, see .sticky-cta-bar's @media rule) that
// opens the quick 4-field inquiry form as a bottom sheet from anywhere on the
// page — built because analytics showed almost nobody scrolls far enough on
// long landing pages to reach the in-page booking form.
export default function StickyMobileCTA({ label = 'Check My Date', formName, title = 'Check Your Date' }: Props) {
  const [open, setOpen] = useState(false);

  // Reserve space at the bottom of the page so the fixed bar never covers
  // footer content — scoped to a body class rather than the footer itself
  // since SiteFooter is shared across pages that don't use this CTA.
  useEffect(() => {
    document.body.classList.add('has-sticky-cta');
    return () => { document.body.classList.remove('has-sticky-cta'); };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <div className="sticky-cta-bar">
        <button type="button" className="sticky-cta-bar__btn" onClick={() => setOpen(true)}>
          {label}
        </button>
      </div>

      {open && (
        <div className="bottom-sheet-backdrop" onClick={() => setOpen(false)}>
          <div className="bottom-sheet" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={title}>
            <div className="bottom-sheet__handle" />
            <div className="bottom-sheet__header">
              <span className="bottom-sheet__title">{title}</span>
              <button type="button" className="bottom-sheet__close" onClick={() => setOpen(false)} aria-label="Close">
                <CloseIcon />
              </button>
            </div>
            <QuickInquiryForm formName={formName} onSent={() => { /* keep sheet open so they see the confirmation */ }} />
          </div>
        </div>
      )}
    </>
  );
}
