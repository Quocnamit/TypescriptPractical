var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define("coin", ["require", "exports"], function (require, exports) {
    "use strict";
    var Coin = (function () {
        function Coin(value) {
            this.value = value;
        }
        return Coin;
    }());
    exports.Coin = Coin;
    var Quarter = (function (_super) {
        __extends(Quarter, _super);
        function Quarter() {
            _super.call(this, 0.25);
        }
        Object.defineProperty(Quarter.prototype, "Value", {
            get: function () {
                return this.value;
            },
            enumerable: true,
            configurable: true
        });
        Quarter.prototype.getImageUrl = function () {
            return "img/Quarter.png";
        };
        return Quarter;
    }(Coin));
    exports.Quarter = Quarter;
    var Dime = (function (_super) {
        __extends(Dime, _super);
        function Dime() {
            _super.call(this, 0.10);
        }
        Object.defineProperty(Dime.prototype, "Value", {
            get: function () {
                return this.value;
            },
            enumerable: true,
            configurable: true
        });
        Dime.prototype.getImageUrl = function () {
            return "img/Dime.png";
        };
        return Dime;
    }(Coin));
    exports.Dime = Dime;
    var Half = (function (_super) {
        __extends(Half, _super);
        function Half() {
            _super.call(this, 0.5);
        }
        Object.defineProperty(Half.prototype, "Value", {
            get: function () {
                return this.value;
            },
            enumerable: true,
            configurable: true
        });
        Half.prototype.getImageUrl = function () {
            return "img/Half.png";
        };
        return Half;
    }(Coin));
    exports.Half = Half;
    var Dollar = (function (_super) {
        __extends(Dollar, _super);
        function Dollar() {
            _super.call(this, 1);
        }
        Object.defineProperty(Dollar.prototype, "Value", {
            get: function () {
                return this.value;
            },
            enumerable: true,
            configurable: true
        });
        Dollar.prototype.getImageUrl = function () {
            return "img/Dollar.jpg";
        };
        return Dollar;
    }(Coin));
    exports.Dollar = Dollar;
});
define("productCategory", ["require", "exports"], function (require, exports) {
    "use strict";
    var ProductCategory = (function () {
        function ProductCategory() {
            this.imgPath = "img/";
        }
        return ProductCategory;
    }());
    exports.ProductCategory = ProductCategory;
    var SodaCategory = (function (_super) {
        __extends(SodaCategory, _super);
        function SodaCategory() {
            _super.apply(this, arguments);
            this.name = "Soda";
        }
        SodaCategory.prototype.getImageUrl = function () {
            return this.imgPath + "SodaCan.png";
        };
        return SodaCategory;
    }(ProductCategory));
    exports.SodaCategory = SodaCategory;
    var NutsCategory = (function (_super) {
        __extends(NutsCategory, _super);
        function NutsCategory() {
            _super.apply(this, arguments);
            this.name = "Nuts";
        }
        NutsCategory.prototype.getImageUrl = function () {
            return this.imgPath + "Nuts.png";
        };
        return NutsCategory;
    }(ProductCategory));
    exports.NutsCategory = NutsCategory;
    var ChipsCategory = (function (_super) {
        __extends(ChipsCategory, _super);
        function ChipsCategory() {
            _super.apply(this, arguments);
            this.name = "Potato chips";
        }
        ChipsCategory.prototype.getImageUrl = function () {
            return this.imgPath + "Chips.png";
        };
        return ChipsCategory;
    }(ProductCategory));
    exports.PotatoChipsCateogry = ChipsCategory;
    var CandyCategory = (function (_super) {
        __extends(CandyCategory, _super);
        function CandyCategory() {
            _super.apply(this, arguments);
            this.name = "Candy";
        }
        CandyCategory.prototype.getImageUrl = function () {
            return this.imgPath + "Candy.png";
        };
        return CandyCategory;
    }(ProductCategory));
    exports.CandyCategory = CandyCategory;
    var CandyBarCategory = (function (_super) {
        __extends(CandyBarCategory, _super);
        function CandyBarCategory() {
            _super.apply(this, arguments);
            this.name = "Candy bar";
        }
        CandyBarCategory.prototype.getImageUrl = function () {
            return this.imgPath + "CandyBar.png";
        };
        return CandyBarCategory;
    }(ProductCategory));
    exports.CandyBarCategory = CandyBarCategory;
});
define("product", ["require", "exports", "productCategory"], function (require, exports, Categories) {
    "use strict";
    var Initial = (function () {
        function Initial() {
            this.name = "Please select a product";
            this.price = 0;
        }
        return Initial;
    }());
    exports.Initial = Initial;
    var CocaCola = (function () {
        function CocaCola() {
            this.name = "Coca-Cola";
            this.price = 2.30;
            this.category = new Categories.SodaCategory();
        }
        return CocaCola;
    }());
    exports.CocaCola = CocaCola;
    var Fanta = (function () {
        function Fanta() {
            this.name = "Fanta";
            this.price = 2;
            this.category = new Categories.SodaCategory();
        }
        return Fanta;
    }());
    exports.Fanta = Fanta;
    var Sprite = (function () {
        function Sprite() {
            this.name = "Sprite";
            this.price = 1.80;
            this.category = new Categories.SodaCategory();
        }
        return Sprite;
    }());
    exports.Sprite = Sprite;
    var Peanuts = (function () {
        function Peanuts() {
            this.name = "Peanuts";
            this.price = 1.50;
            this.category = new Categories.NutsCategory();
        }
        return Peanuts;
    }());
    exports.Peanuts = Peanuts;
    var Cashews = (function () {
        function Cashews() {
            this.name = "Cashews";
            this.price = 2.80;
            this.category = new Categories.NutsCategory();
        }
        return Cashews;
    }());
    exports.Cashews = Cashews;
    var Plain = (function () {
        function Plain() {
            this.name = "Plain";
            this.price = 2;
            this.category = new Categories.PotatoChipsCateogry();
        }
        return Plain;
    }());
    exports.Plain = Plain;
    var Cheddar = (function () {
        function Cheddar() {
            this.name = "Cheddar";
            this.price = 2;
            this.category = new Categories.PotatoChipsCateogry();
        }
        return Cheddar;
    }());
    exports.Cheddar = Cheddar;
    var Mints = (function () {
        function Mints() {
            this.name = "Mints";
            this.price = 1.30;
            this.category = new Categories.CandyCategory();
        }
        return Mints;
    }());
    exports.Mints = Mints;
    var Gummies = (function () {
        function Gummies() {
            this.name = "Gummies";
            this.price = 1.90;
            this.category = new Categories.CandyCategory();
        }
        return Gummies;
    }());
    exports.Gummies = Gummies;
    var Hersey = (function () {
        function Hersey() {
            this.name = "Hersey's";
            this.price = 1.30;
            this.category = new Categories.CandyBarCategory();
        }
        return Hersey;
    }());
    exports.Hersey = Hersey;
    var MilkyWay = (function () {
        function MilkyWay() {
            this.name = "Milky Way";
            this.price = 1.80;
            this.category = new Categories.CandyBarCategory();
        }
        return MilkyWay;
    }());
    exports.MilkyWay = MilkyWay;
});
define("productFactory", ["require", "exports", "product"], function (require, exports, Products) {
    "use strict";
    function GetProduct() {
        var random = Math.floor(Math.random() * 11);
        switch (random) {
            case 0: return new Products.CocaCola();
            case 1: return new Products.Fanta();
            case 2: return new Products.Sprite();
            case 3: return new Products.Peanuts();
            case 4: return new Products.Cashews();
            case 5: return new Products.Plain();
            case 6: return new Products.Cheddar();
            case 7: return new Products.Mints();
            case 8: return new Products.Gummies();
            case 9: return new Products.Hersey();
            case 10: return new Products.MilkyWay();
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = GetProduct;
});
define("vendingMachine", ["require", "exports", "product", "productFactory", "coin"], function (require, exports, product_1, productFactory_1, Coins) {
    "use strict";
    (function (VendingMachineSize) {
        VendingMachineSize[VendingMachineSize["small"] = 6] = "small";
        VendingMachineSize[VendingMachineSize["medium"] = 9] = "medium";
        VendingMachineSize[VendingMachineSize["large"] = 12] = "large";
    })(exports.VendingMachineSize || (exports.VendingMachineSize = {}));
    var VendingMachineSize = exports.VendingMachineSize;
    var Cell = (function () {
        function Cell(product) {
            this.product = product;
            this.stock = ko.observable(3);
            this.sold = ko.observable(false);
        }
        return Cell;
    }());
    var VendingMachine = (function () {
        function VendingMachine() {
            var _this = this;
            this.paid = ko.observable(0);
            this.selectedCell = ko.observable(new Cell(new product_1.Initial()));
            this.cells = ko.observableArray([]);
            this.canPay = ko.pureComputed(function () { return _this.paid() - _this.selectedCell().product.price >= 0; });
            this.acceptedCoins = [new Coins.Dime(), new Coins.Quarter(), new Coins.Half(), new Coins.Dollar()];
            this.select = function (cell) {
                cell.sold(false);
                _this.selectedCell(cell);
                console.log('selected');
            };
            this.acceptCoin = function (coin) {
                var oldTotal = _this.paid();
                _this.paid(oldTotal + coin.value);
            };
            this.pay = function () {
                if (_this.selectedCell().stock() < 1) {
                    alert("I'm sorry, we're out of them!");
                    return;
                }
                var currentPayed = _this.paid();
                _this.paid(Math.round(((currentPayed - _this.selectedCell().product.price) * 100)) / 100);
                var currentStock = _this.selectedCell().stock();
                _this.selectedCell().stock(currentStock - 1);
                _this.selectedCell().sold(true);
            };
        }
        Object.defineProperty(VendingMachine.prototype, "size", {
            set: function (givenSize) {
                this.cells([]);
                for (var index = 0; index < givenSize; index++) {
                    var product = productFactory_1.default();
                    this.cells.push(new Cell(product));
                }
            },
            enumerable: true,
            configurable: true
        });
        return VendingMachine;
    }());
    exports.VendingMachine = VendingMachine;
});
//# sourceMappingURL=app.js.map