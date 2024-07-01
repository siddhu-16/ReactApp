import React, { useState } from 'react';
import './style.css'

function Increment(){
    const [num,setNum] = useState(1)
    function inc(){
        setNum(num+1)
    }
    function dec(){
        setNum(num-1)
    }
    return(
        <>
            <div className=" w-full max-w-md mx-auto border border-gray-60  content-center rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <h1 className=''>{num}</h1>
                <button className="w-full bg-blue-600 text-white px-4 m-4 rounded-lg" onClick={inc}>Increase</button>
                <button className="w-full bg-blue-600 text-white px-4 m-4 rounded-lg" onClick={dec}>Decrese</button>
            </div>
        </>
    )
}
export default Increment