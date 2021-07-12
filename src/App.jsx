import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [comments, setComments] = useState(null)

  useEffect(()=>{
    async function fetch(){
      const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
      console.log(response.data);
      setComments(response.data)
    }
    fetch()
  },[])



  
  return (
    <div className="App">
      <h1>Comments</h1>
      {comments && comments.map(com => {

        return(
          <div className="comment" key={com.id}>
            <h1 className="name"><abbbr title={com.email}>{com.name}</abbbr></h1>
            
            
            <h2>{com.body}</h2>
          </div>
        )
      })}
    </div>
  );
}

export default App;
