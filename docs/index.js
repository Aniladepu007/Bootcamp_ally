class parent {
    parentfunc() {
        console.log("parentfunc");
    }
    callingchild(func, thisref) {
        console.log(thisref);
        func();
        thisref.two();
    }
}
class ABC extends parent {
    constructor(name) {
        super(name);
        this.one = this.one.bind(this);
        this.two = this.two.bind(this);
    }
    one() {
        console.log("one");
    }
    two() {
        console.log("two");
        this.one();
    }
    parentchildfunc() {
        this.callingchild(this.two, this);
    }
}
let c = new ABC();
c.parentchildfunc();