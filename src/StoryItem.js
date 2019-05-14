import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import API from './api';
import Spinner from './Spinner';

const Title = styled.a`
  font-weight: bold;
  color: #333;
  text-decoration: none;
  cursor: pointer;
  display: block;
`;

const StoryItem = ({ itemId }) => {
  const [storyItem, setStoryItem] = useState(null);

  useEffect(() => {
    const fetchStoryItem = async () => {
      const response = await API.get(`/item/${itemId}.json`);
      setStoryItem(response.data);
    };
    fetchStoryItem();
  }, [itemId]);

  return (
    <>
      {storyItem ? (
        <Title href={storyItem.url}>{storyItem.title}</Title>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default StoryItem;
