import React, { useState, useEffect } from 'react';

import api from './api';
import StoryItem from './StoryItem';
import Spinner from './Spinner';
import Menu from './Menu';

const App = () => {
  const [topStoriesId, setTopStoriesId] = useState([]);

  useEffect(() => {
    const fetchTopStories = async () => {
      const response = await api.get('/topstories.json');
      setTopStoriesId(response.data);
    };
    fetchTopStories();
  }, []);

  return (
    <div className="App">
      <Menu />
      {topStoriesId ? (
        topStoriesId.map((storyId, index) => (
          <StoryItem itemId={storyId} key={index} />
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default App;
