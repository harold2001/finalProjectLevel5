<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApplicantVacancy extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = ["applicant_id", "vacancy_id"];
}
