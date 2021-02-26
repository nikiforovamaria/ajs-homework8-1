import Team from './Team';

console.log('worked');

const team = new Team();
team.add('bowman');
console.log(team);
team.addAll('magician', 'swordsman', 'zombie', 'bowman');
console.log(team);
console.log(team.toArray());
