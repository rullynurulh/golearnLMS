@extends('layouts.student.main-student')
@section('container')
    <style>
        /* Styles for the popover container */
        .popover {
            max-width: 100%;
            background-color: gray;
            /* Max Width of the popover (depending on the container!) */
        }

        .popover-body {
            width: 400px;
            /* Adjust as needed */
            height: 300px;
            /* Adjust as needed */
        }

        .popover-body img {
            width: 100px;
        }

        .popover-body img:hover {
            cursor: pointer;
            scale: 1.2;
        }
    </style>
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
                                {{-- <form action="{{ route('change_profile_picture') }}" method="post"
                                    enctype="multipart/form-data">
                                    @csrf
                                    <div id="changeimage" class="d-flex justify-content-center">
                                        <button onclick="changeImage()" class="btn btn-change">Change</button>
                                    </div>
                                </form> --}}
                                <!-- Button that triggers the popover -->
                                <!-- Button that triggers the popover -->
                                {{-- <div id="changeimage" class="d-flex justify-content-center">
                                    <button class="btn btn-change" id="popover-btn">Show Popover</button>
                                </div>

                                <!-- Popover container -->
                                <div class="popover" id="myPopover">
                                    This is a popover content.
                                </div> --}}
                                <div style="display: none" id="popover-27">
                                    <div class="popover" role="button">
                                        <div class="popover-arrow"></div>
                                        <div class="popover-body">
                                            <div class="row">
                                                <div class="col-4">
                                                    <img src="{{ URL::asset('images/avatar/image_1.png') }}"
                                                        alt="image_1.png" />
                                                </div>
                                                <div class="col-4">
                                                    <img src="{{ URL::asset('images/avatar/image_2.png') }}"
                                                        alt="image_2.png" />
                                                </div>
                                                <div class="col-4">
                                                    <img src="{{ URL::asset('images/avatar/image_3.png') }}"
                                                        alt="image_3.png" />
                                                </div>
                                            </div>
                                            <div class="row mt-4">
                                                <div class="col-4">
                                                    <img src="{{ URL::asset('images/avatar/image_4.png') }}"
                                                        alt="image_4.png" />
                                                </div>
                                                <div class="col-4">
                                                    <img src="{{ URL::asset('images/avatar/image_5.png') }}"
                                                        alt="image_5.png" />
                                                </div>
                                                <div class="col-4">
                                                    <img src="{{ URL::asset('images/avatar/image_6.png') }}"
                                                        alt="image_6.png" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="d-flex justify-content-center">
                                    <button class="btn btn-change" data-bs-toggle="popover" data-bs-container="body"
                                        data-content-id="popover-27" data-bs-placement="bottom" href="#">
                                        Change
                                    </button>
                                </div>

                            </div>

                        </div>

                        <div class="col-9">
                            <div class="box-recommend px-5 pt-4 pb-4">
                                <form action="{{ route('user_update_profile') }}" method="post">
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
                                                    @if ($student['gender'] == 'Male')
                                                        <option selected value="Male">Male</option>
                                                    @else
                                                        <option value="Male">Male</option>
                                                    @endif
                                                    @if ($student['gender'] == 'Female')
                                                        <option selected value="Female">Female</option>
                                                    @else
                                                        <option value="Female">Female</option>
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
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
            integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous">
        </script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
            integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous">
        </script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
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
                var content = this.nextElementSibling;
                coll[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = content.scrollHeight + "px";
                    }
                });
            }

            var popoverTriggerList = [].slice.call(
                document.querySelectorAll('[data-bs-toggle="popover"]')
            );
            var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
                const popoverId = popoverTriggerEl.attributes["data-content-id"];
                if (popoverId) {
                    const contentEl = $(`#${popoverId.value}`).html();
                    return new bootstrap.Popover(popoverTriggerEl, {
                        content: contentEl,
                        html: true
                    });
                } else {
                    //do something else cause data-content-id isn't there.
                }
            });

            $(document).on("click", ".popover-body img", function() {
                // get source of image
                var imgSrc = $(this).attr("src");
                // change image source of main image
                $(".image-profile").attr("src", imgSrc);
                // get after "/image"
                var urlObject = new URL(imgSrc);
                var path = urlObject.pathname.substring(1);


                // send ajax request to server to update image
                $.ajax({
                    url: "{{ route('change_profile_picture') }}",
                    type: "POST",
                    data: {
                        _token: "{{ csrf_token() }}",
                        image: path
                    },
                    success: function(response) {
                        window.location.reload();
                    }
                });
            });
        </script>
    </section>
@endsection
