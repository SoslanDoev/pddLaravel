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
    return ResultsResource::collection(Results::paginate(10));
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
