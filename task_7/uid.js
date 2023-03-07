const uid = () => {
    let id = 0

    return () => {
        return id++
    }
}

module.exports = uid
