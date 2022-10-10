import './index.css';
import { MealContext } from "./MealContext";
import React, { useState, useContext, useEffect } from "react";
import VanillaJS from "./VanillaJS.png";
import VanillaJS2 from "./VanillaJS2.png";
import favoritesLogo from "./favoritesLogo.png";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { SearchResults } from "./SearchResults";
import { ErrorLanding } from "./ErrorLanding";
import { Submenu } from './Submenu';
import { CatDropdown } from "./CatDropdown";
import { AreaDropdown } from './AreaDropdown';

import { Container, Row, Col, Button } from 'react-bootstrap';


// const StyledHeader = styled.header`
//   background-color: white;
//   padding: 5px 0;
//   padding-bottom: 5px;
//   height: 150px;
//  margin-top: 5px;
//   `
// const StyledHeader2 = styled.div`
//   background-color: white;
//   padding: 10px 0;
//   `

// const Container = styled.div`
//   width: 1000px;
//   max-width: 100%;
//   padding: 0 10px;
//   margin: 0 auto;
//   `
// const NavContainer = styled.div`
// width: 1000px;
// max-width: 100%;
//   padding: 0 1px;
//   margin: 0 auto;
//   display: flex;
//   flex-basis: auto;
//   flex-direction: row;
//   justify-content: center;
//   `

// const NavLeft = styled.section`
//   display: flex;
//   align-items: left;
//   justify-content: left;
//   flex-direction: row;
//   `
// const NavCenter = styled.nav`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-bottom: 20px;
//   flex-direction: row;
//   `
// const NavRight = styled.nav`
//   display: flex;
//   align-items: right;
//   align-items: center;
//   justify-content: right;
//   margin-bottom: 20px;
//   flex-direction: row;
//   `

// const Button = styled.button`
// border-radius: 50px;
// border: none;
// box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
// cursor: pointer;
// font-size: 16px
// font-weight: 700;
// padding: 15px 60px;
// background-color: black;
// color: white;
// &:hover {
//   opacity: 0.8;
//   transform: scale (0.98);
//   font-type: poppins;
// `
const Logo = styled.img`
// width: 200px;
// height: 10vh;
cursor: pointer;
`

// const Flex = styled.div`
// display: flex;
// padding-top: 15px;
// padding-bottom: 85px;
// align-items: center;
// text-align: center;
// justify-content: space-between;
// color: black;
// & > div,
// & >ul {
//   flex: 1;
// }`

// const Flex2 = styled.div`
// display: flex;
// padding-top: 20px;
// padding-bottom: 40px;
// align-items: center;
// text-align: center;
// justify-content: space-between;
// color: black;
// & > div,
// & >ul {
//   flex: 1;
// }`


// const FavoritesImage = styled.img`
// width: 30%;
// // margin-left: 35%;
// border: 1vh solid black;
// &:hover {
//   cursor: pointer;
//   opacity: 0.8;
//   transform: scale (0.98);
// `
// const SubmenuStyle = styled.div`
// border-radius: 50px;
// border: none;
// box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
// cursor: pointer;
// font-size: 16px
// font-weight: 700;
// padding: 15px 60px;
// background-color: grey;
// color: white;
// &:hover {
//   opacity: 0.8;
//   transform: scale (0.98);
//   font-type: poppins;
// }
// `

// const SubmitButton = styled.input`
// width: 187px;
// border-radius: 50px;
// border: none;
// box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
// cursor: pointer;
// font-size: 16px
// font-weight: 700;
// padding: 15px 60px;
// background-color: black;
// color: white;
// &:hover {
//   opacity: 0.8;
//   transform: scale (0.98);
//   font-type: poppins;
// `

const StyledForm = styled.form`
display:flex;
flex-direction: column;
width: 100%;
`



export const Header = () => {

  const { mealSearchText, setMealSearchText, mealArray, setMealArray, catSubmenuDisplay, setCatSubmenuDisplay } = useContext(MealContext);
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const [categorySubMenu, setCategorySubMenu] = useState([]);
  const [areaSubMenu, setAreaSubMenu] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => res.json())
      .then(data => setCategorySubMenu(data.categories.map(category => category.strCategory)))
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then(res => res.json())
      .then(data => setAreaSubMenu(data.meals.map((meal) => meal.strArea)))
  }, [])

  const CategoryMenuItems =
  {
    title: 'Category',
    url: 'c',
    subMenu: categorySubMenu
  }

  const AreaMenuItems =
  {
    title: 'Area',
    url: 'a',
    subMenu: areaSubMenu
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setMealSearchText(searchText);
    if (searchText) {
      navigate(`/searchResults/s=${searchText}`);
    }

  }

  const handleCatButtonClick = () => {
    if (catSubmenuDisplay == 'none') {
      setCatSubmenuDisplay('block')
    } else {
      setCatSubmenuDisplay('none')
    }
  }

  return (

    <Container fluid>
      {/* <Row style={{justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap'}}> */}
      <Row style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Col style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>

          <img src={favoritesLogo} alt="VanillaJS2" height='100 vh' onClick={() => navigate(`/favorites`)} />
        </Col>
        <Col style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          <img src={VanillaJS} alt="VanillaJS" height='100vh' onClick={() => navigate('/')} />

        </Col>
        <Col style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          <StyledForm onSubmit={handleSubmit}>
            <input type="text" placeholder="Search Meals" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <Button type="submit">Submit</Button>
          </StyledForm>
        </Col>
      </Row>
      <Row>
        <Col>
          <CatDropdown />
        </Col>
        <Col>
          <AreaDropdown />
        </Col>
      </Row>
    </Container>
  )
}














    // <>
    //   <StyledHeader style={{ gap: '10px 20px' }}>
    //     <NavContainer style={{ gap: '10px 20px', justifyContent: 'space-between' }}>
    //       <NavLeft>
    //         <Image src={FAVORITES} alt="VanillaJS2" onClick={() => navigate(`/favorites`)} />
    //       </NavLeft>
    //       <NavCenter>
    //         <Logo src={VanillaJS} alt="VanillaJS" onClick={() => navigate('/')} />
    //       </NavCenter>
    //       <NavRight>
    //         <StyledForm onSubmit={handleSubmit}>
    //           <input type="text" placeholder="Search Meals" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
    //           <SubmitButton type="submit" />
    //         </StyledForm>
    //       </NavRight>
    //     </NavContainer>
    //   </StyledHeader>

    //   <Container>
    //     <Container>
    //       <CatDropdown />
    //     </Container>
    //     <Container>
    //       <AreaDropdown />
    //     </Container>
    //   </Container>
    // </>

