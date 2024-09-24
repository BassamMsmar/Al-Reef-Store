import { create } from "zustand";

const prosuctsStore = create((set) => ({
  products: [],
  categories: [],
  filter: {
    category: [],
    rangePrice: [0, 200],
  },

  setProducts: (products) => set({ products }),
  setCategories: (categories) => set({ categories }),
  setFilter: (filter) => set({ filter }),
}));

export default prosuctsStore;
