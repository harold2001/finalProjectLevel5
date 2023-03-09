<?php

namespace Database\Factories;

use App\Models\Ability;
use App\Models\Vacancy;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\AbilityVacancy>
 */
class AbilityVacancyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "ability_id" => Ability::all()->random()->id,
            "vacancy_id" => Vacancy::all()->random()->id
        ];
    }
}
