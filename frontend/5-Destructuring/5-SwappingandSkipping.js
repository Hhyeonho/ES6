

// 1) Swapping
let mon = "Sat";
let sat = "Mon";

// [sat, mon] = ["Sat", "Mon"];
[sat, mon] = [mon, sat];
console.log([sat, mon])


// 2) Skipping(Omitting)
const days = ["mon", "tue", "wed", "thu", "fri", "sun"];

// const[mon, tue] = days;
const[, , , thu, fri] = days;

console.log(thu, fri)

