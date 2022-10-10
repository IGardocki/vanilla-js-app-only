import React, { useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, } from 'react-router-dom'
import styled from 'styled-components'
import { MealContext } from './MealContext';
import { Header } from './Header'
import { Homepage } from './Homepage'
import { RandomMeal } from './RandomMeal';
import { SearchResults } from './SearchResults';
import { MealDetails } from './MealDetails';
import { ErrorLanding } from './ErrorLanding';
import { HeaderMenuItems } from './HeaderMenuItems';
import { Submenu } from './Submenu';

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
  font-type: poppins;
`
const StyledHeader = styled.header`
    display: flex;
justify-content: center;
  background-color: white;
  padding: 5px 0;
  padding-bottom: 5px;
  cursor: pointer;
  height: 50px;
  width: 100%;
  margin-top: '5px';
  `

  const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 0px 10px;
  margin: 0 auto;
  `
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
  color: white;
  border-radius: 10px;
  `

  const SubmenuStyle = styled.div`
  //ian stuff
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 1em;
  font-weight: 700;
  padding: 15px 60px;
  background-color: white;
  color: white;
  &:hover {
    opacity: 0.8;
    transform: scale (0.98);
    font-type: poppins;
  }
  `

const Flex = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
// padding-top: 2px;
color: black;
& > div,
& >ul {
  flex: 1;
}`

export const CatDropdown = () => {

    const { mealSearchText, setMealSearchText, mealArray, setMealArray, catSubmenuDisplay, setCatSubmenuDisplay } = useContext(MealContext);

    const [categorySubMenu, setCategorySubMenu] = useState([]);
    const [display, setDisplay] = useState('none')

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => setCategorySubMenu(data.categories.map(category => category.strCategory)))
    }, [])
    const CategoryMenuItems =
    {
        title: 'Category',
        url: 'c',
        subMenu: categorySubMenu
    }

    function handleClick() {
        if (display == 'none') {
            setDisplay('block')
        } else {
            setDisplay('none')
        }
    }

    return (
      <Flex onClick={handleClick}>
      <h3 style={{ color: 'black' }}>Category</h3>
      <Container style={{ display: display }}>
        <SubmenuStyle>
          <Submenu sub={CategoryMenuItems} />
        </SubmenuStyle>
      </Container>
    </Flex>


//orginal styling - ian, 9 oct
        // <Flex onClick={() => handleClick()}>
        //     <StyledHeader style={{ color: 'white' }}><h3>Category</h3></StyledHeader>
           
        //         <SubmenuStyle style={{ display: display }}>
        //             <Submenu sub={CategoryMenuItems} />
        //         </SubmenuStyle>
         
        // </Flex>
    )
}


