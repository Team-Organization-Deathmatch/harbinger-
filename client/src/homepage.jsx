import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Search from './search.jsx';

function HomePage() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get('/good').then(({ data }) => {
      setUser(data.username);
    });
  });

  return (
    <div>
      <div style={{ backgroundColor: '#800000' }}>
        <h2
          style={{
            display: 'inline-block',
            color: 'white',
            marginRight: '800px',
          }}
        >
          HomePage Component
        </h2>
        <Link to='/profile'>
          <h2
            style={{
              display: 'inline-block',
              color: 'white',
              textAlign: 'right',
            }}
          >
            {user}
          </h2>
        </Link>
      </div>
      <Search />
      <h3 style={{ display: 'inline-block', marginRight: '800px' }}>
        Top Best websites
      </h3>
      <h3 style={{ display: 'inline-block', textAlign: 'right' }}>
        Top Worst websites
      </h3>
    </div>
  );
}

export default HomePage;
