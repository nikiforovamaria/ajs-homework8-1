export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    if (this.members.has(member)) {
      throw new Error('Этот персонаж уже добавлен в команду');
    } else {
      this.members.add(member);
    }
  }

  addAll(...all) {
    all.forEach((member) => this.members.add(member));
  }

  toArray() {
    return [...this.members];
  }
}
