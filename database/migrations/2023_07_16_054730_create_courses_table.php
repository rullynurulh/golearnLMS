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
        Schema::create('courses', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('class_code');
            $table->unsignedBigInteger('instructor');
            $table->foreign('instructor')
                ->references('id')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('categories');
            $table->foreign('categories')
                ->references('id')->on('categories')->onDelete('cascade');
            $table->longText('requirement');
            $table->longText('description');
            $table->longText('outcome');
            $table->string('image')->nullable();
            $table->string('sequence');
            $table->string('status');
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
        Schema::dropIfExists('courses');
    }
};
