<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('results', function (Blueprint $table) {
          $table->id();
          $table->foreignId('enrollee_id')->constrained('applicants')->cascadeOnDelete(); // Связь c абитуриентом
          $table->foreignId('discipline_id')->constrained('disciplines')->cascadeOnDelete(); // Связь с дисциплиной
          $table->integer('grade');
          $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('results');
    }
};
