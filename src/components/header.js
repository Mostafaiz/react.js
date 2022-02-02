import React from 'react';

const Header = () =>{

    const getTheYear = () =>{
        const newDate = new Date();
        return newDate.getFullYear();
    }
    return (
        <div>
                 the dat is {getTheYear()}
        </div>
    )
}

export default Header;