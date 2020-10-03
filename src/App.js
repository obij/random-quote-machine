import React, { Component } from 'react'
import axios from 'axios'
import Quotation from './Quotation'



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quotes: [],
      text: "",
      author: ""
    }
    this.handleClick= this.handleClick.bind(this);
  }
 
  componentDidMount(){
    axios.get("https://type.fit/api/quotes")
      .then(res => {
        console.log(res);
        this.setState({
          quotes: res.data
        },
        this.handleClick
        );
      });
      
  }

  handleClick() {
    //const { quotes } = this.state.quotes;
    var randIndex = Math.floor(Math.random() * this.state.quotes.length);
    this.setState({
      text: this.state.quotes[randIndex].text,
      author: this.state.quotes[randIndex].author
    });
  }


  render() {
    //const text = this.state.text;
    //const author = this.state.author;
    //const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${this.state.text}${this.state.author}`)}`;
    return (
      <div id= "quote-box">
       <Quotation text = {this.state.text} author= {this.state.author} />
       <div class="row">
        <div class= "col-md-4">
         <button id= "new-quote" onClick= {this.handleClick}>New Quote</button>
        </div> 
        <div class="col-md-4">
         <a id= "tweet-quote" class="fa fa-twitter" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${this.state.text}${this.state.author}`)}`} target="_blank" ></a>
        </div> 
       </div>
      </div>
    )
  }
}

export default App

