import ProductForm from "../../components/ProductForm";
import ProductList from "../../components/ProductList";
import styles from './ProductManagementPage.module.css';
import { useState } from "react";
interface Product {
    id: number;
    name: string;
    price: number;
}
export default function ProductManagementPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
    const [isEditing, setIsEditing] = useState(false);

    const handleAddProduct = (values: { name: string, price: number }) => {
        const newProduct: Product = {
            id: products.length + 1,
            name: values.name,
            price: values.price,
        };
        setProducts([...products, newProduct]);
    };

    const handleEditProduct = (id: number) => {
        const product = products.find(prod => prod.id === id);
        if (product) {
            setCurrentProduct(product);
            setIsEditing(true);
        }
    };

    const handleUpdateProduct = (values: { name: string, price: number }) => {
        if (currentProduct) {
            setProducts(products.map(prod =>
                prod.id === currentProduct.id ? { ...prod, name: values.name, price: values.price } : prod
            ));
            setCurrentProduct(null);
            setIsEditing(false);
        }
    };

    const handleDeleteProduct = (id: number) => {
        setProducts(products.filter(prod => prod.id !== id));
    };

    const handleCancelEdit = () => {
        setCurrentProduct(null);
        setIsEditing(false);
    };

  return (
    <div className={styles.container}>
        <h1>Product Management</h1>
        {isEditing && currentProduct ? (
            <ProductForm
                initialValues={{ name: currentProduct.name, price: currentProduct.price }}
                onSubmit={handleUpdateProduct}
                onCancel={handleCancelEdit}
            />
        ) : (
            <ProductForm
                initialValues={{ name: '', price: 0 }}
                onSubmit={handleAddProduct}
                onCancel={() => {}}
            />
        )}
        <ProductList
            products={products}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
        />
    </div>
  )
}
