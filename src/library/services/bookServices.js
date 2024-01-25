import axios from 'axios'

export const getBooks = async (page, limit) => {
  try {
    const res = await axios.get(
      `http://localhost:3000/api/books/page?page=${page}&limit=${limit}`
    )
    return res.data
  } catch (err) {
    throw `Error getting books: ${err}`
  }
}

export const getBook = async (id) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/books/${id}`)
    return res.data
  } catch (err) {
    throw `Error getting book: ${err}`
  }
}
export const getFilters = async () => {
  try {
    const res = await axios.get(`http://localhost:3000/api/books/getfilters`)
    return res.data
  } catch (err) {
    throw `Error getting filters: ${err}`
  }
}
