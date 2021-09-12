import React, { Component } from "react";
import { Link,} from "react-router-dom";

export class Navbar extends Component {
  constructor(){
    super();
    this.state={
      data:''
    }
  }

  // handleSearch(event){
  //   // this.setState({
  //   //   data:event.target.value,
  //   // })
  //   this.props.data(event.target.value);
  //   console.log("hi:",event.target.value)
    
  // }
  // onChange = event => {
  //   this.props.data(event.target.value);
  //   this.setState({
  //       data:event.target.value,
  //     })
  // };

  handleSearch=async(event)=> {
         console.log("Search is working");
     this.setState({
       data: event.target.value
      
     })
     this.props.data(event.target.value)
     console.log(this.state.data);
   }

  render() {
  //  let  q  =
  //      this.props;
       
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NewsMonkey
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
               
                <li className="nav-item">
                  <Link className="nav-link" to="/business">Business</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general">General</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">Health</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">Science</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">Sports</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">Technology</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Search">Search</Link></li>
              </ul>
              <form className="d-flex">
        <input className="form-control me-2" type="search" onChange={this.handleSearch.bind(this)} placeholder="Search" aria-label="Search"/>
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        {/* <button className="btn btn-outline-success" type="submit"><Link className="nav-link" to={`/search/${this.state.data}`}>Search</Link></button> */}
        {/* <button className="btn btn-outline-success" type="submit"> */}
        {/* <Switch>
          <Route exact path="/search">
            <News/>
          </Route>
        </Switch> */}
          <Link className="nav-link" to="/Search">Search</Link>

          {/* search */}
          {/* </button> */}
       
      </form>
            </div>
          </div>
        </nav>
        <h2>Search entry:{this.state.data}</h2>
        {console.log(this.state.data)}
       
      </div>
    );
  }
}

export default Navbar;
