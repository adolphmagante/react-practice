import React from 'react'

const ComponentTutorial = () => {
    if(true){
        console.log(1);
      }
      let x = 0
      const y = () => {
        return "Hello World";
      }
      let z = <h6>
        Kono Sekai
      </h6>
    
      let a = <h1>1213: {x}</h1>
      let b = <h1>1213: {y()}</h1>
      let c = ["qwerty", "uiop", 1]
      let d = false
      const info = {
        lname: "Magante",
        fname: "Adolph Ed Sue",
        mname: "Macavinta"
      }
  return (
    
    <>
    {
      //jsx
    }
      <h1>{x}</h1>
      <h1>{y()}</h1>
      {z}
      {a}
      {b}
      {c}
      {d}
      <div>
        First Name: {info.fname} <br/>
        Middle Name: {info.mname} <br/>
        Last Name: {info.lname} 
      </div>
    </>
  )
}

export default ComponentTutorial