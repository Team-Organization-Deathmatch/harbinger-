import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class App extends React.Component {


  render() {

    console.log('hi ben');   
     return(
      <div>
        <h1>Hello World!</h1>
      </div>
    )
  }
} 

export default App;



//|App will be housing every component within it.
//  \The router-dom methods will be used to activate different components based on route-based conditionals.

