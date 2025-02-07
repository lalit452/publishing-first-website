import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [jokes, setJokes] = useState([]);
// const backend_url = import.meta.env.VITE_BACKEND_URL;


  // useEffect(()=>{
  //   // axios.get(backend_url)
  //   axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/jokes`)
  //   // axios.get('/api/jokes') 
  //   .then((response) => {
  //     setJokes(response.data)
  //   })
  //   .catch((error) =>{
  //     console.log(error);
  //   }, [])
  // })

  const backend_url = import.meta.env.VITE_BACKEND_URL;

useEffect(() => {
  axios.get(`${backend_url}api/jokes`)  // ✅ Correct API URL
    .then(response => {
      setJokes(response.data);
    })
    .catch(error => {
      console.error("Error fetching jokes:", error);
    });
}, []);


  return (
   <>
   <h1>Chai aur code</h1>
   <p>JOKES : {jokes.length}</p>

   {
    jokes.map((joke) =>(
      <div key={joke.id} >
        <h3>{joke.title}</h3>
        <p>{joke.content}</p>
      </div>
    ))
   }
   </>
  )
}

export default App
