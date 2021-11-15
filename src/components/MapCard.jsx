import CardImg from "./CardImg"
import imgsendpay from "../assets/imgs/sendpay.png";
import imgecommerce from "../assets/imgs/ecommerce.png";
import imglearning from "../assets/imgs/learning.png";

const cards = [
    { img: imgsendpay, href: "https://github.com/leonardosantino/payflow" },
    { img: imgecommerce, href: "https://github.com/leonardosantino/pagestorebts" },
    { img: imglearning, href: "https://github.com/leonardosantino/certifiedtechdeveloper" }
];

function MapCards() {

    return (
        <>
            {cards.map((item, index) => {
                return <div key={index}><CardImg img={item.img} href={item.href} /></div>;
            })}
        </>
    )
}

export default MapCards;