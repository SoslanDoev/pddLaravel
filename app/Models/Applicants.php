<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Specialties;
use App\Models\Results;

class Applicants extends Model
{
    use HasFactory;
    public $table = 'applicants';
    public $timestamps = true;
    protected $fillable = [ 
      'name', 'surname', 'patronymic', 'speciality_id',
    ];

    // Связь со специальностью
    public function speciality() {
      return $this->hasOne(Specialties::class, 'speciality_id', 'id');
    }
}
