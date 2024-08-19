export interface IWTypoProps {
  label: string;
  type?: 'main-lg' | 'main-md' | 'sub-lg' | 'sub-md' | 'sub-sm' | 'link' | 'arrow-link';
  color?: string;
  url?: string; 
  bold?: string;
  style?: React.CSSProperties;
}