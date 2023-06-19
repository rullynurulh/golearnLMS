<footer class="bg-footer text-center text-lg-start">
    <!-- Grid container -->
    <div class="container p-4">

        {{-- @if (Auth::check())
            <div class="row">
                <!--Grid column-->
                <div class="col-lg-6 col-md-12 mb-4 mb-md-0 text-black pt-5">
                    <h2 class="mb-3" style="font-weight: bold;">Contact Us</h2>
                    <a href="https://www.instagram.com/casislab" style="text-decoration: none; color:black"><p><span class="iconify me-1" data-icon="ic:baseline-whatsapp" data-width="25"></span>+62-821-8146-3035 (chat only)</p></a>
                    <p><span class="iconify" data-icon="ic:round-email" style="color: black;" data-width="24"></span> casislabb@gmail.com</p>

                    <h2 class="mt-5 mb-3"style="font-weight: bold;">Follow us online</h2>
                    <a href="https://www.instagram.com/casislab" style="text-decoration: none; color:black"><p><span class="iconify me-1" data-icon="uil:instagram" data-width="25"></span>@casislab</p></a>
                    <a href="https://www.tiktok.com/@casislab.com?refer=creator_embed" style="text-decoration: none; color:black"><span class="iconify" data-icon="ic:baseline-tiktok" style="color: black;" data-width="25"></span> casislab.com</p></a>
                    <p class="mt-5" >Siap menghadapi tes seleksi masuk anggota
                        Polri 2023
                        </p>
                    
                </div>
                <h2 class="text-end"style="font-weight:900; margin-right: -.5rem"><img class="mb-3 me-2" src="{{ URL::asset('images/logo_casislab.png') }}" alt="logo"
                    style="width: 50px;">| CASIS<span style="color: #E52A86">LAB<span></h2>
            </div>
        @else --}}
            <div class="row" style="margin-top: -4rem;">
                <div class="pop-up-ads">
                    <div class="row" style="padding: 2rem;">
                        <div class="col d-flex align-items-center">
                            <h5 class="text-white" style="margin: 0px;">Berlangganan Sekarang
                            </h5>
                        </div>
                        <div class="col d-flex justify-content-end">
                            <a href="/login" class="btn btn-light me-3" style="border-radius: 12px !important">
                                Masuk <span class="iconify" data-icon="material-symbols:arrow-right-alt-rounded"></span>
                            </a>
                            <a href="/subscription" class="btn btn-outline-light"
                                style="border-radius: 12px !important">
                                <span>Harga</span> <span class="iconify"
                                    data-icon="material-symbols:arrow-right-alt-rounded"></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 mb-4 mb-md-0 text-black pt-5">
                    <div class="col-lg-6 col-md-12 mb-4 mb-md-0 text-black pt-5">
                        <h2 class="mb-3" style="font-weight: bold;">Contact Us</h2>
                        <a href="https://www.instagram.com/casislab" style="text-decoration: none; color:black"><p><span class="iconify me-1" data-icon="ic:baseline-whatsapp" data-width="25"></span>+62-821-8146-3035 (chat only)</p></a>
                        <p><span class="iconify" data-icon="ic:round-email" style="color: black;" data-width="24"></span> casislabb@gmail.com</p>
    
                        <h2 class="mt-5 mb-3"style="font-weight: bold;">Follow us online</h2>
                        <a href="https://www.instagram.com/casislab" style="text-decoration: none; color:black"><p><span class="iconify me-1" data-icon="uil:instagram" data-width="25"></span>@casislab</p></a>
                        <a href="https://www.tiktok.com/@casislab.com?refer=creator_embed" style="text-decoration: none; color:black"><span class="iconify" data-icon="ic:baseline-tiktok" style="color: black;" data-width="25"></span> casislab.com</p></a>
                        <p class="mt-5" >Siap menghadapi tes seleksi masuk anggota
                            Polri 2023
                            </p>
                        
                    </div>
                    
                </div>
                <h2 class="text-end"style="font-weight:900; margin-right: -.5rem"><img class="mb-3 me-2" src="{{ URL::asset('images/logo_casislab.png') }}" alt="logo"
                        style="width: 50px;">| CASIS<span style="color: #E52A86">LAB<span></h2>
            </div>
        {{-- @endif --}}

    </div>
    <!-- Grid container -->

    {{-- <!-- Copyright -->
    <div class="text-center text-white bg-dark p-3">
        © 2023 Casis.LAB
    </div>
    <!-- Copyright --> --}}
</footer>
