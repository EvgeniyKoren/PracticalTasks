import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookContext } from '../../BookContext';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';

const BookDetail = () => {
    const { id } = useParams();
    const books = useContext(BookContext);
    const book = books.find((b) => b.id === parseInt(id));

    if (!book) {
        return <Typography variant="h5" align="center">Книга не знайдена</Typography>;
    }

    return (
        <Container>
            <Card>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <CardMedia
                            component="img"
                            image="https://via.placeholder.com/150"
                            alt="Stub"
                            title={book.name}
                        />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <CardContent>
                            <Typography variant="h4" component="div">
                                {book.name}
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                                Author: {book.author}
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                                Genre: {book.genre}
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                                Rating: {book.rating}
                            </Typography>
                            <Typography variant="body2">
                                Description: {book.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" component={Link} to="/">
                                Back to book list
                            </Button>
                        </CardActions>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    );
};

export default BookDetail;
