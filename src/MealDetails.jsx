import { MealContext } from "./MealContext";
import React, { useState, useContext, useEffect } from "react";
import VanillaJS from "./VanillaJS.png";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { SearchResults } from "./SearchResults";
import { useParams } from "react-router";
import Rogo from "./chef.png";
import { Widget } from "./WidgetComponents/Widget";

const StyledCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #f5f5f5;
border-radius: 15px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
margin: 2px 0;
padding: 2px;
`
const StyledDetailFooter = styled.div`
width:90%;
mid-width: 1496px;
max-width: 1460px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color: #f5f5f5;
border-radius: 15px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
margin: 40px 0;
padding: 60px;
height:350px;
`
const StyledDetailFooter2 = styled.div`
width:90%;
mid-width: 1496px;
max-width: 1460px;
align-items: center;
background-color: #f5f5f5;
border-radius: 15px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
margin: 10px 0;
padding: 40px;
height:300px;
`
const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0 10px;
  margin: 0 auto;

  
  `
const StyledDetailVideo = styled.div`
width:90%;
mid-width: 1496px;
max-width: 1460px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-color: #f5f5f5;
border-radius: 15px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
margin: 40px 0;
padding: 60px;
`
const Image = styled.img`
width: 300px;
margin-left: 0px;
border: 10px solid black;
&:hover {
  cursor: pointer;
  opacity: 0.8;
  transform: scale (0.98);
`
const Logo = styled.img`
width: 200px;

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
margin-bottom: 10px;
&:hover {
  opacity: 0.8;
  transform: scale (0.98);
  font-type: poppins;
  
`
const Flex = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
text-align: center;

color: black;
& > div,
& >ul {
  flex: 1;
}`
const Flex2 = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-evenly;
color: black;
& > div,
& >ul {
  flex: 1;
}`

const NoMarginH1 = styled.h1`
margin: 0px;
font-size: 40px;
`

const NoMarginH3 = styled.h3`
margin: 0px;
font-size: 25px;
`
const CardRight = styled.div`
flex-direction: column;
align-items: center;
`



export const MealDetails = () => {
    const { tempFavArray, setTempFavArray } = useContext(MealContext);

    const [currentMeal, setCurrentMeal] = useState({});
    const [youtubeEmbedLink, setYoutubeEmbedLink] = useState('')
    const [ingredientsArray, setIngredientsArray] = useState([])

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => {
                setCurrentMeal(data.meals[0])
                setYoutubeEmbedLink(data.meals[0].strYoutube.replace('watch?v=', 'embed/'))
            })
    }, [])

    useEffect(() => {
        const tempArray = [];
        for (let i = 1; i <= 20; i++) {
            if (currentMeal[`strIngredient${i}`]) {
                const ingredients = currentMeal[`strIngredient${i}`]
                const measurements = currentMeal[`strMeasure${i}`];
                tempArray.push(`${ingredients} : ${measurements}`)
                setIngredientsArray(tempArray);
            }
        }
    }, [currentMeal])

    useEffect(() => {
        console.log("curr ingredients array: ", ingredientsArray);
    }, [ingredientsArray])


    return (
        <>
            <Container>
                <StyledCard>
                    <div>
                        <NoMarginH1
                        >{currentMeal.strMeal}</NoMarginH1>
                        <NoMarginH3>Category: {currentMeal.strCategory}</NoMarginH3>
                        <NoMarginH3>Area: {currentMeal.strArea}</NoMarginH3>

                        <Flex>
                            <Button onClick={() => {
                                 //checks if the current meal is in tempFavArray before putting it in tempFavArray for display on favorites page
                                let contains = 0;
                                for (let i of tempFavArray) {
                                    if (i.strMeal === currentMeal.strMeal) {
                                        contains = 1
                                    }
                                }
                                if (!contains) {
                                    setTempFavArray(current => [...current, currentMeal])
                                }
                            }}>Add to Favorites</Button>
                        </Flex>

                    </div>
                </StyledCard>
            </Container>

            <Container>
                <StyledDetailFooter>
                    <div>
                        <Image src={currentMeal.strMealThumb} alt={currentMeal} />
                    </div>


                    <Logo src={Rogo} />
                    <Widget />


                </StyledDetailFooter>

                <Flex2>
                    <StyledDetailFooter2>
                        <h2>Ingredients</h2>
                        <Flex2>
                            {ingredientsArray.map((ingredient) =>
                                <h5 style={{ fontSize: '18.5px', margin: '1%' }}>{ingredient}</h5>
                            )}
                        </Flex2>
                    </StyledDetailFooter2>
                </Flex2>

                <StyledDetailVideo>
                    <p style={{ fontSize: '1.2em' }}>{currentMeal.strInstructions}</p>

                    <iframe width="640" height="360" src={youtubeEmbedLink} title={currentMeal.strMeal} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </StyledDetailVideo>
            </Container>
        </>
    )
}
