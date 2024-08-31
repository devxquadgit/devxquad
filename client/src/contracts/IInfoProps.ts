interface data {
  Image: string;
  Topic: string;
  Heading: string;
  Desc: string;
  Url: string;
  Points?: string[];
  style?: React.CSSProperties;
}

export interface IInfoProps {
  render: string;
  data: data[];
}


