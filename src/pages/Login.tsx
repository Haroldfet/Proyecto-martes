import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Mail, Lock, Eye, EyeOff, Activity, Award, TrendingUp, Zap } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Label } from '../components/ui/Label'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Guardar datos en el contexto y localStorage
    login(email, password, name)
    // Redirigir al dashboard
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(249, 115, 22, 0.8) 100%), url("https://images.unsplash.com/photo-1644001992668-3b9ed080533a?w=1080&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col justify-between p-12 w-full text-white">
          {/* Logo at top */}
          <div>
            <div className="mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-blue-500 to-orange-500 p-3 rounded-lg">
                  <Zap className="text-white" size={32} strokeWidth={3} />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-3xl font-bold tracking-tight">
                    Run Sport
                  </span>
                  <span className="text-lg font-semibold tracking-wider text-orange-300">
                    GT NEIVA
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle content */}
          <div className="space-y-8">
            <h1 className="text-5xl font-bold leading-tight">
              Tu pasión por el deporte comienza aquí
            </h1>
            <p className="text-xl text-white/90 max-w-md">
              Sistema de gestión integral para tu tienda deportiva. Controla inventario, ventas y clientes en un solo lugar.
            </p>

            {/* Features */}
            <div className="space-y-4 mt-12">
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="bg-blue-400 p-3 rounded-lg">
                  <Activity className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Gestión de Inventario</h3>
                  <p className="text-sm text-white/80">Control total de tus productos deportivos</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="bg-blue-400 p-3 rounded-lg">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Seguimiento de Ventas</h3>
                  <p className="text-sm text-white/80">Reportes detallados en tiempo real</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="bg-blue-400 p-3 rounded-lg">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Analytics Avanzados</h3>
                  <p className="text-sm text-white/80">Toma decisiones basadas en datos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom text */}
          <div className="text-sm text-white/70">
            © 2026 Run Sport GT Neiva. Todos los derechos reservados.
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-slate-900">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-white">
              ¡Bienvenido!
            </h2>
            <p className="text-gray-300">
              Inicia sesión para acceder al sistema
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                Nombre
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Tu nombre completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Correo Electrónico
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">
                Contraseña
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-400 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-500 text-blue-600" />
                <span className="text-sm text-gray-300">Recordarme</span>
              </label>
              <a href="#" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <Button type="submit" className="w-full">
              Iniciar Sesión
            </Button>

            <p className="text-center text-sm text-gray-300">
              ¿No tienes una cuenta?{' '}
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                Contacta al administrador
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
