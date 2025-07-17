import { useState } from "react"
import AccordionList from "./Accordition"

export default function Main() {

return (
        <main>
            <div className="container m-5 p-5">
                <div className="card">
                    <div className="card-header">
                        <h1>Learn Web development</h1>
                    </div>
                    <div className="card-body">

                        <AccordionList />                        

                    </div>                   
                </div>
            </div>
        </main>
    )
}