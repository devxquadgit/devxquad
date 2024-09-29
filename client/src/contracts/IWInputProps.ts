export interface IWInputProps {
  type: 'text' | 'email' | 'password' | 'number';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  rounded?: boolean;
  style?: React.CSSProperties;
}