import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './userForm.css';
interface UserForm {
  onSubmit: (values: { email: string; password: string }) => void;
}
export default function UserForm(onSubmit:any) {
  const formik = useFormik({
    initialValues: {
        email: '',
        password: '',
    },
    validationSchema: Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required'),
    }),
    onSubmit,
  });
  return (
    <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
    <div className={styles.formField}>
        <label htmlFor="email">Email</label>
        <input
            id="email"
            type="email"
            {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email ? (
            <div className={styles.error}>{formik.errors.email}</div>
        ) : null}
    </div>
    <div className={styles.formField}>
        <label htmlFor="password">Password</label>
        <input
            id="password"
            type="password"
            {...formik.getFieldProps('password')}
        />
        {formik.touched.password && formik.errors.password ? (
            <div className={styles.error}>{formik.errors.password}</div>
        ) : null}
    </div>
    <button type="submit" className={styles.submitButton}>Add User</button>
    </form>
  )
}
