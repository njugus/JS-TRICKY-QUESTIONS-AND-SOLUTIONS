//an aplication that manages a library

let library = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', available: true },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', available: false },
    { title: '1984', author: 'George Orwell', available: true }
];

//filter()
//to check all available books
const availableBooks = library.filter((element) => {
    return element.available === true;
})

console.log(availableBooks);

//if the to kill the MockingBird Book becomes available the the librarian needs to update the library
for(let book of library){
    if(book.title == 'To Kill a Mockingbird'){
        book.available = true
        break;
    }
}

//or if the librarian wants to add a new book
function addBookToLibarary(bookName){
    library.push(bookName)
}

const newBook = {
    title : "Atomic Habits",
    authour : "James Clear",
    available : true
}

addBookToLibarary(newBook);
console.log(library.length);


// a student checks for book availability
function checkBookAvailability(bookTitle){
    let isAvailable;
    for(let book of library){
        if(book.title === bookTitle){
            isAvailable = book.available;
            break;
        }
    }
    if(isAvailable){
        return "The book is available for borrowing"
    }
    else{
        return "The book is not available for borrowing...Try borrowing another book"
    }
}

export default checkBookAvailability;
