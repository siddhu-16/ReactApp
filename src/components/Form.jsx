import React, { useState } from 'react';
function Form() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [data , setData] = useState([])
    const addData = () => {
        setData([...data, {name,email}])
        setName("")
        setEmail("")

    }
    const deleteItem = (index) => {
        let arr = data;
        arr.splice(index,1)
        setData([...arr])
    }
    return (
        <>
            <div>
                <input 
                    type="text" 
                    name="name" 
                    value={name}
                    placeholder='name'
                    onChange={(event) => setName(event.target.value)}
                />
                <input 
                    type="text" 
                    name="email" 
                    value={email}
                    placeholder='email'
                    onChange={(event) => setEmail(event.target.value)}    
                />
                <button onClick={addData}>Submit</button>
            </div>
            <div className='mydiv'> 
                <h4>Name</h4>
                <h4>Email</h4>
                <h4>Delete</h4>
            </div>
            <div >
            {
                data.map((element,index) =>{
                    return(
                        <div key={index} className='mydiv'>
                            <h4>{element.name}</h4>
                            <h4>{element.email}</h4>
                            <button onClick={() => deleteItem(index)}>Delete</button>
                        </div>
                    )
                })
            }
               
            </div>
        </>
    )
}
export default Form