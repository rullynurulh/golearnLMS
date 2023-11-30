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
        Schema::create('curriculum_visiteds', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('enrolled');
            $table->foreign('enrolled')
                ->references('id')->on('enrolleds')->onDelete('cascade');
            $table->unsignedBigInteger('curriculum');
            $table->foreign('curriculum')
                ->references('id')->on('curricula')->onDelete('cascade');
            $table->bigInteger('hint_used')->default(0)->nullable();
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
        Schema::dropIfExists('curriculum_visiteds');
    }
};
