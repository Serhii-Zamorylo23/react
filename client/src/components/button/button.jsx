import s from "./button.module.scss"
const Button=(props)=>{
    return(
        <button className={s.button}>
        {props.text}
        </button>
    )
}
export default Button