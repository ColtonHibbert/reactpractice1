import Card from "./Card.js";


function Home(props) {
    const {
        rickData
    } = props;

    return (
        <div>
            <div>Rick And Morty Party!</div>
            {
                rickData.results.map(character => {
                    return (
                        <Card character={character} key={character.id}/>
                    )
                } )
            }
            
           
        
        </div>
    )
}

export default Home;