<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Results;

class Disciplines extends Model
{
    use HasFactory;
    public $table = 'disciplines';
    public $timestamps = true;
    protected $fillable = [ 
      'name',
    ];

    // Связь с баллами
    public function results() {
      return $this->hasOne(Results::class, 'discipline_id', 'id');
    }
}
