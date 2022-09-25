import { RandomMeal } from "./RandomMeal"
import { MealContext } from "./MealContext";
import React, { useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
border-radius: 50px;
border: none;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
cursor: pointer;
font-size: 16px
font-weight: 700;
padding: 15px 60px;
background-color: black;
color: white;
&:hover {
  opacity: 0.8;
  transform: scale (0.98);
`
const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0 10px;
  margin: 0 auto;
  align-contents: center;
  `

const StyledCard = styled.div`
display: flex;
flex-direction: column;
width: 700px;

align-items: center;
background-color: white;
border-radius: 15px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
margin: 40px 0;
padding: 60px;
`
const Flex = styled.div`
display: flex;
padding-top: 15px;
padding-bottom: 85px;
align-items: center;
text-align: center;
justify-content: space-between;
color: black;
& > div,
& >ul {
  flex: 1;
}`

export const ErrorLanding = () => {
    const { randomMeal, setRandomMeal } = useContext(MealContext);
    return (
        <>
             <Container>
                <Flex>
            <StyledCard>
            <h1>Sorry we couldn't find the meal you were looking for...</h1>
            <p>Have you considered giving our meal of the day a try?</p>
            <Button onClick={() => fetch('https://www.themealdb.com/api/json/v1/1/random.php')
                .then(res => res.json())
                .then(data => {
                    setRandomMeal(data.meals[0])
                })}><h3 style={{color:'white', fontSize:'15px'}}>Or perhaps a different meal?</h3></Button>
                <RandomMeal />
            </StyledCard>
            </Flex>
            </Container>
        </>
    )
}

