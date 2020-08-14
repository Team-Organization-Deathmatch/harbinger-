import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { useForm } from 'react-hook-form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import UserReviews from './UserReviews.jsx';

function Profile() {
  const [user, setUser] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (userBio, e) => {
    axios.post('/profile/bio', { bio: userBio })
      .then(({ data }) => {
        setUser(data);
        e.target.reset();
      });
  };
  const imageSubmit = (imageUrl, e) => {
    axios.post('/profile/image', { image: imageUrl })
      .then(({ data }) => {
        console.log(data);
        setUser(data);
        e.target.reset();
      });
  };

  useEffect(() => {
    axios.get('/good')
      .then(({ data }) => {
        // console.log(data);
        setUser(data);
      });
  }, []);

  return (
    <div>
      <div style={{ backgroundColor: '#800000' }}>
        <h1 style={{ display: 'inline-block', color: 'white' }}>
          {user.username}
          : Profile
        </h1>
      </div>
      <img src={user.image} />
      <h3>Edit Image</h3>
      <form onSubmit={handleSubmit(imageSubmit)}>
        <input ref={register} name="imageUrl" />
        <button onClick={() => reset()}>Submit Image</button>
      </form>
      <div>
        <div>
          <h2>
            Bio for: 
            {user.username}
          </h2>
          <div>{user.bio}</div>

        </div>

      </div>
      <div>
        <div>
          <h3>Edit Bio</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input ref={register} name="message" />
            <button onClick={() => reset()}>Submit Bio</button>
          </form>
          <div>
            <UserReviews />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
