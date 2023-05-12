//useEffect code
// function App(){ 
//   const [data, setData] = useState(null); 
//   const fetchData = () => { 
//        // some code 
//   } 
//   useEffect(() => { 
//   fetchData(); //used inside useEffect 
//    }, [fetchData]) 
// } 


import React, {useEffect, useState} from 'react'

const NewData = () => {

  const [count, setCount] = useState(0);
  const onclickBtn =()=>{
   setCount( count + 1)
  }
  useEffect(()=>{
    document.title = `count is become ${count}` 
  });

  return (
    <div>
      {count}
      <button onClick={onclickBtn}>Click me</button>
    </div>
  )
}

export default NewData