function count(arr) {
  var counts = {};
  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  return counts;
  
 };


 function sorter(arr) {
  arr.sort((function(a,b) {
    return b.count - a.count;
  }));
  
 }

function getTotalBooksCount(books) {
  return books.reduce((acc, book) => acc +1, 0);
}

function getTotalAccountsCount(accounts) {
  return accounts.reduce((acc, account) => acc +1, 0);
}

function getBooksBorrowedCount(books) {
  let results = books.map(book => book.borrows).flat();
  return results.reduce((acc, result) => {
    if (result.returned == false) {
      acc += 1;
    }
    return acc;
  }, 0);

}

function getMostCommonGenres(books) {
  let genreArray = books.map(book => book.genre);

  let genreCountCombination = count(genreArray);
  
  let result = books.reduce((acc, book) => {
    acc.push({name: book.genre, count: genreCountCombination[book.genre]});
    return acc;
  }, []);

  result = result.filter((element, index, self) =>
  index === self.findIndex((e) => (
    e.name === element.name && e.count === element.count
  )))

 sorter(result);

 result = result.slice(0,5);
  
  return result;


}




function getMostPopularBooks(books) {
  let count = books.reduce((acc, book) => {
    acc[book.title] = book.borrows.length;
    return acc;
  },{});

  let result = books.reduce((acc, book) => {
    acc.push({name: book.title, count: count[book.title]});
    return acc;
  }, []);

  sorter(result);

  result = result.slice(0,5);

  return result;

}

function getMostPopularAuthors(books, authors) {
  let author = authors.reduce((acc, author) => {
    acc[author.id] = author.name.first + " " +author.name.last;
    return acc;
  }, {});

 

  let count = books.reduce((acc, book) => {
    acc[book.authorId] = book.borrows.length;
    return acc;
  },{});

  

  let result = books.reduce((acc, book) => {
    acc.push({name: author[book.authorId], count: count[book.authorId]});
    return acc;
  }, []);

  sorter(result);

  result = result.slice(0,5);

  return result;
  

}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
