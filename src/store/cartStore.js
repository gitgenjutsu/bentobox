import { create } from "zustand";

const CART_KEY = "cart-data";

const getStoredCart = () => {
  try {
    const stored = localStorage.getItem(CART_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const useCartStore = create((set, get) => ({
  cart: getStoredCart(),
  cartDrawerOpen: false,

  toggleCartDrawer: () =>
    set((state) => ({ cartDrawerOpen: !state.cartDrawerOpen })),

  addToCart: (item) =>
    set((state) => {
      const existing = state.cart.find((i) => i.id === item.id);
      let updatedCart;

      if (existing) {
        updatedCart = state.cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        updatedCart = [...state.cart, { ...item, quantity: 1 }];
      }

      localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const updatedCart = state.cart.filter((i) => i.id !== id);
      localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),

  clearCart: () => {
    localStorage.removeItem(CART_KEY);
    set({ cart: [] });
  },

  increment: (id) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),

  decrement: (id) =>
    set((state) => {
      const updatedCart = state.cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
      localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),
}));

export default useCartStore;
