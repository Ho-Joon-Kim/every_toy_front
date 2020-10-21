import axios from 'axios';
import React from 'react';
import Thread from './thread';
import './App.css';

const link = "http://localhost:8080/api";

class App extends React.Component {
  state = {
    dataCategory : [],
    pagedata : [],
    pagenum : 0,
    sort : "date",
    category : 0
  };


  getMany = async () => {
    const {data :dataCategory} = await axios.get(`${link}/many`);
    this.setState({ dataCategory });
    console.log(dataCategory);
  }

  getPage = async (pagenum,sort,category) => {
    const config = { "sort" : sort,"category" : category };
    const {data : { contents }} = await axios.get(`${link}/thread/${pagenum}`, { headers: config });
    this.setState({ pagedata: this.state.pagedata.concat(contents) });
  }

  resetPage = async (sort,category) => {
    this.setState({ pagedata: []});
    this.setState({ pagenum: 0});
    this.setState({ sort });
    this.setState({ category });

    this.getPage(0,sort,category);
    this.getMany();
  }



  componentDidMount(){
    this.getMany();
    this.getPage(0,"like",0);
  }

  render() {
    return(
      <div>
        <div className = "title_block" />
        <div className = "title_PJ">every_toy</div>
        
        <div className = "category_block">
          <div className = "category">
            <button onClick={ () => { this.resetPage("date",0); } }>all({this.state.dataCategory['all']})</button>
            <button onClick={ () => { this.resetPage("date",1); } }>app({this.state.dataCategory['app']})</button>
            <button onClick={ () => { this.resetPage("date",2); } }>web({this.state.dataCategory['web']})</button>
            <button onClick={ () => { this.resetPage("date",3); } }>game({this.state.dataCategory['game']})</button>
            <button onClick={ () => { this.resetPage("date",4); } }>guitar({this.state.dataCategory['guitar']})</button>
          </div>
        </div>

        <div className = "block">{this.state.pagedata.map(current => (<Thread content = {current} /> ))}</div>

        <div>
          <button>up</button>
          <button>add</button>
        </div>
      </div>
    )
  }

}

export default App;
