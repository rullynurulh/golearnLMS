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
        Schema::create('about_us_contents', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('image');
            $table->string('banner_title');
            $table->longText('description');
            $table->longText('why_choose_me_text');
            $table->longText('our_mission_text');
            $table->longText('our_vision_text');
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
        Schema::dropIfExists('about_us_contents');
    }
};
