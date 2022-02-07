import React,{Component} from 'react';

class Header extends Component {

    // inputChangeHandler(){
    //     console.log('input changed')
    // }

    inputChangeHandler(event){
        console.log(event.target.value);
        //meghdar inputi ke darim


        console.log('hey');
        // be sorat sabet mikonim
    }


    render(){
        return (

            <header
            // onClick={() => console.log('iwas clicked')}
            >
            <div className='logo'>Logo</div>
            <input
            onChange={this.inputChangeHandler}
            // onChange={this.inputChangeHandler}

            ></input>
           </header>
        )
    } 
}


export default Header;