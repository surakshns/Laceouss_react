import React,{ Component } from 'react';
import Links from './links.js';




class Afterscroll extends Component{
    render(){
        return(
            <div className='bodyafter'>
                <audio id="backsong" autoPlay={true} >
                <source src="song.wav" type="audio/wav" />
                </audio>
                <video id="vid" muted loop autoPlay={true}>
                 <source src="MVI_4037.mp4" type="video/mp4" />
                </video>
                <h1 className='title'>Laceouss</h1>
                <a href="https://li.sten.to/laceouss" className="preorder" target="_blank"><span>L&nbsp;I&nbsp;S&nbsp;T&nbsp;E&nbsp;N</span></a>
                <br />

                 <ul className="text-center social">
                     {
                         Links.map((item,index)=>{
                             return(
                                <li key={index}>
                                    <a href={item.link} target="_blank"><i className={item.name} aria-hidden="true"></i></a>
                                </li>
                             )
                         })
                     }
                </ul>
                <ul className="leftlist">
                <a href="music.html"><li id="linecss">VIDEOS</li></a>
                <a href="music.html"><li id="linecss">MUSIC</li></a>
                </ul>
                <div className='ppandtc'>
                <a href="policy.html"><div className="pp">PRIVACY POLICY</div></a>
                <a href="t&c.html"><div className="tc">TERMS & CONDITIONS</div></a>
                </div>
                <a href=""><div id="spice">SPCE</div></a>
            </div>
        )
    }
}
export default Afterscroll;