import DashboardContent from '../../components/DashboardContent'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'

export default function AdminPage() {
  return (
    <div>
        <Header />
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <main>
                    <DashboardContent />
                </main>
            </div>
    </div>
  )
}
