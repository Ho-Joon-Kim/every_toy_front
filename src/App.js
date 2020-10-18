import axios from 'axios';
import React from 'react';
import Thread from './thread';




function Load(pagenum,sort,category) {
  const data = axios.post(`http://localhost:4000/api/thread/${pagenum}`, {
      "sort" : sort,
      "category" : category
    })
    .then((response) => { return response.data.contents; })
    .catch((error) => { console.log(error); });

  console.log(typeof data);
  console.log(data[0]);
  //return data
}


function App() {
  return (
    <div>
      {Load(0,"like",0)}
    </div>
  );
}

export default App;
