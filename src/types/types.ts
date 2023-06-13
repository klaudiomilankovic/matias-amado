export type Props = {
  data: { id: number; image: string; category: string; title: string; text: string; home: number };
  loading: boolean;
};

export type DataContact = {
  name?: string;
  city?: string;
  email?: string;
  address?: string;
  phone?: string;
  message?: string;
};
