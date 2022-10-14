import {useState} from "react";
import "./styles.css"


function App() {
  // state (état ou donnée (data)
    const [compteur,setCompteur] = useState(1)
    const [fruits,setFruit] = useState([])
    const [newFruit, setNewFruit] = useState("")
  //comportement

    const Incremente = () => {setCompteur(compteur+1)}
    const deleteFruit = (id) => {
        const fruitCopy = [...fruits]
        const fruitCopyUpdated = fruitCopy.filter(fruit => fruit.id !== id)
        setFruit(fruitCopyUpdated)
    }
    const handeSubmit = (event) => {
        event.preventDefault()
        const FruitsCopy = [...fruits]
        FruitsCopy.push({id : new Date().getTime(), nom : newFruit})
        setFruit(FruitsCopy)
        setNewFruit("")
    }
    const handeChange = (event) => {
        event.preventDefault()
        setNewFruit(event.target.value)
    }

  //affichage (render => re-render)

    return <div className="wrapper">
        <h1 className="title">Tâches à faire : </h1>
        <ul className="container--todo">
            {fruits.map((fruit) => (
            <lo key={fruit.id}>{fruit.nom}
                <button onClick={()=>(deleteFruit(fruit.id))} className="bt-cw btn btn-primary">
                    <i className="fa-solid fa-trash-can "></i>
                </button>
            </lo>
            ))}
        </ul>
        <form action='submit' onSubmit={handeSubmit} className="sumbit--add">
            <input className="form-control" value={ newFruit } type='text' placeholder="Entrez une note" onChange={handeChange}></input>
            <button className="btn btn-primary">Ajouter</button>
        </form>
    </div>
}

export default App;


