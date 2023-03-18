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

    public function speciality() {
      return $this->belongsTo(Specialties::class, 'speciality_id', 'id');
    }

    public function result() {
      return $this->hasOne(Results::class, 'id');
    }
}
