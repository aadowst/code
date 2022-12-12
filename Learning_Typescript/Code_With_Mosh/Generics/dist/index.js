"use strict";
console.log("hello world");
class Store {
    constructor() {
        this._objects = [];
    }
    add(object) {
        this._objects.push(object);
    }
}
class CompressibleStore extends Store {
    compress() {
    }
}
class SearchableStore extends Store {
    search(name) {
        return this._objects.find(obj => obj.name === name);
    }
}
class ProductStore extends Store {
    filterByCategory(category) {
        return this._objects.filter(item => item.category === category);
    }
}
//# sourceMappingURL=index.js.map