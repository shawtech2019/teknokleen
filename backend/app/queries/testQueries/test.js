const testQueries = {
  getAllTest: `SELECT * FROM Persons`,
  createTest: (data) => `INSERT INTO Persons 
  (LastName, FirstName, Address, City) VALUES 
  ('${data[0]}', '${data[1]}', '${data[2]}', '${data[3]}')`,
};

module.exports = testQueries;
