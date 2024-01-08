@extends('layouts.main')
@section('container')
    <section class="margin-top">
        <div class="bg-image-jumbotron"
            style="padding-bottom: 9rem; 
            background: linear-gradient(0deg, rgba(65, 89, 137, 0.5), rgba(65, 89, 137, 0.5)), url('{{ $home['image'] }}');
            background-position: center;
            background-repeat: no-repeat;
            background-size:cover;">
            <div class="content p-5">
                <div class=" padding-center mb-5 pt-5">
                    <div class="row d-flex justify-content-between p-5">

                        <div class="col-7 px-5 mb-5" data-aos="fade-right">

                            <p class="text-white" style="font-size: 50px;">{{ $home['banner_title'] }}</p>

                            <p class="text-white"
                                style="text-align: justify; line-height: 1.1em; font-size:37px; width: 700px">
                                {{ $home['banner_text'] }}</p>
                        </div>

                        <div class="row">
                            <div class="col px-5 d-flex justify-content-start">
                                <a href="/about-us" class="btn btn-button me-5 p-4" style="font-size: 35px">Read More</a>

                                <a href="/signin" class="btn btn-button p-4" style="font-size: 35px">Get Started</a>

                            </div>

                        </div>


                    </div>
                </div>
            </div>

        </div>
        <div class="container">
            <div class="row" style="margin-top: -4rem;">
                <div class="pop-up-ads">
                    <div class="row d-flex justify-content-between" style="padding: 2rem;">
                        <div class="col-3 d-flex align-items-center" style="margin-bottom: 8rem">
                            <h1 class="text-white" style="margin: 0px;">{{ $home['category_list_title'] }}
                        </div>
                        <div class="col-6 d-flex align-items-center swiper-container">
                            <div class="swiper " style="margin-right: 0px">
                                <!-- Additional required wrapper -->
                                <div class="swiper-wrapper">
                                    <!-- Slides -->
                                    @foreach ($category as $c)
                                        <div class="swiper-slide">
                                            <div class="card text-left" style="background: #2F70AF">
                                                <div class="card-body">
                                                </div>
                                                <img class="card-img-top" src="{{ $c['image'] }}" alt="">
                                                <div class="card-body">
                                                    <h4 class="card-title" style="color: white">{{ $c['name'] }}</h4>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    @endforeach
                                    
                                </div>
                                <!-- If we need pagination -->
                                <div class="swiper-button-prev"></div>
                                <div class="swiper-button-next"></div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        @if ($home['about_us_section_in_home_page'] == 'yes')
            <div class="content row pt-5">
                <div class="col-4 ps-5" data-aos="fade-right">
                    <h2>About Us</h2>
                    <hr style="width: 5.5rem; height: 0.15rem; color: #EACB27">
                    <h1 class="mb-3">{{ $home['about_us_section_title'] }}</h1>
                    <a href="/about-us" class="btn btn-button p-3" style="font-size: 25px">See More</a>
                </div>
                <div class="col-8">
                    <div data-aos="fade-left">
                        <h4 style="font-size: 25px; font-weight: 400; text-align: justify;">
                            @foreach ($aboutus['description'] as $a)
                                {{ $a }}
                                <br><br>
                            @endforeach
                        </h4>
                    </div>

                    <img class="image-home-abt"src="images/bg-abt.png" alt="abt">
                </div>
            </div>
        @endif
        <div class="bg-home-under">
            <div class="content ">
                <div class="p-5">
                    <div class="row d-flex ">
                        <div class="col" data-aos="fade-right" data-aos-duration="500" data-aos-delay="500">
                            <h2>Our Course</h2>
                            <hr class="mb-5"style="width: 5.5rem; height: 0.15rem; color: #EACB27">
                            <div class="d-flex justify-content-between">
                                <h1>{{ $home['course_section_title'] }}</h1>
                                <div class="row">
                                    <div class="col"><span class="dot" style="background-color: #707F8E"></span>
                                    </div>
                                    <div class="col"><span class="dot" style="background-color: #FDCF73"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="containter mx-3">
                                <div class="swiper swiper2 mt-5 px-3" style="margin-right: 0px">
                                    <!-- Additional required wrapper -->
                                    <div class="swiper-wrapper">
                                        <!-- Slides -->
                                        @foreach ($courses as $course)
                                            <div class="swiper-slide">
                                                <div class="card text-left"
                                                    style="text-decoration: none; color: black;">
                                                    @if (!is_null($course['image']))
                                                        <img class="card-img-top card-img-top-1" src="/{{ $course['image'] }}"
                                                            alt="">
                                                    @else
                                                        <img class="card-img-top card-img-top-1" src="images/placeholder.png" alt="">
                                                    @endif

                                                    <div class="card-body p-3">
                                                        <div class="pb-3">
                                                            <span class="iconify" data-icon="material-symbols:star"
                                                                style="color: #fdcf73; margin-top: -5px;" data-width="20"></span>
                                                            <span class="iconify" data-icon="material-symbols:star"
                                                                style="color: #fdcf73; margin-left: -5px;margin-top: -5px;"
                                                                data-width="20"></span>
                                                            <span class="iconify" data-icon="material-symbols:star"
                                                                style="color: #fdcf73; margin-left: -5px;margin-top: -5px;"
                                                                data-width="20"></span>
                                                            <span class="iconify" data-icon="material-symbols:star-outline"
                                                                style="color: #fdcf73; margin-left: -5px;margin-top: -5px;"
                                                                data-width="20"></span>
                                                            <span class="iconify" data-icon="material-symbols:star-outline"
                                                                style="color: #fdcf73; margin-left: -5px;margin-top: -5px;"
                                                                data-width="20"></span>
                                                            <span>(20 Review)</span>
                                                        </div>

                                                        <h4 class="card-title">{{ $course['name'] }}</h4>
                                                        <hr class="mb-3">
                                                        <div class="row">
                                                            <div class="col">
                                                                <div class="row mb-5 d-flex justify-content-between">
                                                                    <div class="col-2">
                                                                        @if (!is_null($course['instructor_image']))
                                                                            <img src="/{{ $course['instructor_image'] }}"
                                                                                style="width: 75px; border-radius: 50%">
                                                                        @else
                                                                            <img src="images/profile-picture/admin.jpg"
                                                                                style="width: 75px; border-radius: 50%">
                                                                        @endif
                                                                    </div>
                                                                    <div class="col-10 d-flex justify-content-between align-items-center"
                                                                        style="padding-left: 1.5rem">
                                                                        <span
                                                                            class=" text-center">{{ $course['instructor_name'] }}</span>
                                                                        <div class="row pe-2">
                                                                            <div class="col">
                                                                                <span class="iconify" data-icon="mdi:user"
                                                                                    style="color: #d9d9d9;" data-width="24"></span>
                                                                                <span class=" text-left">{{ $course['student_enrolled'] }}</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        @endforeach
                                    </div>

                                </div>

                                
                            </div>
                            <div class="row pt-4 d-flex align-items-center justify-content-center">
                                <a href="/courses" class="col pt-4 d-flex align-items-center justify-content-center"style="text-decoration: none; color: #2D3D75">View All Courses <span class="iconify" data-icon="mingcute:right-fill" data-width="25"></span></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="content my-5 ">
            <div class="row ms-5">
                <div class="col-6 " data-aos="fade-right">
                    <h2>Featured Teacher</h2>
                    <hr style="width: 5.5rem; height: 0.15rem; color: #EACB27">
                    <h1 class="mb-4">{{ $home['teacher_section_title'] }}</h1>
                    <div class="row">
                        <div class="col">
                            <a href="/signin" class="btn btn-button p-3 me-3" style="font-size: 25px">Career with Us</a>
                            <a href="/signin" class="btn btn-button p-3 " style="font-size: 25px">Become Teacher</a>
                        </div>
                    </div>


                </div>
                <div class="col-6">
                    <div class="px-5 container">
                        <div class="swiper swiper1 mt-5">
                            <!-- Additional required wrapper -->
                            <div class="swiper-wrapper">
                                <!-- Slides -->
                                @foreach ($teachers as $teacher)
                                    <div class="swiper-slide">
                                        <div class="card card-teacher ">
                                            @if (is_null($teacher['image']))
                                                <img class="card-img-top-2" src="images/profile-picture/admin.jpg" alt="">
                                            @else
                                                <img class="card-img-top-2" src="{{ $teacher['image'] }}"
                                                    alt="">
                                            @endif

                                        </div>
                                        <div class="box-teacher-name m-auto">
                                            <div class="col p-2">
                                                <h5 class="pt-2">{{ $teacher['name'] }}</h5>
                                            </div>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                            <div class="swiper-pagination swiper-pagination1"></div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
@endsection
