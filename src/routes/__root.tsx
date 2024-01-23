import { Link, Outlet, RootRoute } from '@tanstack/react-router';
import Footer from '../components/footer'

export const Route = new RootRoute({
  component: RootComponent,
});

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="https://i.pinimg.com/originals/d9/20/be/d920beb65bf3d8aa02df63371f122815.jpg"
            alt="Spidey icon"
            className="footer-icon me-2"
            style={{ width: '38px', height: '38px' }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/movies" className="nav-link">
                Movies
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function RootComponent() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootComponent;
