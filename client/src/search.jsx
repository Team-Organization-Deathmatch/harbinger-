import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { testArray } from './testData';

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
    console.log(testArray, 'hello');
    webSitesUpdate(testArray);
    // **** COMMENTED THE BELOW OUT TO NOT USE ALL OUR BING CALLS
    // BELOW STILL WORKS
    // BE SURE TO CHANGE WEBSITES UPDATE TO PROPER OBJECT KEYS
    // webSitesUpdate(testArray);
    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //     webSitesUpdate(RESPONSE.SOMETHING.SOMETHING);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  const [webSites, webSitesUpdate] = useState(['Search Results Appear Here']);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => searchBing(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Search:</label>
        <input ref={register} name='clientSearch' />
        <button>Search websites</button>
        <div className='webSitesList'>
          {webSites.map((site) => {
            return (
              <div>
                <br></br>
                <a href={site.url}>{site.url}</a>
                <br></br>
                <div>{site.snippet}</div>
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
}

export default Search;
