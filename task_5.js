const task_5 = (month, year) => {
    if (month === 2 && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)) {
        // Лютий та високосний рік
        return 29
    } else if (month === 2) {
        // Лютий та не високосний рік
        return 28
    } else if ([4, 6, 9, 11].includes(month)) {
        // Місяці з 30 днями
        return 30
    } else {
        // Всі інші місяці з 31 днем
        return 31
    }
}

module.exports = task_5
