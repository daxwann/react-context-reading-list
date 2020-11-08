import React, { createContext, useReducer, useEffect } from "react";
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [], getBookFromLocalStorage);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books])

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

const getBookFromLocalStorage = () => {
  const localData = localStorage.getItem('books');
  return localData ? JSON.parse(localData) : [];
}

export default BookContextProvider;
