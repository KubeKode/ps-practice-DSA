class Sorting {
    selectionSort(yourArray: number[]): number[] {
        yourArray.forEach((e, i) => {
            for (let j = i + 1; j < yourArray.length; j++) {
                if (e > yourArray[j]) {
                    let temp = yourArray[i];
                    yourArray[i] = yourArray[j]
                    yourArray[j] = temp;
                }
            }
        })
        return yourArray;
    }

}
const arr:number[] = [2,3,1,5,23,6]
const sort = new Sorting;
console.log(sort.selectionSort(arr))