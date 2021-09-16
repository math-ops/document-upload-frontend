import { Header, Image, Title, Subtitle } from './topbar'
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
      <Subtitle>Logout</Subtitle>      
    </Header>
    </>
  )
}
