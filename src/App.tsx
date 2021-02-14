import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ProjectListScreen} from './screens/project-list/index'; 
import { LoginScreen } from './screens/login';
import { useAuth } from './context/auth-context'
import { AuthenticatedApp } from './authenticated-app';
import { UnauthenticatedApp } from './unauthenticated-app';
// import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';
import { ErrorBoundary } from './components/error-boundary'
import { FullPageErrorFallback } from './components/lib';

function App() {
  const { user } = useAuth()
  return (
    <div>
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
        { user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </ErrorBoundary>
    </div>
  );
}

export default App;
