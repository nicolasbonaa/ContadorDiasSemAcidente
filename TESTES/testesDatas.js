let data = new Date();

var datas = [data.getDate(),data.getMonth() + 1,data.getFullYear(), data.getHours(), data.getMinutes()]


for(let i = 0; i <= datas.length; i++){
    console.log(datas.join('/'))
}