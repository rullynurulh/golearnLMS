@extends('layouts.main')
@section('container')
    <section class="margin-top">
        <div class="bg-image-jumbotron" style="padding-bottom: 9rem; background: linear-gradient(0deg, rgba(65, 89, 137, 0.5), rgba(65, 89, 137, 0.5)), url('images/bg-slider.jpg');">
            <div class="content p-5">
                <div class=" padding-center mb-5 pt-5">
                    <div class="row d-flex justify-content-between p-5">
                        <div class="col-7 px-5 mb-5" data-aos="fade-right">
                           <p class="text-white" style="font-size: 50px;">Lorem ipsum dolor </p>
                            <p class="text-white" style="text-align: justify; line-height: 1.1em; font-size:37px; width: 700px">Lorem ipsum dolor sit amet consectetur. Eros ullamcorper consectetur pretium egestas turpis. Mattis ornare vitae enim a sit accumsan.</p>
                        </div>
                        <div class="row">
                            <div class="col px-5 d-flex justify-content-start">
                                    <div class="btn btn-button me-5 p-4" style="font-size: 35px">Read More</div>
                                
                                    <div class="btn btn-button p-4" style="font-size: 35px">Get Started</div>
                                
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
                            <h1 class="text-white" style="margin: 0px;">Best Platform To learn Everything
                            </h1>
                        </div>
                        <div class="col-7 ">
                            
                            <div class="swiper" style="margin-right: 0px" >
                                <!-- Additional required wrapper -->
                                <div class="swiper-wrapper">
                                  <!-- Slides -->
                                  <div class="swiper-slide">
                                    <div class="card text-left">
                                        <img class="card-img-top" src="holder.js/100px180/" alt="">
                                        <div class="card-body">
                                          <h4 class="card-title">Title</h4>
                                          <p class="card-text">Body</p>
                                        </div>
                                      </div>
                                  </div>
                                  <div class="swiper-slide">
                                    <div class="card text-left">
                                        <img class="card-img-top" src="holder.js/100px180/" alt="">
                                        <div class="card-body">
                                          <h4 class="card-title">Title</h4>
                                          <p class="card-text">Body</p>
                                        </div>
                                      </div>
                                  </div>
                                  <div class="swiper-slide">
                                    <div class="card text-left">
                                        <img class="card-img-top" src="holder.js/100px180/" alt="">
                                        <div class="card-body">
                                          <h4 class="card-title">Title</h4>
                                          <p class="card-text">Body</p>
                                        </div>
                                      </div>
                                  </div>
                                  ...
                                </div>
                                <!-- If we need pagination -->
                               
                                
                            </div>
                              
                            <!-- If we need navigation buttons -->
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-button-next"></div>
                                
                            
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content row pt-5">
            <div class="col-4 ps-5" data-aos="fade-right">
                <h2 >About Us</h2>
                <hr style="width: 5.5rem; height: 0.15rem; color: #EACB27">
                <h1 class="mb-3">Welcome To Go Learn!</h1>
                <a href="/" class="btn btn-button p-3" style="font-size: 25px">See More</a>
                    
            </div>
            <div class="col-8" >
                <div data-aos="fade-left">
                    <h4 style="font-size: 25px; font-weight: 400; text-align: justify;"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis molestiae possimus eveniet. 
                        Voluptate earum, repudiandae laboriosam, corporis animi quas vel magnam nulla explicabo maxime porro
                        minima ipsum, aliquid delectus placeat.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A nihil odit quisquam distinctio voluptatibus doloribus, 
                        temporibus unde esse, perspiciatis nulla veritatis commodi necessitatibus laudantium, quod voluptatem adipisci 
                        aperiam est animi.
                        <br><br>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis molestiae possimus eveniet. 
                        Voluptate earum, repudiandae laboriosam, corporis animi quas vel magnam nulla explicabo maxime porro
                        minima ipsum, aliquid delectus placeat.</h4>

                </div>

                <img class="image-home-abt"src="images/bg-abt.png" alt="abt">
            </div>
        </div>
        <div class="bg-home-under">

            <div class="content ">
                <div class="p-5">
                    <div class="row d-flex ">
                        <div class="col" data-aos="fade-right" data-aos-duration="500"
                            data-aos-delay="500">
                            <h2 >Our Course</h2>
                            <hr class="mb-5"style="width: 5.5rem; height: 0.15rem; color: #EACB27">
                            <div class="d-flex justify-content-between">
                                <h1>Featured Courses</h1>
                                <div class="row">
                                    <div class="col"><span class="dot" style="background-color: #707F8E"></span></div>
                                    <div class="col"><span class="dot" style="background-color: #FDCF73"></span></div>
                                </div>
                            </div>
                            <div class="containter mx-3">
                              <div class="swiper mt-5 px-3" style="margin-right: 0px" >
                                <!-- Additional required wrapper -->
                                <div class="swiper-wrapper">
                                  <!-- Slides -->
                                  <div class="swiper-slide">
                                    <div class="card text-left">
                                        <img class="card-img-top card-img-top-1" src="images/course.jpg" alt="">
                                        <div class="card-body">
                                          <h4 class="card-title">Title</h4>
                                          <p class="card-text">Body</p>
                                        </div>
                                      </div>
                                  </div>
                                  <div class="swiper-slide">
                                    <div class="card text-left">
                                        <img class="card-img-top card-img-top-1" src="images/placeholder.png" alt="">
                                        <div class="card-body">
                                          <h4 class="card-title">Title</h4>
                                          <p class="card-text">Body</p>
                                        </div>
                                      </div>
                                  </div>
                                  <div class="swiper-slide">
                                    <div class="card text-left">
                                        <img class="card-img-top card-img-top-1" src="holder.js/100px180/" alt="">
                                        <div class="card-body">
                                          <h4 class="card-title">Title</h4>
                                          <p class="card-text">Body</p>
                                        </div>
                                    </div>
                                  </div>
                                  <div class="swiper-slide">
                                    <div class="card text-left">
                                        <img class="card-img-top card-img-top-1" src="holder.js/100px180/" alt="">
                                        <div class="card-body">
                                          <h4 class="card-title">Title</h4>
                                          <p class="card-text">Body</p>
                                        </div>
                                      </div>
                                  </div>
                                </div>
                              </div>  
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
        <div class="content my-5 ">
            <div class="row ms-5">
                <div class="col-6 " data-aos="fade-right">
                    <h2 >Featured Teacher</h2>
                    <hr style="width: 5.5rem; height: 0.15rem; color: #EACB27">
                    <h1 class="mb-4">Meet Our Teacher</h1>
                    <div class="row">
                        <div class="col">
                            <a href="/" class="btn btn-button p-3 me-3" style="font-size: 25px">Career with Us</a>
                            <a href="/" class="btn btn-button p-3 " style="font-size: 25px">Become Teacher</a>
                        </div>
                    </div>
                    
                        
                </div>
                <div class="col-6" >
                    <div class="px-5 container">
                        <div class="swiper swiper1 mt-5"  >
                          <!-- Additional required wrapper -->
                          <div class="swiper-wrapper">
                            <!-- Slides -->
                            <div class="swiper-slide">
                              <div class="card card-teacher ">
                                  <img class="card-img-top-2" src="images/guru1.jpg" alt="">
                                  
                                </div>
                                <div class="box-teacher-name m-auto">
                                    <div class="col p-2"><h5 class="pt-2">Prof. Jeon Wonwoo</h5>
                                </div>
                              </div>
                            </div>
                            <div class="swiper-slide">
                              <div class="card card-teacher ">
                                  <img class="card-img-top-2" src="images/guru2.jpg" alt="">
                                  
                                </div>
                                <div class="box-teacher-name m-auto">
                                    <div class="col p-2"><h5 class="pt-2">Prof. Jeon Wonwoo</h5></div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                              <div class="card  card-teacher ">
                                  <img class="card-img-top-2" src="images/guru3.jpg" alt="">
                                  
                                  <div class="box-teacher-name m-auto">
                                    <div class="col p-2"><h5 class="pt-2">Prof. 
                                        Choi Seungcheol</h5></div>
                                  </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                              <div class="card card-teacher">
                                  <img class="card-img-top-2" src="images/guru4.jpg" alt="">
                                  
                                </div>
                                <div class="box-teacher-name m-auto">
                                    <div class="col p-2"><h5 class="pt-2">Prof. Jeon Wonwoo</h5></div>
                                </div>
                            </div>
                          </div>   
                            <div class="swiper-pagination swiper-pagination1"></div>     
                        </div> 
                        
                      </div>
                </div>

            </div>
        </div>
    </section>
    
@endsection
