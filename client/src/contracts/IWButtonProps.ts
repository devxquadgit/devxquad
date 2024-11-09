export interface IWButtonProps {
  label: string;
  width?: string;
  bgcolor?: string;
  textColor?: string;
  rounded?: boolean;
  submit?: boolean;
  loading?: boolean;
  onClick?: (event: React.FormEvent) => void;
  style?: React.CSSProperties;
}