import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({
  className,
  variant = 'default',
  size = 'md',
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'font-medium rounded-lg transition-colors flex items-center justify-center gap-2 border',
        {
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-2.5 text-base': size === 'md',
          'px-8 py-3 text-lg': size === 'lg',
          'bg-blue-600 text-white border-blue-600 hover:bg-blue-700':
            variant === 'default',
          'bg-white text-gray-800 border-gray-300 hover:bg-gray-50':
            variant === 'outline',
          'bg-transparent text-gray-800 border-transparent hover:bg-gray-100':
            variant === 'ghost',
          'bg-green-600 text-white border-green-600 hover:bg-green-700':
            variant === 'secondary',
        },
        className
      )}
      {...props}
    />
  )
}
