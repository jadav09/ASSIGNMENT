import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'



function SeartchTabledata() {

    let nav = useNavigate()

    let [obj, setobj] = useState("")

    useEffect(() => {

        fetch("http://localhost:4012/details")
            .then((res) => { return res.json() })

            .then((op) => {
                setobj(op)  // op main array milega.
            })

    }, [])


    let henldview = (vid)=>{
    
        nav("/view/"+vid)

    }

    let henldedit = (eid)=>{

        nav("/edit/"+eid)
    }

    let henldelete = (eid)=>{
        fetch("http://localhost:4012/details/"+eid,{
            method:"delete",
            headers:{"content-type":"application/json"}
        })
window.location.reload()

    }

    return (

        <div>
            

            <div className='container'>

                <div className='row'>

                    <div>

                        <div className="input-group w-50 ">

                            <input type="search" className="form-control" />
                            <button type="button" className="btn btn-primary"><i className="fas fa-search"></i></button>


                        </div>

                        <div className='text-end'>
                            <Link to={"/cre"} className='btn btn-primary my-2'>+Create product</Link>
                        </div>
                    </div>

                </div>

                <div className='row justify-content-center'>
                    <table className="table">
                        <thead className='table-dark'>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">name</th>
                                <th scope="col">Price</th>
                                <th scope="col">product</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                obj && obj.map((v) => (
                                    <tr key={v.id}>
                                        <th scope="row">{v.id}</th>
                                        <td>{v.name}</td>
                                        <td>{v.price}</td>
                                        <td>{v.procuct}</td>
                                        <td>
                                            <button onClick={()=>{henldview(v.id)}} className='btn btn-success'>Read</button>
                                            <button onClick={()=>{henldedit(v.id)}} className='btn btn-info mx-2'>edit</button>
                                            <button  onClick={()=>{henldelete(v.id)}} className='btn btn-danger'>delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )

}

export default SeartchTabledata