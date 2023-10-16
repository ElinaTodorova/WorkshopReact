import CompteurLike from "../../assets/components/compteur_likes/compteur.jsx"
import styles from "./CardMemes.module.css"
export default function CartMemes({ title, img }) {

    return <div className={styles.boxMeme}>
        
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.containerImage}>
            {img.includes('jpg') ? <img className={styles.image} src={`/images/${img}`} alt="Day in programmer's life" /> : <video className={styles.image} src={img} autoPlay="true" loop />}
            
        </div>
        <div className={styles.buttonContainer}>
        <CompteurLike />
        </div>
    </div>
}