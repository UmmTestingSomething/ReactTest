import React, { useState } from "react";

const Addi = () => {

    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const num3 = parseInt(num1)+parseInt(num2)
    const [res, setRes] = useState('')

    const Numaddition = () => {
        setRes("Sum: "+ num3)
    }

    return(
        <>
        <h1 className="secondCenter">Addition Page</h1>
        <input type="number" placeholder="Enter first number" onChange={(e) => setNum1(e.target.value)}></input>
        <br></br>
        <input type="number" placeholder="Enter second number" onChange={(e) => setNum2(e.target.value)}></input>
        <br></br>
        <input onClick={Numaddition} type="submit" value="Add"></input>
        <br></br>
        {num1} + {num2} = {num3}
        <br></br>{res}
        </>
    )
}

export default Addi