import { MealContext } from "./MealContext";
import React, { useState, useContext, useEffect } from "react";
import VanillaJS from "./VanillaJS.png";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { SearchResults } from "./SearchResults";
import { ErrorLanding } from "./ErrorLanding";


const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0 5px;
  margin: 0 auto;
  flex-wrap: wrap;  
  `

  const Flex = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
padding-top: 0px;
color: black;
& > div,
& >ul {
  flex: 1;
}`

export const Submenu = ({ sub }) => {
    const [tempMealCatArr, setTempMealCatArr] = useState([]);
    const navigate = useNavigate();
    const { mealArray, setMealArray, individualMealDetails, setIndividualMealDetails, mealSearchText, catMealArray, setCatMealArray, setMealSearchText } = useContext(MealContext);

    const handleClick = (item) => {
        setMealSearchText(item);
        // fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${item}`)
        //     .then(res => res.json())
        //     .then(data => setTempMealCatArr(data.meals))
    }

    // useEffect(() => {
    //     const categoryMealPromises = tempMealCatArr.map(catMeal =>
    //         fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${catMeal.idMeal}`)
    //             .then(res => res.json())
    //             .then(data => data.meals))
    //     Promise.all(categoryMealPromises)
    //         .then(data => console.log('meal promises:', data))
    // }, [tempMealCatArr])

    return (
        // <li>thing</li>
        <Container style={{display: 'flex', flexDirection:'row', justifyContent: 'space-evenly'}}>
            
            {sub.subMenu.map(item => {
                return (
                    <Flex onClick={() => { 
                        handleClick(item);
                        // navigate(`/searchResults/${item}`)
                        
                        navigate(`/searchResults/${sub.url}=${item}`)
                    }}><h3 style={{fontSize:'1em', color:'black'}}>{item}</h3></Flex>
                )
            })}
            
           

        </Container>

    )
}