export interface IWTagProps {
  icon: JSX.Element;       
  label?: string;          
  url?: string;           
  type: 'circle-sm' | 'circle-md' | 'circle-lg' | 'pill'; 
  bordered?: boolean;      
  clickable?: boolean;   
  bgcolor?: string;  
  style?: React.CSSProperties;
  linkStyle?: React.CSSProperties;
}