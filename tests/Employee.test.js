const Employee = require('../models/Employee');

describe('Employee', () => {
  it('should create an object with a name, email, and id', () => {
    const employee = new Employee('Aragorn', 'aragorn@gondor.com', 1);
    expect(employee).toEqual({ name: 'Aragorn', email: 'aragorn@gondor.com', id: 1 });
  });
});