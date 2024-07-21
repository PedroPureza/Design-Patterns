// 'Component' interface
interface Graphic {
    move(x: number, y: number): void;
    draw(): void;
}

// 'Leaf' class
class Dot implements Graphic {
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    move(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log(`Drawing a dot at position (${this.x}, ${this.y})`);
    }
}

// 'Composite' class
class CompoundGraphic implements Graphic {
    private children: Graphic[] = [];

    add(child: Graphic) {
        this.children.push(child);
    }

    remove(child: Graphic) {
        const index = this.children.indexOf(child);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }

    move(x: number, y: number) {
        for (const child of this.children) {
            child.move(x, y);
        }
    }

    draw() {
        for (const child of this.children) {
            child.draw();
        }
    }
}

// Usage
const dot1 = new Dot(1, 1);
const dot2 = new Dot(2, 2);
const compoundGraphic = new CompoundGraphic();
compoundGraphic.add(dot1);
compoundGraphic.add(dot2);
compoundGraphic.draw(); // Outputs: "Drawing a dot at position (1, 1)" and "Drawing a dot at position (2, 2)"