import { Component } from 'react';
import { useEffect } from "react";
import * as BooksAPI from '../../BooksAPI';


class Books extends Component {
    state = {books: [] };
    componentDidMount(){

           BooksAPI.getAll().then(books => this.setState({ books }));
    }
    render () {
        return (
            <div>
    
            </div>
    
        )
    }
    }
   
export default Books;