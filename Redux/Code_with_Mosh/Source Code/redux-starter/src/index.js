import { produce } from 'immer'
let book = { title: "Harry Potter" };

function publish(book) {
  return produce(book, newBook => {
		newBook.isPublished = true;
	})
}

let newBook = publish(book);
console.log(book);
console.log(newBook);
