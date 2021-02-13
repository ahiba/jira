import { ReactNode } from 'react'
import { AuthProvider } from './auth-context'

export const AppProvider = ({children}:{children:ReactNode}) => {
     // @ts-ignore
    return <AuthProvider>{children}</AuthProvider>
}
