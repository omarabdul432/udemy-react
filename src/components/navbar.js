// navbar component

function Navbar() {
    return (
        <div class="navbar">

            <div class="navbar__s1">
                <h1 class="navbar__s1__title">Udemy</h1>
            </div>

            <div class="navbar__s2">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search Anything Here" />
            </div>

            <div class="navbar__s3">
                <p>My Learning</p>
                <div class="mylearning">
                    <p>My Learning</p>
                    <div class="mylearning__popup">
                        <p>You did not purchase anything</p>
                    </div>
                </div>
                <p>Courses</p>
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-solid fa-bell"></i>
                <i class="fa-solid fa-user"></i>
            </div>

            <div class="navbar__s4">
                <i class="fa-solid fa-bars"></i>
            </div>

        </div>
    )
}

export default Navbar