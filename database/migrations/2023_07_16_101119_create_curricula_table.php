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
        Schema::create('curricula', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('courses');
            $table->foreign('courses')
                ->references('id')->on('courses')->onDelete('cascade');
            $table->unsignedBigInteger('chapter');
            $table->foreign('chapter')
                ->references('id')->on('chapters')->onDelete('cascade');
            $table->string('name');
            $table->longText('description');
            $table->string('category');
            $table->string('privacy');
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
        Schema::dropIfExists('curricula');
    }
};
