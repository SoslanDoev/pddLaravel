<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DisciplineSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      \DB::table('disciplines')->insert([
        [
          'name' => 'Физика' ,
          'created_at' => now(),
          'updated_at' => now(),
        ],
        [
          'name' => 'Математика' ,
          'created_at' => now(),
          'updated_at' => now(),
        ],
        [
          'name' => 'Русский' ,
          'created_at' => now(),
          'updated_at' => now(),
        ],
        [
          'name' => 'Информатика' ,
          'created_at' => now(),
          'updated_at' => now(),
        ],
      ]);
    }
}
