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
                    <div class="card card-quiz text-left" style="margin-top: 3rem">
                        <div class="row ">
                            <div class="col-4 d-flex align-items-center">
                                <div class="row p-5">
                                   
                                    <h3>Your Exam Score</h3>
                                    
                                </div>
                                
                            </div>
                            
                        </div>

                    </div>
                    <div class="box-quiz min-height-quiz">
                        <div class="row">
                            <div class="col p-5">
                                <h3 class="mb-4">Congratulations! You Have Completed This Quiz</h3>
                                <div class="row d-flex justify-content-start mb-2">
                                    <div class="col-3"><h5>Exam Score</h5></div>
                                    <div class="col-3"><h5>Duration (minute)</h5></div>
                                    <div class="col-3"><h5>Percentage</h5></div>
                                    <div class="col-3"><h5>Rating</h5></div>
                                </div>
                                <div class="row d-flex justify-content-start mb-3">
                                    <div class="col-3"><h5>3 Correct Answer <br>1 Wrong Answer</h5></div>
                                    <div class="col-3"><h5>2:30</h5></div>
                                    <div class="col-3"><h5>75%</h5></div>
                                    <div class="col-3"><h5 style="font-weight: 900">Passed</h5></div>
                                </div>
                                
                                <a href="/course" class="btn btn-button">Next Lesson</a>
                            </div>
                        
                        </div>
                    </div>
                    <div class="box-quiz min-height-quiz">
                        <div class="row">
                            <div class="col p-5">
                                <h3 class="mb-4">Congratulations! You Have Completed This Quiz</h3>
                                <div class="row d-flex justify-content-start mb-2">
                                    <div class="col-3"><h5>Exam Score</h5></div>
                                    <div class="col-3"><h5>Duration (minute)</h5></div>
                                    <div class="col-3"><h5>Percentage</h5></div>
                                    <div class="col-3"><h5>Rating</h5></div>
                                </div>
                                <div class="row d-flex justify-content-start mb-3">
                                    <div class="col-3"><h5>1 Correct Answer <br>3 Wrong Answer</h5></div>
                                    <div class="col-3"><h5>2:30</h5></div>
                                    <div class="col-3"><h5>25%</h5></div>
                                    <div class="col-3"><h5 style="font-weight: 900; color:#D83A3A">Failed</h5></div>
                                </div>
                                
                                <div class="col-9">
                                    <div class="row">
                                    <div class="col-2"><a href="/course" class="btn btn-button">Try Again</a></div>
                                    <div class="col-2"><a href="/course" class="btn btn-button">Next Lesson</a></div>
                                    
                                    
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
