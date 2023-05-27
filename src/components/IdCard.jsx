import "../components/css/IdCard.css"
function IdCard({lastName, firstName, gender, height, birth, picture,}) {
    return(<div className="idCard">
        <img src={picture} alt="Profile"/>
        <ul>
        <li><span>First name: </span>{firstName}</li>
        <li><span>Last name: </span>{lastName}</li>
        <li><span>Gender: </span>{gender}</li>
        <li><span>Height: </span>{height}</li>
        <li><span>Birth: </span>{birth.toDateString()}</li>
        </ul>
        </div>
    )
}
export default IdCard
