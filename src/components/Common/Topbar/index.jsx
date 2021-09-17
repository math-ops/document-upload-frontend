import { Header, Image, Title, Logout, Home } from './topbar'
import logo from '../../../styles/assets/logo.png'

export default function Topbar(){
  const name = 'Matheus Pereira';
  return(
    <>
    <Header>
      <Image src={logo}/>
      <Title>
        Bem vindo(a) {name}!
      </Title>
      <Home>Home</Home>
      <Logout>Logout</Logout>      
    </Header>
    </>
  )
}
