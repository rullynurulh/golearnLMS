@extends('layouts.course.main-course')
@section('container')
    <section class="margin-top " >
        <div class="nav-course">
            <div class="row d-flex justify-content-between px-3 py-2">
                <div class="col-4 d-flex align-items-center">
                    <div class="row d-flex align-items-center">
                        <div class="col-1 mx-3">
                            <span class="iconify" data-icon="icon-park-solid:back" data-width="40"></span>
                        </div>
                        <div class="col d-flex align-items-center ms-3">
                            <h4 style="margin-bottom: 0">Figma Tutorial</h4>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="row d-flex justify-content-end">
                        <div class="col-2 me-3">
                            <a href="" class="btn btn-button" style="min-width: 100px">Previous</a>
                        </div>
                        <div class="col-2">
                            <a href="" class="btn btn-button" style="min-width: 100px">Next</a>
                        </div>
                        <div class="col-3 d-flex justify-content-center align-items-center">
                            <div class="circular-progress" data-inner-circle-color="white" data-percentage="80" data-progress-color="#2F70AF" data-bg-color="white">
                                <div class="inner-circle"></div>
                                <p class="percentage">0%</p>
                              </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="sidenav">
            <div class="content">
                <div class="row p-4">  
                    <section class="section-curriculum sections">
                        <article>
                            <div class="mb-2">
                                <button type="button" class="collapsible ">
                                    <label class="mains">
                                        <input type="checkbox">
                                        <span class="geekmark"></span>
                                    </label>
                                    Chapter 1
                                    </button>
                                <div class="content-collapse">
                                    <ul class="list-lesson">
                                        <li class= "detail-chapter mb-2">
                                            <a class="d-flex align-items-center chapter-info" href="/course">
                                                <label class="mains">
                                                    <input type="checkbox" checked="checked" > 
                                                    <span class="geekmark"></span>
                                                </label>Lesson 1 
                                            </a>
                                        </li>
                                        <li class="detail-chapter mb-2">
                                            <a class="d-flex align-items-center chapter-info" href="/course">
                                                <label class="mains">
                                                    <input type="checkbox"> 
                                                    <span class="geekmark"></span>
                                                </label>Lesson 2
                                            </a>
                                        </li>

                                        <li class="detail-chapter mb-2">
                                            <a class="d-flex align-items-center chapter-info" href="/course">
                                                <label class="mains">
                                                    <input type="checkbox">
                                                    <span class="geekmark"></span>
                                                    
                                                </label> Lesson 3
                                            </a>
                                        </li>
                                        <li class="detail-chapter mb-2 active-chapter">
                                            <a class="d-flex align-items-center chapter-info" href="/course/quiz">
                                                <label class="mains">
                                                    <input type="checkbox" >
                                                    <span class="geekmark"></span>
                                                </label> Quiz 1
                                                
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div class="mb-2">
                                <button type="button" class="collapsible ">
                                    <label class="mains">
                                        <input type="checkbox">
                                        <span class="geekmark"></span>
                                    </label>
                                    Chapter 2
                                </button>
                                <div class="content-collapse">
                                    <ul class="list-lesson">
                                        <li class= "d-flex align-items-center detail-chapter mb-2 active-chapter">
                                            <a class="chapter-info" href="/course">
                                                <label class="mains">
                                                    <input type="checkbox" checked="checked" > 
                                                    <span class="geekmark"></span>
                                                </label>Lesson 1 
                                            </a>
                                        </li>
                                        <li class="detail-chapter mb-2">
                                            <a class="d-flex align-items-center chapter-info" href="/course">
                                                <label class="mains">
                                                    <input type="checkbox"> 
                                                    <span class="geekmark"></span>
                                                </label>Lesson 2
                                            </a>
                                        </li>

                                        <li class="detail-chapter mb-2">
                                            <a class="d-flex align-items-center chapter-info" href="/course">
                                                <label class="mains">
                                                    <input type="checkbox">
                                                    <span class="geekmark"></span>
                                                    
                                                </label> Lesson 3
                                            </a>
                                        </li>
                                        <li class="detail-chapter mb-2">
                                            <a class="d-flex align-items-center chapter-info" href="/course/quiz">
                                                <label class="mains">
                                                    <input type="checkbox" >
                                                    <span class="geekmark"></span>
                                                </label> Quiz 1
                                                
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="mb-2">
                                <button type="button" class="collapsible ">
                                    <label class="mains">
                                        <input type="checkbox">
                                        <span class="geekmark"></span>
                                    </label>Chapter 3</button>
                                    <div class="content-collapse">
                                        <ul class="list-lesson">
                                            <li class= "d-flex align-items-center detail-chapter mb-2 active-chapter">
                                                <a class="chapter-info" href="/course">
                                                    <label class="mains">
                                                        <input type="checkbox" checked="checked" > 
                                                        <span class="geekmark"></span>
                                                    </label>Lesson 1 
                                                </a>
                                            </li>
                                            <li class="detail-chapter mb-2">
                                                <a class="d-flex align-items-center chapter-info" href="/course">
                                                    <label class="mains">
                                                        <input type="checkbox"> 
                                                        <span class="geekmark"></span>
                                                    </label>Lesson 2
                                                </a>
                                            </li>
    
                                            <li class="detail-chapter mb-2">
                                                <a class="d-flex align-items-center chapter-info" href="/course">
                                                    <label class="mains">
                                                        <input type="checkbox">
                                                        <span class="geekmark"></span>
                                                        
                                                    </label> Lesson 3
                                                </a>
                                            </li>
                                            <li class="detail-chapter mb-2">
                                                <a class="d-flex align-items-center chapter-info" href="/course/quiz">
                                                    <label class="mains">
                                                        <input type="checkbox" >
                                                        <span class="geekmark"></span>
                                                    </label> Quiz 1
                                                    
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                            </div>
                        </article>
                    </section>
                </div>
            </div>
          </div>
        <div class="margin-left">
            <div class="bg-white" style="padding-bottom: 9rem; padding-left:20rem;">
                <div class="content p-5">
                    <div class="box-recommend min-height-recommend p-2" style="margin-top: 3rem">
                        <div class="card card-quiz text-left m-5">
                            <div class="row p-4">
                                <div class="col-10 d-flex align-items-center">
                                    <div class="row ">
                                        <h3>Quiz Title</h3>
                                        <p class="d-flex align-items-center">min. persentage 80%</p>
                                    </div>
                                   
                                </div>
                                
                                <div class="col-2 ">
                                    <div class="row d-flex align-items-center justify-content-end">

                                        <span class="d-flex justify-content-end" style="font-weight: 600">120 min</span>
                                        <div class="div d-flex align-items-center justify-content-end">
                                            <a href="/course/quiz/start"class="btn btn-certificate-view">Start</a>

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
