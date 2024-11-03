export interface IWInputProps {
  name?: string;
  type: 'text' | 'email' | 'password' | 'number' | 'textarea';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rounded?: boolean;
  style?: React.CSSProperties;
}