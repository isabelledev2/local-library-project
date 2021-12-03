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
 const bookGenres = books.map((book) => book.genre);
  const temp = [];
  //map over book genres
  bookGenres.map((genre) => {
    //for each genre, first check to see if genre already exists in array
    const genreLocation = temp.findIndex((element) => element.name === genre);
    //second, if it exists, increase count by 1
    if (genreLocation >= 0) {
      temp[genreLocation].count = temp[genreLocation].count + 1;
      //else, if it don't exist, push a new genre object onto array with count of 1
    } else {
      temp.push({ name: genre, count: 1 });
    }
  });
  temp.sort((a, b) => b.count - a.count);
  if (temp.length > 5) {
    return temp.slice(0, 5);
  }
  return temp;
}

function getMostPopularBooks(books) {
 return books
  .map((book) => {
   return { name: book.title, count: book.borrows.length };
  })
  .sort((a, b) => (a.count < b.count ? 1 : -1))
  .slice(0, 5);
}

function getAuthor(authors, authorId) {
    for (let author of authors) {
        if (author.id === authorId) return author;
    }
    return null;
}

function getMostPopularAuthors(books, authors) { 
  const authorList = books.reduce((acc, book) => { 
    const { authorId, borrows } = book;
    const authorObj = authors.find(author => author.id === authorId);
    const name = `${authorObj.name.first} ${authorObj.name.last}`;
    const count = borrows.length;
    const authExists = acc.find(auth => auth.name === name);
    if(authExists) {
      authExists.count += count;
    } else {
      const newAuthEntry = {
        name,
        count
      };
      acc.push(newAuthEntry);
    }
    return acc;
  }, []);
  const sortedAuthorList = authorList.sort((a, b) => b.count - a.count);
  const topFive = sortedAuthorList.slice(0, 5);
  return topFive;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
