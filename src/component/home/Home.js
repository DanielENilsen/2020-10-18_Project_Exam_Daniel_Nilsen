import React from 'react';
import SearchForm from "../searchForm/Form";


function HomePage() { 

    return (
        <div className = "heroSection">
            <div className = "heroText"></div>
            <div className = "innerBox innerBox_frontPage">
                <h1 className = "heroText__text">Find your booking on Holidaze</h1>
                <SearchForm />  
                
            </div>
        </div>
    );
}
export default HomePage;