<nav class="navbar row navbar-expand-lg fixed-top navbar-fixed-top bg-primary3 py-3">
    <div class="col-2 d-flex justify-content-start align-items-center" style="flex-direction: row;">
        <a href="/" style="color: black; font-weight: 300"> <img src="{{ URL::asset('images/logo_pjg.png') }}"
                alt="logo" class="me-auto" style="width: 12rem;"></a>

        <div class="ms-5 ps-5 d-flex align-items-center" style="font-size: 40px">
            |
        </div>
        <!-- <div class="ms-5 ps-5 d-flex align-items-center" style="font-size: 35px">&#9776;</div> -->
    </div>
    <div class="col-10">
        <div class="nav ms-5 d-flex justify-content-between align-items-center">
            <div>
                <a href="/" class="btn btn-button">Website</a>
            </div>

            <div class="row me-6 d-flex align-items-center width-180">
                <!-- <div class="col-2">
                    <span class="iconify" data-icon="mdi:bell" style="color: #fdcf73;" data-width="30"></span>
                </div> -->
                <div class="col-1" style="font-size: 40px">
                    |
                </div>
                <div class="col-10">
                    <div class="row d-flex align-items-center pointer" style="font-size: 20px" onclick="toggleMenu()">
                        <div class="col-3" style="padding-right: 0">
                            @if (!is_null(auth()->user()->image))
                                <img src="/{{ auth()->user()->image }}"
                                    style="width: 40px !important;border-radius:50%">
                            @else
                                <img src="{{ URL::asset('images/profile-picture/admin.jpg') }}"
                                    style="width: 40px !important;border-radius:50%">
                            @endif
                        </div>
                        <div class="col-6" style="padding-left: 0">
                            {{ Auth::user()->name }}
                        </div>
                        <div class="col-1" style="margin-left: 20px">
                            <span class="iconify" data-icon="mingcute:down-fill" data-width="20px"></span>
                        </div>

                    </div>
                </div>
                <div class="sub-menu-wrap" id="subMenu">
                    <div class="sub-menu">
                        <div class="user-info">
                            @if (!is_null(auth()->user()->image))
                                <img src="/{{ auth()->user()->image }}"
                                    style="width: 65px !important;border-radius:50%">
                            @else
                                <img src="{{ URL::asset('images/profile-picture/admin.jpg') }}"
                                    style="width: 65px !important;border-radius:50%">
                            @endif

                            <h4 style="color:black;"> {{ Auth::user()->name }}</h4>

                        </div>
                        <hr>
                        <a href="/admin/my-profile" class="sub-menu-link">
                            <span class="iconify me-2" data-icon="mdi:user" data-width="30"></span>
                            <p style="margin: 0">View Profile</p>
                            <span>></span>
                        </a>
                        <a href="{{ route('logout_action') }}" class="sub-menu-link">
                            <span class="iconify me-2" data-icon="mdi:logout" data-width="30"></span>
                            <p style="margin: 0">Log Out</p>
                            <span>></span>
                        </a>
                    </div>
                </div>
            </div>

        </div>

    </div>
</nav>

<script>
    let subMenu = document.getElementById("subMenu");

    function toggleMenu() {
        subMenu.classList.toggle("open-menu");
    }
</script>
