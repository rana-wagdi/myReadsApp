import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, BrowserRouter } from "react-router-dom";
import { Component } from 'react';

import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Books from './components/Home/Books';
import BookShelf from './components/Home/BookShelf';
import SearchButton from './components/Search/SearchButton';
import BookList from './components/Home/BookList';
import *as BooksAPI from './BooksAPI';

import './App.scss'

class App extends Component {

  state = {
    
    showSearchPage: false,
    books: [],
    query: ""
  }


  updateSearchPage = state => {
    this.setState({ showSearchPage: state });
  }
  componentDidMount() {

    BooksAPI.getAll().then(books => this.setState({ books }))
  }

  changeShelf = (book, shelf) => {


    BooksAPI.update(book, shelf).then(response => {
      book.shelf = shelf;

      this.setState(prevState => ({
        books: prevState.books

          .filter(book => book.id !== book.id)

          .concat(book)
      }));
    });
  };



  render() {
    const { books } = this.state;
    return (

      <BrowserRouter>

        <div className="app">


          <Route
            path="/search"
            render={() => (
              <Search books={books} changeShelf={this.changeShelf} />
            )}

          />


          <Route
            exact
            path="/"
            render={() => (
              <div className="list-books">
                <Header />
                {/* <Books /> */}

                <BookList allBooks={this.state.books} changeShelf={this.changeShelf} />
                <Link to="/search">
                  <SearchButton showSearchPage={this.updateSearchPage} />
                </Link>
              </div>



            )}

          />
        </div>
      </BrowserRouter>
    );
  }

}

export default App;


