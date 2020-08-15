import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { json } from 'body-parser';

function UserProfile() {
  let username = window.location.href.split('name=');
  username = username[1].split('%20').join(' ');
  //console.log(username);

  const [userReviews, setUser] = useState([]);

  useEffect(() => {
    // console.log('HELLOOOOO');
    // axios.get(`/user/user=${username}`).then((data) => {
    //   console.log(data, 'THIS IS A TEST');
    console.log('HELLOOOOOOO');
    // });
    let data = JSON.stringify({
      name: { username },
    });

    var config = {
      method: 'get',
      url: `http://localhost:8080/user/${username}`,
      headers: {},
      data: data,
    };

    axios(config).then(function (response) {
      console.log(JSON.stringify(response.data));
    });
  });

  console.log('HELLO');
  return (
    <div>
      <div> {username} </div>
    </div>
  );
}

export default UserProfile;
