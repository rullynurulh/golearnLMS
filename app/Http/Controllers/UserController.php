<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function getProfile()
    {
        $user = User::where(['id' => Auth()->user()->id])->first();
        if ($user['role'] == 'student') {
            return view('/student/myprofile-student', ['student' => $user]);
        } else {
            return view('/admin/admin-my-profile', ['user' => $user]);
        }
    }

    public function updateProfile(Request $request)
    {
        #Update the new Profile
        User::where(['id' => auth()->user()->id])->update([
            'name' => $request->name,
            'gender' => $request->gender,
            'phone' => $request->phone,
            'birthday' => $request->birthday,
            'country' => $request->country,
            'state' => $request->state,
            'city' => $request->city,
            'about' => $request->about,
        ]);


        return back();
    }

    public function changeProfilePicture(Request $request)
    {
        // if (!is_null($user['image'])) {
        //     unlink($user['image']);
        // }

        // $image_name = uniqid() . '.' . $request->image->getClientOriginalExtension();
        // $image_path = 'images/profile-picture/' . $image_name;
        // $request->image->move(public_path('images/profile-picture'), $image_name);

        #Update the new image
        User::where(['id' => auth()->user()->id])->update([
            'image' => $request->image,
        ]);

        return response()->json(['success' => 'Image Uploaded Successfully']);
    }

    public function getListStudents()
    {
        $students = User::where(['role' => 'student'])->get();
        $studentsById = [];
        foreach ($students as $s) {
            $studentsById[$s['id']] = $s;
        }

        return view('/admin/users/admin-student', ['students' => $students, 'studentsById' => $studentsById]);
    }


    public function getListTeachers()
    {
        $teachers = User::where(['role' => 'teacher'])->get();


        $teachersById = [];
        foreach ($teachers as $t) {
            $teachersById[$t['id']] = $t;
        }

        return view('/admin/users/admin-teacher', ['teachers' => $teachers, 'teachersById' => $teachersById]);
    }

    public function updateUserDataByAdmin(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',

        ]);

        $user = User::find($request->id);



        if (User::where(['email' => $request->email])->count() == 0) {

            $user->email = $request->email;
        }

        #Update the new Profile
        $user->name = $request->name;
        $user->phone = $request->phone;
        $user->birthday = $request->birthday;
        $user->country  = $request->country;
        $user->state    = $request->state;
        $user->city  = $request->city;
        $user->about = $request->about;
        $user->status = $request->status;


        if ($request->filled('password')) {

            $request->validate([
                'password' => 'min:6',
                'password_confirmation' => 'required|same:password'

            ]);


            #Update the new Password
            $user->password = Hash::make($request->password);
        }

        if ($request->hasFile('image')) {

            $data = $request->validate([
                'image' => 'required|image|mimes:jpg,png,jpeg,gif,svg'
            ]);

            $data_user = User::where(['id' => $request->id])->first();
            if (!is_null($data_user['image'])) {
                unlink($data_user['image']);
            }

            $image_name = uniqid() . '.' . $data['image']->getClientOriginalExtension();
            $image_path = 'images/profile-picture/' . $image_name;
            $request->image->move(public_path('images/profile-picture'), $image_name);


            $user->image = $image_path;
        }

        $user->update();

        return back();
    }


    public function addUserDataByAdmin(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
            'password_confirmation' => 'required|same:password'
        ]);

        $user = new User;
        $user->email = $request->email;
        $user->name = $request->name;
        $user->phone = $request->phone;
        $user->birthday = $request->birthday;
        $user->country  = $request->country;
        $user->state    = $request->state;
        $user->role    = 'teacher';
        $user->city  = $request->city;
        $user->about = $request->about;
        $user->password = Hash::make($request->password);



        if ($request->hasFile('image')) {

            $data = $request->validate([
                'image' => 'required|image|mimes:jpg,png,jpeg,gif,svg'
            ]);

            $data_user = User::where(['id' => $request->id])->first();
            if (isset($data_user['image'])) {
                unlink($data_user['image']);
            }

            $image_name = uniqid() . '.' . $data['image']->getClientOriginalExtension();
            $image_path = 'images/profile-picture/' . $image_name;
            $request->image->move(public_path('images/profile-picture'), $image_name);

            $user->image = $image_path;
        }

        $user->save();

        return back();
    }

    public function deleteUserDataByAdmin($id)
    {
        User::whereId($id)->delete();
        return back();
    }
}
