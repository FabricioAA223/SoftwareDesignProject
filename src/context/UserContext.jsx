import { createContext, useContext, useEffect, useReducer } from 'react';
const actionTypes = {
  SET_USER: 'SET_USER',
  CLEAR_USER: 'CLEAR_USER',
};


const initialState = {user: null};

// Reducer para gestionar el estado del usuario
function userReducer(state, action) {
  switch (action.type) {
    case actionTypes.SET_USER:
      return { ...state, user: action.payload };
    case actionTypes.CLEAR_USER:
      return { ...state, user: null };
    default:
      return state;
  }
}

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    // Recuperar el usuario desde localStorage al cargar la aplicación
    const storedUser = localStorage.getItem('user');
    //console.log("Usuario registrado anteriormente: ", JSON.parse(storedUser))
    if (storedUser) {
      const user = JSON.parse(storedUser);
      dispatch({ type: actionTypes.SET_USER, payload: user });
    }
  }, []);

  useEffect(() => {
    // Actualiza localStorage cuando cambia el estado del usuario
    if (state.user) {
      localStorage.setItem('user', JSON.stringify(state.user));
    } else {
      localStorage.removeItem('user');
    }
  }, [state.user]);

  const login = (userData) => {
    dispatch({ type: actionTypes.SET_USER, payload: userData });
  };

  const logout = () => {
    dispatch({ type: actionTypes.CLEAR_USER });
  };

  return (
    <UserContext.Provider value={{ user: state.user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
