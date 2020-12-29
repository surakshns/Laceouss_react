import React , { Component } from "react";
import Tilt from 'react-parallax-tilt';

class Beforescroll extends Component{
    render(){
        return(
            
            <div className="bodybefore">
            <Tilt>
            <div id='spice1'>SPICE</div>
            </Tilt>
            <div className="scrolldown">
		    <span></span>
		    <span></span>
		    <span></span>
	        </div>
            </div>
        )
    }
}
export default Beforescroll;