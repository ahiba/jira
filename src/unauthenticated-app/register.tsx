import React from 'react'
import { cleanObject, useMount, useDebounce } from '../utils'
import  QS from 'qs'
import { useAuth } from '../context/auth-context'

const apiUrl = process.env.REACT_APP_API_URL
console.log('process.env', process.env)
export const RegisterScreen = () => {
    const { register, user } = useAuth()
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const username = (event.currentTarget.elements[0] as HTMLInputElement).value    
        const password = (event.currentTarget.elements[1] as HTMLInputElement).value 
        register({username, password})
    }
    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="usename">用户名</label>
            <input type="text" id={'username'} />
        </div>
        <div>
            <label htmlFor="password">密码</label>
            <input type="password" id={'passwrod'} />
        </div>
        <button type={'submit'}>注册</button>
    </form>
}