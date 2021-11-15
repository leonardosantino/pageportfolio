import "../assets/styles/banner.scss"
import img from "../assets/imgs/hero.png"

function Banner() {
    return (
        <>
            <div className="row row-cols-1 row-cols-lg-2 d-flex justify-content-center">
                <div className="col d-flex justify-content-center align-items-center" id="about">
                    <span>
                        <span className="textstart">
                            Hi ! <br />
                        </span>
                        <span className="textcenter">
                            I’m Leonardo Santino <br />A student of technology <br />
                        </span>
                        <span className="textend">
                            Currently living in Pernambuco, Brasil <br />
                            I’m coding a clean and beautiful design
                        </span>
                    </span>
                </div>
                <div className="col d-flex justify-content-center align-items-center">
                    <img src={img} className="img-fluid" alt="Ilustração" />
                </div>
            </div>
        </>
    );
}
export default Banner;