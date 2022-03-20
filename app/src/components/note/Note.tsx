import styles from './Note.module.scss';
import TextField from '@mui/material/TextField'
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import axios from 'axios'

interface Props{
    onSubmit : Function,
    id : String
}

export const Note : React.FC<Props> = ({onSubmit, id}) => {
    const [value, setValue] = useState('');
    const [initialValue, setInitialValue] = useState();
    console.log(value);
    
    useEffect(() => {
      const getValue = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        const note = await axios.get(`https://mk-it-assignment-be.vercel.app/api/user/${user.id}/movies/${id}/note`,
        {
          headers : {
            token : user.token
          }
        })
        setValue(note.data.content);
        setInitialValue(note.data.content);
      }
      getValue()
    }, [])
    
    return(
        <div className={styles.wrapper}>
            <Grid container spacing={3} direction="column">
              <Grid item>
                <TextField
                label="Note"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                multiline
                rows={5}
                className={styles.noteWrapper}
                fullWidth
                inputProps={{ style: { fontFamily: 'Josefin Sans', color: 'white', border : '1px solid #45A29E'}}}
                />
              </Grid>
              <Grid item>
                  <Button variant="outlined" color="success" disabled={value == initialValue} onClick={() => {onSubmit(value);setInitialValue(value)}}>
                    Save note
                  </Button>
              </Grid>
            </Grid>
        </div>
    )
}