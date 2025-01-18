import { create } from 'zustand'

export const useMenuDrawerStore = create((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
    
    cart: [],
    addToCart: (item) => set((state) => ({ 
        cart: [...state.cart, item] 
    })),
    removeFromCart: (itemId) => set((state) => ({
        cart: state.cart.filter((item, index) => {
            // Find first occurrence of item with matching id and remove it
            const firstIndex = state.cart.findIndex(i => i.menuID === itemId);
            return index !== firstIndex;
        })
    })),
    clearCart: () => set({ cart: [] }),
}))