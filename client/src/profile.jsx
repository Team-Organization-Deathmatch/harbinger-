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
  
  const [users, setUsers] = useState([]);
  
  const { register, handleSubmit } = useForm();
  const onSubmit = (userBio) => {
    axios.post('/profile', { bio: userBio })
    .then(({ data }) => {
      console.log(data);
    })
  };

  useEffect(() => {
    axios.get('/good')
      .then(({ data }) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  return (
    <div>
      <h1>{users.username}</h1>
      <img src={users.image} />
      <div>{users.bio}</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Bio</label>
        <textarea ref={ register } name="message" />
        <button>Submit Bio</button>
      </form>
    </div>
  );
}

export default Profile;