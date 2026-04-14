import { useNavigate } from 'react-router'
import { LayoutDashboard, Package, Layers, ShoppingCart, Users, BarChart3, ArrowUp, Zap, LogOut } from 'lucide-react'
import { Card } from '../components/ui/Card'
import { useAuth } from '../context/AuthContext'

export default function Dashboard() {
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  // Redirigir al login si no hay usuario autenticado
  if (!user) {
    navigate('/login')
    return null
  }

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard', active: true },
    { icon: Package, label: 'Productos', href: '/productos', active: false },
    { icon: Layers, label: 'Inventario', href: '/inventario', active: false },
    { icon: ShoppingCart, label: 'Pedidos', href: '/pedidos', active: false },
    { icon: Users, label: 'Clientes', href: '/clientes', active: false },
    { icon: BarChart3, label: 'Reportes', href: '/reportes', active: false },
  ]

  const stats = [
    {
      title: 'Productos Totales',
      value: '5',
      change: '+12%',
      changeText: 'vs mes anterior',
      icon: Package,
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Pedidos del Mes',
      value: '2',
      change: '+23%',
      changeText: 'vs mes anterior',
      icon: ShoppingCart,
      bgColor: 'bg-orange-100',
    },
    {
      title: 'Clientes Activos',
      value: '4',
      change: '+8%',
      changeText: 'vs mes anterior',
      icon: Users,
      bgColor: 'bg-yellow-100',
    },
    {
      title: 'Ingresos del Mes',
      value: '$868K',
      change: '+15%',
      changeText: 'vs mes anterior',
      icon: ArrowUp,
      bgColor: 'bg-green-100',
    },
  ]

  const recentOrders = [
    { name: 'Carlos Martínez', order: 'ORD-001', products: 2, amount: '$378,000', status: 'Completado', statusColor: 'text-green-600' },
    { name: 'María González', order: 'ORD-002', products: 1, amount: '$189,000', status: 'Pendiente', statusColor: 'text-yellow-600' },
    { name: 'Juan Rodríguez', order: 'ORD-003', products: 3, amount: '$490,000', status: 'Completado', statusColor: 'text-green-600' },
    { name: 'Ana López', order: 'ORD-004', products: 1, amount: '$95,000', status: 'Cancelado', statusColor: 'text-red-600' },
  ]

  const lowStockProducts = [
    { name: 'Raqueta de Tenis Pro', category: 'Equipamiento', units: '15 unidades', color: 'bg-yellow-100' },
    { name: 'Pesas Ajustables 20kg', category: 'Equipamiento', units: '18 unidades', color: 'bg-yellow-100' },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-500 to-orange-500 p-2 rounded-lg">
              <Zap className="text-white" size={24} strokeWidth={3} />
            </div>
            <div>
              <div className="font-bold text-lg text-gray-900">Run Sport</div>
              <div className="text-sm text-orange-600 font-semibold">GT NEIVA</div>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  item.active
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </a>
            )
          })}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
              AD
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm text-gray-900">Administrador</p>
              <p className="text-xs text-gray-600 truncate">{user?.email || 'admin@runsport.com'}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-sm font-medium"
          >
            <LogOut size={18} />
            Cerrar Sesión
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Bienvenido al panel de control de Run Sport GT Neiva</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-3 flex-1">
                    <p className="text-sm text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <div className="flex items-center gap-1 text-sm">
                      <ArrowUp size={14} className="text-green-600" />
                      <span className="text-green-600 font-medium">{stat.change}</span>
                      <span className="text-gray-500">{stat.changeText}</span>
                    </div>
                  </div>
                  <div className={`${stat.bgColor} p-3 rounded-lg`}>
                    <Icon size={24} className="text-gray-700" />
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Orders */}
          <Card className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Pedidos Recientes</h2>
            <div className="space-y-4">
              {recentOrders.map((order, index) => (
                <div key={index} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0">
                  <div>
                    <p className="font-semibold text-gray-900">{order.name}</p>
                    <p className="text-sm text-gray-600">
                      {order.order} • {order.products} productos
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{order.amount}</p>
                    <p className={`text-sm font-medium ${order.statusColor}`}>{order.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Low Stock Products */}
          <Card className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Productos con Stock Bajo</h2>
            <div className="space-y-4">
              {lowStockProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0">
                  <div className="flex items-center gap-3 flex-1">
                    <div className={`w-12 h-12 ${product.color} rounded-lg`}></div>
                    <div>
                      <p className="font-semibold text-gray-900">{product.name}</p>
                      <p className="text-sm text-gray-600">{product.category}</p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-yellow-600">{product.units}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
