import "../assets/styles/navbar.scss"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" aria-label="Main navigation">

      <div className="container-fluid">

        <a className="navbar-brand" href="#logo"><span className="firstname">Leonardo&nbsp;</span><span className="lastname">Santino</span></a>

        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

          <div className="offcanvas-header">
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div className="offcanvas-body">

            <ul className="navbar-nav justify-content-end align-items-center flex-grow-1">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#learning">Learning</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contactme"><button className="btn btn-primary" type="button">Contact me</button></a>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;