import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  font-size: 24px;
  > ul {
  display: flex;
  background: #c4c4c4;
  >li{
    width: 50%;
    text-align: center;
    padding: 16px 0;
    position: relative;
    &.selected::after{
      content: '';
      background: #333;
      height: 3px;
      display: block;
      position:absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      
    }
  }
  }
`;

type Props = {
  value: '-' | '+';
  onChange: (category: '-' | '+') => void
}
const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = {'-': '支出', '+': '收入'};
  type Keys = keyof typeof categoryMap
  const [categoryList] = useState<Keys[]>(['-', '+']);
  const category = props.value;
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li className={category === c ? 'selected' : ''}
              key={c}
              onClick={() => {props.onChange(c);}}
          >{categoryMap[c]}</li>
        )}
      </ul>
    </Wrapper>
  );
};

export {CategorySection};