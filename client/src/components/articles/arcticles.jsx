import s from "./arcticles.module.scss"
import ArcticlesItem from "./articlesItem"
const Arcticles=()=>{
    const arcticlesStorage=[
        {
            category:"LIFESTYLE",
            title:"More than just a music festival ",
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea."  
        },
        {
            category:"LIFESTYLE",
            title:"Life tastes better with coffee",
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea."
        },
        {
            category:"PHOTODAIRY",
            title:"American dream",
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea."
        },
        {
            category:"PHOTODAIRY",
            title:"A day exploring the Alps",
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea."
        },
        {
            category:"LIFESTYLE",
            title:"Top 10 song for running",
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea."
        },
        {
            category:"LIFESTYLE",
            title:"Cold winter days",
            text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea."
        }
    ]
    return(
        <section className={s.section}>
            <ul className={s.list}>
                {arcticlesStorage.map((item) => (
                    <ArcticlesItem
                    category={item.category}
                    title={item.title}
                    text={item.text}
                    />
                ))}
            </ul>
        </section>
    )

}
export default Arcticles