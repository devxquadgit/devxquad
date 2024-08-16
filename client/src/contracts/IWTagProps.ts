export interface IWTagProps {
  icon: JSX.Element;       
  label?: string;          
  href?: string;           
  type: 'circle-sm' | 'circle-md' | 'pill'; 
  bordered?: boolean;      
  clickable?: boolean;     
}