<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\AbilityVacancy;
use App\Models\Applicant;
use App\Models\ApplicantVacancy;
use App\Models\Vacancy;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call([
            UsersSeeder::class,
            CategoriesSeeder::class,
            ExperiencesSeeder::class,
            LocationsSeeder::class,
            SalariesSeeder::class,
            AbilitiesSeeder::class,
        ]);

        Applicant::factory(10)->create();
        Vacancy::factory(60)->create();
        ApplicantVacancy::factory(300)->create();
        AbilityVacancy::factory(400)->create();
    }
}
