export interface IGlobalSlice {
  isSidebarOpen : boolean,
  themeMode : string,
  setIsSidebarOpen : (isSidebarOpen: boolean) => void, 
  setThemeMode : (themeMode: string) => void, 
}