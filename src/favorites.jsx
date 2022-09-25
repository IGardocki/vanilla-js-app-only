import React, { useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { MealContext } from './MealContext';
import { Header } from './Header'
import { RandomMeal } from './RandomMeal';

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

const Image = styled.img`
width: 200px;
height: 200px;
border: 10px solid black;
&:hover {
  cursor: pointer;
  opacity: 0.8;
  transform: scale (0.98);
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
flex-direction: row;
flex-wrap: wrap;
padding-top: 0px;
gap: 10px 10px;
padding-bottom: 0px;
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


export const Favorites = () => {
    const navigate = useNavigate();
    const { tempFavArray, setTempFavArray } = useContext(MealContext);
    const { tempLocal, setTempLocal } = useContext(MealContext);
    // const { displayArray, setDisplayArray } = useState([]);
    // setDisplayArray(localStorage.getItem('favArray'));

    // useEffect(() => {
    //     console.log("Temp Fav Array", tempFavArray);
    //     let tempArray = []
    //     const local = JSON.parse(localStorage.getItem('favArray'));
    //     console.log(local)
    //     tempArray.push(local)
    //     tempArray.push(tempFavArray)
    //     localStorage.setItem("favArray", JSON.stringify(tempArray));
    // }, [tempFavArray])
        // setDisplayArray(local);
//   useEffect(() => {
//     setTempLocal(localStorage.getItem('favArray'))
// }, [tempFavArray])

        // useEffect(() => {
        //     const local = localStorage.getItem('favArray');
        //     setDisplayArray(local);
        // }, [tempFavArray])
        // useEffect(() => {
        //     const local = JSON.parse(localStorage.getItem('favArray'));
        //     console.log("curr Local is ", local)
        //     // setDisplayArray(local);
        // }, [tempFavArray])


    return (

        <Container>
            
            {/* <Button onClick={() => {
            const local = localStorage.getItem('favArray');
            // const local = JSON.parse(localStorage.getItem('favArray'));
            console.log(local);
            }}>console log fav array local storage</Button>
            <Button onClick={() => {
            const local = localStorage.getItem('favArray');
            console.log("initial values: local: ", local, "tempfavarray: ", tempFavArray);
            localStorage.clear();
            setTempFavArray([]);
            console.log("local storage cleared");
            }}>Clear local storage</Button> */}
                
        <h1>FAVORITES</h1>
            
        
        <h3>Results: {tempFavArray.length}</h3>
        
            <Flex>
<>
                {tempFavArray.map(meal => {

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
                                let tempArray= tempFavArray.filter( el => el.strMeal !== meal.strMeal ); 
                                setTempFavArray(tempArray);
                            }}>Remove From Favorites</Button>
                        </StyledCardInfo>

                        </>
                    )
                })}
            </>
            
        
        </Flex>


        </Container>

    )
}