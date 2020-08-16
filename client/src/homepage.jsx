import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

import Search from './search.jsx';
import { styled, Backdrop } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';


function HomePage() {
  const [user, setUser] = useState([]);
  // | Material UI style methods go here:
  //  \ be welcome to expand on the palethra of styles and add them to methods.
  //    \ use method as a tag to render the custom style.
  const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 20,
    padding: '0 20px',
  });

  const Background = styled(Toolbar)({
    background: 'linear-gradient(45deg, #FE6242 30%, #FF2445 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'red',
  });

  const ReviewBG = styled(Box)({
    borderRadius: 3,
    height: 200,
    boxShadow: '0 3px 5px 2px #b81a06',
    backgroundColor: '#FAEBD7',
    color: 'black',
  });

  useEffect(() => {
    axios.get('/good').then(({ data }) => {
      setUser(data);
    });
  }, []);

  const [topReviews, setTop] = useState([]);

  useEffect(() => {
    axios.get('/review/retrieve/id=top').then((reviews) => {
      console.log(reviews.data, 'Top');
      const topArray = [];
      reviews.data[1].forEach((review, index) => {
        review.username = reviews.data[0][index];
        review.webUrl = reviews.data[2][index];
        topArray.push(review);
      });
      setTop(topArray);
    });
  }, []);

  const [bottomReviews, setBottom] = useState([]);

  useEffect(() => {
    axios.get('/review/retrieve/id=bottom').then((data) => {
      //console.log(data);
      setBottom(data);
    });
  }, []);

  const updateLike = (reviewId, type) => {
    //console.log(reviewId, type);

    axios.put(`/review/update/type=${type}`, {
      reviewId,
    }).then(() => {
      console.log('posted');
    });
  };

  return (
    <div>
      <div>
        <Background>
          <img src="https://www.skytopia.com/project/fractal/new/mandrt3.png" width="10%" height="10%" style={{ filter: 'hue-rotate(300deg)', opacity: '50%' } }></img>
        <h2
          style={{
            display: 'inline-block',
            color: 'white',
            position: 'absolute',
            marginLeft: '60px'
          }}
        >
          Harbinger
        </h2>
        <img
          src={user.image}
          width='50px'
          height='50px'
          style={{
            display: 'inline-block',
            marginLeft: '800px',
            borderRadius: '50%',
            verticalAlign: 'middle',
          }}
        />
          <Link to='/me'>
            <h2
              style={{
                display: 'inline-block',
                color: 'white',
                textAlign: 'right',
              }}
            >
              {user.username}
            </h2>
          </Link>
        </Background>
      </div>
      <Search />
      <h3 style={{ display: 'inline-block' }}>
        Top Best Reviews
      </h3>
      {topReviews.map((review) => {
        let count = 0;
        return (
          <ReviewBG key={review.id}>
            <br />
            <div>
              Written By:
            {review.username}
            </div>
            <Link
              to={{
                pathname: `/userProfile/name=${review.username}`,
              }}
            >
              <button>
                {review.username || 'Jim'}
                  's Profile
              </button>
            </Link>
            <div>
              Url:
            {review.webUrl}
            </div>
            <div>
              Likes:
            {review.likes}
            </div>
            <div>
              {' '}
            Dislikes:
            {review.dislike}
            </div>
            <br />
            <div>{review.title}</div>
            <div>{review.text}</div>
            <MyButton
              type="submit"
              onClick={() => {
                if (count === 0) {
                  updateLike(review.id, 'like');
                  count = +1;
                };

              }}
            >
              like
          </MyButton>
            <MyButton
              type="submit"
              onClick={() => {
                if (count === 0) {
                  updateLike(review.id, 'dislike');
                  count = +1;
                };

              }}
            >
              dislike
          </MyButton>

          </ReviewBG>
        )
      })}
      {/* <h3 style={{ display: 'inline-block', textAlign: 'right' }}>
        Top Worst Reviews
      </h3> */}
    </div>
  );
}

export default HomePage;
