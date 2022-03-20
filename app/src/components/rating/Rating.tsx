import { useEffect, useState } from 'react';
import styles from './Rating.module.scss';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import axios from 'axios';

interface Props {
    id : String,
    onRatingChange : Function
}

export const Rating : React.FC<Props> = ({id, onRatingChange}) => {
    const [rating, setRating] = useState(0);
    const stars = [1, 2, 3, 4, 5]

    useEffect(() => {
        const getValue = async () => {
          const user = JSON.parse(localStorage.getItem('user'));
          const rating = await axios.get(`https://mk-it-assignment-be.vercel.app/api/user/${user.id}/movies/${id}/rating`,
          {
            headers : {
              token : user.token
            }
          })
          setRating(rating.data.content);
        }
        getValue()
      }, [])

    const onSetRating = (index : number) => {
        onRatingChange(index)
        setRating(index)
    }
    return(
        <div className={styles.wrapper}>
            {
                stars.map(star => {
                    return(
                        star <= rating ?
                        <StarIcon fontSize='large' onClick={() => onSetRating(star)}/>
                        :
                        <StarBorderIcon fontSize='large' onClick={() => onSetRating(star)}/>
                    )
                })
            }
        </div>
    )
}