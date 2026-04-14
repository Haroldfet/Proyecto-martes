import { createContext, useContext, useState, ReactNode } from 'react'

interface User {
  email: string
  name: string
  store: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string, name?: string) => void
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    // Recuperar usuario de localStorage si existe
    const savedUser = localStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  const login = (email: string, password: string, name: string = 'Usuario') => {
    const userData: User = {
      email,
      name,
      store: 'Proyecto Optativa',
    }
    setUser(userData)
    // Guardar en localStorage
    localStorage.setItem('user', JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth debe usarse dentro de AuthProvider')
  }
  return context
}
