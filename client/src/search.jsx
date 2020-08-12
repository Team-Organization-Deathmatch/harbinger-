import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

function Search() {
  const searchBing = (query) => {
    const data = JSON.stringify(query);

    const config = {
      method: 'post',
      url: '/api/websites/search',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        webSitesUpdate('banana');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [webSites, webSitesUpdate] = useState('Search Results Appear Here');
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => searchBing(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Search:</label>
        <input ref={register} name='clientSearch' />
        <button>Search websites</button>
        call mapping function here to render search results
        <h1>{webSites}</h1>
      </form>
    </div>
  );
}

export default Search;
