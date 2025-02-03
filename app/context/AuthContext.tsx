'use client'

import { SessionProvider } from 'next-auth/react'

type AuthContextProps = {
  children: React.ReactNode
}

// 認証コンテキスト
const AuthContext = ({ children }: AuthContextProps) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default AuthContext

// TODO ここら辺の処理の親子関係(props)の理解