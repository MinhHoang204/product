import { Menu } from 'antd';
import { DashboardOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
export default function Sidebar() {
  return (
    <Menu theme="dark" mode="vertical" defaultSelectedKeys={['1']}>
      <Menu.Item key="1" icon={<DashboardOutlined />}>
        Dashboard
      </Menu.Item>
      <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
        Products
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        Customers
      </Menu.Item>
    </Menu>
  )
}
