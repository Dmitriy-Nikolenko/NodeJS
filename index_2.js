const EventEmitter = require('events');

let data = process.argv[2];

if(data) {
    data = data.split('-')
    if((data[0]>=0 && data[0]<=24)  &&
        (data[1]>=1 && data[1]<=31) &&
        (data[2]>=1 && data[2]<=12) &&
        (data[3]>=1 && data[3]<=9999)) {
        let hours_sec = data[0] * 60 * 60;
        let day_sec = data[1] * 12 * hours_sec ;
        let mouth_sec = data[2] * 30 * day_sec;
        let year_sec = data[3] * 365 * mouth_sec;

        console.log(hours_sec, " секунд в " + data[0] + " часах");
        console.log(day_sec, " секунд в " + data[1] + " днях");
        console.log(mouth_sec, " секунд в  " + data[2] + " месяцах");
        console.log(year_sec, " секунд в  " + data[3] + " годах");

        function timer(data_time, nameTimer) {
            timeValue = setInterval((interval) => {
                console.log( "осталось " + data_time + " секунд работы таймера" + nameTimer);
                data_time = data_time - 1;
                if (data_time <= 0) {
                    console.log('Завершение работы таймера' + nameTimer)
                    clearInterval(timeValue)
                }

            }, 1000);

        }
        class MyEmitter extends EventEmitter {}

        const myEmitter = new MyEmitter();
        myEmitter.on('timer_hours', () => { timer(hours_sec, " часов")});
        myEmitter.on('timer_day', () => { timer(day_sec, " дней")});
        myEmitter.on('timer_mouth', () => { timer(mouth_sec, " месяцев")});
        myEmitter.on('timer_year', () => { timer(year_sec, " лет")});
        myEmitter.emit('timer_hours');
//myEmitter.emit('timer_day');
//myEmitter.emit('timer_mouth');
//myEmitter.emit('timer_year');
    }
else {
        console.log("Введите корректные данные")
    }

} else
{
    console.log("Введите корректные данные")
}

