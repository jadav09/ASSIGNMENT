import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'


function CreatePro() {

    let [name, setname] = useState("")
    let [price, setprice] = useState("")
    let [procuct, setproduct] = useState("")

    let nav = useNavigate()

    let data = {name,price,procuct}

    let hendlesumbit = (e)=>{
        e.preventDefault()
        fetch("http://localhost:4012/details",{
            method:"post",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)

        })

        nav("/")
    }

    return (
        <div>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-6'>

                        <form onSubmit={hendlesumbit}>
                            <div className="form-group">
                                <label >Name</label>
                                <input type="text" className="form-control"
                                    value={name}
                                    onChange={((e) => { setname(e.target.value) })}
                                />
                            </div>
                            <div className="form-group">
                                <label >Price</label>
                                <input type="number" className="form-control"
                                    value={price}
                                    onChange={((e) => { setprice(e.target.value) })}
                                />
                            </div>
                            <div className="form-group">
                                <label >Product</label>
                                <input type="text" className="form-control"
                                value={procuct}
                                onChange={(e)=>{setproduct(e.target.value)}}
                                    
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default CreatePro