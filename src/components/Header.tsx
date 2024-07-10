import { Layout, Input, Avatar, Badge } from 'antd';
import { BellOutlined, SearchOutlined } from '@ant-design/icons';
import "./header.css"
export default function Header() {
    const { Header: AntHeader } = Layout;
  return (
    <AntHeader className="site-layout-background" style={{ padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <h2>Welcome back, Rikkei Academy</h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Input placeholder="Search" prefix={<SearchOutlined />} style={{ width: 200, marginRight: 20 }} />
        <Badge count={4}>
          <BellOutlined style={{ fontSize: '20px', marginRight: 20 }} />
        </Badge>
        <Avatar src="https://joeschmoe.io/api/v1/random" />
      </div>
    </AntHeader>
  )
}
