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
        Schema::create('applicant_vacancies', function (Blueprint $table) {
            $table->id();
            $table->foreignId("applicant_id")->constrained("applicants")->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId("vacancy_id")->constrained("vacancies")->cascadeOnUpdate()->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('applicant_vacancies');
    }
};
