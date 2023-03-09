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
        Schema::create('vacancies', function (Blueprint $table) {
            $table->id();
            $table->foreignId("user_id")->constrained("users")->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId("category_id")->constrained("categories")->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId("experience_id")->constrained("experiences")->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId("location_id")->constrained("locations")->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId("salary_id")->constrained("salaries")->cascadeOnUpdate()->cascadeOnDelete();
            $table->string("title")->nullable();
            $table->text("description")->nullable();
            $table->binary("image")->nullable();
            $table->boolean("active")->default(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vacancies');
    }
};
