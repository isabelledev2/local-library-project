function findAuthorById(authors, id) {
  return authors.find((authorName) => authorName.id === id)
}

function findBookById(books, id) {
 return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
 let allBooks = [];
 let checkedOut = [];
 let checkedIn = [];
  
  for (let i=0; i < books.length; i++){
    if (books[i].borrows[0].returned === false){
      checkedOut.push(books)
    } else {
      checkedIn.push(books)
      }
    }
  allBooks.push(checkedOut, checkedIn);
  return allBooks;
  }

function getBorrowersForBook(book, accounts) {
     let result = [];
     let borrowArray = book.borrows;
     borrowArray.forEach(borrow=>{
       let account = accounts.find(acc => acc.id === borrow.id);
       let obj = account;
       obj['returned'] =  borrow.returned;
       result.push(obj);
})
console.log (result);
return result.slice(0,10);
}
    //return array of accounts
  

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
