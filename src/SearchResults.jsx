import React, { useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom'

import { MealContext } from './MealContext';
import { Header } from './Header'
import { Homepage } from './Homepage'
import { RandomMeal } from './RandomMeal';
import styled from 'styled-components';
import { useParams } from "react-router";

const StyledCard = styled.div`
display: flex;
flex-direction: row;
width: 750px;
flex-wrap: wrap;
justify-content: center;
background-color: #f5f5f5;
border-radius: 15px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
margin: 40px 0;
pad
&:hover {
    opacity: 2.5;
    transform: scale (2.98);
`
const StyledCardInfo = styled.div`
display: flex;
flex-direction: column;
mid-width: 1496px;
justify-content: space-evenly;
align-items: center;
background-color: #f5f5f5;
border-radius: 15px;

box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
margin: 5px 0;


`
const Flex = styled.div`
display: flex;
flex-wrap: wrap;
padding-top: 0px;
gap: 20px 20px;
padding-bottom: 15px;
align-items: center;
text-align: center;
justify-content: space-between;
color: black;
& > div,
& >ul {
  flex: 1;
}`

const Container = styled.div`
width: 1000px;
max-width: 100%;
padding: 0 1px;
margin: 0 auto;


`
const Image = styled.img`
width: 200px;
height: 200px;
border: 10px solid black;
&:hover {
  cursor: pointer;
  opacity: 0.8;
  transform: scale (0.98);
`
const Button = styled.button`
border-radius: 50px;
border: none;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
cursor: pointer;
font-size: 16px
font-weight: 700;
padding: 10px 20px;
background-color: black;
color: white;
&:hover {
  opacity: 0.8;
  transform: scale (0.98);
  font-type: poppins;
  
`



export const SearchResults = () => {
    const { mealArray, setMealArray, individualMealDetails, setIndividualMealDetails, mealSearchText, catMealArray, setCatMealArray } = useContext(MealContext);
    const navigate = useNavigate();
    const { query } = useParams();
    const { tempFavArray, setTempFavArray } = useContext(MealContext);
    const { tempLocal, setTempLocal } = useContext(MealContext);

    // makes api fetch with different url depending on the site's url
    useEffect(() => {
        
       let url = ''
       console.log('query 0', query[0], 'query 1', query[1])

       // searches api by category or area
        if(query[0]==="c" || query[0] === "a"){
            url = `https://www.themealdb.com/api/json/v1/1/filter.php?${query[0]}=${query.slice(2)}`
        }

        // searches api by meal name
        else if(query[0]==="s"){
            url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.slice(2)}`
        }

        // was going to be used to get all recipes, but ended up deciding against
        // this functionality
        else if(query[0]==="r"){
            url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`
            console.log("query r ran")
        }else{
            navigate('/error') 
        }
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log("url ", url)
                data.meals ? (
                    data.meals.length !== 1 ? (
                    setMealArray(data.meals) 
                    ):(
                        navigate(`/details/${data.meals[0].idMeal}`)
                    )
                    ): navigate('/error'); 
            })
    }, [mealSearchText])

    return (
        <>
        <h3>Results: {mealArray.length}</h3>
        <Container>
            <Flex>
        
            
            <>
                {mealArray.map(meal => {
                    return (
                        <>
                        <StyledCardInfo>
                            <div onClick={() => {
                            navigate(`/details/${meal.idMeal}`)
                            }}>  
                            <h6 style={{fontSize:'15px'}}>{meal.strMeal}</h6>
                            <Image src={meal.strMealThumb} alt={meal.strMeal} style={{width: '200px', height:'200px'}} />
                            </div>
                            <Button onClick={() => {
                                //checks if the current meal is in tempFavArray before putting it in tempFavArray for display on favorites page
                            let contains = 0;
                            for(let i of tempFavArray){
                                if(i.strMeal === meal.strMeal){
                                    contains = 1
                                }
                            }
                            if(!contains){
                                setTempFavArray(current => [...current, meal])
                                console.log("added to favorites");

                                // works on the local storage of the favorites

                                // let local = []
                                // // local = JSON.parse(localStorage.getItem('favArray'));
                                // local.push(JSON.parse(localStorage.getItem('favArray')))
                                // // // local.push(localStorage.getItem('favArray'));
                                // // local.push(meal)
                                // localStorage.setItem("favArray", JSON.stringify(local));
                                // // localStorage.setItem("favArray", local);

                            }
                            }}>Add to Favorites</Button>
                        </StyledCardInfo>

                        </>
                    )
                })}
            </>
            
        
        </Flex>
        </Container>
        </>
    )
}
   