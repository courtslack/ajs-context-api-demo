
App.jsx — My React Notes

What Does App.jsx Do?

- App is a React function component.
- It displays my Layout component.
- App is wrapped inside UserProvider in main.jsx.

-- old code

import Layout from './components/Layout';
// Imports the Layout component from the components folder.

import './App.css';
// Imports the CSS for styling.

// App is my React function component.
const App = () => {

    const [user, setUser] = useState({
      name: 'This is your name'
     });

  // We no longer need useState here because
  // UserProvider now stores and manages the user data.

   return <Layout user={user} setUser={setUser} />;

  // We no longer pass user and setUser as props.
  // The Provider shares this data through Context.
  // Components can access it using useContext().
  return <Layout />;
};

export default App;
// Makes App available to import in other files.


Before Context API:
- App created the user state using useState().
- user stored the current user information.
- setUser was the function to update it.
- App passed user and setUser to Layout as props.



IMPORTANT:
Context doesn't automatically create user variables
inside every component.

A component must use useContext() to read the
shared user data when it needs it.
