import { useEffect } from 'react'
import {useAsync} from './use-async'
import { cleanObject } from './index'
import { User } from '../screens/project-list/search-pannel'
import { useHttp } from './http'

export const useUsers = (param?: Partial<User>) => {
    const client = useHttp()
    const { run, ...result } = useAsync<User[]>()

    // client('projects', {data:cleanObject(useDebounceParam)})
    useEffect(() => {
        run(client('users', {data:cleanObject(param || {})}))
    }, [param])

    return result
}