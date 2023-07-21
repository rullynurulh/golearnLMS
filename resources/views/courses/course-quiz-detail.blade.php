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
                                        <li class= " detail-chapter mb-2">
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
                    <div class="card card-quiz text-left" style="margin-top: 3rem">
                        <div class="row ">
                            <div class="col-4 d-flex align-items-center">
                                <div class="row p-3">
                                    <h5>1:27 min</h5>
                                    <h3>Quiz Title</h3>
                                    
                                </div>
                                
                            </div>
                            <div class="col-4 d-flex align-items-center justify-content-center">
                                <div class="row p-3">
                                    Hint
                                </div>
                                
                            </div>
                            
                            <div class="col-4 d-flex justify-content-end align-items-center pe-5">
                                <div class="row">
                                    <div class="col">
                                        <a href="/"class="btn btn-paging-quiz-view">Previous</a>

                                    </div>

                                    
                                    <div class="col">
                                        <a href="/"class="btn btn-paging-quiz-view">Next</a>

                                    </div>
                                    <div class="col">
                                        <a href="/course/quiz/result"class="btn btn-paging-quiz-view">Submit</a>

                                    </div>

                                </div>

                            </div>
                            
                        </div>

                    </div>
                    <div class="box-quiz min-height-quiz">
                        <div class="row">
                            <div class="col-10 p-5">
                                <span style="font-size: 20px; font-weight: 500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit facere animi accusantium a? Quaerat quod eum ab accusamus consectetur, sint soluta suscipit fuga accusantium et nobis molestias velit nostrum nisi?</span>
                                <div class="col">
                                    <div class="option d-flex align-items-center my-3">
                                        <input type="radio" id="html" name="fav_language" value="HTML">
                                        <span class="ms-2" style="font-size: 19px"> HTML</span>
                                    </div>
                                    
                                    <div class="option d-flex align-items-center my-3">
                                        <input type="radio" id="html" name="fav_language" value="HTML">
                                        <span class="ms-2" style="font-size: 19px"> HTML</span>
                                    </div>
                                    <div class="option d-flex align-items-center my-3">
                                        <input type="radio" id="html" name="fav_language" value="HTML">
                                        <span class="ms-2" style="font-size: 19px"> HTML</span>
                                    </div>
                                    <div class="option d-flex align-items-center my-3">
                                        <input type="radio" id="html" name="fav_language" value="HTML">
                                        <span class="ms-2" style="font-size: 19px"> HTML</span>
                                    </div>
                                </div>
                                
                            </div>

                            <div class="col-2">
                                <div class="bg-question box-question sidequestion">
                                    <div class="p-4">
                                      <span class="text-white" style="font-size: 19px;">Number of Question</span>  
                                    </div>
                                    <div class="row mx-3">
                                        <div class="col-4 mb-3">
                                            <button class="btn btn-pagination-quiz border-radius  btn-pagination-quiz-active" style="width: 44px; font-size: 20px; font-weight:500">1</button>
                                        </div>
                                        <div class="col-4 mb-3">
                                            <button class="btn btn-pagination-quiz border-radius " style="width: 44px; font-size: 20px; font-weight:500">2</button>
                                        </div>
                                        <div class="col-4 mb-3">
                                            <button class="btn btn-pagination-quiz border-radius " style="width: 44px; font-size: 20px; font-weight:500">3</button>
                                        </div>
                                        <div class="col-4 mb-3">
                                            <button class="btn btn-pagination-quiz border-radius " style="width: 44px; font-size: 20px; font-weight:500">4</button>
                                        </div>
                                        <div class="col-4 mb-3">
                                            <button class="btn btn-pagination-quiz border-radius " style="width: 44px; font-size: 20px; font-weight:500">5</button>
                                        </div>
                                        <div class="col-4 mb-3">
                                            <button class="btn btn-pagination-quiz border-radius " style="width: 44px; font-size: 20px; font-weight:500">6</button>
                                        </div>
                                        <div class="col-4 mb-3">
                                            <button class="btn btn-pagination-quiz border-radius " style="width: 44px; font-size: 20px; font-weight:500">7</button>
                                        </div>
                                        <div class="col-4 mb-3">
                                            <button class="btn btn-pagination-quiz border-radius " style="width: 44px; font-size: 20px; font-weight:500">8</button>
                                        </div>
                                        <div class="col-4 mb-3">
                                            <button class="btn btn-pagination-quiz border-radius " style="width: 44px; font-size: 20px; font-weight:500">9</button>
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
    <script>
        var coll = document.getElementsByClassName("collapsible");
        var i;

        for (i = 0; i < coll.length; i++) {

            coll[i].addEventListener("click", function() {
                
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.maxHeight){
                content.style.maxHeight = null;
                } else {
                content.style.maxHeight = 0 + "px";
                } 
            });
 
        }


        
    </script>
@endsection
