

// 1)

// function saveSettings(settings){
//     console.log(settings);
// }

// saveSettings({
//     follow: true,
//     alert: true,
//     mkt: true,
//     color: "green"
// });




// 2)

// function saveSettings(settings){
//     console.log(settings);

//     if(!settings.mkt){      // 마케팅을 false 하였을 경우의 함수

//     }
// }

// saveSettings({
//     follow: true,
//     alert: true,
//     mkt: false,
//     // color: "green"
// });


// 3)
function saveSettings({notifications, color: {theme} }) {
    console.log(theme);
}

saveSettings({
    notifications:{
        follow: true,
        alert: true,
        mkt: false,
    },
    color:{
        theme: 'blue'
    }
});