import { create } from 'zustand'

interface CardStore {
    totalPrice: number
    setTotalPrice: (totalPrice: number) => void
}

export const useCardStore = create<CardStore>((set) => ({
    totalPrice: 0,
    setTotalPrice: (totalPrice) => { set({ totalPrice }) },
}))
