import './background.css'
import { Container, Box, Image } from './backgorund'
import bg1 from '../../../styles/assets/bg1.jpg'
// import bg2 from '../../../styles/assets/bg2.jpg'
// import bg3 from '../../../styles/assets/bg3.jpg'

export default function Background(){
  
  return(
    <>
    
    <Container className="slideshow">
    <Box className="background fade">
      <Image className="png" src={bg1}/>
    </Box>
    </Container>
    
    </>
  )
}


