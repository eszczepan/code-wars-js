class Vector {
  constructor(components) {
    this.components = components;
  }

  checkLength(vector) {
    if (this.components.length !== vector.components.length)
      throw new Error("Vectors must be the same length");
  }

  add(vector) {
    this.checkLength(vector);
    const components = this.components.map((v, i) => v + vector.components[i]);
    return new Vector(components);
  }

  subtract(vector) {
    this.checkLength(vector);
    const components = this.components.map((v, i) => v - vector.components[i]);
    return new Vector(components);
  }

  dot(vector) {
    this.checkLength(vector);
    return this.components.reduce(
      (acc, v, i) => (acc += v * vector.components[i]),
      0
    );
  }

  norm() {
    return Math.sqrt(this.components.reduce((acc, v) => (acc += v ** 2), 0));
  }

  toString() {
    return `(${this.components.join(",")})`;
  }

  equals(vector) {
    return this.components.every(
      (component, i) => component === vector.components[i]
    );
  }
}

const a = new Vector([1, 2, 3]);
const b = new Vector([3, 4, 5]);
const c = new Vector([5, 6, 7, 8]);

console.log(a.add(b).equals(new Vector([4, 6, 8])));
console.log(a.subtract(b).equals(new Vector([-2, -2, -2])));
console.log(a.dot(b) === 26);
console.log(a.norm() === Math.sqrt(14));
// console.log(a.add(c)) // throw Error
