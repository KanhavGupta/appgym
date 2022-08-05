import LoginPage from "./loginPage";

export default function NavBar() {
    return (
        <>
            <nav id="navbar" class="navbar navbar-expand-lg navbar-dark bg-dark"> 
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">TeamFit</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="nav justify-content-end ">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Get App</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={LoginPage}>Join Now</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul id="" className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Profile</a></li>
                                    <li><a className="dropdown-item" href="#">Logout</a></li>
                                    
                                </ul>
                            </li>
                        </ul>
                    </div> 
                </div>
            </nav>
        </>
    );
}