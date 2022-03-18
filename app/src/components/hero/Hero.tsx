import styles from './Hero.module.scss';

interface Props{
    image : string
}


export const Hero : React.FC<Props> = ({image}) => {
    return(
        <div className={styles.image}>
            <img src={image} style={{width : "100%"}}/>
        </div>
    )
}