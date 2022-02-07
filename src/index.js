import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/header';
import './styles/style.css'

// const App = () =>{
//     return React.createElement('h1',{className:'title'},'Hello World');
// }

const App = () =>(
    <div className='one'>
            
            <Header/>

    </div>
 )


ReactDom.render(<App/>,document.getElementById('root'))