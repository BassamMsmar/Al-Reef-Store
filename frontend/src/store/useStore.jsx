import { create } from 'zustand'

const prosuctsStore = create((set) => ({
    products: [],

    setProducts: (products) => set({ products }),
}))

export default prosuctsStore;

