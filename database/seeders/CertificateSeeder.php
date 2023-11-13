<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CertificateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('certificate_settings')->insert([
            'show_logo' => 'yes',
            'position_logo_x' => '1675',
            'position_logo_y' => '110',
            'show_student' => 'yes',
            'position_student_x' => '50',
            'position_student_y' => '30',
            'font_size' => '3',
            'text_1' => 'This is to certify that',
            'text_2' => 'has successfully completed the course',
            'body_position' => 'center',
            'show_course' => 'yes',
            'show_date' => 'yes',
            'footer_title' => 'Certificate of Completion',
            'signature_height' => '150',
            'signature_width' => '150',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
