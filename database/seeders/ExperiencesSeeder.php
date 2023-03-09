<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ExperiencesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $array = ["0 - 6 Meses", "6 Meses - 1 Año", "1 - 3 Años", "3 - 5 Años", "5 - 7 Años",  "7 - 10 Años", "10 - 12 Años", "12 - 15 Años"];

        foreach ($array as $element) {
            DB::table("experiences")->insert([
                "experience" => $element
            ]);
        }
    }
}
