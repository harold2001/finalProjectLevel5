<?php

namespace App\Http\Controllers;

use App\Http\Resources\ResultsResource;
use App\Models\Category;
use App\Models\Location;
use App\Models\Vacancy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use PHPUnit\Framework\MockObject\Rule\Parameters;

class ResultsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $data)
    {
        $category = $data["category"];
        $location = $data["location"];



        if (((isset($category)) && ($category !== "")) && ((isset($location)) && ($location !== ""))) {
            $data = DB::table('vacancies')->where("category_id", "=", $category)->where("location_id", "=", $location)->get();
        } else if ((isset($category)) && ($category !== "")) {
            $data = DB::table('vacancies')->where("category_id", "=", $category)->get();
        } elseif ((isset($location)) && ($location !== "")) {
            $data = DB::table('vacancies')->where("location_id", "=", $location)->get();
        }
        
        // echo($resultado[0]);
        // return Inertia::render("Welcome/Results", ["data" => $resultado]);
        return Inertia::render("Welcome/Results", [
            "data" => ResultsResource::collection($data),
            "category" => $category,
            "location" => $location
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
