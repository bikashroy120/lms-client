import React from 'react'
import useAuth from './useAuth'
import { redirect } from 'next/navigation'

type Props = {
  children:React.ReactNode
}

const useProtected = ({children}: Props) => {
  const isAuthenticated = useAuth()
  return isAuthenticated ? children : redirect("/")
}

export default useProtected