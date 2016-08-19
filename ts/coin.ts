abstract class Coin{
    value: number
    constructor(value: number){
        this.value = value;
    }
    abstract getImageUrl() : string
}

class Quarter extends Coin{
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

class Dime extends Coin{
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

class Half extends Coin{
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

class Dollar extends Coin{
   constructor(){
        super(1);
    }
    get Value(){
        return this.value;
    }
    getImageUrl() {
        return "img/Dollar.png"
    }
}