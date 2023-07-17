<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'asep',
            'email' => 'asep@gmail.com',
            'password' => bcrypt('123456'), // password
            'role' => 'teacher',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('users')->insert([
            'name' => 'firman',
            'email' => 'firman@gmail.com',
            'password' => bcrypt('123456'), // password
            'role' => 'teacher',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
