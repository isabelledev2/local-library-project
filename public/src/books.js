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


function getBorrowersForBook(book, accounts) { //Tommy's code
let borrowers = [];
let counter = 0
for (let i=0; i<accounts.length; i++){
  if (accounts[i].id === book.borrows[0]) {
    borrowers.push(accounts[i], book.borrows[0].returned)
  }
    counter += 1;
    if (counter < 10){
    break;
    }
  return borrowers
  }
}

//real solution//
//   let result = [];                          //arrow functionssss
// let borrowArray = book.borrows;
// borrowArray.forEach(borrow=>{               //forEach so you dont have to write a for loop out
 // let account = accounts.find(acc => acc.id === borrow.id);
 // let obj = account;
 // obj['returned'] =  borrow.returned;
 // result.push(obj);
// })
// console.log (result);
// return result.slice(0,10);
// }

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
