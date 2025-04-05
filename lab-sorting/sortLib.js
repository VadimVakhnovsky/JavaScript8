const SortLib = {
  // Метод сортування обміну (bubble sort)
  bubbleSort(arr, ascending = true) {
    let a = [...arr]; // копія масиву
    let comparisons = 0;
    let swaps = 0;
    let hasUndefined = false;

    for (let i = 0; i < a.length - 1; i++) {
      for (let j = 0; j < a.length - i - 1; j++) {
        if (a[j] === undefined || a[j + 1] === undefined) {
          hasUndefined = true;
          continue;
        }
        comparisons++;
        if ((ascending && a[j] > a[j + 1]) || (!ascending && a[j] < a[j + 1])) {
          [a[j], a[j + 1]] = [a[j + 1], a[j]];
          swaps++;
        }
      }
    }

    console.log("Bubble Sort:");
    if (hasUndefined) {
      console.warn("Масив містить undefined-елементи. Вони були пропущені під час сортування.");
    }
    console.log("Кількість порівнянь:", comparisons);
    console.log("Кількість обмінів:", swaps);
    return a;
  },

  // Інші методи (поки що пусті, додамо далі)
  selectionSort(arr, ascending = true) { },
  insertionSort(arr, ascending = true) { },
  shellSort(arr, ascending = true) { },
  quickSort(arr, ascending = true) { }
};

export default SortLib;

