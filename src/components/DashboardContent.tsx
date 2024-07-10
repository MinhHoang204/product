import { Row, Col, Card, Statistic } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, DollarOutlined, UserOutlined, ShoppingOutlined } from '@ant-design/icons';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './dashboardContent.css';
export default function DashboardContent() {
    const data = [
      { name: '03 Wed', Earnings: 30, Costs: 20 },
      { name: '04 Thu', Earnings: 40, Costs: 30 },
    ];
  return (
    <>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic
              title="Total Sales"
              value={9328.55}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<DollarOutlined />}
              suffix={<ArrowUpOutlined />}
            />
            <div className="card-footer">+15.6% +1.4k this week</div>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Visitors"
              value={12302}
              precision={0}
              valueStyle={{ color: '#3f8600' }}
              prefix={<UserOutlined />}
              suffix={<ArrowUpOutlined />}
            />
            <div className="card-footer">+12.7% +1.2k this week</div>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Orders"
              value={963}
              precision={0}
              valueStyle={{ color: '#cf1322' }}
              prefix={<ShoppingOutlined />}
              suffix={<ArrowDownOutlined />}
            />
            <div className="card-footer">-12.7% -213</div>
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: '20px' }}>
        <Col span={16}>
          <Card title="Sales Performance">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Earnings" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Costs" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Top Categories">
            <div style={{ textAlign: 'center', fontSize: '24px' }}>$6.2k</div>
          </Card>
        </Col>
      </Row>
    </>
  )
}
