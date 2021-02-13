import React,{ useState, useEffect } from 'react'
import { SearchPannel } from "./search-pannel"
import { List } from './list'
import { cleanObject, useMount, useDebounce } from '../../utils'
import  QS from 'qs'
import { useHttp } from '../../utils/http'
import { Table } from 'antd'

const apiUrl = process.env.REACT_APP_API_URL
console.log('process.env', process.env)

export const ProjectListScreen = () => {
    const [users, setUsers] = useState([])

    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [list, setList] = useState([])
    const useDebounceParam = useDebounce(param, 2000)
    const client = useHttp()
    client('projects', {data:cleanObject(useDebounceParam)})
    useEffect(() => {
        client('projects', {data:cleanObject(useDebounceParam)}).then(setList)
    }, [useDebounceParam])

    useMount(() => {
        client('users').then(setUsers)
    })
    return (
        <div>
            <SearchPannel users={users} param={param} setParam={setParam}/>
            <List users={users} list={list}/>
        </div>
    )
}