<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $array = ["Front End", "Backend", "Full Stack", "DevOps", "DBA", "UX / UI", "Techlead"];

        foreach ($array as $element) {
            DB::table("categories")->insert([
                "category" => $element
            ]);
        }
    }
}
