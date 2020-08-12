import React from 'react';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

const searchBing = (query) => {
  // may need to change query to query.website since the
  // current click returns data that looks like { website: "amazon }
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
    })
    .catch(function (error) {
      console.log(error);
    });
};

function Search() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => searchBing(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Search:</label>
        <input ref={register} name='clientSearch' />
        <button>Search websites</button>
      </form>
    </div>
  );
}

export default Search;
