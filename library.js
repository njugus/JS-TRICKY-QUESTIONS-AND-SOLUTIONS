// practcing OOP using js
//Biulding Management Systems using OOP in js
class User{
    constructor(id, name){
        this.id = id
        this.name = name
        this.borrowedBooks = []
    }

    getUserInformation(){
        console.log(`${this.id} ${this.name} ${this.borrowedBooks}`);  
    }
    updateBorrowedBooks(book){
        this.borrowedBooks.push(book)
    }

    returnNumberOfBorrowedBooks(){
        return this.borrowedBooks.length
    }

    viewMyBorrowedBooks(){
        this.borrowedBooks.forEach(element => {
            console.log(element);   
        });
    }
}

class Book{
    constructor(id, title, author, genre){
        this.id = id
        this.title = title
        this.author = author
        this.genre = genre
        this.isAvailable = true
    }

    displayBookInformation(){
        console.log(`${this.id}\n
            ${this.author}\n
            ${this.title}\n
            ${this.genre}\n
            ${this.isAvailable}\n`);   
    }
}

class LibrarySystem{
    #booksCollection = []
    #report=[]
    addBook(book){
        this.#booksCollection.push(book)
    }

    //view all books
    viewAllBooks(){
        this.#booksCollection.forEach(element => {
            console.log(element);    
        });
    }

    //search for a book by author genre or title
    searchBookByTitle( title){
        const bookFound = this.#booksCollection.find(book => { return book.title == title})
        return bookFound
    }
    //search by genre
    searchBookByGenre(genre){
        const bookFound = this.#booksCollection.find(book => { return book.genre == genre})
        return bookFound
    }

    //search by Author

    searchBookByAuthor(author){
        const bookFound = this.#booksCollection.find(book => { return book.author == author})
        return bookFound
    }

    borrowBook(userDetails, bookDescription){
        const searchFunctions = [this.searchBookByAuthor(bookDescription), this.searchBookByGenre(bookDescription), this.searchBookByTitle(bookDescription)]
        //check whehter the user has borrowed any books
        if(userDetails.returnNumberOfBorrowedBooks() >= 3){
            console.log("Maximum number of books borrowed...Return the books you have finished reading to get another book"); 
        }
        else{
            for(let element of searchFunctions){
                if (element){
                    element.isAvailable = false
                    userDetails.updateBorrowedBooks(element)
                    this.#report.push(userDetails.name, element)
                    break;
                }
            }
        } 
    }

    viewBorrowedBooksAndUserDetails(){
        this.#report.forEach(element => {
            console.log(element);
        });
    }


}

const book1 = new Book(1, "The Silent Patient", "Alex Michaelides", "Psychological Thriller")
const book2 = new Book(2, "Becoming", "Mithchelle Obama", "Biography")
const book3 = new Book(3, "The Catcher in the Rye", "J.D. Salinge", "Classic Fiction")
const system = new LibrarySystem()
const user = new User(1, "Kelvin")
system.addBook(book1)
system.addBook(book2)
system.addBook(book3)

system.borrowBook(user, "Classic Fiction")
system.viewBorrowedBooksAndUserDetails()







