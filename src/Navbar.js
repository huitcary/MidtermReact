const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/"><b>Home</b></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/venues"><b>Venues</b></a>
                </li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;