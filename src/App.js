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
  const [storiesId, setStoriesId] = useState([]);
  const [activeItem, setActiveItem] = useState('top');

  const handleClick = activeItem => () => setActiveItem(activeItem);

  useEffect(() => {
    const fetchStories = async (endpoint = `/${activeItem}stories.json`) => {
      const response = await api.get(endpoint);
      setStoriesId(response.data);
    };
    fetchStories();
  }, [activeItem]);

  return (
    <Main>
      <Menu activeItem={activeItem} onClick={handleClick} />
      {storiesId ? (
        storiesId.map((storyId, index) => (
          <StoryItem itemId={storyId} key={index} />
        ))
      ) : (
        <Spinner />
      )}
    </Main>
  );
};

export default App;
