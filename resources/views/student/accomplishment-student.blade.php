@extends('layouts.student.main-student')
@section('container')
    <section class="margin-top " >
        <div class="sidenav">
            <div class="content">
                <div class="row p-4">  
                    <a href="/student" class="btn mb-3 btn-student">Dashboard</a>
                    <a href="/student/mycourse" class="btn mb-3 btn-student">My Course</a>
                    <a href="/student/myprofile" class="btn mb-3 btn-student">My Profile</a>
                    <a href="/student/accomplishment" class="btn mb-3 btn-student-active">Accomplishment</a>
                    <a href="/student/setting" class="btn mb-3 btn-student">Account Setting</a>
                </div>
            </div>
          </div>
        <div class="margin-left">
            <div class="bg-white" style="padding-bottom: 9rem">
                <div class="content p-5">
                    <div class="box-recommend p-4 mb-4">
                        <h3 style="margin-bottom: 0">Accomplishment</h3>
                    </div>
                    <h2 class="d-flex justify-content-center mb-4">My Achievements</h2>
                    <div class="box-recommend min-height-recommend">
                        <div class="row m-3">
                            <div class="col">
                                <div class="pt-4 pb-4">

                                    <div class="card card-accomplishment text-left mb-3">
                                        <div class="row">
                                            <div class="col-3">
                                                <img class="card-img-left card-img-top-3" src="{{ URL::asset('images/course.jpg') }}" alt="">
                                            </div>
                                            <div class="col-6 d-flex align-items-center">
                                                <div class="row">

                                                    <h3>Figma Tutorial</h3>
                                                    <p>Great Work! You have passed all the requirements and can view your achievements now.</p>
                                                </div>
                                                <div style="border-left:2px solid white;height:100px"></div>
                                            </div>
                                            
                                            <div class="col-3 d-flex align-items-center justify-content-center">
                                                
                                                <button class="btn btn-certificate-view">View Certificate</button>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div class="card card-accomplishment text-left mb-3">
                                        <div class="row">
                                            <div class="col-3">
                                                <img class="card-img-left card-img-top-3" src="{{ URL::asset('images/course.jpg') }}" alt="">
                                            </div>
                                            <div class="col-6 d-flex align-items-center">
                                                <div class="row">

                                                    <h3>Figma Tutorial</h3>
                                                    <p>Great Work! You have passed all the requirements and can view your achievements now.</p>
                                                </div>
                                                <div style="border-left:2px solid white;height:100px"></div>
                                            </div>
                                            
                                            <div class="col-3 d-flex align-items-center justify-content-center">
                                                
                                                <button class="btn btn-certificate-view">View Certificate</button>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div class="card card-accomplishment text-left mb-3">
                                        <div class="row">
                                            <div class="col-3">
                                                <img class="card-img-left card-img-top-3" src="{{ URL::asset('images/course.jpg') }}" alt="">
                                            </div>
                                            <div class="col-6 d-flex align-items-center">
                                                <div class="row">

                                                    <h3>Figma Tutorial</h3>
                                                    <p>Great Work! You have passed all the requirements and can view your achievements now.</p>
                                                </div>
                                                <div style="border-left:2px solid white;height:100px"></div>
                                            </div>
                                            
                                            <div class="col-3 d-flex align-items-center justify-content-center">
                                                
                                                <button class="btn btn-certificate-view">View Certificate</button>
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
