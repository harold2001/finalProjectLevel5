<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LocationsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $array = ["Remoto", "USA", "Canada", "México", "Colombia", "Argentina", "España"];

        foreach ($array as $element) {
            DB::table("locations")->insert([
                "location" => $element
            ]);
        }
    }
}
