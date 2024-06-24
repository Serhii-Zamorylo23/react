import s from "./arcticles.module.scss"
import img from "./img.png"

const ArcticlesItem=(props)=>{
    return(
        <article className={s.list_item}>
            <img className={s.list_item_img} src={img} alt="image article" />
            <h3 className={s.list_item_category}>{props.category}</h3>
            <h2 className={s.list_item_title}>{props.title}</h2>
            <p className={s.list_item_text}>{props.text}</p>
        </article>
    )
}
export default ArcticlesItem