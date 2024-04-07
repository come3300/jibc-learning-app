'use client'

import { IconType } from 'react-icons'

type ButtonProps = {
  label: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  outline?: boolean
  del?: boolean
  icon?: IconType
}

// ボタン
const Button: React.FC<ButtonProps> = ({ label, onClick, disabled, outline, del, icon: Icon }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      // ホームのサインアップのボタンのデザインがこちら
      className={`inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base
      ${
        outline
          ? 'border-neutral-400 bg-white text-black'
          : del
          ? 'border-red-500 bg-red-500 text-white'
          : 'border-sky-500 bg-sky-500 text-white'
      }
      `}
    >
      {Icon && <Icon size={24} className="absolute left-4" />}
      {label}
    </button>
  )
}

export default Button
