import React from 'react';
import styled, { css } from 'styled-components';

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
  cursor: pointer;
  float: left;
  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }
  ${({ active }) =>
    active &&
    css`
      a {
        font-weight: bold;
      }
    `}
`;

const A = styled.a`
  text-decoration: none;
  text-transform: capitalize;
`;

const Img = styled.img``;

const Menu = ({ activeItem, onClick }) => {
  const titles = ['top', 'new', 'best', 'ask', 'show', 'job'];
  return (
    <Nav>
      <Img src="https://news.ycombinator.com/y18.gif" alt="Logo" />
      <UL>
        {titles.map((title, index) => (
          <Li
            key={index}
            active={activeItem === title}
            onClick={onClick(title)}
          >
            <A>{title}</A>
          </Li>
        ))}
      </UL>
    </Nav>
  );
};

export default Menu;
