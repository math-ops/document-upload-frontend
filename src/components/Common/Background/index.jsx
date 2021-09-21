import './background.css'
import { Slider, Slides, Button, AutoButton, Slide, Image, AutoSlide, Navigation, ManualButton } from './backgorund'
import bg1 from '../../../styles/assets/bg1.jpg'
import bg2 from '../../../styles/assets/bg2.jpg'
import bg3 from '../../../styles/assets/bg3.jpg'
import Login from '../../Login'

export default function Background(){

  var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 3 ){
        counter = 1;
    }
}, 4000);

  return(
    <>
    <Login />
    <Slider>
      <Slides>
        <Button type="radio" name="radio-btn" id="radio1"/>
        <Button type="radio" name="radio-btn" id="radio2"/>
        <Button type="radio" name="radio-btn" id="radio3"/>

        <Slide className="first">
          <Image src={bg1}/>
        </Slide>

        <Slide>
          <Image src={bg2}/>
        </Slide>

        <Slide>
          <Image src={bg3}/>
        </Slide>

        <AutoSlide className="autoslide">
          <AutoButton className="auto-btn1"/>
          <AutoButton className="auto-btn2"/>
          <AutoButton className="auto-btn3"/>

        </AutoSlide>

      </Slides>

      <Navigation>
        <ManualButton className="manual-btn" for="radio1"></ManualButton>
        <ManualButton className="manual-btn" for="radio2"></ManualButton>
        <ManualButton className="manual-btn" for="radio3"></ManualButton>
      </Navigation>
    </Slider>
    
    

    </>
  )
}


