import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { styled, Backdrop } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';

function Profile() {
  let username;
  const [user, setUser] = useState([]);
  const [userReviews, setUserReviews] = useState([]);
  const { register, handleSubmit } = useForm();

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

  const ImageBG = styled(Box)({
    borderRadius: 7,
    boxShadow: '0 1px 30px 0px gray',
    color: 'black',
  });

  const onSubmit = (userBio) => {
    axios.post('/profile/bio', { bio: userBio }).then(({ data }) => {
      setUser(data);
    });
  };
  const imageSubmit = (imageUrl) => {
    axios.post('/profile/image', { image: imageUrl }).then(({ data }) => {
      // console.log(data);
      setUser(data);
    });
  };

  useEffect(() => {
    axios.get('/good').then(({ data }) => {
      // console.log(data, 'user');
      setUser(data);
      username = data.username;
    });
  }, []);

  useEffect(() => {
    axios.get('/good').then(({ data }) => {
      // console.log(data, 'user');

      console.log(data.username)
      const config = {
        method: 'get',
        url: `http://localhost:8080/user/${username}`,
        headers: {},
        data: username,
      };
      axios(config)
        .then((reviews) => {
          setUserReviews(reviews.data);
          console.log(reviews.data)
        });

    });

    //console.log(user)
    // axios(config).then((response) => {
    //   console.log(JSON.stringify(response.data));
    //   setUserReview(response.data);
    // });
  }, []);

  const userLogout = () => {
    axios.get('/logout').then(() => {
      // console.log('logged out');
      window.location = '/';
    });
  };

  return (
    <div>
      <div>
        <Background>
        <h1
          style={{
            display: 'inline-block',
            color: 'white',
            marginRight: '600px',
          }}
        >
          {user.username}
          : Profile
        </h1>
        <Link to="/">
          <h1
            style={{
              display: 'inline-block',
              color: 'white',
              textAlign: 'right',
            }}
          >
            Back to Homepage
          </h1>
        </Link>
        <form onSubmit={handleSubmit(userLogout)}>
        <button><MyButton>Logout</MyButton></button>

        </form>
        </Background>
       
      </div>
      <ImageBG width="200">
      <div >
      <img src={user.image} style={{ position: 'absolute', marginBottom: "20px", }} width='150px'
          height='150px'/>
      <h2 style={{ marginLeft: "300px", padding: "0px"}}>Bio for {user.username}</h2>
      <div style={{ maxWidth: "700px", marginLeft: "300px", marginBottom: "10px", positon: "absolute", padding: "20px" }}>{user.bio}</div>
      <img height="10" style={{marginTop: "20px"}}></img>
      </div>
      </ImageBG>
      <ReviewBG style={{ marginTop: "20px" }}>
      <div style={{ display: 'inline-block' }}>
      <h3>Edit Image</h3>
      <form onSubmit={handleSubmit(imageSubmit)}>
        <textarea ref={register} name='imageUrl' />
        <button><MyButton>Submit Image</MyButton></button>
      </form>
      </div>
      <div style={{ display: 'inline-block', marginLeft: "200px" }}>
      <h3>Edit Bio</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea ref={register} name='message' />
            <button><MyButton>Submit Bio</MyButton></button>
          </form>
      </div>
      </ReviewBG>
      <div>
        <div>
        </div>
      </div>
      User reviews Here
      <div>
        {userReviews.map((review) => {
          console.log(review)
          return (
          <div>
            <br />
            <div>
              Written By:
            {review.User.username}
            </div>
            <div>
              Url:
            {review.User.webUrl}
            </div>
            <div>
              Likes:
            {review.User.likes}
            </div>
            <div>
              {' '}
            Dislikes:
            {review.User.dislike}
            </div>
            <br />
            <div>{review.User.title}</div>
            <div>{review.User.text}</div>

          </div>
          )
        })}
      </div>
    </div>
  );
}

export default Profile;
