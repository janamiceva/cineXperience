import { create } from 'zustand'
import { auth } from '../auth/firebase-config'
import { type User } from '../types/user'

interface UserStore {
  user: User | null
  setUser: (cutrrentUser: User) => void
  isLoadingUser: boolean
  setIsLoadingUser: (isLoadingUser: boolean) => void
  userToken: string
  setUserToken: (userToken: string) => void
}

export const useUserStore = create<UserStore>((set) => ({
  user: auth.currentUser as User,
  isLoadingUser: true,
  setIsLoadingUser: (isLoadingUser) => { set({ isLoadingUser }) },
  setUser: (currentUser: User) => {
    set((state) => ({ ...state, user: currentUser }))
  },
  userToken: '',
  setUserToken: (userToken) => { set({ userToken }) }
}))
