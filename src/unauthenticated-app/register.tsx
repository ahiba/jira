import React from 'react'
import { cleanObject, useMount, useDebounce } from '../utils'
import  QS from 'qs'
import { useAuth } from '../context/auth-context'
import  { Form, Input, Button } from 'antd'

const apiUrl = process.env.REACT_APP_API_URL
console.log('process.env', process.env)
export const RegisterScreen = ({onError}:{onError:(error:Error) => void}) => {
    const { register, user } = useAuth()
    // const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault()
    //     const username = (event.currentTarget.elements[0] as HTMLInputElement).value    
    //     const password = (event.currentTarget.elements[1] as HTMLInputElement).value 
    //     register({username, password})
    // }
    const handleSubmit = async (values:{username:string, password:string}) => {
        try {
           await register(values)
        } catch(e) {
            onError(e)
        }
    }
    return <Form onFinish={handleSubmit}>
        <Form.Item name={'username'} rules={[{required: true, message: '请输入用户名'}]}>
            <Input placeholder="用户名" type="text" id={'username'} />
        </Form.Item>
        <Form.Item name={'password'}  rules={[{required: true, message: '请输入密码'}]}>
            <Input placeholder="密码" type="password" id={'passwrod'} />
        </Form.Item>
        <Form.Item>
            <Button type={'primary'} htmlType={'submit'}>注册</Button>
        </Form.Item>
    </Form>
}