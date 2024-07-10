import styles from './CategoryList.module.css';
interface Category {
    id: number;
    name: string;
}
interface CategoryList {
    categories: Category[];
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
}
export default function CategoryList(categories:any, onEdit:any, onDelete:any) {
  return (
    <table className={styles.categoryTable}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {categories.map(category => (
                <tr key={category.id}>
                    <td>{category.name}</td>
                    <td>
                        <button onClick={() => onEdit(category.id)} className={styles.editButton}>Edit</button>
                        <button onClick={() => onDelete(category.id)} className={styles.deleteButton}>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}
