import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BookContext } from '../../BookContext';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const BookList = () => {
    const books = useContext(BookContext);

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
                                    {book.name}
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
