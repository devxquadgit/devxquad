export interface IWButtonProps {
  label: string;
  width?: string;
  bgcolor?: string;
  textColor?: string;
  rounded?: boolean;
  className?: string;
  submit?: boolean;
  loading?: boolean;
  onClick?: () => void;
}