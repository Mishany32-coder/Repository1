import React, {useState} from 'react'

export default function Fcomponent(props)
{
    const [count,setcount]=useState(0);
    return(
        <div>
            <h1> Вы кликнули {count} раз! </h1>
            <button onClick={()=>setcount(count+1)}>Нажми на меня</button>
        </div>
    )
}
