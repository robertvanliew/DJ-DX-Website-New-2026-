import { createContext, useContext, useState } from 'react';
import type { Track } from '../catalog';

const PER_TRACK_MIN = 2.00;

interface CartContextValue {
  cart: Track[];
  cartOpen: boolean;
  price: string;
  buyerEmail: string;
  buyerName: string;
  checkoutLoading: boolean;
  checkoutError: string;
  minTotal: number;
  addToCart: (e: React.MouseEvent, track: Track) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  setCartOpen: (open: boolean) => void;

  setPrice: (p: string) => void;
  setBuyerEmail: (e: string) => void;
  setBuyerName: (n: string) => void;
  handleCheckout: () => Promise<void>;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Track[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [price, setPrice] = useState('2.00');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [buyerName, setBuyerName] = useState('');
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [checkoutError, setCheckoutError] = useState('');

  const minTotal = Math.max(PER_TRACK_MIN, cart.length * PER_TRACK_MIN);

  const addToCart = (e: React.MouseEvent, track: Track) => {
    e.stopPropagation();
    setCart(prev => {
      if (prev.some(t => t.id === track.id)) return prev;
      const newCart = [...prev, track];
      setPrice(p => {
        const current = parseFloat(p) || 0;
        const newMin = newCart.length * PER_TRACK_MIN;
        return current < newMin ? newMin.toFixed(2) : p;
      });
      return newCart;
    });
    setCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart(prev => {
      const newCart = prev.filter(t => t.id !== id);
      const newMin = newCart.length === 0 ? PER_TRACK_MIN : newCart.length * PER_TRACK_MIN;
      setPrice(newMin.toFixed(2));
      return newCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    setPrice(PER_TRACK_MIN.toFixed(2));
    setCheckoutError('');
  };

  const handleCheckout = async () => {
    setCheckoutError('');
    const amt = parseFloat(price);
    if (isNaN(amt) || amt < 2) { setCheckoutError('Minimum price is $2.00'); return; }
    if (!buyerEmail.includes('@')) { setCheckoutError('Please enter a valid email address'); return; }
    if (cart.length === 0) { setCheckoutError('Add at least one track to your cart'); return; }
    setCheckoutLoading(true);
    try {
      const res = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: amt,
          email: buyerEmail,
          name: buyerName,
          trackIds: cart.map(t => t.id.toString()),
        }),
      });
      const data = await res.json() as { transactionId?: string; checkoutUrl?: string; error?: string };
      if (!res.ok || !data.transactionId) {
        setCheckoutError(data.error ?? 'Something went wrong. Please try again.');
        return;
      }
      const Paddle = (window as unknown as { Paddle?: { Checkout: { open: (opts: Record<string, unknown>) => void } } }).Paddle;
      if (Paddle) {
        Paddle.Checkout.open({ transactionId: data.transactionId });
      } else if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else {
        setCheckoutError('Checkout could not be opened. Please try again.');
      }
    } catch {
      setCheckoutError('Network error. Please try again.');
    } finally {
      setCheckoutLoading(false);
    }
  };

  return (
    <CartContext.Provider value={{
      cart, cartOpen, price, buyerEmail, buyerName,
      checkoutLoading, checkoutError, minTotal,
      addToCart, removeFromCart, clearCart, setCartOpen,
      setPrice, setBuyerEmail, setBuyerName, handleCheckout,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}

/* ── Shared Cart Panel UI (used by both MusicStore and Music pages) ── */
export function CartPanel() {
  const {
    cart, cartOpen, price, buyerEmail, buyerName,
    checkoutLoading, checkoutError, minTotal,
    removeFromCart, clearCart, setCartOpen, setPrice,
    setBuyerEmail, setBuyerName, handleCheckout,
  } = useCart();

  const PER_TRACK_MIN = 2.00;

  if (!cartOpen) return null;

  return (
    <div className="cart-overlay" onClick={() => setCartOpen(false)} style={{ zIndex: 1000 }}>
      <div className="cart-panel" onClick={e => e.stopPropagation()}>
        <div className="cart-panel-header">
          <h3>Your Selection</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button className="cart-clear" onClick={clearCart} aria-label="Clear cart">Clear All</button>
            <button className="cart-close" onClick={() => setCartOpen(false)} aria-label="Close cart">✕</button>
          </div>
        </div>

        <ul className="cart-track-list">
          {cart.map(t => (
            <li key={t.id} className="cart-track-item">
              <span className="cart-track-name">{t.title}</span>
              <span className="cart-track-artists">{t.artists}</span>
              <button className="cart-track-remove" onClick={() => removeFromCart(t.id)} aria-label={`Remove ${t.title}`}>✕</button>
            </li>
          ))}
        </ul>

        <div className="cart-price-section">
          <label className="cart-price-label" htmlFor="cart-price">
            Name Your Price
            <span className="cart-price-hint"> (min ${minTotal.toFixed(2)} · ${PER_TRACK_MIN.toFixed(2)}/track)</span>
          </label>
          <div className="cart-price-input-wrap">
            <span className="cart-price-dollar">$</span>
            <input
              id="cart-price"
              type="number"
              min="2"
              step="0.50"
              value={price}
              onChange={e => setPrice(e.target.value)}
              className="cart-price-input"
              placeholder="5.00"
            />
          </div>
          <div className="cart-price-suggestions">
            {[minTotal, minTotal * 2, minTotal * 3, minTotal * 5].map(v => (
              <button key={v} className={`cart-price-pill${parseFloat(price) === v ? ' active' : ''}`} onClick={() => setPrice(v.toFixed(2))}>
                ${v % 1 === 0 ? v : v.toFixed(2)}
              </button>
            ))}
          </div>
        </div>

        <div className="cart-contact-section">
          <input type="text" placeholder="Your name (optional)" value={buyerName} onChange={e => setBuyerName(e.target.value)} className="cart-input" />
          <input type="email" placeholder="Email address (required)" value={buyerEmail} onChange={e => setBuyerEmail(e.target.value)} className="cart-input" required />
        </div>

        {checkoutError && <p className="cart-error">{checkoutError}</p>}

        <button className="cart-checkout-btn" onClick={handleCheckout} disabled={checkoutLoading}>
          {checkoutLoading ? 'Redirecting…' : `Pay $${price || '0'} — Get the Music`}
        </button>

        <p className="cart-secure-note">Secure checkout via Paddle · Download link delivered by email</p>
      </div>
    </div>
  );
}

/* ── Cart FAB (floating button) ── */
export function CartFab() {
  const { cart, setCartOpen } = useCart();
  if (cart.length === 0) return null;
  return (
    <button className="cart-fab" onClick={() => setCartOpen(true)} aria-label={`Open cart — ${cart.length} track${cart.length > 1 ? 's' : ''}`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
      <span className="cart-fab-count">{cart.length}</span>
    </button>
  );
}
