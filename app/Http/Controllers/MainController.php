<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Course;
use App\Models\Category;
use App\Models\HomeContent;
use Illuminate\Http\Request;
use App\Models\FooterContent;
use App\Models\SocialContent;
use App\Models\AboutUsContent;
use App\Models\AccountContent;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class MainController extends Controller
{
    public function getHomaPage()
    {
        $home = HomeContent::first();
        $account = AccountContent::first();
        $footer = FooterContent::first()['copyright_text'];
        $aboutus = AboutUsContent::first();
        $social = SocialContent::all();
        if ($aboutus) {
            $aboutus['description'] = explode("\n", $aboutus['description']);
        }

        $courses = DB::table('courses')
            ->join('categories', 'courses.categories', '=', 'categories.id')
            ->join('users', 'courses.instructor', '=', 'users.id')
            ->leftJoin('enrolleds', 'enrolleds.courses', '=', 'courses.id')
            ->select('categories.name as categories_name', 'users.name as instructor_name', 'users.image as instructor_image', 'courses.*', DB::raw("count(enrolleds.id) as student_enrolled"))
            ->groupBy('courses.id')
            ->get()
            ->take(5);
        $courses = json_decode(json_encode($courses), true);
        
        // $courses = Course::get()->take(5);
        $teachers = User::where(['role' => 'teacher'])->get()->take(5);
        $category = Category::get()->take($home['category_max_section_show']);

        return view('home', ['footer' => $footer, 'account' => $account, 'home' => $home, 'category' => $category, 'aboutus' => $aboutus, 'courses' => $courses, 'teachers' => $teachers, 'social' => $social]);
    }

    public function getContact()
    {
        $account = AccountContent::first();
        $footer = FooterContent::first()['copyright_text'];
        $social = SocialContent::all();
        return view('contact', ['footer' => $footer, 'account' => $account, 'social' => $social]);
    }
    public function getAboutUs()
    {
        $account = AccountContent::first();
        $footer = FooterContent::first()['copyright_text'];
        $aboutus = AboutUsContent::first();
        $social = SocialContent::all();
        if ($aboutus) {
            $aboutus['description'] = explode("\n", $aboutus['description']);
        }
        return view('about-us', ['aboutus' => $aboutus, 'footer' => $footer, 'account' => $account, 'social' => $social]);
    }


    public function getCourses()
    {
        $account = AccountContent::first();
        $social = SocialContent::all();
        $footer = FooterContent::first()['copyright_text'];
        $courses = DB::table('courses')
            ->join('categories', 'courses.categories', '=', 'categories.id')
            ->join('users', 'courses.instructor', '=', 'users.id')
            ->leftJoin('enrolleds', 'enrolleds.courses', '=', 'courses.id')
            ->groupBy('courses.id')
            ->select('categories.name as categories_name', 'users.name as instructor_name', 'users.image as instructor_image', DB::raw("count(enrolleds.id) as student_enrolled"), 'courses.*' )
            ->get();
        $courses = json_decode(json_encode($courses), true);
        return view('courses', ['courses' => $courses, 'footer' => $footer, 'account' => $account, 'social' => $social]);
    }

    public function getTeachers()
    {
        $account = AccountContent::first();
        $social = SocialContent::all();
        $footer = FooterContent::first()['copyright_text'];
        $teachers = User::where(['role' => 'teacher'])->get();
        return view('teachers', ['teachers' => $teachers, 'footer' => $footer, 'account' => $account, 'social' => $social]);
    }


    public function signUp($role)
    {
        return view('signup', ['role' => $role]);
    }

    public function signUpAction(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
            'password_confirmation' => 'required|same:password'
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'role' => $request->role,
            'status' => 'active',
            'password' => bcrypt($request->password),
            'created_at' => time(),
            'updated_at' => time()

        ]);

        return redirect('/student');
    }

    public function signInAction(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);

        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            if (Auth::attempt($request->only('email', 'password'))) {
                $request->session()->regenerate();
                if (auth()->user()->role == "student") {
                    return redirect()->intended('/student');
                } else if (auth()->user()->role == "teacher" ||  auth()->user()->role == "admin") {
                    return redirect('/admin');
                }
            }
        }

        return redirect("signin")->with('message', 'Email/Password yang dimasukan salah.');
    }
    public function logout_action(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerate();
        return redirect("/");
    }

    public function changePassword(Request $request)
    {
        # Validation
        $request->validate([
            'old_password' => 'required',
            'new_password' => 'required|min:6|confirmed',
            'new_password_confirmation' => 'required|same:new_password'
        ]);


        #Match The Old Password
        if (!Hash::check($request->old_password, auth()->user()->password)) {
            return back()->with("error", "Old Password Doesn't match!");
        }


        #Update the new Password
        User::where(['id' => auth()->user()->id])->update([
            'password' => Hash::make($request->new_password)
        ]);

        return back()->with("status", "Password changed successfully!");
    }

    public function login(Request $request)
    {
        try {
            $request->validate([
                'email' => 'required',
                'password' => 'required',
            ]);

            $credentials = $request->only('email', 'password');

            $token = Auth::attempt($credentials);
            if (!$token) {
                return response()->json([
                    'message' => 'Email/Password yang dimasukan salah.'
                ], 401);
            }

            $user = Auth::user();
            $user['token'] = $token;

            return response()->json([
                'message' => 'success',
                'user' => $user
            ], 200);
        } catch (\Throwable $e) {
            return response()->json([
                'message' => 'error',
                'data' => $e->getMessage()
            ], 500);
        }
    }

    public function getImage($path)
    {
        $path = storage_path('app/public/photo/' . $path);
        if (!file_exists($path)) {
            abort(404);
        }
        $file = file_get_contents($path);
        $type = mime_content_type($path);
        return response($file, 200)->header("Content-Type", $type);
    }
}
