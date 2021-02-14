import React from 'react'
import { ProjectListScreen } from './screens/project-list'
import {useAuth } from './context/auth-context'
import styled from '@emotion/styled'
import { Row } from './components/lib'

export const AuthenticatedApp = () => {
    const { logout } = useAuth()
    return (
        <div>
            <Header between={true}>
                <HeaderLeft gap={true}>
                    <h2>logo</h2>
                    <h2>项目</h2>
                </HeaderLeft>
                <HeaderRight>
                    <button onClick={logout}>登出</button>
                </HeaderRight>
            </Header>
            <Main>
                <ProjectListScreen />
            </Main>
           
        </div>
    )
} 

const HeaderItem = styled.h3`
    margin-right:3rem
`
const Header = styled(Row)`
    /* display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between; */
`
const HeaderLeft = styled(Row)`
    display: flex;
    align-items: center;
`
const HeaderRight = styled.div``
const Main = styled.main``