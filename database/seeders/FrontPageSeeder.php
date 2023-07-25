<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class FrontPageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('home_contents')->insert([
            'image' => 'images/bg-slider.jpg',
            'banner_title' => 'ini Banner Title',
            'banner_text' => 'ini banner_text',
            'category_list_title' => 'ini category_list_title',
            'category_max_section_show' => 5,
            'about_us_section_in_home_page' => 'ini about_us_section_in_home_page',
            'about_us_section_title' => 'ini about_us_section_title',
            'course_section_title' => 'ini course_section_title',
            'teacher_section_title' => 'ini teacher_section_title',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('social_contents')->insert([

            'image' => 'images/social-content/icon_golearn.png',
            'link' => 'https://www.golearn.id/',
            'social_name' => 'GoLearn',
            'created_at' => now(),
            'updated_at' => now(),
        ]);


        DB::table('footer_contents')->insert([

            'copyright_text' => 'Copyright © 2023 GoLearnLMS.
            All rights reserved | Made By Ruly Nurul H',
            'created_at' => now(),
            'updated_at' => now(),
        ]);


        DB::table('about_us_contents')->insert([

            'image' => 'images/about-us-content/about-us.jpg',
            'banner_title' => 'About Us',
            'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'why_choose_me_text' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            'our_mission_text' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            'our_vision_text' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('account_contents')->insert([

            'image' => 'images/account-content/logo_golearn.png',
            'site_name' => 'GoLearn',
            'email' => 'golearn@email.com',
            'phone' => '08123456789',
            'country' => 'Indonesia',
            'address' => 'Jl. Raya Bogor No. 1, Jakarta Timur',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
