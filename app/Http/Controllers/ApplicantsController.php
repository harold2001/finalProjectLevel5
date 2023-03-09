<?php

namespace App\Http\Controllers;

use App\Http\Resources\ApplicantsResource;
use App\Http\Resources\ResultsResource;
use App\Models\ApplicantVacancy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ApplicantsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $data)
    {
        $vacancyId = $data->id;
        $myId = Auth::user()->id;
        $applicants = ApplicantVacancy::where("vacancy_id", "=",$vacancyId)->get();

        // $applicantsData = ApplicantsResource::collection($applicants);

        // return $applicantsData;
        return Inertia::render("Applicants/Index", [
            "data" => ApplicantsResource::collection($applicants)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
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

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
