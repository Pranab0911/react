import { useState , useCallback,useEffect, useRef} from 'react'



function App() {
const [length,setLength]=useState(8)
const [NumberAllowed,setNumberAllowed]=useState(false)
const [charallowed,setcharallowed]=useState(false)
const [password,setpassword]=useState("")

 
//using hook useref
const passwordref=useRef(null)

const genratepass = useCallback(()=>{
   let pass=""
   let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   if(NumberAllowed) str+="0123456789"
   if(charallowed)  str+="!@#$%^&*()_+~`"

   for (let index = 1; index <=length; index++) {
    let char=Math.floor(Math.random()*str.length+1)
    pass+=str.charAt(char);

   }
setpassword(pass)

}
  ,[length,NumberAllowed,charallowed,setpassword])

const copypassword = useCallback(()=>{
  passwordref.current?.select()
  window.navigator.clipboard.writeText(password)
},[password])

  useEffect( ()=>{
    genratepass()
  }
    ,[length,NumberAllowed,charallowed,genratepass])
  return (
    <>
     <div className='w-full max-w-md 
     mx-auto shadow-md
      rounded-lg px-4 py-3 my-8 text-orange-500
       bg-gray-800'> <h1 className='text-white text-center my-3 mb-3' >Password Generator</h1> 

     <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
      <input 
      type="text"
      value={password}
      className='outline-none w-full py-1 px-3 bg-white text-black'
      placeholder='password'
      readOnly
      ref={passwordref}
       />
       <button 
       onClick={copypassword}
       className='outline-none bg-blue-600
        text-white px-3 py-0.5 shrink-0' >COPY</button>
       
     </div>
     <div className='flex text-sm gap-x-2'>
<div className='flex items-center gap-x-1'>
<input
type="range"I
min={6}
max={100}
value={length}
   className='cursor-pointer'
   onChange={(e)=>{setLength(e.target.value)}}
/>
<label >Lenght:{length}</label>
</div>

<div className='flex items-center gap-x-1' >
  <input type="checkbox"
   defaultChecked={NumberAllowed}
   id="numberInput"
 onChange={()=>{
  setNumberAllowed((prev)=>!prev);
 }}

  />
  <label className='numberInput' >Numbers</label>
</div>

<div className='flex items-center gap-x-1' >
  <input type="checkbox"
   defaultChecked={charallowed}
   id="characterInput"
 onChange={()=>{
  setcharallowed((prev)=>!prev);
 }}

  />
  <label className='characterInput' >Characters</label>
</div>

  



</div>
     
     </div>
    </>
  )
}

export default App
