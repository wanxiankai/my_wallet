import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';

const NavWrapper = styled.nav`
//border:1px blue solid;
line-height: 24px;
box-shadow: 0 0 3px rgba(0,0,0,0.25);
  >ul {
    display:flex;
      >li {
      text-align:center;
      width:33.3333%;
      padding:16px
    }
  }
`;

const Nav = ()=> {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/tags">标签页</Link>
        </li>
        <li>
          <Link to="/money">记账页</Link>
        </li>
        <li>
          <Link to="/statistics">统计页</Link>
        </li>
      </ul>
    </NavWrapper>
  )
}

export default Nav;