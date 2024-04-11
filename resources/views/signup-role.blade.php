<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    <title>Sign Up Roles</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link href="{{ URL::asset('app.css') }}" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
</head>

<body>

    <section class="vh-100">
        <div class="container-fluid">
            <div class="row bg-primary2">
                <div class="col text-center p-2">
                    <img src="images/logo_golearn.png" alt="" style="width: 6rem">
                </div>

            </div>
            <div class="container pt-5">

                <div class="row pt-5 ">
                    <div class="col d-flex justify-content-end mb-5">
                        <div class="card text-center p-3 bg-primary1" style="width:80%;">
                            <h1 class="text-white">Sign Up as Teacher</h1>
                            <div>
                                <img class="card-img-top text-image" src=" {{ URL::asset('images/image 4.png') }}"
                                    style="width: 15rem;">
                            </div>

                            <div class="card-body text-center d-flex align-items-end justify-content-center">
                                <div class="align-items-end">
                                    <a href="{{ route('signup', 'teacher') }}" class="btn btn-button">Continue</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col d-flex justify-content-start mb-5">
                        <div class="card text-center p-3" style="width:80%; background: #E63333;">
                            <h1 class="text-white">Sign Up as Student</h1>
                            <div>
                                <img class="card-img-top text-image" src="{{ URL::asset('images/image 3.png') }} " 
                                    style="width: 15rem;">
                            </div>

                            <div class="card-body text-center d-flex align-items-end justify-content-center">
                                <div class="align-items-end">
                                    <a href="{{ route('signup', 'student') }}" class="btn btn-button">Continue</a>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous">
    </script>
</body>

</html>
