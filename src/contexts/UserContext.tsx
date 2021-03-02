import { createContext, useState } from "react"


interface UserContextData {
    user: string,
    setUser: () => void
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }) {

    const [user, setUser] = useState(null)

    return (
        <UserContext.Provider value={{ user, setUser } as UserContextData} >
            { children}
        </ UserContext.Provider>
    )
}