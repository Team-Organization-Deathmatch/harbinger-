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
    //console.log(testArray, 'hello');
    //webSitesUpdate(testArray);
    // **** COMMENTED THE BELOW OUT TO NOT USE ALL OUR BING CALLS
    // BELOW STILL WORKS
    // BE SURE TO CHANGE WEBSITES UPDATE TO PROPER OBJECT KEYS
    //webSitesUpdate(testArray);
    return axios(config)
      .then(function (response) {
        //console.log(JSON.stringify(response));
        console.log(JSON.stringify(response.data[1]));
        //console.log(JSON.stringify(response.data.webPages.value));
        webSitesUpdate(response.data[0].webPages.value);
        if (response.data[1] !== null) {
          reviewedSitesUpdate(response.data[1]);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [webSites, webSitesUpdate] = useState(['Search Results Appear Here']);
  const [reviewedSites, reviewedSitesUpdate] = useState([]);
  // const [userInfo, userInfoUpdate] = useState([
  //   { User: { username: 'hello' } },
  // ]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => searchBing(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Search:</label>
        <input ref={register} name='clientSearch' />
        <button>Search websites</button>
        <div className='reviewedSites list'>
          {reviewedSites.map((review) => {
            return (
              <div key={review.id}>
                <br></br>
                <div>Written By: {review.User.username}</div>
                <div>Likes: {review.likes}</div>
                <div> Dislikes: {review.dislike}</div>
                <br></br>
                <div>{review.text}</div>
                <button>See Review</button>
              </div>
            );
          })}
        </div>
        <div className='webSitesList'>
          {webSites.map((site) => {
            return (
              <div key={site.id}>
                <br></br>
                <a href={site.url}>{site.url}</a>
                <br></br>
                <div>{site.snippet}</div>
                <button>Review Website!</button>
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
}

export default Search;
