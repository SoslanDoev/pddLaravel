<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Results;
use App\Http\Resources\ResultsResource;

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
          'id' => $this->id,
          'name' => $this->name,
          'surname' => $this->surname,
          'patronymic' => $this->patronymic,
          'speciality' => $this->speciality->name,
          'results' => ResultsResource::collection(Results::where('enrollee_id', $this->id)->get()), 
          // 'results' => [
            // 'posts' => PostResource::collection($this->posts),
            // $this->result
// class ResultsResource extends JsonResource

            // 'discipline' => Results::where('enrollee_id', $this->id)->get()
            // 'grade' => 
          // ],
          // 'test' => Results::where('enrollee_id', $this->id)->get(),
          // 'test' => Results::where('enrollee_id', $this->id)->get(),
        ];
    }

    public function __construct($resource)
    {
      parent::__construct($resource);
      $this->collection = $resource; 
    }
}
