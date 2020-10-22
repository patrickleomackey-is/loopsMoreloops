/* 
 * initialize an arry with a set of 5 test scores
 * calculate the average score
 * display the grade according to the following scale:
 *      90+ = A
 *      80-89 = B
 *      70-79 = C
 *      60-69 = D
 *      <60 = F
 *   ??   
 * BONUS: Get scores from the user instead of initializing them in the program
 */

document.write("<p>Grade calculation program</p>");
let grade = [];
let numberOftests = Number(prompt("Enter the number of tests to grade"));
for (i = 0;i < numberOftests; i++){
    grade.push(Number(prompt("Enter the test score")));
    if (grade[i] >= 90)
                       {document.write("<br>A");}
    
    if ((grade[i] >= 80)&&(grade[i]<= 89))
                                          {document.write("<br>B");}
    
    if ((grade[i] >= 70)&&(grade[i] <= 79))
                                            {document.write("<br>C");}
    if ((grade[i] >= 60)&&(grade[i] <= 69))
                                           {document.write("<br>D");}
    if (grade[i] < 60)
                      {document.write('<br>F');}                                       
        
}
let total = 0;
for(var i in grade){total += grade[i];}

document.write("<br>"+ (total/ grade.length)+"  is the average test score");