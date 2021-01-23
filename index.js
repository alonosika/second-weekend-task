const subjects = [
    {startedAt: new Date("2021-01-20:17:00"),   
    finishedAt: new Date("2021-01-20:18:00"),
    tasksGiven: 16,
    tasksFinished: 15,
    topic: "HTML"},

    {startedAt: new Date("2021-01-20:16:00"),   
    finishedAt: new Date("2021-01-20:19:00"),
    tasksGiven: 28,
    tasksFinished: 22,
    topic: "CSS"},

    {startedAt: new Date("2021-01-20:11:00"),   
    finishedAt: new Date("2021-01-20:13:00"),
    tasksGiven: 20,
    tasksFinished: 14,
    topic: "Github"},

    {startedAt: new Date("2021-01-20:09:00"),   
    finishedAt: new Date("2021-01-20:17:00"),
    tasksGiven: 15,
    tasksFinished: 8,
    topic: "More HTML"},

    {startedAt: new Date("2021-01-20:13:30"),   
    finishedAt: new Date("2021-01-20:16:30"),
    tasksGiven: 25,
    tasksFinished: 25,
    topic: "JavaScript"},

    {startedAt: new Date("2021-01-20:11:00"),   
    finishedAt: new Date("2021-01-20:12:30"),
    tasksGiven: 16,
    tasksFinished: 8,
    topic: "Loops"},

    {startedAt: new Date("2021-01-20:09:00"),   
    finishedAt: new Date("2021-01-20:15:30"),
    tasksGiven: 23,
    tasksFinished: 2,
    topic: "Conditions"},

    {startedAt: new Date("2021-01-20:10:00"),   
    finishedAt: new Date("2021-01-20:18:00"),
    tasksGiven: 30,
    tasksFinished: 20,
    topic: "Arrays"},

    {startedAt: new Date("2021-01-20:14:30"),   
    finishedAt: new Date("2021-01-20:15:00"),
    tasksGiven: 20,
    tasksFinished: 15,
    topic: "Objects"},
    
    {startedAt: new Date("2021-01-20:17:00"),   
    finishedAt: new Date("2021-01-20:19:00"),
    tasksGiven: 7,
    tasksFinished:6,
    topic: "Functions"}
];

for(const subject of subjects) {
    subject.totalTime = (subject.finishedAt - subject.startedAt) / 3600000; 
        subject.tasksFinishedPercent = Math.floor(100*subject.tasksFinished/subject.tasksGiven);
    }
    
    document.write("<table>");
    document.write("<tr>");
    document.write("<th>Topic</th>");
    document.write("<th>Started At</th>");
    document.write("<th>Finished At</th>");
    document.write("<th>Total Time Spent</th>");
    document.write("<th>Tasks Given</th>");
    document.write("<th>Tasks Finished</th>");
    document.write("<th>Tasks Finished %</th>");
    document.write("</tr>");
    
    for (const subject of subjects) {
        document.write("<tr>");
        document.write(`<td>${subject.topic}</td>`);
        document.write(`<td>${formatTime(subject.startedAt)}</td>`);
        document.write(`<td>${formatTime(subject.finishedAt)}</td>`);
        let color = timeColor(subject.totalTime);
        document.write(`<td style = "background-color:${color}">${subject.totalTime}</td>`);
        document.write(`<td>${subject.tasksGiven}</td>`);
        document.write(`<td>${subject.tasksFinished}</td>`);
        color = percentColor(subject.tasksFinishedPercent);
        document.write(`<td style = "background-color:${color}">${subject.tasksFinishedPercent}%</td>`);
        document.write("</tr>");
    }
    document.write("</table>");
    
    function formatTime(date) {
        const hrs = date.getHours();
        const min = date.getMinutes();
        const hrsStr = hrs === 0 ? "00" : hrs < 10 ? "0" + hrs : hrs; 
            const minStr = min === 0 ? "00" : min < 10 ? "0" + min : hrs;
            return hrsStr + ":" + minStr; 
        }
    
        function timeColor (time) {
            return time <= 2 ? "green" : time <= 5 ? "orange" : "red"; 
        }
    
        function percentColor (percent) {
            return percent <= 50 ? "red" : percent <= 75 ? "orange" : "green"; 
        }
