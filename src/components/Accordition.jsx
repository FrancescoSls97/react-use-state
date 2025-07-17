import { useState } from "react"
export default function AccordionList (){
const[open, setOpen] = useState(false)
const data = [
    {
        language: 'HTML',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ullam. Sit, dolores eum animi saepe id voluptate recusandae error sapiente. Facilis, pariatur impedit officiis sed porro dignissimos! Temporibus, aperiam. Distinctio.'
    },
    {
        language: 'HTML',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ullam. Sit, dolores eum animi saepe id voluptate recusandae error sapiente. Facilis, pariatur impedit officiis sed porro dignissimos! Temporibus, aperiam. Distinctio.'
    },
    {
        language: 'HTML',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ullam. Sit, dolores eum animi saepe id voluptate recusandae error sapiente. Facilis, pariatur impedit officiis sed porro dignissimos! Temporibus, aperiam. Distinctio.'
    },
    {
        language: 'HTML',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ullam. Sit, dolores eum animi saepe id voluptate recusandae error sapiente. Facilis, pariatur impedit officiis sed porro dignissimos! Temporibus, aperiam. Distinctio.'
    },
    {
        language: 'HTML',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ullam. Sit, dolores eum animi saepe id voluptate recusandae error sapiente. Facilis, pariatur impedit officiis sed porro dignissimos! Temporibus, aperiam. Distinctio.'
    },
    {
        language: 'HTML',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ullam. Sit, dolores eum animi saepe id voluptate recusandae error sapiente. Facilis, pariatur impedit officiis sed porro dignissimos! Temporibus, aperiam. Distinctio.'
    }
]

function handleClick(){
    console.log('click');
    
    setOpen(!open)
}
    return(
        <div id="accordition" className="bg-black text-white">
            {data.map((item) =>{
                return(
                    <div className="accordion-item">
                        <h3><button onClick={handleClick}>{item.language}</button></h3>
                        { open && <p>{item.info}</p>}
                    </div>
                )
            })}
        </div>
    )
}