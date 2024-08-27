import { create } from 'zustand'
import { IGlobalSlice } from '@/contracts/IGlobalSlice'

export const useGlobalStore = create<IGlobalSlice>()((set) => ({
  isSidebarOpen : false,
  themeMode : "Light",
  setIsSidebarOpen : (isSidebarOpen) => set((state) => ({...state, isSidebarOpen})),
  setThemeMode : (themeMode) => set((state) => ({...state, themeMode}))
}))