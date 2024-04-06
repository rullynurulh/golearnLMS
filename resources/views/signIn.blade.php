<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sign in</title>
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
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
            <div class="row bg-image p-5">
                <!-- Kolom Image -->
                <div class="row">
                    <div class="px-5 ms-xl-4 mt-3 text-center " style="font-weight: 700">
                        <h1 style="color: var(--primary3); font-weight: 700">Welcome to</h1>
                        <h1 style="color: var(--primary3); font-weight: 700">Go-Learn! App</h1>
                        <h5 class="text-white">Silahkan masuk dengan Akun Anda.</h5>
                        <!-- <h1 style="font-weight: 700;">Casis Lab</h1> -->
                    </div>
                </div>

                <!-- Kolom Login -->
                <div class="row">
                    <div class="container" style="width: 50rem !important">
                        <div class="col card card-shadow bg-primary1 text-white px-5 " style="border-radius: 1rem;">
                            <div class="text-start mt-4 mb-4">
                                <h3 class="text-white">Welcome Back.</h3>
                                <h3 class="text-white">
                                    Please login to Your Account
                                </h3>
                            </div>
                            <div class="d-flex px-2">
                                <div class="col">
                                    <form action="{{ route('sigin_action') }}" method="post">
                                        @csrf
                                        @if (session()->has('message'))
                                            <p style="color: red !important; padding-left: 5px;">
                                                {{ session()->get('message') }}
                                            </p>
                                        @endif
                                        <!-- Email -->
                                        <div class="form-group mb-2">
                                            <label for="form-label text-white" style="font-size: 23px">Email </label>
                                            <input type="email" name="email" id="fromEmailLogin"
                                                class="form-control form-control-lg p-3" />
                                        </div>
                                        <!-- Password -->
                                        <div class="form-group mb-3">
                                            <label class="form-label text-white" style="font-size: 23px"
                                                for="formPassLogin">Password
                                            </label><input type="password" name="password" id="formPassLogin"
                                                class="form-control form-control-lg p-3" />
                                        </div>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input " id="remember_me">
                                            <label class="form-check-label" for="remember_me">Remember Me</label>
                                        </div>
                                        <!-- Buttons Login -->
                                        <div class="d-flex justify-content-end pt-1 mb-1">
                                            <button class="btn btn-button btn-shadow text-dark px-4" type="submit">Sign
                                                In</button>
                                        </div>
                                        <p class="text-end">Don’t Have an Account? <a href="/signup-role"
                                                style="text-decoration: none; color: var(--secondary4)">Sign Up</a></p>
                                        <!-- Buttons signup -->
                                    </form>

                                </div>

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
