import React, { useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { MealContext } from './MealContext';
import { Header } from './Header'
import { Homepage } from './Homepage'


const StyledCard = styled.div`
display: flex;
width: 100vh;
justify-content: center;
cursor: pointer;
img{
width: 550px;
border: 10px solid black;
}
`
const Container = styled.div`
width: 100%;
max-width: 100%;
padding: 0 10px;
margin: 0 auto;
`

const Flex = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
padding-bottom: 10px;
text-transform-value: Capitalize;


& > div,
& >ul {
  flex: 1;
}`

export const RandomMeal = () => {
    const { randomMeal, setRandomMeal, individualMealDetails, setIndividualMealDetails } = useContext(MealContext);
    console.log('random meal: ', randomMeal);
    const navigate = useNavigate();


    return (
        <Container>
            <Flex>
            <h2 style={{fontSize: '30px'}}>{randomMeal.strMeal} </h2>
            
        <StyledCard onClick={() => {
                setIndividualMealDetails(randomMeal);
                navigate(`/details/${randomMeal.idMeal}`)}
            }>
                
                <img src={randomMeal.strMealThumb} alt={randomMeal.strMeal} style={{height:'350px', width:'400px'}}/>
        </StyledCard>
            </Flex>
            </Container>

)
}
