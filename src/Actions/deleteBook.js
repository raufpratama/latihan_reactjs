const deleteBook = (data) => {
    return{
        type:'DELETE_BOOK_DATA',
        id:data,
    }
}

module.exports = deleteBook;