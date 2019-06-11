import React, { useEffect, useState, memo } from "react";
import styled from "styled-components";

import API from "./api";
import Spinner from "./Spinner";

const Wrapper = styled.article`
  padding: 0.675rem 0;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
`;

const StyledTitle = styled.a`
  font-weight: bold;
  color: #333;
  text-decoration: none;
  cursor: pointer;
  display: block;
`;

const StyledMeta = styled.div``;

const Title = memo(({ url, title }) => (
  <StyledTitle href={url} target="_blank">
    {title}
  </StyledTitle>
));

const Meta = memo(({ author, timestamp, comments = [] }) => (
  <StyledMeta>
    by {author} | {comments.length} comment{comments.length > 1 ? "s" : ""}{" "}
  </StyledMeta>
));

const StoryItem = ({ itemId }) => {
  const [storyItem, setStoryItem] = useState(null);

  useEffect(() => {
    const fetchStoryItem = async () => {
      const response = await API.get(`/item/${itemId}.json`);
      console.log(response.data);
      setStoryItem(response.data);
    };
    fetchStoryItem();
  }, [itemId]);

  return (
    <>
      {storyItem ? (
        <Wrapper>
          <Title title={storyItem.title} url={storyItem.url} />
          <Meta
            author={storyItem.by}
            timestamp={storyItem.time}
            comments={storyItem.kids}
          />
        </Wrapper>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default StoryItem;
