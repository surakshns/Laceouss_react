import React,{ Component } from 'react';
import Beforescroll from './components/Beforescroll';
import Afterscroll from './components/Afterscroll';
import './components/Beforescroll.css';
import './components/Afterscroll.css';
import './App.css';


class App extends Component{
  state = {
    scrolling:true,
  }
  
  method(){
    window.addEventListener('scroll', this.componentDidUpdate);
  }

  componentDidMount(){
    this.setState({scrolling:false});
  }
  componentDidUpdate=()=>{
   if(window.scrollY >0 && this.state.scrolling === false){
     this.setState({scrolling:true});
   }else if (window.scrollY === 0 && this.state.scrolling === true) {
   this.setState({scrolling:false});
   }
}


  render(){
  return (
    <div className="App" onChange={this.method()}>
      {
      this.state.scrolling ? <Afterscroll /> : <Beforescroll />
      }   
      </div>
  );
}
}
export default App;
