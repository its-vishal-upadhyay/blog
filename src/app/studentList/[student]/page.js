"use client"
export default function Student({params}){
    console.log(params)
    return(
        <div>
            <h1>student details</h1>
            <h3>name : {params.student}</h3>
        </div>
    )
}