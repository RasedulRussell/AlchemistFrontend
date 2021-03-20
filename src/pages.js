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
    <CategoryHomePage
        title={"Bangladesh"}
        url={"http://localhost:8080/articles/bangladesh"}>
    </CategoryHomePage>
)

export const Others = () => (
    <CategoryHomePage
        title={"Others"}
        url={"http://localhost:8080/articles/other"}>
    </CategoryHomePage>
)