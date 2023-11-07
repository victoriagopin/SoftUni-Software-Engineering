// Write a function, which keeps the information about companies and their employees.
// You will receive an array of strings containing the company name and employee's id. Add each employee to the
// given company. Keep in mind that a company cannot have two employees with the same id.
// When you finish reading data, order the companies by their name in ascending order.
// Print the company name and each employee's id in the following format:
// {companyName}
// -- {id1}
// -- {id2}
// -- {idN}
// Input / Constraints
// • The input come as array of strings, each in the format: "{companyName} -> {employeeId}".
// • The input always will be valid.

function companyUsers(arr) {
    let companiesEmployees = {};

    for (let el of arr) {
        let [companyName, id] = el.split(' -> ');

        if (companyName in companiesEmployees) {
            if (!companiesEmployees[companyName].includes(id)) {
                companiesEmployees[companyName].push(id);
            }
        } else {
            companiesEmployees[companyName] = [id];
        }
    }

    let entries = Object.entries(companiesEmployees).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, ids] of entries) {
        console.log(name);
        ids.forEach(id => console.log(`-- ${id}`));
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);