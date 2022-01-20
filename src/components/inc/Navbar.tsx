import { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
                <div className="container">
                    <Link className="navbar-brand" to="/">นายมาร์ก</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">หน้าแรก</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">เกี่ยวกับเรา</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    หลักสูตร
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="#">ระดับ ปวช.</Link></li>
                                    <li><Link className="dropdown-item" to="#">ระดับ ปวส.</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="#">ระดับ ปริญญาตรี</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">ติดต่อเรา</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        )
    }
}
export default Navbar;