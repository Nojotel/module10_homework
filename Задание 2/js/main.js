let x =555;
switch (typeof(x)) {
  case "number":
    console.log('X-Число')
    break;
  case "string":
    console.log('X-Cтрока')
    break;
  case "boolean":
    console.log('X-логический тип')
    break;
  default:
    console.log('Тип X не определён')
}