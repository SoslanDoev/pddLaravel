<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>Document</title>
  @vite(['resources/sass/app.scss', 'resources/js/app.js'])
</head>
<body>
  <div class="wrapper" id="app">
    <HomeView/>
  </div>
</body>
</html>