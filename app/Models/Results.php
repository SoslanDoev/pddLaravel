<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Applicants;
use App\Models\Disciplines;

class Results extends Model
{
    use HasFactory;
    public $table = 'results';
    public $timestamps = true;
    protected $fillable = [ 
      'enrollee_id', 'discipline_id', 'rating',
    ];

    // Связь с абитуриентом
    public function enrollee() {
      return $this->belongsTo(Applicants::class, 'enrollee_id', 'id');
    }
    
    // Связь с дисциплиной
    public function disciplines() { 
      return $this->belongsTo(Disciplines::class, 'discipline_id', 'id');
    }
}
