
console.log('Record 1'); //1.выполняем (1)

setTimeout(() => {
    // 6. итерация Просто выполняем (4)
  console.log('Record 2');
    
  Promise.resolve().then(() => {

    setTimeout(() => {
        //9.Выполняем (5)
   console.log('Record 3');

    Promise.resolve().then(() => {
        //11. Выполняем (6)
      console.log('Record 4');
      }); //10. Устанавливаем в очередб микро задач
    }); //8. Устанавливаем в очередь макро задач
  }); //7. Устанавливаем в очередь микро задач
});//5.Планируем поставить в очередь макрозадач

console.log('Record 5'); //2.выполняем (2)
// 3. Ставим в очередь для микрозадач
Promise.resolve().then(()=> 
// 4. ставим в очередь микрозадач
Promise.resolve().then(() => console.log('Record 6'))); // 3 проход просто выводим и на этом закончилась первая итерация (3)

// Итого
//          Record 1
//          Record 5
//          Record 6
//          Record 2
//          Record 3
//          Record 4