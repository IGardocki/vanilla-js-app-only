import React, { useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import styled from 'styled-components'
import { MealContext } from './MealContext';
import { Header } from './Header'
import { RandomMeal } from './RandomMeal';

const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
  margin: 0 auto;
  align-items: center;
  width:800px;
background-image: url("https://i.pinimg.com/originals/22/a5/a7/22a5a7b9dbc0e29ccef006dea5981367.png");
background-size: cover;
border: solid black 10px;

  `
  const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 30px 0;
  padding: 10px;
  width: 450px;
  height: 450px;
  `
  const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px
  font-weight: 700;
  padding: 10px 80px;
  background-color: black;
  color: white;
  &:hover {
    opacity: 0.8;
    transform: scale (0.98);
    font-type: poppins;
  `
  const Flex = styled.div`
display: flex;
align-items: center;
text-align: center;
padding-top: 15px;
color: black;
& > div,
& >ul {
  flex: 1;
}`

 const ButtonText = styled.h1`
 font-size: 20px;
 color: white;
 `

export const Homepage = () => {

    const {randomMeal, setRandomMeal} = useContext(MealContext);

    return (
        <Container>
            <Flex>
          <Button bg='#E8E47D' color='white' onClick={() => fetch('https://www.themealdb.com/api/json/v1/1/random.php')
                .then(res => res.json())
                .then(data => {
                    setRandomMeal(data.meals[0])
                })}>
              <ButtonText >Give me another meal</ButtonText>
            </Button>
            </Flex>

        <StyledCard>
            
         <RandomMeal />
            
        </StyledCard>
        </Container>
    )
}