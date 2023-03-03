import React, { useState } from "react";
import Search from "./search";
import UserLibrary from "./userLibrary";
import Edit from "./edit";

export default function CRUD (props) {

    const {action} = props;


    const [fakeBooksData, setFakeBookData] = useState([
        {
            Id : 1,
            Title : "Cuisine du monde",
            Author : "Le cuisinier",
            Comment : '' 
        },
        {
            Id : 2,
            Title : "Dances du monde",
            Author : "La dansseuse",
            Comment : '' 
        },
        {
            Id : 3,
            Title : "Chats du monde",
            Author : "L'ami des chats",
            Comment : '' 
        },
    ])
   
    switch(action) {
        case 'read':
            return(
                <>
                    <UserLibrary books={fakeBooksData} deleteBook={setFakeBookData}/>
                </>
            )
        case 'search':
            return(<Search books={fakeBooksData} addBook={setFakeBookData}/>)
        case 'edit':
            return(<Edit data={fakeBooksData} editBook={setFakeBookData}/>)
    }
}