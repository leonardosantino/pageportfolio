import "../assets/styles/card.scss"

function CardImg(props) {
    return (
        <>
            <div className="card">
                <a href={props.href} target="_blank" rel="noreferrer"><img src={props.img} className="card-img-top" alt="card img" /></a>
            </div>
        </>
    );
}
export default CardImg;