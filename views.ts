const { BASE_PATH = "http://localhost:3004" } = process.env;

export const main = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Пример</title>
</head>
<body>
  <form action="${BASE_PATH}/submit" method="POST" enctype="text/plain">
    <h1>Hi!</h1>
    <button>Жми и получишь результат!</button>
  </form>
</body>
</html>
`;

export const backToMain = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Пример</title>
</head>
<body>
  <h1>Hi!</h1>
  <a href="${BASE_PATH}">Жми и вернешься назад!</a>
</body>
</html>
`;
