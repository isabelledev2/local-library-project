function getTotalBooksCount(books) {
  let result = 0;
books.forEach((book) => {result++
})
return result;
}

function getTotalAccountsCount(accounts) {
let result = 0;
accounts.forEach((account) => {result++
})
return result;
}

function getBooksBorrowedCount(books) {
let result = 0;
   books.forEach((borrow) => {
  if (borrow.borrows[0].returned === false){
    result++
  }
  });
return result;
  }

function getMostCommonGenres(books) {
  let map = {};
  books.forEach((num) => {
   if (map[num.genre]) {
    map[num.genre]++;
   } else {
    map[num.genre] = 1;
   }
  });
  return Object.entries(map)
   .map(([name, count]) => {
    return {
     name,
     count
    };
   })
   .sort((a, b) => b.count - a.count)
   .slice(0, 5);
 }
 
 function getMostPopularBooks(books) {
  return books
   .map((book) => {
    return { name: book.title, count: book.borrows.length };
   })
   .sort((a, b) => (a.count < b.count ? 1 : -1))
   .slice(0, 5);
 }
 
 function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
   let theAuthor = {
    name: `${author.name.first} ${author.name.last}`,
    count: 0
   };
   books.forEach((book) => {
    if (book.authorId === author.id) {
     theAuthor.count += book.borrows.length;
    }
   });
   result.push(theAuthor);
  });
  return result.sort((a, b) => b.count - a.count).slice(0, 5);
 }
 
 module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors
 };
