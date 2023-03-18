<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SpecialtieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      \DB::table('specialties')->insert([
        [
          'name' => 'Специальность_1' ,
          'created_at' => now(),
          'updated_at' => now(),
        ],
        [
          'name' => 'Специальность_2' ,
          'created_at' => now(),
          'updated_at' => now(),
        ],
        [
          'name' => 'Специальность_3' ,
          'created_at' => now(),
          'updated_at' => now(),
        ],
        [
          'name' => 'Специальность_4' ,
          'created_at' => now(),
          'updated_at' => now(),
        ],
      ]);
    }
}
