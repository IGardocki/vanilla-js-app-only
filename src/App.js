import React, { useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, } from 'react-router-dom'

import { MealContext } from './MealContext';
import { Header } from './Header'
import { Homepage } from './Homepage'
import { RandomMeal } from './RandomMeal';
import { SearchResults } from './SearchResults';
import {MealDetails} from './MealDetails';
import {ErrorLanding} from './ErrorLanding';
import { Favorites } from './favorites'


function App() {

  // for searching meals, then displaying a list of appropriate meals
  const [mealArray, setMealArray] = useState([])
  const [mealSearchText, setMealSearchText] = useState('')

  // for for passing in meal details if a user clicks on a picture
  const [individualMealDetails, setIndividualMealDetails] = useState({})

  // for setting the random 'meal of the day'
  //
  const [randomMeal, setRandomMeal] = useState({});

  // IAN, 29AUG: ATTEMPT AT CREATING A SEARCH BASED ON MEAL CATEGORY
  const [catMealArray, setCatMealArray] = ([])

  const [tempFavArray, setTempFavArray] = useState([])

  const { tempLocal, setTempLocal } = useState([]);

  const [catSubmenuDisplay, setCatSubmenuDisplay] = useState('none');

  const passContext = { mealArray, setMealArray, mealSearchText, setMealSearchText, individualMealDetails, setIndividualMealDetails, randomMeal, setRandomMeal, catMealArray, setCatMealArray, catSubmenuDisplay, setCatSubmenuDisplay, tempFavArray, setTempFavArray, tempLocal, setTempLocal };

  // on loading, picks a random meal to display
  useEffect(() =>{  
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data => {
      setRandomMeal(data.meals[0])
    })
  }, [])


  // // fetches per a search for meal name
  // useEffect(()=> {
  //   fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealSearchText}`)
  //   .then(res => res.json())
  //   .then(data => {
  //     data.meals ? setMealArray(data) : console.log('Error');

  //     console.log('meal search:', data)
  //   })
  // }, [mealSearchText])

  
  return (
    <MealContext.Provider value={passContext}>

      <Router>
        
        <Header />
        <Routes>

          <Route path='/' element={<Homepage />} />
          <Route path='/error' element={<ErrorLanding />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/details/:id' element={<MealDetails />} />
          <Route path='/searchResults/:query' element={<SearchResults />} />
        
        </Routes>
      </Router>
    </MealContext.Provider>

  );
}

export default App;

////////////Different search links////////////////


  // https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian
  //name: www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

  //first letter: www.themealdb.com/api/json/v1/1/search.php?f=a

  //By id: www.themealdb.com/api/json/v1/1/lookup.php?i=52772

  // Random Meal (single): www.themealdb.com/api/json/v1/1/random.php

  // all meal categories: www.themealdb.com/api/json/v1/1/categories.php

  // List all Categories, Area, Ingredients
  // www.themealdb.com/api/json/v1/1/list.php?c=list
  // www.themealdb.com/api/json/v1/1/list.php?a=list
  // www.themealdb.com/api/json/v1/1/list.php?i=list

  // Filter by main ingredient: www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast

  // Filter by Category: www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

  // Filter by Area: www.themealdb.com/api/json/v1/1/filter.php?a=Canadian

