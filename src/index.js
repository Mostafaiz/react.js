import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/header';

// const App = () =>{
//     return React.createElement('h1',{className:'title'},'Hello World');
// }

const App = () =>(
    <div className='one'>
            <h1>Hello mostafa 300</h1>
            <Header/>

    </div>
 )


ReactDom.render(<App/>,document.getElementById('root'))