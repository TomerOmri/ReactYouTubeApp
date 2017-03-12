/**
 * Created by I330971 on 2/9/2017.
 */
// React is not defined
// that happened because we didnt say explisitly that we want an access to use the JS files of React.
// Javascript is sperating all data and code in a way that if we dont ask - we cant access it

// Ask access for React - just go and take it from the node_modules we npm installed before
// import react as a javascript module to this component
import React, { Component } from 'react';                  // core react library - know how to work with react components, knows how to render them, hot to nest them together
import ReactDOM from 'react-dom';           // a seperate library that contorls the component rendering to the dom:
import YTSearch from 'youtube-api-search';

import NavBar from './components/nav_bar';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyD5wbOmDPDL4WPUHw72lJYCgF8tKADwtbE';






class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
            searchTerm: ''
        }


        this.videoSearch('surfboards');

    }


    videoSearch(term) {
        // 3. ES6 Syntax, videos and videos are the same name
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            // == this.setState({ videos: videos })
        });
    }

    render(){


        return(
            <div>
             <NavBar />
            <SearchBar onSearchTermChange={ term => this.videoSearch(term)  } />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} />
            </div>
        );

    }
}

// We need to say React take this component generated HTML and put it on the page (in the DOM)
// RENDERING COMPONENT TO THE DOM
ReactDOM.render(<App />, document.querySelector('.container')); // create an instance of App class: <App></App> - and that what we are sending to the DOM.
//ReactDOM.render( INSTANCE OF COMPONENT  ,  WHERE TO RENDER IT);

// Create a new component.
// This component should produce some HTML
// App is a class - not an instance
// const App = function() {
//
//     return <div>Hi!</div>;
// }

// const App = () => {
//     return (
//         <div>
//             <SearchBar/>
//         </div>
//     );
// }


// 2. using ES6 arrow as a function, and changing the name from data to vfc
// YTSearch({key: API_KEY, term: 'surfboards'}, (videosFromCall) => {
//     this.setState({videos: videosFromCall});
// });

// 1. Regular Callback with function
// YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
//     this.setState({videos: data});
// });
