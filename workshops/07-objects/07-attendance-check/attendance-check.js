let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

// YOUR CODE BELOW
// ### Attendance Check

// Define a function, `attendanceCheck`, that accepts a day of the week as a string.

// Using the globally-defined classRoom array, `attendanceCheck` should return a
// new array with only the names of the students present on the inputted day of
// the week.

// ```javascript

// classCheck('Monday'); // => ['Marnie', 'Shoshanna']

// classCheck('Wednesday'); // => ['Marnie', 'Lena']
// ```
function attendanceCheck(dayWeek)
{
    let newArray = [];
    let currentName = '';
    for(let i=0; i<classRoom.length; i++)
    {
        let week = Object.keys(classRoom[i]);
        console.log(week);
        // console.log(week[i]);
        for(let j=0; j<week.length; j++)
        {
            console.log(Object.keys(week)[j]);
        }

    }
}
attendanceCheck();
