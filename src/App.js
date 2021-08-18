import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import { Component } from 'react';

import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Books from './components/Home/Books';
import BookShelf from './components/Home/BookShelf';
import SearchButton from './components/Search/SearchButton';


import './App.scss'

class App extends Component {

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }


updateSearchPageState = state => {
  this.setState({showSearchPage: state});
}

  render(){
    return (
      <div className="app">
         {this.state.showSearchPage ? (
          <Search showSearchPage={this.state.updateSearchPageState}/>
           ) : ( 
            <div className="list-books">
    <Header />
    <Books />
    
    <BookShelf />
 
        <SearchButton showSearchPage={this.updateSearchPageState} />
             </div>
           )}
    </div>
   );
 }
 
  }

  export default App;
  

