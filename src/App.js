import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import api from './api';
import StoryItem from './StoryItem';
import Spinner from './Spinner';
import Menu from './Menu';

const Main = styled.main`
  max-width: 960px;
  margin: 0 auto;
`;

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
    <Main>
      <Menu />
      {topStoriesId ? (
        topStoriesId.map((storyId, index) => (
          <StoryItem itemId={storyId} key={index} />
        ))
      ) : (
        <Spinner />
      )}
    </Main>
  );
};

export default App;
