


let employees=[
  { id: 1, name: 'John Doe', position: 'Software Engineer' },
  { id: 2, name: 'Jane Smith', position: 'Product Manager' },
  { id: 3, name: 'Sam Johnson', position: 'Designer' },
  { id: 4, name: 'Lisa Brown', position: 'DevOps Engineer' }
]

function getAllEmployee(){
  return employees; 
}

function getEmployeeById(id){
  return employees.find(employee => employee.id===id);
}

function addNewEmployee(employee){
  employees.push(employee);
}

module.exports={getAllEmployee,getEmployeeById,addNewEmployee};
