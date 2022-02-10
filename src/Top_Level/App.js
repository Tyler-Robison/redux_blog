import React, { useState } from 'react';
import NavBar from '../Nav/NavBar';
import RouteList from './RouteList';
import PostContext from '../Context/PostContext';
import './App.css';

function App() {
  const [posts, setPosts] = useState([])

  const providerObj = { posts, setPosts }

  return (
    <div className="App">
      <PostContext.Provider value={providerObj}>
        <NavBar />
        <RouteList />
      </PostContext.Provider>
    </div>
  );
}

export default App;
