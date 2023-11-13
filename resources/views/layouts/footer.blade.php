<footer class="bg-footer text-center text-lg-start">
    <!-- Grid container -->
    <div class="content bg-footer p-5">
        <div class="row px-5  d-flex justify-content-between">
            <div class="col-3 me-5">
                <img class="mb-3" src="{{ $account['image'] }}" style="width: 100px">
                <p class="text-white" style="width: 300px">{{ $footer }}</p>
                <div class="col">
                    @foreach ($social as $s)
                        <a class="me-3" href="{{ $s['link'] }}"><img src="{{ URL::asset($s['image']) }}"
                                width="40" height="40" alt=""></a>
                    @endforeach
                </div>
            </div>

            <div class="col-2 pt-4 ms-5">
                <h2 class="text-white pb-3">Sitemap</h2>
                <div class="row">
                    <a href="/" class="text-white mb-1" style="text-decoration: none"><span class="iconify "
                            data-icon="fa-solid:chevron-right" style="color: #fdcf73; " data-width="12"></span> Home</a>
                    <a href="/" class="text-white mb-1" style="text-decoration: none"><span class="iconify "
                            data-icon="fa-solid:chevron-right" style="color: #fdcf73; " data-width="12"></span> About
                        Us</a>
                    <a href="/" class="text-white mb-1" style="text-decoration: none"><span class="iconify "
                            data-icon="fa-solid:chevron-right" style="color: #fdcf73; " data-width="12"></span>
                        Courses</a>
                    <a href="/" class="text-white mb-1" style="text-decoration: none"><span class="iconify "
                            data-icon="fa-solid:chevron-right" style="color: #fdcf73; " data-width="12"></span> Our
                        Teacher</a>
                    <a href="/" class="text-white mb-1" style="text-decoration: none"><span class="iconify "
                            data-icon="fa-solid:chevron-right" style="color: #fdcf73; " data-width="12"></span>
                        Contact</a>

                </div>

            </div>
            <div class="col-2 pt-4 ms-5">
                <h2 class="text-white pb-3">Company Info</h2>
                <div class="row">
                    <a href="/" class="text-white mb-1" style="text-decoration: none"><span class="iconify "
                            data-icon="fa-solid:chevron-right" style="color: #fdcf73; " data-width="12"></span> FAQs</a>
                    <a href="/" class="text-white mb-1" style="text-decoration: none"><span class="iconify "
                            data-icon="fa-solid:chevron-right" style="color: #fdcf73; " data-width="12"></span>
                        Privacy</a>
                    <a href="/" class="text-white mb-1" style="text-decoration: none"><span class="iconify "
                            data-icon="fa-solid:chevron-right" style="color: #fdcf73; " data-width="12"></span>
                        Policy</a>


                </div>
            </div>
            <div class="col-2 pt-4 ms-5">
                <h2 class="text-white pb-3">Contact Us</h2>
                <div class="row">
                    <a href="" class="text-white mb-1" style="text-decoration: none"><span class="iconify "
                            data-icon="carbon:location-filled" style="color: #fdcf73; " data-width="20"></span>
                        {{ $account['country'] }}</a>
                    <a href="" class="text-white mb-1" style="text-decoration: none"><span class="iconify "
                            data-icon="material-symbols:mail" style="color: #fdcf73; " data-width="20"></span>
                        {{ $account['email'] }}</a>

                </div>
            </div>
        </div>


    </div>

</footer>
