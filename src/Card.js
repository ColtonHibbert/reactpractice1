

function Card(props) {

    const {
        characterData
    } = props.results

    return(
        <div>
            {characterData.name}
        </div>
    );
}

export default Card;