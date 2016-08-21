import {Product, Initial as Init} from './product';
import ProductFactory from './productFactory';
import * as Coins from './coin';

export enum VendingMachineSize {
    small = 6,
    medium = 9,
    large = 12
}

class Cell {
    constructor(public product: Product) {
        
    }
    
    stock = ko.observable(3);
    sold = ko.observable(false);
}

export class VendingMachine {
    paid = ko.observable(0)
    selectedCell = ko.observable(new Cell(new Init()))
    cells = ko.observableArray([])
    canPay = ko.pureComputed(() => this.paid() - this.selectedCell().product.price >= 0)
    acceptedCoins: Coins.Coin[] = [new Coins.Dime(), new Coins.Quarter(), new Coins.Half(), new Coins.Dollar()]
    
    
    set size(givenSize: VendingMachineSize){
        this.cells([]);
        for (let index = 0 ; index < givenSize ; index++) {
            let product = ProductFactory();
            this.cells.push (new Cell(product));
        }
    }

    select = (cell: Cell): void => {
        cell.sold(false);
        this.selectedCell(cell);
        console.log('selected');
    }

    acceptCoin = (coin: Coins.Coin): void => {
        let oldTotal = this.paid();
        this.paid(oldTotal + coin.value)
    } 

    pay = (): void => {               
        if (this.selectedCell().stock() < 1) {
            alert("I'm sorry, we're out of them!")
            return;
        }
        
        let currentPayed = this.paid();
        this.paid(Math.round(((currentPayed - this.selectedCell().product.price) * 100))/100);
        let currentStock = this.selectedCell().stock();
        this.selectedCell().stock(currentStock-1);
        this.selectedCell().sold(true);
    }
}