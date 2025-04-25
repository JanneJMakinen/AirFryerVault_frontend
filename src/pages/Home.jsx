import airfryerpic from '../assets/mainairfryer.jpeg'

const Home = () => {
    return (
        <div>
            <h1>Air Fryer Vault Application</h1>
            <img src={airfryerpic} alt="AirFryer" height={400} width={300} />
            <p>The home of air fryer food recipes. Enjoy!</p>
        </div>
    )
}

export default Home
