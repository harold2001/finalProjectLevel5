<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("users")->insert([
            "name" => "Harold Carazas Mires",
            "email" => "admin@admin.com",
            "password" => bcrypt("admin"),
        ]);
        
        User::factory(5)->create();
    }
}
