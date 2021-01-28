import React, {useState} from 'react'

export default function Ccomponent() {
    const [count, set_count] = useState(0);

    const inc=()=>{set_count(count+1)}
    const dec=()=>{set_count(count-1)}
    const reset=()=>{set_count(0)}

    return (
        <div>
            <h1> Number {count} </h1>
            <button onClick={inc}>Inc</button>
            <button onClick={dec}>Dec</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
