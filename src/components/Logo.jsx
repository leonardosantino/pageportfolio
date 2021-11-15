import "../assets/styles/logo.scss"

function Logo(props) {
    return (
        <>
            <div>
                <a href={props.href} target="_blank" rel="noreferrer" className="text-decoration-none">
                    <div ><img src={props.img} className="img-fluid" alt="logo img" /></div>
                    <div className="logotitle">{props.normaltext}</div>
                </a>
            </div>
        </>
    );
}
export default Logo;