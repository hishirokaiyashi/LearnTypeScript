class Circle {
    static pi: number = 3.14; // wantrong ne
    public test: number = 69;

    static calculateArea(radius: number) {
        return this.pi * radius * radius;
    }
}

let t = new Circle();
console.log(">>> check pi= ", Circle.calculateArea(10));
