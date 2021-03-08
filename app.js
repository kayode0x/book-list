//book class that accepts the author, title and isbn parameters
class Book {
    constructor(author, title, isbn){
        this.author = author;
        this.title = title;
        this.isbn = isbn
    };
};

//UI class that does most of the work
class UI {
    //add a new book to the UI
    addBook(book){
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.author}</td>
        <td>${book.title}</td>
        <td>${book.isbn}</td>
        <td><i class="delete fas fa-times"></i></td>
        `;
        //finally add the row to the book list
        list.append(row);
    };

    //clear the fields after a book has been added
    clearFields(){
        document.getElementById('author').value = '';
        document.getElementById('title').value = '';
        document.getElementById('isbn').value = '';
    };

    //method to delete a book from the UI list
    deleteBook(target) {
        //if the target selected has a class of "delete", then delete the book
        if (target.classList.contains('delete')){
            target.parentElement.parentElement.remove();
        };
    };

};

//check when the user submits the book form
document.getElementById('book-form').addEventListener('submit', function(e){

    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const isbn = document.getElementById('isbn').value;

    //instantiate the book
    const book = new Book(author, title, isbn);
    //instantiate the ui
    const ui = new UI();

    //check for empty fields
    const isEmpty = str => !str.trim().length; // check for empty string

    //if fields are empty, alert the user
    if (isEmpty(author)){
        alert("Please enter an author");
    } else if (isEmpty(title)){
        alert("Please enter a title");
    } else if (isEmpty(isbn)){
        alert("Please enter an isbn");
    } else {
        ui.addBook(book);
    }

    //clear the fields after a book has been added
    ui.clearFields();
    
    //prevent page reload after a book has been added
    e.preventDefault();
});

//check when the user tries to delete a book
document.getElementById('book-list').addEventListener('click', function(e){

    //instantiate the UI
    const ui = new UI();

    //method to delete a book
    ui.deleteBook(e.target);
    e.preventDefault();
});