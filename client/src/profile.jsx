import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Profile() {
  const [user, setUser] = useState([]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (userBio) => {
    axios.post('/profile', { bio: userBio })
      .then(({ data }) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    axios.get('/good')
      .then(({ data }) => {
        //console.log(data);
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
      <h2>Bio for {user.username}</h2>
      <div>{user.bio}</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Edit Bio</label>
        <textarea ref={register} name="message" />
        <button>Submit Bio</button>
      </form>
    </div>
  );
}

export default Profile;