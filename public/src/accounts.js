function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);

}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => accountA.name.last.toUpperCase() > accountB.name.last.toUpperCase() ? 1:-1);
}

function getTotalNumberOfBorrows(account, books) {
  let counter = 0;
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].borrows.length; j++) {
      if (account["id"] === books[i].borrows[j].id) {
        counter += 1;
      }
    }
  }
  return counter;
  }

  function getBooksPossessedByAccount(account, books, authors) {
    let result = null;
    for (let i = 0; i < books.length; i++) {
      for (let j = 0; j < books[i].borrows.length; j++) {
        if (account["id"] === books[i].borrows[j].id && books[i].borrows[j].returned === false) {
         result = books[i];
        }
      }
    }
    let author = authors.find(author => author.id === result.authorId);
    result.author = author;
    let finalProduct = [result];
    return finalProduct;
   
    }





module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
