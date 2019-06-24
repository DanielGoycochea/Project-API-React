import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Header from './components/Haeder';
import ListItems from './components/List'
import Author from './components/Author'



class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header titulo={'App Web Stefanini'}/>
        
        <Switch>
          <Route exact path="/" component={ListItems} />
          <Route path="/author/:id" component={Author} />
        </Switch>


      </div>
    );
  }
}

export default App;