import { useEffect, useState } from 'react';
import axios from 'axios';
import type { User } from '../types/type';

export default function useUsers(term: string): User[] {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const url = term ? `http://127.0.0.1:3000?term=${term}` : 'http://127.0.0.1:3000';
      try {
        const res = await axios.get(url);
        setUsers(res.data);
      } catch (error) {
        console.error('Ошибка при загрузке пользователей:', error);
      }
    };

    fetchUsers();
  }, [term]);

  return users;
}