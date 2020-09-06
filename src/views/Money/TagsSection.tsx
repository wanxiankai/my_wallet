import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  background: #FFFFFF;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  >ol {
  margin: 0 -12px;
    >li{
      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin:8px 12px;
      &.selected {
      color: #f60;
      }
    }
  }
  >button {
  background: none;
  border: none;
  border-bottom: 1px #333 solid;
  padding: 2px 4px;
  color: #666;
  margin-top: 8px;
  }
`;

type Props = {
  value:string[];
  onChange:(selected:string[])=>void;
}
const TagsSection: React.FC<Props> = (props) => {
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
  const selectedTags = props.value;
  const onAddTag = () => {
    const msg = window.prompt('您想添加的标签名称为');
    if (msg !== null) {
      setTags([...tags, msg]);
    }
  };
  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag);
    if (index >= 0) {
      props.onChange(selectedTags.filter(item => item !== tag));
    }else{
      props.onChange([...selectedTags,tag]);
    }
  };
  const getClass = (item:string)=>selectedTags.indexOf(item)>=0? 'selected':'';
  return (
    <Wrapper>
      <ol>
        {tags.map(item =>
          <li onClick={
            () => onToggleTag(item)
          }
              key={item}
              className={getClass(item)}
          >{item}
          </li>)}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};

export {TagsSection};