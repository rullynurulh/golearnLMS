<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('home_contents', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('image');
            $table->string('banner_title');
            $table->longText('banner_text');
            $table->string('category_list_title');
            $table->string('category_max_section_show');
            $table->longText('about_us_section_in_home_page');
            $table->string('about_us_section_title');
            $table->string('course_section_title');
            $table->string('teacher_section_title');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('home_contents');
    }
};
