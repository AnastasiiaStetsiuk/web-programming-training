const task_2 = word => {
    // якщо слово складається лише з одного символу, повертаємо його
    if (word.length <= 1) {
        return [word]
    }

    const result = []
    const wordLength = word.length

    for (let i = 0; i < wordLength; i++) {
        // отримуємо решту слова, якщо видалити поточний символ
        const rest = word.slice(0, i) + word.slice(i + 1)
        // рекурсивно отримуємо всі перестановки решти слова
        const permutations = task_2(rest)
        // додаємо поточний символ до кожної перестановки
        for (let j = 0; j < permutations.length; j++) {
            result.push(word[i] + permutations[j])
        }
    }

    return result
}

module.exports = task_2
