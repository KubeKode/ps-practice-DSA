var Sorting = /** @class */ (function () {
    function Sorting() {
    }
    Sorting.prototype.selectionSort = function (yourArray) {
        yourArray.forEach(function (e, i) {
            for (var j = i + 1; j < yourArray.length; j++) {
                if (e > yourArray[j]) {
                    var temp = yourArray[i];
                    yourArray[i] = yourArray[j];
                    yourArray[j] = temp;
                }
            }
        });
        return yourArray;
    };
    return Sorting;
}());
var sort = new Sorting;
console.log(sort.selectionSort([2, 3, 1, 5, 23, 6]));
