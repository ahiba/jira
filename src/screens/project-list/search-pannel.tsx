import React,{ useEffect, useState } from 'react'

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
            <input type="text" value={param.name} onChange={ev => setParam({
                ...param,
                name:ev.target.value
            })} />
            <select value={param.personId} onChange={ev => {
               setParam({
                    ...param,
                    personId: ev.target.value
                })
            }}>
                <option value={''}>负责人</option>
                {
                    users.map(user =>
                        <option key={user.id}  value={user.id}>{user.name}</option>)
                }
            </select>
        </div>
    </form>
}