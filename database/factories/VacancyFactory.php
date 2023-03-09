<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Experience;
use App\Models\Location;
use App\Models\Salary;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Vacancy>
 */
class VacancyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "user_id" => User::all()->random()->id,
            "category_id" => Category::all()->random()->id,
            "experience_id" => Experience::all()->random()->id,
            "location_id" => Location::all()->random()->id,
            "salary_id" => Salary::all()->random()->id,
            "title" => fake()->text(20),
            "description" => fake()->text(3000),
            "image" => null,
            "active" => fake()->boolean()
        ];
    }
}
