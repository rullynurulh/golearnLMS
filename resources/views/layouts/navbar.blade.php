<nav class="navbar navbar-expand-lg navbar-light fixed-top navbar-fixed-top bg-light">
    <div class="container-fluid d-flex justify-content-center">
        <a href="/" class="navbar-brand ms-5 my-1" style="color: black; font-weight: 600"><img
                src="{{ URL::asset('images/icon_golearn.png') }}" alt="logo" class="me-3"style="width: 3.5rem;"></a>

        <div class="nav ms-n5">
            <ul>
                <li>
                    <div class="form">

                        <input type="text" class="form-control form-input "
                            style="width: 280px; background-color: #DCDCDC; border-radius: 10px"
                            placeholder="Search for courses, skills, or videos">

                    </div>
                </li>
                <li><a href="/" class="nav-item mx-4 ">Home</a></li>
                <li><a href="/about-us" class="nav-item mx-4 ">About Us</a></li>
                <li><a href="/courses" class="nav-item mx-4">Courses</a></li>
                <li><a href="/teachers" class="nav-item mx-4 ">Our Teacher</a>
                </li>

                <li><a href="/contact" class="nav-item mx-4 ">Contact</a>
                </li>

                <li><a href="/signin" class="nav-item mx-4 fw-bold">Login</a></li>
            </ul>
        </div>
        <a href="/signup-role" class="btn btn-button" style="border-radius: 12px !important"> Sign Up </a>

    </div>
</nav>
