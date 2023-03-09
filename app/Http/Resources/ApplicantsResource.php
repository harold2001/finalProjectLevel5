<?php

namespace App\Http\Resources;

use App\Models\Applicant;
use App\Models\Vacancy;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ApplicantsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "applicant_id" => $this->applicant_id,
            "applicant_name" => Applicant::where("id", $this->applicant_id)->first(),
            "vacancy_id" => $this->vacancy_id,
            "vacancy_name" => Vacancy::where("id", $this->vacancy_id)->first()
        ];
    }
}
