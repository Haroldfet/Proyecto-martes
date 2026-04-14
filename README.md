# Proyecto Optativa

Un proyecto React + TypeScript con autenticación usando Context API y localStorage.

## Características

- **Autenticación Local**: Sistema de login con almacenamiento en localStorage
- **Context API**: Compartición de datos entre páginas sin props drilling
- **Interfaz Moderna**: Diseño limpio con Tailwind CSS
- **Persistencia de Sesión**: se mantiene autenticado al refrescar

## Instalación

```bash
# Instalar dependencias
npm install
# o
pnpm install
```

## Desarrollo

```bash
npm run dev
# o
pnpm dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Estructura del Proyecto

```
src/
├── components/
│   ├── ui/              # Componentes reutilizables
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Card.tsx
│   └── Layout.tsx
├── context/
│   └── AuthContext.tsx  # Contexto de autenticación
├── pages/
│   ├── Login.tsx        # Página de inicio de sesión
│   └── Dashboard.tsx    # Panel principal
├── App.tsx
├── main.tsx
└── routes.ts            # Configuración de rutas
```

## cómo Funciona la Autenticación

1. **Login**: El usuario completa el formulario y sus datos se guardan en:
   - **React Context** (memoria de la aplicación)
   - **localStorage** (almacenamiento persistente)

2. **Dashboard**: Accede a los datos del usuario desde el contexto

3. **Persistencia**: Al refrescar la página, el usuario se mantiene autenticado

4. **Logout**: Se limpian los datos del contexto y localStorage

## Tecnologías

- React 18
- TypeScript
- React Router v7
- Tailwind CSS
- Vite
- Lucide Icons

## Notas

- El sistema es completamente local (sin backend)
- Los datos se guardan en localStorage del navegador

