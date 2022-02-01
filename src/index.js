import React from 'react';
import ReactDom from 'react-dom';

// const App = () =>{
//     return React.createElement('h1',{className:'title'},'Hello World');
// }

const App = () =>(
    <div className='one'>
            <h1>Hello mostafa</h1>
            <h2>Hello mostafa</h2>
    </div>
 )


ReactDom.render(<App/>,document.getElementById('root'))