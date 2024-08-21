export interface IWButtonProps {
  label: string;
  width?: string;
  bgcolor?: string;
  textColor?: string;
  rounded?: boolean;
  submit?: boolean;
  loading?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}