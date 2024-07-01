import React, { useState, useEffect } from 'react';
function Effecteg(){
    const [state,setState] = useState(10)
    const [data ,setData] = useState([])

    useEffect (() =>{
        async function getData(){
            const res = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);
            const get = await res.json();
            setData(get);
            console.log(get)
        }
        getData();
        document.title = `(${state}) Employee Online`;
    }, [state]);

    return(
        <>

            <button onClick={() => setState(state + 5)}>
                Click me {state}
            </button>
            <div>
            <div className='mydiv'>
                            <h4>Id</h4>

                            <h4>Full Name</h4>
                            <h4>Contact</h4>
                            <h4>Email</h4>
                            <h4>Age</h4>
                            <h4>Date of Birth</h4>
                            <h4>Salary</h4>
                            <h4>Address</h4>

                          
            </div>
                {
                    data.map((element,index) =>{
                    return(
                        <div key={index} className='mydiv'>

                            <h4>{element.id}</h4>

                            <h4>{element.firstName} {element.lastName }</h4>
                            <h4>{element.contactNumber}</h4>
                            <h4>{element.email}</h4>
                            <h4>{element.age}</h4>
                            <h4>{element.dob}</h4>
                            <h4>{element.salary}</h4>
                            <h4>{element.address}</h4>

                          
                        </div>
                    )
                })
                }
            </div>
        </> 
    )
} 
export default Effecteg