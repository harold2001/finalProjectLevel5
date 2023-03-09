<?php

namespace App\Http\Controllers;

use App\Http\Resources\ResultsResource;
use App\Models\Applicant;
use App\Models\ApplicantVacancy;
use App\Models\Vacancy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class VacancyViewController extends Controller
{
    public function index(Request $data)
    {
        $idGet = $data["id"];

        $vacancy = DB::table('vacancies')->where("id", $idGet)->get();

        return Inertia::render("Vacancies/Index", [
            "vacancy" => ResultsResource::collection($vacancy),
            "url" => route("vacancyview.store"),
            "datos" => $data
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    public function store(Request $data)
    {
        $idVacancy = $data->id;

        if ($data->hasFile("curriculum")) {
            // Archivo
            $archivo = $data->file("curriculum");
            $archivo->move(public_path() . "/pdf/", $archivo->getClientOriginalName());
            $archivoname = $archivo->getClientOriginalName();

            $data->validate([
                "name" => "required|max:190",
                "email" => "required|max:190|email",
            ]);

            Applicant::create([
                "name" => $data->name,
                "email" => $data->email,
                "cv_name" => $archivoname,
            ]);

            $newApplicant = DB::table("applicants")->where("name", $data->name)->where("email", $data->email)->where("cv_name", $archivoname)->first();

            $idNewApplicant = $newApplicant->id;

            ApplicantVacancy::create([
                "applicant_id" => $idNewApplicant,
                "vacancy_id" => $idVacancy,
            ]);

            return to_route("vacancies_index", ["id" => $idVacancy])->with('message', 'Acabamos de subir su información. ¡Suerte!');
        } else {
            return to_route("vacancies_index", ["id" => $idVacancy])->with('message', 'Falta información en el formulario');
        }
    }

    public function show(Request $data)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    public function update(Request $request, string $id)
    {
        $vacancy = Vacancy::where("id", $id)->first();

        $active = $vacancy->active;

        if ($active === 1) {
            $vacancy->active = 0;
        } else {
            $vacancy->active = 1;
        }

        $vacancy->save();

        return to_route("logged.index");
    }

    public function destroy(string $id)
    {
        //
    }
}
