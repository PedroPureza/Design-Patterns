class Reusable {
    public id: number;

    constructor(id: number) {
        this.id = id;
    }
}

class ReusablePool {
    private available: Reusable[] = [];
    private inUse: Reusable[] = [];

    constructor(size: number) {
        for (let i = 0; i < size; i++) {
            this.available.push(new Reusable(i));
        }
    }

    acquire(): Reusable {
        let reusable: Reusable;
        if (this.available.length > 0) {
            const popped = this.available.pop();
            if (popped !== undefined) {
                reusable = popped;
                this.inUse.push(reusable);
            } else {
                console.log("No objects available. Creating a new one.");
                reusable = new Reusable(this.inUse.length);
                this.inUse.push(reusable);
            }
        } else {
            console.log("No objects available. Creating a new one.");
            reusable = new Reusable(this.inUse.length);
            this.inUse.push(reusable);
        }
        return reusable;
    }

    release(reusable: Reusable): void {
        const index = this.inUse.indexOf(reusable);
        if (index !== -1) {
            this.inUse.splice(index, 1);
            this.available.push(reusable);
        }
    }
}

// Usage
const pool = new ReusablePool(10);

const reusable1 = pool.acquire();
console.log(reusable1.id); // Outputs: 9

const reusable2 = pool.acquire();
console.log(reusable2.id); // Outputs: 8

pool.release(reusable1);
pool.release(reusable2);