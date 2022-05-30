import {useState, useEffect} from 'react';
import useContentful from ".././useContentful";
import { useParams, Link } from "react-router-dom";
import styled from 'styled-components';

const GuideDetail = () => {
  const { slug } = useParams();
  const {getGuides} = useContentful();
  const [entries, setEntries] = useState([])
  

  useEffect(() => {
    getGuides().then(data => {
      
      setEntries (data)
    })
  }, [])
if (entries.length === 0) {
  return <div>Loading...</div>
}
const entry = entries.find(entry => entry.fields.slug === slug)
console.log(entry)

  return (
      <div>
          <Link to="/" style={linkStyle}><h1>Back</h1></Link>
    <Main>  
      <Wrapper background={entry.fields.image.fields.file.url}>
        <Content>
          <p>{entry.fields.header}</p>
          {entry.fields.content}
        </Content>
      </Wrapper>
    </Main>
    </div>
  
  );
};

export default GuideDetail;

const linkStyle = {
    textDecoration: "none",
    color: 'black'
  };

const Main = styled.div`
font-family: "Barlow";
  margin: 10px;
  display: grid;
  row-gap: 20px;
  justify-content: center;
  align-items: center;

`;
const Wrapper = styled.div`

  display: grid;
  align-items: flex-end;
  width: 500px;
  height: 500px;
  border-radius: 20px;
  box-shadow: 0px 20px 40px rgba(52, 53, 99, 0.2),
    0px 1px 3px rgba(0, 0, 0, 0.05);
  background: ${(props) =>
    props.background && `url(${props.background}) center no-repeat`};
  background-size: auto 150%;
`;

const Content = styled.div`
  font-weight: normal;
  padding: 20px;
  font-size: 20px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.7);
  margin: 0px;
  
`;