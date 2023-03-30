<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Applicants;

class Specialties extends Model
{
    use HasFactory;
    public $table = 'specialties';
    public $timestamps = true;
    protected $fillable = [ 
      'name', 'updated_at', 'created_at',
    ];

    // public function enrollee() { 
    //   return $this->belongsTo(Applicants::class, 'speciality_id', 'id');
    // }
    public function enrollee() {
      return $this->hasOne(Applicants::class, 'id');
    }
}
