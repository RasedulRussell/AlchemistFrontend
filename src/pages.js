import React, { Component } from 'react';
import Contacts from './components/contacts'
import CategoryHomePage from './components/categoryHomePage';


export const Home = () => (
    <Contacts></Contacts>
)

export const Sports = () => (
    <CategoryHomePage
        title={"Sports"}
        url={"http://localhost:8080/articles/sports"}>
    </CategoryHomePage>
)

export const Entertainment = () => (
    <CategoryHomePage
        title={"Entertainment"}
        url={"http://localhost:8080/articles/entertainment"}>
    </CategoryHomePage>
    
)

export const Bangladesh = () => (
    <div>
        <h1>Bangladesh</h1>
    </div>
)

export const Business = () => (
    <div>
        <h1>Business</h1>
    </div>
)