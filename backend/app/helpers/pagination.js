const simplePagination = ({count, limit, page}) => {
    const totalPages = Math.ceil(count/limit)
    return {
        totalPages : totalPages,
        currentPage : page,
        allItems : count,
        limit : limit
    }
}
module.exports = simplePagination