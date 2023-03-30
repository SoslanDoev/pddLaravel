<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Results;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\ResultsResource;

class ResultsController extends Controller
{
  public function index() {
    // $data = Results::all();
    // return response()->json($data);
    // return ResultsResource::collection(Results::paginate(500)); # Работает
    return ResultsResource::collection(Results::with()->paginate(5));

    // $country  = Country::find(1);
    // $user =    $country->user;
    // $name = $user->name; //Vova

    // return Results::where('id', 2);
    // return ResultsResource::collection(Results::where('id', 2)->paginate(500));
    // return ResultsResource::collection(Results::with('speciality_id')->paginate(500));
    // return ResultsResource::collection(Results::where('subject', Сочинение)->get());
    // "subject": "Сочинение",
    // return ResultsResource::collection(Results::where('name', 3)->get());
    // return ResultsResource::collection(Results::all());
    // return ResultsResource::collection(Results::get());
  }

  public function store(Request $req) {
    $validator = Validator::make($req->all(), [
      'enrollee_id' => 'required|min:1|max:255|exists:applicants,id',
      'discipline_id' => 'required|min:1|max:255|exists:disciplines,id',
      'rating' => 'required|min:0|max:255',
    ]);
    if ($validator->fails())
      return response()->json($validator->errors());
    $data = Results::create($req->all());
    if (!$data)
      return response()->json('Ошибка');
    return response()->json($data);
  }

  public function show($id) {
    $data = Results::find($id);
    return response()->json($data);
  }

  public function update(Request $req, $id) {
      $data = Results::find($id);
      if (!$data)
        return response()->json('Запись не найдена');
      $validator = Validator::make($req->all(), [
        'enrollee_id' => 'required|min:1|max:255|exists:applicants,id',
        'discipline_id' => 'required|min:1|max:255|exists:disciplines,id',
        'rating' => 'required|min:0|max:255',
      ]);
      if ($validator->fails())
          return response()->json($validator->errors());
      $result = $data->update($req->all());
      return $result;
      if (!$result)
          return response()->json('Ошибка');
      return response()->json($result);
  }

  public function destroy($id) {
    $data = Results::find($id);
    if (!$data)
      return response()->json('Ошибка');
    $data->delete();
    return response()->json('Запись удалена');
  }
}
