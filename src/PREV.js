import React,{ Component } from "react";
import './CC2.css';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.png';
import img5 from './img5.jpg';
import img6 from './img6.jpg';

class PREV extends Component{
    constructor(props){
        super(props);
        this.inputRef=React.createRef();
        this.state={
            available:8,
            status:"Available",
            cash:98,
            cashstatus:"Affordable"
        }
    }
    eatSlice=()=>{
        if(this.state.available!==0){
        const totalslices=this.state.available-1;
        this.setState({available:totalslices})
        }
    }    
    buySlice=()=>{
        if(this.state.cash>=9){
        const totalslices=this.state.available+1;
        const cash1=this.state.cash-10;
        this.setState({available:totalslices,cash:cash1})
        }
    }    
    sellSlice=()=>{
        if(this.state.available!==0){
            const cash2=this.state.cash+12;
            const slice1=this.state.available-1;
            this.setState({cash:cash2,available:slice1})
        }
    }
    topupCash=()=>{
        document.getElementById('input1').style.display='flex';
    }
    handleInput=(event)=>{
        if(event.key==='Enter' || event.key==='Tab'){
           this.topUp(event);
        }
   }
   topUp=(event)=>{
       event.preventDefault();
        const inputValue=parseInt(this.inputRef.current.value);
        const newBalance=this.state.cash + inputValue;
           this.setState({cash:newBalance})
           this.hideInput();

       }
   hideInput=()=>{
       document.getElementById('input1').style.display='none';
   }    
    render(){
        return(
         <div className="b2">
            <header>
              <img src={img4} alt="logo" id="logo"></img>
              <p id="p1">Pizza hut</p>
              <p id="p3">Cash Balance:{this.state.cash}</p>
            </header> 
             <p id="p2">Available slices:{this.state.available}</p>
             <button type="button" onClick={this.eatSlice} id='eatbtn'> Eat a slice</button>
             <button type="button" onClick={this.buySlice} id='buybtn'> Buy a slice</button>
             <button type="button" onClick={this.sellSlice} id='sellbtn'> sell a slice</button>
             <button type="button" onClick={this.topupCash} id='topbtn'> Topup cash</button>
             <input type='text' ref={this.inputRef} onKeyDown={this.handleInput} id='input1' placeholder='enter the amount to topup'></input>
             <h2>Status Slices:{this.state.status}</h2>
             <h2>Cash:{this.state.cashstatus}</h2>
            <div id="imgall">
              <img src={img1} alt="logo" id="img" ></img>
              <img src={img2} alt="logo" id="img"></img>
              <img src={img3} alt="logo" id="img"></img>
              <img src={img5} alt="logo" id="img"></img>
              <img src={img6} alt="logo" id="img"></img>
            </div> 
        </div>
        );
    }
}
export default PREV;