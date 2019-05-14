import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const UL = styled.ul`
  margin-left: 1rem;
  padding: 0;
  list-style: none;
`;

const Li = styled.li`
  float: left;
  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }
`;

const A = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const Img = styled.img``;

const Menu = () => {
  return (
    <Nav>
      <Img src="https://news.ycombinator.com/y18.gif" alt="Logo" />
      <UL>
        <Li>
          <A>Top</A>
        </Li>
        <Li>
          <A>New</A>
        </Li>
        <Li>
          <A>Best</A>
        </Li>
        <Li>
          <A>Ask</A>
        </Li>
        <Li>
          <A>Show</A>
        </Li>
        <Li>
          <A>Job</A>
        </Li>
      </UL>
    </Nav>
  );
};

export default Menu;
