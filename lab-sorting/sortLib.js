// Функція для обробки розріджених масивів
function handleSparseArray(arr) {
    arr.forEach((elem, index) => {
        if (elem === undefined) {
            console.log(`Undefined element at index ${index}`);
        }
    });
}

// Функція сортування обміну (Bubble Sort)
function bubbleSort(arr, ascending = true) {
    let n = arr.length;
    let swaps = 0;
    let comparisons = 0;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            comparisons++;
            if ((ascending && arr[j] > arr[j + 1]) || (!ascending && arr[j] < arr[j + 1])) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swaps++;
            }
        }
    }
    console.log(`Bubble Sort - Comparisons: ${comparisons}, Swaps: ${swaps}`);
    return arr;
}

// Функція сортування мінімальних елементів (Selection Sort)
function selectionSort(arr, ascending = true) {
    let n = arr.length;
    let swaps = 0;
    let comparisons = 0;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            comparisons++;
            if ((ascending && arr[j] < arr[minIndex]) || (!ascending && arr[j] > arr[minIndex])) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            swaps++;
        }
    }
    console.log(`Selection Sort - Comparisons: ${comparisons}, Swaps: ${swaps}`);
    return arr;
}

// Функція сортування вставками (Insertion Sort)
function insertionSort(arr, ascending = true) {
    let n = arr.length;
    let swaps = 0;
    let comparisons = 0;

    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && ((ascending && arr[j] > key) || (!ascending && arr[j] < key))) {
            comparisons++;
            arr[j + 1] = arr[j];
            j--;
            swaps++;
        }
        arr[j + 1] = key;
    }
    console.log(`Insertion Sort - Comparisons: ${comparisons}, Swaps: ${swaps}`);
    return arr;
}

// Функція сортування Шелла (Shell Sort)
function shellSort(arr, ascending = true) {
    let n = arr.length;
    let swaps = 0;
    let comparisons = 0;
    let gap = Math.floor(n / 2);

    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            let temp = arr[i];
            let j = i;
            comparisons++;
            while (j >= gap && ((ascending && arr[j - gap] > temp) || (!ascending && arr[j - gap] < temp))) {
                arr[j] = arr[j - gap];
                j -= gap;
                swaps++;
            }
            arr[j] = temp;
        }
        gap = Math.floor(gap / 2);
    }
    console.log(`Shell Sort - Comparisons: ${comparisons}, Swaps: ${swaps}`);
    return arr;
}

// Функція швидкого сортування (Quick Sort)
function quickSort(arr, ascending = true) {
    let swaps = 0;
    let comparisons = 0;

    function partition(low, high) {
        let pivot = arr[high];
        let i = low - 1;
        for (let j = low; j < high; j++) {
            comparisons++;
            if ((ascending && arr[j] < pivot) || (!ascending && arr[j] > pivot)) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
                swaps++;
            }
        }
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        swaps++;
        return i + 1;
    }

    function quickSortHelper(low, high) {
        if (low < high) {
            let pi = partition(low, high);
            quickSortHelper(low, pi - 1);
            quickSortHelper(pi + 1, high);
        }
    }

    quickSortHelper(0, arr.length - 1);
    console.log(`Quick Sort - Comparisons: ${comparisons}, Swaps: ${swaps}`);
    return arr;
}
