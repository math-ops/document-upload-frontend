import React from 'react'
import { Route, BrowserRouter,  Switch} from 'react-router-dom'
import Documents from './components/Documents'
import Consulta from './components/Consulta'
import Login from './components/Login'
import GlobalStyle from './styles/global'
import Topbar from './components/Common/Topbar'
import Background from './components/Common/Background'


function App() {
  return (
    <>
      <BrowserRouter>
      <Topbar />
      <Background />
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/documents" exact component={Documents}/>
        <Route path="/consult" exact component={Consulta}/>
      </Switch>
      </BrowserRouter>

      <GlobalStyle />      
    </>
  );
}

export default App;
