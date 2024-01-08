<!-- sidebar here -->
<div class="sidenav" style="width: 280px;">
    <div class="sidenav__brand" style="margin: 10px;">
        <a class="sidenav_brand-link" href="/" style="color: white; font-weight: 600;  margin-left:80px"> <img src="{{ URL::asset('images/icon_golearn.png') }}"
            alt="logo" class="me-3" style="width: 4rem;"></a>
    </div>
    <div class="content content-nav">
        <div>
            <div class="row p-4">
                <section class="section-curriculum sections">
                        <article>
                            <div class="mb-2">
                                <a href="/admin" id="active" class="collapsible btn mb-2 btn-admin-active">
                                    Dashboard
                                </a>
                            </div>

                            <div class="mb-2">
                                <button type="button" class="collapsible btn mb-2 btn-admin">
                                    Users
                                </button>
                                <div class="content-collapse">
                                    <ul class="list-lesson">
                                        <a class="d-flex align-items-center chapter-info mb-2 " href="/admin/user-teacher">
                                            <li>
                                                Teacher
                                            </li>
                                        </a>
                                        <a class="d-flex align-items-center chapter-info mb-2 " href="/admin/user-student">
                                            <li>
                                                Student
                                            </li>
                                        </a>

                                        <!-- <a class="d-flex align-items-center chapter-info mb-2 " href="/admin/users/admin-users-setting">
                                            <li>
                                                User Setting
                                            </li>
                                        </a> -->
                                    </ul>
                                </div>
                            </div>

                            <div class="mb-2">
                                <button type="button" class="collapsible btn mb-2 btn-admin">
                                    Courses
                                </button>
                                <div class="content-collapse">
                                    <ul class="list-lesson">
                                        @if (auth()->user()->role == 'admin')
                                            <a class="d-flex align-items-center chapter-info mb-2 "
                                                href="/admin/courses-categories">
                                                <li>
                                                    Categories
                                                </li>
                                            </a>
                                        @endif
                                            <a class="d-flex align-items-center chapter-info mb-2 " href="/admin/courses-list">
                                                <li>
                                                    Course List
                                                </li>
                                            </a>
                                    </ul>
                                </div>
                            </div>

                            <div class="mb-2">
                                <button type="button" class="collapsible btn mb-2 btn-admin">
                                    Quiz
                                </button>
                                <div class="content-collapse">
                                    <ul class="list-lesson">
                                        <a class="d-flex align-items-center chapter-info mb-2 "href="/admin/add-quiz">
                                            <li>
                                                Add Quiz
                                            </li>
                                        </a>
                                        <a href="/admin/quiz-setting" class="d-flex align-items-center chapter-info mb-2 ">
                                            <li>
                                                Quiz Setting
                                            </li>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                                <div class="mb-2">
                                    <button type="button" class="collapsible btn mb-2 btn-admin">
                                        Challenge
                                    </button>
                                <div class="content-collapse">
                                    <ul class="list-lesson">
                                        <a class="d-flex align-items-center chapter-info mb-2 "href="/admin/add-challenge">
                                            <li>
                                                Add Challenge
                                            </li>
                                        </a>
                                    </ul>
                                </div>
                            </div>

                            <div class="mb-2">
                                <button type="button" class="collapsible btn mb-2 btn-admin">
                                    Certificates
                                </button>
                                <div class="content-collapse">
                                    <ul class="list-lesson">
                                        <a class="d-flex align-items-center chapter-info mb-2 "
                                            href="/admin/certificate-list">
                                            <li>
                                                Certificate List
                                            </li>
                                        </a>
                                        <a class="d-flex align-items-center chapter-info mb-2 "
                                            href="/admin/certificate-add">
                                            <li>
                                                Add Certificate
                                            </li>
                                        </a>

                                        @if (auth()->user()->role == 'admin')
                                        <a class="d-flex align-items-center chapter-info mb-2"
                                            href="/admin/certificate-setting">
                                            <li>
                                                Certificate Setting
                                            </li>
                                        </a>
                                        @endif
                                    </ul>
                                </div>
                            </div>

                            <div class="mb-2">
                                @if (auth()->user()->role == 'admin')
                                    <button type="button" class="collapsible btn mb-2 btn-admin">
                                        Front Page
                                    </button>
                                                
                                    <div class="content-collapse">
                                        <ul class="list-lesson">
                                            <a class="d-flex align-items-center chapter-info mb-2 "
                                                href="/admin/frontpage-home">
                                                <li>
                                                    Home Content
                                                </li>
                                            </a>

                                            <a class="d-flex align-items-center chapter-info mb-2 "
                                                href="/admin/frontpage-social">
                                                <li>
                                                    Social Setting
                                                </li>
                                            </a>

                                            <a class="d-flex align-items-center chapter-info mb-2 "
                                                href="/admin/frontpage-footer">
                                                <li>
                                                    Footer Setting
                                                </li>
                                            </a>

                                            <a class="d-flex align-items-center chapter-info mb-2 "
                                                href="/admin/frontpage-account">
                                                <li>
                                                    Account Setting
                                                </li>
                                            </a>

                                            <a class="d-flex align-items-center chapter-info mb-2 "
                                                href="/admin/frontpage-about-us">
                                                <li>
                                                    About Us
                                                </li>
                                            </a>
                                        </ul>
                                    </div>
                                @endif
                            </div>
                        </article>
                </section>
            </div>
        </div>
    </div>
</div>