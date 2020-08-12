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
      <h1>{user.username}</h1>
      <img src={user.image} />
      <div>{user.bio}</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Bio</label>
        <textarea ref={register} name="message" />
        <button>Submit Bio</button>
      </form>
    </div>
  );
}

export default Profile;