import { SkinnedMesh } from 'three';
export class ModelClass{
    public id:number;
    public mesh: SkinnedMesh | null;
    public modelName: string | null;
    public comment: string | null;
    constructor(id:number){
        this.id = id;
        this.mesh = null;
        this.modelName = null;
        this.comment = null;
    }
}
