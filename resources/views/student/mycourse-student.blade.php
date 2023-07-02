@extends('layouts.student.main-student')
@section('container')
    <section class="margin-top " >
        <div class="sidenav">
            <div class="content">
                <div class="row p-4">  
                    <a href="/student" class="btn mb-3 btn-student">Dashboard</a>
                    <a href="/student/mycourse" class="btn mb-3 btn-student-active">My Course</a>
                    <a href="/student/myprofile" class="btn mb-3 btn-student">My Profile</a>
                    <a href="/student/accomplishment" class="btn mb-3 btn-student">Accomplishment</a>
                    <a href="/student/setting" class="btn mb-3 btn-student">Account Setting</a>
                </div>
            </div>
          </div>
        <div class="margin-left">
            <div class="bg-white" style="padding-bottom: 9rem">
                <div class="content p-5">
                    <div class="box-recommend p-4 mb-4">
                        <h3 style="margin-bottom: 0">My Courses</h3>
                    </div>
                    
                    <div class="box-recommend p-4">
                        <h4>Recommended For You</h4>
                        <div class="row">
                            <div class="col-3 mb-4">
                                <div class="card text-left" style="text-decoration: none; color: black;">
                                    <img class="card-img-top card-img-top-1" src="{{ URL::asset('images/course.jpg') }}" alt="">
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
                                      <div class="d-flex justify-content-end me-2">80%</div>
                                        <div class="progress">
                                            <div class="progress-bar" style="width: 80%" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                      <div class="row">
                                        <div class="col">
                                            <div class="row mb-3 mt-4">
                                                <div class="d-flex justify-content-center align-items-center">
                                                    <a href="/course"class="go-to-course">Go to Course <span class="iconify" data-icon="fluent:arrow-right-12-filled" data-width="30"></span></a>
                                                </div>
                                            </div>
                                            
                                            
                                        </div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 mb-4">
                                <div class="card text-left" style="text-decoration: none; color: black;">
                                    <img class="card-img-top card-img-top-1" src="{{ URL::asset('images/course.jpg') }}" alt="">
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
                                      <div class="d-flex justify-content-end me-2">80%</div>
                                        <div class="progress">
                                            <div class="progress-bar" style="width: 80%" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                      <div class="row">
                                        <div class="col">
                                            <div class="row mb-3 mt-4">
                                                <div class="d-flex justify-content-center align-items-center">
                                                    <a href="/course"class="go-to-course">Go to Course <span class="iconify" data-icon="fluent:arrow-right-12-filled" data-width="30"></span></a>
                                                </div>
                                            </div>
                                            
                                            
                                        </div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 mb-4">
                                <div class="card text-left" style="text-decoration: none; color: black;">
                                    <img class="card-img-top card-img-top-1" src="{{ URL::asset('images/course.jpg') }}" alt="">
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
                                      <div class="d-flex justify-content-end me-2">80%</div>
                                        <div class="progress">
                                            <div class="progress-bar" style="width: 80%" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                      <div class="row">
                                        <div class="col">
                                            <div class="row mb-3 mt-4">
                                                <div class="d-flex justify-content-center align-items-center">
                                                    <a href="/course"class="go-to-course">Go to Course <span class="iconify" data-icon="fluent:arrow-right-12-filled" data-width="30"></span></a>
                                                </div>
                                            </div>
                                            
                                            
                                        </div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 mb-4">
                                <div class="card text-left" style="text-decoration: none; color: black;">
                                    <img class="card-img-top card-img-top-1" src="{{ URL::asset('images/course.jpg') }}" alt="">
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
                                      <div class="d-flex justify-content-end me-2">80%</div>
                                        <div class="progress">
                                            <div class="progress-bar" style="width: 80%" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                      <div class="row">
                                        <div class="col">
                                            <div class="row mb-3 mt-4">
                                                <div class="d-flex justify-content-center align-items-center">
                                                    <a href="/course" class="go-to-course">Go to Course <span class="iconify" data-icon="fluent:arrow-right-12-filled" data-width="30"></span></a>
                                                </div>
                                            </div>
                                            
                                            
                                        </div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 mb-4">
                                <div class="card text-left" style="text-decoration: none; color: black;">
                                    <img class="card-img-top card-img-top-1" src="{{ URL::asset('images/course.jpg') }}" alt="">
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
                                      <div class="d-flex justify-content-end me-2">80%</div>
                                        <div class="progress">
                                            <div class="progress-bar" style="width: 80%" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                      <div class="row">
                                        <div class="col">
                                            <div class="row mb-3 mt-4">
                                                <div class="d-flex justify-content-center align-items-center">
                                                    <a href="/course"class="go-to-course">Go to Course <span class="iconify" data-icon="fluent:arrow-right-12-filled" data-width="30"></span></a>
                                                </div>
                                            </div>
                                            
                                            
                                        </div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 mb-4">
                                <div class="card text-left" style="text-decoration: none; color: black;">
                                    <img class="card-img-top card-img-top-1" src="{{ URL::asset('images/course.jpg') }}" alt="">
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
                                      <div class="d-flex justify-content-end me-2">80%</div>
                                        <div class="progress">
                                            <div class="progress-bar" style="width: 80%" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                      <div class="row">
                                        <div class="col">
                                            <div class="row mb-3 mt-4">
                                                <div class="d-flex justify-content-center align-items-center">
                                                    <a href="/course"class="go-to-course">Go to Course <span class="iconify" data-icon="fluent:arrow-right-12-filled" data-width="30"></span></a>
                                                </div>
                                            </div>
                                            
                                            
                                        </div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 mb-4">
                                <div class="card text-left" style="text-decoration: none; color: black;">
                                    <img class="card-img-top card-img-top-1" src="{{ URL::asset('images/course.jpg') }}" alt="">
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
                                      <div class="d-flex justify-content-end me-2">80%</div>
                                        <div class="progress">
                                            <div class="progress-bar" style="width: 80%" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                      <div class="row">
                                        <div class="col">
                                            <div class="row mb-3 mt-4">
                                                <div class="d-flex justify-content-center align-items-center">
                                                    <a href="/course"class="go-to-course">Go to Course <span class="iconify" data-icon="fluent:arrow-right-12-filled" data-width="30"></span></a>
                                                </div>
                                            </div>
                                            
                                            
                                        </div>
                                      </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 mb-4">
                                <div class="card text-left" style="text-decoration: none; color: black;">
                                    <img class="card-img-top card-img-top-1" src="{{ URL::asset('images/course.jpg') }}" alt="">
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
                                      <div class="d-flex justify-content-end me-2">80%</div>
                                        <div class="progress">
                                            <div class="progress-bar" style="width: 80%" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                      <div class="row">
                                        <div class="col">
                                            <div class="row mb-3 mt-4">
                                                <div class="d-flex justify-content-center align-items-center">
                                                    <a href="/course"class="go-to-course">Go to Course <span class="iconify" data-icon="fluent:arrow-right-12-filled" data-width="30"></span></a>
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

        </div>
    </section>
    
@endsection
