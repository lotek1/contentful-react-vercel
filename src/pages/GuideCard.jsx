import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import useContentful from "../useContentful";


const GuideCard = () => {
  const [entries, setEntries] = useState([])
  const [filter, setFilter] = useState("")
  const {getGuides} = useContentful()
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();

  useEffect(() => {
    getGuides().then(data => {
      setEntries (data)
    })
  }, [])
const filteredEntries = entries.filter(entry => {
  return entry.fields.header?.toLowerCase().includes(filter.toLowerCase())
})

  return (
    <>
    {!isLoading && !user && (
   <button className="button" onClick={() => loginWithRedirect()}>
      Login
   </button>
   )}
    {!isLoading && user?.name && (
    <> <button className="button" onClick={() => logout()}>
      Logout
    </button>
    <span>Hello {user?.nickname} </span>
    </>
    )}
      <input className="search" type="text" placeholder="Search Guides" value={filter} onChange={({ target }) => setFilter(target.value) } />
      
      {filteredEntries.map((entry) => {
        const {fields} = entry
        
        return (
          <Main key={entry.sys.id}>
            <Wrapper background={fields.thumbnail.fields.file.url}>
              <TextContainer>
                <Link to={`/guide/${fields.slug}`}>
                <Title>{fields.header}</Title>
                </Link>
              </TextContainer>
            </Wrapper> 
          </Main>
        )
      })}
    </>
  );
};

export default GuideCard;

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
  width: 400px;
  height: 400px;
  border-radius: 20px;
  box-shadow: 0px 20px 40px rgba(52, 53, 99, 0.2),
    0px 1px 3px rgba(0, 0, 0, 0.05);
  background: ${({background}) =>
    background && `url(${background}) center no-repeat`};
  background-size: auto 150%;
`;

const TextContainer = styled.div`
  cursor: pointer;
  display: grid;
  padding: 20px;
  gap: 10px;
  width: 100%;
  background: rgba(255, 255, 255, 0.3);
  a:link,
  a:visited {
    text-decoration: none;
    color: #000;
  }
  :hover {
    height: fit-content;
    width: auto;

    p:last-child {
      visibility: visible;
      display: block;
    }
  }
`;

const Title = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  margin: 0;
  font-weight: bold;
  color: #fff;
  margin: 0px;
`;


