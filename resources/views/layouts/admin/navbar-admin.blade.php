<nav class="navbar row navbar-expand-lg fixed-top navbar-fixed-top bg-primary3 py-3">
    <div class="col-2 d-flex justify-content-end">
        <a href="/"  style="color: black; font-weight: 600">   <img src="{{ URL::asset('images/icon_golearn.png') }}" alt="logo" class="me-3"style="width: 3.5rem;"></a>
        <div class="ms-5 ps-5 d-flex align-items-center" style="font-size: 35px">&#9776;</div>
    </div>
    <div class="col-10">
        <div class="nav ms-5 d-flex justify-content-between align-items-center">
            <div>
                <a href="/" class="btn btn-button">Website</a>
            </div>
               
            <div class="row me-5 d-flex align-items-center width-100">
                <div class = "col-2">
                    <span class="iconify" data-icon="mdi:bell" style="color: #fdcf73;" data-width="30"></span>
                </div>
                <div class = "col-1" style="font-size: 40px">
                   |
                </div>
                <div class="col-8">
                    <div class="row d-flex align-items-center pointer" style="font-size: 23px"  onclick="toggleMenu()">
                        <div class="col-4" style="padding-right: 0">
                            <img src="{{ URL::asset('images/guru1.jpg') }}"  style="width: 40px !important;border-radius:50%">
                        </div>
                       <div class="col-4" style="padding-left: 0">
                        Username
                       </div>
                        <div class="col-2" style="margin-left: 30px">
                            <span class="iconify" data-icon="mingcute:down-fill" data-width="15px"></span>
                        </div>
                        
                            
                        
                        
                    </div>
                </div>
                <div class="sub-menu-wrap" id="subMenu">
                    <div class="sub-menu">
                        <div class="user-info">
                            <img src="{{ URL::asset('images/guru1.jpg') }}" style="width: 65px !important;border-radius:50%">
                            <h4 style="color:black;">Username</h4>
                            
                        </div>
                        <hr>
                        <a href="#" class="sub-menu-link" >
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

    function toggleMenu(){
        subMenu.classList.toggle("open-menu");
    }
</script>
