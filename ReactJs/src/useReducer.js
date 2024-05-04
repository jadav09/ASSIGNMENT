import { createSlice } from "@reduxjs/toolkit"
import { Link, useNavigate } from "react-router-dom"

export let userslice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        userdata: (state, action) => {
            console.log(action.payload)
            state.push(action.payload)
            console.log(state)
        },

        useradd: (state, action) => {

            console.log(action.payload)

            fetch("http://localhost:4012/RegistraionDetails")
                .then((res) => { return res.json() })
                .then((op) => {

                    let check = op.find((v) => {
                        return action.payload.email == v.email
                    })

                    if (!check) {
                        fetch("http://localhost:4012/RegistraionDetails", {
                            method: "post",
                            headers: { "content-type": "application/json" },
                            body: JSON.stringify(action.payload)
                        })
                        alert("registration successfully...")
                    }


                })




        },
        checkdta: (state, action) => {

            // console.log(action.payload.m)


            fetch("http://localhost:4012/RegistraionDetails")
                .then((res) => { return res.json() })
                .then((op) => {
  
                    let check = op.find((v) => {
                        return action.payload.email == v.email && action.payload.password == v.password
                    })

                    console.log(check)

                    if (check) {
                        alert("login successfuly...")
                    }

                    else {

                        alert("wrong pass or email")
                    }
                })

        }

    }
})

export let { userdata, useradd, checkdta } = userslice.actions
export default userslice.reducer