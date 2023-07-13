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
                                @if ($errors->has('image'))
                                    <span class="text-danger">{{ $errors->first('image') }}</span>
                                @endif
                                @if (is_null($student['image']))
                                    <img class="image-profile mb-3" src="{{ URL::asset('images/guru1.jpg') }}"
                                        alt="">
                                @else
                                    <img class="image-profile mb-3" src="{{ URL::asset($student['image']) }}"
                                        alt="">
                                @endif
                                <form action="{{ route('change_profile_picture') }}" method="post"
                                    enctype="multipart/form-data">
                                    @csrf
                                    <div id="changeimage" class="d-flex justify-content-center">
                                        <button onclick="changeImage()" class="btn btn-change">Change</button>
                                    </div>
                                </form>
                            </div>

                        </div>

                        <div class="col-9">
                            <div class="box-recommend px-5 pt-4 pb-4">
                                <form action="{{ route('update_profile') }}" method="post">
                                    @csrf
                                    <div class="form-group mb-2">
                                        <label class="form-label text-profile" style="font-size: 20px; margin-bottom:0"
                                            for="formname">My Name
                                        </label><input type="text" name="name" id="formname"
                                            value="{{ $student['name'] }}" class="form-control " />
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-group mb-2">
                                                <label class="form-label text-profile"
                                                    style="font-size: 20px; margin-bottom:0" for="formemail">My Email
                                                </label><input type="text" name="email" id="formemail"
                                                    value="{{ $student['email'] }}" class="form-control bg-light"
                                                    readonly />
                                            </div>

                                        </div>
                                        <div class="col">
                                            <div class="form-group mb-2">
                                                <label class="form-label text-profile"
                                                    style="font-size: 20px; margin-bottom:0" for="formgender">Gender
                                                </label>
                                                <select class="form-control form-select form-select"
                                                    aria-label=".form-select-sm example" name="gender">

                                                    @if (is_null($student['gender']))
                                                        <option>Open this select menu</option>
                                                    @endif
                                                    @if ($student['gender'] == 'laki-laki')
                                                        <option selected value="laki-laki">Laki-Laki</option>
                                                    @else
                                                        <option value="laki-laki">Laki-Laki</option>
                                                    @endif
                                                    @if ($student['gender'] == 'perempuan')
                                                        <option selected value="perempuan">Perempuan</option>
                                                    @else
                                                        <option value="perempuan">Perempuan</option>
                                                    @endif
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group mb-2">
                                        <label class="form-label text-profile" style="font-size: 20px; margin-bottom:0"
                                            for="formgender">Phone Number
                                        </label><input type="number" name="phone" id="formgender"
                                            value="{{ $student['phone'] }}" class="form-control " />
                                    </div>
                                    <div class="form-group mb-2">
                                        <label class="form-label text-profile" style="font-size: 20px; margin-bottom:0"
                                            for="formgender">Birthday
                                        </label><input type="date" name="birthday" id="formgender"
                                            value="{{ $student['birthday'] }}" class="form-control " />
                                    </div>
                                    <div class="form-group mb-2">
                                        <label class="form-label text-profile" style="font-size: 20px; margin-bottom:0"
                                            for="formgender">Country
                                        </label><input type="text" name="country" id="formgender"
                                            value="{{ $student['country'] }}" class="form-control " />
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <div class="form-group mb-2">
                                                <label class="form-label text-profile"
                                                    style="font-size: 20px; margin-bottom:0" for="formemail">State
                                                </label><input type="text" name="state" id="formemail"
                                                    value="{{ $student['state'] }}" class="form-control " />
                                            </div>

                                        </div>
                                        <div class="col">
                                            <div class="form-group mb-2">
                                                <label class="form-label text-profile"
                                                    style="font-size: 20px; margin-bottom:0" for="formgender">City
                                                </label><input type="text" name="city" id="formemail"
                                                    value="{{ $student['city'] }}" class="form-control " />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group mb-2">
                                        <label class="form-label text-profile" style="font-size: 20px; margin-bottom:0"
                                            for="formemail">About Me
                                        </label>
                                        <textarea type="text" name="about" style="resize:none; height:200px" class="form-control text-dark">{{ $student['about'] }}</textarea>
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
        <script>
            function changeImage() {
                document.getElementById("changeimage").innerHTML =
                    '<input type="file" name="image" class="form-control" placeholder = "image" >' +
                    '<button type="submit" class="btn btn-change">Save</button>'
            }
        </script>
    </section>
@endsection
