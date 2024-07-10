import LoginPage from './pages/admin/LoginPage'
import SettingsPage from './pages/admin/SettingsPage'
import AdminPage from './pages/admin/AdminPage'
import UsersPage from './pages/user/UsersPage'
import RegisterPage from './pages/admin/RegisterPage'
import UserManagementPage from './pages/user/UserManagementPage'
import CategoryManagementPage from './pages/category/CategoryManagementPage'
import ProductManagementPage from './pages/products/ProductManagementPage'

export default function App() {
  return (
    <div>App
      <AdminPage></AdminPage>
      <LoginPage></LoginPage>
      <RegisterPage></RegisterPage>
      <SettingsPage></SettingsPage>
      <UsersPage></UsersPage>
      <UserManagementPage></UserManagementPage>
      <CategoryManagementPage></CategoryManagementPage>
      <ProductManagementPage></ProductManagementPage>
    </div>
  )
}
