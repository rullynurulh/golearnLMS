<style>
    .pages-custom {
        border-radius: 7px;
    }

    .jumlah-extra {
        color: black;
        margin-bottom: 0;
    }

    .color-extra-text {
        background-color: #fff;
        border-radius: 7px;
        margin-left: -5px;
        z-index: -1;
    }
</style>
<nav class="navbar row navbar-expand-lg fixed-top navbar-fixed-top bg-primary3 py-3">
    <div class="col-2 d-flex justify-content-end">
        <a href="/" style="color: black; font-weight: 600"> <img src="{{ URL::asset('images/icon_golearn.png') }}"
                alt="logo" class="me-3"style="width: 3.5rem;"></a>
        <div class="ms-5 ps-5 d-flex align-items-center" style="font-size: 35px">&#9776;</div>
    </div>
    <div class="col-10">
        <div class="nav d-flex align-items-center">
            <div class="flex-grow-1 ">
                <div class="form">

                    <input type="text" class="form-control form-input "
                        style="width: 280px; background-color: #DCDCDC; border-radius: 10px"
                        placeholder="Search for courses, skills, or videos">

                </div>
            </div>
            <div class="mx-1 pages-custom pages-code d-flex justify-content-end align-items-center" style="padding-right: 20px">

                <li class="d-flex justify-content-center align-items-center button-hint ">
                    <button class="btn btn-primary ">
                        Extra Hint
                    </button>
                </li>
                <li class=" d-flex justify-content-end align-items-center text-hint color-extra-text px-3 py-1">

                    <h5 class="jumlah-extra" id="jumlah_extra_hint">
                        {{ auth()->user()->extra_hint }}
                    </h5>

                </li>

            </div>
            <div class="row me-5 align-items-center width-100">
                <div class="col-2">
                    <span class="iconify" data-icon="mdi:bell" style="color: #fdcf73;" data-width="30"></span>
                </div>
                <div class="col-1" style="font-size: 40px">
                    |
                </div>
                <div class="col-8">
                    <div class="row d-flex align-items-center pointer" style="font-size: 23px" onclick="toggleMenu()">
                        <div class="col-4" style="padding-right: 0">

                            @if (!is_null(auth()->user()->image))
                                <img src="/{{ auth()->user()->image }}"
                                    style="width: 40px !important;border-radius:50%">
                            @else
                                <img src="{{ URL::asset('images/guru1.jpg') }}"
                                    style="width: 40px !important;border-radius:50%">
                            @endif
                        </div>
                        <div class="col-4" style="padding-left: 0">
                            {{ Auth::user()->name }}
                        </div>
                        <div class="col-2" style="margin-left: 30px">
                            <span class="iconify" data-icon="mingcute:down-fill" data-width="15px"></span>
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
                                <img src="{{ URL::asset('images/guru1.jpg') }}"
                                    style="width: 65px !important;border-radius:50%">
                            @endif

                            <h4 style="color:black;"> {{ Auth::user()->name }}</h4>

                        </div>
                        <hr>
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
