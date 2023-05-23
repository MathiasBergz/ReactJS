import { createContext } from "react";

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    return(
        <AuthContext.Provider value={{ email: 'mathias@gmail.com' }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider }