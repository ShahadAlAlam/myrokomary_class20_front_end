import { useState } from "react";
import { CounterButton } from "./CounterButton";


export default function Counter() {
    const [countParent = 0, setCount] = useState(0);

    function incrementCounterFunctionParent(val) {
        // console.log("incrementCounterFunction",val);
        setCount(countParent + val);
    };

    function decrementCounterFunctionParent(val) {
        // console.log("decrementCounterFunction",val);
        setCount(countParent - val);
    };

    return (
        <div className="Counter">
            <span className="totalCount">{countParent}</span>
            <CounterButton val={1} incrementCounterFunctionParent={incrementCounterFunctionParent} decrementCounterFunctionParent={decrementCounterFunctionParent} />
            <CounterButton val={2} incrementCounterFunctionParent={incrementCounterFunctionParent} decrementCounterFunctionParent={decrementCounterFunctionParent} />
            <CounterButton val={3} incrementCounterFunctionParent={incrementCounterFunctionParent} decrementCounterFunctionParent={decrementCounterFunctionParent} />
        </div>
    );

}
