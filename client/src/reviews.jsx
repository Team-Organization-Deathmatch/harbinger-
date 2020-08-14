import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Axios from 'axios';

function Reviews(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    Axios.post('/review/submit', {
      text: data,
      weburl: siteURL,
      title: document.getElementById('title').value,
      keyword: document.getElementById('keyword').value,
    }).then(() => {
      console.log('review posted!');
    });
  };
  //const [passedSite, passedSiteUpdate] = useState('hello');

  let siteURL = window.location.href.split('site=');
  siteURL = siteURL[1];
  //let keywordTextBox = document.getElementById('keyword').value;
  return (
    <div>
      <h1>Leave a Review For {siteURL}</h1>
      <h1>Reviews Component</h1>
      <input id='title' type='text' placeholder='leave a title'></input>
      <br></br>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <label>|Username|</label>
          <input ref={ register } name="username" /> */}

        <label>|Message|</label>
        <br></br>
        <textarea ref={register} name='message' />
        <br></br>
        <div>
          Keywords help other users find other reviews associated with what
          they're searching!
        </div>
        <input id='keyword' type='text' placeholder='leave a keyword'></input>
        <br></br>
        <button>Submit Review</button>
      </form>
    </div>
  );
}

export default Reviews;
