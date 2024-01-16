import React from 'react'
import { redirect } from 'next/navigation'
import useAdmin from './useAdmin'

type Props = {
  children:React.ReactNode
}

const useAdminProtected = ({children}: Props) => {
  const isAuthenticated = useAdmin()
  return isAuthenticated ? children : redirect("/")
}

export default useAdminProtected