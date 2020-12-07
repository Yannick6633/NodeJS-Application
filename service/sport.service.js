async function sportMajor(sports) {
    try {
        // Filter sports with more 500 000 adhesions
        return await sports.filter( sport => sport.adhesion > 50000)

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    sportMajor
}
