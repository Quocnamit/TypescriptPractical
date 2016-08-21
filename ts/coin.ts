
export abstract class Coin{
    value: number
    constructor(value: number){
        this.value = value;
    }
    abstract getImageUrl() : string
}

export class Quarter extends Coin{
    constructor(){
        super(0.25);
    }
    get Value(){
        return this.value;
    }
    getImageUrl() {
        return "img/Quarter.png"
    }
}

export class Dime extends Coin{
    constructor(){
        super(0.10);
    }
    get Value(){
        return this.value;
    }
    getImageUrl() {
        return "img/Dime.png"
    }
}

export class Half extends Coin{
    constructor(){
        super(0.5);
    }
    get Value(){
        return this.value;
    }
    getImageUrl() {
        return "img/Half.png"
    }
}

export class Dollar extends Coin{
    constructor(){
        super(1);
    }
    get Value(){
        return this.value;
    }
    getImageUrl() {
        return "img/Dollar.jpg"
    }
}