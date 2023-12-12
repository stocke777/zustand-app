import { useContext, createContext, useState, useReducer } from "react";

// const MainContext = createContext({});

// const MainContextProvider = ({ children }) => {
// 	const [title, setTitle] = useState("aa");

// 	return (
// 		<MainContext.Provider value={{ title: title }}>
// 			{children}
// 		</MainContext.Provider>
// 	);
// };



// export default MainContextProvider;

// export const useMainContext = () => {
// 	const ctx = useContext(MainContext);

// 	return ctx;
// };


const initialState = {
	title: "abc"
};

// Define the reducer function to handle state changes
const mainReducer = (state, action) => {
	switch (action.type) {
		case "SET_TITLE":
			return { ...state, title: action.payload };
		default:
			return state;
	}
};

const MainContext = createContext();

const MainContextProvider = ({ children }) => {
	// Use useReducer with the defined reducer and initial state
	const [state, dispatch] = useReducer(mainReducer, initialState);

	// Define a helper function to dispatch actions
	const setTitle = (newTitle) => {
		console.log("CHANGED")
		dispatch({ type: "SET_TITLE", payload: newTitle });
	};

	return (
		<MainContext.Provider value={{ state, setTitle }}>
			{children}
		</MainContext.Provider>
	);
};

export default MainContextProvider;

export const useMainContext = () => {
	const context = useContext(MainContext);

	if (!context) {
		throw new Error("useMainContext must be used within a MainContextProvider");
	}

	return context;
};