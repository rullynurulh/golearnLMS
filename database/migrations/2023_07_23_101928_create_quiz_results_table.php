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
        Schema::create('quiz_results', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('enrolled');
            $table->foreign('enrolled')
                ->references('id')->on('enrolleds')->onDelete('cascade');
            $table->unsignedBigInteger('quiz');
            $table->foreign('quiz')
                ->references('id')->on('quizzes')->onDelete('cascade');
            $table->unsignedBigInteger('correct_answer');
            $table->unsignedBigInteger('wrong_answer');
            $table->unsignedBigInteger('total_question');
            $table->unsignedBigInteger('duration');
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
        Schema::dropIfExists('quiz_results');
    }
};
