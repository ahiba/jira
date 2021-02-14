import { useEffect } from 'react'
import {useAsync} from './use-async'
import { cleanObject } from './index'
import { Project } from '../screens/project-list/list'
import { useHttp } from './http'


export const useProjects = (param?:Partial<Project>) => {
    const client = useHttp()
    const { run, ...result } = useAsync<Project[]>()

    // client('projects', {data:cleanObject(useDebounceParam)})
    useEffect(() => {
        run(client('projects', {data:cleanObject(param || [])}))
    }, [param])

    return result
}