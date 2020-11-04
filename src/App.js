import logo from './logo.svg';
import './App.css';
import React,{ Component } from 'react';
import Beforescroll from './components/Beforescroll';
import Afterscroll from './components/Afterscroll';
import './components/Beforescroll.css';
import './components/Afterscroll.css';


function App{
  state = {
    scrolling:false,
  }

  useEffect(()=>{
    window.addEventListener('scroll', this.handleScroll, true);
  });
  


  handleScroll = () => {
   if(window.scrollY >0 && this.state.scrolling == false){
    console.log(window.scrollY);
     this.setState({scrolling:true});
     console.log(this.state.scrolling);
   }else if (window.scrollY == 0 && this.state.scrolling == true) {
   this.setState({scrolling:false});
   }
}


  render(){
  return (
    <div className="App">
      {
      this.state.scrolling ? <Afterscroll /> : <Beforescroll />
      
      }   
      </div>
  );
}
}
export default App;
