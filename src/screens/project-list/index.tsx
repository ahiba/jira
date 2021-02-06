import React,{ useState, useEffect } from 'react'
import { SearchPannel } from "./search-pannel"
import { List } from './list'
import { cleanObject, useMount, useDebounce } from '../../utils'
import  QS from 'qs'

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
    useEffect(() => {
        fetch(`${apiUrl}/projects?${QS.stringify(cleanObject(useDebounceParam))}`).then(async response => {
            if(response.ok) {
                setList(await response.json())
            }
        })
    }, [useDebounceParam])

    useMount(() => {
        fetch(`${apiUrl}/users`).then(async response => {
            if(response.ok) {
                setUsers(await response.json())
            }
        })

    })
    return (
        <div>
            <SearchPannel users={users} param={param} setParam={setParam}/>
            <List users={users} list={list}/>
        </div>
    )
}