import "./Counter.css"
// import { useState } from "react";
import {PropTypes} from 'prop-types';

export  function CounterButton({val,incrementCounterFunctionParent,decrementCounterFunctionParent}){
    /*
        useState or hook returns two value
        first one is the value
        and second one is function to update the value
    const state = useState(0);
    */
    // const [count=0,setCount] = useState(0);
    // const buttonStyle={
    //     fontSize:"30px",
    //     backgroundColor:"#00a5ab",
    //     width:"50px",
    //     height:"50px",
    //     padding:"5px",
    //     color:"white",
    //     borderRadius:"25px"
    // };   
    
    
    // // // function incrementCounterFunction(properties){
    // function incrementCounterFunction(){
    //     // console.log("incrementCounterFunction",val);
    //     // setCount(count+properties.val);
    //     incrementCounterFunctionParent(val);
    //     // setCount(count+val);
    //     }
    
    // // // function decrementCounterFunction(properties){
    // function decrementCounterFunction(){
    //     // console.log("decrementCounterFunction",val);
    //     // setCount(count-properties.val);
    //     decrementCounterFunctionParent(val);
    //     // setCount(count-val);
    //     // state[1] (state[0]-1);
    //     // console.log(state[0]);
    //     // console.log(state[1]);
    //     // console.log("clicked");
    //     }

    return (
        <div className='App'>
            <div className="Counter">
            {/* <span className="count">{count}</span> */}
            <div>
                <button className="counterButton" 
                    // onClick={incrementCounterFunction}
                    onClick={()=>incrementCounterFunctionParent(val)} 
                    >+{val}</button>
                <button className="counterButtonDec" 
                    // onClick={decrementCounterFunction} 
                    onClick={()=>decrementCounterFunctionParent(val)}
                    >-{val}</button>
            </div>  
            </div>
        </div>
        );

}

CounterButton.propTypes = {
    val: PropTypes.number
}

CounterButton.defaultProps = {
    val: 1
}