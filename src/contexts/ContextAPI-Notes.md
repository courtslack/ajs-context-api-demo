
React Context API — My Study Notes

What is Context API?

Context API is a React feature that lets components
share data without  props drilling.

Prop Drilling

Prop drilling is passing props through multiple
components to reach the component that needs them.

Why Use Context API?

- Share data between components.
- Avoid passing props through every component.
- Make shared data easier to access.

My Context API Files

1. UserContext.jsx
   - Creates Context using createContext().
   - Sets up a way for components to share data.

2. UserProviderContext.jsx
   - Holds the user state variable.
   - Uses setUser to update the user data.
   - Uses the Provider to share data.

3. main.jsx
   - Wraps App inside UserProvider.
   - Makes the Context available to App
     and its child components.

4. App.jsx
   - Displays the Layout component.
   - Components can access shared data
     using useContext().

Important React Terms

createContext()
- React function that creates a Context object.

Provider
- A React component that makes Context data available
  to components inside it.

UserProvider
- My custom function component.
- Holds the user state and uses the Context Provider
  to share it.

value
- A prop that gives the Provider the user data
  and setUser function to share.

user
- State variable that holds the current user data.

setUser
- Function that updates the user state.

children
- Prop representing the components nested
  inside the Provider.
- App.jsx

useContext()
- React hook that reads shared Context data.

My Code Example

<Usercontext.Provider value={{ user, setUser }}>
  {children}
</Usercontext.Provider>

What this means:
- Usercontext.Provider = Provides shared Context data.
- value = The prop used to share information.
- user = The state variable being shared.
- setUser = The update function being shared.
- children = The nested components that can access it.
