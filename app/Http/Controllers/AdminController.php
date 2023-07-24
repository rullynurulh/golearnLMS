<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Course;
use App\Models\HomeContent;
use Termwind\Components\Hr;
use Illuminate\Http\Request;
use App\Models\FooterContent;
use App\Models\SocialContent;
use App\Models\AboutUsContent;
use App\Models\AccountContent;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;


class AdminController extends Controller
{
    public function getDashboard()
    {
        $student = User::where(['role' => 'student'])->count();
        $teacher = User::where(['role' => 'teacher'])->count();
        $course = Course::count();

        $enrolls =  DB::table('enrolleds')
            ->join('courses', 'courses.id', '=', 'enrolleds.courses')
            ->join('users', 'users.id', '=', 'enrolleds.student')
            ->select('users.name as student_name', 'users.email as student_email', 'courses.name as courses_name', 'courses.instructor as teachers_id', 'enrolleds.created_at as enrolled_at')
            ->orderBy('enrolleds.id', 'desc')
            ->get()
            ->take(2);
        $enrolls = json_decode(json_encode($enrolls), true);

        foreach ($enrolls as $key => $enroll) {
            $enrolls[$key]['enrolled_at'] = (int)(((time() - strtotime($enroll['enrolled_at'])) % 3600) / 60);
        }


        $teachersById = [];

        if ($enrolls) {

            $teachers = User::all(['id', 'name']);
            foreach ($teachers as $t) {
                $teachersById[$t['id']] = $t['name'];
            }
        }

        $courses = DB::table('courses')
            ->join('categories', 'courses.categories', '=', 'categories.id')
            ->join('users', 'courses.instructor', '=', 'users.id')
            ->leftJoin('enrolleds', 'enrolleds.courses', '=', 'courses.id')
            ->select('users.name as instructor_name', 'courses.name as name',  DB::raw("count(enrolleds.id) as student_enrolled"))
            ->groupBy('courses.id')
            ->orderBy('courses.id', 'desc')
            ->get()
            ->take(2);

        $courses = json_decode(json_encode($courses), true);


        return view('/admin/admin-dashboard', [
            'student' => $student,
            'teacher' => $teacher,
            'course' => $course,
            'enrolls' => $enrolls,
            'teachersById' => $teachersById,
            'courses' => $courses
        ]);
    }

    public function getHomeContent()
    {

        $homecontent = HomeContent::first();

        return view('/admin/frontpage/admin-home-content', [
            'homecontent' => $homecontent
        ]);
    }

    public function getSocialContent()
    {

        $socialcontent = SocialContent::all();
        $socialcontentById = [];

        foreach ($socialcontent as $s) {
            $socialcontentById[$s['id']] = $s;
        }


        return view('/admin/frontpage/admin-social-setting', [
            'socialcontent' => $socialcontent,
            'socialcontentById' => $socialcontentById

        ]);
    }

    public function saveHomeContent(Request $request)
    {
        $getHomeContent = HomeContent::first();
        if ($getHomeContent) {
            $homecontent = HomeContent::find($getHomeContent['id']);
        } else {
            $homecontent = new HomeContent();
        }


        $homecontent->banner_title = $request->banner_title;
        $homecontent->banner_text = $request->banner_text;
        $homecontent->category_list_title = $request->category_list_title;
        $homecontent->category_max_section_show = $request->category_max_section_show;
        $homecontent->about_us_section_in_home_page = $request->about_us_section_in_home_page;
        $homecontent->about_us_section_title = $request->about_us_section_title;
        $homecontent->course_section_title = $request->course_section_title;
        $homecontent->teacher_section_title = $request->teacher_section_title;


        if (($getHomeContent && $request->hasFile('image')) || !$getHomeContent) {

            $data = $request->validate([
                'image' => 'required|image|mimes:jpg,png,jpeg,gif,svg'
            ]);


            if (($getHomeContent)) {
                unlink($getHomeContent['image']);
            }

            $image_name = uniqid() . '.' . $data['image']->getClientOriginalExtension();
            $image_path = 'images/home-content/' . $image_name;
            $request->image->move(public_path('images/home-content'), $image_name);


            $homecontent->image = $image_path;
        }

        if (($getHomeContent)) {
            $homecontent->update();
        } else {
            $homecontent->save();
        }


        return back();
    }

