@extends('layouts.main')
@section('container')
    <section class="margin-top">
        <div class="bg-primary2">
            <div class="content p-3">

                <div class="row d-flex justify-content-between p-5">
                    <div class="col-7 px-5 mb-5" data-aos="fade-right">
                        <p class="text-white" style="font-size: 55px;">About Us </p>
                        <p class="text-white" style="text-align: justify; line-height: 1.1em; font-size:20px; width: 700px">
                            Home / <span style="color: var(--button)">About Us</span></p>
                    </div>
                </div>

            </div>

        </div>
        <div class="container">
            <div class="row">

            </div>
        </div>
        <div class="content row pt-5 ">
            <div class="col-4 ps-5" data-aos="fade-right">
                <div class="p-5">

                    <h2>About Us</h2>
                    <hr style="width: 5.5rem; height: 0.2rem; color: #EACB27">
                    <p class="mb-3" style="font-size: 55px; font-weight: 700">{{ $aboutus['banner_title'] }}</p>
                    @foreach ($aboutus['description'] as $description)
                        <h3 style="font-weight: 400; text-align: justify"> &emsp; {{ $description }} </h3>
                    @endforeach
                </div>

            </div>
            <div class="col-8 mt-5 pt-5">

                <img class="image-home-abt mt-2" style="border-radius: 15px" src="{{ $aboutus['image'] }}" alt="abt">
            </div>
        </div>
        <div class="bg-primary3 mt-3">

            <div class="content p-5 ">
                <div class="p-5">
                    <div class="row d-flex p-5">
                        <div class="col-4" data-aos="fade-right" data-aos-duration="400" data-aos-delay="500">
                            <p style="font-size: 100px; color: var(--primary2); margin-bottom: 0">01</p>
                            <div class="text-white ">

                                <h2 class="mb-3">Why Choose Us</h2>
                                <h5 style="text-align: justify">{{ $aboutus['why_choose_me_text'] }}</h5>
                            </div>

                        </div>
                        <div class="col-4" data-aos="fade-right" data-aos-duration="700" data-aos-delay="500">
                            <p style="font-size: 100px; color: var(--primary2); margin-bottom: 0">02</h5>
                            <div class="text-white ">

                                <h2 class="mb-3">Our Mission</h2>
                                <h5 style="text-align: justify">{{ $aboutus['our_mission_text'] }}</h5>
                            </div>

                        </div>

                        <div class="col-4" data-aos="fade-right" data-aos-duration="700" data-aos-delay="500">
                            <p style="font-size: 100px; color: var(--primary2); margin-bottom: 0">02</h5>
                            <div class="text-white ">

                                <h2 class="mb-3">Our vision</h2>
                                <h5 style="text-align: justify">{{ $aboutus['our_vision_text'] }}</h5>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    </section>
@endsection
