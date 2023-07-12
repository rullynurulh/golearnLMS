@extends('layouts.student.main-student')
@section('container')
    <section class="margin-top ">
        <div class="sidenav">
            <div class="content">
                <div class="row p-4">
                    <a href="/student" class="btn mb-3 btn-student">Dashboard</a>
                    <a href="/student/mycourse" class="btn mb-3 btn-student">My Course</a>
                    <a href="/student/myprofile" class="btn mb-3 btn-student-active">My Profile</a>
                    <a href="/student/accomplishment" class="btn mb-3 btn-student">Accomplishment</a>
                    <a href="/student/setting" class="btn mb-3 btn-student">Account Setting</a>
                </div>
            </div>
        </div>
        <div class="margin-left">
            <div class="bg-white" style="padding-bottom: 9rem">
                <div class="content p-5">
                    <div class="box-recommend p-4 mb-4">
                        <h3 style="margin-bottom: 0">My Profile</h3>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            <div class="row d-flex justify-content-center">
                                <img class="image-profile mb-3" src="{{ URL::asset('images/guru1.jpg') }}" alt="">
                                <div class="d-flex justify-content-center">
                                    <button class="btn btn-change">Change</button>
                                </div>

                            </div>

                        </div>

                        <div class="col-9">
                            <div class="box-recommend px-5 pt-4 pb-4">
                                <form action="#">
                                    <div class="form-group mb-2">
                                        <label class="form-label text-profile" style="font-size: 20px; margin-bottom:0"
                                            for="formname">My Name
                                        </label><input type="text" name="name" id="formname" value="none"
                                            class="form-control " />
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-group mb-2">
                                                <label class="form-label text-profile"
                                                    style="font-size: 20px; margin-bottom:0" for="formemail">My Email
                                                </label><input type="text" name="email" id="formemail" value="none"
                                                    class="form-control " />
                                            </div>

                                        </div>
                                        <div class="col">
                                            <div class="form-group mb-2">
                                                <label class="form-label text-profile"
                                                    style="font-size: 20px; margin-bottom:0" for="formgender">Gender
                                                </label><input type="text" name="gender" id="formemail" value="none"
                                                    class="form-control " />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group mb-2">
                                        <label class="form-label text-profile" style="font-size: 20px; margin-bottom:0"
                                            for="formgender">Password
                                        </label><input type="text" name="gender" id="formgender" value="none"
                                            class="form-control " />
                                    </div>
                                    <div class="row">
                                        <div class="col-4">
                                            <div class="form-group mb-2">
                                                <label class="form-label text-profile"
                                                    style="font-size: 20px; margin-bottom:0" for="formemail">My Email
                                                </label><input type="text" name="email" id="formemail" value="none"
                                                    class="form-control " />
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="form-group mb-2">
                                                <label class="form-label text-profile"
                                                    style="font-size: 20px; margin-bottom:0" for="formgender">Gender
                                                </label><input type="text" name="gender" id="formemail" value="none"
                                                    class="form-control " />
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="form-group mb-2">
                                                <label class="form-label text-profile"
                                                    style="font-size: 20px; margin-bottom:0" for="formgender">Gender
                                                </label><input type="text" name="gender" id="formemail" value="none"
                                                    class="form-control " />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-group mb-2">
                                                <label class="form-label text-profile"
                                                    style="font-size: 20px; margin-bottom:0" for="formemail">My Email
                                                </label><input type="text" name="email" id="formemail"
                                                    value="none" class="form-control " />
                                            </div>

                                        </div>
                                        <div class="col">
                                            <div class="form-group mb-2">
                                                <label class="form-label text-profile"
                                                    style="font-size: 20px; margin-bottom:0" for="formgender">Gender
                                                </label><input type="text" name="gender" id="formemail"
                                                    value="none" class="form-control " />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group mb-2">
                                        <label class="form-label text-profile" style="font-size: 20px; margin-bottom:0"
                                            for="formemail">My Email
                                        </label>
                                        <textarea type="text" name="email" id="formemail" value="none" style="resize:none; height:200px"
                                            class="form-control "> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ratione quibusdam similique odit pariatur recusandae cum aperiam reiciendis quas architecto fugit ipsum, vero, saepe voluptatibus autem. Qui fuga voluptatem corporis.</textarea>
                                    </div>
                                    <div class="d-flex justify-content-end">
                                        <button class="btn btn-button" type="submit">Save</button>
                                    </div>

                                </form>


                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        <script>
            (function($) {
                $('.pages li').click(function() {
                    $(this).addClass('active-button').siblings('li').removeClass('active-button');
                    $('.sections:nth-of-type(' + $(this).data('rel') + ')').stop().fadeIn(300, 'linear').siblings(
                        '.sections').stop().fadeOut(300, 'linear');
                });
            })(jQuery);
        </script>
        <script>
            var coll = document.getElementsByClassName("collapsible");
            var i;

            for (i = 0; i < coll.length; i++) {
                coll[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    var content = this.nextElementSibling;
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = content.scrollHeight + "px";
                    }
                });
            }
        </script>
    </section>
@endsection
