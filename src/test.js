// console.log(createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']), 'ADMM');
// console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]), 'LOO');
console.log(createDreamTeam([
  ['David Abram'],
  ['Robin Attfield'],
  'Thomas Berry',
  ['Paul R.Ehrlich'],
  'donna Haraway',
  ' BrIaN_gOodWiN  ',
  {
    0: 'Serenella Iovino'
  },
  'Erazim Kohak',
  '  val_plumwood',
]), 'BDETV');
function createDreamTeam(members) {
  if (Array.isArray(members)) {
    const result = [];
    members.forEach(member => {
      if (typeof member === 'string') {
        const trimmedMember = member.replace(/\s/gi, '');
        result.push(trimmedMember[0].toUpperCase());
      }
    });

    return result.sort().join('');
  } else {
    return false;
  }
}