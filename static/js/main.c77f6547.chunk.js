(this["webpackJsonpreact-mmd-viewer"]=this["webpackJsonpreact-mmd-viewer"]||[]).push([[0],{100:function(e,t,r){},101:function(e,t,r){},116:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),i=r(17),o=r.n(i),s=(r(100),r(14)),l=r(66),c=(r(101),r(146)),u=r(158),d=r(152),h=r(153),A=r(154),m=r(155),f=r(89),p=r(161),g=r(156),b=r(88),v=r.n(b),x=r(28),C=r(22),y=r.n(C),j=r(20),O=r(32),w=r(4),B=function e(t){Object(w.a)(this,e),this.id=void 0,this.mesh=void 0,this.modelName=void 0,this.comment=void 0,this.id=t,this.mesh=null,this.modelName=null,this.comment=null},k=r(69),M=r(1),I=r(70),R=r(71),E=function(){function e(e){M.Loader.call(this,e),this.loader=new M.FileLoader(this.manager),this.parser=null,this.fileArray=[],this.meshBuilder=new r(this.manager),this.animationBuilder=new o}e.prototype=Object.assign(Object.create(M.Loader.prototype),{constructor:e,setAnimationPath:function(e){return this.animationPath=e,this},readFileAsDataURL:function(){var e=Object(O.a)(y.a.mark((function e(t){var r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){var r=new FileReader;r.onload=function(t){return e(r.result)},r.readAsDataURL(t)}));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),loadFromDir:function(){var e=Object(O.a)(y.a.mark((function e(t,r,n,a){var i,o,l,c,u,d,h,A,m,f,p,g,b,v,x,C,j,O,w,B,M,I=this;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=this.meshBuilder.setCrossOrigin(this.crossOrigin),o=!0,l=!1,e.prev=3,u=Object(k.a)(t);case 5:return e.next=7,u.next();case 7:return d=e.sent,o=d.done,e.next=11,d.value;case 11:if(h=e.sent,o){e.next=23;break}return A=h,m=Object(s.a)(A,2),f=m[0],p=m[1],e.next=16,p.getFile();case 16:return g=e.sent,e.next=19,this.readFileAsDataURL(g);case 19:this.fileArray[f]=e.sent;case 20:o=!0,e.next=5;break;case 23:e.next=29;break;case 25:e.prev=25,e.t0=e.catch(3),l=!0,c=e.t0;case 29:if(e.prev=29,e.prev=30,o||null==u.return){e.next=34;break}return e.next=34,u.return();case 34:if(e.prev=34,!l){e.next=37;break}throw c;case 37:return e.finish(34);case 38:return e.finish(29);case 39:b=!0,v=!1,e.prev=41,C=Object(k.a)(t);case 43:return e.next=45,C.next();case 45:return j=e.sent,b=j.done,e.next=49,j.value;case 49:if(O=e.sent,b){e.next=61;break}if(w=O,B=Object(s.a)(w,2),f=B[0],p=B[1],"pmx"!==this._extractExtension(f).toLowerCase()){e.next=58;break}return e.next=56,p.getFile();case 56:M=e.sent,this.loadPMXFromFile(M,(function(e){r(i.buildDir(e,I.fileArray,null,null))}));case 58:b=!0,e.next=43;break;case 61:e.next=67;break;case 63:e.prev=63,e.t1=e.catch(41),v=!0,x=e.t1;case 67:if(e.prev=67,e.prev=68,b||null==C.return){e.next=72;break}return e.next=72,C.return();case 72:if(e.prev=72,!v){e.next=75;break}throw x;case 75:return e.finish(72);case 76:return e.finish(67);case 77:case"end":return e.stop()}}),e,this,[[3,25,29,39],[30,,34,38],[41,63,67,77],[68,,72,76]])})));return function(t,r,n,a){return e.apply(this,arguments)}}(),load:function(e,t,r,n){var a,i=this.meshBuilder.setCrossOrigin(this.crossOrigin);a=""!==this.resourcePath?this.resourcePath:""!==this.path?this.path:M.LoaderUtils.extractUrlBase(e);var o=this._extractExtension(e).toLowerCase();"pmd"===o||"pmx"===o?this["pmd"===o?"loadPMD":"loadPMX"](e,(function(e){t(i.build(e,a,r,n))}),r,n):n&&n(new Error("THREE.MMDLoader: Unknown model file extension ."+o+"."))},loadAnimation:function(e,t,r,n,a){var i=this.animationBuilder;this.loadVMD(e,(function(e){r(t.isCamera?i.buildCameraAnimation(e):i.build(e,t))}),n,a)},loadWithAnimation:function(e,t,r,n,a){var i=this;this.load(e,(function(e){i.loadAnimation(t,e,(function(t){r({mesh:e,animation:t})}),n,a)}),n,a)},loadPMD:function(e,t,r,n){var a=this._getParser();this.loader.setMimeType(void 0).setPath(this.path).setResponseType("arraybuffer").setRequestHeader(this.requestHeader).setWithCredentials(this.withCredentials).load(e,(function(e){t(a.parsePmd(e,!0))}),r,n)},loadPMX:function(e,t,r,n){var a=this._getParser();this.loader.setMimeType(void 0).setPath(this.path).setResponseType("arraybuffer").setRequestHeader(this.requestHeader).setWithCredentials(this.withCredentials).load(e,(function(e){t(a.parsePmx(e,!0))}),r,n)},loadPMXFromFile:function(e,t,r,n){var a=this._getParser(),i=new FileReader;i.onload=function(){t(a.parsePmx(i.result,!0))},i.readAsArrayBuffer(e)},loadVMD:function(e,t,r,n){var a=Array.isArray(e)?e:[e],i=[],o=a.length,s=this._getParser();this.loader.setMimeType(void 0).setPath(this.animationPath).setResponseType("arraybuffer").setRequestHeader(this.requestHeader).setWithCredentials(this.withCredentials);for(var l=0,c=a.length;l<c;l++)this.loader.load(a[l],(function(e){i.push(s.parseVmd(e,!0)),i.length===o&&t(s.mergeVmds(i))}),r,n)},loadVPD:function(e,t,r,n,a){var i=this._getParser();this.loader.setMimeType(t?void 0:"text/plain; charset=shift_jis").setPath(this.animationPath).setResponseType("text").setRequestHeader(this.requestHeader).setWithCredentials(this.withCredentials).load(e,(function(e){r(i.parseVpd(e,!0))}),n,a)},_extractExtension:function(e){var t=e.lastIndexOf(".");return t<0?"":e.slice(t+1)},_getParser:function(){if(null===this.parser){if("undefined"===typeof R.a)throw new Error("THREE.MMDLoader: Import MMDParser https://github.com/takahirox/mmd-parser");this.parser=new R.a.Parser}return this.parser}});var t=["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAN0lEQVRYR+3WQREAMBACsZ5/bWiiMvgEBTt5cW37hjsBBAgQIECAwFwgyfYPCCBAgAABAgTWAh8aBHZBl14e8wAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAOUlEQVRYR+3WMREAMAwDsYY/yoDI7MLwIiP40+RJklfcCCBAgAABAgTqArfb/QMCCBAgQIAAgbbAB3z/e0F3js2cAAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAN0lEQVRYR+3WQREAMBACsZ5/B5ilMvgEBTt5cW37hjsBBAgQIECAwFwgyfYPCCBAgAABAgTWAh81dWyx0gFwKAAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAOklEQVRYR+3WoREAMAwDsWb/UQtCy9wxTOQJ/oQ8SXKKGwEECBAgQIBAXeDt7f4BAQQIECBAgEBb4AOz8Hzx7WLY4wAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABPUlEQVRYR+1XwW7CMAy1+f9fZOMysSEOEweEOPRNdm3HbdOyIhAcklPrOs/PLy9RygBALxzcCDQFmgJNgaZAU6Ap0BR4PwX8gsRMVLssMRH5HcpzJEaWL7EVg9F1IHRlyqQohgVr4FGUlUcMJSjcUlDw0zvjeun70cLWmneoyf7NgBTQSniBTQQSuJAZsOnnaczjIMb5hCiuHKxokCrJfVnrctyZL0PkJAJe1HMil4nxeyi3Ypfn1kX51jpPvo/JeCNC4PhVdHdJw2XjBR8brF8PEIhNVn12AgP7uHsTBguBn53MUZCqv7Lp07Pn5k1Ro+uWmUNn7D+M57rtk7aG0Vo73xyF/fbFf0bPJjDXngnGocDTdFhygZjwUQrMNrDcmZlQT50VJ/g/UwNyHpu778+yW+/ksOz/BFo54P4AsUXMfRq7XWsAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACMElEQVRYR+2Xv4pTQRTGf2dubhLdICiii2KnYKHVolhauKWPoGAnNr6BD6CvIVaihYuI2i1ia0BY0MZGRHQXjZj/mSPnnskfNWiWZUlzJ5k7M2cm833nO5Mziej2DWWJRUoCpQKlAntSQCqgw39/iUWAGmh37jrRnVsKlgpiqmkoGVABA7E57fvY+pJDdgKqF6HzFCSADkDq+F6AHABtQ+UMVE5D7zXod7fFNhTEckTbj5XQgHzNN+5tQvc5NG7C6BNkp6D3EmpXHDR+dQAjFLchW3VS9rlw3JBh+B7ys5Cf9z0GW1C/7P32AyBAOAz1q4jGliIH3YPuBnSfQX4OGreTIgEYQb/pBDtPnEQ4CivXYPAWBk13oHrB54yA9QuSn2H4AcKRpEILDt0BUzj+RLR1V5EqjD66NPRBVpLcQwjHoHYJOhsQv6U4mnzmrIXJCFr4LDwm/xBUoboG9XX4cc9VKdYoSA2yk5NQLJaKDUjTBoveG3Z2TElTxwjNK4M3LEZgUdDdruvcXzKBpStgp2NPiWi3ks9ZXxIoFVi+AvHLdc9TqtjL3/aYjpPlrzOcEnK62Szhimdd7xX232zFDTgtxezOu3WNMRLjiKgjtOhHVMd1loynVHvOgjuIIJMaELEqhJAV/RCSLbWTcfPFakFgFlALTRRvx+ok6Hlp/Q+v3fmx90bMyUzaEAhmM3KvHlXTL5DxnbGf/1M8RNNACLL5MNtPxP/mypJAqcDSFfgFhpYqWUzhTEAAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAL0lEQVRYR+3QQREAAAzCsOFfNJPBJ1XQS9r2hsUAAQIECBAgQIAAAQIECBAgsBZ4MUx/ofm2I/kAAAAASUVORK5CYII="];function r(e){this.geometryBuilder=new a,this.materialBuilder=new i(e)}function n(e){var t,r,n,a,i=e.geometry,o=[];if(i&&void 0!==i.bones){for(n=0,a=i.bones.length;n<a;n++)r=i.bones[n],t=new M.Bone,o.push(t),t.name=r.name,t.position.fromArray(r.pos),t.quaternion.fromArray(r.rotq),void 0!==r.scl&&t.scale.fromArray(r.scl);for(n=0,a=i.bones.length;n<a;n++)-1!==(r=i.bones[n]).parent&&null!==r.parent&&void 0!==o[r.parent]?o[r.parent].add(o[n]):e.add(o[n])}return e.updateMatrixWorld(!0),o}function a(){}function i(e){this.manager=e,this.textureLoader=new M.TextureLoader(this.manager),this.tgaLoader=null}function o(){}function l(e,t,r,n,a){M.Interpolant.call(this,e,t,r,n),this.interpolationParams=a}return r.prototype={constructor:r,crossOrigin:"anonymous",setCrossOrigin:function(e){return this.crossOrigin=e,this},build:function(e,t,r,a){var i=this.geometryBuilder.build(e),o=this.materialBuilder.setCrossOrigin(this.crossOrigin).setResourcePath(t).build(e,i,r,a),s=new M.SkinnedMesh(i,o),l=new M.Skeleton(n(s));return s.bind(l),s},buildDir:function(e,t,r,a){var i=this.geometryBuilder.build(e),o=this.materialBuilder.setCrossOrigin(this.crossOrigin).setResourceDir(t).build(e,i,r,a),s=new M.SkinnedMesh(i,o),l=new M.Skeleton(n(s));return s.bind(l),s}},a.prototype={constructor:a,build:function(e){for(var t=[],r=[],n=[],a=[],i=[],o=[],s=[],l=[],c=[],u=[],d=[],h=[],A=[],m=[],f=0,p={},g=0;g<e.metadata.vertexCount;g++){for(var b=e.vertices[g],v=0,x=b.position.length;v<x;v++)t.push(b.position[v]);for(v=0,x=b.normal.length;v<x;v++)n.push(b.normal[v]);for(v=0,x=b.uv.length;v<x;v++)r.push(b.uv[v]);for(v=0;v<4;v++)s.push(b.skinIndices.length-1>=v?b.skinIndices[v]:0);for(v=0;v<4;v++)l.push(b.skinWeights.length-1>=v?b.skinWeights[v]:0)}for(g=0;g<e.metadata.faceCount;g++){var C=e.faces[g];for(v=0,x=C.indices.length;v<x;v++)a.push(C.indices[v])}for(g=0;g<e.metadata.materialCount;g++){var y=e.materials[g];i.push({offset:3*f,count:3*y.faceCount}),f+=y.faceCount}for(g=0;g<e.metadata.rigidBodyCount;g++){var j=e.rigidBodies[g],O=p[j.boneIndex];O=void 0===O?j.type:Math.max(j.type,O),p[j.boneIndex]=O}for(g=0;g<e.metadata.boneCount;g++){-1!==(Y={parent:(Q=e.bones[g]).parentIndex,name:Q.name,pos:Q.position.slice(0,3),rotq:[0,0,0,1],scl:[1,1,1],rigidBodyType:void 0!==p[g]?p[g]:-1}).parent&&(Y.pos[0]-=e.bones[Y.parent].position[0],Y.pos[1]-=e.bones[Y.parent].position[1],Y.pos[2]-=e.bones[Y.parent].position[2]),o.push(Y)}if("pmd"===e.metadata.format)for(g=0;g<e.metadata.ikCount;g++){var w={target:(B=e.iks[g]).target,effector:B.effector,iteration:B.iteration,maxAngle:4*B.maxAngle,links:[]};for(v=0,x=B.links.length;v<x;v++){(k={}).index=B.links[v].index,k.enabled=!0,e.bones[k.index].name.indexOf("\u3072\u3056")>=0&&(k.limitation=new M.Vector3(1,0,0)),w.links.push(k)}d.push(w)}else for(g=0;g<e.metadata.boneCount;g++){var B;if(void 0!==(B=e.bones[g].ik)){for(w={target:g,effector:B.effector,iteration:B.iteration,maxAngle:B.maxAngle,links:[]},v=0,x=B.links.length;v<x;v++){var k;if((k={}).index=B.links[v].index,k.enabled=!0,1===B.links[v].angleLimitation){var I=B.links[v].lowerLimitationAngle,R=B.links[v].upperLimitationAngle,E=-R[0],T=-R[1];R[0]=-I[0],R[1]=-I[1],I[0]=E,I[1]=T,k.rotationMin=(new M.Vector3).fromArray(I),k.rotationMax=(new M.Vector3).fromArray(R)}w.links.push(k)}d.push(w)}}if("pmx"===e.metadata.format){for(g=0;g<e.metadata.boneCount;g++){var Q,D=(Q=e.bones[g]).grant;if(void 0!==D){w={index:g,parentIndex:D.parentIndex,ratio:D.ratio,isLocal:D.isLocal,affectRotation:D.affectRotation,affectPosition:D.affectPosition,transformationClass:Q.transformationClass};h.push(w)}}h.sort((function(e,t){return e.transformationClass-t.transformationClass}))}function P(t,r,n){for(var a=0;a<r.elementCount;a++){var i,o=r.elements[a];i="pmd"===e.metadata.format?e.morphs[0].elements[o.index].index:o.index,t.array[3*i+0]+=o.position[0]*n,t.array[3*i+1]+=o.position[1]*n,t.array[3*i+2]+=o.position[2]*n}}for(g=0;g<e.metadata.morphCount;g++){var F=e.morphs[g],S={name:F.name},N=new M.Float32BufferAttribute(3*e.metadata.vertexCount,3);N.name=F.name;for(v=0;v<3*e.metadata.vertexCount;v++)N.array[v]=t[v];if("pmd"===e.metadata.format)0!==g&&P(N,F,1);else if(0===F.type)for(v=0;v<F.elementCount;v++){var U=e.morphs[F.elements[v].index],L=F.elements[v].ratio;1===U.type&&P(N,U,L)}else 1===F.type?P(N,F,1):2===F.type||3===F.type||4===F.type||5===F.type||6===F.type||7===F.type||8===F.type&&console.log("material="+F.name);c.push(S),u.push(N)}for(g=0;g<e.metadata.rigidBodyCount;g++){var V=e.rigidBodies[g];S={};for(var z in V)S[z]=V[z];if("pmx"===e.metadata.format&&-1!==S.boneIndex){var Y=e.bones[S.boneIndex];S.position[0]-=Y.position[0],S.position[1]-=Y.position[1],S.position[2]-=Y.position[2]}A.push(S)}for(g=0;g<e.metadata.constraintCount;g++){var K=e.constraints[g];S={};for(var z in K)S[z]=K[z];var W=A[S.rigidBodyIndex1],H=A[S.rigidBodyIndex2];0!==W.type&&2===H.type&&-1!==W.boneIndex&&-1!==H.boneIndex&&e.bones[H.boneIndex].parentIndex===W.boneIndex&&(H.type=1),m.push(S)}var J=new M.BufferGeometry;J.setAttribute("position",new M.Float32BufferAttribute(t,3)),J.setAttribute("normal",new M.Float32BufferAttribute(n,3)),J.setAttribute("uv",new M.Float32BufferAttribute(r,2)),J.setAttribute("skinIndex",new M.Uint16BufferAttribute(s,4)),J.setAttribute("skinWeight",new M.Float32BufferAttribute(l,4)),J.setIndex(a);g=0;for(var _=i.length;g<_;g++)J.addGroup(i[g].offset,i[g].count,g);return J.bones=o,J.morphTargets=c,J.morphAttributes.position=u,J.morphTargetsRelative=!1,J.userData.MMD={bones:o,iks:d,grants:h,rigidBodies:A,constraints:m,format:e.metadata.format,morphs:e.morphs,frames:e.frames,modelName:e.metadata.modelName,englishModelName:e.metadata.englishModelName,comment:e.metadata.comment,englishComment:e.metadata.englishComment},J.computeBoundingSphere(),J}},i.prototype={constructor:i,crossOrigin:"anonymous",resourcePath:void 0,resourceDir:void 0,setCrossOrigin:function(e){return this.crossOrigin=e,this},setResourcePath:function(e){return this.resourcePath=e,this},setResourceDir:function(e){return this.resourceDir=e,this},build:function(e,t){var r=[],n={};this.textureLoader.setCrossOrigin(this.crossOrigin);for(var a=0;a<e.metadata.materialCount;a++){var i=e.materials[a],o={userData:{}};if(void 0!==i.name&&(o.name=i.name),o.color=(new M.Color).fromArray(i.diffuse),o.opacity=i.diffuse[3],o.emissive=(new M.Color).fromArray(i.ambient),o.transparent=1!==o.opacity,o.skinning=t.bones.length>0,o.morphTargets=t.morphTargets.length>0,o.fog=!0,o.blending=M.CustomBlending,o.blendSrc=M.SrcAlphaFactor,o.blendDst=M.OneMinusSrcAlphaFactor,o.blendSrcAlpha=M.SrcAlphaFactor,o.blendDstAlpha=M.DstAlphaFactor,"pmx"===e.metadata.format&&1===(1&i.flag)?o.side=M.DoubleSide:o.side=1===o.opacity?M.FrontSide:M.DoubleSide,"pmd"===e.metadata.format){if(i.fileName){var s=i.fileName.split("*");if(o.map=this._loadTexture(s[0],n),s.length>1){var l=s[1].slice(-4).toLowerCase();o.envMap=this._loadTexture(s[1],n),o.combine=".sph"===l?M.MultiplyOperation:M.AddOperation}}var c=-1===i.toonIndex?"toon00.bmp":e.toonTextures[i.toonIndex].fileName;o.gradientMap=this._loadTexture(c,n,{isToonTexture:!0,isDefaultToonTexture:this._isDefaultToonTexture(c)}),o.userData.outlineParameters={thickness:1===i.edgeFlag?.003:0,color:[0,0,0],alpha:1,visible:1===i.edgeFlag}}else{var u;-1!==i.textureIndex&&(o.map=this._loadTexture(e.textures[i.textureIndex],n)),-1===i.envTextureIndex||1!==i.envFlag&&2!=i.envFlag||(o.envMap=this._loadTexture(e.textures[i.envTextureIndex],n),o.combine=1===i.envFlag?M.MultiplyOperation:M.AddOperation),-1===i.toonIndex||0!==i.toonFlag?(c="toon"+("0"+(i.toonIndex+1)).slice(-2)+".bmp",u=!0):(c=e.textures[i.toonIndex],u=!1),console.log("toonFileName="+c),console.log("----"),o.gradientMap=this._loadTexture(c,n,{isToonTexture:!0,isDefaultToonTexture:u}),o.userData.outlineParameters={thickness:i.edgeSize/300,color:i.edgeColor.slice(0,3),alpha:i.edgeColor[3],visible:0!==(16&i.flag)&&i.edgeSize>0}}void 0!==o.map&&(o.transparent||this._checkImageTransparency(o.map,t,a),o.emissive.multiplyScalar(.2)),r.push(new M.MeshToonMaterial(o))}if("pmx"===e.metadata.format){function d(e,t){for(var r=0,n=e.length;r<n;r++){var a=e[r];if(-1!==a.index){var i=t[a.index];i.opacity!==a.diffuse[3]&&(i.transparent=!0)}}}a=0;for(var h=e.morphs.length;a<h;a++){var A=e.morphs[a],m=A.elements;if(0===A.type)for(var f=0,p=m.length;f<p;f++){var g=e.morphs[m[f].index];8===g.type&&d(g.elements,r)}else 8===A.type&&d(m,r)}}return r},_getTGALoader:function(){if(null===this.tgaLoader){if(void 0===I.a)throw new Error("THREE.MMDLoader: Import TGALoader");this.tgaLoader=new I.a(this.manager)}return this.tgaLoader},_isDefaultToonTexture:function(e){return 10===e.length&&/toon(10|0[0-9])\.bmp/.test(e)},_loadTexture:function(e,r,n,a,i){var o,s=this;if(!0===(n=n||{}).isDefaultToonTexture){var l;try{l=parseInt(e.match(/toon([0-9]{2})\.bmp$/)[1])}catch(d){console.warn("THREE.MMDLoader: "+e+" seems like a not right default texture path. Using toon00.bmp instead."),l=0}o=t[l]}else o=this.resourceDir[e];if(void 0!==r[o])return r[o];var c=this.manager.getHandler(o);null===c&&(c=".tga"===e.slice(-4).toLowerCase()?this._getTGALoader():this.textureLoader);var u=c.load(o,(function(e){!0===n.isToonTexture&&(e.image=s._getRotatedImage(e.image),e.magFilter=M.NearestFilter,e.minFilter=M.NearestFilter),e.flipY=!1,e.wrapS=M.RepeatWrapping,e.wrapT=M.RepeatWrapping;for(var t=0;t<u.readyCallbacks.length;t++)u.readyCallbacks[t](u);delete u.readyCallbacks}),a,i);return u.readyCallbacks=[],r[o]=u,u},_getRotatedImage:function(e){var t=document.createElement("canvas"),r=t.getContext("2d"),n=e.width,a=e.height;return t.width=n,t.height=a,r.clearRect(0,0,n,a),r.translate(n/2,a/2),r.rotate(.5*Math.PI),r.translate(-n/2,-a/2),r.drawImage(e,0,0),r.getImageData(0,0,n,a)},_checkImageTransparency:function(){var e=Object(O.a)(y.a.mark((function e(t,r,n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.readyCallbacks.push((function(e){function a(e,t){var r=e.width,n=e.height,a=Math.round(t.x*r)%r,i=Math.round(t.y*n)%n;a<0&&(a+=r),i<0&&(i+=n);var o=i*r+a;return e.data[4*o+3]}var i=void 0!==e.image.data?e.image:function(e){var t=document.createElement("canvas");t.width=e.width,t.height=e.height;var r=t.getContext("2d");return r.drawImage(e,0,0),r.getImageData(0,0,t.width,t.height)}(e.image),o=r.groups[n];(function(e,t,r){var n=e.width,i=e.height;if(e.data.length/(n*i)!==4)return!1;for(var o=0;o<r.length;o+=3){for(var s={x:0,y:0},l=0;l<3;l++){var c=r[3*o+l],u={x:t[2*c+0],y:t[2*c+1]};if(a(e,u)<253)return!0;s.x+=u.x,s.y+=u.y}if(s.x/=3,s.y/=3,a(e,s)<253)return!0}return!1})(i,r.attributes.uv.array,r.index.array.slice(o.start,o.start+o.count))&&(t.transparent=!0)}));case 1:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}()},o.prototype={constructor:o,build:function(e,t){for(var r=this.buildSkeletalAnimation(e,t).tracks,n=this.buildMorphAnimation(e,t).tracks,a=0,i=n.length;a<i;a++)r.push(n[a]);return new M.AnimationClip("",-1,r)},buildSkeletalAnimation:function(e,t){function r(e,t,r){e.push(t[r+0]/127),e.push(t[r+8]/127),e.push(t[r+4]/127),e.push(t[r+12]/127)}for(var n=[],a={},i=t.skeleton.bones,o={},s=0,l=i.length;s<l;s++)o[i[s].name]=!0;for(s=0;s<e.metadata.motionCount;s++){var c=e.motions[s],u=c.boneName;void 0!==o[u]&&(a[u]=a[u]||[],a[u].push(c))}for(var d in a){var h=a[d];h.sort((function(e,t){return e.frameNum-t.frameNum}));var A=[],m=[],f=[],p=[],g=[],b=t.skeleton.getBoneByName(d).position.toArray();for(s=0,l=h.length;s<l;s++){var v=h[s].frameNum/30,x=h[s].position,C=h[s].rotation,y=h[s].interpolation;A.push(v);for(var j=0;j<3;j++)m.push(b[j]+x[j]);for(j=0;j<4;j++)f.push(C[j]);for(j=0;j<3;j++)r(p,y,j);r(g,y,3)}var O=".bones["+d+"]";n.push(this._createTrack(O+".position",M.VectorKeyframeTrack,A,m,p)),n.push(this._createTrack(O+".quaternion",M.QuaternionKeyframeTrack,A,f,g))}return new M.AnimationClip("",-1,n)},buildMorphAnimation:function(e,t){for(var r=[],n={},a=t.morphTargetDictionary,i=0;i<e.metadata.morphCount;i++){var o=e.morphs[i],s=o.morphName;void 0!==a[s]&&(n[s]=n[s]||[],n[s].push(o))}for(var l in n){var c=n[l];c.sort((function(e,t){return e.frameNum-t.frameNum}));for(var u=[],d=[],h=(i=0,c.length);i<h;i++)u.push(c[i].frameNum/30),d.push(c[i].weight);r.push(new M.NumberKeyframeTrack(".morphTargetInfluences["+a[l]+"]",u,d))}return new M.AnimationClip("",-1,r)},buildCameraAnimation:function(e){function t(e,t){e.push(t.x),e.push(t.y),e.push(t.z)}function r(e,t,r){e.push(t[4*r+0]/127),e.push(t[4*r+1]/127),e.push(t[4*r+2]/127),e.push(t[4*r+3]/127)}var n=[],a=void 0===e.cameras?[]:e.cameras.slice();a.sort((function(e,t){return e.frameNum-t.frameNum}));for(var i,o,s=[],l=[],c=[],u=[],d=[],h=[],A=[],m=[],f=[],p=new M.Quaternion,g=new M.Euler,b=new M.Vector3,v=new M.Vector3,x=0,C=a.length;x<C;x++){var y=a[x],j=y.frameNum/30,O=y.position,w=y.rotation,B=y.distance,k=y.fov,I=y.interpolation;s.push(j),b.set(0,0,-B),v.set(O[0],O[1],O[2]),g.set(-w[0],-w[1],-w[2]),p.setFromEuler(g),b.add(v),b.applyQuaternion(p),t(l,v),(i=c).push((o=p).x),i.push(o.y),i.push(o.z),i.push(o.w),t(u,b),d.push(k);for(var R=0;R<3;R++)r(h,I,R);r(A,I,3);for(R=0;R<3;R++)r(m,I,4);r(f,I,5)}return(n=[]).push(this._createTrack("target.position",M.VectorKeyframeTrack,s,l,h)),n.push(this._createTrack(".quaternion",M.QuaternionKeyframeTrack,s,c,A)),n.push(this._createTrack(".position",M.VectorKeyframeTrack,s,u,m)),n.push(this._createTrack(".fov",M.NumberKeyframeTrack,s,d,f)),new M.AnimationClip("",-1,n)},_createTrack:function(e,t,r,n,a){if(r.length>2){r=r.slice(),n=n.slice(),a=a.slice();for(var i=n.length/r.length,o=a.length/r.length,s=1,c=2,u=r.length;c<u;c++){for(var d=0;d<i;d++)if(n[s*i+d]!==n[(s-1)*i+d]||n[s*i+d]!==n[c*i+d]){s++;break}if(c>s){r[s]=r[c];for(d=0;d<i;d++)n[s*i+d]=n[c*i+d];for(d=0;d<o;d++)a[s*o+d]=a[c*o+d]}}r.length=s+1,n.length=(s+1)*i,a.length=(s+1)*o}var h=new t(e,r,n);return h.createInterpolant=function(e){return new l(this.times,this.values,this.getValueSize(),e,new Float32Array(a))},h}},l.prototype=Object.assign(Object.create(M.Interpolant.prototype),{constructor:l,interpolate_:function(e,t,r,n){var a=this.resultBuffer,i=this.sampleValues,o=this.valueSize,s=this.interpolationParams,l=e*o,c=l-o,u=n-t<.05?0:(r-t)/(n-t);if(4===o){var d=s[4*e+0],h=s[4*e+1],A=s[4*e+2],m=s[4*e+3],f=this._calculate(d,h,A,m,u);M.Quaternion.slerpFlat(a,0,i,c,i,l,f)}else if(3===o)for(var p=0;p!==o;++p){d=s[12*e+4*p+0],h=s[12*e+4*p+1],A=s[12*e+4*p+2],m=s[12*e+4*p+3],f=this._calculate(d,h,A,m,u);a[p]=i[c+p]*(1-f)+i[l+p]*f}else{d=s[4*e+0],h=s[4*e+1],A=s[4*e+2],m=s[4*e+3],f=this._calculate(d,h,A,m,u);a[0]=i[c]*(1-f)+i[l]*f}return a},_calculate:function(e,t,r,n,a){for(var i,o,s,l=.5,c=l,u=1-c,d=Math,h=0;h<15;h++){var A=(i=3*u*u*c)*e+(o=3*u*c*c)*t+(s=c*c*c)-a;if(d.abs(A)<1e-5)break;l/=2,u=1-(c+=A<0?l:-l)}return i*r+o*n+s}}),e}(),T=r(149),Q=r(157),D=r(151),P=r(6),F=Object(c.a)((function(e){return Object(u.a)({formControl:{margin:e.spacing(1),minWidth:200},selectEmpty:{marginTop:e.spacing(2)}})}));var S=function(e){var t=F();function r(){return(r=Object(O.a)(y.a.mark((function t(){var r,n,a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.showDirectoryPicker();case 2:r=t.sent,n=new E;try{a=new B(e.models.length),n.loadFromDir(r,(function(t){a.mesh=t;var r="\u30e2\u30c7\u30eb\u60c5\u5831:\n\n"+t.geometry.userData.MMD.comment;a.comment=r,a.modelName=e.models.length+":"+t.geometry.userData.MMD.modelName;var n=[].concat(Object(j.a)(e.models),[a]),i=e.activeModelId+1;alert(a.comment),e.setModels(n),e.setActiveModelId(i)}))}catch(i){console.error(i)}case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(P.jsxs)("div",{style:{textAlign:"center"},children:[Object(P.jsx)("p",{style:{color:"black",fontSize:20,margin:"5px 0px 0px 0px"},children:"\u30e2\u30c7\u30eb\u64cd\u4f5c"}),Object(P.jsx)("div",{style:{padding:"0px 10px 10px 10px"},children:Object(P.jsxs)(T.a,{variant:"filled",className:t.formControl,children:[Object(P.jsx)("div",{children:Object(P.jsx)(Q.a,{style:{width:"100%"},onChange:function(t){e.setActiveModelId(t.target.value)},native:!0,children:e.models.map((function(e,t){return Object(P.jsx)("option",{value:e.id,children:e.modelName},e.id)}))})}),Object(P.jsxs)("div",{children:[Object(P.jsx)(D.a,{variant:"contained",style:{width:"50%"},onClick:function(){return r.apply(this,arguments)},children:"\u8aad\u307f\u8fbc\u307f"}),Object(P.jsx)(D.a,{variant:"contained",style:{width:"50%"},onClick:function(){if(-1!==e.activeModelId){var t=e.models.filter((function(t){return t.id!==e.activeModelId}));console.log(t);var r=e.activeModelId-1;e.setModels(t),e.setActiveModelId(r)}else console.log("\u3053\u308c\u4ee5\u4e0a\u524a\u9664\u306f\u3067\u304d\u306a\u3044")},children:"\u524a\u9664"})]})]})})]})},N=r(159),U=r(160),L=r(81);var V=function(e){var t=Object(n.useRef)(),r=Object(n.useRef)(),a=Object(n.useRef)(),i=Object(x.c)().scene,o=Object(n.useState)(null),l=Object(s.a)(o,2),c=l[0],u=l[1];return Object(n.useEffect)((function(){if("undefined"!==typeof a.current){var t=a.current,n=function(e){r.current&&(r.current.enabled=!e.value)};if(t&&e.activeModelId===e.modelClass.id){if(t.attach(e.modelClass.mesh.skeleton.bones[e.selectObject]),"select"===e.controlMode){if(e.modelClass.mesh)if(null==c){var o=new L.a(e.modelClass.mesh,e.modelClass.mesh.geometry.userData.MMD.iks).createHelper();u(o),i.add(o)}else c.visible=!0,t.detach()}else t.setMode(e.controlMode),null!==c&&(c.visible=!1);return t.addEventListener("dragging-changed",n),function(){return t.removeEventListener("dragging-changed",n)}}}}),[e.activeModelId,e.modelClass.id,e.modelClass.mesh,e.selectObject,e.controlMode,c,i]),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(N.a,{ref:a,children:Object(P.jsx)("mesh",{ref:t,children:Object(P.jsx)("primitive",{object:e.modelClass.mesh,dispose:null,scale:[.25,.25,.25],position:e.position})})}),Object(P.jsx)(U.a,{ref:r})]})};var z=function(e){function t(t){e.setControlMode(t)}return Object(P.jsxs)("div",{style:{textAlign:"center"},children:[Object(P.jsx)("p",{style:{color:"black",fontSize:20,margin:"5px 0px 0px 0px"},children:"\u30dc\u30fc\u30f3\u64cd\u4f5c"}),Object(P.jsxs)("div",{style:{padding:"5px 10px 10px 10px"},children:[Object(P.jsx)("input",{style:{width:"30%"},type:"button",value:"\u9078\u629e",onClick:function(){return t("select")}}),Object(P.jsx)("input",{style:{width:"30%"},type:"button",value:"\u56de\u8ee2",onClick:function(){return t("rotate")}}),Object(P.jsx)("input",{style:{width:"30%"},type:"button",value:"\u79fb\u52d5",onClick:function(){return t("translate")}})]})]})},Y=Object(c.a)((function(e){return Object(u.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}})}));var K=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),r=t[0],i=t[1],o=Object(n.useState)(0),c=Object(s.a)(o,2),u=c[0],b=(c[1],Object(n.useState)(-1)),C=Object(s.a)(b,2),y=C[0],j=C[1],O=Object(n.useState)("rotate"),w=Object(s.a)(O,2),B=w[0],k=w[1],M=Y(),I=a.a.useState(!1),R=Object(s.a)(I,2),E=(R[0],R[1],a.a.useState(null)),T=Object(s.a)(E,2),Q=T[0],D=T[1],F=Boolean(Q);return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(d.a,{position:"static",children:Object(P.jsxs)(h.a,{children:[Object(P.jsxs)(A.a,{variant:"h6",color:"inherit",className:M.title,children:["React MMD Viewer ver.",l.c]}),Object(P.jsx)(m.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){D(e.currentTarget)},color:"inherit",children:Object(P.jsx)(v.a,{})}),Object(P.jsx)(f.a,{id:"menu-appbar",anchorEl:Q,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:F,onClose:function(){D(null)},children:Object(P.jsx)(p.a,{onClick:function(){return window.open("https://github.com/"+l.a.name+"/"+l.b)},children:"Github"})})]})}),Object(P.jsxs)(g.a,{container:!0,children:[Object(P.jsx)(g.a,{item:!0,xs:12,children:Object(P.jsxs)(x.a,{style:{backgroundColor:"black",height:"500px"},colorManagement:!1,camera:{fov:50,position:[0,0,30]},children:[Object(P.jsx)("ambientLight",{}),Object(P.jsx)(n.Suspense,{fallback:null,children:r.map((function(e,t){return Object(P.jsx)(V,{modelClass:e,position:[0,0,0],selectObject:u,activeModelId:y,controlMode:B},e.id)}))}),Object(P.jsx)("gridHelper",{})]})}),Object(P.jsx)(g.a,{item:!0,xs:6,style:{border:"1px solid #ffffff"},children:Object(P.jsx)(S,{models:r,setModels:i,activeModelId:y,setActiveModelId:j},"modelcontrol")}),Object(P.jsx)(g.a,{item:!0,xs:6,style:{border:"1px solid #ffffff"},children:Object(P.jsx)(z,{models:r,setActiveModelId:j,controlMode:B,setControlMode:k},"bonecontrol")})]})]})},W=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,162)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;r(e),n(e),a(e),i(e),o(e)}))};o.a.render(Object(P.jsx)(a.a.StrictMode,{children:Object(P.jsx)(K,{})}),document.getElementById("root")),W()},66:function(e){e.exports=JSON.parse('{"b":"react-mmd-viewer","a":{"name":"negimasato","email":"nishimasa.subaru@gmail.com"},"c":"0.1.0"}')}},[[116,1,2]]]);
//# sourceMappingURL=main.c77f6547.chunk.js.map