import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./register.css"
export default function Register() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
  return (
    <form onSubmit={formik.handleSubmit}>
        <div>
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="email"
                {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
            ) : null}
        </div>
        <button type="submit">Login</button>
    </form>
  )
}
