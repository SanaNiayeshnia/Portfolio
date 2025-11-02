"use client";
import { createContext, useContext, useState } from "react";

const projectsContext = createContext();
function ProjectsContextProvider({ children }) {
  const [technologies, setTechnologies] = useState([]);
  const value = { technologies, setTechnologies };
  return (
    <projectsContext.Provider value={value}>
      {children}
    </projectsContext.Provider>
  );
}

export default ProjectsContextProvider;

export function useProjectsContext() {
  const state = useContext(projectsContext);
  return state;
}
