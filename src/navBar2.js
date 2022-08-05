export default function NavBar2() {
    return (
        <>
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light"> */}
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center nav-fill" id="navbarSupportedContent">
                        <ul class="nav nav-fill">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Centres</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Team</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact US</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}