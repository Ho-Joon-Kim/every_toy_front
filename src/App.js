import React from 'react';
import Thread from './thread';




function App() {
  return (
    <div>
      {contents.map(current => (<Thread content = {current} /> ))}
    </div>
  );
}

export default App;
