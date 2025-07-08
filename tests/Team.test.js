import Team from '../src/Team';

describe('Класс Team', () => {
  test('Создание команды', () => {
    const team = new Team();
    expect(team.members.size).toBe(0);
  });

  test('Добавление персонажа в команду', () => {
    const team = new Team();
    team.add('Лучник');
    const expectedTeam = new Set(['Лучник']);
    expect(team.members).toEqual(expectedTeam);
  });

  test('Попытка добавления дубликата персонажа', () => {
    const team = new Team();
    team.add('Лучник');
    expect(() => team.add('Лучник')).toThrow('Этот персонаж уже в команде');
  });

  test('Добавление нескольких персонажей', () => {
    const team = new Team();
    team.addAll('Лучник', 'Мечник', 'Маг');
    const expectedTeam = new Set(['Лучник', 'Мечник', 'Маг']);
    expect(team.members).toEqual(expectedTeam);
  });

  test('addAll не добавляет дубликаты', () => {
    const team = new Team();
    team.addAll('Лучник', 'Мечник', 'Лучник');
    const expectedTeam = new Set(['Лучник', 'Мечник']);
    expect(team.members).toEqual(expectedTeam);
  });

  test('Преобразование в массив', () => {
    const team = new Team();
    team.addAll('Лучник', 'Мечник', 'Маг');
    const teamArray = team.toArray();
    expect(teamArray).toEqual(['Лучник', 'Мечник', 'Маг']);
  });
});