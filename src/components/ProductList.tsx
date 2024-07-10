import styles from './ProductList.module.css';
interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductList {
  products: Product[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}
export default function ProductList(onEdit:any, onDelete:any) {
  return (
    <table className={styles.productTable}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {products.map(product => (
                <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>
                        <button onClick={() => onEdit(product.id)} className={styles.editButton}>Edit</button>
                        <button onClick={() => onDelete(product.id)} className={styles.deleteButton}>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}
