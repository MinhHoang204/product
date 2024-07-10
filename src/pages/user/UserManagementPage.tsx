import UserForm from '../../components/UserForm';
import UserList from '../../components/UserList';
import { useState } from 'react';
import styles from './UserManagementPage.module.css';
interface User {
    id: number;
    email: string;
    isLocked: boolean;
}
export default function UserManagementPage() {
    const [users, setUsers] = useState<User[]>([]);

    const handleAddUser = (values: { email: string; password: string }) => {
        const newUser: User = {
            id: users.length + 1,
            email: values.email,
            isLocked: false,
        };
        setUsers([...users, newUser]);
    };

    const handleToggleLock = (id: number) => {
        setUsers(users.map(user => 
            user.id === id ? { ...user, isLocked: !user.isLocked } : user
        ));
    };
  return (
    <div className={styles.container}>
        <h1>User Management</h1>
        <UserForm onSubmit={handleAddUser} />
        <UserList users={users} onToggleLock={handleToggleLock} />
    </div>
  )
}
