import React, { useEffect, useState } from 'react'
import {useParams,useNavigate} from "react-router-dom"

function View() {

    let {vid} = useParams()
    console.log(vid)

    let nav = useNavigate()

    let [val,setval] = useState("")
    
    useEffect(()=>{
        fetch("http://localhost:4012/details/"+vid)
        .then((res)=>{return res.json()})
        .then((op)=>{
            setval(op)
            console.log(op)

        })
    },[])
    return (
        <div>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-6'>
                    <h1>id :- {val.id}</h1>
                    <h1>name :-{val.name}</h1>
                    <h1>price :-{val.price}</h1>
                    <h1>product :-{val.procuct}</h1>
                    <button onClick={()=>{nav("/")}} className='btn btn-danger'>exit</button>

                </div>


            </div>

        </div>
        </div>
        
    )
}

export default View