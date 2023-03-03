import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Search (props) {

    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);
    const navigate = useNavigate();  
    const {books} = props;

    const routeChange = () =>{ 
        let path = `/library`; 
        navigate(path);
    }

    const searchBook = e => {
        if(e.key ==="Enter") {
            axios   .get('https://www.googleapis.com/books/v1/volumes?q='+search+'&maxResults=5&key=AIzaSyAUZEBrNLr08MDn3BEajpVNF2fSw-GhrHg')
                    .then(res=>setResult(res.data.items))
                    .catch(err=>console.log(err));
                }    
    }

    const launchSearch = () => {
        
        axios   .get('https://www.googleapis.com/books/v1/volumes?q='+search+'&maxResults=5&key=AIzaSyAUZEBrNLr08MDn3BEajpVNF2fSw-GhrHg')
                .then(res=>setResult(res.data.items))
                .catch(err=>console.log(err));   
    }

    const addBook = (book) => {
        const data = 
            {
                Id : book.id,
                Title : book.volumeInfo.title,
                Author : book.volumeInfo.authors[0],
                Comment : '' 
            }
        const copy = books.filter((item) => data.Id != item.Id);
        props.addBook([ ...copy, data ]);
        routeChange();
    }

    return (
        <div className="h-full">
            <h2>Search</h2>

            <div className="flex pb-5">
                <div className="m-auto flex item-center">

                    <input type="text" placeholder="Rechercher un livre" 
                        value={search} 
                        onChange={e => setSearch(e.target.value)} 
                        onKeyDown={searchBook}
                    />

                    <button className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={launchSearch}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    </button>
                </div>
            </div>

            <div className="flex-auto">
                {(result.length != 0) ? (
                <table className="m-auto text-left">
                    <thead className="text-white">
                        <tr className="">
                            <th>Title</th>
                            <th>Author</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {result.map((book) => {
                            return (
                                <tr key={book.id}>
                                    <td className="p-3">{book.volumeInfo.title}</td>
                                    <td className="p-3">{book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'unknown' }</td>
                                    <td className="pl-2">
                                        <button className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold px-2  pb-1 rounded" onClick={() => addBook(book)}>+</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    </table>
                ) : (<></>)}
                <div>
                    <button 
                        className="block m-auto text-center mt-2 bg-gray-100 hover:bg-gray-700 text-black py-1 px-2 rounded"
                        onClick={()=>routeChange(`/library`)}
                        >Revenir a la librairie
                    </button>
                </div>
            </div>
        

        </div>
    )
}