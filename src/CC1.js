import './CC2.css';
import React, {Component} from 'react';


class CC1 extends Component{
    constructor(props){
        super(props);
        this.inputRef=React.createRef();
        this.state={
            available:8,
            status:"Available",
            cash:98,
            cashstatus:"Affordable"
        }    }
    eatSlice=()=>{
        if(this.state.available!==0){
        const totalslices=this.state.available-1;
        this.setState({available:totalslices})
        }
        else if(this.state.available===0){
            this.setState({status:"Unavailable"})
        }
        if(this.state.available>0){
            this.setState({status:"Available"})
        }
          
    
    }
    
    
    buySlice=()=>{
        if(this.state.cash>=9){
        const totalslices=this.state.available+1;
        const cash1=this.state.cash-10;
        this.setState({available:totalslices,cash:cash1})
        }

        else {
            this.setState({cashstatus:"Low Cash Balance. Topup to buy more"})
        }
        if(this.state.available>0){
            this.setState({status:"Available"})
        }    
    }
    sellSlice=()=>{
        if(this.state.available!==0){
            const cash2=this.state.cash+12;
            const slice1=this.state.available-1;
            this.setState({cash:cash2,available:slice1})
        }
        if(this.state.available>0){
            this.setState({status:"Available"})
        }
    }
    topupCash=()=>{
        if(this.state.cash>9){
            this.setState({cashstatus:"affordable"})     
      } 
          
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
   backColor=()=>{
        document.getElementById('bgBtn').addEventListener('click', function() {
              document.body.style.backgroundColor = "rgb(87, 87, 87)";
        });
        
    }

   
   render(){
     
    return(
        <div>
        <p>Available slice:{this.state.available} - Cash Available: {this.state.cash}</p>
        <button type="button" onClick={this.eatSlice} id='eatbtn'> Eat a slice</button>
        <button type="button" onClick={this.buySlice} id='buybtn'> Buy a slice</button>
        <button type="button" onClick={this.sellSlice} id='sellbtn'> sell a slice</button>
        <button type="button" onClick={this.topupCash} id='topbtn'> Topup cash</button>
        <input type='text' ref={this.inputRef} onKeyDown={this.handleInput} id='input1' placeholder='enter the amount to topup'></input>
        <h2>Status Slices:{this.state.status} ---- Cash:{this.state.cashstatus}</h2>
        <button type="button" onClick={this.backColor} id='bgBtn'> Background</button>
        
        </div>
     );
    }
}
export default CC1;