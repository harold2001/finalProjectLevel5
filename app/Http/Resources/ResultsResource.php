<?php

namespace App\Http\Resources;

use App\Models\Ability;
use App\Models\AbilityVacancy;
use App\Models\ApplicantVacancy;
use App\Models\Category;
use App\Models\Experience;
use App\Models\Location;
use App\Models\Salary;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class ResultsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'user_name' => User::where("id", "=", $this->user_id)->first(),
            'category_id' => $this->category_id,
            'category_name' => Category::where("id", "=", $this->category_id)->first(),
            'experience_id' => $this->experience_id,
            'experience_name' => Experience::where("id", "=", $this->experience_id)->first(),
            'location_id' => $this->location_id,
            'location_name' => Location::where("id", "=", $this->location_id)->first(),
            'salary_id' => $this->salary_id,
            'salary_name' => Salary::where("id", "=", $this->salary_id)->first(),
            'title' => $this->title,
            'description' => $this->description,
            'active' => $this->active,
            'abilities' => AbilitiesResource::collection(AbilityVacancy::where("vacancy_id", "=", $this->id)->get()),
            'applicants' => ApplicantsResource::collection(ApplicantVacancy::where("vacancy_id", $this->id)->get()),
            'active' => $this->active
        ];
    }
}