    public function saveSocialContent(Request $request)
    {

        if (($request->id != -1 && $request->hasFile('image')) || $request->id == -1) {

            $data = $request->validate([
                'image' => 'required|image|mimes:jpg,png,jpeg,gif,svg'
            ]);

            if (($request->id != -1)) {
                $image = SocialContent::whereId($request->id)->first()['image'];
                unlink($image);
            }

            $image_name = uniqid() . '.' . $data['image']->getClientOriginalExtension();
            $image_path = 'images/social-content/' . $image_name;
            $request->image->move(public_path('images/social-content'), $image_name);
        }




        if ($request->id != -1) {

            if ($request->hasFile('image')) {
                SocialContent::whereId($request->id)->update([
                    'image' => $image_path,
                    'link' => $request->link,
                    'social_name' => $request->social_name
                ]);
            } else {
                SocialContent::whereId($request->id)->update([

                    'link' => $request->link,
                    'social_name' => $request->social_name
                ]);
            }
        } else {

            SocialContent::create([
                'image' => $image_path,
                'link' => $request->link,
                'social_name' => $request->social_name
            ]);
        }

        return back();
    }

    public function deleteSocialContent($id)
    {
        SocialContent::whereId($id)->delete();
        return back();
    }

    public function getFooterContent()
    {

        $footercontent = FooterContent::first();


        return view('/admin/frontpage/admin-footer-setting', [
            'footercontent' => $footercontent
        ]);
    }

    public function saveFooterContent(Request $request)
    {
        $getFooterContent = FooterContent::first();
        if ($getFooterContent) {
            $footercontent = FooterContent::find($getFooterContent['id']);
        } else {
            $footercontent = new FooterContent();
        }


        $footercontent->copyright_text = $request->copyright_text;

        if (($getFooterContent)) {
            $footercontent->update();
        } else {
            $footercontent->save();
        }



        return back();
    }

    public function getAboutUsContent()
    {

        $about_us = AboutUsContent::first();


        return view('/admin/frontpage/admin-about-us', [
            'about_us' => $about_us
        ]);
    }


    public function saveAboutUsContent(Request $request)
    {
        $getAboutUSContent = AboutUsContent::first();
        if ($getAboutUSContent) {
            $content = AboutUsContent::find($getAboutUSContent['id']);
        } else {
            $content = new AboutUsContent();
        }

        $content->banner_title = $request->banner_title;
        $content->description = $request->description;
        $content->why_choose_me_text = $request->why_choose_me_text;
        $content->our_mission_text = $request->our_mission_text;
        $content->our_vision_text = $request->our_vision_text;


        if (($getAboutUSContent && $request->hasFile('image')) || !$getAboutUSContent) {


            $data = $request->validate([
                'image' => 'required|image|mimes:jpg,png,jpeg,gif,svg'
            ]);


            if (($getAboutUSContent)) {
                unlink($getAboutUSContent['image']);
            }

            $image_name = uniqid() . '.' . $data['image']->getClientOriginalExtension();
            $image_path = 'images/about-us-content/' . $image_name;
            $request->image->move(public_path('images/about-us-content'), $image_name);


            $content->image = $image_path;
        }

        if (($getAboutUSContent)) {
            $content->update();
        } else {
            $content->save();
        }



        return back();
    }

    public function getAccountContent()
    {

        $account = AccountContent::first();


        return view('/admin/frontpage/admin-account-setting', [
            'account' => $account
        ]);
    }

    public function saveAccountContent(Request $request)
    {
        $getContent = AccountContent::first();
        if ($getContent) {
            $content = AccountContent::find($getContent['id']);
        } else {
            $content = new AccountContent();
        }

        $content->site_name = $request->site_name;
        $content->email = $request->email;
        $content->phone = $request->phone;
        $content->country = $request->country;
        $content->address = $request->address;


        if (($getContent && $request->hasFile('image')) || !$getContent) {


            $data = $request->validate([
                'image' => 'required|image|mimes:jpg,png,jpeg,gif,svg'
            ]);


            if (($getContent)) {
                unlink($getContent['image']);
            }

            $image_name = uniqid() . '.' . $data['image']->getClientOriginalExtension();
            $image_path = 'images/account-content/' . $image_name;
            $request->image->move(public_path('images/account-content'), $image_name);


            $content->image = $image_path;
        }

        if (($getContent)) {
            $content->update();
        } else {
            $content->save();
        }



        return back();
    }
}
