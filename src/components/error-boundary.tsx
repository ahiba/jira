import React, { Children, ReactNode } from 'react'

// children
// fallbackRender
type FallbackRender = (props: { error:Error | null}) => React.ReactElement
export class ErrorBoundary extends React.Component<{children:ReactNode, fallbackRender:FallbackRender}, {error: Error |null}> {
    state = {error: null}
    
    // 当子组件抛出异常，这里会接收到并且调用
    static getDerivedStateFromError(error:Error) {
        
        console.log('捕获到错误1')
        return {error}
    }
    componentDidCatch() {
        console.log('捕获到错误2')
    }

    render() {
        const {error} = this.state 
        const { fallbackRender, children } = this.props
        if(error) {
            return fallbackRender({error})
        }
        return children
    }
}