import { useState } from 'react';
import Box from '@mui/material/Box';
import SearchBar from './components/SearchBar/SearchBar';
import UserCard from './components/UserCard/UserCard';
import UserModal from './components/UserModal/UserModal';
import useUsers from './hooks/useUsers';
import type { User } from './types/type';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState<null | User>(null);
  const users = useUsers(searchTerm);

  return (
    <Box sx={{ maxWidth: 1200, margin: 'auto', padding: 3 }}>
      <SearchBar searchTerm={searchTerm} onSearch={(term) => setSearchTerm(term)} />

      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: .5, alignItems: 'center', marginTop: 2 }}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} onClick={() => setSelectedUser(user)} />
        ))}
      </Box>

      {selectedUser && <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />}
    </Box>
  );
};

export default App;