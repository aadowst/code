_Introduction_

Generics are common, reusable solutions for allowing multiple type alias to share a general structure

_Generic Classes_

Generic classes in TS are equivalent to template classes in C++
"<T>" used to indicate the template/generic (although any string could be used)
Multiple generic classes can be used in the same class
Also, the compiler can infer the types based on how an instance is initialized

Example:
```js
class KeyValuePair<T> {
	constructor(public key: T, public value: string){}
}

let pair = new KeyValuePair<string>("1", "apple")
let pair2 = new KeyValuePair<number>(2, "banana")

class IdCard<I, B>{
	constructor(public id: I, public birthday: B){}
}
let myDate = new Date()
let myCard = new IdCard<number, Date>(1234, myDate)
let yourCard = newIdCard<string, string>("ABC123", "7/1/82")
let thirdCard = newIdCard(5678, "12/11/83")
```