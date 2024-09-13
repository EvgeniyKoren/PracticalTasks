import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../../features/books/booksSlice';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import {AppDispatch, RootState} from "../../store";

const BookList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { books, status, error } = useSelector((state: RootState) => state.books);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchBooks());
        }
    }, [status, dispatch]);

    return (
        <Container>
            <Typography variant="h4" gutterBottom align="center">
                Book list
            </Typography>
            <Grid container spacing={3}>
                {books.map((book) => (
                    <Grid item xs={12} sm={6} md={4} key={book.id}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {book.title}
                                </Typography>
                                <Typography color="textSecondary">
                                    Author: {book.author}
                                </Typography>
                                <Typography color="textSecondary">
                                    Rating: {book.rating}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" component={Link} to={`/books/${book.id}`}>
                                    Details
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default BookList;
