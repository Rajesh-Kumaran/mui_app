import { Favorite, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Rating, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import PexelsImg from '../assets/pexels.jpg'

const TourCard = () => {


    return (
        <Card sx={{ maxWidth: 600, marginBottom: '20px' }}>
            <CardHeader
                title="A Perfect Holiday Spot"
            />
            <CardMedia
                component="img"
                height="194"
                image={PexelsImg}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Favorite />
                </IconButton>
                <IconButton aria-label="share">
                    <Share />
                </IconButton>
                <Rating
                    name="simple-controlled"
                    value={4}
                />

            </CardActions>
        </Card>
    )
}

export default TourCard