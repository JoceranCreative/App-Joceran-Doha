import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";


export default function Edit (props) {

    const Book = {
      Id : localStorage.Id,
      Title : localStorage.Title,
      Author : localStorage.Author,
      Comment : localStorage.Comment
    };

    console.log(localStorage);
    const books = props.data;
    const [book, setBook] = useState(Book);
    const navigate = useNavigate();

    const handleSubmit = () => {

      let copy = books.filter((item) => book.Id != item.Id);
      copy = [ ...copy, book ];
      props.editBook(copy);
      
      let path = `/library`; 
      navigate(path);
    }

    const handleInputChange = event => {
        const { name, value } = event.target;
        setBook({ ...Book, [name]: value });
      }
    
    return (
        <div className="h-full">
            <h2>Edit</h2>
            <form className="max-w-sm m-auto">
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Title
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="Title" type="text" value={book.Title} onChange= {handleInputChange}/>
                </div>
              </div>

              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Author
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="Author" type="text" value={book.Author} onChange={handleInputChange}/>
                </div>
              </div>

              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Comment
                  </label>
                </div>
                <div className="md:w-2/3">
                  <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" name='Comment' type="textarea" value={book.Comment} onChange={handleInputChange}/>
                </div>
              </div>
              

              <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                  <button className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={handleSubmit}>
                    Edit
                  </button>
                </div>
              </div>
            </form>
        </div>
    )
}