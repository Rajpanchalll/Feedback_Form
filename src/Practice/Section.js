import React, { useEffect } from 'react'

export const Section = () => {

  // PROMISE SYNTEX 
  // const promise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     try {
  //       resolve(' Promise is resolved');
  //     }
  //     catch {
  //       reject('Error');
  //     }
  //   }, 4000);
  // });

  // const myAsyncfun = async () => {
  //   let newPromise = await promise;
  //   console.log('hello world');
  //   console.log(newPromise);
  // }

  // myAsyncfun();


  // callback function 
  // useEffect(() => {
  //   newFunc()
  // });
  // const newFunc = () => {
  //   console.log('Hello world 1');
  //   setTimeout(()=>{
  //     console.log('Hello world 2');
  //   }, 5000);
  //   console.log("Hello World 3");
  // }


  //PROMISE START FROM HERE!!!
  
  // const url = 'https://jsonplaceholder.typicode.com/posts';


  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const resp = await fetch(url);
  //     const result = resp.json();
  //     if (result.status >= 200 && result.status <= 300) {
  //       console.log(result);

  //     }
  //     console.log(result);
  //   }
  //   fetchUser();
  // })

  return (
    <div>

    </div>
  )
}
