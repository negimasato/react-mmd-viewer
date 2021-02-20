import { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { Sprite, Texture } from "three";

function Label(props: any) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    const ref = useRef() as React.RefObject<Sprite>;
    let texture;
    if(context) {
        const fontsize = 80;
        context.font = "bold " + fontsize + "px Serif";
        context.textAlign = "left";
        context.textBaseline = "middle";
        context.lineWidth = 4;
        context.fillStyle = "#ff0000";
        context.fillText(props.text, 0, fontsize);
    
        texture = new Texture(canvas);
        texture.needsUpdate = true;
        
    } else {
        console.log("contextなし");
    }
    useFrame(() => {
        // console.log(props.ref);
    })
    return (
        <sprite ref={ref}>
            <spriteMaterial attach="material" map={texture} />
        </sprite>
    );
}
export default Label;