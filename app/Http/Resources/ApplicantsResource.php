<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ApplicantsResource extends JsonResource
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
          // 'data' => $this->collection,
          'name' => $this->name,
          'surname' => $this->surname,
          'patronymic' => $this->patronymic,
          'speciality' => $this->speciality->name,
        ];
    }

    public function __construct($resource)
    {
      parent::__construct($resource);
      $this->collection = $resource; 
    }
}
