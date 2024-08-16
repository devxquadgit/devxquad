export interface IWTagProps {
  icon: JSX.Element;       
  label?: string;          
  url?: string;           
  type: 'circle-sm' | 'circle-md' | 'pill'; 
  bordered?: boolean;      
  clickable?: boolean;     
}