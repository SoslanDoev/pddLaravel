<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ResultsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        return [
          'id' => $this->id,
          'name' => $this->enrollee->name,
          'surname' => $this->enrollee->surname,
          'patronymic' => $this->enrollee->patronymic,
          'speciality_id' => $this->enrollee->speciality->id,
          // 'test' => $this->enrollee::where('id', 5)->first(),
          'speciality' => $this->enrollee->speciality->name,
          'subject' => $this->discipline->name,
          'grade' => $this->grade,
        ];
    }
}
