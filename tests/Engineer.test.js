const Engineer = require('../models/Engineer')

describe('Engineer', () => {
    it('should return the correct role', () => {
        const engineer = new Engineer('Gimli', 'gimli@dwarf.com', '1', 'gimli_dwarf');

        expect(engineer.getRole()).toBe('Engineer');
    })
});