<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AbilitiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $array = ["HTML5", "CSS3", "CSSGrid", "Flexbox", "JavaScript", "jQuery", "Node", "Angular", "VueJS", "ReactJS", "React Hooks", "Redux", "Apollo", "GraphQL", "TypeScript", "PHP", "Laravel", "Symfony", "Python", "Django", "ORM", "Sequelize", "Mongoose", "SQL", "MVC", "SASS", "WordPress", "Express", "Deno", "React Native", "Flutter", "MobX", "C#", "Ruby on Rails"];

        foreach ($array as $element) {
            DB::table("abilities")->insert([
                "ability" => $element
            ]);
        }
    }
}
