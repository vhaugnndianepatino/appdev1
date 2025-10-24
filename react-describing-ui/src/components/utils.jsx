export function getImageUrl(person) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    's.jpg'
  );
}


// v. Passing props to components
// export function getImageUrl(person, size = 's') {
//   return (
//     'https://i.imgur.com/' +
//     person.imageId +
//     size +
//     '.jpg'
//   );
// }
