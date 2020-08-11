import React from 'react';
import { useForm } from 'react-hook-form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

function Search() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div>
      {/* <h1>Search Component</h1> */}
      <form onSubmit={ handleSubmit(onSubmit) }>
          <label>Search:</label>
          <input ref={ register } name="website" />
          <button>Search websites</button>
      </form>
    </div>
  );
}

export default Search;
