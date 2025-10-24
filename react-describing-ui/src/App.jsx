import { people } from './components/data';
import { getImageUrl } from './components/utils';

export default function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}


//conditionally render components
// import PackingList from './components/PackingList';

// function App() {
//   return (
//     <section>
      
//       <PackingList />  
//     </section>
//   );
// }

// export default App;


//task 5
// import { getImageUrl } from './components/utils.jsx'

// export default function Profile() {
//   return (
//     <Card>
//       <Avatar
//         size={100}
//         person={{
//           name: 'Katsuko Saruhashi',
//           imageId: 'YfeOqp2'
//         }}
//       />
//     </Card>
//   );
// }
// function Avatar({ person, size }) {
//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// function Card({ children }) {
//   return (
//     <div className="card">
//       {children}
//     </div>
//   );
// }


//How to use curly braces with JSX to access JavaScript functionality from your components
// const person = {
//   name: 'Gregorio Y. Zara',
//   theme: {
//     backgroundColor: 'black',
//     color: 'pink'
//   }
// };

// export default function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}'s Todos</h1>
//       <img
//         className="avatar"
//         src="https://i.imgur.com/7vQD0fPs.jpg"
//         alt="Gregorio Y. Zara"
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }


//iii. How to add markup to JavaScript with JSX
// export default function TodoList() {
//   return (
//     <>
//       <h1>Hedy Lamarr's Todos</h1>
//       <img
//         src="https://i.imgur.com/yXOvdOSs.jpg"
//         alt="Hedy Lamarr"
//         className="photo"
//       />
//       <ul>
//         <li>Invent new traffic lights</li>
//         <li>Rehearse a movie scene</li>
//         <li>Improve spectrum technology</li>
//       </ul>
//     </>
//   );
// }


// ii. When and how to create multi-component files
// import Gallery from "./components/Gallery";  

// export default function App() {
//   return <Gallery />;
// } 

// i. How to write your first React component
// function Profile() {
//   return (
//     <img
//       className="profile-img"
//       src="https://i.imgur.com/MK3eW3As.jpg"
//       alt="Katherine Johnson"
//     />
//   );
// }
// export default function Gallery() {
//   return (
//     <section>
//       <h1 className="title">Amazing scientists</h1>
//       <Profile /> 
//       <Profile />
//       <Profile />
//     </section>
//   );
// } 


