console.log("hello world");

interface Product {
  name: string;
  price: number;
	category: string;
}

class Store<T> {
  protected _objects: T[] = [];

  add(object: T): void {
    this._objects.push(object);
  }
}

class CompressibleStore<T> extends Store<T> {
  compress() {
    //insert code
  }
}

//the generic type is constrained with an object that has a name property, so the find method can compare each entry's name with the name passed to the search method
class SearchableStore<T extends { name: string }> extends Store<T>{
	search(name: string): T | undefined {
		return this._objects.find(obj => obj.name === name)
	}
}

//fix the generic type (i.e. set it to specific type)
class ProductStore extends Store<Product>{
	filterByCategory(category: string): Product[]{
		return this._objects.filter(item => item.category === category)
	}
}
