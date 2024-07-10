import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './CategoryForm.module.css';
interface CategoryForm {
    initialValues: { name: string };
    onSubmit: (values: { name: string }) => void;
    onCancel: () => void;
}
export default function CategoryForm(initialValues:any, onSubmit:any, onCancel:any) {
    const formik = useFormik({
        initialValues,
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
        }),
        onSubmit,
    });
  return (
    <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
        <div className={styles.formField}>
            <label htmlFor="name">Category Name</label>
            <input
                id="name"
                type="text"
                {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name ? (
                <div className={styles.error}>{formik.errors.name}</div>
            ) : null}
        </div>
            <div className={styles.buttonGroup}>
                <button type="submit" className={styles.submitButton}>Save</button>
                <button type="button" className={styles.cancelButton} onClick={onCancel}>Cancel</button>
            </div>
    </form>
  )
}
