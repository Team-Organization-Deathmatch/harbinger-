import React from 'react';
import Search from './search.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link,
} from 'react-router-dom';
function HomePage() {
  return (
    <div>
      <h1 style={{ backgroundColor: '#800000', color: "white" }}>HomePage Component</h1>
         <Search />
      <h3 style={{ display: "inline-block", marginRight:"800px"}}>Top Best websites</h3>
      <h3 style={{ display: "inline-block", textAlign: "right" }}>Top Worst websites</h3>
    </div>
  );
}

export default HomePage;
