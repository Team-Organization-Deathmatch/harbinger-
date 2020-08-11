import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

function Reviews() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  
  return (
    <div>
      <form onSubmit={ handleSubmit(onSubmit) }>
          <label>|Username|</label>
          <input ref={ register } name="username" />

          <label>|Message|</label>
          <textarea ref={ register } name="message" />
          <button>Submit Review</button>
      </form>
      <h1>Reviews Component</h1>
    </div>
  );
}

export default Reviews;
