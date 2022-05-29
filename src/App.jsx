import React, { useState, useEffect } from 'react'  
import useContentful from './useContentful'
import GuideCard from './guideCard'
import styled from "styled-components"

const App = () => {
const [entries, setEntries] = useState([])
  const {getGuides} = useContentful()

  useEffect(() => {
    getGuides().then(data => {
      setEntries (data)
    })
  }, [])

  return (
  <Wrapper>
    <TitleWrapper>
      <h3> Contentful // React // Vercel </h3>
      <p>Climbing guide for everyone</p>
    </TitleWrapper>  
      {entries.map(entry => { 
        return (
          <GuideCard key={entry.sys.id} guides={entry.fields}/>
        )
      })}
  </Wrapper>
  )
}


export default App

const Wrapper = styled.div`
  font-family: "Barlow";
  margin: 40px;

  display: grid;
  row-gap: 20px;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  * {
    margin: 0;
  }

  display: grid;
  row-gap: 10px;
`;

