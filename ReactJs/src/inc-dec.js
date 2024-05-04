import { useState } from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.css"

function Inc() {

    let num = 0
    let [val,setval] = useState(num)
  return (
    <div>
        <ul>
            <li><h3>Create Increment decrement state change by button click?</h3></li>
        </ul>

        <div className='container w-50'>

            <button className='btn btn-primary' onClick={()=>{setval(val+1)}}> + Dec</button>

            <b className="fs-2">{val}</b>

            <button className='btn btn-danger' onClick={()=>{setval(val-1)}}> - Inc</button>

        </div>

        

    </div>





  )
}

export default Inc