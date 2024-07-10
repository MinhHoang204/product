import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './ProductForm.module.css';
interface ProductForm {
    initialValues: { name: string, price: number };
    onSubmit: (values: { name: string, price: number }) => void;
    onCancel: () => void;
}
export default function ProductForm(initialValues:any, onSubmit:any, onCancel:any) {
    const formik = useFormik({
        initialValues,
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            price: Yup.number().required('Required').positive('Must be positive').integer('Must be an integer'),
        }),
        onSubmit,
    });
  return (
    <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
        <div className={styles.formField}>
            <label htmlFor="name">Product Name</label>
            <input
                id="name"
                type="text"
                {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name ? (
                <div className={styles.error}>{formik.errors.name}</div>
            ) : null}
        </div>
        <div className={styles.formField}>
            <label htmlFor="price">Price</label>
            <input
                id="price"
                type="number"
                {...formik.getFieldProps('price')}
            />
            {formik.touched.price && formik.errors.price ? (
                <div className={styles.error}>{formik.errors.price}</div>
            ) : null}
        </div>
        <div className={styles.buttonGroup}>
            <button type="submit" className={styles.submitButton}>Save</button>
            <button type="button" className={styles.cancelButton} onClick={onCancel}>Cancel</button>
        </div>
    </form>
  )
}
