import s from "./nav.module.scss"

const ItemNav=(props)=>{
    return(
        <a 
            href="#" 
            className={`
                ${s.list_item}
                ${props.active === props.text && s.list_item_active}
                `}
                >
            {props.text}
        </a>
    )   
}
export default ItemNav