import { create } from 'zustand'
import { IGlobalSlice } from '@/contracts/IGlobalSlice'

export const useGlobalStore = create<IGlobalSlice>()((set) => ({
  isSidebarClosed : true,
  setIsSidebarClosed : (isSidebarClosed) => set((state) => ({...state, isSidebarClosed}))
}))