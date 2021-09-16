import React from 'react'
import { Route, BrowserRouter,  Switch} from 'react-router-dom'
import Documents from './components/Documents'
import Consulta from './components/Consulta'
import Login from './components/Login'
import GlobalStyle from './styles/global'
import Topbar from './components/Common/Topbar'


function App() {
  return (
    <>
      <BrowserRouter>
      <Topbar />
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/documents" exact component={Documents}/>
      </Switch>
      </BrowserRouter>

      <GlobalStyle />      
    </>
  );
}

export default App;
