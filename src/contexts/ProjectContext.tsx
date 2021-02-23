import { createContext, Dispatch, SetStateAction } from "react";
import { ModelClass } from "../classes/ModelClass";

const project: { 
        dirHandle: any; 
        setDirHandle: Dispatch<SetStateAction<undefined>>
        models: ModelClass[],
        setModels: Dispatch<SetStateAction<ModelClass[]>>
        activeModelIndex: number,
        setactiveModelIndex: Dispatch<SetStateAction<number>>
    } = {
        dirHandle: null,
        setDirHandle: () => {},
        models: [],
        setModels: () => {},
        activeModelIndex: -1,
        setactiveModelIndex: () => {},
};

const ProjectContext = createContext(project);
export default ProjectContext;