import "../assets/styles/card.scss"

function Card(props) {
    return (
        <>
            <div className="card">
                <img src={props.img} className="card-img-top" alt="card img" />
                <div className="card-body">
                    <h5 className="card-title"><span className="normaltitle">{props.normaltext}&nbsp;</span><span className="boldtitle">{props.boldtext}</span></h5>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </>
    );
}
export default Card;