
import React, { useState, useEffect, useCallback,useRef } from 'react';
function PasswordG() {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(8);
    const [numAllow, setNumAllow] = useState(false);
    const [charAllow, setCharAllow] = useState(false);
    const passRef = useRef(null)
    const passG = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numAllow) str += "0123456789"
        if (charAllow) str += "!@#$%^&*()_+{}:`~=|[]\\?<>,.;'"
        for (let index = 1; index < length; index++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }

        setPassword(pass)

    }, [length, numAllow, charAllow, setPassword])

    const copytoClip = useCallback(()=>{
        passRef.current?.select();
        window.navigator.clipboard.writeText(password)
        // window.alert("text copied.!")
    },[password])

    useEffect(() =>{
        passG();
    },[length, numAllow, charAllow, setPassword,passG])

    return (
        <>
        
        <div className=" w-full max-w-md mx-auto border border-gray-60  content-center rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <div >
                <input
                    type='text'
                    value={password}
                    placeholder='PASSWORD'
                    readOnly 
                    className='input-text w-full' 
                    ref={passRef}
                    />
                <button
                onClick={copytoClip} className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                >Copy</button>

            </div>
            <div>
                <input
                    type="range"
                    min={8}
                    max={100}
                    value={length}
                    onChange={(e) => { setLength(e.target.value) }}
                />
                <label>
                    Length({length})
                </label>
                <div >


                <input
                    type="checkbox"
                    defaultChecked={numAllow}
                    id='numberInput'
                    onChange={() => {
                        setNumAllow((prev) => !prev);
                    }} 
                    
                />
                <label>
                    Number
                </label>
                <input
                    type="checkbox"
                    defaultChecked={charAllow}
                    id='numberInput'
                    onChange={() => {
                        setCharAllow((previous) => !previous);
                    }} 
                    
                />
                <label>
                    Char
                </label>
                </div>
            </div>
            </div>
        </>
    )
}
export default PasswordG