import s from "./nav.module.scss"

const ItemNav=(props)=>{
    return(
        <a href="#" className={s.list_item}>{props.text}</a>
    )   
}
export default ItemNav