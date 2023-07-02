@extends('layouts.course.main-course')
@section('container')
    <section class="margin-top " >
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
                                        <li class= "detail-chapter mb-2 active-chapter">
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
                    <div class="box-recommend min-height-recommend">
                        <div class="container p-5 d-flex justify-content-center align-items-center">
                            <iframe width="1300px" height="600px" src="https://www.youtube.com/embed/-GQg25oP0S4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

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
