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
