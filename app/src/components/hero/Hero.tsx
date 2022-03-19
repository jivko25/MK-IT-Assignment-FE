import styles from './Hero.module.scss';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom';

interface Props{
    image : string
}


export const Hero : React.FC<Props> = ({image}) => {
    return(
        <div className={styles.image}>
            <div className={styles.info}>
                <Typography variant="h5" color="white" className={styles.label}>Welcome to movie website. Here you will find your next favorite movie. Just start searching with the button below.</Typography>
                <Link to='/search' style={{ textDecoration: 'none' }}>
                    <Button variant="contained">
                    Explore
                    </Button>
                </Link>
            </div>
            <img src={image} style={{width : "100%"}}/>
        </div>
    )
}