import React from 'react';
import CalcTitle from './components/calcTitle';
import OutScreen from './components/outscreen';
import Buttons from './components/buttons';
import './index.css';
class Calculator extends React.Component
{
    constructor()
    {
      super();
      this.state={
        question:'',
        answer:''
      }
      this.handleClick=this.handleClick.bind(this);
    }
    handleClick(event)
    {
      const val=event.target.value;
      switch(val)
      {
        case '=':
          let ans='';
          try
          {
            ans=eval(this.state.question);
          }
          catch(err)
          {
            this.setState({answer:'math error'});
          }
          if(ans==undefined)
            this.setState({answer:'math error'});
          else
            this.setState({answer:ans, question:''});
          break;

        case 'clear':
          this.setState({question:'',answer:''});
          break;

        case 'delete':
          let newString=this.state.question.substr(0,this.state.question.length-1);
          this.setState({question:newString});
          break;

        default:
          this.setState({question:this.state.question+=val});
          break;

      }
    }
    render(){
      return(
        <div className="main_calc">
          <div className="title">
          <CalcTitle name="React Calculator" />
          </div>
          <div className="outputScreen">
            <OutScreen question={this.state.question} answer={this.state.answer} />

          </div>
          <div className="buttons">
          <div className="row1">
            <Buttons value={'clear'} handleClick={this.handleClick}/>
            <Buttons value={'delete'} handleClick={this.handleClick}/>
            <Buttons value={'.'} handleClick={this.handleClick}/>
            <Buttons value={'/'} handleClick={this.handleClick}/>
          </div>
          <div className="row2">
            <Buttons value={'7'} handleClick={this.handleClick}/>
            <Buttons value={'8'} handleClick={this.handleClick}/>
            <Buttons value={'9'} handleClick={this.handleClick}/>
            <Buttons value={'*'} handleClick={this.handleClick}/>
          </div>
          <div className="row3">
            <Buttons value={'4'} handleClick={this.handleClick}/>
            <Buttons value={'5'} handleClick={this.handleClick}/>
            <Buttons value={'6'} handleClick={this.handleClick}/>
            <Buttons value={'-'} handleClick={this.handleClick}/>
          </div>
          <div className="row4">
            <Buttons value={'1'} handleClick={this.handleClick}/>
            <Buttons value={'2'} handleClick={this.handleClick}/>
            <Buttons value={'3'} handleClick={this.handleClick}/>
            <Buttons value={'+'} handleClick={this.handleClick}/>
          </div>
          <div className="row5">
            <Buttons value={'0'} handleClick={this.handleClick}/>
            <Buttons value={'='} handleClick={this.handleClick}/>
          
          </div>
          </div>
        </div>
      );
    }
}
export default Calculator;