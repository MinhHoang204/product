import styles from "./UserList.module.css"
interface User {
    id: number;
    email: string;
    isLocked: boolean;
}

interface UserList {
    users: User[];
    onToggleLock: (id: number) => void;
}
export default function UserList(users:any, onToggleLock:any) {
  return (
    <table className={styles.userTable}>
    <thead>
        <tr>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {users.map(user => (
            <tr key={user.id}>
                <td>{user.email}</td>
                <td>{user.isLocked ? 'Locked' : 'Active'}</td>
                <td>
                    <button onClick={() => onToggleLock(user.id)}>
                        {user.isLocked ? 'Unlock' : 'Lock'}
                    </button>
                </td>
            </tr>
        ))}
    </tbody>
    </table>
  )
}
