import React, {Component} from 'react';
import './welcome.css';
import {FaGithub} from 'react-icons/fa';
import {AiOutlineLinkedin,AiOutlineYoutube} from 'react-icons/ai'



export default class Welcome extends Component{




  render(){

    
    const a = (name = "BAN EMBEE") =>{
      const g = name;
      return g;
    }
    const b = () => {
      const t = "Hey, what's up? My name is Mahamud, and I am a Hunter college student who majors in Computer Science and minors in Mathematics. I am also a programmer who codes mainly in Swift, and Javascript. I develop websites and IOS applications. My future goals are to implement machine learning on future projects. "
    return t;
    }


    return(
      <div className="App">
     
          





        <div class="slide-in-top"> 
        <div class="circle"></div> 
        <h3 class="font">{a()}</h3>
        <div class="container">         
        <div class="c1"> 
        <a href="https://github.com/mbabu94"><FaGithub/></a>
          </div>
        <div class="c2">
       <a href="https://www.linkedin.com/in/mahamudbabu/">
       <AiOutlineLinkedin/>
       </a>
	      </div>
         <div class="c3"> 
         <a href="https://www.youtube.com/channel/UCtymj5rk7YMAE2bHsdN0OUQ?view_as=subscriber"><AiOutlineYoutube/></a>
          </div>
          </div>
        <h4>{b()}</h4>
        
       
      
      

        
        <button class = "button" data-hover="Mahmudbabu94@gmail.com">Contact Me</button>
       </div>
        


      
        </div>

      

    );
  }
}
