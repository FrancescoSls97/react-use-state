import { use, useState } from "react"
export default function AccordionList (){
const[open, setOpen] = useState(false)
const data = [
    {   
        language: 'HTML',
        info: 'HTML, acronimo di HyperText Markup Language, è il linguaggio standard utilizzato per creare pagine web. Non è un linguaggio di programmazione nel senso tradizionale, ma un linguaggio di markup che definisce la struttura e il contenuto di un documento web. HTML usa elementi e attributi per organizzare testo, immagini, e altri contenuti, permettendo ai browser di interpretarli e visualizzarli correttamente. '
    },
    {
        language: 'CSS',
        info: 'CSS, acronimo di Cascading Style Sheets, è un linguaggio utilizzato per definire la presentazione e lo stile visivo di documenti HTML, XHTML e XML, come le pagine web. In altre parole, il CSS permette di controllare aspetto l` di un sito web, come colori, font, layout, ecc., separando la struttura (HTML) dalla presentazione (CSS). '
    },
    {
        language: 'JavaScript',
        info: 'JavaScript è un linguaggio di programmazione orientato agli oggetti, utilizzato principalmente per creare interazioni dinamiche nelle pagine web, ma anche per lo sviluppo di applicazioni server, app mobile e videogiochi. È uno dei linguaggi fondamentali per il front-end development, insieme a HTML e CSS, e gestisce il comportamento dinamico degli elementi di un sito web. '
    },
    {
        language: 'Node.js',
        info: 'Node.js è un ambiente di runtime open source, multipiattaforma, che permette di eseguire codice JavaScript lato server. In sostanza, offre la possibilità di utilizzare JavaScript, tradizionalmente un linguaggio per lo sviluppo front-end, anche per la parte backend di un`applicazione web, permettendo così di unificare il linguaggio di programmazione utilizzato per entrambi i lati della stessa. '
    },
    {
        language: 'Express',
        info: 'In informatica, Express si riferisce principalmente a Express.js, un framework web leggero e flessibile per Node.js, utilizzato per creare applicazioni web e API. In altre parole, è un insieme di strumenti e funzionalità che semplificano lo sviluppo del lato server di applicazioni web, gestendo routing, richieste HTTP e middleware. '
    },
    {
        language: 'ReactJS',
        info: 'React è una libreria JavaScript open-source, creata da Facebook, per lo sviluppo di interfacce utente (UI) interattive e dinamiche. È ampiamente utilizzata per creare applicazioni web a pagina singola (SPA) e interfacce utente reattive e performanti. '
    }
]

function handleClick(index, color, textColor){
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
                            
                        { open === index && <p className="card-text my-3 p-2 justify-center border">{item.info}</p>}

                    </div>
                )
            })}

            </div>
        </div>
    )
}

