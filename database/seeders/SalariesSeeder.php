<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SalariesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $array = ["0 - 1000 USD", "1000 - 2000 USD", "2000 - 4000 USD", "No Mostrar"];

        foreach ($array as $element) {
            DB::table("salaries")->insert([
                "salary" => $element
            ]);
        }
    }
}
