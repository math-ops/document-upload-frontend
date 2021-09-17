import './background.css'
import { Box, Image } from './backgorund'
import bg1 from '../../../styles/assets/bg1.jpg'
// import bg2 from '../../../styles/assets/bg2.jpg'
// import bg3 from '../../../styles/assets/bg3.jpg'

export default function Background(){
  
 
  return(
    <>
    <Box className="background fade">
      <Image className="png" src={bg1}/>
      {/* <Image className="png" src={bg2}/>
      <Image className="png" src={bg3}/> */}
    </Box>
    </>
  )
}


