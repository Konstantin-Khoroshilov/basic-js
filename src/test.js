// // console.log(createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']), 'ADMM');
// // console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]), 'LOO');
// console.log(createDreamTeam(new Date(2020, 02, 31)), 'spring');
// console.log(createDreamTeam(), 'spring');
// function createDreamTeam(date) {
//   const currentDate = new Date();
//   console.log(date.getMonth.toString === currentDate.getMonth.toString)
//   if (date.getMonth.toString() === currentDate.getMonth.toString() && Date.parse(date)) {
//     const month = date.getMonth();
//     let season = 'trololo';
//     if (month >= 2 && month <= 4) {
//       season = 'spring';
//     } else if (month >= 5 && month <= 7) {
//       season = 'summer';
//     } else if (month >= 8 && month <= 10) {
//       season = 'autumn (fall)';
//     } else if ((month >= 0 && month <= 1) || month === 11) {
//       season = 'winter';
//     }
//     return season;
//   } else if (date === undefined) {
//     return 'Unable to determine the time of year!';
//   } else {
//     throw new Error('Invalid date!');
//   }
// }
const date = new Date();
console.log(Object.getOwnPropertyNames(date))