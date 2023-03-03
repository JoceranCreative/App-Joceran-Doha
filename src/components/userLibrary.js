import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function UserLibrary (props) {

    const navigate = useNavigate(); 
    const {books} = props;

    const routeChange = (path) =>{  
        navigate(path);
    }

    const setData = (book) => {
        localStorage.clear();
        localStorage.setItem('Id', book.Id);
        localStorage.setItem('Title', book.Title);
        localStorage.setItem('Author', book.Author);
        localStorage.setItem('Comment', book.Comment);
        routeChange(`/edit`);
    };

    const deleteBook = (book) => {
        const copy = books.filter((item) => book.Id != item.Id);
        props.deleteBook(copy);
    }

    return (
        <div className="">
            <h2 className="">UserLibrary</h2>
            <div className="flex-auto">
                <table className="m-auto text-left">
                    <thead className="text-white">
                        <tr className="">
                            <th>Title</th>
                            <th>Author</th>
                            <th>Comment</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book) => {
                            return (
                                <tr key={book.Id}>
                                    <td className="p-3">{book.Title}</td>
                                    <td className="p-3">{book.Author}</td>
                                    <td className="p-3">{book.Comment}</td>
                                    <td className="pl-2">
                                        <button className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setData(book)}>Edit</button>
                                        <button className="m-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={()=>deleteBook(book)}>X</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    </table>
                    <div>
                        <button 
                            className="block m-auto text-center mt-2 bg-gray-100 hover:bg-gray-700 text-black py-1 px-2 rounded"
                            onClick={()=>routeChange(`/search`)}
                            >Rechercher un livre
                        </button>
                    </div>
            </div>
        </div>
    )
}