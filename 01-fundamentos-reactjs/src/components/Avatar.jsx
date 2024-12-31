import styles from './Avatar.module.css';

const user = {name: "Diego"}

export function Avatar({hasBorder = true, src}){
    return(
        <img
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={src}
        />
    )
}