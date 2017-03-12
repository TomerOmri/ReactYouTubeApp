/**
 * Created by I330971 on 2/13/2017.
 */

import React, {Component} from 'react';

// // functional component
// const SearchBar = () => {
//     return <input /> ; // will transfer to a call like React.createElement...
// }


// class based component
// declaring new js class

// define a new class and give it access to all funcionallty from react.components class

// we need to give the class component a way to render itself,
// meaning a way to render = giving us back JSX - render method

class SearchBar extends Component{

    constructor(props){
        super(props);

        // initiolizing state object thate includes prop term
        // like creating a state, only here! every other manipultation on state
        // we look diffrent.
        //   state     =   object
        this.state = {term: ''};
    }


    // render() { // this is a method. must be on every class
    //     //      input returen value   function that will get event  and update state
    //     return <input onChange={event => this.setState( {searchTerm: event.target.value })} />
    // }


    render() { // this is a method. must be on every class
        //      input returen value   function that will get event  and update state
        return(
            <div className="search-bar">

                <div>
                    <input
                    value={this.state.term}
                    placeholder="Search for videos.."
                    onChange={event => this.onInputChange(event.target.value)} />
                </div>

                <div>
                    <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={ event => this.onButtonClick()}>Search</button>
                </div>

            </div>

            );
    }

    onInputChange(term){
        // 1. set the state with a term
        // 2. call the callback that we got from app

        this.setState({term});
        // this.props.onSearchTermChange(term);
    }

    onButtonClick(){
        var searchTerm = this.state.term;
        this.props.onSearchTermChange(searchTerm);
    }

}



export default SearchBar;