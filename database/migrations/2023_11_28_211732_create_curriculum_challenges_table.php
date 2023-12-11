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
        Schema::create('curriculum_challenges', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('curriculum');
            $table->foreign('curriculum')
                ->references('id')->on('curricula')->onDelete('cascade');
            $table->unsignedBigInteger('challenge');
            $table->foreign('challenge')
                ->references('id')->on('challenges')->onDelete('cascade');
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
        Schema::dropIfExists('curriculum_challenges');
    }
};
