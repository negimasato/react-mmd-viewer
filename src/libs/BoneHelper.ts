import { Bone, Color, Matrix4, Mesh, MeshBasicMaterial, Object3D, SkinnedMesh, SphereGeometry, Vector3, Vector4 } from "three";

const planeBones = [
    "センター",
    "左足ＩＫ",
    "右足IK",
    "左つま先IK",
    "右つま先IK",
    "上半身",
    "首",
    "頭",
    "左目",
    "右目",
    "両目",
    "左肩",
    "左腕",
    "左ひじ",
    "左手首",
    "右肩",
    "右腕",
    "右ひじ",
    "右手首",
    "左親指１",
    "左親指２",
    "左人指１",
    "左人指２",
    "左人指３",
    "左中指１",
    "左中指２",
    "左中指３",
    "左薬指１",
    "左薬指２",
    "左薬指３",
    "左小指１",
    "左小指２",
    "左小指３",
    "右親指１",
    "右親指２",
    "右人指１",
    "右人指２",
    "右人指３",
    "右中指１",
    "右中指２",
    "右中指３",
    "右薬指１",
    "右薬指２",
    "右薬指３",
    "右小指１",
    "右小指２",
    "右小指３",
    "下半身",
    "左足",
    "左ひざ",
    "左足首",
    "右足",
    "右ひざ",
    "右足首"
]

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
        // console.log(this.mesh);
        for(const bone of this.mesh.skeleton.bones) {
            const m = new Mesh(s,targetSphereMaterial);
            if(planeBones.indexOf(bone.name) > -1) {
                m.name = "Helper id:" + j;
                m.userData = {
                    bone_id: j
                }
                const position = this.getPosition(bone, this.matrix);
                m.position.set(position.x,position.y,position.z);
                this.mesh.add(m);
            }
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
            if (children.type === 'Mesh' && children.userData.bone_id != null) {
                const bone: Bone|undefined = this.mesh.skeleton.bones[children.userData.bone_id];
                if (!bone) {
                    continue;
                }
                
                const v = this.getPosition(bone, this.matrix);
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