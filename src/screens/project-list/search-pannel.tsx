import React,{ useEffect, useState } from 'react'
import { Input, Select } from 'antd'

export interface User {
    id: string;
    name: string;
    email: string;
    title: string;
    orgamization: string;
    token: string;
}
interface SearchPannelProps {
    users: User[],
    param: {
        name: string;
        personId: string;
    },
    setParam: (param: SearchPannelProps['param']) => void;
}
export const SearchPannel = ({ users, param, setParam }: SearchPannelProps) => {

    return <form>
        <div>
            <Input type="text" value={param.name} onChange={ev => setParam({
                ...param,
                name:ev.target.value
            })} />
            <Select value={param.personId} onChange={value => {
               setParam({
                    ...param,
                    personId: value
                })
            }}>
                <Select.Option value={''}>负责人</Select.Option>
                {
                    users.map(user =>
                        <Select.Option key={user.id}  value={user.id}>{user.name}</Select.Option>)
                }
            </Select>
        </div>
    </form>
}