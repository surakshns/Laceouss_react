import React,{ Component } from 'react';
import Beforescroll from './components/Beforescroll';
import Afterscroll from './components/Afterscroll';
import './components/Beforescroll.css';
import './components/Afterscroll.css';
import './App.css';


class App extends Component{
  state = {
    scrolling:false,
  }
  
  //   window.addEventListener('scroll', this.handleScroll, true);
  // }
   

componentWillMount(){
  window.addEventListener('scroll', (Event) = () => {
   if(window.scrollY >0 && this.state.scrolling === false){
    console.log(window.scrollY);
     this.setState({scrolling:true});
     console.log(this.state.scrolling);
   }else if (window.scrollY === 0 && this.state.scrolling === true) {
   this.setState({scrolling:false});
   }
})
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
