<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;


class StudentController extends Controller
{


    public function getProfile()
    {
        $student = User::where(['id' => Auth()->user()->id])->first();
        return view('/student/myprofile-student', ['student' => $student]);
    }

    public function updateProfile(Request $request)
    {
        #Update the new Profile
        User::whereId(auth()->user()->id)->update([
            'name' => $request->name,
            'gender' => $request->gender,
            'phone' => $request->phone,
            'birthday' => $request->birthday,
            'country' => $request->country,
            'state' => $request->state,
            'city' => $request->city,
            'about' => $request->about,
        ]);


        return redirect('/student/myprofile');
    }

    public function changeProfilePicture(Request $request)
    {

        $data = $request->validate([
            'image' => 'required|image|mimes:jpg,png,jpeg,gif,svg'
        ]);

        $user = User::whereId(auth()->user()->id)->first();
        if (!is_null($user['image'])) {
            unlink($user['image']);
        }

        $image_name = uniqid() . '.' . $data['image']->getClientOriginalExtension();
        $image_path = 'images/profile-picture/' . $image_name;
        $request->image->move(public_path('images/profile-picture'), $image_name);

        #Update the new image
        User::whereId(auth()->user()->id)->update([
            'image' => $image_path
        ]);

        return redirect('/student/myprofile');
    }
}
