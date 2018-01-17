import React from 'react'
import './app.css'
import Img from './images/5.jpg'
import Img1 from './images/1.jpg'
import Img2 from './images/2.jpg'
import Img3 from './images/3.jpg'
import Img4 from './images/4.jpg'
class App extends React.Component {
  state={
    num:0,
    pic:[Img,Img1,Img2,Img3,Img4]
  }
  handleNum = (ind) => {
    let {num} = this.state
    if(num===-1){
      num=2
    }
    if(!((ind === -1 && num === 0) || (ind === 1 && num === 4))){
    this.setState({
      num : num+ind
    })
    }
  }
handleClick = ind => {
  this.setState({
    num:ind
  })
}
timer=()=>{
  return setInterval(()=>{
    let{num}=this.state
    num++
    if(num===5){
      num=0
    }
    this.setState({
      num:num
    })
  },1750)
}
componentDidMount() {
  this.loop=this.timer()
}
handleEnter=()=>{
  clearInterval(this.loop)
}
handleLeave=()=>{
  this.loop=this.timer()
}
  render () {
    let {num} = this.state
    let {pic}=this.state
    let num1= `${num * -500}px`
    let picP=pic.map((item,index)=>{
      return(
        <img src={item} key={item} alt='1'></img>
      )
    })
    let one=pic.map((item,index)=>{
      return(
        <span className={this.state.num===index?'active':''} key={index} onClick={()=>this.handleClick(index)}></span>
      )
    })
    return (
      <div className='wrap' onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
        <div className='topTop'>
          <div className='top' style={{marginLeft:num1}}>
            {picP}
          </div>
        </div>
        <div className='pro'>
            {one}
        </div>
        <div className='obj'>
          <span onClick={()=>{this.handleNum(-1)}}>←</span>
          <span onClick={()=>{this.handleNum(1)}}>→</span>
        </div>
      </div>
    )
  }
}

export default App;
