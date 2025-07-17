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
        <div id="accordition" className="container bg-white ">
            <div className="row row-cols-2 row-cols-lg-6 g-2 g-lg-3">

            {data.map((item, index)=> {
                return(
                    <div className="accordion-item">
                        <button className="btn btn-primary" onClick={()=> handleClick(index)}>{item.language}</button>
                        <div>
                            
                        { open === index && <p>{item.info}</p>}

                        </div>
                    </div>
                )
            })}

            </div>
        </div>
    )
}

