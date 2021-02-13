import React from 'react'
import { cleanObject, useMount, useDebounce } from '../utils'
import  QS from 'qs'
import { useAuth } from '../context/auth-context'
import  { Form, Input, Button } from 'antd'

const apiUrl = process.env.REACT_APP_API_URL
console.log('process.env', process.env)
export const LoginScreen = () => {
    const { login, user } = useAuth()
    // const login = (param: {username: string, password: string}) => {
    //     fetch(`${apiUrl}/login`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(param)
    //     }).then(async response => {
    //         if(response.ok) {
                
    //         }
    //     })
    // }
    const handleSubmit = (values:{username:string, password:string}) => {
        login(values)
    }
    return <Form onFinish={handleSubmit}>
        <Form.Item name={'username'} rules={[{required: true, message: '请输入用户名'}]}>
            <Input placeholder="用户名" type="text" id={'username'} />
        </Form.Item>
        <Form.Item name={'password'}  rules={[{required: true, message: '请输入密码'}]}>
            <Input placeholder={'密码'} type="password" id={'passwrod'}  />
        </Form.Item>
        <Form.Item>
            <Button type={'primary'} htmlType={'submit'}>登录</Button>
        </Form.Item>
    </Form>
}