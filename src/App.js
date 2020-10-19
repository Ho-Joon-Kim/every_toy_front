import axios from 'axios';
import React from 'react';
import Thread from './thread';

 

class App extends React.Component {
  state = {
    isLoading : true,
    dataCategory : []
  };


  getMany = async () => {
    const {data :dataCategory} = await axios.get("http://localhost:8080/api/many");
    this.setState({ dataCategory });
    console.log(dataCategory);
  }



  componentDidMount(){
    this.getMany();
  }

  render() {
    const { isLoading } = this.state; 
    return(
      <div>
      <h1></h1>
        <div>
          <button>all({this.state.dataCategory['all']})</button>
          <button>app({this.state.dataCategory['app']})</button>
          <button>web({this.state.dataCategory['web']})</button>
          <button>game({this.state.dataCategory['game']})</button>
          <button>guitar({this.state.dataCategory['guitar']})</button>
        </div>

      <h1>스레드 내용들</h1>

        <div>
          <button>up</button>
          <button>add</button>
        </div>
      </div>
    )
  }

}

export default App;
