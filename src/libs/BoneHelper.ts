import { Bone, Color, Matrix4, Mesh, MeshBasicMaterial, Object3D, SkinnedMesh, SphereGeometry, Vector3, Vector4 } from "three";

class BoneHelper extends Object3D {
    mesh: SkinnedMesh;
    constructor(mesh: SkinnedMesh){
        super();
        this.mesh = mesh;
        this.matrix.copy(mesh.matrixWorld).invert();
        const s = new SphereGeometry( 0.1, 16, 8 );
        const targetSphereMaterial = new MeshBasicMaterial( {
            color: new Color( 0x6464ff ),
            depthTest: false,
            depthWrite: false,
            transparent: true
        } );
        const mmdData = this.mesh.geometry.userData.MMD;
        var j=0;
        console.log(this.mesh);
        for(const bone of this.mesh.skeleton.bones) {
            const m = new Mesh(s,targetSphereMaterial);
            m.name = "Helper id:" + j;
            m.userData = {
                bone_id: j
            }
            const position = this.getPosition(bone, this.matrix);
            m.position.set(position.x,position.y,position.z);
            this.mesh.add(m);
            j++;
        }
        this.matrixAutoUpdate = true;
        // console.log('children');
        // console.log(this.mesh.children);
        
    }

    updateMatrixWorld( force:any ){
        this.matrix.copy(this.mesh.matrixWorld).invert();
        var i = 0;
        for (const children of this.mesh.children) {
            if (i === 0){
                i++;
                continue;
            }
            if (children.type === 'Mesh') {
                const v = this.getPosition(this.mesh.skeleton.bones[i - 1], this.matrix);
                children.position.copy(v);
                children.visible = this.visible;
            }
            i++;
        }
        this.matrix.copy(this.mesh.matrixWorld);
        super.updateMatrixWorld( force );
    }

    getPosition( bone: Bone, matrixWorldInv: Matrix4 ): Vector3 {
        var vector = new Vector3();
        return vector
            .setFromMatrixPosition( bone.matrixWorld )
            .applyMatrix4( matrixWorldInv );
    }
}
export default BoneHelper;