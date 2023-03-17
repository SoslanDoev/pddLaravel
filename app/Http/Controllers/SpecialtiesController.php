<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Specialties;
use Illuminate\Support\Facades\Validator;

class SpecialtiesController extends Controller
{
  public function index() {
    $data = Specialties::all();
    return response()->json($data);
  }

  public function store(Request $req) {
    $validator = Validator::make($req->all(), [
      'name' => 'required|min:2|max:50|unique:specialties',
    ]);
    if ($validator->fails())
      return response()->json($validator->errors());
    $data = Specialties::create($req->all());
    if (!$data)
      return response()->json('Ошибка');
    return response()->json($data);
  }

  public function show($id) {
    $data = Specialties::find($id);
    return response()->json($data);
  }

  public function update(Request $req, $id) {
      $data = Specialties::find($id);
      if (!$data)
        return response()->json('Запись не найдена');
      $validator = Validator::make($req->all(), [
          'name' => 'required|min:2|max:50|unique:specialties',
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
    $data = Specialties::find($id);
    if (!$data)
      return response()->json('Ошибка');
    $data->delete();
    return response()->json('Запись удалена');
  }
}
