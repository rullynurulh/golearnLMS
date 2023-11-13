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
        Schema::create('certificate_settings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('show_logo')->nullable();
            $table->string('position_logo_x')->nullable();
            $table->string('position_logo_y')->nullable();
            $table->string('show_student')->nullable();
            $table->string('position_student_x')->nullable();
            $table->string('position_student_y')->nullable();
            $table->string('font_size')->nullable();
            $table->string('text_1')->nullable();
            $table->string('text_2')->nullable();
            $table->string('body_position')->nullable();
            $table->string('show_course')->nullable();
            $table->string('show_date')->nullable();
            $table->string('footer_title')->nullable();
            $table->string('signature_height')->nullable();
            $table->string('signature_width')->nullable();
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
        Schema::dropIfExists('certificate_settings');
    }
};
