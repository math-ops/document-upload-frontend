import React from 'react'
import { Route, BrowserRouter,  Switch} from 'react-router-dom'
import Documents from './components/Documents'
import Consulta from './components/Consulta'
// import Login from './components/Login'
import GlobalStyle from './styles/global'
import Topbar from './components/Common/Topbar'
import Background from './components/Common/Background'
import Footer from './components/Common/Footer'


function App() {
  return (
    <>
      <BrowserRouter>
      <Switch>   
        <Route path="/" exact component={Background}/>    
      <Topbar />
      
        <Route path="/consult" exact component={Consulta}/>
        <Route path="/documents" exact component={Documents}/>
      </Switch>
      </BrowserRouter>

      <Footer />

      <GlobalStyle />      
    </>
  );
}

export default App;
