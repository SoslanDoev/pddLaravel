<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Applicants;
use Illuminate\Support\Facades\Validator;

class ApplicantsController extends Controller
{
  public function index() {
    $data = Applicants::all();
    return response()->json($data);
  }

  public function store(Request $req) {
    $validator = Validator::make($req->all(), [
      'name' => 'required|min:2|max:50',
      'surname' => 'required|min:2|max:50',
      'patronymic' => 'required|min:2|max:50',
      'speciality_id' => 'required|min:1|max:255|exists:specialties,id',
    ]);
    if ($validator->fails())
      return response()->json($validator->errors());
    $data = Applicants::create($req->all());
    if (!$data)
      return response()->json('Ошибка');
    return response()->json($data);
  }

  public function show($id) {
    $data = Applicants::find($id);
    return response()->json($data);
  }

  public function update(Request $req, $id) {
      $data = Applicants::find($id);
      if (!$data)
        return response()->json('Запись не найдена');
      $validator = Validator::make($req->all(), [
        'name' => 'required|min:2|max:50',
        'surname' => 'required|min:2|max:50',
        'patronymic' => 'required|min:2|max:50',
        'speciality_id' => 'required|min:1|max:255|exists:specialties,id',
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
    $data = Applicants::find($id);
    if (!$data)
      return response()->json('Ошибка');
    $data->delete();
    return response()->json('Запись удалена');
  }
}
