import { create } from 'zustand'
import { IGlobalSlice } from '@/contracts/IGlobalSlice'

export const useGlobalStore = create<IGlobalSlice>()((set) => ({
  isSidebarOpen : false,
  setIsSidebarOpen : (isSidebarOpen) => set((state) => ({...state, isSidebarOpen}))
}))