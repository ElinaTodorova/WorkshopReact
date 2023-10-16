import Data from "../../Data.json"
import CartMemes from "../CardMemes/CardMemes.jsx";
import styles from './CardContainer.module.css'

const arrayMemes = Data;

export default function CardContainer() {
    return  <div className={styles.container}>
    {arrayMemes.map((element) => 
        <CartMemes key={element.title} title={element.title} img={element.img}></CartMemes>
       )}
      </div> 
}