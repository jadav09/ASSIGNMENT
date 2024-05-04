import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { checkdta } from './useReducer'

function Log() {

    let [email, setemail] = useState("")
    let [password, setpassword] = useState("")

    let dis = useDispatch()


    let hendlesubmut = (e) => {

        e.preventDefault();
        dis(checkdta({email:email,password:password}))

    }

    return (
        <div>
            <form className='container w-25'>
                <div data-mdb-input-init class="form-outline mb-4">
                    <label class="form-label" >Email</label>
                    <input type="email" class="form-control" 
                    value={email}
                    onChange={(e)=>{setemail(e.target.value)}}
                     />
                </div>

                <div data-mdb-input-init class="form-outline mb-4">
                    <label class="form-label" >Password</label>
                    <input type="password" class="form-control"
                     value={password}
                     onChange={(e)=>{setpassword(e.target.value)}}
                     />
                </div>

                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4"
                onClick={hendlesubmut}
                >LogIn</button>

                <div class="text-center">
                    <p>Not a member? <a href="#!">Register</a></p>
                    <p>or sign up with:</p>
                    <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-google"></i>
                    </button>

                    <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-twitter"></i>
                    </button>

                    <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-github"></i>
                    </button>
                </div>
            </form>

        </div>
    )
}

export default Log