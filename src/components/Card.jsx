import './Card.css'

const Card = ({ foodPic, name, recipe, ingredients }) => {
    return (
        <div className="card">
            <img
                className="card-image"
                src={foodPic}
                alt="food image">
            </img>
            <h2 className="card-title">{name}</h2>
            <p className="card-text">Recipe: {recipe}</p>
            <p className="card-text">Ingridients: {ingredients}</p>
        </div>
    )
}

export default Card