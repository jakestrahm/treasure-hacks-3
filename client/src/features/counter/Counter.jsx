import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

export default function Counter() {
    const [amount, setAmount] = useState(0);
    const addValue = Number(amount) || 0;

    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const resetAll = () => {
        setAmount(0);
        dispatch(reset())
    }

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>

            <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <div>
                <button onClick={() => dispatch(incrementByAmount(addValue))}> add {amount}</button>
                <button onClick={resetAll}>reset</button>

            </div>
        </section>
    )
}
