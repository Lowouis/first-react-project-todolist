export default function Fruit(props){
    //State


    //Comportement

    //Affichage
    return (<li key={props.fruitData.id}>
            {props.fruitData.nom}{" "}
                <button onClick={() => {props.onFruitDelete(props.fruitData.id)}}>
                    X
                </button>
            </li>);
}