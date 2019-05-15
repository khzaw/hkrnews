import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import API from './api';
import Spinner from './Spinner';

const Wrapper = styled.div`
  padding: 0.675rem 0;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
`;

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
        <Wrapper>
          <Title href={storyItem.url} target="_blank">
            {storyItem.title}
          </Title>
        </Wrapper>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default StoryItem;
