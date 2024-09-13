import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

const books = [
    { id: 1, title: 'Book 1', author: 'Author 1', genre: 'Genre 1', rating: 4.5, description: 'Description 1' },
    { id: 2, title: 'Book 2', author: 'Author 2', genre: 'Genre 2', rating: 4.0, description: 'Description 2' },
    { id: 3, title: 'Book 3', author: 'Author 3', genre: 'Genre 3', rating: 4.3, description: 'Description 3' },
]

interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    rating: number;
    description: string;
}

interface BooksState {
    books: Book[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: BooksState = {
    books: [],
    status: 'idle',
    error: null,
};

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async () => {

        return books;
    }
);

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.books = action.payload;
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || null;
            });
    },
});

export default booksSlice.reducer;
