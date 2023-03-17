<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Disciplines;
use Illuminate\Support\Facades\Validator;

class DisciplinesController extends Controller
{
  public function index() {
    $data = Disciplines::all();
    return response()->json($data);
  }

  public function store(Request $req) {
    $validator = Validator::make($req->all(), [
      'name' => 'required|min:2|max:50|unique:disciplines',
    ]);
    if ($validator->fails())
      return response()->json($validator->errors());
    $data = Disciplines::create($req->all());
    if (!$data)
      return response()->json('Ошибка');
    return response()->json($data);
  }

  public function show($id) {
    $data = Disciplines::find($id);
    return response()->json($data);
  }

  public function update(Request $req, $id) {
      $data = Disciplines::find($id);
      if (!$data)
        return response()->json('Запись не найдена');
      $validator = Validator::make($req->all(), [
          'name' => 'required|min:2|max:50|unique:disciplines',
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
    $data = Disciplines::find($id);
    if (!$data)
      return response()->json('Ошибка');
    $data->delete();
    return response()->json('Запись удалена');
  }
}
