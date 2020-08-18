import styled from 'styled-components';

const NotesSection = styled.section`
  background: #f5f5f5;
  padding: 10px 16px;
  font-size: 14px;
  >label {
    display: flex;
    align-items: center;
      > span {margin-right: 16px;flex: none}
      > input {
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
      }
  }
`;

export {NotesSection}