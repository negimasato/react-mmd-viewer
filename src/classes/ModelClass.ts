import { SkinnedMesh } from 'three';
export class ModelClass{
    public path: string | null;
    public mesh: SkinnedMesh | null;
    public modelName: string | null;
    public comment: string | null;
    constructor(){
        this.path = null;
        this.mesh = null;
        this.modelName = null;
        this.comment = null;
    }
}
