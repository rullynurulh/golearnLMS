<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class MainController extends Controller
{
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
            'password' => bcrypt($request->password),
            'created_at' => time(),
            'updated_at' => time()

        ]);

        return view('/signin');
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

                if (auth()->user()->role == "student") {

                    return redirect('/student');
                } else if (auth()->user()->role == "teacher") {

                    return redirect('/about-us');
                }
            }
        }

        return redirect("/")->with('message', 'Email/Password yang dimasukan salah.');
    }
    public function logout_action(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerate();
        return redirect("/");
    }
}
