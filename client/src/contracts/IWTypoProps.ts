export interface IWTypoProps {
  Component?: string;
  label: string;
  type?: 'main-lg' | 'main-md' | 'sub-xl' | 'sub-lg' | 'sub-md' | 'sub-sm' | 'link' | 'arrow-link';
  color?: string;
  url?: string; 
  bold?: string;
  style?: React.CSSProperties;
  targetBlank?: boolean;
}