import React, { useState } from 'react'

const Form = () => {
const [name, setName]=useState()
const [email, setEmail]=useState()
const [passward, setPassward]=useState()
const [confirmpass, setConfirmpass]=useState()

 
const handelSumbit = (event) => {
  event.preventDefault();

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (name && email && passward && confirmpass) {

   
    if (!emailRegex.test(email)) {
      alert(" Invalid email format. Example: name123@example.com");
      return;
    }

    if (passward !== confirmpass) {
      alert(" Password and Confirm Password do not match");
      return;
    }


    if (name.length <5) {
      alert(" Name must be at least 5 characters long");
      return;
    }

    alert("✅ Sign up successfully!");

  } else {
    alert(" All fields are mandatory");
  }
}

 
 
  return (
   <>
   <form onSubmit={handelSumbit}>
    <h1>sing-up</h1>
    <div>
        <p className='fieldName'>Name</p>
        <input type='text' onChange={(event)=>setName(event.target.value)}/>
        <p className={name? "data":"noData"}>{name? "":"name is requried"}</p>
    </div>

      <div>
        <p className='fieldName'>Email</p>
        <input type='email' onChange={(event)=>setEmail(event.target.value)}/>
        <p className={email? "data":"noData"}>{email? "":"email is required"}</p>
    </div>

      <div>
        <p className='fieldName'>Passward</p>
        <input type='password' onChange={(event)=>setPassward(event.target.value)}/>
        <p className={passward? "data":"noData"}>{passward? "":"passward is required"}</p>
    </div>

      <div>
        <p className='fieldName'>confirm passward</p>
        <input type='password' onChange={(event)=>setConfirmpass(event.target.value)}/>
        <p className={confirmpass? "data":"noData"}>{confirmpass? "":"confirmpass is required"}</p>

    </div>

    <div>
        <button>sing-up</button>
    </div>
   </form>
   </>
  )
}

export default Form