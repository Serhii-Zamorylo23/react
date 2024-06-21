import s from './nav.module.scss'
import ItemNav from './ItemNav'
const CreateNav=()=>{
    const Active="LIFESTYLE"
    const NavStorage =[
        "LIFESTYLE",
        "PHOTODIARY",
        "MUSIC",
        "TRAVEL"
    ]   
    return(
        <nav className={s.list}>
            {NavStorage.map((item)=>(
                <ItemNav active={Active} text={item}/>
            ))}
        </nav>
    )
}
export default CreateNav