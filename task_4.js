const task_4 = arr => {
    const frequencyCounter = {}
    let maxFrequency = 0
    let mostFrequentElement

    // підраховуємо кількість входжень кожного елементу у масиві
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]
        frequencyCounter[element] = (frequencyCounter[element] || 0) + 1
        // зберігаємо елемент з найбільшою кількістю входжень
        if (frequencyCounter[element] > maxFrequency) {
            maxFrequency = frequencyCounter[element]
            mostFrequentElement = element
        }
    }

    return mostFrequentElement
}

module.exports = task_4
