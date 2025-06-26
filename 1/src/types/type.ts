export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface Props {
  user: User;
  onClose?: () => void;
  onClick?: () => void;
}

export interface SearchProps {
  searchTerm: string;
  onSearch: (term: string) => void;
}