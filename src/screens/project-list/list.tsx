import React from 'react'
import { User } from './search-pannel'
import { Table, TableProps } from 'antd'
export interface Project {
    id: string;
    name: string;
    personId: string;
    pin: boolean;
    organization: string;
}
interface ListProps extends TableProps<Project> {
    // list: Project[],
    users: User[]

}
export const List = ({users, ...props}: ListProps) => {
    return <Table pagination={false} columns={[{
        title: '名称',
        dataIndex: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name)
    }, {
        title: '负责人',
        render(value, project) {
            return (
                <span>
                    {users.find(user => user.id === project.personId)?.name}
                </span>
            )
        }
    }]} 
    {
        ...props
    } />
    // return <table>
    //     <thead>
    //         <tr>
    //             <th>名称</th>
    //             <th>负责人</th>
    //         </tr>
    //     </thead>
    //     <tbody>
    //         {
    //             list.map(project => <tr key={project.id}>
    //                 <td>{project.name}</td>
    //                 <td>{users.find(user => user.id === project.personId)?.name}</td>
    //             </tr>)
    //         }
    //     </tbody>
    // </table>
}