import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {IncrementCreator, DecrementCreator} from '../BLL/reducers/globalReducers'

class ControlFormContainer extends React.Component {

    componentDidMount() {
        //const ValuState = this.props.state;
       // debugger;
    }

    OnClickInc = () => {
        this.props.IncrementCreator();
   //IncrementCreator();
   //debugger;         
  }
    OnClickDec = () => {
        this.props.DecrementCreator();
   //DecrementCreator();
   //debugger;         
  }
      

    render() {
    

        

        return (         <div>

<div>State:{this.props.state.math.totalValue}</div>

            <div>
<button onClick = { this.OnClickInc }>Inc+ </button>
   </div>

<div>
<button onClick = { this.OnClickDec }>Dec-</button>
   </div>

   </div>

        )
    }
}


const mapStateToProps = (state) => ( { state } );

const MapDispatchToProps = {IncrementCreator, DecrementCreator};


export default compose(
    connect(mapStateToProps, MapDispatchToProps)
)(ControlFormContainer)