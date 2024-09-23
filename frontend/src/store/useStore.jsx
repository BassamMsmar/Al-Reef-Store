import { create } from 'zustand'

const prosuctsStore = create((set) => ({
    products: [],
    categories: [],

    setProducts: (products) => set({ products }),
    setCategories: (categories) => set({ categories }),
}))

export default prosuctsStore;

