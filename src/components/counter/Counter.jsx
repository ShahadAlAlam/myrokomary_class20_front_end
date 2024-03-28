import "./Counter.css"
export default function Counter(){
    // const buttonStyle={
    //     fontSize:"30px",
    //     backgroundColor:"#00a5ab",
    //     width:"50px",
    //     height:"50px",
    //     padding:"5px",
    //     color:"white",
    //     borderRadius:"25px"
    // };    
    
    function incrementCounterFunction(){
        console.log("clicked");
        }

    return (
        <div className='App'>
            <div className="Counter">
            <span className="count">0</span>
            <div>
                <button className="counterButton" 
                    onClick={incrementCounterFunction}
                    >+1</button>
            </div>  
            </div>
        </div>
        );

    
}