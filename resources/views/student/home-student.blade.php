@extends('layouts.student.main-student')
@section('container')
    <section class="margin-top " >
        <div class="sidenav">
            <div class="content">
                <div class="row p-4">  
                    <a href="/student" class="btn mb-3 btn-student-active">Dashboard</a>
                    <a href="/student/mycourse" class="btn mb-3 btn-student">My Course</a>
                    <a href="/student/myprofile" class="btn mb-3 btn-student">My Profile</a>
                    <a href="/student/accomplishment" class="btn mb-3 btn-student">Accomplishment</a>
                    <a href="/student/setting" class="btn mb-3 btn-student">Account Setting</a>
                </div>
            </div>
          </div>
        <div class="margin-left">
            <div class="bg-white" style="padding-bottom: 9rem">
                <div class="content p-5">
                    <h5 class="mb-3">Welcome To Golearn! App | <span>USERNAME</span></h5>
                    <div class="box p-3 mb-3">
                        <h4>Continue Learning</h4>
                        <div class="course-continue mb-4">
                            <div class="row">
                                <img src="images/course.jpg" style="width: 300px; border-radius: 20px ">
                                <div class="col p-3 me-5">
                                    <div class="course-title">Figma Tutorial</div>
                                    <div class="d-flex justify-content-end me-2">80%</div>
                                    <div class="progress">
                                        <div class="progress-bar" style="width: 80%" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                      </div>
                                    <div class="row mt-3 d-flex justify-content-between">
                                        <div class="col">
                                            <div class="course-title">Next Task : <span style="color: var(--primary3)">Lesson 5</span></div>
                                        </div>
                                        <a href="/" class="col d-flex justify-content-end" style="text-decoration: none">
                                            <div class="course-title">Continue <span class="iconify" data-icon="fluent:arrow-right-12-filled" data-width="15"></span></div>
                                        </a>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div class="course-continue mb-4">
                            <div class="row">
                                <img src="images/course.jpg" style="width: 300px; border-radius: 20px ">
                                <div class="col p-3 me-5">
                                    <div class="course-title">Figma Tutorial</div>
                                    <div class="d-flex justify-content-end me-2">80%</div>
                                    <div class="progress">
                                        <div class="progress-bar" style="width: 80%" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="row mt-3 d-flex justify-content-between">
                                        <div class="col">
                                            <div class="course-title">Next Task : <span style="color: var(--primary3)">Lesson 3</span></div>
                                        </div>
                                        <a href="/" class="col d-flex justify-content-end" style="text-decoration: none">
                                            <div class="course-title">Continue <span class="iconify" data-icon="fluent:arrow-right-12-filled" data-width="15"></span></div>
                                        </a>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="box-recommend p-4">
                        <h4>Recommended For You</h4>
                        <div class="row">
                            <div class="col-3 mb-2">
                                <a href="/course-overview" class="card text-left" style="text-decoration: none; color: black;">
                                    <img class="card-img-top card-img-top-1" src="images/course.jpg" alt="">
                                    <div class="card-body p-3">
                                        <div class="pb-3">
                                            <span class="iconify" data-icon="material-symbols:star" style="color: #fdcf73; margin-top: -5px;" data-width="20"></span>
                                            <span class="iconify" data-icon="material-symbols:star" style="color: #fdcf73; margin-left: -5px;margin-top: -5px;" data-width="20"></span>
                                            <span class="iconify" data-icon="material-symbols:star" style="color: #fdcf73; margin-left: -5px;margin-top: -5px;" data-width="20"></span>
                                            <span class="iconify" data-icon="material-symbols:star-outline" style="color: #fdcf73; margin-left: -5px;margin-top: -5px;" data-width="20"></span>
                                            <span class="iconify" data-icon="material-symbols:star-outline" style="color: #fdcf73; margin-left: -5px;margin-top: -5px;" data-width="20"></span>
                                            <span>(20 Review)</span>
                                        </div>
                                     
                                      <h4 class="card-title">Figma Tutorial</h4>
                                      <hr class="mb-3">
                                      <div class="row">
                                        <div class="col">
                                            <div class="row mb-5">
                                                <div class="col-2">
                                                    <img src="images/guru1.jpg" style="width: 50px; border-radius: 50%">
                                                </div>
                                                <div class="col d-flex justify-content-between align-items-center" style="padding-left: 1.5rem">
                                                    <span class=" text-left">Teacher Name</span>
                                                    <div class="row pe-2">
                                                        <div class="col">
                                                            <span class="iconify" data-icon="mdi:user" style="color: #d9d9d9;" data-width="24"></span>0
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            
                                        </div>
                                      </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-3 mb-2">
                                <a href="/course-overview" class="card text-left" style="text-decoration: none; color: black;">
                                    <img class="card-img-top card-img-top-1" src="images/course.jpg" alt="">
                                    <div class="card-body p-3">
                                        <div class="pb-3">
                                            <span class="iconify" data-icon="material-symbols:star" style="color: #fdcf73; margin-top: -5px;" data-width="20"></span>
                                            <span class="iconify" data-icon="material-symbols:star" style="color: #fdcf73; margin-left: -5px;margin-top: -5px;" data-width="20"></span>
                                            <span class="iconify" data-icon="material-symbols:star" style="color: #fdcf73; margin-left: -5px;margin-top: -5px;" data-width="20"></span>
                                            <span class="iconify" data-icon="material-symbols:star-outline" style="color: #fdcf73; margin-left: -5px;margin-top: -5px;" data-width="20"></span>
                                            <span class="iconify" data-icon="material-symbols:star-outline" style="color: #fdcf73; margin-left: -5px;margin-top: -5px;" data-width="20"></span>
                                            <span>(20 Review)</span>
                                        </div>
                                     
                                      <h4 class="card-title">Figma Tutorial</h4>
                                      <hr class="mb-3">
                                      <div class="row">
                                        <div class="col">
                                            <div class="row mb-5">
                                                <div class="col-2">
                                                    <img src="images/guru1.jpg" style="width: 50px; border-radius: 50%">
                                                </div>
                                                <div class="col d-flex justify-content-between align-items-center" style="padding-left: 1.5rem">
                                                    <span class=" text-left">Teacher Name</span>
                                                    <div class="row pe-2">
                                                        <div class="col">
                                                            <span class="iconify" data-icon="mdi:user" style="color: #d9d9d9;" data-width="24"></span>0
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            
                                        </div>
                                      </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-3 mb-2">
                                <a href="/course-overview" class="card text-left" style="text-decoration: none; color: black;">
                                    <img class="card-img-top card-img-top-1" src="images/course.jpg" alt="">
                                    <div class="card-body p-3">
                                        <div class="pb-3">
                                            <span class="iconify" data-icon="material-symbols:star" style="color: #fdcf73; margin-top: -5px;" data-width="20"></span>
                                            <span class="iconify" data-icon="material-symbols:star" style="color: #fdcf73; margin-left: -5px;margin-top: -5px;" data-width="20"></span>
                                            <span class="iconify" data-icon="material-symbols:star" style="color: #fdcf73; margin-left: -5px;margin-top: -5px;" data-width="20"></span>
                                            <span class="iconify" data-icon="material-symbols:star-outline" style="color: #fdcf73; margin-left: -5px;margin-top: -5px;" data-width="20"></span>
                                            <span class="iconify" data-icon="material-symbols:star-outline" style="color: #fdcf73; margin-left: -5px;margin-top: -5px;" data-width="20"></span>
                                            <span>(20 Review)</span>
                                        </div>
                                     
                                      <h4 class="card-title">Figma Tutorial</h4>
                                      <hr class="mb-3">
                                      <div class="row">
                                        <div class="col">
                                            <div class="row mb-5">
                                                <div class="col-2">
                                                    <img src="images/guru1.jpg" style="width: 50px; border-radius: 50%">
                                                </div>
                                                <div class="col d-flex justify-content-between align-items-center" style="padding-left: 1.5rem">
                                                    <span class=" text-left">Teacher Name</span>
                                                    <div class="row pe-2">
                                                        <div class="col">
                                                            <span class="iconify" data-icon="mdi:user" style="color: #d9d9d9;" data-width="24"></span>0
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            
                                        </div>
                                      </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-3 mb-2">
                                <a href="/course-overview" class="card text-left" style="text-decoration: none; color: black;">
                                    <img class="card-img-top card-img-top-1" src="images/course.jpg" alt="">
                                    <div class="card-body p-3">
                                        <div class="pb-3">
                                            <span class="iconify" data-icon="material-symbols:star" style="color: #fdcf73; margin-top: -5px;" data-width="20"></span>
                                            <span class="iconify" data-icon="material-symbols:star" style="color: #fdcf73; margin-left: -5px;margin-top: -5px;" data-width="20"></span>
                                            <span class="iconify" data-icon="material-symbols:star" style="color: #fdcf73; margin-left: -5px;margin-top: -5px;" data-width="20"></span>
                                            <span class="iconify" data-icon="material-symbols:star-outline" style="color: #fdcf73; margin-left: -5px;margin-top: -5px;" data-width="20"></span>
                                            <span class="iconify" data-icon="material-symbols:star-outline" style="color: #fdcf73; margin-left: -5px;margin-top: -5px;" data-width="20"></span>
                                            <span>(20 Review)</span>
                                        </div>
                                     
                                      <h4 class="card-title">Figma Tutorial</h4>
                                      <hr class="mb-3">
                                      <div class="row">
                                        <div class="col">
                                            <div class="row mb-5">
                                                <div class="col-2">
                                                    <img src="images/guru1.jpg" style="width: 50px; border-radius: 50%">
                                                </div>
                                                <div class="col d-flex justify-content-between align-items-center" style="padding-left: 1.5rem">
                                                    <span class=" text-left">Teacher Name</span>
                                                    <div class="row pe-2">
                                                        <div class="col">
                                                            <span class="iconify" data-icon="mdi:user" style="color: #d9d9d9;" data-width="24"></span>0
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            
                                        </div>
                                      </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    </section>
    
@endsection
