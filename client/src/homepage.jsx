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
  }, []);

  const [topReviews, setTop] = useState([]);

  useEffect(() => {
    axios.get('/review/retrieve/id=top').then((reviews) => {
      console.log(reviews.data);
      setTop(reviews.data);
    })

  }, []);

  const [bottomReviews, setBottom] = useState([]);

  useEffect(() => {
    axios.get('/review/retrieve/id=bottom').then((data) => {
      console.log(data);
      setBottom(data);
    })

  }, [])

  //wanted to use this inside of useEffect

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
        <Link to='/profile2'>
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
      {/* {topReviews.map((site) => (
              <div>
                <br></br>
                <a href={site.url}>{site.url}</a>
                <br></br>
                <div>{site.snippet}</div>
              </div>
            ))} */}
      <h3 style={{ display: 'inline-block', textAlign: 'right' }}>
        Top Worst websites
      </h3>
    </div>
  );
}

export default HomePage;
