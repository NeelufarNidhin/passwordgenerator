import React, { useState } from 'react'

function PasswordGenerator() {
    const [length,setLength] = useState(6);
    const [chkUppercase,setChkUppercase] = useState(true);
    const [chkLowercase,setChkLowercase] = useState(true);
    const [chkNumbers,setChkNumbers] = useState(true);
    const [chkSpecialChar,setChkSpecialChar] = useState(true);
    const [password,setPassword] = useState("")
    const GeneratePwd = () => {
        let Charset = "" ;
        if(chkUppercase) Charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(chkLowercase) Charset +=  "abcdefghijklmnopqrstuvwxyz";
        if(chkNumbers) Charset += "0123456789";
        if(chkSpecialChar) Charset+= "~!@#$%^&*()+-_=:<>?|";
        let generatePwdSet = ""
       for(let i =0 ;i < length ; i++) {
        const randonIndex =   Math.floor(Math.random() * Charset.length)
        generatePwdSet += Charset[randonIndex]
        
       }
       setPassword(generatePwdSet)
     }

     const CopyPwd = () => {
        navigator.clipboard.writeText(password)
        
     }
  return (
   
       <div className='pwdgenerator'>
        <h2>Password Generator</h2>
        <div className='inputField'>
            <label htmlFor='length'>Enter the Length</label>
            <input type='number' id='length' value={length} onChange={(e) => setLength(e.target.value)}/>
            
        </div>
        <div className='checkboxGroup'>
            <input type='checkbox' id='uppercase' checked={chkUppercase} onChange={() => setChkUppercase(!chkUppercase)}/>
            <label htmlFor='uppercase'>Uppercase letter</label>
        </div>
        <div className='checkboxGroup'>
            <input type='checkbox' id='lowercase' checked={chkLowercase} onChange={() => setChkLowercase(!chkLowercase)}/>
            <label htmlFor='lowercase'>Lowercase letter</label>
        </div>
        <div className='checkboxGroup'>
            <input type='checkbox' id='numbers' checked={chkNumbers} onChange={() => setChkNumbers(!chkNumbers)}/>
            <label htmlFor='numbers'>Numbers </label>
        </div>
        <div className='checkboxGroup'>
            <input type='checkbox' id='specialcharacter' checked={chkSpecialChar} onChange={() => setChkSpecialChar(!chkSpecialChar)}/>
            <label htmlFor='specialcharacter'>Special Character</label>
        </div>
        <button className='generate-btn' onClick={GeneratePwd} >Generate Password</button>
        <div className='generatedpwd'>
        <input type='text' id='password' value={password}/>
        <button className='copybtn' onClick={CopyPwd}>Copy</button>
        </div>
        
        </div> 

  )
}

export default PasswordGenerator
