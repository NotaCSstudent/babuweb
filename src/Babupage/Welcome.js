import React, {Component} from 'react';
import './welcome.css'




export default class Welcome extends Component{




  render(){

    
    const a = (name = "Welcome :)") =>{
      const g = name;
      return g;
    }

    return(
      <div className="App">

        
        <div class="slide-in-top"> 
        <div class="circle"></div> 
        <h3>{a()}</h3>
       
      <button class = "button">Click for more</button>

        </div>
      
       
        


      </div>


    );
  }
}
