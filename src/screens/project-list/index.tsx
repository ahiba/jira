import React,{ useState, useEffect } from 'react'
import { SearchPannel } from "./search-pannel"
import { List } from './list'
import { cleanObject, useMount, useDebounce } from '../../utils'
import  QS from 'qs'
import { useHttp } from '../../utils/http'
import { Table } from 'antd'
import { useAsync } from '../../utils/use-async'
import { Project } from './list'
import { useProjects } from '../../utils/project'
import { useUsers } from '../../utils/user'

const apiUrl = process.env.REACT_APP_API_URL
console.log('process.env', process.env)

export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const useDebounceParam = useDebounce(param, 2000)
    const client = useHttp()
    const {isLoading, error, data: list } = useProjects(useDebounceParam)

    const { data: users } = useUsers()
    return (
        <div>
            <SearchPannel users={users || []} param={param} setParam={setParam}/>
            <List loading={isLoading} users={users || []} dataSource={list || []}/>
        </div>
    )
}