interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={`block text-sm font-medium text-gray-800 mb-2 ${className || ''}`}
      {...props}
    />
  )
}
