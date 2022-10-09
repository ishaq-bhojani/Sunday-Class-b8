class Shape {
    constructor (id, x, y) {
        this.id = id;
        this.x = x
        this.y = y;
    }
    move () {
        console.log(this.x, this.y);
    }
}

class Rectangle extends Shape {
    constructor (id, x, y, width, height) {
        super(id, x, y);
        this.width  = width;
        this.height = height;
    }
}
class Circle extends Shape {
    constructor (id, x, y, radius) {
        super(id, x, y)
        this.radius = radius
    }
}

const rect = new Rectangle("x1", 5, 7 , 150, 100);
// console.log(rect);
rect.move()
