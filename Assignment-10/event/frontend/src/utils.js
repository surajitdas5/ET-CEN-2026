export function dateForamtter(date){
    let fdate = new Date(date.split("T")[0])
    return `${fdate.getDate()}/${fdate.getMonth()+1}/${fdate.getFullYear()}`
}