import { useState } from 'react';
import CategoryForm from '../../components/CategoryForm';
import CategoryList from '../../components/CategoryList';
import styles from './CategoryManagementPage.module.css';
interface Category {
    id: number;
    name: string;
}
export default function CategoryManagementPage() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
    const [isEditing, setIsEditing] = useState(false);

    const handleAddCategory = (values: { name: string }) => {
        const newCategory: Category = {
            id: categories.length + 1,
            name: values.name,
        };
        setCategories([...categories, newCategory]);
    };

    const handleEditCategory = (id: number) => {
        const category = categories.find(cat => cat.id === id);
        if (category) {
            setCurrentCategory(category);
            setIsEditing(true);
        }
    };

    const handleUpdateCategory = (values: { name: string }) => {
        if (currentCategory) {
            setCategories(categories.map(cat => 
                cat.id === currentCategory.id ? { ...cat, name: values.name } : cat
            ));
            setCurrentCategory(null);
            setIsEditing(false);
        }
    };

    const handleDeleteCategory = (id: number) => {
        setCategories(categories.filter(cat => cat.id !== id));
    };

    const handleCancelEdit = () => {
        setCurrentCategory(null);
        setIsEditing(false);
    };
  return (
    <div className={styles.container}>
        <h1>Category Management</h1>
        {isEditing && currentCategory ? (
            <CategoryForm
                initialValues={{ name: currentCategory.name }}
                onSubmit={handleUpdateCategory}
                onCancel={handleCancelEdit}
            />
        ) : (
            <CategoryForm
                initialValues={{ name: '' }}
                onSubmit={handleAddCategory}
                onCancel={() => {}}
            />
        )}
        <CategoryList 
            categories={categories} 
            onEdit={handleEditCategory} 
            onDelete={handleDeleteCategory} 
        />
    </div>
  )
}
