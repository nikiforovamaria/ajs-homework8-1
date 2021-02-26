import Team from '../Team';

test('1 - should add member to team', () => {
  const team = new Team();
  team.add('bowman');
  const result = ['bowman'];
  expect(team.toArray()).toEqual(result);
});

test('2 - should add all member to team', () => {
  const team = new Team();
  team.addAll('magician', 'swordsman', 'zombie', 'bowman');
  const result = ['magician', 'swordsman', 'zombie', 'bowman'];
  expect(team.toArray()).toEqual(result);
});

test('3 - should throw an error', () => {
  const team = new Team();
  team.add('bowman');
  const result = 'Этот персонаж уже добавлен в команду';
  expect(() => {
    team.add('bowman');
  }).toThrow(result);
});

test('4 - should not throw an error', () => {
  const team = new Team();
  team.add('bowman');
  team.addAll('magician', 'swordsman', 'zombie', 'bowman');
  const result = ['bowman', 'magician', 'swordsman', 'zombie'];
  expect(team.toArray()).toEqual(result);
});
