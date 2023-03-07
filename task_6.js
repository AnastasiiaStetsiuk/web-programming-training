const task_6 = arr => {
    if (arr.length < 2) {
        return arr
    }

    const pivot = arr[0] // вибираємо перший елемент масиву як опорну точку
    const less = arr.slice(1).filter(item => item <= pivot)
    const greater = arr.slice(1).filter(item => item > pivot)

    return [...task_6(less), pivot, ...task_6(greater)]
}

module.exports = task_6
