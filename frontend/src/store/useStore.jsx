import { create } from "zustand";

const productsStore = create((set) => ({
  products: [],
  categories: [],

  filters: {
    categories: [],
    priceRange: [0, 200],
  },

  setProducts: (products) => set({ products }),
  setCategories: (categories) => set({ categories }),
  setFilters: (filters) =>
    set((state) => ({ filters: { ...state.filters, ...filters } })),
}));

export default productsStore;
