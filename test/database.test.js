const db = require('../src/utils/db')

test('Database connection works fine', () => {
  expect(typeof db.value())
    .toBe('object')
})

test('Groups array contain default groups', () => {
  expect(db.get('groups').value())
    .toEqual(
      expect.arrayContaining(['Business', 'Personal'])
    )
})
