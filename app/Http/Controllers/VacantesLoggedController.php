<?php

namespace App\Http\Controllers;

use App\Http\Resources\ResultsResource;
use App\Models\Ability;
use App\Models\AbilityVacancy;
use App\Models\Category;
use App\Models\Experience;
use App\Models\Location;
use App\Models\Salary;
use App\Models\User;
use App\Models\Vacancy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class VacantesLoggedController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $myId = Auth::user()->id;
        $me = User::where("id", $myId)->first();
        $myVacancies = DB::table("vacancies")->where("user_id", $myId)->get();
        // return $me;
        return Inertia::render("Logged/Vacantes", [
            "me" => $me,
            "mydata" => ResultsResource::collection($myVacancies)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $myId = Auth::user()->id;
        $me = User::where("id", $myId)->first();
        $myVacancies = DB::table("vacancies")->where("user_id", $myId)->get();
        $categories = Category::all();
        $experiences = Experience::all();
        $locations = Location::all();
        $salaries = Salary::all();
        $abilities = Ability::all();
        // return $me;
        return Inertia::render("Logged/Create", [
            "me" => $me,
            "mydata" => ResultsResource::collection($myVacancies),
            "categories" => $categories,
            "experiences" => $experiences,
            "locations" => $locations,
            "salaries" => $salaries,
            "abilities" => $abilities,
            "url" => route("logged.store")
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $myId = Auth::user()->id;

        $newVacancy = new Vacancy();
        $newVacancy->user_id = $myId;
        $newVacancy->category_id = $request->category;
        $newVacancy->experience_id = $request->experience;
        $newVacancy->location_id = $request->location;
        $newVacancy->salary_id = $request->salary;
        $newVacancy->title = $request->title;
        $newVacancy->description = $request->description;
        $newVacancy->active = 0;

        $newVacancy->save();

        $vacancyCreated = DB::table("vacancies")
            ->where("user_id", $myId)
            ->where("category_id", $request->category)
            ->where("experience_id", $request->experience)
            ->where("location_id", $request->location)
            ->where("salary_id", $request->salary)
            ->where("title", $request->title)
            ->where("description", $request->description)
            ->where("active", 0)->first();

        $arrayAbilities = $request->abilities;

        foreach ($arrayAbilities as $abilityId) {
            $newAbility = new AbilityVacancy();
            $newAbility->vacancy_id = $vacancyCreated->id;
            $newAbility->ability_id = $abilityId;
            $newAbility->save();
        }

        return $request->abilities;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $myId = Auth::user()->id;
        $me = User::where("id", $myId)->first();
        $myVacancies = DB::table("vacancies")->where("id", $id)->get();
        $categories = Category::all();
        $experiences = Experience::all();
        $locations = Location::all();
        $salaries = Salary::all();
        $abilities = Ability::all();
        return Inertia::render("Logged/Edit", [
            "me" => $me,
            "mydata" => ResultsResource::collection($myVacancies),
            "categories" => $categories,
            "experiences" => $experiences,
            "locations" => $locations,
            "salaries" => $salaries,
            "abilities" => $abilities,
            "url" => route("logged.update", ["vacante" => $myVacancies[0]->id])
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $vacancy = Vacancy::where("id", $id)->first();
        $vacancy->category_id = $request->category;
        $vacancy->experience_id = $request->experience;
        $vacancy->location_id = $request->location;
        $vacancy->salary_id = $request->salary;
        $vacancy->title = $request->title;
        $vacancy->description = $request->description;

        $vacancy->save();

        $abilities = AbilityVacancy::where("vacancy_id", $id)->get();

        foreach ($abilities as $ability) {
            $ability->delete();
        }

        $arrayAbilities = $request->abilities;

        foreach ($arrayAbilities as $abilityId) {
            $newAbility = new AbilityVacancy();
            $newAbility->vacancy_id = $id;
            $newAbility->ability_id = $abilityId;
            $newAbility->save();
        }

        return to_route("logged.edit", ["vacante" => $id]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $data)
    {
        $idVacancy = $data->id;

        $vacancy = Vacancy::where("id", $idVacancy)->first();

        $vacancy->delete();

        return to_route("logged.index");
    }
}
