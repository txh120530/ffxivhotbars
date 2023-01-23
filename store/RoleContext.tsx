import {useState, createContext, useContext, useEffect, ReactNode, SetStateAction } from 'react'

type roleContextType = {
    role: any;
    setRole: any;
};

const roleContextDefaultValues: roleContextType = {
  role: null,
  setRole: undefined
};

const RoleContext = createContext<roleContextType>(roleContextDefaultValues);
  export function useRole() {
  	return useContext(RoleContext);
  }


type Props = {
    children: ReactNode;
};



export function RoleProvider({ children }: Props) {
    const initialState = {};
    const [role, setRole] = useState<object>(initialState);


    useEffect(() => {


      if(typeof window !== "undefined") {
        const roleData = JSON.parse(localStorage.getItem("storage-role"));
        if (roleData) {
          setRole(roleData);
        } else {
          setRole({});
        }
      }
      }, []);
    
      useEffect(() => {
        if (role !== initialState) {
          localStorage.setItem("storage-role", JSON.stringify(role));
        }
      }, [role]);

    const value = {
        role,
        setRole
    };



    return (
        <>
            <RoleContext.Provider value={value}>
                {children}
            </RoleContext.Provider>
        </>
    );
}
