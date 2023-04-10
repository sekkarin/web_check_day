
const testDate = {
    day: function(fullDate){
        let dt = new Date(fullDate);
    // let dateThai = dt.toLocaleDateString("th-Th",{
    //     year:"numeric",
    //     month:"long",
    //     day:"numeric",
    //     weekday:"long"
    // })
    let days = ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"]
    // return { date: dateThai|| "No data",day:days[dt.getDay()] || "No date"}
    return days[dt.getDay()]
    }

}
// console.log(getDay("2023-04-10"));
module.exports = testDate