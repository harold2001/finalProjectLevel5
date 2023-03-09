<?php

namespace Database\Factories;

use App\Models\Applicant;
use App\Models\Vacancy;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ApplicantVacancy>
 */
class ApplicantVacancyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "applicant_id" => Applicant::all()->random()->id,
            "vacancy_id" => Vacancy::all()->random()->id
        ];
    }
}
