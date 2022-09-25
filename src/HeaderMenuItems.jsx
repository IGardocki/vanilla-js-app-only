import { MealContext } from "./MealContext";
import React, { useState, useContext, useEffect } from "react";
import VanillaJS from "./VanillaJS.png";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import  styled from "styled-components";
import { SearchResults } from "./SearchResults";
import { ErrorLanding } from "./ErrorLanding";

export const HeaderMenuItems = [
    {
        title: 'Category',
        url:'',
        subMenu: [
            
        ]
    },
    {
        title: 'Area',
        url: '',
        subMenu: [
            
        ]
    }
    
]

