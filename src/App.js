import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


// console.log("asd",this.state.data)
export default class App extends Component {

pageSize=5;
apiKey=process.env.REACT_APP_NEWS_API
// q='';
constructor(props){
  super(props);
  this.state={
    q:""
  }
}
// handledata(searchdata)
// {
//   console.log(searchdata)
// }
handledata(childData) {
  this.setState({ q: childData });
  // console.log(childData)
  console.log("app.js q:",this.state.q)
}

state={
  progress:0
}

setProgress=(progress)=>{
  this.setState({
    progress:progress,
  })
}

  render() {
    return (
      <div>
        <Router>
        <Navbar data={this.handledata.bind(this)} />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
        <Switch>
    
    <Route exact key={this.state.q} path="/"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="home" pageSize={this.pageSize} country="in" category="general" q={this.state.q}/> </Route>
    <Route exact key={this.state.q} path="/Search"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="Search" pageSize={this.pageSize} country="in" category="" q={this.state.q}/> </Route>
    {/* <Route exact path="/{this.state.q}"><News setProgress={setProgress}  key="general" pageSize={this.pageSize} country="in" category="general" q={this.state.q} /> </Route> */}
    {/* <Route exact path="/"><News setProgress={setProgress}  key="general" pageSize={this.pageSize} country="in" category="general" q="covid"/> </Route> */}
    <Route exact key={this.state.q} path="/business"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="business" pageSize={this.pageSize} country="in" category="business"  q={this.state.q}/> </Route>
    <Route exact key={this.state.q} path="/entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" q={this.state.q}/> </Route>
    <Route exact key={this.state.q} path="/general"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={this.pageSize} country="in" category="general" q={this.state.q}/> </Route>
    <Route exact key={this.state.q} path="/health"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="health" pageSize={this.pageSize} country="in" category="health" q={this.state.q}/> </Route>
    <Route exact key={this.state.q} path="/science"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="science" pageSize={this.pageSize} country="in" category="science" q={this.state.q}/> </Route>
    <Route exact key={this.state.q} path="/sports"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" pageSize={this.pageSize} country="in" category="sports" q={this.state.q}/> </Route>
    <Route exact key={this.state.q} path="/technology"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" pageSize={this.pageSize} country="in" category="technology" q={this.state.q}/> </Route>
        </Switch>
        </Router>
      </div>
    )
  }
}
