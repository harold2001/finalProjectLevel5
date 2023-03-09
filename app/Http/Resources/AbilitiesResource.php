<?php

namespace App\Http\Resources;

use App\Models\Ability;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AbilitiesResource extends JsonResource
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
            "ability_id" => $this->ability_id,
            "vacancy_id" => $this->vacancy_id,
            "ability_name" => Ability::where("id", "=", $this->ability_id)->first()
        ];
    }
}
