import {useState} from "react";
import Fruit from "./components/Fruit";


function App() {
  // state (état ou donnée (data)
    const [compteur,setCompteur] = useState(1)
    const [fruits,setFruit] = useState([
        {id: 1, nom: "banane"},
        {id: 2, nom: "coco"},
        {id: 3, nom: "pomme"}
    ])
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
    }
    const handeChange = (event) => {
        event.preventDefault()
        setNewFruit(event.target.value)
    }

  //affichage (render => re-render)
    return <div>
        <h1>Liste de fruits</h1>
        <ul>
        {fruits.map((fruit)=> {
            <Fruit fruitData={ fruit } onFruitDelete={ deleteFruit } />
        })}
        </ul>
        <form action='submit' onSubmit={handeSubmit}>
            <input value={ newFruit } type='text' placeholder="Entrez un fruit" onChange={handeChange}></input>
            <button>Add</button>
        </form>
        <h1>{ compteur}</h1>
        <button onClick={Incremente}>Incrémente</button>
    </div>
}

export default App;


