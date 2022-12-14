class Pile {
  #items;
  constructor() {
    this.#items = [];
  }
  push(element) {
    this.#items.push(element);
  }
  getItems() {
    return this.#items;
  }
  pop() {
    this.#items.pop();
  }
}
class File {
  #items;
  constructor() {
    this.#items = [];
  }
  push(element) {
    return this.#items.unshift(element);
  }
  getItems() {
    return this.#items;
  }
  pop() {
    return this.#items.pop();
  }
}
let maPile = new File();
console.log(maPile.getItems());
maPile.push("debora");
console.log(maPile.getItems());
maPile.push("sele");
console.log(maPile.getItems());
maPile.pop();
console.log(maPile.getItems());
// maPile.#items.shift()
maPile.push("eveline");
console.log(maPile.getItems());
maPile.push("romain");
console.log(maPile.getItems());
