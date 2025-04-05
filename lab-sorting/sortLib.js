const SortLib = {
  // Сортування обміну (Bubble Sort)
  bubbleSort(arr, ascending = true) {
    let a = [...arr];
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
    if (hasUndefined) console.warn("Є undefined-елементи. Вони пропущені.");
    console.log("Порівнянь:", comparisons, "| Обмінів:", swaps);
    return a;
  },

  // Сортування методом мінімальних елементів (Selection Sort)
  selectionSort(arr, ascending = true) {
    let a = [...arr];
    let comparisons = 0;
    let swaps = 0;
    let hasUndefined = false;

    for (let i = 0; i < a.length - 1; i++) {
      if (a[i] === undefined) {
        hasUndefined = true;
        continue;
      }
      let minIndex = i;
      for (let j = i + 1; j < a.length; j++) {
        if (a[j] === undefined) {
          hasUndefined = true;
          continue;
        }
        comparisons++;
        if ((ascending && a[j] < a[minIndex]) || (!ascending && a[j] > a[minIndex])) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [a[i], a[minIndex]] = [a[minIndex], a[i]];
        swaps++;
      }
    }

    console.log("Selection Sort:");
    if (hasUndefined) console.warn("Є undefined-елементи. Вони пропущені.");
    console.log("Порівнянь:", comparisons, "| Обмінів:", swaps);
    return a;
  },

  // Сортування вставками (Insertion Sort)
  insertionSort(arr, ascending = true) {
    let a = [...arr];
    let comparisons = 0;
    let moves = 0;
    let hasUndefined = false;

    for (let i = 1; i < a.length; i++) {
      let key = a[i];
      if (key === undefined) {
        hasUndefined = true;
        continue;
      }
      let j = i - 1;

      while (j >= 0 && a[j] !== undefined) {
        comparisons++;
        if ((ascending && a[j] > key) || (!ascending && a[j] < key)) {
          a[j + 1] = a[j];
          moves++;
          j--;
        } else break;
      }
      a[j + 1] = key;
    }

    console.log("Insertion Sort:");
    if (hasUndefined) console.warn("Є undefined-елементи. Вони пропущені.");
    console.log("Порівнянь:", comparisons, "| Переміщень:", moves);
    return a;
  },

  // Сортування Шелла (Shell Sort)
  shellSort(arr, ascending = true) {
    let a = [...arr];
    let comparisons = 0;
    let moves = 0;
    let hasUndefined = false;

    for (let gap = Math.floor(a.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
      for (let i = gap; i < a.length; i++) {
        let temp = a[i];
        if (temp === undefined) {
          hasUndefined = true;
          continue;
        }
        let j = i;
        while (j >= gap && a[j - gap] !== undefined) {
          comparisons++;
          if ((ascending && a[j - gap] > temp) || (!ascending && a[j - gap] < temp)) {
            a[j] = a[j - gap];
            moves++;
            j -= gap;
          } else break;
        }
        a[j] = temp;
      }
    }

    console.log("Shell Sort:");
    if (hasUndefined) console.warn("Є undefined-елементи. Вони пропущені.");
    console.log("Порівнянь:", comparisons, "| Переміщень:", moves);
    return a;
  },

  // Швидке сортування Хоара (Quick Sort)
  quickSort(arr, ascending = true) {
    let a = [...arr];
    let comparisons = 0;
    let swaps = 0;
    let hasUndefined = a.includes(undefined);

    function quickSortRecursive(arr) {
      if (arr.length <= 1) return arr;

      let pivot = arr[Math.floor(arr.length / 2)];
      if (pivot === undefined) return quickSortRecursive(arr.filter(x => x !== undefined));

      let left = [];
      let right = [];
      let equal = [];

      for (let el of arr) {
        if (el === undefined) continue;
        comparisons++;
        if ((ascending && el < pivot) || (!ascending && el > pivot)) {
          left.push(el);
        } else if (el === pivot) {
          equal.push(el);
        } else {
          right.push(el);
        }
        swaps++;
      }

      return [...quickSortRecursive(left), ...equal, ...quickSortRecursive(right)];
    }

    let result = quickSortRecursive(a);

    console.log("Quick Sort:");
    if (hasUndefined) console.warn("Є undefined-елементи. Вони пропущені.");
    console.log("Порівнянь:", comparisons, "| Рекурсивних розбиттів:", swaps);
    return result;
  }
};

export default SortLib;

