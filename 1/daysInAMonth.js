function demo(month, year) {
    let result = new Date(year, month, 0).getDate();
    console.log(result);
}
demo(1,2012)
demo(2,2021)