import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useradd, userdata } from './useReducer'
import { useNavigate } from 'react-router-dom';



function Registrationform() {

    let [firstname, setfname] = useState("")
    let [lastname, setlname] = useState("")
    let [phone, setphone] = useState("")
    let [email, setemail] = useState("")
    let [password, setpassword] = useState("")

    let nav = useNavigate("")


    let data = useSelector(state => state.userdata)

    console.log(data)

    let dis = useDispatch()

    let hendlesumbit = () => {


        fetch("http://localhost:4012/RegistraionDetails")
            .then((res) => { return res.json() })
            .then((op) => {

                let check = op.find((v) => {
                    return v.email == email
                })

                console.log(check)

                if (check) {
                    return alert("alrady registered")
                }

                else {
                    nav("/log")
                }


            })
        dis(useradd({ firstname: firstname, lastname: lastname, phone: phone, email: email, password: password }))

        // nav("/log")

    }

    return (

        <div>

            <section className="h-100 bg-dark">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card card-registration my-4">
                                <div className="row g-0">
                                    <div className="col-xl-5 d-none d-xl-block">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                                            alt="Sample photo" className="img-fluid"
                                        />
                                    </div>

                                    <div className="col-xl-5">
                                        <form className="card-body p-md-5 text-black">
                                            <h3 className="mb-5 text-uppercase">Student registration form</h3>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <label className="form-label" >First name</label>
                                                        <input type="text" className="form-control form-control-lg"
                                                            value={firstname}
                                                            onChange={(e) => { setfname(e.target.value) }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <label className="form-label" >Last name</label>
                                                        <input type="text" className="form-control form-control-lg"
                                                            value={lastname}
                                                            onChange={(e) => { setlname(e.target.value) }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" >Email</label>
                                                <input type="text" className="form-control form-control-lg"
                                                    value={email}
                                                    onChange={(e) => { setemail(e.target.value) }}
                                                />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label">phone</label>
                                                <input type="text" className="form-control form-control-lg"
                                                    value={phone}
                                                    onChange={(e) => { setphone(e.target.value) }}
                                                />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" >Password</label>
                                                <input type="text" className="form-control form-control-lg"
                                                    value={password}
                                                    onChange={(e) => { setpassword(e.target.value) }}
                                                />
                                            </div>

                                            <div className="d-flex justify-content-end pt-3">
                                                <button type="button" className="btn btn-light btn-lg">Reset all</button>

                                                <button type="button" className="btn btn-warning btn-lg ms-2"
                                                    onClick={hendlesumbit}
                                                >Submit form</button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Registrationform