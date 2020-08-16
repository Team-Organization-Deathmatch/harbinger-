import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { json } from 'body-parser';
//import { response } from 'express';

function UserProfile() {
  let username = window.location.href.split('name=');
  username = username[1].split('%20').join(' ');
  //console.log(username);
  let usernameReverse = username.split(' ').reverse().join(' ');

  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    axios.get('/good').then(({ data }) => {
      console.log(data.username, data, 'user');
      let image = data.image
      axios.post(`/user/${username}`, {
        userId: data.id,
      })
        .then((reviews) => {
          let userArray = [];
          reviews.data[1].forEach((review, index) => {
            review.username = reviews.data[0][index];
            review.webUrl = reviews.data[2][index];
            review.image = image;
            userArray.push(review);
            console.log(userArray);
          });
          setUserReviews(userArray);
          console.log(userArray);
        });
    });
  }, []);
  // useEffect(() => {
  //   let data = JSON.stringify({
  //     name: { username },
  //   });

  //   var config = {
  //     method: 'get',
  //     url: `http://localhost:8080/user/${username}`,
  //     headers: {},
  //     data: data,
  //   };

  //   axios(config).then((response) => {
  //     console.log(JSON.stringify(response.data));
  //     setUser(response.data);
  //   });
  // }, []);

  // TRYING TO RENDER THE review.User.image to the top
  // it will render in the map function
  // but it won't render once on it's own once i set the user with
  // the response data

  return (
    <div>
      <h1> {usernameReverse}'s Profile </h1>

      {/* <img src={userReviews[0].User.image} width='5%' height='5%' /> */}
      <div className='userReviewed sites'>
        {userReviews.map((review) => (
          <div key={review.id}>
            <br></br>
            <h2>{review.title}</h2>
            <div>{review.text}</div>
            <div>Likes: {review.likes}</div>
            <div>Dislikes: {review.dislike}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserProfile;
