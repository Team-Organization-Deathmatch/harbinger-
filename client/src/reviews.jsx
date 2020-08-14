import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Axios from 'axios';

function Reviews() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    Axios.post('/review/submit', {
      text: data,
      weburl: 'snapple.com',
      keyword: 'snapple',
    }).then(() => {
      console.log('review posted!');
    })
  }

  return (
    <div>
      <h1>Reviews Component</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <label>|Username|</label>
          <input ref={ register } name="username" /> */}

        <label>|Message|</label>
        <textarea ref={register} name="message" />
        <button>Submit Review</button>
      </form>
    </div>
  );
}

export default Reviews;
