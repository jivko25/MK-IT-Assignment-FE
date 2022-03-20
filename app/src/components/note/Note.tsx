import styles from './Note.module.scss';
import TextField from '@mui/material/TextField'
import { useState } from 'react';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

interface Props{
    onSubmit : Function,
    initialValue : String
}

export const Note : React.FC<Props> = ({onSubmit, initialValue}) => {
    const [value, setValue] = useState(initialValue)
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
                inputProps={{ style: { fontFamily: 'Josefin Sans', color: 'white'}}}
                />
              </Grid>
              <Grid item>
                  <Button variant="outlined" color="success" disabled={value == initialValue} onClick={() => onSubmit(value)}>
                    Save note
                  </Button>
              </Grid>
            </Grid>
        </div>
    )
}