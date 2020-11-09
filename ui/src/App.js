import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

const apiUrl = `http://localhost:8080`;

class App extends Component {
  state = {
    putWordMessage : "",
    getWordMessage : "",
    word : "",
  };
  getWordCount = async ()=>{
    let input = this.state.word;
    this.setState({word : ""});
    const res = await axios.get(apiUrl + '/word/' + input);
    let result = null;
    if(res.data.success){
      result = `Count : ${res.data.result.count}`;
    } else {
      result = "This word is not added yet.";
    }
    this.setState({getWordMessage : result});
    setTimeout(()=>{
      this.setState({getWordMessage : ""});
    },2000);
  };
  putWord = async ()=>{
    let input = this.state.word;
    this.setState({word : ""});
    const res = await axios.put(apiUrl + '/word/' + input);
    let result = null;
    if(res.data.success){
      result = "Word Added !!";
    } else {
      result = "Unable to add word. Try Again !!!";
    }
    this.setState({putWordMessage : result});
    setTimeout(()=>{
      this.setState({putWordMessage : ""});
    },2000);
  };
  handleOnChange = async (e)=>{
    this.setState({"word" : e.target.value});
  };
  render() {
    return (
      <div className="App">
        <section>
          <h1>Word Count API</h1>
          <input value={this.state.word} onChange={this.handleOnChange}></input>
          <button onClick={this.getWordCount}>Get Count</button>
          <button onClick={this.putWord}>Put Word</button>
        </section>
        <section>
          <span>{this.state.getWordMessage}</span>
          <span>{this.state.putWordMessage}</span>
        </section>
      </div>
    );
  }
}
export default App;