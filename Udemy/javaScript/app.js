const myStudents = [
    {
        firstName : 'Basava',
        score : 97
    },
    {
        firstName : 'kiran',
        score : 96
    },
    {
        firstName : 'Sherya',
        score : 98
    },
    {
        firstName : 'Gandhi',
        score : 95
    }
];


for (let i=0; i<myStudents.length; i++){
    let student = myStudents[i];
    console.log(`${student.firstName} as scored ${student.score}`)
}