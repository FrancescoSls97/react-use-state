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

function handleClick(index){
    console.log('click');
    console.log(index);
    
    setOpen(index)
}
    return(
        <div id="accordition" className="bg-white text-dark">
            {data.map((item, index)=> {
                return(
                    <div className="accordion-item">
                        <button onClick={()=> handleClick(index)}>{item.language}</button>
                        { open === index && <p>{item.info}</p>}
                    </div>
                )
            })}
        </div>
    )
}

