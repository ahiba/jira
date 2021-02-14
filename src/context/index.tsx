import { ReactNode } from 'react'
import { AuthProvider } from './auth-context'
// import { QueryClientProvider, QueryClient } from 'react-query'
export const AppProvider = ({children}:{children:ReactNode}) => {
     // @ts-ignore
    return (
        <AuthProvider>{children}</AuthProvider>
    )
}
