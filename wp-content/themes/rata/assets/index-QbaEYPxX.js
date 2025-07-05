(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gh="167",mg=0,kd=1,_g=2,Wp=1,gg=2,Ji=3,zi=0,Hn=1,Mi=2,Dr=0,to=1,tc=2,zd=3,Hd=4,xg=5,is=100,vg=101,yg=102,Mg=103,Sg=104,Tg=200,Eg=201,bg=202,Ag=203,Iu=204,Du=205,wg=206,Rg=207,Cg=208,Pg=209,Lg=210,Ig=211,Dg=212,Ug=213,Ng=214,Og=0,Fg=1,Bg=2,nc=3,kg=4,zg=5,Hg=6,Vg=7,Xp=0,Gg=1,Wg=2,Ur=0,Xg=1,Yg=2,qg=3,Yp=4,Kg=5,$g=6,jg=7,Vd="attached",Zg="detached",qp=300,fo=301,po=302,Uu=303,Nu=304,Ec=306,ms=1e3,Ar=1001,ic=1002,bn=1003,Kp=1004,Ko=1005,Jn=1006,kl=1007,rr=1008,ur=1009,$p=1010,jp=1011,xa=1012,Wh=1013,_s=1014,Ti=1015,Da=1016,Xh=1017,Yh=1018,mo=1020,Zp=35902,Jp=1021,Qp=1022,ui=1023,em=1024,tm=1025,no=1026,_o=1027,qh=1028,Kh=1029,nm=1030,$h=1031,jh=1033,zl=33776,Hl=33777,Vl=33778,Gl=33779,Ou=35840,Fu=35841,Bu=35842,ku=35843,zu=36196,Hu=37492,Vu=37496,Gu=37808,Wu=37809,Xu=37810,Yu=37811,qu=37812,Ku=37813,$u=37814,ju=37815,Zu=37816,Ju=37817,Qu=37818,eh=37819,th=37820,nh=37821,Wl=36492,ih=36494,rh=36495,im=36283,sh=36284,oh=36285,ah=36286,Jg=2200,Qg=2201,e0=2202,va=2300,ya=2301,Nc=2302,$s=2400,js=2401,rc=2402,Zh=2500,t0=2501,n0=0,rm=1,lh=2,i0=3200,r0=3201,sm=0,s0=1,br="",ft="srgb",pn="srgb-linear",Jh="display-p3",bc="display-p3-linear",sc="linear",Ut="srgb",oc="rec709",ac="p3",As=7680,Gd=519,o0=512,a0=513,l0=514,om=515,c0=516,u0=517,h0=518,d0=519,ch=35044,Wd="300 es",sr=2e3,lc=2001;class Ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xd=1234567;const ia=Math.PI/180,go=180/Math.PI;function Ei(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[s&255]+xn[s>>8&255]+xn[s>>16&255]+xn[s>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function Sn(s,e,t){return Math.max(e,Math.min(t,s))}function Qh(s,e){return(s%e+e)%e}function f0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function p0(s,e,t){return s!==e?(t-s)/(e-s):0}function ra(s,e,t){return(1-t)*s+t*e}function m0(s,e,t,n){return ra(s,e,1-Math.exp(-t*n))}function _0(s,e=1){return e-Math.abs(Qh(s,e*2)-e)}function g0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function x0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function v0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function y0(s,e){return s+Math.random()*(e-s)}function M0(s){return s*(.5-Math.random())}function S0(s){s!==void 0&&(Xd=s);let e=Xd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function T0(s){return s*ia}function E0(s){return s*go}function b0(s){return(s&s-1)===0&&s!==0}function A0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function w0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function R0(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*d,a*c);break;case"YZY":s.set(l*d,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*d,a*u,a*c);break;case"XZX":s.set(a*u,l*_,l*f,a*c);break;case"YXY":s.set(l*f,a*u,l*_,a*c);break;case"ZYZ":s.set(l*_,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Si(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Rt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const C0={DEG2RAD:ia,RAD2DEG:go,generateUUID:Ei,clamp:Sn,euclideanModulo:Qh,mapLinear:f0,inverseLerp:p0,lerp:ra,damp:m0,pingpong:_0,smoothstep:g0,smootherstep:x0,randInt:v0,randFloat:y0,randFloatSpread:M0,seededRandom:S0,degToRad:T0,radToDeg:E0,isPowerOfTwo:b0,ceilPowerOfTwo:A0,floorPowerOfTwo:w0,setQuaternionFromProperEuler:R0,normalize:Rt,denormalize:Si};class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(e,t,n,i,r,o,a,l,c){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],_=n[8],g=i[0],p=i[3],m=i[6],S=i[1],y=i[4],v=i[7],R=i[2],w=i[5],b=i[8];return r[0]=o*g+a*S+l*R,r[3]=o*p+a*y+l*w,r[6]=o*m+a*v+l*b,r[1]=c*g+u*S+h*R,r[4]=c*p+u*y+h*w,r[7]=c*m+u*v+h*b,r[2]=d*g+f*S+_*R,r[5]=d*p+f*y+_*w,r[8]=d*m+f*v+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,_=t*h+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=d*g,e[4]=(u*t-i*l)*g,e[5]=(i*r-a*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Oc.makeScale(e,t)),this}rotate(e){return this.premultiply(Oc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oc=new it;function am(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ma(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function P0(){const s=Ma("canvas");return s.style.display="block",s}const Yd={};function io(s){s in Yd||(Yd[s]=!0,console.warn(s))}function L0(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const qd=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kd=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),No={[pn]:{transfer:sc,primaries:oc,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[ft]:{transfer:Ut,primaries:oc,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[bc]:{transfer:sc,primaries:ac,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Kd),fromReference:s=>s.applyMatrix3(qd)},[Jh]:{transfer:Ut,primaries:ac,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Kd),fromReference:s=>s.applyMatrix3(qd).convertLinearToSRGB()}},I0=new Set([pn,bc]),xt={enabled:!0,_workingColorSpace:pn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!I0.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=No[e].toReference,i=No[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return No[s].primaries},getTransfer:function(s){return s===br?sc:No[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(No[e].luminanceCoefficients)}};function ro(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ws;class D0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ws===void 0&&(ws=Ma("canvas")),ws.width=e.width,ws.height=e.height;const n=ws.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ws}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ma("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ro(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ro(t[n]/255)*255):t[n]=ro(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let U0=0;class lm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Ei(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Bc(i[o].image)):r.push(Bc(i[o]))}else r=Bc(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Bc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?D0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let N0=0;class fn extends Ss{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,n=Ar,i=Ar,r=Jn,o=rr,a=ui,l=ur,c=fn.DEFAULT_ANISOTROPY,u=br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=Ei(),this.name="",this.source=new lm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ms:e.x=e.x-Math.floor(e.x);break;case Ar:e.x=e.x<0?0:1;break;case ic:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ms:e.y=e.y-Math.floor(e.y);break;case Ar:e.y=e.y<0?0:1;break;case ic:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=qp;fn.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,n=0,i=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(f+1)/2,R=(m+1)/2,w=(u+d)/4,b=(h+g)/4,P=(_+p)/4;return y>v&&y>R?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=w/n,r=b/n):v>R?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=P/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=b/r,i=P/r),this.set(n,i,r,t),this}let S=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(h-g)/S,this.z=(d-u)/S,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class O0 extends Ss{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new fn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new lm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kr extends O0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class cm extends fn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bn,this.minFilter=bn,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class F0 extends fn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bn,this.minFilter=bn,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],f=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==d||c!==f||u!==_){let p=1-a;const m=l*d+c*f+u*_+h*g,S=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const R=Math.sqrt(y),w=Math.atan2(R,m*S);p=Math.sin(p*w)/R,a=Math.sin(a*w)/R}const v=a*S;if(l=l*p+d*v,c=c*p+f*v,u=u*p+_*v,h=h*p+g*v,p===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],_=r[o+3];return e[t]=a*_+u*h+l*f-c*d,e[t+1]=l*_+u*d+c*h-a*f,e[t+2]=c*_+u*f+a*d-l*h,e[t+3]=u*_-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),d=l(n/2),f=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"YZX":this._x=d*u*h+c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h-d*f*_;break;case"XZY":this._x=d*u*h-c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Sn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($d.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($d.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return kc.copy(this).projectOnVector(e),this.sub(kc)}reflect(e){return this.sub(kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kc=new B,$d=new bi;class pr{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_i):_i.fromBufferAttribute(r,o),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Za.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Za.copy(n.boundingBox)),Za.applyMatrix4(e.matrixWorld),this.union(Za)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oo),Ja.subVectors(this.max,Oo),Rs.subVectors(e.a,Oo),Cs.subVectors(e.b,Oo),Ps.subVectors(e.c,Oo),_r.subVectors(Cs,Rs),gr.subVectors(Ps,Cs),Wr.subVectors(Rs,Ps);let t=[0,-_r.z,_r.y,0,-gr.z,gr.y,0,-Wr.z,Wr.y,_r.z,0,-_r.x,gr.z,0,-gr.x,Wr.z,0,-Wr.x,-_r.y,_r.x,0,-gr.y,gr.x,0,-Wr.y,Wr.x,0];return!zc(t,Rs,Cs,Ps,Ja)||(t=[1,0,0,0,1,0,0,0,1],!zc(t,Rs,Cs,Ps,Ja))?!1:(Qa.crossVectors(_r,gr),t=[Qa.x,Qa.y,Qa.z],zc(t,Rs,Cs,Ps,Ja))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yi=[new B,new B,new B,new B,new B,new B,new B,new B],_i=new B,Za=new pr,Rs=new B,Cs=new B,Ps=new B,_r=new B,gr=new B,Wr=new B,Oo=new B,Ja=new B,Qa=new B,Xr=new B;function zc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Xr.fromArray(s,r);const a=i.x*Math.abs(Xr.x)+i.y*Math.abs(Xr.y)+i.z*Math.abs(Xr.z),l=e.dot(Xr),c=t.dot(Xr),u=n.dot(Xr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const B0=new pr,Fo=new B,Hc=new B;class Gi{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):B0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fo.subVectors(e,this.center);const t=Fo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Fo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fo.copy(e.center).add(Hc)),this.expandByPoint(Fo.copy(e.center).sub(Hc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qi=new B,Vc=new B,el=new B,xr=new B,Gc=new B,tl=new B,Wc=new B;class Ac{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Vc.copy(e).add(t).multiplyScalar(.5),el.copy(t).sub(e).normalize(),xr.copy(this.origin).sub(Vc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(el),a=xr.dot(this.direction),l=-xr.dot(el),c=xr.lengthSq(),u=Math.abs(1-o*o);let h,d,f,_;if(u>0)if(h=o*l-a,d=o*a-l,_=r*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Vc).addScaledVector(el,d),f}intersectSphere(e,t){qi.subVectors(e.center,this.origin);const n=qi.dot(this.direction),i=qi.dot(qi)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,n,i,r){Gc.subVectors(t,e),tl.subVectors(n,e),Wc.crossVectors(Gc,tl);let o=this.direction.dot(Wc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xr.subVectors(this.origin,e);const l=a*this.direction.dot(tl.crossVectors(xr,tl));if(l<0)return null;const c=a*this.direction.dot(Gc.cross(xr));if(c<0||l+c>o)return null;const u=-a*xr.dot(Wc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(e,t,n,i,r,o,a,l,c,u,h,d,f,_,g,p){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,d,f,_,g,p)}set(e,t,n,i,r,o,a,l,c,u,h,d,f,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ls.setFromMatrixColumn(e,0).length(),r=1/Ls.setFromMatrixColumn(e,1).length(),o=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+_*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=_+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,_=c*u,g=c*h;t[0]=d+g*a,t[4]=_*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-_,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,_=c*u,g=c*h;t[0]=d-g*a,t[4]=-o*h,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*u,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-f,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=f*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-d*h,t[8]=_*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+_,t[10]=d-g*h}else if(e.order==="XZY"){const d=o*l,f=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=o*u,t[9]=f*h-_,t[2]=_*h-f,t[6]=a*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(k0,e,z0)}lookAt(e,t,n){const i=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),vr.crossVectors(n,qn),vr.lengthSq()===0&&(Math.abs(n.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),vr.crossVectors(n,qn)),vr.normalize(),nl.crossVectors(qn,vr),i[0]=vr.x,i[4]=nl.x,i[8]=qn.x,i[1]=vr.y,i[5]=nl.y,i[9]=qn.y,i[2]=vr.z,i[6]=nl.z,i[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],_=n[2],g=n[6],p=n[10],m=n[14],S=n[3],y=n[7],v=n[11],R=n[15],w=i[0],b=i[4],P=i[8],T=i[12],M=i[1],L=i[5],D=i[9],z=i[13],J=i[2],K=i[6],W=i[10],j=i[14],X=i[3],H=i[7],E=i[11],q=i[15];return r[0]=o*w+a*M+l*J+c*X,r[4]=o*b+a*L+l*K+c*H,r[8]=o*P+a*D+l*W+c*E,r[12]=o*T+a*z+l*j+c*q,r[1]=u*w+h*M+d*J+f*X,r[5]=u*b+h*L+d*K+f*H,r[9]=u*P+h*D+d*W+f*E,r[13]=u*T+h*z+d*j+f*q,r[2]=_*w+g*M+p*J+m*X,r[6]=_*b+g*L+p*K+m*H,r[10]=_*P+g*D+p*W+m*E,r[14]=_*T+g*z+p*j+m*q,r[3]=S*w+y*M+v*J+R*X,r[7]=S*b+y*L+v*K+R*H,r[11]=S*P+y*D+v*W+R*E,r[15]=S*T+y*z+v*j+R*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],_=e[3],g=e[7],p=e[11],m=e[15];return _*(+r*l*h-i*c*h-r*a*d+n*c*d+i*a*f-n*l*f)+g*(+t*l*f-t*c*d+r*o*d-i*o*f+i*c*u-r*l*u)+p*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+m*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],_=e[12],g=e[13],p=e[14],m=e[15],S=h*p*c-g*d*c+g*l*f-a*p*f-h*l*m+a*d*m,y=_*d*c-u*p*c-_*l*f+o*p*f+u*l*m-o*d*m,v=u*g*c-_*h*c+_*a*f-o*g*f-u*a*m+o*h*m,R=_*h*l-u*g*l-_*a*d+o*g*d+u*a*p-o*h*p,w=t*S+n*y+i*v+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=S*b,e[1]=(g*d*r-h*p*r-g*i*f+n*p*f+h*i*m-n*d*m)*b,e[2]=(a*p*r-g*l*r+g*i*c-n*p*c-a*i*m+n*l*m)*b,e[3]=(h*l*r-a*d*r-h*i*c+n*d*c+a*i*f-n*l*f)*b,e[4]=y*b,e[5]=(u*p*r-_*d*r+_*i*f-t*p*f-u*i*m+t*d*m)*b,e[6]=(_*l*r-o*p*r-_*i*c+t*p*c+o*i*m-t*l*m)*b,e[7]=(o*d*r-u*l*r+u*i*c-t*d*c-o*i*f+t*l*f)*b,e[8]=v*b,e[9]=(_*h*r-u*g*r-_*n*f+t*g*f+u*n*m-t*h*m)*b,e[10]=(o*g*r-_*a*r+_*n*c-t*g*c-o*n*m+t*a*m)*b,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*b,e[12]=R*b,e[13]=(u*g*i-_*h*i+_*n*d-t*g*d-u*n*p+t*h*p)*b,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*p-t*a*p)*b,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,_=r*h,g=o*u,p=o*h,m=a*h,S=l*c,y=l*u,v=l*h,R=n.x,w=n.y,b=n.z;return i[0]=(1-(g+m))*R,i[1]=(f+v)*R,i[2]=(_-y)*R,i[3]=0,i[4]=(f-v)*w,i[5]=(1-(d+m))*w,i[6]=(p+S)*w,i[7]=0,i[8]=(_+y)*b,i[9]=(p-S)*b,i[10]=(1-(d+g))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Ls.set(i[0],i[1],i[2]).length();const o=Ls.set(i[4],i[5],i[6]).length(),a=Ls.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],gi.copy(this);const c=1/r,u=1/o,h=1/a;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=u,gi.elements[5]*=u,gi.elements[6]*=u,gi.elements[8]*=h,gi.elements[9]*=h,gi.elements[10]*=h,t.setFromRotationMatrix(gi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=sr){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,_;if(a===sr)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===lc)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=sr){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-r),d=(t+e)*c,f=(n+i)*u;let _,g;if(a===sr)_=(o+r)*h,g=-2*h;else if(a===lc)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ls=new B,gi=new et,k0=new B(0,0,0),z0=new B(1,1,1),vr=new B,nl=new B,qn=new B,jd=new et,Zd=new bi;class Hi{constructor(e=0,t=0,n=0,i=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Sn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Sn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zd.setFromEuler(this),this.setFromQuaternion(Zd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class um{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let H0=0;const Jd=new B,Is=new bi,Ki=new et,il=new B,Bo=new B,V0=new B,G0=new bi,Qd=new B(1,0,0),ef=new B(0,1,0),tf=new B(0,0,1),nf={type:"added"},W0={type:"removed"},Ds={type:"childadded",child:null},Xc={type:"childremoved",child:null};class kt extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new B,t=new Hi,n=new bi,i=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new et},normalMatrix:{value:new it}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new um,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(Qd,e)}rotateY(e){return this.rotateOnAxis(ef,e)}rotateZ(e){return this.rotateOnAxis(tf,e)}translateOnAxis(e,t){return Jd.copy(e).applyQuaternion(this.quaternion),this.position.add(Jd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qd,e)}translateY(e){return this.translateOnAxis(ef,e)}translateZ(e){return this.translateOnAxis(tf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?il.copy(e):il.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Bo,il,this.up):Ki.lookAt(il,Bo,this.up),this.quaternion.setFromRotationMatrix(Ki),i&&(Ki.extractRotation(i.matrixWorld),Is.setFromRotationMatrix(Ki),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nf),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(W0),Xc.child=e,this.dispatchEvent(Xc),Xc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nf),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,V0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,G0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}kt.DEFAULT_UP=new B(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new B,$i=new B,Yc=new B,ji=new B,Us=new B,Ns=new B,rf=new B,qc=new B,Kc=new B,$c=new B;class Ii{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),xi.subVectors(e,t),i.cross(xi);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){xi.subVectors(i,t),$i.subVectors(n,t),Yc.subVectors(e,t);const o=xi.dot(xi),a=xi.dot($i),l=xi.dot(Yc),c=$i.dot($i),u=$i.dot(Yc),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,_=(o*u-a*l)*d;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ji.x),l.addScaledVector(o,ji.y),l.addScaledVector(a,ji.z),l)}static isFrontFacing(e,t,n,i){return xi.subVectors(n,t),$i.subVectors(e,t),xi.cross($i).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),xi.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Ii.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Us.subVectors(i,n),Ns.subVectors(r,n),qc.subVectors(e,n);const l=Us.dot(qc),c=Ns.dot(qc);if(l<=0&&c<=0)return t.copy(n);Kc.subVectors(e,i);const u=Us.dot(Kc),h=Ns.dot(Kc);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Us,o);$c.subVectors(e,r);const f=Us.dot($c),_=Ns.dot($c);if(_>=0&&f<=_)return t.copy(r);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Ns,a);const p=u*_-f*h;if(p<=0&&h-u>=0&&f-_>=0)return rf.subVectors(r,i),a=(h-u)/(h-u+(f-_)),t.copy(i).addScaledVector(rf,a);const m=1/(p+g+d);return o=g*m,a=d*m,t.copy(n).addScaledVector(Us,o).addScaledVector(Ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},rl={h:0,s:0,l:0};function jc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=xt.workingColorSpace){if(e=Qh(e,1),t=Sn(t,0,1),n=Sn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=jc(o,r,e+1/3),this.g=jc(o,r,e),this.b=jc(o,r,e-1/3)}return xt.toWorkingColorSpace(this,i),this}setStyle(e,t=ft){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){const n=hm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}copyLinearToSRGB(e){return this.r=Fc(e.r),this.g=Fc(e.g),this.b=Fc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return xt.fromWorkingColorSpace(vn.copy(this),e),Math.round(Sn(vn.r*255,0,255))*65536+Math.round(Sn(vn.g*255,0,255))*256+Math.round(Sn(vn.b*255,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(vn.copy(this),t);const n=vn.r,i=vn.g,r=vn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=ft){xt.fromWorkingColorSpace(vn.copy(this),e);const t=vn.r,n=vn.g,i=vn.b;return e!==ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+t,yr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yr),e.getHSL(rl);const n=ra(yr.h,rl.h,t),i=ra(yr.s,rl.s,t),r=ra(yr.l,rl.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new Ke;Ke.NAMES=hm;let X0=0;class Fi extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=to,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Iu,this.blendDst=Du,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=nc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==to&&(n.blending=this.blending),this.side!==zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Iu&&(n.blendSrc=this.blendSrc),this.blendDst!==Du&&(n.blendDst=this.blendDst),this.blendEquation!==is&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==nc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(n.stencilFail=this.stencilFail),this.stencilZFail!==As&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Ft extends Fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=Xp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new B,sl=new ct;class gn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ch,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return io("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)sl.fromBufferAttribute(this,t),sl.applyMatrix3(e),this.setXY(t,sl.x,sl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Si(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Si(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Si(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),i=Rt(i,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ch&&(e.usage=this.usage),e}}class dm extends gn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class fm extends gn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ar extends gn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Y0=0;const si=new et,Zc=new kt,Os=new B,Kn=new pr,ko=new pr,cn=new B;class Ai extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(am(e)?fm:dm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new it().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,n){return si.makeTranslation(e,t,n),this.applyMatrix4(si),this}scale(e,t,n){return si.makeScale(e,t,n),this.applyMatrix4(si),this}lookAt(e){return Zc.lookAt(e),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ar(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Kn.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ko.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(Kn.min,ko.min),Kn.expandByPoint(cn),cn.addVectors(Kn.max,ko.max),Kn.expandByPoint(cn)):(Kn.expandByPoint(ko.min),Kn.expandByPoint(ko.max))}Kn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)cn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(cn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)cn.fromBufferAttribute(a,c),l&&(Os.fromBufferAttribute(e,c),cn.add(Os)),i=Math.max(i,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new B,l[P]=new B;const c=new B,u=new B,h=new B,d=new ct,f=new ct,_=new ct,g=new B,p=new B;function m(P,T,M){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,T),_.fromBufferAttribute(r,M),u.sub(c),h.sub(c),f.sub(d),_.sub(d);const L=1/(f.x*_.y-_.x*f.y);isFinite(L)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(L),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(L),a[P].add(g),a[T].add(g),a[M].add(g),l[P].add(p),l[T].add(p),l[M].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let P=0,T=S.length;P<T;++P){const M=S[P],L=M.start,D=M.count;for(let z=L,J=L+D;z<J;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const y=new B,v=new B,R=new B,w=new B;function b(P){R.fromBufferAttribute(i,P),w.copy(R);const T=a[P];y.copy(T),y.sub(R.multiplyScalar(R.dot(T))).normalize(),v.crossVectors(w,T);const L=v.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,L)}for(let P=0,T=S.length;P<T;++P){const M=S[P],L=M.start,D=M.count;for(let z=L,J=L+D;z<J;z+=3)b(e.getX(z+0)),b(e.getX(z+1)),b(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new B,r=new B,o=new B,a=new B,l=new B,c=new B,u=new B,h=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),g=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*u;for(let m=0;m<u;m++)d[_++]=c[f++]}return new gn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ai,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sf=new et,Yr=new Ac,ol=new Gi,of=new B,Fs=new B,Bs=new B,ks=new B,Jc=new B,al=new B,ll=new ct,cl=new ct,ul=new ct,af=new B,lf=new B,cf=new B,hl=new B,dl=new B;class Mt extends kt{constructor(e=new Ai,t=new Ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){al.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Jc.fromBufferAttribute(h,e),o?al.addScaledVector(Jc,u):al.addScaledVector(Jc.sub(t),u))}t.add(al)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ol.copy(n.boundingSphere),ol.applyMatrix4(r),Yr.copy(e.ray).recast(e.near),!(ol.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(ol,of)===null||Yr.origin.distanceToSquared(of)>(e.far-e.near)**2))&&(sf.copy(r).invert(),Yr.copy(e.ray).applyMatrix4(sf),!(n.boundingBox!==null&&Yr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yr)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const p=d[_],m=o[p.materialIndex],S=Math.max(p.start,f.start),y=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let v=S,R=y;v<R;v+=3){const w=a.getX(v),b=a.getX(v+1),P=a.getX(v+2);i=fl(this,m,e,n,c,u,h,w,b,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const S=a.getX(p),y=a.getX(p+1),v=a.getX(p+2);i=fl(this,o,e,n,c,u,h,S,y,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const p=d[_],m=o[p.materialIndex],S=Math.max(p.start,f.start),y=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=S,R=y;v<R;v+=3){const w=v,b=v+1,P=v+2;i=fl(this,m,e,n,c,u,h,w,b,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const S=p,y=p+1,v=p+2;i=fl(this,o,e,n,c,u,h,S,y,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function q0(s,e,t,n,i,r,o,a){let l;if(e.side===Hn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===zi,a),l===null)return null;dl.copy(a),dl.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(dl);return c<t.near||c>t.far?null:{distance:c,point:dl.clone(),object:s}}function fl(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Fs),s.getVertexPosition(l,Bs),s.getVertexPosition(c,ks);const u=q0(s,e,t,n,Fs,Bs,ks,hl);if(u){i&&(ll.fromBufferAttribute(i,a),cl.fromBufferAttribute(i,l),ul.fromBufferAttribute(i,c),u.uv=Ii.getInterpolation(hl,Fs,Bs,ks,ll,cl,ul,new ct)),r&&(ll.fromBufferAttribute(r,a),cl.fromBufferAttribute(r,l),ul.fromBufferAttribute(r,c),u.uv1=Ii.getInterpolation(hl,Fs,Bs,ks,ll,cl,ul,new ct)),o&&(af.fromBufferAttribute(o,a),lf.fromBufferAttribute(o,l),cf.fromBufferAttribute(o,c),u.normal=Ii.getInterpolation(hl,Fs,Bs,ks,af,lf,cf,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new B,materialIndex:0};Ii.getNormal(Fs,Bs,ks,h.normal),u.face=h}return u}class Ua extends Ai{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ar(c,3)),this.setAttribute("normal",new ar(u,3)),this.setAttribute("uv",new ar(h,2));function _(g,p,m,S,y,v,R,w,b,P,T){const M=v/b,L=R/P,D=v/2,z=R/2,J=w/2,K=b+1,W=P+1;let j=0,X=0;const H=new B;for(let E=0;E<W;E++){const q=E*L-z;for(let re=0;re<K;re++){const ce=re*M-D;H[g]=ce*S,H[p]=q*y,H[m]=J,c.push(H.x,H.y,H.z),H[g]=0,H[p]=0,H[m]=w>0?1:-1,u.push(H.x,H.y,H.z),h.push(re/b),h.push(1-E/P),j+=1}}for(let E=0;E<P;E++)for(let q=0;q<b;q++){const re=d+q+K*E,ce=d+q+K*(E+1),U=d+(q+1)+K*(E+1),Q=d+(q+1)+K*E;l.push(re,ce,Q),l.push(ce,U,Q),X+=6}a.addGroup(f,X,T),f+=X,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ua(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xo(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ln(s){const e={};for(let t=0;t<s.length;t++){const n=xo(s[t]);for(const i in n)e[i]=n[i]}return e}function K0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function pm(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const uh={clone:xo,merge:Ln};var $0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,j0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hr extends Fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$0,this.fragmentShader=j0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=K0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class mm extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=sr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mr=new B,uf=new ct,hf=new ct;class Tn extends mm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=go*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return go*2*Math.atan(Math.tan(ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z)}getViewSize(e,t){return this.getViewBounds(e,uf,hf),t.subVectors(hf,uf)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ia*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zs=-90,Hs=1;class Z0 extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Tn(zs,Hs,e,t);i.layers=this.layers,this.add(i);const r=new Tn(zs,Hs,e,t);r.layers=this.layers,this.add(r);const o=new Tn(zs,Hs,e,t);o.layers=this.layers,this.add(o);const a=new Tn(zs,Hs,e,t);a.layers=this.layers,this.add(a);const l=new Tn(zs,Hs,e,t);l.layers=this.layers,this.add(l);const c=new Tn(zs,Hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===sr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===lc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class _m extends fn{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:fo,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class J0 extends kr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new _m(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ua(5,5,5),r=new hr({name:"CubemapFromEquirect",uniforms:xo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Hn,blending:Dr});r.uniforms.tEquirect.value=t;const o=new Mt(i,r),a=t.minFilter;return t.minFilter===rr&&(t.minFilter=Jn),new Z0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Qc=new B,Q0=new B,ex=new it;class Er{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Qc.subVectors(n,t).cross(Q0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Qc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ex.getNormalMatrix(e),i=this.coplanarPoint(Qc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new Gi,pl=new B;class ed{constructor(e=new Er,t=new Er,n=new Er,i=new Er,r=new Er,o=new Er){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=sr){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],_=i[9],g=i[10],p=i[11],m=i[12],S=i[13],y=i[14],v=i[15];if(n[0].setComponents(l-r,d-c,p-f,v-m).normalize(),n[1].setComponents(l+r,d+c,p+f,v+m).normalize(),n[2].setComponents(l+o,d+u,p+_,v+S).normalize(),n[3].setComponents(l-o,d-u,p-_,v-S).normalize(),n[4].setComponents(l-a,d-h,p-g,v-y).normalize(),t===sr)n[5].setComponents(l+a,d+h,p+g,v+y).normalize();else if(t===lc)n[5].setComponents(a,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){return qr.center.set(0,0,0),qr.radius=.7071067811865476,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(pl.x=i.normal.x>0?e.max.x:e.min.x,pl.y=i.normal.y>0?e.max.y:e.min.y,pl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(pl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gm(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function tx(s){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l._updateRange,d=l.updateRanges;if(s.bindBuffer(c,a),h.count===-1&&d.length===0&&s.bufferSubData(c,0,u),d.length!==0){for(let f=0,_=d.length;f<_;f++){const g=d[f];s.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}h.count!==-1&&(s.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class nr extends Ai{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,f=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const S=m*d-o;for(let y=0;y<c;y++){const v=y*h-r;_.push(v,-S,0),g.push(0,0,1),p.push(y/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){const y=S+c*m,v=S+c*(m+1),R=S+1+c*(m+1),w=S+1+c*m;f.push(y,v,w),f.push(v,R,w)}this.setIndex(f),this.setAttribute("position",new ar(_,3)),this.setAttribute("normal",new ar(g,3)),this.setAttribute("uv",new ar(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.width,e.height,e.widthSegments,e.heightSegments)}}var nx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ix=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ox=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ax=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ux=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,hx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,px=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_x=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ex=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ax=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Px=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ix="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ux=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Nx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ox=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$x=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ev=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,iv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ov=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,av=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_v=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ev=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Av=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Lv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Iv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ov=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Bv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$v=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ey=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ty=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ny=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ry=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ay=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ly=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,uy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,py=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,my=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_y=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,My=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ty=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ey=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,by=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ay=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ry=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Py=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ly=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:nx,alphahash_pars_fragment:ix,alphamap_fragment:rx,alphamap_pars_fragment:sx,alphatest_fragment:ox,alphatest_pars_fragment:ax,aomap_fragment:lx,aomap_pars_fragment:cx,batching_pars_vertex:ux,batching_vertex:hx,begin_vertex:dx,beginnormal_vertex:fx,bsdfs:px,iridescence_fragment:mx,bumpmap_pars_fragment:_x,clipping_planes_fragment:gx,clipping_planes_pars_fragment:xx,clipping_planes_pars_vertex:vx,clipping_planes_vertex:yx,color_fragment:Mx,color_pars_fragment:Sx,color_pars_vertex:Tx,color_vertex:Ex,common:bx,cube_uv_reflection_fragment:Ax,defaultnormal_vertex:wx,displacementmap_pars_vertex:Rx,displacementmap_vertex:Cx,emissivemap_fragment:Px,emissivemap_pars_fragment:Lx,colorspace_fragment:Ix,colorspace_pars_fragment:Dx,envmap_fragment:Ux,envmap_common_pars_fragment:Nx,envmap_pars_fragment:Ox,envmap_pars_vertex:Fx,envmap_physical_pars_fragment:Kx,envmap_vertex:Bx,fog_vertex:kx,fog_pars_vertex:zx,fog_fragment:Hx,fog_pars_fragment:Vx,gradientmap_pars_fragment:Gx,lightmap_pars_fragment:Wx,lights_lambert_fragment:Xx,lights_lambert_pars_fragment:Yx,lights_pars_begin:qx,lights_toon_fragment:$x,lights_toon_pars_fragment:jx,lights_phong_fragment:Zx,lights_phong_pars_fragment:Jx,lights_physical_fragment:Qx,lights_physical_pars_fragment:ev,lights_fragment_begin:tv,lights_fragment_maps:nv,lights_fragment_end:iv,logdepthbuf_fragment:rv,logdepthbuf_pars_fragment:sv,logdepthbuf_pars_vertex:ov,logdepthbuf_vertex:av,map_fragment:lv,map_pars_fragment:cv,map_particle_fragment:uv,map_particle_pars_fragment:hv,metalnessmap_fragment:dv,metalnessmap_pars_fragment:fv,morphinstance_vertex:pv,morphcolor_vertex:mv,morphnormal_vertex:_v,morphtarget_pars_vertex:gv,morphtarget_vertex:xv,normal_fragment_begin:vv,normal_fragment_maps:yv,normal_pars_fragment:Mv,normal_pars_vertex:Sv,normal_vertex:Tv,normalmap_pars_fragment:Ev,clearcoat_normal_fragment_begin:bv,clearcoat_normal_fragment_maps:Av,clearcoat_pars_fragment:wv,iridescence_pars_fragment:Rv,opaque_fragment:Cv,packing:Pv,premultiplied_alpha_fragment:Lv,project_vertex:Iv,dithering_fragment:Dv,dithering_pars_fragment:Uv,roughnessmap_fragment:Nv,roughnessmap_pars_fragment:Ov,shadowmap_pars_fragment:Fv,shadowmap_pars_vertex:Bv,shadowmap_vertex:kv,shadowmask_pars_fragment:zv,skinbase_vertex:Hv,skinning_pars_vertex:Vv,skinning_vertex:Gv,skinnormal_vertex:Wv,specularmap_fragment:Xv,specularmap_pars_fragment:Yv,tonemapping_fragment:qv,tonemapping_pars_fragment:Kv,transmission_fragment:$v,transmission_pars_fragment:jv,uv_pars_fragment:Zv,uv_pars_vertex:Jv,uv_vertex:Qv,worldpos_vertex:ey,background_vert:ty,background_frag:ny,backgroundCube_vert:iy,backgroundCube_frag:ry,cube_vert:sy,cube_frag:oy,depth_vert:ay,depth_frag:ly,distanceRGBA_vert:cy,distanceRGBA_frag:uy,equirect_vert:hy,equirect_frag:dy,linedashed_vert:fy,linedashed_frag:py,meshbasic_vert:my,meshbasic_frag:_y,meshlambert_vert:gy,meshlambert_frag:xy,meshmatcap_vert:vy,meshmatcap_frag:yy,meshnormal_vert:My,meshnormal_frag:Sy,meshphong_vert:Ty,meshphong_frag:Ey,meshphysical_vert:by,meshphysical_frag:Ay,meshtoon_vert:wy,meshtoon_frag:Ry,points_vert:Cy,points_frag:Py,shadow_vert:Ly,shadow_frag:Iy,sprite_vert:Dy,sprite_frag:Uy},Te={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Li={basic:{uniforms:Ln([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Ln([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ke(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Ln([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Ln([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Ln([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Ke(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Ln([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Ln([Te.points,Te.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Ln([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Ln([Te.common,Te.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Ln([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Ln([Te.sprite,Te.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:Ln([Te.common,Te.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:Ln([Te.lights,Te.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Li.physical={uniforms:Ln([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const ml={r:0,b:0,g:0},Kr=new Hi,Ny=new et;function Oy(s,e,t,n,i,r,o){const a=new Ke(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function _(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?t:e).get(y)),y}function g(S){let y=!1;const v=_(S);v===null?m(a,l):v&&v.isColor&&(m(v,1),y=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(S,y){const v=_(y);v&&(v.isCubeTexture||v.mapping===Ec)?(u===void 0&&(u=new Mt(new Ua(1,1,1),new hr({name:"BackgroundCubeMaterial",uniforms:xo(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Kr.copy(y.backgroundRotation),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ny.makeRotationFromEuler(Kr)),u.material.toneMapped=xt.getTransfer(v.colorSpace)!==Ut,(h!==v||d!==v.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Mt(new nr(2,2),new hr({name:"BackgroundMaterial",uniforms:xo(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=xt.getTransfer(v.colorSpace)!==Ut,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,y){S.getRGB(ml,pm(s)),n.buffers.color.setClear(ml.r,ml.g,ml.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,m(a,l)},render:g,addToRenderList:p}}function Fy(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(M,L,D,z,J){let K=!1;const W=h(z,D,L);r!==W&&(r=W,c(r.object)),K=f(M,z,D,J),K&&_(M,z,D,J),J!==null&&e.update(J,s.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,v(M,L,D,z),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function u(M){return s.deleteVertexArray(M)}function h(M,L,D){const z=D.wireframe===!0;let J=n[M.id];J===void 0&&(J={},n[M.id]=J);let K=J[L.id];K===void 0&&(K={},J[L.id]=K);let W=K[z];return W===void 0&&(W=d(l()),K[z]=W),W}function d(M){const L=[],D=[],z=[];for(let J=0;J<t;J++)L[J]=0,D[J]=0,z[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:D,attributeDivisors:z,object:M,attributes:{},index:null}}function f(M,L,D,z){const J=r.attributes,K=L.attributes;let W=0;const j=D.getAttributes();for(const X in j)if(j[X].location>=0){const E=J[X];let q=K[X];if(q===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(q=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(q=M.instanceColor)),E===void 0||E.attribute!==q||q&&E.data!==q.data)return!0;W++}return r.attributesNum!==W||r.index!==z}function _(M,L,D,z){const J={},K=L.attributes;let W=0;const j=D.getAttributes();for(const X in j)if(j[X].location>=0){let E=K[X];E===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(E=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(E=M.instanceColor));const q={};q.attribute=E,E&&E.data&&(q.data=E.data),J[X]=q,W++}r.attributes=J,r.attributesNum=W,r.index=z}function g(){const M=r.newAttributes;for(let L=0,D=M.length;L<D;L++)M[L]=0}function p(M){m(M,0)}function m(M,L){const D=r.newAttributes,z=r.enabledAttributes,J=r.attributeDivisors;D[M]=1,z[M]===0&&(s.enableVertexAttribArray(M),z[M]=1),J[M]!==L&&(s.vertexAttribDivisor(M,L),J[M]=L)}function S(){const M=r.newAttributes,L=r.enabledAttributes;for(let D=0,z=L.length;D<z;D++)L[D]!==M[D]&&(s.disableVertexAttribArray(D),L[D]=0)}function y(M,L,D,z,J,K,W){W===!0?s.vertexAttribIPointer(M,L,D,J,K):s.vertexAttribPointer(M,L,D,z,J,K)}function v(M,L,D,z){g();const J=z.attributes,K=D.getAttributes(),W=L.defaultAttributeValues;for(const j in K){const X=K[j];if(X.location>=0){let H=J[j];if(H===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(H=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(H=M.instanceColor)),H!==void 0){const E=H.normalized,q=H.itemSize,re=e.get(H);if(re===void 0)continue;const ce=re.buffer,U=re.type,Q=re.bytesPerElement,oe=U===s.INT||U===s.UNSIGNED_INT||H.gpuType===Wh;if(H.isInterleavedBufferAttribute){const ie=H.data,Se=ie.stride,ge=H.offset;if(ie.isInstancedInterleavedBuffer){for(let ye=0;ye<X.locationSize;ye++)m(X.location+ye,ie.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ye=0;ye<X.locationSize;ye++)p(X.location+ye);s.bindBuffer(s.ARRAY_BUFFER,ce);for(let ye=0;ye<X.locationSize;ye++)y(X.location+ye,q/X.locationSize,U,E,Se*Q,(ge+q/X.locationSize*ye)*Q,oe)}else{if(H.isInstancedBufferAttribute){for(let ie=0;ie<X.locationSize;ie++)m(X.location+ie,H.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ie=0;ie<X.locationSize;ie++)p(X.location+ie);s.bindBuffer(s.ARRAY_BUFFER,ce);for(let ie=0;ie<X.locationSize;ie++)y(X.location+ie,q/X.locationSize,U,E,q*Q,q/X.locationSize*ie*Q,oe)}}else if(W!==void 0){const E=W[j];if(E!==void 0)switch(E.length){case 2:s.vertexAttrib2fv(X.location,E);break;case 3:s.vertexAttrib3fv(X.location,E);break;case 4:s.vertexAttrib4fv(X.location,E);break;default:s.vertexAttrib1fv(X.location,E)}}}}S()}function R(){P();for(const M in n){const L=n[M];for(const D in L){const z=L[D];for(const J in z)u(z[J].object),delete z[J];delete L[D]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const D in L){const z=L[D];for(const J in z)u(z[J].object),delete z[J];delete L[D]}delete n[M.id]}function b(M){for(const L in n){const D=n[L];if(D[M.id]===void 0)continue;const z=D[M.id];for(const J in z)u(z[J].object),delete z[J];delete D[M.id]}}function P(){T(),o=!0,r!==i&&(r=i,c(r.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:p,disableUnusedAttributes:S}}function By(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g];for(let g=0;g<d.length;g++)t.update(_,n,d[g])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ky(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==ui&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const b=w===Da&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ur&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ti&&!b)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:v,maxSamples:R}}function zy(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Er,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,m=s.get(h);if(!i||_===null||_.length===0||r&&!p)r?u(null):c();else{const S=r?0:n,y=S*4;let v=m.clippingState||null;l.value=v,v=u(_,d,y,f);for(let R=0;R!==y;++R)v[R]=t[R];m.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=f+g*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,v=f;y!==g;++y,v+=4)o.copy(h[y]).applyMatrix4(S,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function Hy(s){let e=new WeakMap;function t(o,a){return a===Uu?o.mapping=fo:a===Nu&&(o.mapping=po),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Uu||a===Nu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new J0(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class td extends mm{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zs=4,df=[.125,.215,.35,.446,.526,.582],rs=20,eu=new td,ff=new Ke;let tu=null,nu=0,iu=0,ru=!1;const Qr=(1+Math.sqrt(5))/2,Vs=1/Qr,pf=[new B(-Qr,Vs,0),new B(Qr,Vs,0),new B(-Vs,0,Qr),new B(Vs,0,Qr),new B(0,Qr,-Vs),new B(0,Qr,Vs),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class mf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){tu=this._renderer.getRenderTarget(),nu=this._renderer.getActiveCubeFace(),iu=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tu,nu,iu),this._renderer.xr.enabled=ru,e.scissorTest=!1,_l(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fo||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tu=this._renderer.getRenderTarget(),nu=this._renderer.getActiveCubeFace(),iu=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:Da,format:ui,colorSpace:pn,depthBuffer:!1},i=_f(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_f(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vy(r)),this._blurMaterial=Gy(r,e,t)}return i}_compileMaterial(e){const t=new Mt(this._lodPlanes[0],e);this._renderer.compile(t,eu)}_sceneToCubeUV(e,t,n,i){const a=new Tn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(ff),u.toneMapping=Ur,u.autoClear=!1;const f=new Ft({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),_=new Mt(new Ua,f);let g=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,g=!0):(f.color.copy(ff),g=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):S===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const y=this._cubeSize;_l(i,S*y,m>2?y:0,y,y),u.setRenderTarget(i),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===fo||e.mapping===po;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gf());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Mt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;_l(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,eu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=pf[(i-r-1)%pf.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Mt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*rs-1),g=r/_,p=isFinite(r)?1+Math.floor(u*g):rs;p>rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${rs}`);const m=[];let S=0;for(let b=0;b<rs;++b){const P=b/g,T=Math.exp(-P*P/2);m.push(T),b===0?S+=T:b<p&&(S+=2*T)}for(let b=0;b<m.length;b++)m[b]=m[b]/S;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-n;const v=this._sizeLods[i],R=3*v*(i>y-Zs?i-y+Zs:0),w=4*(this._cubeSize-v);_l(t,R,w,3*v,2*v),l.setRenderTarget(t),l.render(h,eu)}}function Vy(s){const e=[],t=[],n=[];let i=s;const r=s-Zs+1+df.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Zs?l=df[o-s+Zs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,g=3,p=2,m=1,S=new Float32Array(g*_*f),y=new Float32Array(p*_*f),v=new Float32Array(m*_*f);for(let w=0;w<f;w++){const b=w%3*2/3-1,P=w>2?0:-1,T=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];S.set(T,g*_*w),y.set(d,p*_*w);const M=[w,w,w,w,w,w];v.set(M,m*_*w)}const R=new Ai;R.setAttribute("position",new gn(S,g)),R.setAttribute("uv",new gn(y,p)),R.setAttribute("faceIndex",new gn(v,m)),e.push(R),i>Zs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _f(s,e,t){const n=new kr(s,e,t);return n.texture.mapping=Ec,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _l(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Gy(s,e,t){const n=new Float32Array(rs),i=new B(0,1,0);return new hr({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function gf(){return new hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function xf(){return new hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function nd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Wy(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Uu||l===Nu,u=l===fo||l===po;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new mf(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new mf(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Xy(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&io("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Yy(s,e,t,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)e.remove(g[p])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],s.ARRAY_BUFFER);const f=h.morphAttributes;for(const _ in f){const g=f[_];for(let p=0,m=g.length;p<m;p++)e.update(g[p],s.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,_=h.attributes.position;let g=0;if(f!==null){const S=f.array;g=f.version;for(let y=0,v=S.length;y<v;y+=3){const R=S[y+0],w=S[y+1],b=S[y+2];d.push(R,w,w,b,b,R)}}else if(_!==void 0){const S=_.array;g=_.version;for(let y=0,v=S.length/3-1;y<v;y+=3){const R=y+0,w=y+1,b=y+2;d.push(R,w,w,b,b,R)}}else return;const p=new(am(d)?fm:dm)(d,1);p.version=g;const m=r.get(h);m&&e.remove(m),r.set(h,p)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function qy(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,_){_!==0&&(s.drawElementsInstanced(n,f,r,d*o,_),t.update(f,n,_))}function u(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,_);let p=0;for(let m=0;m<_;m++)p+=f[m];t.update(p,n,1)}function h(d,f,_,g){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/o,f[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,_);let m=0;for(let S=0;S<_;S++)m+=f[S];for(let S=0;S<g.length;S++)t.update(m,n,g[S])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Ky(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function $y(s,e,t){const n=new WeakMap,i=new Et;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;_===!0&&(v=1),g===!0&&(v=2),p===!0&&(v=3);let R=a.attributes.position.count*v,w=1;R>e.maxTextureSize&&(w=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const b=new Float32Array(R*w*4*h),P=new cm(b,R,w,h);P.type=Ti,P.needsUpdate=!0;const T=v*4;for(let L=0;L<h;L++){const D=m[L],z=S[L],J=y[L],K=R*w*4*L;for(let W=0;W<D.count;W++){const j=W*T;_===!0&&(i.fromBufferAttribute(D,W),b[K+j+0]=i.x,b[K+j+1]=i.y,b[K+j+2]=i.z,b[K+j+3]=0),g===!0&&(i.fromBufferAttribute(z,W),b[K+j+4]=i.x,b[K+j+5]=i.y,b[K+j+6]=i.z,b[K+j+7]=0),p===!0&&(i.fromBufferAttribute(J,W),b[K+j+8]=i.x,b[K+j+9]=i.y,b[K+j+10]=i.z,b[K+j+11]=J.itemSize===4?i.w:1)}}d={count:h,texture:P,size:new ct(R,w)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function jy(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class xm extends fn{constructor(e,t,n,i,r,o,a,l,c,u=no){if(u!==no&&u!==_o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===no&&(n=_s),n===void 0&&u===_o&&(n=mo),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const vm=new fn,vf=new xm(1,1),ym=new cm,Mm=new F0,Sm=new _m,yf=[],Mf=[],Sf=new Float32Array(16),Tf=new Float32Array(9),Ef=new Float32Array(4);function Ro(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=yf[i];if(r===void 0&&(r=new Float32Array(i),yf[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function sn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function on(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function wc(s,e){let t=Mf[e];t===void 0&&(t=new Int32Array(e),Mf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Zy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Jy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;s.uniform2fv(this.addr,e),on(t,e)}}function Qy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;s.uniform3fv(this.addr,e),on(t,e)}}function eM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;s.uniform4fv(this.addr,e),on(t,e)}}function tM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(sn(t,n))return;Ef.set(n),s.uniformMatrix2fv(this.addr,!1,Ef),on(t,n)}}function nM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(sn(t,n))return;Tf.set(n),s.uniformMatrix3fv(this.addr,!1,Tf),on(t,n)}}function iM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(sn(t,n))return;Sf.set(n),s.uniformMatrix4fv(this.addr,!1,Sf),on(t,n)}}function rM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function sM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;s.uniform2iv(this.addr,e),on(t,e)}}function oM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;s.uniform3iv(this.addr,e),on(t,e)}}function aM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;s.uniform4iv(this.addr,e),on(t,e)}}function lM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function cM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;s.uniform2uiv(this.addr,e),on(t,e)}}function uM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;s.uniform3uiv(this.addr,e),on(t,e)}}function hM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;s.uniform4uiv(this.addr,e),on(t,e)}}function dM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(vf.compareFunction=om,r=vf):r=vm,t.setTexture2D(e||r,i)}function fM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Mm,i)}function pM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Sm,i)}function mM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ym,i)}function _M(s){switch(s){case 5126:return Zy;case 35664:return Jy;case 35665:return Qy;case 35666:return eM;case 35674:return tM;case 35675:return nM;case 35676:return iM;case 5124:case 35670:return rM;case 35667:case 35671:return sM;case 35668:case 35672:return oM;case 35669:case 35673:return aM;case 5125:return lM;case 36294:return cM;case 36295:return uM;case 36296:return hM;case 35678:case 36198:case 36298:case 36306:case 35682:return dM;case 35679:case 36299:case 36307:return fM;case 35680:case 36300:case 36308:case 36293:return pM;case 36289:case 36303:case 36311:case 36292:return mM}}function gM(s,e){s.uniform1fv(this.addr,e)}function xM(s,e){const t=Ro(e,this.size,2);s.uniform2fv(this.addr,t)}function vM(s,e){const t=Ro(e,this.size,3);s.uniform3fv(this.addr,t)}function yM(s,e){const t=Ro(e,this.size,4);s.uniform4fv(this.addr,t)}function MM(s,e){const t=Ro(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function SM(s,e){const t=Ro(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function TM(s,e){const t=Ro(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function EM(s,e){s.uniform1iv(this.addr,e)}function bM(s,e){s.uniform2iv(this.addr,e)}function AM(s,e){s.uniform3iv(this.addr,e)}function wM(s,e){s.uniform4iv(this.addr,e)}function RM(s,e){s.uniform1uiv(this.addr,e)}function CM(s,e){s.uniform2uiv(this.addr,e)}function PM(s,e){s.uniform3uiv(this.addr,e)}function LM(s,e){s.uniform4uiv(this.addr,e)}function IM(s,e,t){const n=this.cache,i=e.length,r=wc(t,i);sn(n,r)||(s.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||vm,r[o])}function DM(s,e,t){const n=this.cache,i=e.length,r=wc(t,i);sn(n,r)||(s.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Mm,r[o])}function UM(s,e,t){const n=this.cache,i=e.length,r=wc(t,i);sn(n,r)||(s.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Sm,r[o])}function NM(s,e,t){const n=this.cache,i=e.length,r=wc(t,i);sn(n,r)||(s.uniform1iv(this.addr,r),on(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||ym,r[o])}function OM(s){switch(s){case 5126:return gM;case 35664:return xM;case 35665:return vM;case 35666:return yM;case 35674:return MM;case 35675:return SM;case 35676:return TM;case 5124:case 35670:return EM;case 35667:case 35671:return bM;case 35668:case 35672:return AM;case 35669:case 35673:return wM;case 5125:return RM;case 36294:return CM;case 36295:return PM;case 36296:return LM;case 35678:case 36198:case 36298:case 36306:case 35682:return IM;case 35679:case 36299:case 36307:return DM;case 35680:case 36300:case 36308:case 36293:return UM;case 36289:case 36303:case 36311:case 36292:return NM}}class FM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_M(t.type)}}class BM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=OM(t.type)}}class kM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const su=/(\w+)(\])?(\[|\.)?/g;function bf(s,e){s.seq.push(e),s.map[e.id]=e}function zM(s,e,t){const n=s.name,i=n.length;for(su.lastIndex=0;;){const r=su.exec(n),o=su.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){bf(t,c===void 0?new FM(a,s,e):new BM(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new kM(a),bf(t,h)),t=h}}}class Xl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);zM(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Af(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const HM=37297;let VM=0;function GM(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function WM(s){const e=xt.getPrimaries(xt.workingColorSpace),t=xt.getPrimaries(s);let n;switch(e===t?n="":e===ac&&t===oc?n="LinearDisplayP3ToLinearSRGB":e===oc&&t===ac&&(n="LinearSRGBToLinearDisplayP3"),s){case pn:case bc:return[n,"LinearTransferOETF"];case ft:case Jh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function wf(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+GM(s.getShaderSource(e),o)}else return i}function XM(s,e){const t=WM(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function YM(s,e){let t;switch(e){case Xg:t="Linear";break;case Yg:t="Reinhard";break;case qg:t="OptimizedCineon";break;case Yp:t="ACESFilmic";break;case $g:t="AgX";break;case jg:t="Neutral";break;case Kg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const gl=new B;function qM(){xt.getLuminanceCoefficients(gl);const s=gl.x.toFixed(4),e=gl.y.toFixed(4),t=gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function $M(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jM(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function $o(s){return s!==""}function Rf(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ZM=/^[ \t]*#include +<([\w\d./]+)>/gm;function hh(s){return s.replace(ZM,QM)}const JM=new Map;function QM(s,e){let t=nt[e];if(t===void 0){const n=JM.get(e);if(n!==void 0)t=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return hh(t)}const eS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pf(s){return s.replace(eS,tS)}function tS(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Lf(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nS(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Wp?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===gg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function iS(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case fo:case po:e="ENVMAP_TYPE_CUBE";break;case Ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rS(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case po:e="ENVMAP_MODE_REFRACTION";break}return e}function sS(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Xp:e="ENVMAP_BLENDING_MULTIPLY";break;case Gg:e="ENVMAP_BLENDING_MIX";break;case Wg:e="ENVMAP_BLENDING_ADD";break}return e}function oS(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function aS(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=nS(t),c=iS(t),u=rS(t),h=sS(t),d=oS(t),f=KM(t),_=$M(r),g=i.createProgram();let p,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter($o).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter($o).join(`
`),m.length>0&&(m+=`
`)):(p=[Lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),m=[Lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ur?"#define TONE_MAPPING":"",t.toneMapping!==Ur?nt.tonemapping_pars_fragment:"",t.toneMapping!==Ur?YM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,XM("linearToOutputTexel",t.outputColorSpace),qM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($o).join(`
`)),o=hh(o),o=Rf(o,t),o=Cf(o,t),a=hh(a),a=Rf(a,t),a=Cf(a,t),o=Pf(o),a=Pf(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Wd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=S+p+o,v=S+m+a,R=Af(i,i.VERTEX_SHADER,y),w=Af(i,i.FRAGMENT_SHADER,v);i.attachShader(g,R),i.attachShader(g,w),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function b(L){if(s.debug.checkShaderErrors){const D=i.getProgramInfoLog(g).trim(),z=i.getShaderInfoLog(R).trim(),J=i.getShaderInfoLog(w).trim();let K=!0,W=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,R,w);else{const j=wf(i,R,"vertex"),X=wf(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+D+`
`+j+`
`+X)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(z===""||J==="")&&(W=!1);W&&(L.diagnostics={runnable:K,programLog:D,vertexShader:{log:z,prefix:p},fragmentShader:{log:J,prefix:m}})}i.deleteShader(R),i.deleteShader(w),P=new Xl(i,g),T=jM(i,g)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(g,HM)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=VM++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=w,this}let lS=0;class cS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new uS(e),t.set(e,n)),n}}class uS{constructor(e){this.id=lS++,this.code=e,this.usedTimes=0}}function hS(s,e,t,n,i,r,o){const a=new um,l=new cS,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(T){return c.add(T),T===0?"uv":`uv${T}`}function p(T,M,L,D,z){const J=D.fog,K=z.geometry,W=T.isMeshStandardMaterial?D.environment:null,j=(T.isMeshStandardMaterial?t:e).get(T.envMap||W),X=j&&j.mapping===Ec?j.image.height:null,H=_[T.type];T.precision!==null&&(f=i.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const E=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,q=E!==void 0?E.length:0;let re=0;K.morphAttributes.position!==void 0&&(re=1),K.morphAttributes.normal!==void 0&&(re=2),K.morphAttributes.color!==void 0&&(re=3);let ce,U,Q,oe;if(H){const Je=Li[H];ce=Je.vertexShader,U=Je.fragmentShader}else ce=T.vertexShader,U=T.fragmentShader,l.update(T),Q=l.getVertexShaderID(T),oe=l.getFragmentShaderID(T);const ie=s.getRenderTarget(),Se=z.isInstancedMesh===!0,ge=z.isBatchedMesh===!0,ye=!!T.map,Ue=!!T.matcap,I=!!j,Be=!!T.aoMap,Le=!!T.lightMap,Xe=!!T.bumpMap,V=!!T.normalMap,k=!!T.displacementMap,Oe=!!T.emissiveMap,ze=!!T.metalnessMap,C=!!T.roughnessMap,x=T.anisotropy>0,Z=T.clearcoat>0,le=T.dispersion>0,he=T.iridescence>0,ee=T.sheen>0,Re=T.transmission>0,de=x&&!!T.anisotropyMap,xe=Z&&!!T.clearcoatMap,Ge=Z&&!!T.clearcoatNormalMap,fe=Z&&!!T.clearcoatRoughnessMap,Ee=he&&!!T.iridescenceMap,Ve=he&&!!T.iridescenceThicknessMap,Pe=ee&&!!T.sheenColorMap,ue=ee&&!!T.sheenRoughnessMap,Ae=!!T.specularMap,je=!!T.specularColorMap,_t=!!T.specularIntensityMap,N=Re&&!!T.transmissionMap,ne=Re&&!!T.thicknessMap,se=!!T.gradientMap,te=!!T.alphaMap,me=T.alphaTest>0,ke=!!T.alphaHash,Ye=!!T.extensions;let St=Ur;T.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(St=s.toneMapping);const bt={shaderID:H,shaderType:T.type,shaderName:T.name,vertexShader:ce,fragmentShader:U,defines:T.defines,customVertexShaderID:Q,customFragmentShaderID:oe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:ge,batchingColor:ge&&z._colorsTexture!==null,instancing:Se,instancingColor:Se&&z.instanceColor!==null,instancingMorph:Se&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ie===null?s.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:pn,alphaToCoverage:!!T.alphaToCoverage,map:ye,matcap:Ue,envMap:I,envMapMode:I&&j.mapping,envMapCubeUVHeight:X,aoMap:Be,lightMap:Le,bumpMap:Xe,normalMap:V,displacementMap:d&&k,emissiveMap:Oe,normalMapObjectSpace:V&&T.normalMapType===s0,normalMapTangentSpace:V&&T.normalMapType===sm,metalnessMap:ze,roughnessMap:C,anisotropy:x,anisotropyMap:de,clearcoat:Z,clearcoatMap:xe,clearcoatNormalMap:Ge,clearcoatRoughnessMap:fe,dispersion:le,iridescence:he,iridescenceMap:Ee,iridescenceThicknessMap:Ve,sheen:ee,sheenColorMap:Pe,sheenRoughnessMap:ue,specularMap:Ae,specularColorMap:je,specularIntensityMap:_t,transmission:Re,transmissionMap:N,thicknessMap:ne,gradientMap:se,opaque:T.transparent===!1&&T.blending===to&&T.alphaToCoverage===!1,alphaMap:te,alphaTest:me,alphaHash:ke,combine:T.combine,mapUv:ye&&g(T.map.channel),aoMapUv:Be&&g(T.aoMap.channel),lightMapUv:Le&&g(T.lightMap.channel),bumpMapUv:Xe&&g(T.bumpMap.channel),normalMapUv:V&&g(T.normalMap.channel),displacementMapUv:k&&g(T.displacementMap.channel),emissiveMapUv:Oe&&g(T.emissiveMap.channel),metalnessMapUv:ze&&g(T.metalnessMap.channel),roughnessMapUv:C&&g(T.roughnessMap.channel),anisotropyMapUv:de&&g(T.anisotropyMap.channel),clearcoatMapUv:xe&&g(T.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&g(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&g(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&g(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&g(T.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&g(T.sheenColorMap.channel),sheenRoughnessMapUv:ue&&g(T.sheenRoughnessMap.channel),specularMapUv:Ae&&g(T.specularMap.channel),specularColorMapUv:je&&g(T.specularColorMap.channel),specularIntensityMapUv:_t&&g(T.specularIntensityMap.channel),transmissionMapUv:N&&g(T.transmissionMap.channel),thicknessMapUv:ne&&g(T.thicknessMap.channel),alphaMapUv:te&&g(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(V||x),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!K.attributes.uv&&(ye||te),fog:!!J,useFog:T.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:z.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:re,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:St,decodeVideoTexture:ye&&T.map.isVideoTexture===!0&&xt.getTransfer(T.map.colorSpace)===Ut,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Mi,flipSided:T.side===Hn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ye&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&T.extensions.multiDraw===!0||ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function m(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)M.push(L),M.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(S(M,T),y(M,T),M.push(s.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function S(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function y(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),T.push(a.mask)}function v(T){const M=_[T.type];let L;if(M){const D=Li[M];L=uh.clone(D.uniforms)}else L=T.uniforms;return L}function R(T,M){let L;for(let D=0,z=u.length;D<z;D++){const J=u[D];if(J.cacheKey===M){L=J,++L.usedTimes;break}}return L===void 0&&(L=new aS(s,M,T,r),u.push(L)),L}function w(T){if(--T.usedTimes===0){const M=u.indexOf(T);u[M]=u[u.length-1],u.pop(),T.destroy()}}function b(T){l.remove(T)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:R,releaseProgram:w,releaseShaderCache:b,programs:u,dispose:P}}function dS(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function fS(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function If(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Df(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,_,g,p){let m=s[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},s[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=g,m.group=p),e++,m}function a(h,d,f,_,g,p){const m=o(h,d,f,_,g,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function l(h,d,f,_,g,p){const m=o(h,d,f,_,g,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||fS),n.length>1&&n.sort(d||If),i.length>1&&i.sort(d||If)}function u(){for(let h=e,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function pS(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Df,s.set(n,[o])):i>=r.length?(o=new Df,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function mS(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ke};break;case"SpotLight":t={position:new B,direction:new B,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new B,halfWidth:new B,halfHeight:new B};break}return s[e.id]=t,t}}}function _S(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let gS=0;function xS(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function vS(s){const e=new mS,t=_S(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const i=new B,r=new et,o=new et;function a(c){let u=0,h=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,_=0,g=0,p=0,m=0,S=0,y=0,v=0,R=0,w=0,b=0;c.sort(xS);for(let T=0,M=c.length;T<M;T++){const L=c[T],D=L.color,z=L.intensity,J=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=D.r*z,h+=D.g*z,d+=D.b*z;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],z);b++}else if(L.isDirectionalLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,X=t.get(L);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=L.shadow.matrix,S++}n.directional[f]=W,f++}else if(L.isSpotLight){const W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(D).multiplyScalar(z),W.distance=J,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[g]=W;const j=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,j.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[g]=j.matrix,L.castShadow){const X=t.get(L);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,n.spotShadow[g]=X,n.spotShadowMap[g]=K,v++}g++}else if(L.isRectAreaLight){const W=e.get(L);W.color.copy(D).multiplyScalar(z),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[p]=W,p++}else if(L.isPointLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const j=L.shadow,X=t.get(L);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,X.shadowCameraNear=j.camera.near,X.shadowCameraFar=j.camera.far,n.pointShadow[_]=X,n.pointShadowMap[_]=K,n.pointShadowMatrix[_]=L.shadow.matrix,y++}n.point[_]=W,_++}else if(L.isHemisphereLight){const W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(z),W.groundColor.copy(L.groundColor).multiplyScalar(z),n.hemi[m]=W,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==_||P.spotLength!==g||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==S||P.numPointShadows!==y||P.numSpotShadows!==v||P.numSpotMaps!==R||P.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,P.directionalLength=f,P.pointLength=_,P.spotLength=g,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=S,P.numPointShadows=y,P.numSpotShadows=v,P.numSpotMaps=R,P.numLightProbes=b,n.version=gS++)}function l(c,u){let h=0,d=0,f=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const y=c[m];if(y.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),h++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),f++}else if(y.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Uf(s){const e=new vS(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function yS(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Uf(s),e.set(i,[a])):r>=o.length?(a=new Uf(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class MS extends Fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=i0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class SS extends Fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const TS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ES=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bS(s,e,t){let n=new ed;const i=new ct,r=new ct,o=new Et,a=new MS({depthPacking:r0}),l=new SS,c={},u=t.maxTextureSize,h={[zi]:Hn,[Hn]:zi,[Mi]:Mi},d=new hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:TS,fragmentShader:ES}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new Ai;_.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Mt(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wp;let m=this.type;this.render=function(w,b,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const T=s.getRenderTarget(),M=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Dr),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const z=m!==Ji&&this.type===Ji,J=m===Ji&&this.type!==Ji;for(let K=0,W=w.length;K<W;K++){const j=w[K],X=j.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const H=X.getFrameExtents();if(i.multiply(H),r.copy(X.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/H.x),i.x=r.x*H.x,X.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/H.y),i.y=r.y*H.y,X.mapSize.y=r.y)),X.map===null||z===!0||J===!0){const q=this.type!==Ji?{minFilter:bn,magFilter:bn}:{};X.map!==null&&X.map.dispose(),X.map=new kr(i.x,i.y,q),X.map.texture.name=j.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const E=X.getViewportCount();for(let q=0;q<E;q++){const re=X.getViewport(q);o.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),D.viewport(o),X.updateMatrices(j,q),n=X.getFrustum(),v(b,P,X.camera,j,this.type)}X.isPointLightShadow!==!0&&this.type===Ji&&S(X,P),X.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(T,M,L)};function S(w,b){const P=e.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new kr(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(b,null,P,d,g,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(b,null,P,f,g,null)}function y(w,b,P,T){let M=null;const L=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)M=L;else if(M=P.isPointLight===!0?l:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const D=M.uuid,z=b.uuid;let J=c[D];J===void 0&&(J={},c[D]=J);let K=J[z];K===void 0&&(K=M.clone(),J[z]=K,b.addEventListener("dispose",R)),M=K}if(M.visible=b.visible,M.wireframe=b.wireframe,T===Ji?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:h[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const D=s.properties.get(M);D.light=P}return M}function v(w,b,P,T,M){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Ji)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const z=e.update(w),J=w.material;if(Array.isArray(J)){const K=z.groups;for(let W=0,j=K.length;W<j;W++){const X=K[W],H=J[X.materialIndex];if(H&&H.visible){const E=y(w,H,T,M);w.onBeforeShadow(s,w,b,P,z,E,X),s.renderBufferDirect(P,null,z,E,w,X),w.onAfterShadow(s,w,b,P,z,E,X)}}}else if(J.visible){const K=y(w,J,T,M);w.onBeforeShadow(s,w,b,P,z,K,null),s.renderBufferDirect(P,null,z,K,w,null),w.onAfterShadow(s,w,b,P,z,K,null)}}const D=w.children;for(let z=0,J=D.length;z<J;z++)v(D[z],b,P,T,M)}function R(w){w.target.removeEventListener("dispose",R);for(const P in c){const T=c[P],M=w.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}function AS(s){function e(){let N=!1;const ne=new Et;let se=null;const te=new Et(0,0,0,0);return{setMask:function(me){se!==me&&!N&&(s.colorMask(me,me,me,me),se=me)},setLocked:function(me){N=me},setClear:function(me,ke,Ye,St,bt){bt===!0&&(me*=St,ke*=St,Ye*=St),ne.set(me,ke,Ye,St),te.equals(ne)===!1&&(s.clearColor(me,ke,Ye,St),te.copy(ne))},reset:function(){N=!1,se=null,te.set(-1,0,0,0)}}}function t(){let N=!1,ne=null,se=null,te=null;return{setTest:function(me){me?oe(s.DEPTH_TEST):ie(s.DEPTH_TEST)},setMask:function(me){ne!==me&&!N&&(s.depthMask(me),ne=me)},setFunc:function(me){if(se!==me){switch(me){case Og:s.depthFunc(s.NEVER);break;case Fg:s.depthFunc(s.ALWAYS);break;case Bg:s.depthFunc(s.LESS);break;case nc:s.depthFunc(s.LEQUAL);break;case kg:s.depthFunc(s.EQUAL);break;case zg:s.depthFunc(s.GEQUAL);break;case Hg:s.depthFunc(s.GREATER);break;case Vg:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}se=me}},setLocked:function(me){N=me},setClear:function(me){te!==me&&(s.clearDepth(me),te=me)},reset:function(){N=!1,ne=null,se=null,te=null}}}function n(){let N=!1,ne=null,se=null,te=null,me=null,ke=null,Ye=null,St=null,bt=null;return{setTest:function(Je){N||(Je?oe(s.STENCIL_TEST):ie(s.STENCIL_TEST))},setMask:function(Je){ne!==Je&&!N&&(s.stencilMask(Je),ne=Je)},setFunc:function(Je,We,Fe){(se!==Je||te!==We||me!==Fe)&&(s.stencilFunc(Je,We,Fe),se=Je,te=We,me=Fe)},setOp:function(Je,We,Fe){(ke!==Je||Ye!==We||St!==Fe)&&(s.stencilOp(Je,We,Fe),ke=Je,Ye=We,St=Fe)},setLocked:function(Je){N=Je},setClear:function(Je){bt!==Je&&(s.clearStencil(Je),bt=Je)},reset:function(){N=!1,ne=null,se=null,te=null,me=null,ke=null,Ye=null,St=null,bt=null}}}const i=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],f=null,_=!1,g=null,p=null,m=null,S=null,y=null,v=null,R=null,w=new Ke(0,0,0),b=0,P=!1,T=null,M=null,L=null,D=null,z=null;const J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,W=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(j)[1]),K=W>=1):j.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),K=W>=2);let X=null,H={};const E=s.getParameter(s.SCISSOR_BOX),q=s.getParameter(s.VIEWPORT),re=new Et().fromArray(E),ce=new Et().fromArray(q);function U(N,ne,se,te){const me=new Uint8Array(4),ke=s.createTexture();s.bindTexture(N,ke),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ye=0;Ye<se;Ye++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(ne,0,s.RGBA,1,1,te,0,s.RGBA,s.UNSIGNED_BYTE,me):s.texImage2D(ne+Ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,me);return ke}const Q={};Q[s.TEXTURE_2D]=U(s.TEXTURE_2D,s.TEXTURE_2D,1),Q[s.TEXTURE_CUBE_MAP]=U(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[s.TEXTURE_2D_ARRAY]=U(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Q[s.TEXTURE_3D]=U(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),oe(s.DEPTH_TEST),r.setFunc(nc),Xe(!1),V(kd),oe(s.CULL_FACE),Be(Dr);function oe(N){c[N]!==!0&&(s.enable(N),c[N]=!0)}function ie(N){c[N]!==!1&&(s.disable(N),c[N]=!1)}function Se(N,ne){return u[N]!==ne?(s.bindFramebuffer(N,ne),u[N]=ne,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ne),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ne),!0):!1}function ge(N,ne){let se=d,te=!1;if(N){se=h.get(ne),se===void 0&&(se=[],h.set(ne,se));const me=N.textures;if(se.length!==me.length||se[0]!==s.COLOR_ATTACHMENT0){for(let ke=0,Ye=me.length;ke<Ye;ke++)se[ke]=s.COLOR_ATTACHMENT0+ke;se.length=me.length,te=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,te=!0);te&&s.drawBuffers(se)}function ye(N){return f!==N?(s.useProgram(N),f=N,!0):!1}const Ue={[is]:s.FUNC_ADD,[vg]:s.FUNC_SUBTRACT,[yg]:s.FUNC_REVERSE_SUBTRACT};Ue[Mg]=s.MIN,Ue[Sg]=s.MAX;const I={[Tg]:s.ZERO,[Eg]:s.ONE,[bg]:s.SRC_COLOR,[Iu]:s.SRC_ALPHA,[Lg]:s.SRC_ALPHA_SATURATE,[Cg]:s.DST_COLOR,[wg]:s.DST_ALPHA,[Ag]:s.ONE_MINUS_SRC_COLOR,[Du]:s.ONE_MINUS_SRC_ALPHA,[Pg]:s.ONE_MINUS_DST_COLOR,[Rg]:s.ONE_MINUS_DST_ALPHA,[Ig]:s.CONSTANT_COLOR,[Dg]:s.ONE_MINUS_CONSTANT_COLOR,[Ug]:s.CONSTANT_ALPHA,[Ng]:s.ONE_MINUS_CONSTANT_ALPHA};function Be(N,ne,se,te,me,ke,Ye,St,bt,Je){if(N===Dr){_===!0&&(ie(s.BLEND),_=!1);return}if(_===!1&&(oe(s.BLEND),_=!0),N!==xg){if(N!==g||Je!==P){if((p!==is||y!==is)&&(s.blendEquation(s.FUNC_ADD),p=is,y=is),Je)switch(N){case to:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case tc:s.blendFunc(s.ONE,s.ONE);break;case zd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hd:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case to:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case tc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case zd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hd:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}m=null,S=null,v=null,R=null,w.set(0,0,0),b=0,g=N,P=Je}return}me=me||ne,ke=ke||se,Ye=Ye||te,(ne!==p||me!==y)&&(s.blendEquationSeparate(Ue[ne],Ue[me]),p=ne,y=me),(se!==m||te!==S||ke!==v||Ye!==R)&&(s.blendFuncSeparate(I[se],I[te],I[ke],I[Ye]),m=se,S=te,v=ke,R=Ye),(St.equals(w)===!1||bt!==b)&&(s.blendColor(St.r,St.g,St.b,bt),w.copy(St),b=bt),g=N,P=!1}function Le(N,ne){N.side===Mi?ie(s.CULL_FACE):oe(s.CULL_FACE);let se=N.side===Hn;ne&&(se=!se),Xe(se),N.blending===to&&N.transparent===!1?Be(Dr):Be(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),i.setMask(N.colorWrite);const te=N.stencilWrite;o.setTest(te),te&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Oe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?oe(s.SAMPLE_ALPHA_TO_COVERAGE):ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(N){T!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),T=N)}function V(N){N!==mg?(oe(s.CULL_FACE),N!==M&&(N===kd?s.cullFace(s.BACK):N===_g?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ie(s.CULL_FACE),M=N}function k(N){N!==L&&(K&&s.lineWidth(N),L=N)}function Oe(N,ne,se){N?(oe(s.POLYGON_OFFSET_FILL),(D!==ne||z!==se)&&(s.polygonOffset(ne,se),D=ne,z=se)):ie(s.POLYGON_OFFSET_FILL)}function ze(N){N?oe(s.SCISSOR_TEST):ie(s.SCISSOR_TEST)}function C(N){N===void 0&&(N=s.TEXTURE0+J-1),X!==N&&(s.activeTexture(N),X=N)}function x(N,ne,se){se===void 0&&(X===null?se=s.TEXTURE0+J-1:se=X);let te=H[se];te===void 0&&(te={type:void 0,texture:void 0},H[se]=te),(te.type!==N||te.texture!==ne)&&(X!==se&&(s.activeTexture(se),X=se),s.bindTexture(N,ne||Q[N]),te.type=N,te.texture=ne)}function Z(){const N=H[X];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function le(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ge(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ve(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(N){re.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),re.copy(N))}function ue(N){ce.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),ce.copy(N))}function Ae(N,ne){let se=l.get(ne);se===void 0&&(se=new WeakMap,l.set(ne,se));let te=se.get(N);te===void 0&&(te=s.getUniformBlockIndex(ne,N.name),se.set(N,te))}function je(N,ne){const te=l.get(ne).get(N);a.get(ne)!==te&&(s.uniformBlockBinding(ne,te,N.__bindingPointIndex),a.set(ne,te))}function _t(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},X=null,H={},u={},h=new WeakMap,d=[],f=null,_=!1,g=null,p=null,m=null,S=null,y=null,v=null,R=null,w=new Ke(0,0,0),b=0,P=!1,T=null,M=null,L=null,D=null,z=null,re.set(0,0,s.canvas.width,s.canvas.height),ce.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:oe,disable:ie,bindFramebuffer:Se,drawBuffers:ge,useProgram:ye,setBlending:Be,setMaterial:Le,setFlipSided:Xe,setCullFace:V,setLineWidth:k,setPolygonOffset:Oe,setScissorTest:ze,activeTexture:C,bindTexture:x,unbindTexture:Z,compressedTexImage2D:le,compressedTexImage3D:he,texImage2D:Ee,texImage3D:Ve,updateUBOMapping:Ae,uniformBlockBinding:je,texStorage2D:Ge,texStorage3D:fe,texSubImage2D:ee,texSubImage3D:Re,compressedTexSubImage2D:de,compressedTexSubImage3D:xe,scissor:Pe,viewport:ue,reset:_t}}function Nf(s,e,t,n){const i=wS(n);switch(t){case Jp:return s*e;case em:return s*e;case tm:return s*e*2;case qh:return s*e/i.components*i.byteLength;case Kh:return s*e/i.components*i.byteLength;case nm:return s*e*2/i.components*i.byteLength;case $h:return s*e*2/i.components*i.byteLength;case Qp:return s*e*3/i.components*i.byteLength;case ui:return s*e*4/i.components*i.byteLength;case jh:return s*e*4/i.components*i.byteLength;case zl:case Hl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Vl:case Gl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fu:case ku:return Math.max(s,16)*Math.max(e,8)/4;case Ou:case Bu:return Math.max(s,8)*Math.max(e,8)/2;case zu:case Hu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Vu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Gu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wu:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Xu:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Yu:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case qu:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ku:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case $u:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ju:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Zu:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ju:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Qu:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case eh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case th:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case nh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Wl:case ih:case rh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case im:case sh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case oh:case ah:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wS(s){switch(s){case ur:case $p:return{byteLength:1,components:1};case xa:case jp:case Da:return{byteLength:2,components:1};case Xh:case Yh:return{byteLength:2,components:4};case _s:case Wh:case Ti:return{byteLength:4,components:1};case Zp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function RS(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,x){return f?new OffscreenCanvas(C,x):Ma("canvas")}function g(C,x,Z){let le=1;const he=ze(C);if((he.width>Z||he.height>Z)&&(le=Z/Math.max(he.width,he.height)),le<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ee=Math.floor(le*he.width),Re=Math.floor(le*he.height);h===void 0&&(h=_(ee,Re));const de=x?_(ee,Re):h;return de.width=ee,de.height=Re,de.getContext("2d").drawImage(C,0,0,ee,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+ee+"x"+Re+")."),de}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==bn&&C.minFilter!==Jn}function m(C){s.generateMipmap(C)}function S(C,x,Z,le,he=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ee=x;if(x===s.RED&&(Z===s.FLOAT&&(ee=s.R32F),Z===s.HALF_FLOAT&&(ee=s.R16F),Z===s.UNSIGNED_BYTE&&(ee=s.R8)),x===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ee=s.R8UI),Z===s.UNSIGNED_SHORT&&(ee=s.R16UI),Z===s.UNSIGNED_INT&&(ee=s.R32UI),Z===s.BYTE&&(ee=s.R8I),Z===s.SHORT&&(ee=s.R16I),Z===s.INT&&(ee=s.R32I)),x===s.RG&&(Z===s.FLOAT&&(ee=s.RG32F),Z===s.HALF_FLOAT&&(ee=s.RG16F),Z===s.UNSIGNED_BYTE&&(ee=s.RG8)),x===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ee=s.RG8UI),Z===s.UNSIGNED_SHORT&&(ee=s.RG16UI),Z===s.UNSIGNED_INT&&(ee=s.RG32UI),Z===s.BYTE&&(ee=s.RG8I),Z===s.SHORT&&(ee=s.RG16I),Z===s.INT&&(ee=s.RG32I)),x===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(ee=s.RGB9_E5),x===s.RGBA){const Re=he?sc:xt.getTransfer(le);Z===s.FLOAT&&(ee=s.RGBA32F),Z===s.HALF_FLOAT&&(ee=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(ee=Re===Ut?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(ee=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(ee=s.RGB5_A1)}return(ee===s.R16F||ee===s.R32F||ee===s.RG16F||ee===s.RG32F||ee===s.RGBA16F||ee===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function y(C,x){let Z;return C?x===null||x===_s||x===mo?Z=s.DEPTH24_STENCIL8:x===Ti?Z=s.DEPTH32F_STENCIL8:x===xa&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===_s||x===mo?Z=s.DEPTH_COMPONENT24:x===Ti?Z=s.DEPTH_COMPONENT32F:x===xa&&(Z=s.DEPTH_COMPONENT16),Z}function v(C,x){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==bn&&C.minFilter!==Jn?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function R(C){const x=C.target;x.removeEventListener("dispose",R),b(x),x.isVideoTexture&&u.delete(x)}function w(C){const x=C.target;x.removeEventListener("dispose",w),T(x)}function b(C){const x=n.get(C);if(x.__webglInit===void 0)return;const Z=C.source,le=d.get(Z);if(le){const he=le[x.__cacheKey];he.usedTimes--,he.usedTimes===0&&P(C),Object.keys(le).length===0&&d.delete(Z)}n.remove(C)}function P(C){const x=n.get(C);s.deleteTexture(x.__webglTexture);const Z=C.source,le=d.get(Z);delete le[x.__cacheKey],o.memory.textures--}function T(C){const x=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(x.__webglFramebuffer[le]))for(let he=0;he<x.__webglFramebuffer[le].length;he++)s.deleteFramebuffer(x.__webglFramebuffer[le][he]);else s.deleteFramebuffer(x.__webglFramebuffer[le]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[le])}else{if(Array.isArray(x.__webglFramebuffer))for(let le=0;le<x.__webglFramebuffer.length;le++)s.deleteFramebuffer(x.__webglFramebuffer[le]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let le=0;le<x.__webglColorRenderbuffer.length;le++)x.__webglColorRenderbuffer[le]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[le]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const Z=C.textures;for(let le=0,he=Z.length;le<he;le++){const ee=n.get(Z[le]);ee.__webglTexture&&(s.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(Z[le])}n.remove(C)}let M=0;function L(){M=0}function D(){const C=M;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),M+=1,C}function z(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function J(C,x){const Z=n.get(C);if(C.isVideoTexture&&k(C),C.isRenderTargetTexture===!1&&C.version>0&&Z.__version!==C.version){const le=C.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(Z,C,x);return}}t.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+x)}function K(C,x){const Z=n.get(C);if(C.version>0&&Z.__version!==C.version){ce(Z,C,x);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+x)}function W(C,x){const Z=n.get(C);if(C.version>0&&Z.__version!==C.version){ce(Z,C,x);return}t.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+x)}function j(C,x){const Z=n.get(C);if(C.version>0&&Z.__version!==C.version){U(Z,C,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+x)}const X={[ms]:s.REPEAT,[Ar]:s.CLAMP_TO_EDGE,[ic]:s.MIRRORED_REPEAT},H={[bn]:s.NEAREST,[Kp]:s.NEAREST_MIPMAP_NEAREST,[Ko]:s.NEAREST_MIPMAP_LINEAR,[Jn]:s.LINEAR,[kl]:s.LINEAR_MIPMAP_NEAREST,[rr]:s.LINEAR_MIPMAP_LINEAR},E={[o0]:s.NEVER,[d0]:s.ALWAYS,[a0]:s.LESS,[om]:s.LEQUAL,[l0]:s.EQUAL,[h0]:s.GEQUAL,[c0]:s.GREATER,[u0]:s.NOTEQUAL};function q(C,x){if(x.type===Ti&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Jn||x.magFilter===kl||x.magFilter===Ko||x.magFilter===rr||x.minFilter===Jn||x.minFilter===kl||x.minFilter===Ko||x.minFilter===rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,X[x.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,X[x.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,X[x.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,H[x.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,H[x.minFilter]),x.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,E[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===bn||x.minFilter!==Ko&&x.minFilter!==rr||x.type===Ti&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function re(C,x){let Z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",R));const le=x.source;let he=d.get(le);he===void 0&&(he={},d.set(le,he));const ee=z(x);if(ee!==C.__cacheKey){he[ee]===void 0&&(he[ee]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),he[ee].usedTimes++;const Re=he[C.__cacheKey];Re!==void 0&&(he[C.__cacheKey].usedTimes--,Re.usedTimes===0&&P(x)),C.__cacheKey=ee,C.__webglTexture=he[ee].texture}return Z}function ce(C,x,Z){let le=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(le=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(le=s.TEXTURE_3D);const he=re(C,x),ee=x.source;t.bindTexture(le,C.__webglTexture,s.TEXTURE0+Z);const Re=n.get(ee);if(ee.version!==Re.__version||he===!0){t.activeTexture(s.TEXTURE0+Z);const de=xt.getPrimaries(xt.workingColorSpace),xe=x.colorSpace===br?null:xt.getPrimaries(x.colorSpace),Ge=x.colorSpace===br||de===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let fe=g(x.image,!1,i.maxTextureSize);fe=Oe(x,fe);const Ee=r.convert(x.format,x.colorSpace),Ve=r.convert(x.type);let Pe=S(x.internalFormat,Ee,Ve,x.colorSpace,x.isVideoTexture);q(le,x);let ue;const Ae=x.mipmaps,je=x.isVideoTexture!==!0,_t=Re.__version===void 0||he===!0,N=ee.dataReady,ne=v(x,fe);if(x.isDepthTexture)Pe=y(x.format===_o,x.type),_t&&(je?t.texStorage2D(s.TEXTURE_2D,1,Pe,fe.width,fe.height):t.texImage2D(s.TEXTURE_2D,0,Pe,fe.width,fe.height,0,Ee,Ve,null));else if(x.isDataTexture)if(Ae.length>0){je&&_t&&t.texStorage2D(s.TEXTURE_2D,ne,Pe,Ae[0].width,Ae[0].height);for(let se=0,te=Ae.length;se<te;se++)ue=Ae[se],je?N&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,ue.width,ue.height,Ee,Ve,ue.data):t.texImage2D(s.TEXTURE_2D,se,Pe,ue.width,ue.height,0,Ee,Ve,ue.data);x.generateMipmaps=!1}else je?(_t&&t.texStorage2D(s.TEXTURE_2D,ne,Pe,fe.width,fe.height),N&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,fe.width,fe.height,Ee,Ve,fe.data)):t.texImage2D(s.TEXTURE_2D,0,Pe,fe.width,fe.height,0,Ee,Ve,fe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){je&&_t&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ne,Pe,Ae[0].width,Ae[0].height,fe.depth);for(let se=0,te=Ae.length;se<te;se++)if(ue=Ae[se],x.format!==ui)if(Ee!==null)if(je){if(N)if(x.layerUpdates.size>0){const me=Nf(ue.width,ue.height,x.format,x.type);for(const ke of x.layerUpdates){const Ye=ue.data.subarray(ke*me/ue.data.BYTES_PER_ELEMENT,(ke+1)*me/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,ke,ue.width,ue.height,1,Ee,Ye,0,0)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ue.width,ue.height,fe.depth,Ee,ue.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,Pe,ue.width,ue.height,fe.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?N&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ue.width,ue.height,fe.depth,Ee,Ve,ue.data):t.texImage3D(s.TEXTURE_2D_ARRAY,se,Pe,ue.width,ue.height,fe.depth,0,Ee,Ve,ue.data)}else{je&&_t&&t.texStorage2D(s.TEXTURE_2D,ne,Pe,Ae[0].width,Ae[0].height);for(let se=0,te=Ae.length;se<te;se++)ue=Ae[se],x.format!==ui?Ee!==null?je?N&&t.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,ue.width,ue.height,Ee,ue.data):t.compressedTexImage2D(s.TEXTURE_2D,se,Pe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?N&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,ue.width,ue.height,Ee,Ve,ue.data):t.texImage2D(s.TEXTURE_2D,se,Pe,ue.width,ue.height,0,Ee,Ve,ue.data)}else if(x.isDataArrayTexture)if(je){if(_t&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ne,Pe,fe.width,fe.height,fe.depth),N)if(x.layerUpdates.size>0){const se=Nf(fe.width,fe.height,x.format,x.type);for(const te of x.layerUpdates){const me=fe.data.subarray(te*se/fe.data.BYTES_PER_ELEMENT,(te+1)*se/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,te,fe.width,fe.height,1,Ee,Ve,me)}x.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ee,Ve,fe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Pe,fe.width,fe.height,fe.depth,0,Ee,Ve,fe.data);else if(x.isData3DTexture)je?(_t&&t.texStorage3D(s.TEXTURE_3D,ne,Pe,fe.width,fe.height,fe.depth),N&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ee,Ve,fe.data)):t.texImage3D(s.TEXTURE_3D,0,Pe,fe.width,fe.height,fe.depth,0,Ee,Ve,fe.data);else if(x.isFramebufferTexture){if(_t)if(je)t.texStorage2D(s.TEXTURE_2D,ne,Pe,fe.width,fe.height);else{let se=fe.width,te=fe.height;for(let me=0;me<ne;me++)t.texImage2D(s.TEXTURE_2D,me,Pe,se,te,0,Ee,Ve,null),se>>=1,te>>=1}}else if(Ae.length>0){if(je&&_t){const se=ze(Ae[0]);t.texStorage2D(s.TEXTURE_2D,ne,Pe,se.width,se.height)}for(let se=0,te=Ae.length;se<te;se++)ue=Ae[se],je?N&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,Ee,Ve,ue):t.texImage2D(s.TEXTURE_2D,se,Pe,Ee,Ve,ue);x.generateMipmaps=!1}else if(je){if(_t){const se=ze(fe);t.texStorage2D(s.TEXTURE_2D,ne,Pe,se.width,se.height)}N&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee,Ve,fe)}else t.texImage2D(s.TEXTURE_2D,0,Pe,Ee,Ve,fe);p(x)&&m(le),Re.__version=ee.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function U(C,x,Z){if(x.image.length!==6)return;const le=re(C,x),he=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+Z);const ee=n.get(he);if(he.version!==ee.__version||le===!0){t.activeTexture(s.TEXTURE0+Z);const Re=xt.getPrimaries(xt.workingColorSpace),de=x.colorSpace===br?null:xt.getPrimaries(x.colorSpace),xe=x.colorSpace===br||Re===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ge=x.isCompressedTexture||x.image[0].isCompressedTexture,fe=x.image[0]&&x.image[0].isDataTexture,Ee=[];for(let te=0;te<6;te++)!Ge&&!fe?Ee[te]=g(x.image[te],!0,i.maxCubemapSize):Ee[te]=fe?x.image[te].image:x.image[te],Ee[te]=Oe(x,Ee[te]);const Ve=Ee[0],Pe=r.convert(x.format,x.colorSpace),ue=r.convert(x.type),Ae=S(x.internalFormat,Pe,ue,x.colorSpace),je=x.isVideoTexture!==!0,_t=ee.__version===void 0||le===!0,N=he.dataReady;let ne=v(x,Ve);q(s.TEXTURE_CUBE_MAP,x);let se;if(Ge){je&&_t&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ne,Ae,Ve.width,Ve.height);for(let te=0;te<6;te++){se=Ee[te].mipmaps;for(let me=0;me<se.length;me++){const ke=se[me];x.format!==ui?Pe!==null?je?N&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,me,0,0,ke.width,ke.height,Pe,ke.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,me,Ae,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,me,0,0,ke.width,ke.height,Pe,ue,ke.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,me,Ae,ke.width,ke.height,0,Pe,ue,ke.data)}}}else{if(se=x.mipmaps,je&&_t){se.length>0&&ne++;const te=ze(Ee[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ne,Ae,te.width,te.height)}for(let te=0;te<6;te++)if(fe){je?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ee[te].width,Ee[te].height,Pe,ue,Ee[te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ae,Ee[te].width,Ee[te].height,0,Pe,ue,Ee[te].data);for(let me=0;me<se.length;me++){const Ye=se[me].image[te].image;je?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,me+1,0,0,Ye.width,Ye.height,Pe,ue,Ye.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,me+1,Ae,Ye.width,Ye.height,0,Pe,ue,Ye.data)}}else{je?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Pe,ue,Ee[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ae,Pe,ue,Ee[te]);for(let me=0;me<se.length;me++){const ke=se[me];je?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,me+1,0,0,Pe,ue,ke.image[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,me+1,Ae,Pe,ue,ke.image[te])}}}p(x)&&m(s.TEXTURE_CUBE_MAP),ee.__version=he.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function Q(C,x,Z,le,he,ee){const Re=r.convert(Z.format,Z.colorSpace),de=r.convert(Z.type),xe=S(Z.internalFormat,Re,de,Z.colorSpace);if(!n.get(x).__hasExternalTextures){const fe=Math.max(1,x.width>>ee),Ee=Math.max(1,x.height>>ee);he===s.TEXTURE_3D||he===s.TEXTURE_2D_ARRAY?t.texImage3D(he,ee,xe,fe,Ee,x.depth,0,Re,de,null):t.texImage2D(he,ee,xe,fe,Ee,0,Re,de,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),V(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,he,n.get(Z).__webglTexture,0,Xe(x)):(he===s.TEXTURE_2D||he>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,le,he,n.get(Z).__webglTexture,ee),t.bindFramebuffer(s.FRAMEBUFFER,null)}function oe(C,x,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,C),x.depthBuffer){const le=x.depthTexture,he=le&&le.isDepthTexture?le.type:null,ee=y(x.stencilBuffer,he),Re=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=Xe(x);V(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,de,ee,x.width,x.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,de,ee,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ee,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Re,s.RENDERBUFFER,C)}else{const le=x.textures;for(let he=0;he<le.length;he++){const ee=le[he],Re=r.convert(ee.format,ee.colorSpace),de=r.convert(ee.type),xe=S(ee.internalFormat,Re,de,ee.colorSpace),Ge=Xe(x);Z&&V(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,xe,x.width,x.height):V(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ge,xe,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,xe,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ie(C,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),J(x.depthTexture,0);const le=n.get(x.depthTexture).__webglTexture,he=Xe(x);if(x.depthTexture.format===no)V(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,le,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,le,0);else if(x.depthTexture.format===_o)V(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,le,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Se(C){const x=n.get(C),Z=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!x.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");ie(x.__webglFramebuffer,C)}else if(Z){x.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[le]),x.__webglDepthbuffer[le]=s.createRenderbuffer(),oe(x.__webglDepthbuffer[le],C,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=s.createRenderbuffer(),oe(x.__webglDepthbuffer,C,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(C,x,Z){const le=n.get(C);x!==void 0&&Q(le.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Se(C)}function ye(C){const x=C.texture,Z=n.get(C),le=n.get(x);C.addEventListener("dispose",w);const he=C.textures,ee=C.isWebGLCubeRenderTarget===!0,Re=he.length>1;if(Re||(le.__webglTexture===void 0&&(le.__webglTexture=s.createTexture()),le.__version=x.version,o.memory.textures++),ee){Z.__webglFramebuffer=[];for(let de=0;de<6;de++)if(x.mipmaps&&x.mipmaps.length>0){Z.__webglFramebuffer[de]=[];for(let xe=0;xe<x.mipmaps.length;xe++)Z.__webglFramebuffer[de][xe]=s.createFramebuffer()}else Z.__webglFramebuffer[de]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){Z.__webglFramebuffer=[];for(let de=0;de<x.mipmaps.length;de++)Z.__webglFramebuffer[de]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Re)for(let de=0,xe=he.length;de<xe;de++){const Ge=n.get(he[de]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&V(C)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let de=0;de<he.length;de++){const xe=he[de];Z.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[de]);const Ge=r.convert(xe.format,xe.colorSpace),fe=r.convert(xe.type),Ee=S(xe.internalFormat,Ge,fe,xe.colorSpace,C.isXRRenderTarget===!0),Ve=Xe(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ve,Ee,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,Z.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),oe(Z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ee){t.bindTexture(s.TEXTURE_CUBE_MAP,le.__webglTexture),q(s.TEXTURE_CUBE_MAP,x);for(let de=0;de<6;de++)if(x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)Q(Z.__webglFramebuffer[de][xe],C,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe);else Q(Z.__webglFramebuffer[de],C,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);p(x)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let de=0,xe=he.length;de<xe;de++){const Ge=he[de],fe=n.get(Ge);t.bindTexture(s.TEXTURE_2D,fe.__webglTexture),q(s.TEXTURE_2D,Ge),Q(Z.__webglFramebuffer,C,Ge,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,0),p(Ge)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let de=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(de=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(de,le.__webglTexture),q(de,x),x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)Q(Z.__webglFramebuffer[xe],C,x,s.COLOR_ATTACHMENT0,de,xe);else Q(Z.__webglFramebuffer,C,x,s.COLOR_ATTACHMENT0,de,0);p(x)&&m(de),t.unbindTexture()}C.depthBuffer&&Se(C)}function Ue(C){const x=C.textures;for(let Z=0,le=x.length;Z<le;Z++){const he=x[Z];if(p(he)){const ee=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Re=n.get(he).__webglTexture;t.bindTexture(ee,Re),m(ee),t.unbindTexture()}}}const I=[],Be=[];function Le(C){if(C.samples>0){if(V(C)===!1){const x=C.textures,Z=C.width,le=C.height;let he=s.COLOR_BUFFER_BIT;const ee=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=n.get(C),de=x.length>1;if(de)for(let xe=0;xe<x.length;xe++)t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let xe=0;xe<x.length;xe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(he|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(he|=s.STENCIL_BUFFER_BIT)),de){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Re.__webglColorRenderbuffer[xe]);const Ge=n.get(x[xe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ge,0)}s.blitFramebuffer(0,0,Z,le,0,0,Z,le,he,s.NEAREST),l===!0&&(I.length=0,Be.length=0,I.push(s.COLOR_ATTACHMENT0+xe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(I.push(ee),Be.push(ee),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Be)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,I))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let xe=0;xe<x.length;xe++){t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,Re.__webglColorRenderbuffer[xe]);const Ge=n.get(x[xe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,Ge,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const x=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function Xe(C){return Math.min(i.maxSamples,C.samples)}function V(C){const x=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function k(C){const x=o.render.frame;u.get(C)!==x&&(u.set(C,x),C.update())}function Oe(C,x){const Z=C.colorSpace,le=C.format,he=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Z!==pn&&Z!==br&&(xt.getTransfer(Z)===Ut?(le!==ui||he!==ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),x}function ze(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=L,this.setTexture2D=J,this.setTexture2DArray=K,this.setTexture3D=W,this.setTextureCube=j,this.rebindTextures=ge,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=V}function CS(s,e){function t(n,i=br){let r;const o=xt.getTransfer(i);if(n===ur)return s.UNSIGNED_BYTE;if(n===Xh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Yh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Zp)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===$p)return s.BYTE;if(n===jp)return s.SHORT;if(n===xa)return s.UNSIGNED_SHORT;if(n===Wh)return s.INT;if(n===_s)return s.UNSIGNED_INT;if(n===Ti)return s.FLOAT;if(n===Da)return s.HALF_FLOAT;if(n===Jp)return s.ALPHA;if(n===Qp)return s.RGB;if(n===ui)return s.RGBA;if(n===em)return s.LUMINANCE;if(n===tm)return s.LUMINANCE_ALPHA;if(n===no)return s.DEPTH_COMPONENT;if(n===_o)return s.DEPTH_STENCIL;if(n===qh)return s.RED;if(n===Kh)return s.RED_INTEGER;if(n===nm)return s.RG;if(n===$h)return s.RG_INTEGER;if(n===jh)return s.RGBA_INTEGER;if(n===zl||n===Hl||n===Vl||n===Gl)if(o===Ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===zl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Vl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===zl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Vl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ou||n===Fu||n===Bu||n===ku)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ou)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ku)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zu||n===Hu||n===Vu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zu||n===Hu)return o===Ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vu)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Gu||n===Wu||n===Xu||n===Yu||n===qu||n===Ku||n===$u||n===ju||n===Zu||n===Ju||n===Qu||n===eh||n===th||n===nh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Gu)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wu)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xu)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yu)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qu)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ku)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$u)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ju)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zu)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ju)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qu)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===eh)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===th)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nh)return o===Ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wl||n===ih||n===rh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Wl)return o===Ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ih)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===im||n===sh||n===oh||n===ah)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ah)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===mo?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class PS extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ss extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const LS={type:"move"};class ou{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(LS)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ss;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const IS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class US{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new fn,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new hr({vertexShader:IS,fragmentShader:DS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new nr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class NS extends Ss{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,_=null;const g=new US,p=t.getContextAttributes();let m=null,S=null;const y=[],v=[],R=new ct;let w=null;const b=new Tn;b.layers.enable(1),b.viewport=new Et;const P=new Tn;P.layers.enable(2),P.viewport=new Et;const T=[b,P],M=new PS;M.layers.enable(1),M.layers.enable(2);let L=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let Q=y[U];return Q===void 0&&(Q=new ou,y[U]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(U){let Q=y[U];return Q===void 0&&(Q=new ou,y[U]=Q),Q.getGripSpace()},this.getHand=function(U){let Q=y[U];return Q===void 0&&(Q=new ou,y[U]=Q),Q.getHandSpace()};function z(U){const Q=v.indexOf(U.inputSource);if(Q===-1)return;const oe=y[Q];oe!==void 0&&(oe.update(U.inputSource,U.frame,c||o),oe.dispatchEvent({type:U.type,data:U.inputSource}))}function J(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",K);for(let U=0;U<y.length;U++){const Q=v[U];Q!==null&&(v[U]=null,y[U].disconnect(Q))}L=null,D=null,g.reset(),e.setRenderTarget(m),f=null,d=null,h=null,i=null,S=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",J),i.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(R),i.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new kr(f.framebufferWidth,f.framebufferHeight,{format:ui,type:ur,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,oe=null,ie=null;p.depth&&(ie=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=p.stencil?_o:no,oe=p.stencil?mo:_s);const Se={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(Se),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new kr(d.textureWidth,d.textureHeight,{format:ui,type:ur,depthTexture:new xm(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ce.setContext(i),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(U){for(let Q=0;Q<U.removed.length;Q++){const oe=U.removed[Q],ie=v.indexOf(oe);ie>=0&&(v[ie]=null,y[ie].disconnect(oe))}for(let Q=0;Q<U.added.length;Q++){const oe=U.added[Q];let ie=v.indexOf(oe);if(ie===-1){for(let ge=0;ge<y.length;ge++)if(ge>=v.length){v.push(oe),ie=ge;break}else if(v[ge]===null){v[ge]=oe,ie=ge;break}if(ie===-1)break}const Se=y[ie];Se&&Se.connect(oe)}}const W=new B,j=new B;function X(U,Q,oe){W.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(oe.matrixWorld);const ie=W.distanceTo(j),Se=Q.projectionMatrix.elements,ge=oe.projectionMatrix.elements,ye=Se[14]/(Se[10]-1),Ue=Se[14]/(Se[10]+1),I=(Se[9]+1)/Se[5],Be=(Se[9]-1)/Se[5],Le=(Se[8]-1)/Se[0],Xe=(ge[8]+1)/ge[0],V=ye*Le,k=ye*Xe,Oe=ie/(-Le+Xe),ze=Oe*-Le;Q.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(ze),U.translateZ(Oe),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const C=ye+Oe,x=Ue+Oe,Z=V-ze,le=k+(ie-ze),he=I*Ue/x*C,ee=Be*Ue/x*C;U.projectionMatrix.makePerspective(Z,le,he,ee,C,x),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function H(U,Q){Q===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(Q.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;g.texture!==null&&(U.near=g.depthNear,U.far=g.depthFar),M.near=P.near=b.near=U.near,M.far=P.far=b.far=U.far,(L!==M.near||D!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,D=M.far,b.near=L,b.far=D,P.near=L,P.far=D,b.updateProjectionMatrix(),P.updateProjectionMatrix(),U.updateProjectionMatrix());const Q=U.parent,oe=M.cameras;H(M,Q);for(let ie=0;ie<oe.length;ie++)H(oe[ie],Q);oe.length===2?X(M,b,P):M.projectionMatrix.copy(b.projectionMatrix),E(U,M,Q)};function E(U,Q,oe){oe===null?U.matrix.copy(Q.matrixWorld):(U.matrix.copy(oe.matrixWorld),U.matrix.invert(),U.matrix.multiply(Q.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(Q.projectionMatrix),U.projectionMatrixInverse.copy(Q.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=go*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(U){l=U,d!==null&&(d.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let q=null;function re(U,Q){if(u=Q.getViewerPose(c||o),_=Q,u!==null){const oe=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let ie=!1;oe.length!==M.cameras.length&&(M.cameras.length=0,ie=!0);for(let ge=0;ge<oe.length;ge++){const ye=oe[ge];let Ue=null;if(f!==null)Ue=f.getViewport(ye);else{const Be=h.getViewSubImage(d,ye);Ue=Be.viewport,ge===0&&(e.setRenderTargetTextures(S,Be.colorTexture,d.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(S))}let I=T[ge];I===void 0&&(I=new Tn,I.layers.enable(ge),I.viewport=new Et,T[ge]=I),I.matrix.fromArray(ye.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(ye.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),ge===0&&(M.matrix.copy(I.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ie===!0&&M.cameras.push(I)}const Se=i.enabledFeatures;if(Se&&Se.includes("depth-sensing")){const ge=h.getDepthInformation(oe[0]);ge&&ge.isValid&&ge.texture&&g.init(e,ge,i.renderState)}}for(let oe=0;oe<y.length;oe++){const ie=v[oe],Se=y[oe];ie!==null&&Se!==void 0&&Se.update(ie,Q,c||o)}q&&q(U,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}const ce=new gm;ce.setAnimationLoop(re),this.setAnimationLoop=function(U){q=U},this.dispose=function(){}}}const $r=new Hi,OS=new et;function FS(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,pm(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,S,y,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),g(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,S,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Hn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Hn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m),y=S.envMap,v=S.envMapRotation;y&&(p.envMap.value=y,$r.copy(v),$r.x*=-1,$r.y*=-1,$r.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),p.envMapRotation.value.setFromMatrix4(OS.makeRotationFromEuler($r)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=y*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Hn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function BS(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const v=y.program;n.uniformBlockBinding(S,v)}function c(S,y){let v=i[S.id];v===void 0&&(_(S),v=u(S),i[S.id]=v,S.addEventListener("dispose",p));const R=y.program;n.updateUBOMapping(S,R);const w=e.render.frame;r[S.id]!==w&&(d(S),r[S.id]=w)}function u(S){const y=h();S.__bindingPointIndex=y;const v=s.createBuffer(),R=S.__size,w=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,R,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,v),v}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const y=i[S.id],v=S.uniforms,R=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let w=0,b=v.length;w<b;w++){const P=Array.isArray(v[w])?v[w]:[v[w]];for(let T=0,M=P.length;T<M;T++){const L=P[T];if(f(L,w,T,R)===!0){const D=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let J=0;for(let K=0;K<z.length;K++){const W=z[K],j=g(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,D+J,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,J),J+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(S,y,v,R){const w=S.value,b=y+"_"+v;if(R[b]===void 0)return typeof w=="number"||typeof w=="boolean"?R[b]=w:R[b]=w.clone(),!0;{const P=R[b];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return R[b]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function _(S){const y=S.uniforms;let v=0;const R=16;for(let b=0,P=y.length;b<P;b++){const T=Array.isArray(y[b])?y[b]:[y[b]];for(let M=0,L=T.length;M<L;M++){const D=T[M],z=Array.isArray(D.value)?D.value:[D.value];for(let J=0,K=z.length;J<K;J++){const W=z[J],j=g(W),X=v%R,H=X%j.boundary,E=X+H;v+=H,E!==0&&R-E<j.storage&&(v+=R-E),D.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=j.storage}}}const w=v%R;return w>0&&(v+=R-w),S.__size=v,S.__cache={},this}function g(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function p(S){const y=S.target;y.removeEventListener("dispose",p);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function m(){for(const S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}class kS{constructor(e={}){const{canvas:t=P0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ft,this.toneMapping=Ur,this.toneMappingExposure=1;const y=this;let v=!1,R=0,w=0,b=null,P=-1,T=null;const M=new Et,L=new Et;let D=null;const z=new Ke(0);let J=0,K=t.width,W=t.height,j=1,X=null,H=null;const E=new Et(0,0,K,W),q=new Et(0,0,K,W);let re=!1;const ce=new ed;let U=!1,Q=!1;const oe=new et,ie=new B,Se=new Et,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function Ue(){return b===null?j:1}let I=n;function Be(A,O){return t.getContext(A,O)}try{const A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gh}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",te,!1),t.addEventListener("webglcontextcreationerror",me,!1),I===null){const O="webgl2";if(I=Be(O,A),I===null)throw Be(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Le,Xe,V,k,Oe,ze,C,x,Z,le,he,ee,Re,de,xe,Ge,fe,Ee,Ve,Pe,ue,Ae,je,_t;function N(){Le=new Xy(I),Le.init(),Ae=new CS(I,Le),Xe=new ky(I,Le,e,Ae),V=new AS(I),k=new Ky(I),Oe=new dS,ze=new RS(I,Le,V,Oe,Xe,Ae,k),C=new Hy(y),x=new Wy(y),Z=new tx(I),je=new Fy(I,Z),le=new Yy(I,Z,k,je),he=new jy(I,le,Z,k),Ve=new $y(I,Xe,ze),Ge=new zy(Oe),ee=new hS(y,C,x,Le,Xe,je,Ge),Re=new FS(y,Oe),de=new pS,xe=new yS(Le),Ee=new Oy(y,C,x,V,he,d,l),fe=new bS(y,he,Xe),_t=new BS(I,k,Xe,V),Pe=new By(I,Le,k),ue=new qy(I,Le,k),k.programs=ee.programs,y.capabilities=Xe,y.extensions=Le,y.properties=Oe,y.renderLists=de,y.shadowMap=fe,y.state=V,y.info=k}N();const ne=new NS(y,I);this.xr=ne,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=Le.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Le.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(K,W,!1))},this.getSize=function(A){return A.set(K,W)},this.setSize=function(A,O,G=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=A,W=O,t.width=Math.floor(A*j),t.height=Math.floor(O*j),G===!0&&(t.style.width=A+"px",t.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(K*j,W*j).floor()},this.setDrawingBufferSize=function(A,O,G){K=A,W=O,j=G,t.width=Math.floor(A*G),t.height=Math.floor(O*G),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(M)},this.getViewport=function(A){return A.copy(E)},this.setViewport=function(A,O,G,Y){A.isVector4?E.set(A.x,A.y,A.z,A.w):E.set(A,O,G,Y),V.viewport(M.copy(E).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(q)},this.setScissor=function(A,O,G,Y){A.isVector4?q.set(A.x,A.y,A.z,A.w):q.set(A,O,G,Y),V.scissor(L.copy(q).multiplyScalar(j).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(A){V.setScissorTest(re=A)},this.setOpaqueSort=function(A){X=A},this.setTransparentSort=function(A){H=A},this.getClearColor=function(A){return A.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(A=!0,O=!0,G=!0){let Y=0;if(A){let F=!1;if(b!==null){const ae=b.texture.format;F=ae===jh||ae===$h||ae===Kh}if(F){const ae=b.texture.type,Me=ae===ur||ae===_s||ae===xa||ae===mo||ae===Xh||ae===Yh,Ce=Ee.getClearColor(),_e=Ee.getClearAlpha(),we=Ce.r,He=Ce.g,be=Ce.b;Me?(f[0]=we,f[1]=He,f[2]=be,f[3]=_e,I.clearBufferuiv(I.COLOR,0,f)):(_[0]=we,_[1]=He,_[2]=be,_[3]=_e,I.clearBufferiv(I.COLOR,0,_))}else Y|=I.COLOR_BUFFER_BIT}O&&(Y|=I.DEPTH_BUFFER_BIT),G&&(Y|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",te,!1),t.removeEventListener("webglcontextcreationerror",me,!1),de.dispose(),xe.dispose(),Oe.dispose(),C.dispose(),x.dispose(),he.dispose(),je.dispose(),_t.dispose(),ee.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Fe),ne.removeEventListener("sessionend",Qe),ve.stop()};function se(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const A=k.autoReset,O=fe.enabled,G=fe.autoUpdate,Y=fe.needsUpdate,F=fe.type;N(),k.autoReset=A,fe.enabled=O,fe.autoUpdate=G,fe.needsUpdate=Y,fe.type=F}function me(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ke(A){const O=A.target;O.removeEventListener("dispose",ke),Ye(O)}function Ye(A){St(A),Oe.remove(A)}function St(A){const O=Oe.get(A).programs;O!==void 0&&(O.forEach(function(G){ee.releaseProgram(G)}),A.isShaderMaterial&&ee.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,G,Y,F,ae){O===null&&(O=ge);const Me=F.isMesh&&F.matrixWorld.determinant()<0,Ce=wt(A,O,G,Y,F);V.setMaterial(Y,Me);let _e=G.index,we=1;if(Y.wireframe===!0){if(_e=le.getWireframeAttribute(G),_e===void 0)return;we=2}const He=G.drawRange,be=G.attributes.position;let ut=He.start*we,yt=(He.start+He.count)*we;ae!==null&&(ut=Math.max(ut,ae.start*we),yt=Math.min(yt,(ae.start+ae.count)*we)),_e!==null?(ut=Math.max(ut,0),yt=Math.min(yt,_e.count)):be!=null&&(ut=Math.max(ut,0),yt=Math.min(yt,be.count));const ht=yt-ut;if(ht<0||ht===1/0)return;je.setup(F,Y,Ce,G,_e);let dt,st=Pe;if(_e!==null&&(dt=Z.get(_e),st=ue,st.setIndex(dt)),F.isMesh)Y.wireframe===!0?(V.setLineWidth(Y.wireframeLinewidth*Ue()),st.setMode(I.LINES)):st.setMode(I.TRIANGLES);else if(F.isLine){let Ne=Y.linewidth;Ne===void 0&&(Ne=1),V.setLineWidth(Ne*Ue()),F.isLineSegments?st.setMode(I.LINES):F.isLineLoop?st.setMode(I.LINE_LOOP):st.setMode(I.LINE_STRIP)}else F.isPoints?st.setMode(I.POINTS):F.isSprite&&st.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)st.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Le.get("WEBGL_multi_draw"))st.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ne=F._multiDrawStarts,zt=F._multiDrawCounts,gt=F._multiDrawCount,jt=_e?Z.get(_e).bytesPerElement:1,mr=Oe.get(Y).currentProgram.getUniforms();for(let an=0;an<gt;an++)mr.setValue(I,"_gl_DrawID",an),st.render(Ne[an]/jt,zt[an])}else if(F.isInstancedMesh)st.renderInstances(ut,ht,F.count);else if(G.isInstancedBufferGeometry){const Ne=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,zt=Math.min(G.instanceCount,Ne);st.renderInstances(ut,ht,zt)}else st.render(ut,ht)};function bt(A,O,G){A.transparent===!0&&A.side===Mi&&A.forceSinglePass===!1?(A.side=Hn,A.needsUpdate=!0,At(A,O,G),A.side=zi,A.needsUpdate=!0,At(A,O,G),A.side=Mi):At(A,O,G)}this.compile=function(A,O,G=null){G===null&&(G=A),p=xe.get(G),p.init(O),S.push(p),G.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),A!==G&&A.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const Y=new Set;return A.traverse(function(F){const ae=F.material;if(ae)if(Array.isArray(ae))for(let Me=0;Me<ae.length;Me++){const Ce=ae[Me];bt(Ce,G,F),Y.add(Ce)}else bt(ae,G,F),Y.add(ae)}),S.pop(),p=null,Y},this.compileAsync=function(A,O,G=null){const Y=this.compile(A,O,G);return new Promise(F=>{function ae(){if(Y.forEach(function(Me){Oe.get(Me).currentProgram.isReady()&&Y.delete(Me)}),Y.size===0){F(A);return}setTimeout(ae,10)}Le.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Je=null;function We(A){Je&&Je(A)}function Fe(){ve.stop()}function Qe(){ve.start()}const ve=new gm;ve.setAnimationLoop(We),typeof self<"u"&&ve.setContext(self),this.setAnimationLoop=function(A){Je=A,ne.setAnimationLoop(A),A===null?ve.stop():ve.start()},ne.addEventListener("sessionstart",Fe),ne.addEventListener("sessionend",Qe),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(O),O=ne.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,O,b),p=xe.get(A,S.length),p.init(O),S.push(p),oe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ce.setFromProjectionMatrix(oe),Q=this.localClippingEnabled,U=Ge.init(this.clippingPlanes,Q),g=de.get(A,m.length),g.init(),m.push(g),ne.enabled===!0&&ne.isPresenting===!0){const ae=y.xr.getDepthSensingMesh();ae!==null&&Ze(ae,O,-1/0,y.sortObjects)}Ze(A,O,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(X,H),ye=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,ye&&Ee.addToRenderList(g,A),this.info.render.frame++,U===!0&&Ge.beginShadows();const G=p.state.shadowsArray;fe.render(G,A,O),U===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=g.opaque,F=g.transmissive;if(p.setupLights(),O.isArrayCamera){const ae=O.cameras;if(F.length>0)for(let Me=0,Ce=ae.length;Me<Ce;Me++){const _e=ae[Me];$e(Y,F,A,_e)}ye&&Ee.render(A);for(let Me=0,Ce=ae.length;Me<Ce;Me++){const _e=ae[Me];Ie(g,A,_e,_e.viewport)}}else F.length>0&&$e(Y,F,A,O),ye&&Ee.render(A),Ie(g,A,O);b!==null&&(ze.updateMultisampleRenderTarget(b),ze.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(y,A,O),je.resetDefaultState(),P=-1,T=null,S.pop(),S.length>0?(p=S[S.length-1],U===!0&&Ge.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function Ze(A,O,G,Y){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ce.intersectsSprite(A)){Y&&Se.setFromMatrixPosition(A.matrixWorld).applyMatrix4(oe);const Me=he.update(A),Ce=A.material;Ce.visible&&g.push(A,Me,Ce,G,Se.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ce.intersectsObject(A))){const Me=he.update(A),Ce=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Se.copy(A.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Se.copy(Me.boundingSphere.center)),Se.applyMatrix4(A.matrixWorld).applyMatrix4(oe)),Array.isArray(Ce)){const _e=Me.groups;for(let we=0,He=_e.length;we<He;we++){const be=_e[we],ut=Ce[be.materialIndex];ut&&ut.visible&&g.push(A,Me,ut,G,Se.z,be)}}else Ce.visible&&g.push(A,Me,Ce,G,Se.z,null)}}const ae=A.children;for(let Me=0,Ce=ae.length;Me<Ce;Me++)Ze(ae[Me],O,G,Y)}function Ie(A,O,G,Y){const F=A.opaque,ae=A.transmissive,Me=A.transparent;p.setupLightsView(G),U===!0&&Ge.setGlobalState(y.clippingPlanes,G),Y&&V.viewport(M.copy(Y)),F.length>0&&Dt(F,O,G),ae.length>0&&Dt(ae,O,G),Me.length>0&&Dt(Me,O,G),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function $e(A,O,G,Y){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new kr(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float")?Da:ur,minFilter:rr,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));const ae=p.state.transmissionRenderTarget[Y.id],Me=Y.viewport||M;ae.setSize(Me.z,Me.w);const Ce=y.getRenderTarget();y.setRenderTarget(ae),y.getClearColor(z),J=y.getClearAlpha(),J<1&&y.setClearColor(16777215,.5),y.clear(),ye&&Ee.render(G);const _e=y.toneMapping;y.toneMapping=Ur;const we=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),U===!0&&Ge.setGlobalState(y.clippingPlanes,Y),Dt(A,G,Y),ze.updateMultisampleRenderTarget(ae),ze.updateRenderTargetMipmap(ae),Le.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let be=0,ut=O.length;be<ut;be++){const yt=O[be],ht=yt.object,dt=yt.geometry,st=yt.material,Ne=yt.group;if(st.side===Mi&&ht.layers.test(Y.layers)){const zt=st.side;st.side=Hn,st.needsUpdate=!0,qe(ht,G,Y,dt,st,Ne),st.side=zt,st.needsUpdate=!0,He=!0}}He===!0&&(ze.updateMultisampleRenderTarget(ae),ze.updateRenderTargetMipmap(ae))}y.setRenderTarget(Ce),y.setClearColor(z,J),we!==void 0&&(Y.viewport=we),y.toneMapping=_e}function Dt(A,O,G){const Y=O.isScene===!0?O.overrideMaterial:null;for(let F=0,ae=A.length;F<ae;F++){const Me=A[F],Ce=Me.object,_e=Me.geometry,we=Y===null?Me.material:Y,He=Me.group;Ce.layers.test(G.layers)&&qe(Ce,O,G,_e,we,He)}}function qe(A,O,G,Y,F,ae){A.onBeforeRender(y,O,G,Y,F,ae),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),F.transparent===!0&&F.side===Mi&&F.forceSinglePass===!1?(F.side=Hn,F.needsUpdate=!0,y.renderBufferDirect(G,O,Y,F,A,ae),F.side=zi,F.needsUpdate=!0,y.renderBufferDirect(G,O,Y,F,A,ae),F.side=Mi):y.renderBufferDirect(G,O,Y,F,A,ae),A.onAfterRender(y,O,G,Y,F,ae)}function At(A,O,G){O.isScene!==!0&&(O=ge);const Y=Oe.get(A),F=p.state.lights,ae=p.state.shadowsArray,Me=F.state.version,Ce=ee.getParameters(A,F.state,ae,O,G),_e=ee.getProgramCacheKey(Ce);let we=Y.programs;Y.environment=A.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(A.isMeshStandardMaterial?x:C).get(A.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,we===void 0&&(A.addEventListener("dispose",ke),we=new Map,Y.programs=we);let He=we.get(_e);if(He!==void 0){if(Y.currentProgram===He&&Y.lightsStateVersion===Me)return rt(A,Ce),He}else Ce.uniforms=ee.getUniforms(A),A.onBeforeCompile(Ce,y),He=ee.acquireProgram(Ce,_e),we.set(_e,He),Y.uniforms=Ce.uniforms;const be=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(be.clippingPlanes=Ge.uniform),rt(A,Ce),Y.needsLights=Ct(A),Y.lightsStateVersion=Me,Y.needsLights&&(be.ambientLightColor.value=F.state.ambient,be.lightProbe.value=F.state.probe,be.directionalLights.value=F.state.directional,be.directionalLightShadows.value=F.state.directionalShadow,be.spotLights.value=F.state.spot,be.spotLightShadows.value=F.state.spotShadow,be.rectAreaLights.value=F.state.rectArea,be.ltc_1.value=F.state.rectAreaLTC1,be.ltc_2.value=F.state.rectAreaLTC2,be.pointLights.value=F.state.point,be.pointLightShadows.value=F.state.pointShadow,be.hemisphereLights.value=F.state.hemi,be.directionalShadowMap.value=F.state.directionalShadowMap,be.directionalShadowMatrix.value=F.state.directionalShadowMatrix,be.spotShadowMap.value=F.state.spotShadowMap,be.spotLightMatrix.value=F.state.spotLightMatrix,be.spotLightMap.value=F.state.spotLightMap,be.pointShadowMap.value=F.state.pointShadowMap,be.pointShadowMatrix.value=F.state.pointShadowMatrix),Y.currentProgram=He,Y.uniformsList=null,He}function Yt(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=Xl.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function rt(A,O){const G=Oe.get(A);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function wt(A,O,G,Y,F){O.isScene!==!0&&(O=ge),ze.resetTextureUnits();const ae=O.fog,Me=Y.isMeshStandardMaterial?O.environment:null,Ce=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:pn,_e=(Y.isMeshStandardMaterial?x:C).get(Y.envMap||Me),we=Y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,He=!!G.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),be=!!G.morphAttributes.position,ut=!!G.morphAttributes.normal,yt=!!G.morphAttributes.color;let ht=Ur;Y.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ht=y.toneMapping);const dt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,st=dt!==void 0?dt.length:0,Ne=Oe.get(Y),zt=p.state.lights;if(U===!0&&(Q===!0||A!==T)){const ln=A===T&&Y.id===P;Ge.setState(Y,A,ln)}let gt=!1;Y.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==zt.state.version||Ne.outputColorSpace!==Ce||F.isBatchedMesh&&Ne.batching===!1||!F.isBatchedMesh&&Ne.batching===!0||F.isBatchedMesh&&Ne.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ne.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ne.instancing===!1||!F.isInstancedMesh&&Ne.instancing===!0||F.isSkinnedMesh&&Ne.skinning===!1||!F.isSkinnedMesh&&Ne.skinning===!0||F.isInstancedMesh&&Ne.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ne.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ne.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ne.instancingMorph===!1&&F.morphTexture!==null||Ne.envMap!==_e||Y.fog===!0&&Ne.fog!==ae||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==Ge.numPlanes||Ne.numIntersection!==Ge.numIntersection)||Ne.vertexAlphas!==we||Ne.vertexTangents!==He||Ne.morphTargets!==be||Ne.morphNormals!==ut||Ne.morphColors!==yt||Ne.toneMapping!==ht||Ne.morphTargetsCount!==st)&&(gt=!0):(gt=!0,Ne.__version=Y.version);let jt=Ne.currentProgram;gt===!0&&(jt=At(Y,O,F));let mr=!1,an=!1,Lo=!1;const Ht=jt.getUniforms(),wi=Ne.uniforms;if(V.useProgram(jt.program)&&(mr=!0,an=!0,Lo=!0),Y.id!==P&&(P=Y.id,an=!0),mr||T!==A){Ht.setValue(I,"projectionMatrix",A.projectionMatrix),Ht.setValue(I,"viewMatrix",A.matrixWorldInverse);const ln=Ht.map.cameraPosition;ln!==void 0&&ln.setValue(I,ie.setFromMatrixPosition(A.matrixWorld)),Xe.logarithmicDepthBuffer&&Ht.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ht.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),T!==A&&(T=A,an=!0,Lo=!0)}if(F.isSkinnedMesh){Ht.setOptional(I,F,"bindMatrix"),Ht.setOptional(I,F,"bindMatrixInverse");const ln=F.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Ht.setValue(I,"boneTexture",ln.boneTexture,ze))}F.isBatchedMesh&&(Ht.setOptional(I,F,"batchingTexture"),Ht.setValue(I,"batchingTexture",F._matricesTexture,ze),Ht.setOptional(I,F,"batchingIdTexture"),Ht.setValue(I,"batchingIdTexture",F._indirectTexture,ze),Ht.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&Ht.setValue(I,"batchingColorTexture",F._colorsTexture,ze));const ri=G.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&Ve.update(F,G,jt),(an||Ne.receiveShadow!==F.receiveShadow)&&(Ne.receiveShadow=F.receiveShadow,Ht.setValue(I,"receiveShadow",F.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(wi.envMap.value=_e,wi.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(wi.envMapIntensity.value=O.environmentIntensity),an&&(Ht.setValue(I,"toneMappingExposure",y.toneMappingExposure),Ne.needsLights&&vt(wi,Lo),ae&&Y.fog===!0&&Re.refreshFogUniforms(wi,ae),Re.refreshMaterialUniforms(wi,Y,j,W,p.state.transmissionRenderTarget[A.id]),Xl.upload(I,Yt(Ne),wi,ze)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Xl.upload(I,Yt(Ne),wi,ze),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ht.setValue(I,"center",F.center),Ht.setValue(I,"modelViewMatrix",F.modelViewMatrix),Ht.setValue(I,"normalMatrix",F.normalMatrix),Ht.setValue(I,"modelMatrix",F.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const ln=Y.uniformsGroups;for(let bs=0,Ba=ln.length;bs<Ba;bs++){const ka=ln[bs];_t.update(ka,jt),_t.bind(ka,jt)}}return jt}function vt(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function Ct(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,O,G){Oe.get(A.texture).__webglTexture=O,Oe.get(A.depthTexture).__webglTexture=G;const Y=Oe.get(A);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=G===void 0,Y.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,O){const G=Oe.get(A);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,G=0){b=A,R=O,w=G;let Y=!0,F=null,ae=!1,Me=!1;if(A){const _e=Oe.get(A);_e.__useDefaultFramebuffer!==void 0?(V.bindFramebuffer(I.FRAMEBUFFER,null),Y=!1):_e.__webglFramebuffer===void 0?ze.setupRenderTarget(A):_e.__hasExternalTextures&&ze.rebindTextures(A,Oe.get(A.texture).__webglTexture,Oe.get(A.depthTexture).__webglTexture);const we=A.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(Me=!0);const He=Oe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(He[O])?F=He[O][G]:F=He[O],ae=!0):A.samples>0&&ze.useMultisampledRTT(A)===!1?F=Oe.get(A).__webglMultisampledFramebuffer:Array.isArray(He)?F=He[G]:F=He,M.copy(A.viewport),L.copy(A.scissor),D=A.scissorTest}else M.copy(E).multiplyScalar(j).floor(),L.copy(q).multiplyScalar(j).floor(),D=re;if(V.bindFramebuffer(I.FRAMEBUFFER,F)&&Y&&V.drawBuffers(A,F),V.viewport(M),V.scissor(L),V.setScissorTest(D),ae){const _e=Oe.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,_e.__webglTexture,G)}else if(Me){const _e=Oe.get(A.texture),we=O||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,_e.__webglTexture,G||0,we)}P=-1},this.readRenderTargetPixels=function(A,O,G,Y,F,ae,Me){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce){V.bindFramebuffer(I.FRAMEBUFFER,Ce);try{const _e=A.texture,we=_e.format,He=_e.type;if(!Xe.textureFormatReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-Y&&G>=0&&G<=A.height-F&&I.readPixels(O,G,Y,F,Ae.convert(we),Ae.convert(He),ae)}finally{const _e=b!==null?Oe.get(b).__webglFramebuffer:null;V.bindFramebuffer(I.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(A,O,G,Y,F,ae,Me){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce){V.bindFramebuffer(I.FRAMEBUFFER,Ce);try{const _e=A.texture,we=_e.format,He=_e.type;if(!Xe.textureFormatReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=A.width-Y&&G>=0&&G<=A.height-F){const be=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,be),I.bufferData(I.PIXEL_PACK_BUFFER,ae.byteLength,I.STREAM_READ),I.readPixels(O,G,Y,F,Ae.convert(we),Ae.convert(He),0),I.flush();const ut=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await L0(I,ut,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,be),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ae)}finally{I.deleteBuffer(be),I.deleteSync(ut)}return ae}}finally{const _e=b!==null?Oe.get(b).__webglFramebuffer:null;V.bindFramebuffer(I.FRAMEBUFFER,_e)}}},this.copyFramebufferToTexture=function(A,O=null,G=0){A.isTexture!==!0&&(io("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,A=arguments[1]);const Y=Math.pow(2,-G),F=Math.floor(A.image.width*Y),ae=Math.floor(A.image.height*Y),Me=O!==null?O.x:0,Ce=O!==null?O.y:0;ze.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,Me,Ce,F,ae),V.unbindTexture()},this.copyTextureToTexture=function(A,O,G=null,Y=null,F=0){A.isTexture!==!0&&(io("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,A=arguments[1],O=arguments[2],F=arguments[3]||0,G=null);let ae,Me,Ce,_e,we,He;G!==null?(ae=G.max.x-G.min.x,Me=G.max.y-G.min.y,Ce=G.min.x,_e=G.min.y):(ae=A.image.width,Me=A.image.height,Ce=0,_e=0),Y!==null?(we=Y.x,He=Y.y):(we=0,He=0);const be=Ae.convert(O.format),ut=Ae.convert(O.type);ze.setTexture2D(O,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const yt=I.getParameter(I.UNPACK_ROW_LENGTH),ht=I.getParameter(I.UNPACK_IMAGE_HEIGHT),dt=I.getParameter(I.UNPACK_SKIP_PIXELS),st=I.getParameter(I.UNPACK_SKIP_ROWS),Ne=I.getParameter(I.UNPACK_SKIP_IMAGES),zt=A.isCompressedTexture?A.mipmaps[F]:A.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,zt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,zt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ce),I.pixelStorei(I.UNPACK_SKIP_ROWS,_e),A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,F,we,He,ae,Me,be,ut,zt.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,F,we,He,zt.width,zt.height,be,zt.data):I.texSubImage2D(I.TEXTURE_2D,F,we,He,ae,Me,be,ut,zt),I.pixelStorei(I.UNPACK_ROW_LENGTH,yt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ht),I.pixelStorei(I.UNPACK_SKIP_PIXELS,dt),I.pixelStorei(I.UNPACK_SKIP_ROWS,st),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ne),F===0&&O.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),V.unbindTexture()},this.copyTextureToTexture3D=function(A,O,G=null,Y=null,F=0){A.isTexture!==!0&&(io("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,Y=arguments[1]||null,A=arguments[2],O=arguments[3],F=arguments[4]||0);let ae,Me,Ce,_e,we,He,be,ut,yt;const ht=A.isCompressedTexture?A.mipmaps[F]:A.image;G!==null?(ae=G.max.x-G.min.x,Me=G.max.y-G.min.y,Ce=G.max.z-G.min.z,_e=G.min.x,we=G.min.y,He=G.min.z):(ae=ht.width,Me=ht.height,Ce=ht.depth,_e=0,we=0,He=0),Y!==null?(be=Y.x,ut=Y.y,yt=Y.z):(be=0,ut=0,yt=0);const dt=Ae.convert(O.format),st=Ae.convert(O.type);let Ne;if(O.isData3DTexture)ze.setTexture3D(O,0),Ne=I.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)ze.setTexture2DArray(O,0),Ne=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const zt=I.getParameter(I.UNPACK_ROW_LENGTH),gt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),jt=I.getParameter(I.UNPACK_SKIP_PIXELS),mr=I.getParameter(I.UNPACK_SKIP_ROWS),an=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ht.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ht.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,_e),I.pixelStorei(I.UNPACK_SKIP_ROWS,we),I.pixelStorei(I.UNPACK_SKIP_IMAGES,He),A.isDataTexture||A.isData3DTexture?I.texSubImage3D(Ne,F,be,ut,yt,ae,Me,Ce,dt,st,ht.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(Ne,F,be,ut,yt,ae,Me,Ce,dt,ht.data):I.texSubImage3D(Ne,F,be,ut,yt,ae,Me,Ce,dt,st,ht),I.pixelStorei(I.UNPACK_ROW_LENGTH,zt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,jt),I.pixelStorei(I.UNPACK_SKIP_ROWS,mr),I.pixelStorei(I.UNPACK_SKIP_IMAGES,an),F===0&&O.generateMipmaps&&I.generateMipmap(Ne),V.unbindTexture()},this.initRenderTarget=function(A){Oe.get(A).__webglFramebuffer===void 0&&ze.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ze.setTextureCube(A,0):A.isData3DTexture?ze.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ze.setTexture2DArray(A,0):ze.setTexture2D(A,0),V.unbindTexture()},this.resetState=function(){R=0,w=0,b=null,V.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Jh?"display-p3":"srgb",t.unpackColorSpace=xt.workingColorSpace===bc?"display-p3":"srgb"}}class id{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ke(e),this.near=t,this.far=n}clone(){return new id(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class zS extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class HS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ch,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return io("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Rn=new B;class rd{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Si(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),i=Rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),i=Rt(i,this.array),r=Rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new gn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new rd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Of=new B,Ff=new Et,Bf=new Et,VS=new B,kf=new et,xl=new B,au=new Gi,zf=new et,lu=new Ac;class GS extends Mt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vd,this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xl),this.boundingBox.expandByPoint(xl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,xl),this.boundingSphere.expandByPoint(xl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),au.copy(this.boundingSphere),au.applyMatrix4(i),e.ray.intersectsSphere(au)!==!1&&(zf.copy(i).invert(),lu.copy(e.ray).applyMatrix4(zf),!(this.boundingBox!==null&&lu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,lu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Et,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Vd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Zg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Ff.fromBufferAttribute(i.attributes.skinIndex,e),Bf.fromBufferAttribute(i.attributes.skinWeight,e),Of.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Bf.getComponent(r);if(o!==0){const a=Ff.getComponent(r);kf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(VS.copy(Of).applyMatrix4(kf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Tm extends kt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Em extends fn{constructor(e=null,t=1,n=1,i,r,o,a,l,c=bn,u=bn,h,d){super(null,o,a,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hf=new et,WS=new et;class sd{constructor(e=[],t=[]){this.uuid=Ei(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new et;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:WS;Hf.multiplyMatrices(a,t[r]),Hf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new sd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Em(t,e,e,ui,Ti);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Tm),this.bones.push(o),this.boneInverses.push(new et().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class dh extends gn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Gs=new et,Vf=new et,vl=[],Gf=new pr,XS=new et,zo=new Mt,Ho=new Gi;class YS extends Mt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new dh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,XS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gs),Gf.copy(e.boundingBox).applyMatrix4(Gs),this.boundingBox.union(Gf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gs),Ho.copy(e.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(Ho)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(zo.geometry=this.geometry,zo.material=this.material,zo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ho.copy(this.boundingSphere),Ho.applyMatrix4(n),e.ray.intersectsSphere(Ho)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Gs),Vf.multiplyMatrices(n,Gs),zo.matrixWorld=Vf,zo.raycast(e,vl);for(let o=0,a=vl.length;o<a;o++){const l=vl[o];l.instanceId=r,l.object=this,t.push(l)}vl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new dh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Em(new Float32Array(i*this.count),i,this.count,qh,Ti));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class bm extends Fi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const cc=new B,uc=new B,Wf=new et,Vo=new Ac,yl=new Gi,cu=new B,Xf=new B;class od extends kt{constructor(e=new Ai,t=new bm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)cc.fromBufferAttribute(t,i-1),uc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=cc.distanceTo(uc);e.setAttribute("lineDistance",new ar(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yl.copy(n.boundingSphere),yl.applyMatrix4(i),yl.radius+=r,e.ray.intersectsSphere(yl)===!1)return;Wf.copy(i).invert(),Vo.copy(e.ray).applyMatrix4(Wf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=f,p=_-1;g<p;g+=c){const m=u.getX(g),S=u.getX(g+1),y=Ml(this,e,Vo,l,m,S);y&&t.push(y)}if(this.isLineLoop){const g=u.getX(_-1),p=u.getX(f),m=Ml(this,e,Vo,l,g,p);m&&t.push(m)}}else{const f=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let g=f,p=_-1;g<p;g+=c){const m=Ml(this,e,Vo,l,g,g+1);m&&t.push(m)}if(this.isLineLoop){const g=Ml(this,e,Vo,l,_-1,f);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ml(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(cc.fromBufferAttribute(o,i),uc.fromBufferAttribute(o,r),t.distanceSqToSegment(cc,uc,cu,Xf)>n)return;cu.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(cu);if(!(l<e.near||l>e.far))return{distance:l,point:Xf.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}const Yf=new B,qf=new B;class qS extends od{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Yf.fromBufferAttribute(t,i),qf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Yf.distanceTo(qf);e.setAttribute("lineDistance",new ar(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class KS extends od{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Am extends Fi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Kf=new et,fh=new Ac,Sl=new Gi,Tl=new B;class $S extends kt{constructor(e=new Ai,t=new Am){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sl.copy(n.boundingSphere),Sl.applyMatrix4(i),Sl.radius+=r,e.ray.intersectsSphere(Sl)===!1)return;Kf.copy(i).invert(),fh.copy(e.ray).applyMatrix4(Kf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let _=d,g=f;_<g;_++){const p=c.getX(_);Tl.fromBufferAttribute(h,p),$f(Tl,p,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let _=d,g=f;_<g;_++)Tl.fromBufferAttribute(h,_),$f(Tl,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function $f(s,e,t,n,i,r,o){const a=fh.distanceSqToPoint(s);if(a<t){const l=new B;fh.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class ad extends Fi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sm,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wi extends ad{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Sn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function El(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function jS(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ZS(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function jf(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function wm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Na{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class JS extends Na{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$s,endingEnd:$s}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case js:r=e,a=2*t-n;break;case rc:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case js:o=e,l=2*n-t;break;case rc:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-t)/(i-t),g=_*_,p=g*_,m=-d*p+2*d*g-d*_,S=(1+d)*p+(-1.5-2*d)*g+(-.5+d)*_+1,y=(-1-f)*p+(1.5+f)*g+.5*_,v=f*p-f*g;for(let R=0;R!==a;++R)r[R]=m*o[u+R]+S*o[c+R]+y*o[l+R]+v*o[h+R];return r}}class Rm extends Na{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}}class QS extends Na{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Xi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=El(t,this.TimeBufferType),this.values=El(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:El(e.times,Array),values:El(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new QS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Rm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new JS(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case va:t=this.InterpolantFactoryMethodDiscrete;break;case ya:t=this.InterpolantFactoryMethodLinear;break;case Nc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return va;case this.InterpolantFactoryMethodLinear:return ya;case this.InterpolantFactoryMethodSmooth:return Nc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&jS(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Nc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,d=h-n,f=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[d+_]||g!==t[f+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Xi.prototype.TimeBufferType=Float32Array;Xi.prototype.ValueBufferType=Float32Array;Xi.prototype.DefaultInterpolation=ya;class Co extends Xi{constructor(e,t,n){super(e,t,n)}}Co.prototype.ValueTypeName="bool";Co.prototype.ValueBufferType=Array;Co.prototype.DefaultInterpolation=va;Co.prototype.InterpolantFactoryMethodLinear=void 0;Co.prototype.InterpolantFactoryMethodSmooth=void 0;class Cm extends Xi{}Cm.prototype.ValueTypeName="color";class vo extends Xi{}vo.prototype.ValueTypeName="number";class eT extends Na{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)bi.slerpFlat(r,0,o,c-a,o,c,l);return r}}class yo extends Xi{InterpolantFactoryMethodLinear(e){return new eT(this.times,this.values,this.getValueSize(),e)}}yo.prototype.ValueTypeName="quaternion";yo.prototype.InterpolantFactoryMethodSmooth=void 0;class Po extends Xi{constructor(e,t,n){super(e,t,n)}}Po.prototype.ValueTypeName="string";Po.prototype.ValueBufferType=Array;Po.prototype.DefaultInterpolation=va;Po.prototype.InterpolantFactoryMethodLinear=void 0;Po.prototype.InterpolantFactoryMethodSmooth=void 0;class Mo extends Xi{}Mo.prototype.ValueTypeName="vector";class ph{constructor(e="",t=-1,n=[],i=Zh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ei(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(nT(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Xi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=ZS(l);l=jf(l,1,u),c=jf(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new vo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,_,g){if(f.length!==0){const p=[],m=[];wm(f,p,m,_),p.length!==0&&g.push(new h(d,p,m))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let g=0;g<d[_].morphTargets.length;g++)f[d[_].morphTargets[g]]=-1;for(const g in f){const p=[],m=[];for(let S=0;S!==d[_].morphTargets.length;++S){const y=d[_];p.push(y.time),m.push(y.morphTarget===g?1:0)}i.push(new vo(".morphTargetInfluence["+g+"]",p,m))}l=f.length*o}else{const f=".bones["+t[h].name+"]";n(Mo,f+".position",d,"pos",i),n(yo,f+".quaternion",d,"rot",i),n(Mo,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function tT(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vo;case"vector":case"vector2":case"vector3":case"vector4":return Mo;case"color":return Cm;case"quaternion":return yo;case"bool":case"boolean":return Co;case"string":return Po}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function nT(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=tT(s.type);if(s.times===void 0){const t=[],n=[];wm(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const wr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class iT{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],_=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null}}}const rT=new iT;class Ts{constructor(e){this.manager=e!==void 0?e:rT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ts.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zi={};class sT extends Error{constructor(e,t){super(e),this.response=t}}class hc extends Ts{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=wr.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Zi[e]!==void 0){Zi[e].push({onLoad:t,onProgress:n,onError:i});return}Zi[e]=[],Zi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Zi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let g=0;const p=new ReadableStream({start(m){S();function S(){h.read().then(({done:y,value:v})=>{if(y)m.close();else{g+=v.byteLength;const R=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:f});for(let w=0,b=u.length;w<b;w++){const P=u[w];P.onProgress&&P.onProgress(R)}m.enqueue(v),S()}},y=>{m.error(y)})}}});return new Response(p)}else throw new sT(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{wr.add(e,c);const u=Zi[e];delete Zi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Zi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Zi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class oT extends Ts{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=wr.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Ma("img");function l(){u(),wr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Pm extends Ts{constructor(e){super(e)}load(e,t,n,i){const r=new fn,o=new oT(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Rc extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class aT extends Rc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const uu=new et,Zf=new B,Jf=new B;class ld{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ed,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Zf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zf),Jf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jf),t.updateMatrixWorld(),uu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(uu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class lT extends ld{constructor(){super(new Tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=go*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class cT extends Rc{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new lT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Qf=new et,Go=new B,hu=new B;class uT extends ld{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new Et(2,1,1,1),new Et(0,1,1,1),new Et(3,1,1,1),new Et(1,1,1,1),new Et(3,0,1,1),new Et(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Go.setFromMatrixPosition(e.matrixWorld),n.position.copy(Go),hu.copy(n.position),hu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(hu),n.updateMatrixWorld(),i.makeTranslation(-Go.x,-Go.y,-Go.z),Qf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qf)}}class hT extends Rc{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new uT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class dT extends ld{constructor(){super(new td(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fT extends Rc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new dT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sa{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class pT extends Ts{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=wr.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return wr.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),wr.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});wr.add(e,l),r.manager.itemStart(e)}}class mT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ep(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ep();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ep(){return(typeof performance>"u"?Date:performance).now()}class _T{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){bi.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;bi.multiplyQuaternionsFlat(e,o,e,t,e,n),bi.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const cd="\\[\\]\\.:\\/",gT=new RegExp("["+cd+"]","g"),ud="[^"+cd+"]",xT="[^"+cd.replace("\\.","")+"]",vT=/((?:WC+[\/:])*)/.source.replace("WC",ud),yT=/(WCOD+)?/.source.replace("WCOD",xT),MT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ud),ST=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ud),TT=new RegExp("^"+vT+yT+MT+ST+"$"),ET=["material","materials","bones","map"];class bT{constructor(e,t,n){const i=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Tt{constructor(e,t,n){this.path=t,this.parsedPath=n||Tt.parseTrackName(t),this.node=Tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Tt.Composite(e,t,n):new Tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gT,"")}static parseTrackName(e){const t=TT.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);ET.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Tt.Composite=bT;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class AT{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:$s,endingEnd:$s};for(let c=0;c!==o;++c){const u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Qg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case t0:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Zh:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===e0;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Jg){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=js,i.endingEnd=js):(e?i.endingStart=this.zeroSlopeAtStart?js:$s:i.endingStart=rc,t?i.endingEnd=this.zeroSlopeAtEnd?js:$s:i.endingEnd=rc)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const wT=new Float32Array(1);class RT extends Ss{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){const d=i[h],f=d.name;let _=u[f];if(_!==void 0)++_.referenceCount,o[h]=_;else{if(_=o[h],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,l,f));continue}const g=t&&t._propertyBindings[h].binding.parsedPath;_=new _T(Tt.create(n,f,g),d.ValueTypeName,d.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,l,f),o[h]=_}a[h].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Rm(new Float32Array(2),new Float32Array(2),1,wT),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?ph.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Zh),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new AT(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?ph.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gh);function tp(s,e){if(e===n0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===lh||e===rm){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===lh)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class CT extends Ts{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new UT(t)}),this.register(function(t){return new NT(t)}),this.register(function(t){return new WT(t)}),this.register(function(t){return new XT(t)}),this.register(function(t){return new YT(t)}),this.register(function(t){return new FT(t)}),this.register(function(t){return new BT(t)}),this.register(function(t){return new kT(t)}),this.register(function(t){return new zT(t)}),this.register(function(t){return new DT(t)}),this.register(function(t){return new HT(t)}),this.register(function(t){return new OT(t)}),this.register(function(t){return new GT(t)}),this.register(function(t){return new VT(t)}),this.register(function(t){return new LT(t)}),this.register(function(t){return new qT(t)}),this.register(function(t){return new KT(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=sa.extractUrlBase(e);o=sa.resolveURL(c,this.path)}else o=sa.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new hc(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Lm){try{o[lt.KHR_BINARY_GLTF]=new $T(e)}catch(h){i&&i(h);return}r=JSON.parse(o[lt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new lE(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case lt.KHR_MATERIALS_UNLIT:o[h]=new IT;break;case lt.KHR_DRACO_MESH_COMPRESSION:o[h]=new jT(r,this.dracoLoader);break;case lt.KHR_TEXTURE_TRANSFORM:o[h]=new ZT;break;case lt.KHR_MESH_QUANTIZATION:o[h]=new JT;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function PT(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class LT{constructor(e){this.parser=e,this.name=lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ke(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],pn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new fT(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new hT(u),c.distance=h;break;case"spot":c=new cT(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Qi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class IT{constructor(){this.name=lt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ft}extendParams(e,t,n){const i=[];e.color=new Ke(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],pn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,ft))}return Promise.all(i)}}class DT{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class UT{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ct(a,a)}return Promise.all(r)}}class NT{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class OT{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class FT{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ke(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],pn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ft)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class BT{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class kT{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ke().setRGB(a[0],a[1],a[2],pn),Promise.all(r)}}class zT{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class HT{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ke().setRGB(a[0],a[1],a[2],pn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,ft)),Promise.all(r)}}class VT{constructor(e){this.parser=e,this.name=lt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class GT{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class WT{constructor(e){this.parser=e,this.name=lt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class XT{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class YT{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class qT{constructor(e){this.name=lt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class KT{constructor(e){this.name=lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==ai.TRIANGLES&&c.mode!==ai.TRIANGLE_STRIP&&c.mode!==ai.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const _ of h){const g=new et,p=new B,m=new bi,S=new B(1,1,1),y=new YS(_.geometry,_.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,v),l.SCALE&&S.fromBufferAttribute(l.SCALE,v),y.setMatrixAt(v,g.compose(p,m,S));for(const v in l)if(v==="_COLOR_0"){const R=l[v];y.instanceColor=new dh(R.array,R.itemSize,R.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&_.geometry.setAttribute(v,l[v]);kt.prototype.copy.call(y,_),this.parser.assignFinalMaterial(y),f.push(y)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Lm="glTF",Wo=12,np={JSON:1313821514,BIN:5130562};class $T{constructor(e){this.name=lt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Wo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Lm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Wo,r=new DataView(e,Wo);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===np.JSON){const c=new Uint8Array(e,Wo+o,a);this.content=n.decode(c)}else if(l===np.BIN){const c=Wo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class jT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=mh[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=mh[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],f=so[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const _ in f.attributes){const g=f.attributes[_],p=l[_];p!==void 0&&(g.normalized=p)}h(f)},a,c,pn,d)})})}}class ZT{constructor(){this.name=lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class JT{constructor(){this.name=lt.KHR_MESH_QUANTIZATION}}class Im extends Na{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,_=e*c,g=_-c,p=-2*f+3*d,m=f-d,S=1-p,y=m-d+h;for(let v=0;v!==a;v++){const R=o[g+v+a],w=o[g+v+l]*u,b=o[_+v+a],P=o[_+v]*u;r[v]=S*R+y*w+p*b+m*P}return r}}const QT=new bi;class eE extends Im{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return QT.fromArray(r).normalize().toArray(r),r}}const ai={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},so={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ip={9728:bn,9729:Jn,9984:Kp,9985:kl,9986:Ko,9987:rr},rp={33071:Ar,33648:ic,10497:ms},du={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},mh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Sr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},tE={CUBICSPLINE:void 0,LINEAR:ya,STEP:va},fu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function nE(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ad({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:zi})),s.DefaultMaterial}function jr(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Qi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function iE(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function rE(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sE(s){let e;const t=s.extensions&&s.extensions[lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+pu(t.attributes):e=s.indices+":"+pu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+pu(s.targets[n]);return e}function pu(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function _h(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function oE(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const aE=new et;class lE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new PT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Pm(this.options.manager):this.textureLoader=new pT(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new hc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return jr(r,a,i),Qi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[lt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(sa.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=du[i.type],a=so[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new gn(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=du[i.type],c=so[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,p;if(f&&f!==h){const m=Math.floor(d/f),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let y=t.cache.get(S);y||(g=new c(a,m*f,i.count*f/u),y=new HS(g,f/u),t.cache.add(S,y)),p=new rd(y,l,d%f/u,_)}else a===null?g=new c(i.count*l):g=new c(a,d,i.count*l),p=new gn(g,l,_);if(i.sparse!==void 0){const m=du.SCALAR,S=so[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,R=new S(o[1],y,i.sparse.count*m),w=new c(o[2],v,i.sparse.count*l);a!==null&&(p=new gn(p.array.slice(),p.itemSize,p.normalized));for(let b=0,P=R.length;b<P;b++){const T=R[b];if(p.setX(T,w[b*l]),l>=2&&p.setY(T,w[b*l+1]),l>=3&&p.setZ(T,w[b*l+2]),l>=4&&p.setW(T,w[b*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=ip[d.magFilter]||Jn,u.minFilter=ip[d.minFilter]||rr,u.wrapS=rp[d.wrapS]||ms,u.wrapT=rp[d.wrapT]||ms,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let _=d;t.isImageBitmapLoader===!0&&(_=function(g){const p=new fn(g);p.needsUpdate=!0,d(p)}),t.load(sa.resolveURL(h,r.path),_,void 0,f)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Qi(h,o),h.userData.mimeType=o.mimeType||oE(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[lt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[lt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[lt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Am,Fi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new bm,Fi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ad}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[lt.KHR_MATERIALS_UNLIT]){const h=i[lt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Ke(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],pn),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,ft)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Mi);const u=r.alphaMode||fu.OPAQUE;if(u===fu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===fu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ft&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ct(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Ft&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ft){const h=r.emissiveFactor;a.emissive=new Ke().setRGB(h[0],h[1],h[2],pn)}return r.emissiveTexture!==void 0&&o!==Ft&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,ft)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Qi(h,r),t.associations.set(h,{materials:e}),r.extensions&&jr(i,h,r),h})}createUniqueName(e){const t=Tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return sp(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=sE(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[lt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=sp(new Ai,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?nE(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,_=u.length;f<_;f++){const g=u[f],p=o[f];let m;const S=c[f];if(p.mode===ai.TRIANGLES||p.mode===ai.TRIANGLE_STRIP||p.mode===ai.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new GS(g,S):new Mt(g,S),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===ai.TRIANGLE_STRIP?m.geometry=tp(m.geometry,rm):p.mode===ai.TRIANGLE_FAN&&(m.geometry=tp(m.geometry,lh));else if(p.mode===ai.LINES)m=new qS(g,S);else if(p.mode===ai.LINE_STRIP)m=new od(g,S);else if(p.mode===ai.LINE_LOOP)m=new KS(g,S);else if(p.mode===ai.POINTS)m=new $S(g,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&rE(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Qi(m,r),p.extensions&&jr(i,m,p),t.assignFinalMaterial(m),h.push(m)}for(let f=0,_=h.length;f<_;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&jr(i,h[0],r),h[0];const d=new ss;r.extensions&&jr(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,_=h.length;f<_;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Tn(C0.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new td(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Qi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new et;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new sd(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],_=i.samplers[f.sampler],g=f.target,p=g.node,m=i.parameters!==void 0?i.parameters[_.input]:_.input,S=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",S)),c.push(_),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],_=h[2],g=h[3],p=h[4],m=[];for(let S=0,y=d.length;S<y;S++){const v=d[S],R=f[S],w=_[S],b=g[S],P=p[S];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const T=n._createAnimationTracks(v,R,w,b,P);if(T)for(let M=0;M<T.length;M++)m.push(T[M])}return new ph(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,aE)});for(let f=0,_=h.length;f<_;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Tm:c.length>1?u=new ss:c.length===1?u=c[0]:u=new kt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Qi(u,r),r.extensions&&jr(n,u,r),r.matrix!==void 0){const h=new et;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new ss;n.name&&(r.name=i.createUniqueName(n.name)),Qi(r,n),n.extensions&&jr(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof Fi||d instanceof fn)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];Sr[r.path]===Sr.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Sr[r.path]){case Sr.weights:c=vo;break;case Sr.rotation:c=yo;break;case Sr.position:case Sr.scale:c=Mo;break;default:switch(n.itemSize){case 1:c=vo;break;case 2:case 3:default:c=Mo;break}break}const u=i.interpolation!==void 0?tE[i.interpolation]:ya,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const _=new c(l[d]+"."+Sr[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=_h(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof yo?eE:Im;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function cE(s,e,t){const n=e.attributes,i=new pr;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),a.normalized){const u=_h(so[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new B,l=new B;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,_=d.max;if(f!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(_[2]))),d.normalized){const g=_h(so[d.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Gi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function sp(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=mh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return xt.workingColorSpace!==pn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${xt.workingColorSpace}" not supported.`),Qi(s,e),cE(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?iE(s,e.targets,t):s})}const mu=new WeakMap;class uE extends Ts{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new hc(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,ft,n).catch(n)}decodeDracoFile(e,t,n,i,r=pn,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(mu.has(e)){const l=mu.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[r]={resolve:c,reject:u},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),mu.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Ai;e.index&&t.setIndex(new gn(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,o=i.array,a=i.itemSize,l=new gn(o,a);r==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==ft)return;const n=new Ke;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i).convertSRGBToLinear(),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new hc(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=hE.toString(),o=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function hE(){let s,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(u){s.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(s)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(u=>{const h=u.draco,d=new h.Decoder;try{const f=t(h,d,new Int8Array(l),c),_=f.attributes.map(g=>g.array.buffer);f.index&&_.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},_)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{h.destroy(d)}});break}};function t(o,a,l,c){const u=c.attributeIDs,h=c.attributeTypes;let d,f;const _=a.GetEncodedGeometryType(l);if(_===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(l,l.byteLength,d);else if(_===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const g={index:null,attributes:[]};for(const p in u){const m=self[h[p]];let S,y;if(c.useUniqueIDs)y=u[p],S=a.GetAttributeByUniqueId(d,y);else{if(y=a.GetAttributeId(d,o[u[p]]),y===-1)continue;S=a.GetAttribute(d,y)}const v=i(o,a,d,p,m,S);p==="color"&&(v.vertexColorSpace=c.vertexColorSpace),g.attributes.push(v)}return _===o.TRIANGULAR_MESH&&(g.index=n(o,a,d)),o.destroy(d),g}function n(o,a,l){const u=l.num_faces()*3,h=u*4,d=o._malloc(h);a.GetTrianglesUInt32Array(l,h,d);const f=new Uint32Array(o.HEAPF32.buffer,d,u).slice();return o._free(d),{array:f,itemSize:1}}function i(o,a,l,c,u,h){const d=h.num_components(),_=l.num_points()*d,g=_*u.BYTES_PER_ELEMENT,p=r(o,u),m=o._malloc(g);a.GetAttributeDataArrayForAllPoints(l,h,p,g,m);const S=new u(o.HEAPF32.buffer,m,_).slice();return o._free(m),{name:c,array:S,itemSize:d}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}var dE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fE(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var gh={exports:{}};(function(s,e){(function(){var t,n,i,r,o,a,l,c,u,h,d,f,_,g,p,m,S,y,v,R,w,b,P,T,M,L,D,z,J,K,W,j,X=[].slice;S='<span class="odometer-value"></span>',g='<span class="odometer-ribbon"><span class="odometer-ribbon-inner">'+S+"</span></span>",r='<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner">'+g+"</span></span>",l='<span class="odometer-formatting-mark"></span>',i="(,ddd).dd",c=/^\(?([^)]*)\)?(?:(.)(d+))?$/,u=30,a=2e3,t=20,h=2,o=.5,d=1e3/u,n=1e3/t,p="transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",M=document.createElement("div").style,m=M.transition!=null||M.webkitTransition!=null||M.mozTransition!=null||M.oTransition!=null,P=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,f=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,v=function(H){var E;return E=document.createElement("div"),E.innerHTML=H,E.children[0]},b=function(H,E){return H.className=H.className.replace(new RegExp("(^| )"+E.split(" ").join("|")+"( |$)","gi")," ")},y=function(H,E){return b(H,E),H.className+=" "+E},L=function(H,E){var q;if(document.createEvent!=null)return q=document.createEvent("HTMLEvents"),q.initEvent(E,!0,!0),H.dispatchEvent(q)},w=function(){var H,E;return(H=(E=window.performance)!=null&&typeof E.now=="function"?E.now():void 0)!=null?H:+new Date},T=function(H,E){return E==null&&(E=0),E?(H*=Math.pow(10,E),H+=.5,H=Math.floor(H),H/=Math.pow(10,E)):Math.round(H)},D=function(H){return H<0?Math.ceil(H):Math.floor(H)},R=function(H){return H-T(H)},J=!1,(z=function(){var H,E,q,re,ce;if(!J&&window.jQuery!=null){for(J=!0,re=["html","text"],ce=[],E=0,q=re.length;E<q;E++)H=re[E],ce.push(function(U){var Q;return Q=window.jQuery.fn[U],window.jQuery.fn[U]=function(oe){var ie;return oe==null||((ie=this[0])!=null?ie.odometer:void 0)==null?Q.apply(this,arguments):this[0].odometer.update(oe)}}(H));return ce}})(),setTimeout(z,0),_=function(){function H(E){var q,re,ce,U,Q,oe,ie,Se,ge,ye=this;if(this.options=E,this.el=this.options.el,this.el.odometer!=null)return this.el.odometer;this.el.odometer=this,ie=H.options;for(q in ie)ce=ie[q],this.options[q]==null&&(this.options[q]=ce);(U=this.options).duration==null&&(U.duration=a),this.MAX_VALUES=this.options.duration/d/h|0,this.resetFormat(),this.value=this.cleanValue((Se=this.options.value)!=null?Se:""),this.renderInside(),this.render();try{for(ge=["innerHTML","innerText","textContent"],Q=0,oe=ge.length;Q<oe;Q++)re=ge[Q],this.el[re]!=null&&function(Ue){return Object.defineProperty(ye.el,Ue,{get:function(){var I;return Ue==="innerHTML"?ye.inside.outerHTML:(I=ye.inside.innerText)!=null?I:ye.inside.textContent},set:function(I){return ye.update(I)}})}(re)}catch{this.watchForMutations()}}return H.prototype.renderInside=function(){return this.inside=document.createElement("div"),this.inside.className="odometer-inside",this.el.innerHTML="",this.el.appendChild(this.inside)},H.prototype.watchForMutations=function(){var E=this;if(f!=null)try{return this.observer==null&&(this.observer=new f(function(q){var re;return re=E.el.innerText,E.renderInside(),E.render(E.value),E.update(re)})),this.watchMutations=!0,this.startWatchingMutations()}catch{}},H.prototype.startWatchingMutations=function(){if(this.watchMutations)return this.observer.observe(this.el,{childList:!0})},H.prototype.stopWatchingMutations=function(){var E;return(E=this.observer)!=null?E.disconnect():void 0},H.prototype.cleanValue=function(E){var q;return typeof E=="string"&&(E=E.replace((q=this.format.radix)!=null?q:".","<radix>"),E=E.replace(/[.,]/g,""),E=E.replace("<radix>","."),E=parseFloat(E,10)||0),T(E,this.format.precision)},H.prototype.bindTransitionEnd=function(){var E,q,re,ce,U,Q,oe=this;if(!this.transitionEndBound){for(this.transitionEndBound=!0,q=!1,U=p.split(" "),Q=[],re=0,ce=U.length;re<ce;re++)E=U[re],Q.push(this.el.addEventListener(E,function(){return q||(q=!0,setTimeout(function(){return oe.render(),q=!1,L(oe.el,"odometerdone")},0)),!0},!1));return Q}},H.prototype.resetFormat=function(){var E,q,re,ce,U,Q,oe,ie;if(E=(oe=this.options.format)!=null?oe:i,E||(E="d"),re=c.exec(E),!re)throw new Error("Odometer: Unparsable digit format");return ie=re.slice(1,4),Q=ie[0],U=ie[1],q=ie[2],ce=q?.length||0,this.format={repeating:Q,radix:U,precision:ce}},H.prototype.render=function(E){var q,re,ce,U,Q,oe,ie;for(E==null&&(E=this.value),this.stopWatchingMutations(),this.resetFormat(),this.inside.innerHTML="",Q=this.options.theme,q=this.el.className.split(" "),U=[],oe=0,ie=q.length;oe<ie;oe++)if(re=q[oe],!!re.length){if(ce=/^odometer-theme-(.+)$/.exec(re)){Q=ce[1];continue}/^odometer(-|$)/.test(re)||U.push(re)}return U.push("odometer"),m||U.push("odometer-no-transitions"),Q?U.push("odometer-theme-"+Q):U.push("odometer-auto-theme"),this.el.className=U.join(" "),this.ribbons={},this.formatDigits(E),this.startWatchingMutations()},H.prototype.formatDigits=function(E){var q,re,ce,U,Q,oe,ie,Se,ge,ye;if(this.digits=[],this.options.formatFunction)for(ce=this.options.formatFunction(E),ge=ce.split("").reverse(),Q=0,ie=ge.length;Q<ie;Q++)re=ge[Q],re.match(/0-9/)?(q=this.renderDigit(),q.querySelector(".odometer-value").innerHTML=re,this.digits.push(q),this.insertDigit(q)):this.addSpacer(re);else for(U=!this.format.precision||!R(E)||!1,ye=E.toString().split("").reverse(),oe=0,Se=ye.length;oe<Se;oe++)q=ye[oe],q==="."&&(U=!0),this.addDigit(q,U)},H.prototype.update=function(E){var q,re=this;if(E=this.cleanValue(E),!!(q=E-this.value))return b(this.el,"odometer-animating-up odometer-animating-down odometer-animating"),q>0?y(this.el,"odometer-animating-up"):y(this.el,"odometer-animating-down"),this.stopWatchingMutations(),this.animate(E),this.startWatchingMutations(),setTimeout(function(){return re.el.offsetHeight,y(re.el,"odometer-animating")},0),this.value=E},H.prototype.renderDigit=function(){return v(r)},H.prototype.insertDigit=function(E,q){return q!=null?this.inside.insertBefore(E,q):this.inside.children.length?this.inside.insertBefore(E,this.inside.children[0]):this.inside.appendChild(E)},H.prototype.addSpacer=function(E,q,re){var ce;return ce=v(l),ce.innerHTML=E,re&&y(ce,re),this.insertDigit(ce,q)},H.prototype.addDigit=function(E,q){var re,ce,U,Q;if(q==null&&(q=!0),E==="-")return this.addSpacer(E,null,"odometer-negation-mark");if(E===".")return this.addSpacer((Q=this.format.radix)!=null?Q:".",null,"odometer-radix-mark");if(q)for(U=!1;;){if(!this.format.repeating.length){if(U)throw new Error("Bad odometer format without digits");this.resetFormat(),U=!0}if(re=this.format.repeating[this.format.repeating.length-1],this.format.repeating=this.format.repeating.substring(0,this.format.repeating.length-1),re==="d")break;this.addSpacer(re)}return ce=this.renderDigit(),ce.querySelector(".odometer-value").innerHTML=E,this.digits.push(ce),this.insertDigit(ce)},H.prototype.animate=function(E){return!m||this.options.animation==="count"?this.animateCount(E):this.animateSlide(E)},H.prototype.animateCount=function(E){var q,re,ce,U,Q,oe=this;if(re=+E-this.value)return U=ce=w(),q=this.value,(Q=function(){var ie,Se,ge;if(w()-U>oe.options.duration){oe.value=E,oe.render(),L(oe.el,"odometerdone");return}return ie=w()-ce,ie>n&&(ce=w(),ge=ie/oe.options.duration,Se=re*ge,q+=Se,oe.render(Math.round(q))),P!=null?P(Q):setTimeout(Q,n)})()},H.prototype.getDigitCount=function(){var E,q,re,ce,U,Q;for(ce=1<=arguments.length?X.call(arguments,0):[],E=U=0,Q=ce.length;U<Q;E=++U)re=ce[E],ce[E]=Math.abs(re);return q=Math.max.apply(Math,ce),Math.ceil(Math.log(q+1)/Math.log(10))},H.prototype.getFractionalDigitCount=function(){var E,q,re,ce,U,Q,oe;for(U=1<=arguments.length?X.call(arguments,0):[],q=/^\-?\d*\.(\d*?)0*$/,E=Q=0,oe=U.length;Q<oe;E=++Q)ce=U[E],U[E]=ce.toString(),re=q.exec(U[E]),re==null?U[E]=0:U[E]=re[1].length;return Math.max.apply(Math,U)},H.prototype.resetDigits=function(){return this.digits=[],this.ribbons=[],this.inside.innerHTML="",this.resetFormat()},H.prototype.animateSlide=function(E){var q,re,ce,U,Q,oe,ie,Se,ge,ye,Ue,I,Be,Le,Xe,V,k,Oe,ze,C,x,Z,le,he,ee,Re,de;if(V=this.value,Se=this.getFractionalDigitCount(V,E),Se&&(E=E*Math.pow(10,Se),V=V*Math.pow(10,Se)),!!(ce=E-V)){for(this.bindTransitionEnd(),U=this.getDigitCount(V,E),Q=[],q=0,Ue=ze=0;0<=U?ze<U:ze>U;Ue=0<=U?++ze:--ze){if(k=D(V/Math.pow(10,U-Ue-1)),ie=D(E/Math.pow(10,U-Ue-1)),oe=ie-k,Math.abs(oe)>this.MAX_VALUES){for(ye=[],I=oe/(this.MAX_VALUES+this.MAX_VALUES*q*o),re=k;oe>0&&re<ie||oe<0&&re>ie;)ye.push(Math.round(re)),re+=I;ye[ye.length-1]!==ie&&ye.push(ie),q++}else ye=function(){de=[];for(var xe=k;k<=ie?xe<=ie:xe>=ie;k<=ie?xe++:xe--)de.push(xe);return de}.apply(this);for(Ue=C=0,Z=ye.length;C<Z;Ue=++C)ge=ye[Ue],ye[Ue]=Math.abs(ge%10);Q.push(ye)}for(this.resetDigits(),Re=Q.reverse(),Ue=x=0,le=Re.length;x<le;Ue=++x)for(ye=Re[Ue],this.digits[Ue]||this.addDigit(" ",Ue>=Se),(Oe=this.ribbons)[Ue]==null&&(Oe[Ue]=this.digits[Ue].querySelector(".odometer-ribbon-inner")),this.ribbons[Ue].innerHTML="",ce<0&&(ye=ye.reverse()),Be=ee=0,he=ye.length;ee<he;Be=++ee)ge=ye[Be],Xe=document.createElement("div"),Xe.className="odometer-value",Xe.innerHTML=ge,this.ribbons[Ue].appendChild(Xe),Be===ye.length-1&&y(Xe,"odometer-last-value"),Be===0&&y(Xe,"odometer-first-value");if(k<0&&this.addDigit("-"),Le=this.inside.querySelector(".odometer-radix-mark"),Le?.parent.removeChild(Le),Se)return this.addSpacer(this.format.radix,this.digits[Se-1],"odometer-radix-mark")}},H}(),_.options=(W=window.odometerOptions)!=null?W:{},setTimeout(function(){var H,E,q,re,ce;if(window.odometerOptions){re=window.odometerOptions,ce=[];for(H in re)E=re[H],ce.push((q=_.options)[H]!=null?(q=_.options)[H]:q[H]=E);return ce}},0),_.init=function(){var H,E,q,re,ce,U;if(document.querySelectorAll!=null){for(E=document.querySelectorAll(_.options.selector||".odometer"),U=[],q=0,re=E.length;q<re;q++)H=E[q],U.push(H.odometer=new _({el:H,value:(ce=H.innerText)!=null?ce:H.textContent}));return U}},((j=document.documentElement)!=null?j.doScroll:void 0)!=null&&document.createEventObject!=null?(K=document.onreadystatechange,document.onreadystatechange=function(){return document.readyState==="complete"&&_.options.auto!==!1&&_.init(),K?.apply(this,arguments)}):document.addEventListener("DOMContentLoaded",function(){if(_.options.auto!==!1)return _.init()},!1),e!==null?s.exports=_:window.Odometer=_}).call(dE)})(gh,gh.exports);var pE=gh.exports;const mE=fE(pE);function er(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Dm(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ni={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},So={duration:.5,overwrite:!1,delay:0},hd,An,Bt,hi=1e8,It=1/hi,xh=Math.PI*2,_E=xh/4,gE=0,Um=Math.sqrt,xE=Math.cos,vE=Math.sin,mn=function(e){return typeof e=="string"},Xt=function(e){return typeof e=="function"},dr=function(e){return typeof e=="number"},dd=function(e){return typeof e>"u"},Vi=function(e){return typeof e=="object"},Vn=function(e){return e!==!1},fd=function(){return typeof window<"u"},bl=function(e){return Xt(e)||mn(e)},Nm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},wn=Array.isArray,vh=/(?:-?\.?\d|\.)+/gi,Om=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Js=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,_u=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Fm=/[+-]=-?[.\d]+/,Bm=/[^,'"\[\]\s]+/gi,yE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Gt,Ci,yh,pd,ii={},dc={},km,zm=function(e){return(dc=gs(e,ii))&&Yn},md=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Sa=function(e,t){return!t&&console.warn(e)},Hm=function(e,t){return e&&(ii[e]=t)&&dc&&(dc[e]=t)||ii},Ta=function(){return 0},ME={suppressEvents:!0,isStart:!0,kill:!1},Yl={suppressEvents:!0,kill:!1},SE={suppressEvents:!0},_d={},Nr=[],Mh={},Vm,Zn={},gu={},op=30,ql=[],gd="",xd=function(e){var t=e[0],n,i;if(Vi(t)||Xt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=ql.length;i--&&!ql[i].targetTest(t););n=ql[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new d_(e[i],n)))||e.splice(i,1);return e},ls=function(e){return e._gsap||xd(di(e))[0]._gsap},Gm=function(e,t,n){return(n=e[t])&&Xt(n)?e[t]():dd(n)&&e.getAttribute&&e.getAttribute(t)||n},Gn=function(e,t){return(e=e.split(",")).forEach(t)||e},Kt=function(e){return Math.round(e*1e5)/1e5||0},dn=function(e){return Math.round(e*1e7)/1e7||0},oo=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},TE=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},fc=function(){var e=Nr.length,t=Nr.slice(0),n,i;for(Mh={},Nr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Wm=function(e,t,n,i){Nr.length&&!An&&fc(),e.render(t,n,i||An&&t<0&&(e._initted||e._startAt)),Nr.length&&!An&&fc()},Xm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Bm).length<2?t:mn(e)?e.trim():e},Ym=function(e){return e},pi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},EE=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},gs=function(e,t){for(var n in t)e[n]=t[n];return e},ap=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Vi(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},pc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},oa=function(e){var t=e.parent||Gt,n=e.keyframes?EE(wn(e.keyframes)):pi;if(Vn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},bE=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},qm=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Cc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},zr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},cs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},AE=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Sh=function(e,t,n,i){return e._startAt&&(An?e._startAt.revert(Yl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},wE=function s(e){return!e||e._ts&&s(e.parent)},lp=function(e){return e._repeat?To(e._tTime,e=e.duration()+e._rDelay)*e:0},To=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},mc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Pc=function(e){return e._end=dn(e._start+(e._tDur/Math.abs(e._ts||e._rts||It)||0))},Lc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=dn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Pc(e),n._dirty||cs(n,e)),e},Km=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=mc(e.rawTime(),t),(!t._dur||Oa(0,t.totalDuration(),n)-t._tTime>It)&&t.render(n,!0)),cs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-It}},Di=function(e,t,n,i){return t.parent&&zr(t),t._start=dn((dr(n)?n:n||e!==Gt?oi(e,n,t):e._time)+t._delay),t._end=dn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),qm(e,t,"_first","_last",e._sort?"_start":0),Th(t)||(e._recent=t),i||Km(e,t),e._ts<0&&Lc(e,e._tTime),e},$m=function(e,t){return(ii.ScrollTrigger||md("scrollTrigger",t))&&ii.ScrollTrigger.create(t,e)},jm=function(e,t,n,i,r){if(yd(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!An&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Vm!==Qn.frame)return Nr.push(e),e._lazy=[r,i],1},RE=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Th=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},CE=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&RE(e)&&!(!e._initted&&Th(e))||(e._ts<0||e._dp._ts<0)&&!Th(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Oa(0,e._tDur,t),u=To(l,a),e._yoyo&&u&1&&(o=1-o),u!==To(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||An||i||e._zTime===It||!t&&e._zTime){if(!e._initted&&jm(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?It:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Sh(e,t,n,!0),e._onUpdate&&!n&&ti(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ti(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&zr(e,1),!n&&!An&&(ti(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},PE=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Eo=function(e,t,n,i){var r=e._repeat,o=dn(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:dn(o*(r+1)+e._rDelay*r):o,a>0&&!i&&Lc(e,e._tTime=e._tDur*a),e.parent&&Pc(e),n||cs(e.parent,e),e},cp=function(e){return e instanceof Nn?cs(e):Eo(e,e._dur)},LE={_start:0,endTime:Ta,totalDuration:Ta},oi=function s(e,t,n){var i=e.labels,r=e._recent||LE,o=e.duration()>=hi?r.endTime(!1):e._dur,a,l,c;return mn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(wn(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},aa=function(e,t,n){var i=dr(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Vn(l.vars.inherit)&&l.parent;o.immediateRender=Vn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new tn(t[0],o,t[r+1])},Gr=function(e,t){return e||e===0?t(e):t},Oa=function(e,t,n){return n<e?e:n>t?t:n},En=function(e,t){return!mn(e)||!(t=yE.exec(e))?"":t[1]},IE=function(e,t,n){return Gr(n,function(i){return Oa(e,t,i)})},Eh=[].slice,Zm=function(e,t){return e&&Vi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Vi(e[0]))&&!e.nodeType&&e!==Ci},DE=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return mn(i)&&!t||Zm(i,1)?(r=n).push.apply(r,di(i)):n.push(i)})||n},di=function(e,t,n){return Bt&&!t&&Bt.selector?Bt.selector(e):mn(e)&&!n&&(yh||!bo())?Eh.call((t||pd).querySelectorAll(e),0):wn(e)?DE(e,n):Zm(e)?Eh.call(e,0):e?[e]:[]},bh=function(e){return e=di(e)[0]||Sa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return di(t,n.querySelectorAll?n:n===e?Sa("Invalid scope")||pd.createElement("div"):e)}},Jm=function(e){return e.sort(function(){return .5-Math.random()})},Qm=function(e){if(Xt(e))return e;var t=Vi(e)?e:{each:e},n=us(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return mn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(d,f,_){var g=(_||t).length,p=o[g],m,S,y,v,R,w,b,P,T;if(!p){if(T=t.grid==="auto"?0:(t.grid||[1,hi])[1],!T){for(b=-hi;b<(b=_[T++].getBoundingClientRect().left)&&T<g;);T<g&&T--}for(p=o[g]=[],m=l?Math.min(T,g)*u-.5:i%T,S=T===hi?0:l?g*h/T-.5:i/T|0,b=0,P=hi,w=0;w<g;w++)y=w%T-m,v=S-(w/T|0),p[w]=R=c?Math.abs(c==="y"?v:y):Um(y*y+v*v),R>b&&(b=R),R<P&&(P=R);i==="random"&&Jm(p),p.max=b-P,p.min=P,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(T>g?g-1:c?c==="y"?g/T:T:Math.max(T,g/T))||0)*(i==="edges"?-1:1),p.b=g<0?r-g:r,p.u=En(t.amount||t.each)||0,n=n&&g<0?c_(n):n}return g=(p[d]-p.min)/p.max||0,dn(p.b+(n?n(g):g)*p.v)+p.u}},Ah=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=dn(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(dr(n)?0:En(n))}},e_=function(e,t){var n=wn(e),i,r;return!n&&Vi(e)&&(i=n=e.radius||hi,e.values?(e=di(e.values),(r=!dr(e[0]))&&(i*=i)):e=Ah(e.increment)),Gr(t,n?Xt(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=hi,u=0,h=e.length,d,f;h--;)r?(d=e[h].x-a,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-a),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:o,r||u===o||dr(o)?u:u+En(o)}:Ah(e))},t_=function(e,t,n,i){return Gr(wn(e)?!t:n===!0?!!(n=0):!i,function(){return wn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},UE=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},NE=function(e,t){return function(n){return e(parseFloat(n))+(t||En(n))}},OE=function(e,t,n){return i_(e,t,0,1,n)},n_=function(e,t,n){return Gr(n,function(i){return e[~~t(i)]})},FE=function s(e,t,n){var i=t-e;return wn(e)?n_(e,s(0,e.length),t):Gr(n,function(r){return(i+(r-e)%i)%i+e})},BE=function s(e,t,n){var i=t-e,r=i*2;return wn(e)?n_(e,s(0,e.length-1),t):Gr(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},Ea=function(e){for(var t=0,n="",i,r,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,o-i-7).match(a?Bm:vh),n+=e.substr(t,i-t)+t_(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},i_=function(e,t,n,i,r){var o=t-e,a=i-n;return Gr(r,function(l){return n+((l-e)/o*a||0)})},kE=function s(e,t,n,i){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var o=mn(e),a={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(wn(e)&&!wn(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(_){_*=h;var g=Math.min(d,~~_);return u[g](_-g)},n=t}else i||(e=gs(wn(e)?[]:{},e));if(!u){for(l in t)vd.call(a,e,l,"get",t[l]);r=function(_){return Td(_,a)||(o?e.p:e)}}}return Gr(n,r)},up=function(e,t,n){var i=e.labels,r=hi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},ti=function(e,t,n){var i=e.vars,r=i[t],o=Bt,a=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Nr.length&&fc(),a&&(Bt=a),u=l?r.apply(c,l):r.call(c),Bt=o,u},jo=function(e){return zr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!An),e.progress()<1&&ti(e,"onInterrupt"),e},Qs,r_=[],s_=function(e){if(e)if(e=!e.name&&e.default||e,fd()||e.headless){var t=e.name,n=Xt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Ta,render:Td,add:vd,kill:tb,modifier:eb,rawVars:0},o={targetTest:0,get:0,getSetter:Sd,aliases:{},register:0};if(bo(),e!==i){if(Zn[t])return;pi(i,pi(pc(e,r),o)),gs(i.prototype,gs(r,pc(e,o))),Zn[i.prop=t]=i,e.targetTest&&(ql.push(i),_d[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Hm(t,i),e.register&&e.register(Yn,i,Wn)}else r_.push(e)},Lt=255,Zo={aqua:[0,Lt,Lt],lime:[0,Lt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Lt],navy:[0,0,128],white:[Lt,Lt,Lt],olive:[128,128,0],yellow:[Lt,Lt,0],orange:[Lt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Lt,0,0],pink:[Lt,192,203],cyan:[0,Lt,Lt],transparent:[Lt,Lt,Lt,0]},xu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Lt+.5|0},o_=function(e,t,n){var i=e?dr(e)?[e>>16,e>>8&Lt,e&Lt]:0:Zo.black,r,o,a,l,c,u,h,d,f,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Zo[e])i=Zo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Lt,i&Lt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Lt,e&Lt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(vh),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=xu(l+1/3,r,o),i[1]=xu(l,r,o),i[2]=xu(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(Om),n&&i.length<4&&(i[3]=1),i}else i=e.match(vh)||Zo.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/Lt,o=i[1]/Lt,a=i[2]/Lt,h=Math.max(r,o,a),d=Math.min(r,o,a),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===r?(o-a)/f+(o<a?6:0):h===o?(a-r)/f+2:(r-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},a_=function(e){var t=[],n=[],i=-1;return e.split(Or).forEach(function(r){var o=r.match(Js)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},hp=function(e,t,n){var i="",r=(e+i).match(Or),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!r)return e;if(r=r.map(function(d){return(d=o_(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=a_(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Or,"1").split(Js),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Or),h=c.length-1;a<h;a++)i+=c[a]+r[a];return i+c[h]},Or=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Zo)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),zE=/hsl[a]?\(/,l_=function(e){var t=e.join(" "),n;if(Or.lastIndex=0,Or.test(t))return n=zE.test(t),e[1]=hp(e[1],n),e[0]=hp(e[0],n,a_(e[1])),!0},ba,Qn=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,u,h,d,f,_=function g(p){var m=s()-i,S=p===!0,y,v,R,w;if((m>e||m<0)&&(n+=m-t),i+=m,R=i-n,y=R-o,(y>0||S)&&(w=++h.frame,d=R-h.time*1e3,h.time=R=R/1e3,o+=y+(y>=r?4:r-y),v=1),S||(l=c(g)),v)for(f=0;f<a.length;f++)a[f](R,d,w,p)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){km&&(!yh&&fd()&&(Ci=yh=window,pd=Ci.document||{},ii.gsap=Yn,(Ci.gsapVersions||(Ci.gsapVersions=[])).push(Yn.version),zm(dc||Ci.GreenSockGlobals||!Ci.gsap&&Ci||{}),r_.forEach(s_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},ba=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ba=0,c=Ta},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){r=1e3/(p||240),o=h.time*1e3+r},add:function(p,m,S){var y=m?function(v,R,w,b){p(v,R,w,b),h.remove(y)}:p;return h.remove(p),a[S?"unshift":"push"](y),bo(),y},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&f>=m&&f--},_listeners:a},h}(),bo=function(){return!ba&&Qn.wake()},mt={},HE=/^[\d.\-M][\d.\-,\s]/,VE=/["']/g,GE=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(VE,"").trim():+c,i=l.substr(a+1).trim();return t},WE=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},XE=function(e){var t=(e+"").split("("),n=mt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[GE(t[1])]:WE(e).split(",").map(Xm)):mt._CE&&HE.test(e)?mt._CE("",e):n},c_=function(e){return function(t){return 1-e(1-t)}},u_=function s(e,t){for(var n=e._first,i;n;)n instanceof Nn?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},us=function(e,t){return e&&(Xt(e)?e:mt[e]||XE(e))||t},Es=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return Gn(e,function(a){mt[a]=ii[a]=r,mt[o=a.toLowerCase()]=n;for(var l in r)mt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=mt[a+"."+l]=r[l]}),r},h_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},vu=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/xh*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*vE((u-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:h_(a);return r=xh/r,l.config=function(c,u){return s(e,c,u)},l},yu=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:h_(n);return i.config=function(r){return s(e,r)},i};Gn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Es(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});mt.Linear.easeNone=mt.none=mt.Linear.easeIn;Es("Elastic",vu("in"),vu("out"),vu());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};Es("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Es("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});Es("Circ",function(s){return-(Um(1-s*s)-1)});Es("Sine",function(s){return s===1?1:-xE(s*_E)+1});Es("Back",yu("in"),yu("out"),yu());mt.SteppedEase=mt.steps=ii.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-It;return function(a){return((i*Oa(0,o,a)|0)+r)*n}}};So.ease=mt["quad.out"];Gn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return gd+=s+","+s+"Params,"});var d_=function(e,t){this.id=gE++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Gm,this.set=t?t.getSetter:Sd},Aa=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Eo(this,+t.duration,1,1),this.data=t.data,Bt&&(this._ctx=Bt,Bt.data.push(this)),ba||Qn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Eo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(bo(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Lc(this,n),!r._dp||r.parent||Km(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Di(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===It||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Wm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+lp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+lp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?To(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-It?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?mc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-It?0:this._rts,this.totalTime(Oa(-Math.abs(this._delay),this._tDur,r),i!==!1),Pc(this),AE(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(bo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==It&&(this._tTime-=It)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Di(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Vn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?mc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=SE);var i=An;return An=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),An=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,cp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,cp(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(oi(this,n),Vn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Vn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-It:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-It,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-It)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(r){var o=Xt(n)?n:Ym,a=function(){var c=i.then;i.then=null,Xt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){jo(this)},s}();pi(Aa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-It,_prom:0,_ps:!1,_rts:1});var Nn=function(s){Dm(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Vn(n.sortChildren),Gt&&Di(n.parent||Gt,er(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&$m(er(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return aa(0,arguments,this),this},t.from=function(i,r,o){return aa(1,arguments,this),this},t.fromTo=function(i,r,o,a){return aa(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,oa(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new tn(i,r,oi(this,o),1),this},t.call=function(i,r,o){return Di(this,tn.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new tn(i,o,oi(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,u){return o.runBackwards=1,oa(o).immediateRender=Vn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,u)},t.staggerFromTo=function(i,r,o,a,l,c,u,h){return a.startAt=o,oa(a).immediateRender=Vn(a.immediateRender),this.staggerTo(i,r,a,l,c,u,h)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:dn(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,_,g,p,m,S,y,v,R,w,b;if(this!==Gt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,v=this._start,y=this._ts,m=!y,h&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(d=dn(u%p),u===l?(g=this._repeat,d=c):(g=~~(u/p),g&&g===u/p&&(d=c,g--),d>c&&(d=c)),R=To(this._tTime,p),!a&&this._tTime&&R!==g&&this._tTime-R*p-this._dur<=0&&(R=g),w&&g&1&&(d=c-d,b=1),g!==R&&!this._lock){var P=w&&R&1,T=P===(w&&g&1);if(g<R&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(b?0:dn(g*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&ti(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;u_(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=PE(this,dn(a),dn(d)),S&&(u-=d-(d=S._start))),this._tTime=u,this._time=d,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!r&&!g&&(ti(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,o),d!==this._time||!this._ts&&!m){S=0,_&&(u+=this._zTime=-It);break}}f=_}else{f=this._last;for(var M=i<0?i:d;f;){if(_=f._prev,(f._act||M<=f._end)&&f._ts&&S!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(M-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(M-f._start)*f._ts,r,o||An&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!m){S=0,_&&(u+=this._zTime=M?-It:It);break}}f=_}}if(S&&!r&&(this.pause(),S.render(d>=a?0:-It)._zTime=d>=a?1:-1,this._ts))return this._start=v,Pc(this),this.render(i,r,o);this._onUpdate&&!r&&ti(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&zr(this,1),!r&&!(i<0&&!a)&&(u||a||!l)&&(ti(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(dr(r)||(r=oi(this,r,i)),!(i instanceof Aa)){if(wn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(mn(i))return this.addLabel(i,r);if(Xt(i))i=tn.delayedCall(0,i);else return this}return this!==i?Di(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-hi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof tn?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return mn(i)?this.removeLabel(i):Xt(i)?this.killTweensOf(i):(Cc(this,i),i===this._recent&&(this._recent=this._last),cs(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=dn(Qn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=oi(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=tn.delayedCall(0,r||Ta,o);return a.data="isPause",this._hasPause=1,Di(this,a,oi(this,i))},t.removePause=function(i){var r=this._first;for(i=oi(this,i);r;)r._start===i&&r.data==="isPause"&&zr(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Rr!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=di(i),l=this._first,c=dr(r),u;l;)l instanceof tn?TE(l._targets,a)&&(c?(!Rr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(a,r)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=oi(o,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,_=tn.to(o,pi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||It,onStart:function(){if(o.pause(),!f){var p=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&Eo(_,p,0,1).render(_._time,!0,!0),f=1}u&&u.apply(_,h||[])}},r));return d?_.render(0):_},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,pi({startAt:{time:oi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),up(this,oi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),up(this,oi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+It)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return cs(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),cs(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=hi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Di(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Eo(o,o===Gt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Gt._ts&&(Wm(Gt,mc(i,Gt)),Vm=Qn.frame),Qn.frame>=op){op+=ni.autoSleep||120;var r=Gt._first;if((!r||!r._ts)&&ni.autoSleep&&Qn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Qn.sleep()}}},e}(Aa);pi(Nn.prototype,{_lock:0,_hasPause:0,_forcing:0});var YE=function(e,t,n,i,r,o,a){var l=new Wn(this._pt,e,t,0,1,x_,null,r),c=0,u=0,h,d,f,_,g,p,m,S;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Ea(i)),o&&(S=[n,i],o(S,e,t),n=S[0],i=S[1]),d=n.match(_u)||[];h=_u.exec(i);)_=h[0],g=i.substring(c,h.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[u++]&&(p=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?oo(p,_)-p:parseFloat(_)-p,m:f&&f<4?Math.round:0},c=_u.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Fm.test(i)||m)&&(l.e=0),this._pt=l,l},vd=function(e,t,n,i,r,o,a,l,c,u){Xt(i)&&(i=i(r||0,e,o));var h=e[t],d=n!=="get"?n:Xt(h)?c?e[t.indexOf("set")||!Xt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=Xt(h)?c?ZE:__:Md,_;if(mn(i)&&(~i.indexOf("random(")&&(i=Ea(i)),i.charAt(1)==="="&&(_=oo(d,i)+(En(d)||0),(_||_===0)&&(i=_))),!u||d!==i||wh)return!isNaN(d*i)&&i!==""?(_=new Wn(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?QE:g_,0,f),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&md(t,i),YE.call(this,e,t,d,i,f,l||ni.stringFilter,c))},qE=function(e,t,n,i,r){if(Xt(e)&&(e=la(e,r,t,n,i)),!Vi(e)||e.style&&e.nodeType||wn(e)||Nm(e))return mn(e)?la(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=la(e[a],r,t,n,i);return o},f_=function(e,t,n,i,r,o){var a,l,c,u;if(Zn[e]&&(a=new Zn[e]).init(r,a.rawVars?t[e]:qE(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new Wn(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==Qs))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Rr,wh,yd=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,S=m&&m.data==="nested"?m.vars.targets:p,y=e._overwrite==="auto"&&!hd,v=e.timeline,R,w,b,P,T,M,L,D,z,J,K,W,j;if(v&&(!d||!r)&&(r="none"),e._ease=us(r,So.ease),e._yEase=h?c_(us(h===!0?r:h,So.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!v&&!!i.runBackwards,!v||d&&!i.stagger){if(D=p[0]?ls(p[0]).harness:0,W=D&&i[D.prop],R=pc(i,_d),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!f?g.render(-1,!0):g.revert(u&&_?Yl:ME),g._lazy=0),o){if(zr(e._startAt=tn.set(p,pi({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Vn(l),startAt:null,delay:0,onUpdate:c&&function(){return ti(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(An||!a&&!f)&&e._startAt.revert(Yl),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),b=pi({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Vn(l),immediateRender:a,stagger:0,parent:m},R),W&&(b[D.prop]=W),zr(e._startAt=tn.set(p,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(An?e._startAt.revert(Yl):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,It,It);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Vn(l)||l&&!_,w=0;w<p.length;w++){if(T=p[w],L=T._gsap||xd(p)[w]._gsap,e._ptLookup[w]=J={},Mh[L.id]&&Nr.length&&fc(),K=S===p?w:S.indexOf(T),D&&(z=new D).init(T,W||R,e,K,S)!==!1&&(e._pt=P=new Wn(e._pt,T,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(X){J[X]=P}),z.priority&&(M=1)),!D||W)for(b in R)Zn[b]&&(z=f_(b,R,e,K,T,S))?z.priority&&(M=1):J[b]=P=vd.call(e,T,b,"get",R[b],K,S,0,i.stringFilter);e._op&&e._op[w]&&e.kill(T,e._op[w]),y&&e._pt&&(Rr=e,Gt.killTweensOf(T,J,e.globalTime(t)),j=!e.parent,Rr=0),e._pt&&l&&(Mh[L.id]=1)}M&&v_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!j,d&&t<=0&&v.render(hi,!0,!0)},KE=function(e,t,n,i,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return wh=1,e.vars[t]="+=0",yd(e,a),wh=0,l?Sa(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Kt(n)+En(h.e)),h.b&&(h.b=u.s+En(h.b))},$E=function(e,t){var n=e[0]?ls(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=gs({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},jE=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(wn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},la=function(e,t,n,i,r){return Xt(e)?e.call(t,n,i,r):mn(e)&&~e.indexOf("random(")?Ea(e):e},p_=gd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",m_={};Gn(p_+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return m_[s]=1});var tn=function(s){Dm(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:oa(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,S=i.parent||Gt,y=(wn(n)||Nm(n)?dr(n[0]):"length"in i)?[n]:di(n),v,R,w,b,P,T,M,L;if(a._targets=y.length?xd(y):Sa("GSAP target "+n+" not found. https://gsap.com",!ni.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||d||bl(c)||bl(u)){if(i=a.vars,v=a.timeline=new Nn({data:"nested",defaults:g||{},targets:S&&S.data==="nested"?S.vars.targets:y}),v.kill(),v.parent=v._dp=er(a),v._start=0,d||bl(c)||bl(u)){if(b=y.length,M=d&&Qm(d),Vi(d))for(P in d)~p_.indexOf(P)&&(L||(L={}),L[P]=d[P]);for(R=0;R<b;R++)w=pc(i,m_),w.stagger=0,m&&(w.yoyoEase=m),L&&gs(w,L),T=y[R],w.duration=+la(c,er(a),R,T,y),w.delay=(+la(u,er(a),R,T,y)||0)-a._delay,!d&&b===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),v.to(T,w,M?M(R,T,y):0),v._ease=mt.none;v.duration()?c=u=0:a.timeline=0}else if(_){oa(pi(v.vars.defaults,{ease:"none"})),v._ease=us(_.ease||i.ease||"none");var D=0,z,J,K;if(wn(_))_.forEach(function(W){return v.to(y,W,">")}),v.duration();else{w={};for(P in _)P==="ease"||P==="easeEach"||jE(P,_[P],w,_.easeEach);for(P in w)for(z=w[P].sort(function(W,j){return W.t-j.t}),D=0,R=0;R<z.length;R++)J=z[R],K={ease:J.e,duration:(J.t-(R?z[R-1].t:0))/100*c},K[P]=J.v,v.to(y,K,D),D+=K.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return f===!0&&!hd&&(Rr=er(a),Gt.killTweensOf(y),Rr=0),Di(S,er(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!_&&a._start===dn(S._time)&&Vn(h)&&wE(er(a))&&S.data!=="nested")&&(a._tTime=-It,a.render(Math.max(0,-u)||0)),p&&$m(er(a),p),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-It&&!u?l:i<It?0:i,d,f,_,g,p,m,S,y,v;if(!c)CE(this,i,r,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=h,y=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,r,o);if(d=dn(h%g),h===l?(_=this._repeat,d=c):(_=~~(h/g),_&&_===dn(h/g)&&(d=c,_--),d>c&&(d=c)),m=this._yoyo&&_&1,m&&(v=this._yEase,d=c-d),p=To(this._tTime,g),d===a&&!o&&this._initted&&_===p)return this._tTime=h,this;_!==p&&(y&&this._yEase&&u_(y,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render(dn(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(jm(this,u?i:d,o,r,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(v||this._ease)(d/c),this._from&&(this.ratio=S=1-S),d&&!a&&!r&&!_&&(ti(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(S,f.d),f=f._next;y&&y.render(i<0?i:y._dur*y._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Sh(this,i,r,o),ti(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!r&&this.parent&&ti(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Sh(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&zr(this,1),!r&&!(u&&!a)&&(h||a||m)&&(ti(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,l){ba||Qn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||yd(this,c),u=this._ease(c/this._dur),KE(this,i,r,o,a,u,c,l)?this.resetTo(i,r,o,a,1):(Lc(this,0),this.parent||qm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?jo(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Rr&&Rr.vars.overwrite!==!0)._first||jo(this),this.parent&&o!==this.timeline.totalDuration()&&Eo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?di(i):a,c=this._ptLookup,u=this._pt,h,d,f,_,g,p,m;if((!r||r==="all")&&bE(a,l))return r==="all"&&(this._pt=0),jo(this);for(h=this._op=this._op||[],r!=="all"&&(mn(r)&&(g={},Gn(r,function(S){return g[S]=1}),r=g),r=$E(a,r)),m=a.length;m--;)if(~l.indexOf(a[m])){d=c[m],r==="all"?(h[m]=r,_=d,f={}):(f=h[m]=h[m]||{},_=r);for(g in _)p=d&&d[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&Cc(this,p,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&u&&jo(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return aa(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return aa(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return Gt.killTweensOf(i,r,o)},e}(Aa);pi(tn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Gn("staggerTo,staggerFrom,staggerFromTo",function(s){tn[s]=function(){var e=new Nn,t=Eh.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Md=function(e,t,n){return e[t]=n},__=function(e,t,n){return e[t](n)},ZE=function(e,t,n,i){return e[t](i.fp,n)},JE=function(e,t,n){return e.setAttribute(t,n)},Sd=function(e,t){return Xt(e[t])?__:dd(e[t])&&e.setAttribute?JE:Md},g_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},QE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},x_=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Td=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},eb=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},tb=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Cc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},nb=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},v_=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},Wn=function(){function s(t,n,i,r,o,a,l,c,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||g_,this.d=l||this,this.set=c||Md,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=nb,this.m=n,this.mt=r,this.tween=i},s}();Gn(gd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return _d[s]=1});ii.TweenMax=ii.TweenLite=tn;ii.TimelineLite=ii.TimelineMax=Nn;Gt=new Nn({sortChildren:!1,defaults:So,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ni.stringFilter=l_;var hs=[],Kl={},ib=[],dp=0,rb=0,Mu=function(e){return(Kl[e]||ib).map(function(t){return t()})},Rh=function(){var e=Date.now(),t=[];e-dp>2&&(Mu("matchMediaInit"),hs.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Ci.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Mu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),dp=e,Mu("matchMedia"))},y_=function(){function s(t,n){this.selector=n&&bh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=rb++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Xt(n)&&(r=i,i=n,n=Xt);var o=this,a=function(){var c=Bt,u=o.selector,h;return c&&c!==o&&c.data.push(o),r&&(o.selector=bh(r)),Bt=o,h=i.apply(o,arguments),Xt(h)&&o._r.push(h),Bt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Xt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Bt;Bt=null,n(this),Bt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof tn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Nn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof tn)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=hs.length;o--;)hs[o].id===this.id&&hs.splice(o,1)},e.revert=function(n){this.kill(n||{})},s}(),sb=function(){function s(t){this.contexts=[],this.scope=t,Bt&&Bt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){Vi(n)||(n={matches:n});var o=new y_(0,r||this.scope),a=o.conditions={},l,c,u;Bt&&!o.selector&&(o.selector=Bt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Ci.matchMedia(n[c]),l&&(hs.indexOf(o)<0&&hs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Rh):l.addEventListener("change",Rh)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),_c={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return s_(i)})},timeline:function(e){return new Nn(e)},getTweensOf:function(e,t){return Gt.getTweensOf(e,t)},getProperty:function(e,t,n,i){mn(e)&&(e=di(e)[0]);var r=ls(e||{}).get,o=n?Ym:Xm;return n==="native"&&(n=""),e&&(t?o((Zn[t]&&Zn[t].get||r)(e,t,n,i)):function(a,l,c){return o((Zn[a]&&Zn[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=di(e),e.length>1){var i=e.map(function(u){return Yn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var o=Zn[t],a=ls(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Qs._pt=0,h.init(e,n?u+n:u,Qs,0,[e]),h.render(1,h),Qs._pt&&Td(1,Qs)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,r=Yn.to(e,gs((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return r.resetTo(t,l,c,u)};return o.tween=r,o},isTweening:function(e){return Gt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=us(e.ease,So.ease)),ap(So,e||{})},config:function(e){return ap(ni,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Zn[a]&&!ii[a]&&Sa(t+" effect requires "+a+" plugin.")}),gu[t]=function(a,l,c){return n(di(a),pi(l||{},r),c)},o&&(Nn.prototype[t]=function(a,l,c){return this.add(gu[t](a,Vi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){mt[e]=us(t)},parseEase:function(e,t){return arguments.length?us(e,t):mt},getById:function(e){return Gt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Nn(e),i,r;for(n.smoothChildTiming=Vn(e.smoothChildTiming),Gt.remove(n),n._dp=0,n._time=n._tTime=Gt._time,i=Gt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof tn&&i.vars.onComplete===i._targets[0]))&&Di(n,i,i._start-i._delay),i=r;return Di(Gt,n,0),n},context:function(e,t){return e?new y_(e,t):Bt},matchMedia:function(e){return new sb(e)},matchMediaRefresh:function(){return hs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Rh()},addEventListener:function(e,t){var n=Kl[e]||(Kl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Kl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:FE,wrapYoyo:BE,distribute:Qm,random:t_,snap:e_,normalize:OE,getUnit:En,clamp:IE,splitColor:o_,toArray:di,selector:bh,mapRange:i_,pipe:UE,unitize:NE,interpolate:kE,shuffle:Jm},install:zm,effects:gu,ticker:Qn,updateRoot:Nn.updateRoot,plugins:Zn,globalTimeline:Gt,core:{PropTween:Wn,globals:Hm,Tween:tn,Timeline:Nn,Animation:Aa,getCache:ls,_removeLinkedListItem:Cc,reverting:function(){return An},context:function(e){return e&&Bt&&(Bt.data.push(e),e._ctx=Bt),Bt},suppressOverwrites:function(e){return hd=e}}};Gn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return _c[s]=tn[s]});Qn.add(Nn.updateRoot);Qs=_c.to({},{duration:0});var ob=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},ab=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=ob(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},Su=function(e,t){return{name:e,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(mn(r)&&(l={},Gn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}ab(a,r)}}}},Yn=_c.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)An?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Su("roundProps",Ah),Su("modifiers"),Su("snap",e_))||_c;tn.version=Nn.version=Yn.version="3.12.5";km=1;fd()&&bo();mt.Power0;mt.Power1;mt.Power2;mt.Power3;mt.Power4;mt.Linear;mt.Quad;mt.Cubic;mt.Quart;mt.Quint;mt.Strong;mt.Elastic;mt.Back;mt.SteppedEase;mt.Bounce;mt.Sine;mt.Expo;mt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var fp,Cr,ao,Ed,os,pp,bd,lb=function(){return typeof window<"u"},fr={},es=180/Math.PI,lo=Math.PI/180,Ws=Math.atan2,mp=1e8,Ad=/([A-Z])/g,cb=/(left|right|width|margin|padding|x)/i,ub=/[\s,\(]\S/,Ui={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ch=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},hb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},db=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},fb=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},M_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},S_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},pb=function(e,t,n){return e.style[t]=n},mb=function(e,t,n){return e.style.setProperty(t,n)},_b=function(e,t,n){return e._gsap[t]=n},gb=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},xb=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},vb=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},Wt="transform",Xn=Wt+"Origin",yb=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in fr&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Ui[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=tr(i,a)}):this.tfm[e]=o.x?o[e]:tr(i,e),e===Xn&&(this.tfm.zOrigin=o.zOrigin);else return Ui.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(Wt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Xn,t,"")),e=Wt}(r||t)&&this.props.push(e,t,r[e])},T_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Mb=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Ad,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=bd(),(!r||!r.isStart)&&!n[Wt]&&(T_(n),i.zOrigin&&n[Xn]&&(n[Xn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},E_=function(e,t){var n={target:e,props:[],revert:Mb,save:yb};return e._gsap||Yn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},b_,Ph=function(e,t){var n=Cr.createElementNS?Cr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Cr.createElement(e);return n&&n.style?n:Cr.createElement(e)},Bi=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Ad,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Ao(t)||t,1)||""},_p="O,Moz,ms,Ms,Webkit".split(","),Ao=function(e,t,n){var i=t||os,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(_p[o]+e in r););return o<0?null:(o===3?"ms":o>=0?_p[o]:"")+e},Lh=function(){lb()&&window.document&&(fp=window,Cr=fp.document,ao=Cr.documentElement,os=Ph("div")||{style:{}},Ph("div"),Wt=Ao(Wt),Xn=Wt+"Origin",os.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",b_=!!Ao("perspective"),bd=Yn.core.reverting,Ed=1)},Tu=function s(e){var t=Ph("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(ao.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ao.removeChild(t),this.style.cssText=r,o},gp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},A_=function(e){var t;try{t=e.getBBox()}catch{t=Tu.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Tu||(t=Tu.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+gp(e,["x","cx","x1"])||0,y:+gp(e,["y","cy","y1"])||0,width:0,height:0}:t},w_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&A_(e))},xs=function(e,t){if(t){var n=e.style,i;t in fr&&t!==Xn&&(t=Wt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Ad,"-$1").toLowerCase())):n.removeAttribute(t)}},Pr=function(e,t,n,i,r,o){var a=new Wn(e._pt,t,n,0,1,o?S_:M_);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},xp={deg:1,rad:1,turn:1},Sb={grid:1,flex:1},Hr=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=os.style,l=cb.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",_,g,p,m;if(i===o||!r||xp[i]||xp[o])return r;if(o!=="px"&&!d&&(r=s(e,t,n,"px")),m=e.getCTM&&w_(e),(f||o==="%")&&(fr[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],Kt(f?r/_*h:r/100*_);if(a[l?"width":"height"]=h+(d?o:i),g=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Cr||!g.appendChild)&&(g=Cr.body),p=g._gsap,p&&f&&p.width&&l&&p.time===Qn.time&&!p.uncache)return Kt(r/p.width*h);if(f&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=h+i,_=e[u],S?e.style[t]=S:xs(e,t)}else(f||o==="%")&&!Sb[Bi(g,"display")]&&(a.position=Bi(e,"position")),g===e&&(a.position="static"),g.appendChild(os),_=os[u],g.removeChild(os),a.position="absolute";return l&&f&&(p=ls(g),p.time=Qn.time,p.width=g[u]),Kt(d?_*r/h:_&&r?h/_*r:0)},tr=function(e,t,n,i){var r;return Ed||Lh(),t in Ui&&t!=="transform"&&(t=Ui[t],~t.indexOf(",")&&(t=t.split(",")[0])),fr[t]&&t!=="transform"?(r=Ra(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:xc(Bi(e,Xn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=gc[t]&&gc[t](e,t,n)||Bi(e,t)||Gm(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Hr(e,t,r,n)+n:r},Tb=function(e,t,n,i){if(!n||n==="none"){var r=Ao(t,e,1),o=r&&Bi(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=Bi(e,"borderTopColor"))}var a=new Wn(this._pt,e.style,t,0,1,x_),l=0,c=0,u,h,d,f,_,g,p,m,S,y,v,R;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(g=e.style[t],e.style[t]=i,i=Bi(e,t)||i,g?e.style[t]=g:xs(e,t)),u=[n,i],l_(u),n=u[0],i=u[1],d=n.match(Js)||[],R=i.match(Js)||[],R.length){for(;h=Js.exec(i);)p=h[0],S=i.substring(l,h.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),p!==(g=d[c++]||"")&&(f=parseFloat(g)||0,v=g.substr((f+"").length),p.charAt(1)==="="&&(p=oo(f,p)+v),m=parseFloat(p),y=p.substr((m+"").length),l=Js.lastIndex-y.length,y||(y=y||ni.units[t]||v,l===i.length&&(i+=y,a.e+=y)),v!==y&&(f=Hr(e,t,g,y)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:f,c:m-f,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?S_:M_;return Fm.test(i)&&(a.e=0),this._pt=a,a},vp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Eb=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=vp[n]||n,t[1]=vp[i]||i,t.join(" ")},bb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],fr[a]&&(l=1,a=a==="transformOrigin"?Xn:Wt),xs(n,a);l&&(xs(n,Wt),o&&(o.svg&&n.removeAttribute("transform"),Ra(n,1),o.uncache=1,T_(i)))}},gc={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new Wn(e._pt,t,n,0,0,bb);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},wa=[1,0,0,1,0,0],R_={},C_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},yp=function(e){var t=Bi(e,Wt);return C_(t)?wa:t.substr(7).match(Om).map(Kt)},wd=function(e,t){var n=e._gsap||ls(e),i=e.style,r=yp(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?wa:r):(r===wa&&!e.offsetParent&&e!==ao&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,ao.appendChild(e)),r=yp(e),l?i.display=l:xs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ao.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Ih=function(e,t,n,i,r,o){var a=e._gsap,l=r||wd(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=l[0],_=l[1],g=l[2],p=l[3],m=l[4],S=l[5],y=t.split(" "),v=parseFloat(y[0])||0,R=parseFloat(y[1])||0,w,b,P,T;n?l!==wa&&(b=f*p-_*g)&&(P=v*(p/b)+R*(-g/b)+(g*S-p*m)/b,T=v*(-_/b)+R*(f/b)-(f*S-_*m)/b,v=P,R=T):(w=A_(e),v=w.x+(~y[0].indexOf("%")?v/100*w.width:v),R=w.y+(~(y[1]||y[0]).indexOf("%")?R/100*w.height:R)),i||i!==!1&&a.smooth?(m=v-c,S=R-u,a.xOffset=h+(m*f+S*g)-m,a.yOffset=d+(m*_+S*p)-S):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=R,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Xn]="0px 0px",o&&(Pr(o,a,"xOrigin",c,v),Pr(o,a,"yOrigin",u,R),Pr(o,a,"xOffset",h,a.xOffset),Pr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+R)},Ra=function(e,t){var n=e._gsap||new d_(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Bi(e,Xn)||"0",u,h,d,f,_,g,p,m,S,y,v,R,w,b,P,T,M,L,D,z,J,K,W,j,X,H,E,q,re,ce,U,Q;return u=h=d=g=p=m=S=y=v=0,f=_=1,n.svg=!!(e.getCTM&&w_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Wt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Wt]!=="none"?l[Wt]:"")),i.scale=i.rotate=i.translate="none"),b=wd(e,n.svg),n.svg&&(n.uncache?(X=e.getBBox(),c=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",j=""):j=!t&&e.getAttribute("data-svg-origin"),Ih(e,j||c,!!j||n.originIsAbsolute,n.smooth!==!1,b)),R=n.xOrigin||0,w=n.yOrigin||0,b!==wa&&(L=b[0],D=b[1],z=b[2],J=b[3],u=K=b[4],h=W=b[5],b.length===6?(f=Math.sqrt(L*L+D*D),_=Math.sqrt(J*J+z*z),g=L||D?Ws(D,L)*es:0,S=z||J?Ws(z,J)*es+g:0,S&&(_*=Math.abs(Math.cos(S*lo))),n.svg&&(u-=R-(R*L+w*z),h-=w-(R*D+w*J))):(Q=b[6],ce=b[7],E=b[8],q=b[9],re=b[10],U=b[11],u=b[12],h=b[13],d=b[14],P=Ws(Q,re),p=P*es,P&&(T=Math.cos(-P),M=Math.sin(-P),j=K*T+E*M,X=W*T+q*M,H=Q*T+re*M,E=K*-M+E*T,q=W*-M+q*T,re=Q*-M+re*T,U=ce*-M+U*T,K=j,W=X,Q=H),P=Ws(-z,re),m=P*es,P&&(T=Math.cos(-P),M=Math.sin(-P),j=L*T-E*M,X=D*T-q*M,H=z*T-re*M,U=J*M+U*T,L=j,D=X,z=H),P=Ws(D,L),g=P*es,P&&(T=Math.cos(P),M=Math.sin(P),j=L*T+D*M,X=K*T+W*M,D=D*T-L*M,W=W*T-K*M,L=j,K=X),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),f=Kt(Math.sqrt(L*L+D*D+z*z)),_=Kt(Math.sqrt(W*W+Q*Q)),P=Ws(K,W),S=Math.abs(P)>2e-4?P*es:0,v=U?1/(U<0?-U:U):0),n.svg&&(j=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!C_(Bi(e,Wt)),j&&e.setAttribute("transform",j))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(f*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Kt(f),n.scaleY=Kt(_),n.rotation=Kt(g)+a,n.rotationX=Kt(p)+a,n.rotationY=Kt(m)+a,n.skewX=S+a,n.skewY=y+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Xn]=xc(c)),n.xOffset=n.yOffset=0,n.force3D=ni.force3D,n.renderTransform=n.svg?wb:b_?P_:Ab,n.uncache=0,n},xc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Eu=function(e,t,n){var i=En(t);return Kt(parseFloat(t)+parseFloat(Hr(e,"x",n+"px",i)))+i},Ab=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,P_(e,t)},Zr="0deg",Xo="0px",Jr=") ",P_=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,S=n.target,y=n.zOrigin,v="",R=m==="auto"&&e&&e!==1||m===!0;if(y&&(h!==Zr||u!==Zr)){var w=parseFloat(u)*lo,b=Math.sin(w),P=Math.cos(w),T;w=parseFloat(h)*lo,T=Math.cos(w),o=Eu(S,o,b*T*-y),a=Eu(S,a,-Math.sin(w)*-y),l=Eu(S,l,P*T*-y+y)}p!==Xo&&(v+="perspective("+p+Jr),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(R||o!==Xo||a!==Xo||l!==Xo)&&(v+=l!==Xo||R?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Jr),c!==Zr&&(v+="rotate("+c+Jr),u!==Zr&&(v+="rotateY("+u+Jr),h!==Zr&&(v+="rotateX("+h+Jr),(d!==Zr||f!==Zr)&&(v+="skew("+d+", "+f+Jr),(_!==1||g!==1)&&(v+="scale("+_+", "+g+Jr),S.style[Wt]=v||"translate(0, 0)"},wb=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,S=n.forceCSS,y=parseFloat(o),v=parseFloat(a),R,w,b,P,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=lo,c*=lo,R=Math.cos(l)*h,w=Math.sin(l)*h,b=Math.sin(l-c)*-d,P=Math.cos(l-c)*d,c&&(u*=lo,T=Math.tan(c-u),T=Math.sqrt(1+T*T),b*=T,P*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),R*=T,w*=T)),R=Kt(R),w=Kt(w),b=Kt(b),P=Kt(P)):(R=h,P=d,w=b=0),(y&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(y=Hr(f,"x",o,"px"),v=Hr(f,"y",a,"px")),(_||g||p||m)&&(y=Kt(y+_-(_*R+g*b)+p),v=Kt(v+g-(_*w+g*P)+m)),(i||r)&&(T=f.getBBox(),y=Kt(y+i/100*T.width),v=Kt(v+r/100*T.height)),T="matrix("+R+","+w+","+b+","+P+","+y+","+v+")",f.setAttribute("transform",T),S&&(f.style[Wt]=T)},Rb=function(e,t,n,i,r){var o=360,a=mn(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?es:1),c=l-i,u=i+c+"deg",h,d;return a&&(h=r.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*mp)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*mp)%o-~~(c/o)*o)),e._pt=d=new Wn(e._pt,t,n,i,c,hb),d.e=u,d.u="deg",e._props.push(n),d},Mp=function(e,t){for(var n in t)e[n]=t[n];return e},Cb=function(e,t,n){var i=Mp({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,d,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Wt]=t,a=Ra(n,1),xs(n,Wt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Wt],o[Wt]=t,a=Ra(n,1),o[Wt]=c);for(l in fr)c=i[l],u=a[l],c!==u&&r.indexOf(l)<0&&(f=En(c),_=En(u),h=f!==_?Hr(n,l,c,_):parseFloat(c),d=parseFloat(u),e._pt=new Wn(e._pt,a,l,h,d-h,Ch),e._pt.u=_||0,e._props.push(l));Mp(a,i)};Gn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});gc[e>1?"border"+s:s]=function(a,l,c,u,h){var d,f;if(arguments.length<4)return d=o.map(function(_){return tr(a,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},o.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,f,h)}});var L_={name:"css",register:Lh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,d,f,_,g,p,m,S,y,v,R,w,b,P;Ed||Lh(),this.styles=this.styles||E_(e),P=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Zn[g]&&f_(g,t,n,i,e,r)))){if(f=typeof u,_=gc[g],f==="function"&&(u=u.call(n,i,e,r),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Ea(u)),_)_(this,e,g,u,n)&&(b=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Or.lastIndex=0,Or.test(c)||(p=En(c),m=En(u)),m?p!==m&&(c=Hr(e,g,c,m)+m):p&&(u+=p),this.add(a,"setProperty",c,u,i,r,0,0,g),o.push(g),P.push(g,0,a[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g],mn(c)&&~c.indexOf("random(")&&(c=Ea(c)),En(c+"")||c==="auto"||(c+=ni.units[g]||En(tr(e,g))||""),(c+"").charAt(1)==="="&&(c=tr(e,g))):c=tr(e,g),d=parseFloat(c),S=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),g in Ui&&(g==="autoAlpha"&&(d===1&&tr(e,"visibility")==="hidden"&&h&&(d=0),P.push("visibility",0,a.visibility),Pr(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Ui[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in fr,y){if(this.styles.save(g),v||(R=e._gsap,R.renderTransform&&!t.parseTransform||Ra(e,t.parseTransform),w=t.smoothOrigin!==!1&&R.smooth,v=this._pt=new Wn(this._pt,a,Wt,0,1,R.renderTransform,R,0,-1),v.dep=1),g==="scale")this._pt=new Wn(this._pt,R,"scaleY",R.scaleY,(S?oo(R.scaleY,S+h):h)-R.scaleY||0,Ch),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(Xn,0,a[Xn]),u=Eb(u),R.svg?Ih(e,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==R.zOrigin&&Pr(this,R,"zOrigin",R.zOrigin,m),Pr(this,a,g,xc(c),xc(u)));continue}else if(g==="svgOrigin"){Ih(e,u,1,w,0,this);continue}else if(g in R_){Rb(this,R,g,d,S?oo(d,S+u):u);continue}else if(g==="smoothOrigin"){Pr(this,R,"smooth",R.smooth,u);continue}else if(g==="force3D"){R[g]=u;continue}else if(g==="transform"){Cb(this,u,e);continue}}else g in a||(g=Ao(g)||g);if(y||(h||h===0)&&(d||d===0)&&!ub.test(u)&&g in a)p=(c+"").substr((d+"").length),h||(h=0),m=En(u)||(g in ni.units?ni.units[g]:p),p!==m&&(d=Hr(e,g,c,m)),this._pt=new Wn(this._pt,y?R:a,g,d,(S?oo(d,S+h):h)-d,!y&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?fb:Ch),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=db);else if(g in a)Tb.call(this,e,g,c,S?S+u:u);else if(g in e)this.add(e,g,c||e[g],S?S+u:u,i,r);else if(g!=="parseTransform"){md(g,u);continue}y||(g in a?P.push(g,0,a[g]):P.push(g,1,c||e[g])),o.push(g)}}b&&v_(this)},render:function(e,t){if(t.tween._time||!bd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:tr,aliases:Ui,getSetter:function(e,t,n){var i=Ui[t];return i&&i.indexOf(",")<0&&(t=i),t in fr&&t!==Xn&&(e._gsap.x||tr(e,"x"))?n&&pp===n?t==="scale"?gb:_b:(pp=n||{})&&(t==="scale"?xb:vb):e.style&&!dd(e.style[t])?pb:~t.indexOf("-")?mb:Sd(e,t)},core:{_removeProperty:xs,_getMatrix:wd}};Yn.utils.checkPrefix=Ao;Yn.core.getStyleSaver=E_;(function(s,e,t,n){var i=Gn(s+","+e+","+t,function(r){fr[r]=1});Gn(e,function(r){ni.units[r]="deg",R_[r]=1}),Ui[i[13]]=s+","+e,Gn(n,function(r){var o=r.split(":");Ui[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Gn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){ni.units[s]="px"});Yn.registerPlugin(L_);var Ot=Yn.registerPlugin(L_)||Yn;Ot.core.Tween;/*!
 * ScrollToPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var On,I_,lr,Ni,Fr,D_,U_,Al,N_=function(){return typeof window<"u"},O_=function(){return On||N_()&&(On=window.gsap)&&On.registerPlugin&&On},F_=function(e){return typeof e=="string"},Sp=function(e){return typeof e=="function"},Ca=function(e,t){var n=t==="x"?"Width":"Height",i="scroll"+n,r="client"+n;return e===lr||e===Ni||e===Fr?Math.max(Ni[i],Fr[i])-(lr["inner"+n]||Ni[r]||Fr[r]):e[i]-e["offset"+n]},Pa=function(e,t){var n="scroll"+(t==="x"?"Left":"Top");return e===lr&&(e.pageXOffset!=null?n="page"+t.toUpperCase()+"Offset":e=Ni[n]!=null?Ni:Fr),function(){return e[n]}},Pb=function(e,t,n,i){if(Sp(e)&&(e=e(t,n,i)),typeof e!="object")return F_(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var r={},o;for(o in e)r[o]=o!=="onAutoKill"&&Sp(e[o])?e[o](t,n,i):e[o];return r},B_=function(e,t){if(e=D_(e)[0],!e||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var n=e.getBoundingClientRect(),i=!t||t===lr||t===Fr,r=i?{top:Ni.clientTop-(lr.pageYOffset||Ni.scrollTop||Fr.scrollTop||0),left:Ni.clientLeft-(lr.pageXOffset||Ni.scrollLeft||Fr.scrollLeft||0)}:t.getBoundingClientRect(),o={x:n.left-r.left,y:n.top-r.top};return!i&&t&&(o.x+=Pa(t,"x")(),o.y+=Pa(t,"y")()),o},Tp=function(e,t,n,i,r){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-r:F_(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+i-r:e==="max"?Ca(t,n)-r:Math.min(Ca(t,n),B_(e,t)[n]-r)},Ep=function(){On=O_(),N_()&&On&&typeof document<"u"&&document.body&&(lr=window,Fr=document.body,Ni=document.documentElement,D_=On.utils.toArray,On.config({autoKillThreshold:7}),U_=On.config(),I_=1)},Fa={version:"3.12.5",name:"scrollTo",rawVars:1,register:function(e){On=e,Ep()},init:function(e,t,n,i,r){I_||Ep();var o=this,a=On.getProperty(e,"scrollSnapType");o.isWin=e===lr,o.target=e,o.tween=n,t=Pb(t,i,e,r),o.vars=t,o.autoKill=!!t.autoKill,o.getX=Pa(e,"x"),o.getY=Pa(e,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),Al||(Al=On.core.globals().ScrollTrigger),On.getProperty(e,"scrollBehavior")==="smooth"&&On.set(e,{scrollBehavior:"auto"}),a&&a!=="none"&&(o.snap=1,o.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),t.x!=null?(o.add(o,"x",o.x,Tp(t.x,e,"x",o.x,t.offsetX||0),i,r),o._props.push("scrollTo_x")):o.skipX=1,t.y!=null?(o.add(o,"y",o.y,Tp(t.y,e,"y",o.y,t.offsetY||0),i,r),o._props.push("scrollTo_y")):o.skipY=1},render:function(e,t){for(var n=t._pt,i=t.target,r=t.tween,o=t.autoKill,a=t.xPrev,l=t.yPrev,c=t.isWin,u=t.snap,h=t.snapInline,d,f,_,g,p;n;)n.r(e,n.d),n=n._next;d=c||!t.skipX?t.getX():a,f=c||!t.skipY?t.getY():l,_=f-l,g=d-a,p=U_.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),o&&(!t.skipX&&(g>p||g<-p)&&d<Ca(i,"x")&&(t.skipX=1),!t.skipY&&(_>p||_<-p)&&f<Ca(i,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(r.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(r,t.vars.onAutoKillParams||[]))),c?lr.scrollTo(t.skipX?d:t.x,t.skipY?f:t.y):(t.skipY||(i.scrollTop=t.y),t.skipX||(i.scrollLeft=t.x)),u&&(e===1||e===0)&&(f=i.scrollTop,d=i.scrollLeft,h?i.style.scrollSnapType=h:i.style.removeProperty("scroll-snap-type"),i.scrollTop=f+1,i.scrollLeft=d+1,i.scrollTop=f,i.scrollLeft=d),t.xPrev=t.x,t.yPrev=t.y,Al&&Al.update()},kill:function(e){var t=e==="scrollTo",n=this._props.indexOf(e);return(t||e==="scrollTo_x")&&(this.skipX=1),(t||e==="scrollTo_y")&&(this.skipY=1),n>-1&&this._props.splice(n,1),!this._props.length}};Fa.max=Ca;Fa.getOffset=B_;Fa.buildGetter=Pa;O_()&&On.registerPlugin(Fa);function bp(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function Lb(s,e,t){return e&&bp(s.prototype,e),t&&bp(s,t),s}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var _n,$l,ei,Lr,Ir,co,k_,ts,ca,z_,or,vi,H_,V_=function(){return _n||typeof window<"u"&&(_n=window.gsap)&&_n.registerPlugin&&_n},G_=1,eo=[],at=[],ki=[],ua=Date.now,Dh=function(e,t){return t},Ib=function(){var e=ca.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,at),i.push.apply(i,ki),at=n,ki=i,Dh=function(o,a){return t[o](a)}},Br=function(e,t){return~ki.indexOf(e)&&ki[ki.indexOf(e)+1][t]},ha=function(e){return!!~z_.indexOf(e)},Pn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},Cn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},wl="scrollLeft",Rl="scrollTop",Uh=function(){return or&&or.isPressed||at.cache++},vc=function(e,t){var n=function i(r){if(r||r===0){G_&&(ei.history.scrollRestoration="manual");var o=or&&or.isPressed;r=i.v=Math.round(r)||(or&&or.iOS?1:0),e(r),i.cacheID=at.cache,o&&Dh("ss",r)}else(t||at.cache!==i.cacheID||Dh("ref"))&&(i.cacheID=at.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Fn={s:wl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:vc(function(s){return arguments.length?ei.scrollTo(s,rn.sc()):ei.pageXOffset||Lr[wl]||Ir[wl]||co[wl]||0})},rn={s:Rl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Fn,sc:vc(function(s){return arguments.length?ei.scrollTo(Fn.sc(),s):ei.pageYOffset||Lr[Rl]||Ir[Rl]||co[Rl]||0})},zn=function(e,t){return(t&&t._ctx&&t._ctx.selector||_n.utils.toArray)(e)[0]||(typeof e=="string"&&_n.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Vr=function(e,t){var n=t.s,i=t.sc;ha(e)&&(e=Lr.scrollingElement||Ir);var r=at.indexOf(e),o=i===rn.sc?1:2;!~r&&(r=at.push(e)-1),at[r+o]||Pn(e,"scroll",Uh);var a=at[r+o],l=a||(at[r+o]=vc(Br(e,n),!0)||(ha(e)?i:vc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=_n.getProperty(e,"scrollBehavior")==="smooth"),l},Nh=function(e,t,n){var i=e,r=e,o=ua(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,g){var p=ua();g||p-o>l?(r=i,i=_,a=o,o=p):n?i+=_:i=r+(_-r)/(p-a)*(o-a)},h=function(){r=i=n?0:i,a=o=0},d=function(_){var g=a,p=r,m=ua();return(_||_===0)&&_!==i&&u(_),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-g)*1e3};return{update:u,reset:h,getVelocity:d}},Yo=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Ap=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},W_=function(){ca=_n.core.globals().ScrollTrigger,ca&&ca.core&&Ib()},X_=function(e){return _n=e||V_(),!$l&&_n&&typeof document<"u"&&document.body&&(ei=window,Lr=document,Ir=Lr.documentElement,co=Lr.body,z_=[ei,Lr,Ir,co],_n.utils.clamp,H_=_n.core.context||function(){},ts="onpointerenter"in co?"pointer":"mouse",k_=$t.isTouch=ei.matchMedia&&ei.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ei||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,vi=$t.eventTypes=("ontouchstart"in Ir?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ir?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return G_=0},500),W_(),$l=1),$l};Fn.op=rn;at.cache=0;var $t=function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){$l||X_(_n)||console.warn("Please gsap.registerPlugin(Observer)"),ca||W_();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,S=n.onDrag,y=n.onPress,v=n.onRelease,R=n.onRight,w=n.onLeft,b=n.onUp,P=n.onDown,T=n.onChangeX,M=n.onChangeY,L=n.onChange,D=n.onToggleX,z=n.onToggleY,J=n.onHover,K=n.onHoverEnd,W=n.onMove,j=n.ignoreCheck,X=n.isNormalizer,H=n.onGestureStart,E=n.onGestureEnd,q=n.onWheel,re=n.onEnable,ce=n.onDisable,U=n.onClick,Q=n.scrollSpeed,oe=n.capture,ie=n.allowClicks,Se=n.lockAxis,ge=n.onLockAxis;this.target=a=zn(a)||Ir,this.vars=n,f&&(f=_n.utils.toArray(f)),i=i||1e-9,r=r||0,_=_||1,Q=Q||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ei.getComputedStyle(co).lineHeight)||22);var ye,Ue,I,Be,Le,Xe,V,k=this,Oe=0,ze=0,C=n.passive||!u,x=Vr(a,Fn),Z=Vr(a,rn),le=x(),he=Z(),ee=~o.indexOf("touch")&&!~o.indexOf("pointer")&&vi[0]==="pointerdown",Re=ha(a),de=a.ownerDocument||Lr,xe=[0,0,0],Ge=[0,0,0],fe=0,Ee=function(){return fe=ua()},Ve=function(Fe,Qe){return(k.event=Fe)&&f&&~f.indexOf(Fe.target)||Qe&&ee&&Fe.pointerType!=="touch"||j&&j(Fe,Qe)},Pe=function(){k._vx.reset(),k._vy.reset(),Ue.pause(),h&&h(k)},ue=function(){var Fe=k.deltaX=Ap(xe),Qe=k.deltaY=Ap(Ge),ve=Math.abs(Fe)>=i,Ze=Math.abs(Qe)>=i;L&&(ve||Ze)&&L(k,Fe,Qe,xe,Ge),ve&&(R&&k.deltaX>0&&R(k),w&&k.deltaX<0&&w(k),T&&T(k),D&&k.deltaX<0!=Oe<0&&D(k),Oe=k.deltaX,xe[0]=xe[1]=xe[2]=0),Ze&&(P&&k.deltaY>0&&P(k),b&&k.deltaY<0&&b(k),M&&M(k),z&&k.deltaY<0!=ze<0&&z(k),ze=k.deltaY,Ge[0]=Ge[1]=Ge[2]=0),(Be||I)&&(W&&W(k),I&&(S(k),I=!1),Be=!1),Xe&&!(Xe=!1)&&ge&&ge(k),Le&&(q(k),Le=!1),ye=0},Ae=function(Fe,Qe,ve){xe[ve]+=Fe,Ge[ve]+=Qe,k._vx.update(Fe),k._vy.update(Qe),c?ye||(ye=requestAnimationFrame(ue)):ue()},je=function(Fe,Qe){Se&&!V&&(k.axis=V=Math.abs(Fe)>Math.abs(Qe)?"x":"y",Xe=!0),V!=="y"&&(xe[2]+=Fe,k._vx.update(Fe,!0)),V!=="x"&&(Ge[2]+=Qe,k._vy.update(Qe,!0)),c?ye||(ye=requestAnimationFrame(ue)):ue()},_t=function(Fe){if(!Ve(Fe,1)){Fe=Yo(Fe,u);var Qe=Fe.clientX,ve=Fe.clientY,Ze=Qe-k.x,Ie=ve-k.y,$e=k.isDragging;k.x=Qe,k.y=ve,($e||Math.abs(k.startX-Qe)>=r||Math.abs(k.startY-ve)>=r)&&(S&&(I=!0),$e||(k.isDragging=!0),je(Ze,Ie),$e||p&&p(k))}},N=k.onPress=function(We){Ve(We,1)||We&&We.button||(k.axis=V=null,Ue.pause(),k.isPressed=!0,We=Yo(We),Oe=ze=0,k.startX=k.x=We.clientX,k.startY=k.y=We.clientY,k._vx.reset(),k._vy.reset(),Pn(X?a:de,vi[1],_t,C,!0),k.deltaX=k.deltaY=0,y&&y(k))},ne=k.onRelease=function(We){if(!Ve(We,1)){Cn(X?a:de,vi[1],_t,!0);var Fe=!isNaN(k.y-k.startY),Qe=k.isDragging,ve=Qe&&(Math.abs(k.x-k.startX)>3||Math.abs(k.y-k.startY)>3),Ze=Yo(We);!ve&&Fe&&(k._vx.reset(),k._vy.reset(),u&&ie&&_n.delayedCall(.08,function(){if(ua()-fe>300&&!We.defaultPrevented){if(We.target.click)We.target.click();else if(de.createEvent){var Ie=de.createEvent("MouseEvents");Ie.initMouseEvent("click",!0,!0,ei,1,Ze.screenX,Ze.screenY,Ze.clientX,Ze.clientY,!1,!1,!1,!1,0,null),We.target.dispatchEvent(Ie)}}})),k.isDragging=k.isGesturing=k.isPressed=!1,h&&Qe&&!X&&Ue.restart(!0),m&&Qe&&m(k),v&&v(k,ve)}},se=function(Fe){return Fe.touches&&Fe.touches.length>1&&(k.isGesturing=!0)&&H(Fe,k.isDragging)},te=function(){return(k.isGesturing=!1)||E(k)},me=function(Fe){if(!Ve(Fe)){var Qe=x(),ve=Z();Ae((Qe-le)*Q,(ve-he)*Q,1),le=Qe,he=ve,h&&Ue.restart(!0)}},ke=function(Fe){if(!Ve(Fe)){Fe=Yo(Fe,u),q&&(Le=!0);var Qe=(Fe.deltaMode===1?l:Fe.deltaMode===2?ei.innerHeight:1)*_;Ae(Fe.deltaX*Qe,Fe.deltaY*Qe,0),h&&!X&&Ue.restart(!0)}},Ye=function(Fe){if(!Ve(Fe)){var Qe=Fe.clientX,ve=Fe.clientY,Ze=Qe-k.x,Ie=ve-k.y;k.x=Qe,k.y=ve,Be=!0,h&&Ue.restart(!0),(Ze||Ie)&&je(Ze,Ie)}},St=function(Fe){k.event=Fe,J(k)},bt=function(Fe){k.event=Fe,K(k)},Je=function(Fe){return Ve(Fe)||Yo(Fe,u)&&U(k)};Ue=k._dc=_n.delayedCall(d||.25,Pe).pause(),k.deltaX=k.deltaY=0,k._vx=Nh(0,50,!0),k._vy=Nh(0,50,!0),k.scrollX=x,k.scrollY=Z,k.isDragging=k.isGesturing=k.isPressed=!1,H_(this),k.enable=function(We){return k.isEnabled||(Pn(Re?de:a,"scroll",Uh),o.indexOf("scroll")>=0&&Pn(Re?de:a,"scroll",me,C,oe),o.indexOf("wheel")>=0&&Pn(a,"wheel",ke,C,oe),(o.indexOf("touch")>=0&&k_||o.indexOf("pointer")>=0)&&(Pn(a,vi[0],N,C,oe),Pn(de,vi[2],ne),Pn(de,vi[3],ne),ie&&Pn(a,"click",Ee,!0,!0),U&&Pn(a,"click",Je),H&&Pn(de,"gesturestart",se),E&&Pn(de,"gestureend",te),J&&Pn(a,ts+"enter",St),K&&Pn(a,ts+"leave",bt),W&&Pn(a,ts+"move",Ye)),k.isEnabled=!0,We&&We.type&&N(We),re&&re(k)),k},k.disable=function(){k.isEnabled&&(eo.filter(function(We){return We!==k&&ha(We.target)}).length||Cn(Re?de:a,"scroll",Uh),k.isPressed&&(k._vx.reset(),k._vy.reset(),Cn(X?a:de,vi[1],_t,!0)),Cn(Re?de:a,"scroll",me,oe),Cn(a,"wheel",ke,oe),Cn(a,vi[0],N,oe),Cn(de,vi[2],ne),Cn(de,vi[3],ne),Cn(a,"click",Ee,!0),Cn(a,"click",Je),Cn(de,"gesturestart",se),Cn(de,"gestureend",te),Cn(a,ts+"enter",St),Cn(a,ts+"leave",bt),Cn(a,ts+"move",Ye),k.isEnabled=k.isPressed=k.isDragging=!1,ce&&ce(k))},k.kill=k.revert=function(){k.disable();var We=eo.indexOf(k);We>=0&&eo.splice(We,1),or===k&&(or=0)},eo.push(k),X&&ha(a)&&(or=k),k.enable(g)},Lb(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();$t.version="3.12.5";$t.create=function(s){return new $t(s)};$t.register=X_;$t.getAll=function(){return eo.slice()};$t.getById=function(s){return eo.filter(function(e){return e.vars.id===s})[0]};V_()&&_n.registerPlugin($t);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var De,qs,pt,Vt,yi,Nt,Y_,yc,La,da,Jo,Cl,yn,Ic,Oh,Dn,wp,Rp,Ks,q_,bu,K_,In,Fh,$_,j_,Tr,Bh,Rd,uo,Cd,Mc,kh,Au,Pl=1,Mn=Date.now,wu=Mn(),fi=0,Qo=0,Cp=function(e,t,n){var i=jn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Pp=function(e,t){return t&&(!jn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Db=function s(){return Qo&&requestAnimationFrame(s)},Lp=function(){return Ic=1},Ip=function(){return Ic=0},Pi=function(e){return e},ea=function(e){return Math.round(e*1e5)/1e5||0},Z_=function(){return typeof window<"u"},J_=function(){return De||Z_()&&(De=window.gsap)&&De.registerPlugin&&De},vs=function(e){return!!~Y_.indexOf(e)},Q_=function(e){return(e==="Height"?Cd:pt["inner"+e])||yi["client"+e]||Nt["client"+e]},eg=function(e){return Br(e,"getBoundingClientRect")||(vs(e)?function(){return ec.width=pt.innerWidth,ec.height=Cd,ec}:function(){return ir(e)})},Ub=function(e,t,n){var i=n.d,r=n.d2,o=n.a;return(o=Br(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Q_(r):e["client"+r])||0}},Nb=function(e,t){return!t||~ki.indexOf(e)?eg(e):function(){return ec}},Oi=function(e,t){var n=t.s,i=t.d2,r=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Br(e,n))?o()-eg(e)()[r]:vs(e)?(yi[n]||Nt[n])-Q_(i):e[n]-e["offset"+i])},Ll=function(e,t){for(var n=0;n<Ks.length;n+=3)(!t||~t.indexOf(Ks[n+1]))&&e(Ks[n],Ks[n+1],Ks[n+2])},jn=function(e){return typeof e=="string"},Bn=function(e){return typeof e=="function"},ta=function(e){return typeof e=="number"},ns=function(e){return typeof e=="object"},qo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ru=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Xs=Math.abs,tg="left",ng="top",Pd="right",Ld="bottom",ds="width",fs="height",fa="Right",pa="Left",ma="Top",_a="Bottom",en="padding",li="margin",wo="Width",Id="Height",nn="px",ci=function(e){return pt.getComputedStyle(e)},Ob=function(e){var t=ci(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Dp=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ir=function(e,t){var n=t&&ci(e)[Oh]!=="matrix(1, 0, 0, 1, 0, 0)"&&De.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Sc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},ig=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},Fb=function(e){return function(t){return De.utils.snap(ig(e),t)}},Dd=function(e){var t=De.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return t(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=t(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:t(r<0?i-e:i+e)}},Bb=function(e){return function(t,n){return Dd(ig(e))(t,n.direction)}},Il=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},hn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},un=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Dl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Up={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ul={toggleActions:"play",anticipatePin:0},Tc={top:0,left:0,center:.5,bottom:1,right:1},jl=function(e,t){if(jn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Tc?Tc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Nl=function(e,t,n,i,r,o,a,l){var c=r.startColor,u=r.endColor,h=r.fontSize,d=r.indent,f=r.fontWeight,_=Vt.createElement("div"),g=vs(n)||Br(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=g?Nt:n,S=e.indexOf("start")!==-1,y=S?c:u,v="border-color:"+y+";font-size:"+h+";color:"+y+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(v+=(i===rn?Pd:Ld)+":"+(o+parseFloat(d))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=S,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=v,_.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],Zl(_,0,i,S),_},Zl=function(e,t,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+wo]=1,r["border"+a+wo]=0,r[n.p]=t+"px",De.set(e,r)},ot=[],zh={},Ia,Np=function(){return Mn()-fi>34&&(Ia||(Ia=requestAnimationFrame(cr)))},Ys=function(){(!In||!In.isPressed||In.startX>Nt.clientWidth)&&(at.cache++,In?Ia||(Ia=requestAnimationFrame(cr)):cr(),fi||Ms("scrollStart"),fi=Mn())},Cu=function(){j_=pt.innerWidth,$_=pt.innerHeight},na=function(){at.cache++,!yn&&!K_&&!Vt.fullscreenElement&&!Vt.webkitFullscreenElement&&(!Fh||j_!==pt.innerWidth||Math.abs(pt.innerHeight-$_)>pt.innerHeight*.25)&&yc.restart(!0)},ys={},kb=[],rg=function s(){return un(tt,"scrollEnd",s)||as(!0)},Ms=function(e){return ys[e]&&ys[e].map(function(t){return t()})||kb},$n=[],sg=function(e){for(var t=0;t<$n.length;t+=5)(!e||$n[t+4]&&$n[t+4].query===e)&&($n[t].style.cssText=$n[t+1],$n[t].getBBox&&$n[t].setAttribute("transform",$n[t+2]||""),$n[t+3].uncache=1)},Ud=function(e,t){var n;for(Dn=0;Dn<ot.length;Dn++)n=ot[Dn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Mc=!0,t&&sg(t),t||Ms("revert")},og=function(e,t){at.cache++,(t||!Un)&&at.forEach(function(n){return Bn(n)&&n.cacheID++&&(n.rec=0)}),jn(e)&&(pt.history.scrollRestoration=Rd=e)},Un,ps=0,Op,zb=function(){if(Op!==ps){var e=Op=ps;requestAnimationFrame(function(){return e===ps&&as(!0)})}},ag=function(){Nt.appendChild(uo),Cd=!In&&uo.offsetHeight||pt.innerHeight,Nt.removeChild(uo)},Fp=function(e){return La(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},as=function(e,t){if(fi&&!e&&!Mc){hn(tt,"scrollEnd",rg);return}ag(),Un=tt.isRefreshing=!0,at.forEach(function(i){return Bn(i)&&++i.cacheID&&(i.rec=i())});var n=Ms("refreshInit");q_&&tt.sort(),t||Ud(),at.forEach(function(i){Bn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ot.slice(0).forEach(function(i){return i.refresh()}),Mc=!1,ot.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),kh=1,Fp(!0),ot.forEach(function(i){var r=Oi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),Fp(!1),kh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),at.forEach(function(i){Bn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),og(Rd,1),yc.pause(),ps++,Un=2,cr(2),ot.forEach(function(i){return Bn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Un=tt.isRefreshing=!1,Ms("refresh")},Hh=0,Jl=1,ga,cr=function(e){if(e===2||!Un&&!Mc){tt.isUpdating=!0,ga&&ga.update(0);var t=ot.length,n=Mn(),i=n-wu>=50,r=t&&ot[0].scroll();if(Jl=Hh>r?-1:1,Un||(Hh=r),i&&(fi&&!Ic&&n-fi>200&&(fi=0,Ms("scrollEnd")),Jo=wu,wu=n),Jl<0){for(Dn=t;Dn-- >0;)ot[Dn]&&ot[Dn].update(0,i);Jl=1}else for(Dn=0;Dn<t;Dn++)ot[Dn]&&ot[Dn].update(0,i);tt.isUpdating=!1}Ia=0},Vh=[tg,ng,Ld,Pd,li+_a,li+fa,li+ma,li+pa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ql=Vh.concat([ds,fs,"boxSizing","max"+wo,"max"+Id,"position",li,en,en+ma,en+fa,en+_a,en+pa]),Hb=function(e,t,n){ho(n);var i=e._gsap;if(i.spacerIsNative)ho(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},Pu=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=Vh.length,o=t.style,a=e.style,l;r--;)l=Vh[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Ld]=a[Pd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ds]=Sc(e,Fn)+nn,o[fs]=Sc(e,rn)+nn,o[en]=a[li]=a[ng]=a[tg]="0",ho(i),a[ds]=a["max"+wo]=n[ds],a[fs]=a["max"+Id]=n[fs],a[en]=n[en],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Vb=/([A-Z])/g,ho=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,o;for((e.t._gsap||De.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],r=e[i],o?t[r]=o:t[r]&&t.removeProperty(r.replace(Vb,"-$1").toLowerCase())}},Ol=function(e){for(var t=Ql.length,n=e.style,i=[],r=0;r<t;r++)i.push(Ql[r],n[Ql[r]]);return i.t=e,i},Gb=function(e,t,n){for(var i=[],r=e.length,o=n?8:0,a;o<r;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},ec={left:0,top:0},Bp=function(e,t,n,i,r,o,a,l,c,u,h,d,f,_){Bn(e)&&(e=e(l)),jn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?jl("0"+e.substr(3),n):0));var g=f?f.time():0,p,m,S;if(f&&f.seek(0),isNaN(e)||(e=+e),ta(e))f&&(e=De.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),a&&Zl(a,n,i,!0);else{Bn(t)&&(t=t(l));var y=(e||"0").split(" "),v,R,w,b;S=zn(t,l)||Nt,v=ir(S)||{},(!v||!v.left&&!v.top)&&ci(S).display==="none"&&(b=S.style.display,S.style.display="block",v=ir(S),b?S.style.display=b:S.style.removeProperty("display")),R=jl(y[0],v[i.d]),w=jl(y[1]||"0",n),e=v[i.p]-c[i.p]-u+R+r-w,a&&Zl(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var P=e+n,T=o._isStart;p="scroll"+i.d2,Zl(o,P,i,T&&P>20||!T&&(h?Math.max(Nt[p],yi[p]):o.parentNode[p])<=P+1),h&&(c=ir(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+nn))}return f&&S&&(p=ir(S),f.seek(d),m=ir(S),f._caScrollDist=p[i.p]-m[i.p],e=e/f._caScrollDist*d),f&&f.seek(g),f?e:Math.round(e)},Wb=/(webkit|moz|length|cssText|inset)/i,kp=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,o,a;if(t===Nt){e._stOrig=r.cssText,a=ci(e);for(o in a)!+o&&!Wb.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=e._stOrig;De.core.getCache(e).uncache=1,t.appendChild(e)}},lg=function(e,t,n){var i=t,r=i;return function(o){var a=Math.round(e());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=o,o}},Fl=function(e,t,n){var i={};i[t.p]="+="+n,De.set(e,i)},zp=function(e,t){var n=Vr(e,t),i="_scroll"+t.p2,r=function o(a,l,c,u,h){var d=o.tween,f=l.onComplete,_={};c=c||n();var g=lg(n,c,function(){d.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){at.cache++,o.tween&&cr()},l.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=De.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},hn(e,"wheel",n.wheelHandler),tt.isTouch&&hn(e,"touchmove",n.wheelHandler),r},tt=function(){function s(t,n){qs||s.register(De)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Bh(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Qo){this.update=this.refresh=this.kill=Pi;return}n=Dp(jn(n)||ta(n)||n.nodeType?{trigger:n}:n,Ul);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,h=r.scrub,d=r.trigger,f=r.pin,_=r.pinSpacing,g=r.invalidateOnRefresh,p=r.anticipatePin,m=r.onScrubComplete,S=r.onSnapComplete,y=r.once,v=r.snap,R=r.pinReparent,w=r.pinSpacer,b=r.containerAnimation,P=r.fastScrollEnd,T=r.preventOverlaps,M=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Fn:rn,L=!h&&h!==0,D=zn(n.scroller||pt),z=De.core.getCache(D),J=vs(D),K=("pinType"in n?n.pinType:Br(D,"pinType")||J&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],j=L&&n.toggleActions.split(" "),X="markers"in n?n.markers:Ul.markers,H=J?0:parseFloat(ci(D)["border"+M.p2+wo])||0,E=this,q=n.onRefreshInit&&function(){return n.onRefreshInit(E)},re=Ub(D,J,M),ce=Nb(D,J),U=0,Q=0,oe=0,ie=Vr(D,M),Se,ge,ye,Ue,I,Be,Le,Xe,V,k,Oe,ze,C,x,Z,le,he,ee,Re,de,xe,Ge,fe,Ee,Ve,Pe,ue,Ae,je,_t,N,ne,se,te,me,ke,Ye,St,bt;if(E._startClamp=E._endClamp=!1,E._dir=M,p*=45,E.scroller=D,E.scroll=b?b.time.bind(b):ie,Ue=ie(),E.vars=n,i=i||n.animation,"refreshPriority"in n&&(q_=1,n.refreshPriority===-9999&&(ga=E)),z.tweenScroll=z.tweenScroll||{top:zp(D,rn),left:zp(D,Fn)},E.tweenTo=Se=z.tweenScroll[M.p],E.scrubDuration=function(ve){se=ta(ve)&&ve,se?ne?ne.duration(ve):ne=De.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:se,paused:!0,onComplete:function(){return m&&m(E)}}):(ne&&ne.progress(1).kill(),ne=0)},i&&(i.vars.lazy=!1,i._initted&&!E.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),E.animation=i.pause(),i.scrollTrigger=E,E.scrubDuration(h),_t=0,l||(l=i.vars.id)),v&&((!ns(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in Nt.style&&De.set(J?[Nt,yi]:D,{scrollBehavior:"auto"}),at.forEach(function(ve){return Bn(ve)&&ve.target===(J?Vt.scrollingElement||yi:D)&&(ve.smooth=!1)}),ye=Bn(v.snapTo)?v.snapTo:v.snapTo==="labels"?Fb(i):v.snapTo==="labelsDirectional"?Bb(i):v.directional!==!1?function(ve,Ze){return Dd(v.snapTo)(ve,Mn()-Q<500?0:Ze.direction)}:De.utils.snap(v.snapTo),te=v.duration||{min:.1,max:2},te=ns(te)?da(te.min,te.max):da(te,te),me=De.delayedCall(v.delay||se/2||.1,function(){var ve=ie(),Ze=Mn()-Q<500,Ie=Se.tween;if((Ze||Math.abs(E.getVelocity())<10)&&!Ie&&!Ic&&U!==ve){var $e=(ve-Be)/x,Dt=i&&!L?i.totalProgress():$e,qe=Ze?0:(Dt-N)/(Mn()-Jo)*1e3||0,At=De.utils.clamp(-$e,1-$e,Xs(qe/2)*qe/.185),Yt=$e+(v.inertia===!1?0:At),rt,wt,vt=v,Ct=vt.onStart,A=vt.onInterrupt,O=vt.onComplete;if(rt=ye(Yt,E),ta(rt)||(rt=Yt),wt=Math.round(Be+rt*x),ve<=Le&&ve>=Be&&wt!==ve){if(Ie&&!Ie._initted&&Ie.data<=Xs(wt-ve))return;v.inertia===!1&&(At=rt-$e),Se(wt,{duration:te(Xs(Math.max(Xs(Yt-Dt),Xs(rt-Dt))*.185/qe/.05||0)),ease:v.ease||"power3",data:Xs(wt-ve),onInterrupt:function(){return me.restart(!0)&&A&&A(E)},onComplete:function(){E.update(),U=ie(),i&&(ne?ne.resetTo("totalProgress",rt,i._tTime/i._tDur):i.progress(rt)),_t=N=i&&!L?i.totalProgress():E.progress,S&&S(E),O&&O(E)}},ve,At*x,wt-ve-At*x),Ct&&Ct(E,Se.tween)}}else E.isActive&&U!==ve&&me.restart(!0)}).pause()),l&&(zh[l]=E),d=E.trigger=zn(d||f!==!0&&f),bt=d&&d._gsap&&d._gsap.stRevert,bt&&(bt=bt(E)),f=f===!0?d:zn(f),jn(a)&&(a={targets:d,className:a}),f&&(_===!1||_===li||(_=!_&&f.parentNode&&f.parentNode.style&&ci(f.parentNode).display==="flex"?!1:en),E.pin=f,ge=De.core.getCache(f),ge.spacer?Z=ge.pinState:(w&&(w=zn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),ge.spacerIsNative=!!w,w&&(ge.spacerState=Ol(w))),ge.spacer=ee=w||Vt.createElement("div"),ee.classList.add("pin-spacer"),l&&ee.classList.add("pin-spacer-"+l),ge.pinState=Z=Ol(f)),n.force3D!==!1&&De.set(f,{force3D:!0}),E.spacer=ee=ge.spacer,je=ci(f),Ee=je[_+M.os2],de=De.getProperty(f),xe=De.quickSetter(f,M.a,nn),Pu(f,ee,je),he=Ol(f)),X){ze=ns(X)?Dp(X,Up):Up,k=Nl("scroller-start",l,D,M,ze,0),Oe=Nl("scroller-end",l,D,M,ze,0,k),Re=k["offset"+M.op.d2];var Je=zn(Br(D,"content")||D);Xe=this.markerStart=Nl("start",l,Je,M,ze,Re,0,b),V=this.markerEnd=Nl("end",l,Je,M,ze,Re,0,b),b&&(St=De.quickSetter([Xe,V],M.a,nn)),!K&&!(ki.length&&Br(D,"fixedMarkers")===!0)&&(Ob(J?Nt:D),De.set([k,Oe],{force3D:!0}),Pe=De.quickSetter(k,M.a,nn),Ae=De.quickSetter(Oe,M.a,nn))}if(b){var We=b.vars.onUpdate,Fe=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){E.update(0,0,1),We&&We.apply(b,Fe||[])})}if(E.previous=function(){return ot[ot.indexOf(E)-1]},E.next=function(){return ot[ot.indexOf(E)+1]},E.revert=function(ve,Ze){if(!Ze)return E.kill(!0);var Ie=ve!==!1||!E.enabled,$e=yn;Ie!==E.isReverted&&(Ie&&(ke=Math.max(ie(),E.scroll.rec||0),oe=E.progress,Ye=i&&i.progress()),Xe&&[Xe,V,k,Oe].forEach(function(Dt){return Dt.style.display=Ie?"none":"block"}),Ie&&(yn=E,E.update(Ie)),f&&(!R||!E.isActive)&&(Ie?Hb(f,ee,Z):Pu(f,ee,ci(f),Ve)),Ie||E.update(Ie),yn=$e,E.isReverted=Ie)},E.refresh=function(ve,Ze,Ie,$e){if(!((yn||!E.enabled)&&!Ze)){if(f&&ve&&fi){hn(s,"scrollEnd",rg);return}!Un&&q&&q(E),yn=E,Se.tween&&!Ie&&(Se.tween.kill(),Se.tween=0),ne&&ne.pause(),g&&i&&i.revert({kill:!1}).invalidate(),E.isReverted||E.revert(!0,!0),E._subPinOffset=!1;var Dt=re(),qe=ce(),At=b?b.duration():Oi(D,M),Yt=x<=.01,rt=0,wt=$e||0,vt=ns(Ie)?Ie.end:n.end,Ct=n.endTrigger||d,A=ns(Ie)?Ie.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),O=E.pinnedContainer=n.pinnedContainer&&zn(n.pinnedContainer,E),G=d&&Math.max(0,ot.indexOf(E))||0,Y=G,F,ae,Me,Ce,_e,we,He,be,ut,yt,ht,dt,st;for(X&&ns(Ie)&&(dt=De.getProperty(k,M.p),st=De.getProperty(Oe,M.p));Y--;)we=ot[Y],we.end||we.refresh(0,1)||(yn=E),He=we.pin,He&&(He===d||He===f||He===O)&&!we.isReverted&&(yt||(yt=[]),yt.unshift(we),we.revert(!0,!0)),we!==ot[Y]&&(G--,Y--);for(Bn(A)&&(A=A(E)),A=Cp(A,"start",E),Be=Bp(A,d,Dt,M,ie(),Xe,k,E,qe,H,K,At,b,E._startClamp&&"_startClamp")||(f?-.001:0),Bn(vt)&&(vt=vt(E)),jn(vt)&&!vt.indexOf("+=")&&(~vt.indexOf(" ")?vt=(jn(A)?A.split(" ")[0]:"")+vt:(rt=jl(vt.substr(2),Dt),vt=jn(A)?A:(b?De.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,Be):Be)+rt,Ct=d)),vt=Cp(vt,"end",E),Le=Math.max(Be,Bp(vt||(Ct?"100% 0":At),Ct,Dt,M,ie()+rt,V,Oe,E,qe,H,K,At,b,E._endClamp&&"_endClamp"))||-.001,rt=0,Y=G;Y--;)we=ot[Y],He=we.pin,He&&we.start-we._pinPush<=Be&&!b&&we.end>0&&(F=we.end-(E._startClamp?Math.max(0,we.start):we.start),(He===d&&we.start-we._pinPush<Be||He===O)&&isNaN(A)&&(rt+=F*(1-we.progress)),He===f&&(wt+=F));if(Be+=rt,Le+=rt,E._startClamp&&(E._startClamp+=rt),E._endClamp&&!Un&&(E._endClamp=Le||-.001,Le=Math.min(Le,Oi(D,M))),x=Le-Be||(Be-=.01)&&.001,Yt&&(oe=De.utils.clamp(0,1,De.utils.normalize(Be,Le,ke))),E._pinPush=wt,Xe&&rt&&(F={},F[M.a]="+="+rt,O&&(F[M.p]="-="+ie()),De.set([Xe,V],F)),f&&!(kh&&E.end>=Oi(D,M)))F=ci(f),Ce=M===rn,Me=ie(),Ge=parseFloat(de(M.a))+wt,!At&&Le>1&&(ht=(J?Vt.scrollingElement||yi:D).style,ht={style:ht,value:ht["overflow"+M.a.toUpperCase()]},J&&ci(Nt)["overflow"+M.a.toUpperCase()]!=="scroll"&&(ht.style["overflow"+M.a.toUpperCase()]="scroll")),Pu(f,ee,F),he=Ol(f),ae=ir(f,!0),be=K&&Vr(D,Ce?Fn:rn)(),_?(Ve=[_+M.os2,x+wt+nn],Ve.t=ee,Y=_===en?Sc(f,M)+x+wt:0,Y&&(Ve.push(M.d,Y+nn),ee.style.flexBasis!=="auto"&&(ee.style.flexBasis=Y+nn)),ho(Ve),O&&ot.forEach(function(Ne){Ne.pin===O&&Ne.vars.pinSpacing!==!1&&(Ne._subPinOffset=!0)}),K&&ie(ke)):(Y=Sc(f,M),Y&&ee.style.flexBasis!=="auto"&&(ee.style.flexBasis=Y+nn)),K&&(_e={top:ae.top+(Ce?Me-Be:be)+nn,left:ae.left+(Ce?be:Me-Be)+nn,boxSizing:"border-box",position:"fixed"},_e[ds]=_e["max"+wo]=Math.ceil(ae.width)+nn,_e[fs]=_e["max"+Id]=Math.ceil(ae.height)+nn,_e[li]=_e[li+ma]=_e[li+fa]=_e[li+_a]=_e[li+pa]="0",_e[en]=F[en],_e[en+ma]=F[en+ma],_e[en+fa]=F[en+fa],_e[en+_a]=F[en+_a],_e[en+pa]=F[en+pa],le=Gb(Z,_e,R),Un&&ie(0)),i?(ut=i._initted,bu(1),i.render(i.duration(),!0,!0),fe=de(M.a)-Ge+x+wt,ue=Math.abs(x-fe)>1,K&&ue&&le.splice(le.length-2,2),i.render(0,!0,!0),ut||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),bu(0)):fe=x,ht&&(ht.value?ht.style["overflow"+M.a.toUpperCase()]=ht.value:ht.style.removeProperty("overflow-"+M.a));else if(d&&ie()&&!b)for(ae=d.parentNode;ae&&ae!==Nt;)ae._pinOffset&&(Be-=ae._pinOffset,Le-=ae._pinOffset),ae=ae.parentNode;yt&&yt.forEach(function(Ne){return Ne.revert(!1,!0)}),E.start=Be,E.end=Le,Ue=I=Un?ke:ie(),!b&&!Un&&(Ue<ke&&ie(ke),E.scroll.rec=0),E.revert(!1,!0),Q=Mn(),me&&(U=-1,me.restart(!0)),yn=0,i&&L&&(i._initted||Ye)&&i.progress()!==Ye&&i.progress(Ye||0,!0).render(i.time(),!0,!0),(Yt||oe!==E.progress||b||g)&&(i&&!L&&i.totalProgress(b&&Be<-.001&&!oe?De.utils.normalize(Be,Le,0):oe,!0),E.progress=Yt||(Ue-Be)/x===oe?0:oe),f&&_&&(ee._pinOffset=Math.round(E.progress*fe)),ne&&ne.invalidate(),isNaN(dt)||(dt-=De.getProperty(k,M.p),st-=De.getProperty(Oe,M.p),Fl(k,M,dt),Fl(Xe,M,dt-($e||0)),Fl(Oe,M,st),Fl(V,M,st-($e||0))),Yt&&!Un&&E.update(),u&&!Un&&!C&&(C=!0,u(E),C=!1)}},E.getVelocity=function(){return(ie()-I)/(Mn()-Jo)*1e3||0},E.endAnimation=function(){qo(E.callbackAnimation),i&&(ne?ne.progress(1):i.paused()?L||qo(i,E.direction<0,1):qo(i,i.reversed()))},E.labelToScroll=function(ve){return i&&i.labels&&(Be||E.refresh()||Be)+i.labels[ve]/i.duration()*x||0},E.getTrailing=function(ve){var Ze=ot.indexOf(E),Ie=E.direction>0?ot.slice(0,Ze).reverse():ot.slice(Ze+1);return(jn(ve)?Ie.filter(function($e){return $e.vars.preventOverlaps===ve}):Ie).filter(function($e){return E.direction>0?$e.end<=Be:$e.start>=Le})},E.update=function(ve,Ze,Ie){if(!(b&&!Ie&&!ve)){var $e=Un===!0?ke:E.scroll(),Dt=ve?0:($e-Be)/x,qe=Dt<0?0:Dt>1?1:Dt||0,At=E.progress,Yt,rt,wt,vt,Ct,A,O,G;if(Ze&&(I=Ue,Ue=b?ie():$e,v&&(N=_t,_t=i&&!L?i.totalProgress():qe)),p&&f&&!yn&&!Pl&&fi&&(!qe&&Be<$e+($e-I)/(Mn()-Jo)*p?qe=1e-4:qe===1&&Le>$e+($e-I)/(Mn()-Jo)*p&&(qe=.9999)),qe!==At&&E.enabled){if(Yt=E.isActive=!!qe&&qe<1,rt=!!At&&At<1,A=Yt!==rt,Ct=A||!!qe!=!!At,E.direction=qe>At?1:-1,E.progress=qe,Ct&&!yn&&(wt=qe&&!At?0:qe===1?1:At===1?2:3,L&&(vt=!A&&j[wt+1]!=="none"&&j[wt+1]||j[wt],G=i&&(vt==="complete"||vt==="reset"||vt in i))),T&&(A||G)&&(G||h||!i)&&(Bn(T)?T(E):E.getTrailing(T).forEach(function(Me){return Me.endAnimation()})),L||(ne&&!yn&&!Pl?(ne._dp._time-ne._start!==ne._time&&ne.render(ne._dp._time-ne._start),ne.resetTo?ne.resetTo("totalProgress",qe,i._tTime/i._tDur):(ne.vars.totalProgress=qe,ne.invalidate().restart())):i&&i.totalProgress(qe,!!(yn&&(Q||ve)))),f){if(ve&&_&&(ee.style[_+M.os2]=Ee),!K)xe(ea(Ge+fe*qe));else if(Ct){if(O=!ve&&qe>At&&Le+1>$e&&$e+1>=Oi(D,M),R)if(!ve&&(Yt||O)){var Y=ir(f,!0),F=$e-Be;kp(f,Nt,Y.top+(M===rn?F:0)+nn,Y.left+(M===rn?0:F)+nn)}else kp(f,ee);ho(Yt||O?le:he),ue&&qe<1&&Yt||xe(Ge+(qe===1&&!O?fe:0))}}v&&!Se.tween&&!yn&&!Pl&&me.restart(!0),a&&(A||y&&qe&&(qe<1||!Au))&&La(a.targets).forEach(function(Me){return Me.classList[Yt||y?"add":"remove"](a.className)}),o&&!L&&!ve&&o(E),Ct&&!yn?(L&&(G&&(vt==="complete"?i.pause().totalProgress(1):vt==="reset"?i.restart(!0).pause():vt==="restart"?i.restart(!0):i[vt]()),o&&o(E)),(A||!Au)&&(c&&A&&Ru(E,c),W[wt]&&Ru(E,W[wt]),y&&(qe===1?E.kill(!1,1):W[wt]=0),A||(wt=qe===1?1:3,W[wt]&&Ru(E,W[wt]))),P&&!Yt&&Math.abs(E.getVelocity())>(ta(P)?P:2500)&&(qo(E.callbackAnimation),ne?ne.progress(1):qo(i,vt==="reverse"?1:!qe,1))):L&&o&&!yn&&o(E)}if(Ae){var ae=b?$e/b.duration()*(b._caScrollDist||0):$e;Pe(ae+(k._isFlipped?1:0)),Ae(ae)}St&&St(-$e/b.duration()*(b._caScrollDist||0))}},E.enable=function(ve,Ze){E.enabled||(E.enabled=!0,hn(D,"resize",na),J||hn(D,"scroll",Ys),q&&hn(s,"refreshInit",q),ve!==!1&&(E.progress=oe=0,Ue=I=U=ie()),Ze!==!1&&E.refresh())},E.getTween=function(ve){return ve&&Se?Se.tween:ne},E.setPositions=function(ve,Ze,Ie,$e){if(b){var Dt=b.scrollTrigger,qe=b.duration(),At=Dt.end-Dt.start;ve=Dt.start+At*ve/qe,Ze=Dt.start+At*Ze/qe}E.refresh(!1,!1,{start:Pp(ve,Ie&&!!E._startClamp),end:Pp(Ze,Ie&&!!E._endClamp)},$e),E.update()},E.adjustPinSpacing=function(ve){if(Ve&&ve){var Ze=Ve.indexOf(M.d)+1;Ve[Ze]=parseFloat(Ve[Ze])+ve+nn,Ve[1]=parseFloat(Ve[1])+ve+nn,ho(Ve)}},E.disable=function(ve,Ze){if(E.enabled&&(ve!==!1&&E.revert(!0,!0),E.enabled=E.isActive=!1,Ze||ne&&ne.pause(),ke=0,ge&&(ge.uncache=1),q&&un(s,"refreshInit",q),me&&(me.pause(),Se.tween&&Se.tween.kill()&&(Se.tween=0)),!J)){for(var Ie=ot.length;Ie--;)if(ot[Ie].scroller===D&&ot[Ie]!==E)return;un(D,"resize",na),J||un(D,"scroll",Ys)}},E.kill=function(ve,Ze){E.disable(ve,Ze),ne&&!Ze&&ne.kill(),l&&delete zh[l];var Ie=ot.indexOf(E);Ie>=0&&ot.splice(Ie,1),Ie===Dn&&Jl>0&&Dn--,Ie=0,ot.forEach(function($e){return $e.scroller===E.scroller&&(Ie=1)}),Ie||Un||(E.scroll.rec=0),i&&(i.scrollTrigger=null,ve&&i.revert({kill:!1}),Ze||i.kill()),Xe&&[Xe,V,k,Oe].forEach(function($e){return $e.parentNode&&$e.parentNode.removeChild($e)}),ga===E&&(ga=0),f&&(ge&&(ge.uncache=1),Ie=0,ot.forEach(function($e){return $e.pin===f&&Ie++}),Ie||(ge.spacer=0)),n.onKill&&n.onKill(E)},ot.push(E),E.enable(!1,!1),bt&&bt(E),i&&i.add&&!x){var Qe=E.update;E.update=function(){E.update=Qe,Be||Le||E.refresh()},De.delayedCall(.01,E.update),x=.01,Be=Le=0}else E.refresh();f&&zb()},s.register=function(n){return qs||(De=n||J_(),Z_()&&window.document&&s.enable(),qs=Qo),qs},s.defaults=function(n){if(n)for(var i in n)Ul[i]=n[i];return Ul},s.disable=function(n,i){Qo=0,ot.forEach(function(o){return o[i?"kill":"disable"](n)}),un(pt,"wheel",Ys),un(Vt,"scroll",Ys),clearInterval(Cl),un(Vt,"touchcancel",Pi),un(Nt,"touchstart",Pi),Il(un,Vt,"pointerdown,touchstart,mousedown",Lp),Il(un,Vt,"pointerup,touchend,mouseup",Ip),yc.kill(),Ll(un);for(var r=0;r<at.length;r+=3)Dl(un,at[r],at[r+1]),Dl(un,at[r],at[r+2])},s.enable=function(){if(pt=window,Vt=document,yi=Vt.documentElement,Nt=Vt.body,De&&(La=De.utils.toArray,da=De.utils.clamp,Bh=De.core.context||Pi,bu=De.core.suppressOverwrites||Pi,Rd=pt.history.scrollRestoration||"auto",Hh=pt.pageYOffset,De.core.globals("ScrollTrigger",s),Nt)){Qo=1,uo=document.createElement("div"),uo.style.height="100vh",uo.style.position="absolute",ag(),Db(),$t.register(De),s.isTouch=$t.isTouch,Tr=$t.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Fh=$t.isTouch===1,hn(pt,"wheel",Ys),Y_=[pt,Vt,yi,Nt],De.matchMedia?(s.matchMedia=function(l){var c=De.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},De.addEventListener("matchMediaInit",function(){return Ud()}),De.addEventListener("matchMediaRevert",function(){return sg()}),De.addEventListener("matchMedia",function(){as(0,1),Ms("matchMedia")}),De.matchMedia("(orientation: portrait)",function(){return Cu(),Cu})):console.warn("Requires GSAP 3.11.0 or later"),Cu(),hn(Vt,"scroll",Ys);var n=Nt.style,i=n.borderTopStyle,r=De.core.Animation.prototype,o,a;for(r.revert||Object.defineProperty(r,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=ir(Nt),rn.m=Math.round(o.top+rn.sc())||0,Fn.m=Math.round(o.left+Fn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Cl=setInterval(Np,250),De.delayedCall(.5,function(){return Pl=0}),hn(Vt,"touchcancel",Pi),hn(Nt,"touchstart",Pi),Il(hn,Vt,"pointerdown,touchstart,mousedown",Lp),Il(hn,Vt,"pointerup,touchend,mouseup",Ip),Oh=De.utils.checkPrefix("transform"),Ql.push(Oh),qs=Mn(),yc=De.delayedCall(.2,as).pause(),Ks=[Vt,"visibilitychange",function(){var l=pt.innerWidth,c=pt.innerHeight;Vt.hidden?(wp=l,Rp=c):(wp!==l||Rp!==c)&&na()},Vt,"DOMContentLoaded",as,pt,"load",as,pt,"resize",na],Ll(hn),ot.forEach(function(l){return l.enable(0,1)}),a=0;a<at.length;a+=3)Dl(un,at[a],at[a+1]),Dl(un,at[a],at[a+2])}},s.config=function(n){"limitCallbacks"in n&&(Au=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Cl)||(Cl=i)&&setInterval(Np,i),"ignoreMobileResize"in n&&(Fh=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ll(un)||Ll(hn,n.autoRefreshEvents||"none"),K_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=zn(n),o=at.indexOf(r),a=vs(r);~o&&at.splice(o,a?6:2),i&&(a?ki.unshift(pt,i,Nt,i,yi,i):ki.unshift(r,i))},s.clearMatchMedia=function(n){ot.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(jn(n)?zn(n):n).getBoundingClientRect(),a=o[r?ds:fs]*i||0;return r?o.right-a>0&&o.left+a<pt.innerWidth:o.bottom-a>0&&o.top+a<pt.innerHeight},s.positionInViewport=function(n,i,r){jn(n)&&(n=zn(n));var o=n.getBoundingClientRect(),a=o[r?ds:fs],l=i==null?a/2:i in Tc?Tc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/pt.innerWidth:(o.top+l)/pt.innerHeight},s.killAll=function(n){if(ot.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=ys.killAll||[];ys={},i.forEach(function(r){return r()})}},s}();tt.version="3.12.5";tt.saveStyles=function(s){return s?La(s).forEach(function(e){if(e&&e.style){var t=$n.indexOf(e);t>=0&&$n.splice(t,5),$n.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),De.core.getCache(e),Bh())}}):$n};tt.revert=function(s,e){return Ud(!s,e)};tt.create=function(s,e){return new tt(s,e)};tt.refresh=function(s){return s?na():(qs||tt.register())&&as(!0)};tt.update=function(s){return++at.cache&&cr(s===!0?2:0)};tt.clearScrollMemory=og;tt.maxScroll=function(s,e){return Oi(s,e?Fn:rn)};tt.getScrollFunc=function(s,e){return Vr(zn(s),e?Fn:rn)};tt.getById=function(s){return zh[s]};tt.getAll=function(){return ot.filter(function(s){return s.vars.id!=="ScrollSmoother"})};tt.isScrolling=function(){return!!fi};tt.snapDirectional=Dd;tt.addEventListener=function(s,e){var t=ys[s]||(ys[s]=[]);~t.indexOf(e)||t.push(e)};tt.removeEventListener=function(s,e){var t=ys[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};tt.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,o=function(c,u){var h=[],d=[],f=De.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(_){h.length||f.restart(!0),h.push(_.trigger),d.push(_),r<=h.length&&f.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Bn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Bn(r)&&(r=r(),hn(tt,"refresh",function(){return r=e.batchMax()})),La(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(tt.create(c))}),t};var Hp=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Lu=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+($t.isTouch?" pinch-zoom":""):"none",e===yi&&s(Nt,t)},Bl={auto:1,scroll:1},Xb=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,o=r._gsap||De.core.getCache(r),a=Mn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==Nt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Bl[(l=ci(r)).overflowY]||Bl[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!vs(r)&&(Bl[(l=ci(r)).overflowY]||Bl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},cg=function(e,t,n,i){return $t.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Xb,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&hn(Vt,$t.eventTypes[0],Gp,!1,!0)},onDisable:function(){return un(Vt,$t.eventTypes[0],Gp,!0)}})},Yb=/(input|label|select|textarea)/i,Vp,Gp=function(e){var t=Yb.test(e.target.tagName);(t||Vp)&&(e._gsapAllow=!0,Vp=t)},qb=function(e){ns(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,o=t.onRelease,a,l,c=zn(e.target)||yi,u=De.core.globals().ScrollSmoother,h=u&&u.get(),d=Tr&&(e.content&&zn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),f=Vr(c,rn),_=Vr(c,Fn),g=1,p=($t.isTouch&&pt.visualViewport?pt.visualViewport.scale*pt.visualViewport.width:pt.outerWidth)/pt.innerWidth,m=0,S=Bn(i)?function(){return i(a)}:function(){return i||2.8},y,v,R=cg(c,e.type,!0,r),w=function(){return v=!1},b=Pi,P=Pi,T=function(){l=Oi(c,rn),P=da(Tr?1:0,l),n&&(b=da(0,Oi(c,Fn))),y=ps},M=function(){d._gsap.y=ea(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},L=function(){if(v){requestAnimationFrame(w);var X=ea(a.deltaY/2),H=P(f.v-X);if(d&&H!==f.v+f.offset){f.offset=H-f.v;var E=ea((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+E+", 0, 1)",d._gsap.y=E+"px",f.cacheID=at.cache,cr()}return!0}f.offset&&M(),v=!0},D,z,J,K,W=function(){T(),D.isActive()&&D.vars.scrollY>l&&(f()>l?D.progress(1)&&f(l):D.resetTo("scrollY",l))};return d&&De.set(d,{y:"+=0"}),e.ignoreCheck=function(j){return Tr&&j.type==="touchmove"&&L()||g>1.05&&j.type!=="touchstart"||a.isGesturing||j.touches&&j.touches.length>1},e.onPress=function(){v=!1;var j=g;g=ea((pt.visualViewport&&pt.visualViewport.scale||1)/p),D.pause(),j!==g&&Lu(c,g>1.01?!0:n?!1:"x"),z=_(),J=f(),T(),y=ps},e.onRelease=e.onGestureStart=function(j,X){if(f.offset&&M(),!X)K.restart(!0);else{at.cache++;var H=S(),E,q;n&&(E=_(),q=E+H*.05*-j.velocityX/.227,H*=Hp(_,E,q,Oi(c,Fn)),D.vars.scrollX=b(q)),E=f(),q=E+H*.05*-j.velocityY/.227,H*=Hp(f,E,q,Oi(c,rn)),D.vars.scrollY=P(q),D.invalidate().duration(H).play(.01),(Tr&&D.vars.scrollY>=l||E>=l-1)&&De.to({},{onUpdate:W,duration:H})}o&&o(j)},e.onWheel=function(){D._ts&&D.pause(),Mn()-m>1e3&&(y=0,m=Mn())},e.onChange=function(j,X,H,E,q){if(ps!==y&&T(),X&&n&&_(b(E[2]===X?z+(j.startX-j.x):_()+X-E[1])),H){f.offset&&M();var re=q[2]===H,ce=re?J+j.startY-j.y:f()+H-q[1],U=P(ce);re&&ce!==U&&(J+=U-ce),f(U)}(H||X)&&cr()},e.onEnable=function(){Lu(c,n?!1:"x"),tt.addEventListener("refresh",W),hn(pt,"resize",W),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=_.smooth=!1),R.enable()},e.onDisable=function(){Lu(c,!0),un(pt,"resize",W),tt.removeEventListener("refresh",W),R.kill()},e.lockAxis=e.lockAxis!==!1,a=new $t(e),a.iOS=Tr,Tr&&!f()&&f(1),Tr&&De.ticker.add(Pi),K=a._dc,D=De.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:lg(f,f(),function(){return D.pause()})},onUpdate:cr,onComplete:K.vars.onComplete}),a};tt.sort=function(s){return ot.sort(s||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};tt.observe=function(s){return new $t(s)};tt.normalizeScroll=function(s){if(typeof s>"u")return In;if(s===!0&&In)return In.enable();if(s===!1){In&&In.kill(),In=s;return}var e=s instanceof $t?s:qb(s);return In&&In.target===e.target&&In.kill(),vs(e.target)&&(In=e),e};tt.core={_getVelocityProp:Nh,_inputObserver:cg,_scrollers:at,_proxies:ki,bridge:{ss:function(){fi||Ms("scrollStart"),fi=Mn()},ref:function(){return yn}}};J_()&&De.registerPlugin(tt);class Kb extends Mt{constructor(e,t={}){super(e),this.isWater=!0;const n=this,i=t.textureWidth!==void 0?t.textureWidth:512,r=t.textureHeight!==void 0?t.textureHeight:512,o=t.clipBias!==void 0?t.clipBias:0,a=t.alpha!==void 0?t.alpha:1,l=t.time!==void 0?t.time:0,c=t.waterNormals!==void 0?t.waterNormals:null,u=t.sunDirection!==void 0?t.sunDirection:new B(.70707,.70707,0),h=new Ke(t.sunColor!==void 0?t.sunColor:16777215),d=new Ke(t.waterColor!==void 0?t.waterColor:8355711),f=t.eye!==void 0?t.eye:new B(0,0,0),_=t.distortionScale!==void 0?t.distortionScale:20,g=t.side!==void 0?t.side:zi,p=t.fog!==void 0?t.fog:!1,m=new Er,S=new B,y=new B,v=new B,R=new et,w=new B(0,0,-1),b=new Et,P=new B,T=new B,M=new Et,L=new et,D=new Tn,z=new kr(i,r),J={name:"MirrorShader",uniforms:uh.merge([Te.fog,Te.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new et},sunColor:{value:new Ke(8355711)},sunDirection:{value:new B(.70707,.70707,0)},eye:{value:new B},waterColor:{value:new Ke(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},K=new hr({name:J.name,uniforms:uh.clone(J.uniforms),vertexShader:J.vertexShader,fragmentShader:J.fragmentShader,lights:!0,side:g,fog:p});K.uniforms.mirrorSampler.value=z.texture,K.uniforms.textureMatrix.value=L,K.uniforms.alpha.value=a,K.uniforms.time.value=l,K.uniforms.normalSampler.value=c,K.uniforms.sunColor.value=h,K.uniforms.waterColor.value=d,K.uniforms.sunDirection.value=u,K.uniforms.distortionScale.value=_,K.uniforms.eye.value=f,n.material=K,n.onBeforeRender=function(W,j,X){if(y.setFromMatrixPosition(n.matrixWorld),v.setFromMatrixPosition(X.matrixWorld),R.extractRotation(n.matrixWorld),S.set(0,0,1),S.applyMatrix4(R),P.subVectors(y,v),P.dot(S)>0)return;P.reflect(S).negate(),P.add(y),R.extractRotation(X.matrixWorld),w.set(0,0,-1),w.applyMatrix4(R),w.add(v),T.subVectors(y,w),T.reflect(S).negate(),T.add(y),D.position.copy(P),D.up.set(0,1,0),D.up.applyMatrix4(R),D.up.reflect(S),D.lookAt(T),D.far=X.far,D.updateMatrixWorld(),D.projectionMatrix.copy(X.projectionMatrix),L.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),L.multiply(D.projectionMatrix),L.multiply(D.matrixWorldInverse),m.setFromNormalAndCoplanarPoint(S,y),m.applyMatrix4(D.matrixWorldInverse),b.set(m.normal.x,m.normal.y,m.normal.z,m.constant);const H=D.projectionMatrix;M.x=(Math.sign(b.x)+H.elements[8])/H.elements[0],M.y=(Math.sign(b.y)+H.elements[9])/H.elements[5],M.z=-1,M.w=(1+H.elements[10])/H.elements[14],b.multiplyScalar(2/b.dot(M)),H.elements[2]=b.x,H.elements[6]=b.y,H.elements[10]=b.z+1-o,H.elements[14]=b.w,f.setFromMatrixPosition(X.matrixWorld);const E=W.getRenderTarget(),q=W.xr.enabled,re=W.shadowMap.autoUpdate;n.visible=!1,W.xr.enabled=!1,W.shadowMap.autoUpdate=!1,W.setRenderTarget(z),W.state.buffers.depth.setMask(!0),W.autoClear===!1&&W.clear(),W.render(j,D),n.visible=!0,W.xr.enabled=q,W.shadowMap.autoUpdate=re,W.setRenderTarget(E);const ce=X.viewport;ce!==void 0&&W.state.viewport(ce)}}}Ot.registerPlugin(Fa);Ot.registerPlugin(tt);$(document).ready(function(){var s=$("#nav-buttons");let e=$("#loader-svg"),t=$("#loader-panel");document.getElementById("loader-panel");let n=$("#loader-thread"),i=690,r=1800,o=i*.035,a=$("#click-to-enter"),l=document.getElementById("odometer"),c=4,u=new mE({el:l,value:0,format:"d",theme:"default"}),h=!1;var d=document.getElementById("forest-audio"),f=document.getElementById("river-audio"),_=document.getElementById("phone-audio"),g=!1,p=!1,m=!1,S=$("#enter-website-btn");S.on("click",y),setTimeout(function(){v.loaded("forestAudio"),v.loaded("riverAudio"),v.loaded("phoneAudio")},1e3);function y(){n.css({"stroke-dashoffset":"300px"}),e.addClass("done"),d.volume=1,d.muted=!1,d.play(),f.play(),_.play(),_.volume=0,_.muted=!0,f.volume=0,f.muted=!0,h=!0,g=!0,ug(),setTimeout(function(){t.removeClass("active")},200)}let v={texture0:!1,texture1:!1,texture2:!1,texture3:!1,texture4:!1,lotus1:!1,lotus2:!1,product1to9:!1,productLotus1:!1,productLotus2:!1,productVine:!1,animatedLeaves:!1,waterNormals:!1,reflectionLayer:!1,lightRays:!1,flytingBird1:!1,butterfly:!1,forestAudio:!1,riverAudio:!1,phoneAudio:!1,loaded:function(pe){pe=="texture1"&&($(".loader-cover").addClass("reached"),setTimeout(()=>{$(".loader-cover").css("z-index",-100)},200)),v[pe]=!0,v.increaseThreadLength(r-o,pe)},increaseThreadLength(pe,Pt){n.animate({"stroke-dashoffset":pe+"px"},50,function(){Pt==="butterfly"&&(a.html("100%"),S.addClass("active"),e.addClass("faded"),Ot.to(window,{scrollTo:{y:"0"}})),c+=5,c>100&&(c=100),u.update(c)}),Pt?r-=o:r-=i}};v.increaseThreadLength(r-i/2,null);let R=!1;$("body").dblclick(function(pe){R?(Ot.to(x.position,{z:40,duration:.2}),R=!1):(Ot.to(x.position,{z:-50,duration:.2}),R=!0)}),Ot.registerPlugin(tt),Ot.registerPlugin(MotionPathPlugin),$(".white-pane .content, #products-swiper .card.bottom .content").mCustomScrollbar();const w=document.getElementById("product-links-wrapper"),b=document.getElementById("canvas-overlay");var P=$(".product-link-scene");P.on("click",T);function T(pe){pe.preventDefault();var Pt=$(this);if(Pt.hasClass(".phone-ping"))H();else{let Zt=Pt.data("id");$(".product-panel.pp"+Zt).addClass("zoomed")}}P.on("mouseenter",M);function M(pe){var Pt=$(this);let Zt=Pt.data("id");$(".product-panel.pp"+Zt).addClass("active")}P.on("mouseleave",L);function L(pe){var Pt=$(this);let Zt=Pt.data("id");$(".product-panel.pp"+Zt).removeClass("active").removeClass("zoomed")}tt.config({ignoreMobileResize:!0}),tt.normalizeScroll(!1);let D=$("#about-us-trigger"),z=$("#about-us-panel");D.on("click",J);function J(pe){pe.preventDefault(),z.toggleClass("active"),kn.addPause(kn.scrollTrigger.progress)}$(".popup").on("mousewheel",function(pe){pe.preventDefault(),pe.stopPropagation()},!1),$(".popup").on("scroll",function(pe){pe.preventDefault(),pe.stopPropagation()},!1),$(".popup .close").on("click",W);function W(pe){$(this).closest(".popup").removeClass("active"),s.addClass("active")}let j=$("#telephone-base"),X=$("#contact-us");j.on("click",H);function H(pe){X.toggleClass("active"),s.addClass("active")}let E=$("#toggle-sound");E.on("click",q);function q(pe){if(E.toggleClass("sound-mute"),h===!0)d.volume=0,d.muted=!0,f.volume=0,f.muted=!0,_.volume=0,_.muted=!0,h=!1;else{g===!0&&(d.volume=1,d.muted=!1),p===!0&&(f.volume=1,f.muted=!1),m===!0&&(_.volume=1,_.muted=!1);let Pt=0;kn&&kn.progress()&&(Pt=kn.progress()),Pt>.85&&(d.volume=0,d.muted=!0,f.volume=1,f.muted=!1,_.volume=1,_.muted=!1,p=!0,m=!0),h=!0}}let re,ce,U,Q,oe,ie,Se,ge=new Pm,ye;const Ue=document.querySelector(".slider");function I(){re=$(window),ce=re.width(),U=re.height()}function Be(){$("#navLogo"),Q=document.getElementById("navLogo"),oe=ce>=1024?42:24,ie=ce>=1024?50:34,Se=ce>=1024?64:48}let Le=!1;function Xe(){return/iPhone/.test(navigator.userAgent)}Xe()?Le=!0:Le=!1;const V=(pe,Pt)=>{const Zt=Pt.position.z;pe<Zt?pe-=Zt:pe+=Zt;const mi=Pt.fov*Math.PI/180;return 2*Math.tan(mi/2)*Math.abs(pe)},k=(pe,Pt)=>V(pe,Pt)*Pt.aspect;I(),Be();let Oe=$("#rotate-device");function ze(){ce<U&&Oe.addClass("active")}ze();const C=new zS,x=new Tn(35,ce/U,.001,3e4);x.position.set(0,0,40),C.add(x);const Z=document.getElementById("canvas-1"),le=new kS({canvas:Z,alpha:!0});le.setSize(ce,U),le.colorSpace=ft,le.toneMapping=Yp,le.shadowMap.enabled=!0;const he=new mT,ee=new nr(1,1);V(-200,x);let Re=0,de=parseInt(ce*.539),xe=U,Ge=U*.1,fe=0;if(U>=de+Ge){xe=ce*.539;let pe=U-xe;Re=parseInt(pe/U*100);var Ee=parseInt($(".product-link-wrapper.p1").css("left"));$(".product-link-wrapper.p1").css("left",Ee+Re*ce/100+"px");var Ve=parseInt($(".product-link-wrapper.p2").css("left"));$(".product-link-wrapper.p2").css("left",Ve+Re*ce/100+"px"),fe="-82vh"}else fe="-45vh";const Pe=V(-200,x)*8.196,ue=Pe/2-k(-200,x)/2,Ae=-Pe+ue+k(-200,x),je=ge.load("assets/img/bg/layer-0.webp",function(){v.loaded("texture0")});je.colorSpace=ft;const _t=new Ft({map:je,transparent:!0}),N=new Mt(ee,_t);N.position.set(ue,0,-200),N.scale.set(Pe,V(-200,x),1);const ne=ge.load("assets/img/bg/combined-bg-for-mobile.webp",function(){Le&&(v.loaded("texture1"),v.loaded("texture2"),v.loaded("texture3"),v.loaded("texture4"))});ne.colorSpace=ft;const se=new Ft({map:ne,transparent:!0}),te=new Mt(ee,se);te.position.set(ue,0,-200),te.position.set(ue,0,-200),te.scale.set(Pe,V(-200,x),1);const me=ge.load("assets/img/bg/layer-1-new.webp",function(){v.loaded("texture1")});me.colorSpace=ft;const ke=new Ft({map:me,transparent:!0});let Ye=new Mt(ee,ke);Ye.position.set(ue,0,-200),Ye.scale.set(Pe,V(-200,x),1);const St=ge.load("assets/img/bg/layer-2.webp",function(){v.loaded("texture2")});St.colorSpace=ft;const bt=new Ft({map:St,transparent:!0});let Je=new Mt(ee,bt);Je.position.set(ue,0,-200),Je.scale.set(Pe,V(-200,x),1);const We=ge.load("assets/img/bg/layer-3-new.webp",function(){v.loaded("texture3")});We.colorSpace=ft;const Fe=new Ft({map:We,transparent:!0});let Qe=new Mt(ee,Fe);Qe.position.set(ue,0,-200),Qe.scale.set(Pe,V(-200,x),1);const ve=ge.load("assets/img/bg/layer-4.webp",function(){v.loaded("texture4")});ve.colorSpace=ft;const Ze=new Ft({map:ve,transparent:!0});let Ie=new Mt(ee,Ze);Ie.position.set(ue,0,-200),Ie.scale.set(Pe,V(-200,x),1);const $e=ge.load("assets/img/bg/lotuses-1.webp",function(){v.loaded("lotus1")});$e.colorSpace=ft;const Dt=new Ft({map:$e,transparent:!0}),qe=new Mt(ee,Dt);qe.position.set(ue,0,-200),qe.scale.set(Pe,V(-200,x),1);const At=ge.load("assets/img/bg/lotuses-2.webp",function(){v.loaded("lotus2")});At.colorSpace=ft;const Yt=new Ft({map:At,transparent:!0}),rt=new Mt(ee,Yt);rt.position.set(ue,0,-200),rt.scale.set(Pe,V(-200,x),1);const wt=ge.load("assets/img/products/scene/products-1-to-9.png",function(){v.loaded("product1to9")});wt.colorSpace=ft;const vt=new Ft({map:wt,transparent:!0}),Ct=new Mt(ee,vt);Ct.position.set(ue,0,-200),Ct.scale.set(Pe,V(-200,x),1);const A=ge.load("assets/img/products/scene/product-vine.webp",function(){v.loaded("productVine")});A.colorSpace=ft;const O=new Ft({map:A,transparent:!0}),G=new Mt(ee,O);G.position.set(ue,0,-200),G.scale.set(Pe,V(-200,x),1);const Y=ge.load("assets/img/products/scene/product-lotus-1.webp",function(){v.loaded("productLotus1")});Y.colorSpace=ft;const F=new Ft({map:Y,transparent:!0}),ae=new Mt(ee,F);ae.position.set(ue,0,-200),ae.scale.set(Pe,V(-200,x),1);const Me=ge.load("assets/img/products/scene/product-lotus-2.webp",function(){v.loaded("productLotus2")});Me.colorSpace=ft;const Ce=new Ft({map:Me,transparent:!0}),_e=new Mt(ee,Ce);_e.position.set(ue,0,-200),_e.scale.set(Pe,V(-200,x),1);const we=ge.load("assets/img/bg/light-rays.webp",function(){v.loaded("lightRays")});we.colorSpace=ft;const He=new Ft({map:we,transparent:!0,blending:tc}),be=new Mt(ee,He);be.position.set(k(-190,x)*2.2,0,-190),be.scale.set(Pe,V(-190,x),1);const ut=new nr(7,1),yt=ge.load("assets/img/bg/animated-leaves.webp",function(){v.loaded("animatedLeaves")});yt.colorSpace=ft;const ht=new Ft({map:yt,transparent:!0}),dt=new Mt(ut,ht);dt.position.set(k(-150,x)*2.2,-20,-150),dt.scale.set(k(-150,x),V(-150,x),1);let st=new nr(1.18,1);ye=new Kb(st,{textureWidth:128,textureHeight:128,waterNormals:ge.load("assets/img/bg/waternormals.webp",function(pe){pe.wrapS=pe.wrapT=ms,pe.colorSpace=ft,v.loaded("waterNormals")}),sunDirection:new B(-1e3,-1e3,-1e3),sunColor:9880988,waterColor:4809379,distortionScale:15,fog:C.fog!==void 0}),ye.rotation.x=-Math.PI/3.8,ye.position.set(k(-500,x),-20,-500),ye.scale.set(k(-500,x),V(-500,x),1);let Ne=new nr(2.25,1.1);const zt=ge.load("assets/img/bg/hidden-reflection-layer-4.webp",function(){v.loaded("reflectionLayer")});zt.colorSpace=ft,zt.flipY=!1,zt.offset.y=.1;const gt=new Ft({map:zt,transparent:!0,side:Mi}),jt=new Mt(Ne,gt);jt.rotation.x=-Math.PI/3,jt.position.set(V(-500,x)*4,V(-500,x),-500),jt.scale.set(k(-500,x),V(-500,x)*1.3,1),C.fog=new id(13421772,-300,-500);const mr=new Ft({color:4814663,map:zt,transparent:!0,opacity:.8,blending:tc});let an=new Mt(st,mr);an.rotation.x=-Math.PI/3.8,an.position.set(0,-20,-500),an.scale.set(k(-500,x),V(-500,x),1),an.material.map.magFilter=bn;const Lo=new nr(4,4),Ht=ge.load("assets/img/bg/flying-bird-1.webp",function(){v.loaded("flytingBird1")});Ht.colorSpace=ft;const wi=new Ft({map:Ht,transparent:!0}),ri=new Mt(Lo,wi);ri.position.set(40,50,-100);let ln=!1;C.add(N),Le?(C.add(te),Ye=null,Je=null,Qe=null,Ie=null):(C.add(Ye),C.add(Je)),C.add(ye),C.add(jt),Le||(C.add(Qe),C.add(Ie)),C.add(Ct),C.add(G),C.add(ae),C.add(rt),C.add(qe),C.add(_e),C.add(dt),C.add(ri),C.add(be);const bs=new CT,Ba=new uE;Ba.setDecoderPath("/examples/jsm/libs/draco/"),bs.setDRACOLoader(Ba);const ka=new aT(16777215,15115040,3);C.add(ka);let za,Ri,Nd,Od;bs.load("assets/img/scene.gltf",function(pe){v.loaded("butterfly"),Ri=pe,pe.animations[0].tracks[0],pe.animations[0].tracks[1],Nd=pe.animations[0].tracks[2],Od=pe.animations[0].tracks[3],pe.animations[0].tracks[4],pe.animations[0].tracks[5],pe.animations[0].tracks[6],pe.animations[0].tracks[7],pe.animations[0].tracks=[Nd,Od],pe.scene.position.set(30,-10,25),pe.scene.rotation.set(0,60,0),pe.scene.scale.set(34,34,34),za=new RT(pe.scene);var Pt=za.clipAction(pe.animations[0]);Pt.setDuration(.7),Pt.play(),C.add(pe.scene)});let kn=null;function ug(){kn=Ot.timeline({defaults:{ease:"none",duration:10},scrollTrigger:{trigger:Ue,pin:!0,scrub:.5,end:()=>"+="+Ue.offsetHeight*30}}),N.position.set(ue-10,-40,-60),Le?te.position.set(ue-15,-40,-60):(Ye.position.set(ue-15,-40,-60),Je.position.set(ue-20,-40,-60),Qe.position.set(ue-25,-40,-60),Ie.position.set(ue-30,-40,-60)),be.position.set(ue-30,-40,-50),Ct.position.set(ue-25,-40,-60),dt.position.set(ue-40,-20,0);var pe=document.createElement("div");pe.style["-webkit-transform"]="scale(1.5)",pe.style["-moz-transform"]="scale(1.5)",pe.style["-ms-transform"]="scale(1.5)",pe.style["-o-transform"]="scale(1.5)",pe.style.transform="scale(1.5)";var Pt=[{x:40,y:-30},{x:20,y:2},{x:18,y:1},{x:14,y:3},{x:13.8,y:3.2},{x:13.9,y:3}],Zt=[{x:14,y:3},{x:5,y:3.5},{x:2,y:0},{x:3,y:-4},{x:9,y:-3},{x:12,y:1},{x:11,y:0},{x:10,y:.5},{x:11,y:0},{x:9.2,y:.4}],mi=[{x:9.2,y:.4},{x:6,y:3},{x:2,y:-4},{x:0,y:0}],Io=[{x:0,y:0},{x:3,y:0},{x:4,y:-6},{x:1.1,y:-7.6}],Ha=[{x:0,y:0},{x:3,y:0},{x:4,y:-1},{x:1.1,y:-2.6}],Do=[{x:1.1,y:-2.6},{x:-3,y:-3.4},{x:0,y:1.5}];V(25,x);let Uc=Re>0?-(Re*.4):-4;var Va=[{x:1.1,y:-2.6},{x:2,y:2},{x:3,y:8.4},{x:Uc,y:8.1}],Ga=[{x:Uc,y:8.1},{x:Uc,y:8}],dg=Ot.quickSetter(Ri.scene.position,"x"),fg=Ot.quickSetter(Ri.scene.position,"y"),pg=Ot.quickSetter(Ri.scene.position,"z");function Jt(){dg(Ot.getProperty(pe,"x")),fg(Ot.getProperty(pe,"y")),pg(Ot.getProperty(pe,"z"))}$("#scroll-icon");let Wa=document.getElementById("scroll-icon"),Xa=document.getElementById("gp-link-1"),Ya=document.getElementById("gp-link-2"),qa=document.getElementById("gp-link-3"),Ka=document.getElementById("gp-link-4"),$a=document.getElementById("gp-link-5"),ja=document.getElementById("gp-link-6");Le?kn.to(Q,{height:Se,left:oe,top:ie,xPercent:0,duration:.5}).to(Wa,{opacity:0,duration:.1},"<").to(Wa,{scale:0,duration:.1},"<").to(Z,{filter:"blur(0px)",duration:.5},"<").to(b,{opacity:0,duration:.3},"<").to(N.position,{x:ue,y:0,z:-200,duration:1}).to(te.position,{x:ue,y:0,z:-200,duration:1},"<").to(be.position,{x:ue-20,y:4,z:-200,duration:1},"<").to(dt.position,{x:k(-150,x)*1.9,y:-20,z:-150,duration:1},"<").to(Ct.position,{x:ue,y:3,z:-200,duration:1,onComplete:function(){s.addClass("active"),t.addClass("back")},onReverseComplete:function(){s.removeClass("active")}},"<").to(pe,{duration:1.5,motionPath:{path:Pt,useRadians:!0,start:.5,rotation:!0},onUpdate:Jt},"-=1.5").to(Ri.scene.scale,{duration:1.5,x:14,y:14,z:14},"<").to(ri.position,{duration:1.5,x:0,y:20,z:-60,ease:"power1.inOut",onComplete:function(){ln=!0}},"<").to(pe,{duration:1.5,motionPath:{path:Zt,useRadians:!1},onUpdate:Jt}).to(Xa,{opacity:1,scale:.8,duration:.1},"<").to(Ya,{opacity:1,scale:.8,duration:.1},"<").to(Ri.scene.rotation,{y:"-=20",duration:.01,onComplete:function(){ln=!1},onReverseComplete:function(){s.removeClass("active")}}).to(w,{left:"-106%",duration:1.8,ease:"power1.inOut"}).to(N.position,{x:V(-200,x)*1.3,duration:1.8,ease:"power1.inOut"},"<").to(te.position,{x:V(-200,x)*1.3,duration:1.8,ease:"power1.inOut"},"<").to(be.position,{x:V(-200,x)*1.3-30,duration:1.8,ease:"power1.inOut"},"<").to(dt.position,{x:V(-150,x)*1.3,duration:1.8,ease:"power1.inOut"},"<").to(Ct.position,{x:V(-200,x)*1.3,duration:1.8,ease:"power1.inOut"},"<").to(G.position,{x:V(-200,x)*1.3+10,duration:1.8,ease:"power1.inOut"},"<").to(_e.position,{x:V(-200,x)*1.3,duration:1.8,ease:"power1.inOut"},"<").to(ae.position,{x:V(-200,x)*1.3,duration:1.8,ease:"power1.inOut"},"<").to(rt.position,{x:V(-200,x)*1.3,duration:1.8,ease:"power1.inOut"},"<").to(qe.position,{x:V(-200,x)*1.3,duration:1.8,ease:"power1.inOut"},"<").to(pe,{duration:1.8,ease:"power1.inOut",motionPath:{path:mi,useRadians:!1},onUpdate:Jt},"<").to(ri.position,{duration:1.8,x:-200,y:60,ease:"power1.inOut"},"<").to(Xa,{opacity:0,scale:0,duration:.1,delay:.2},"<").to(Ya,{opacity:0,scale:0,duration:.1,delay:.2},"<").to(pe,{duration:1.2,motionPath:{path:Io,useRadians:!1},onUpdate:Jt}).to(qa,{opacity:1,scale:.8,duration:.1},"<").to(N.position,{x:-V(-200,x)*.1,duration:1.5,ease:"power1.inOut"}).to(te.position,{x:-V(-200,x)*.1,duration:1.5,ease:"power1.inOut"},"<").to(be.position,{x:-V(-200,x)*.1-20,duration:1.5,ease:"power1.inOut"},"<").to(dt.position,{x:V(-150,x)*0,duration:1.5,ease:"power1.inOut"},"<").to(Ct.position,{x:-V(-200,x)*.1,duration:1.5,ease:"power1.inOut"},"<").to(G.position,{x:-V(-200,x)*.1+10,duration:1.5,ease:"power1.inOut"},"<").to(_e.position,{x:-V(-200,x)*.1,duration:1.5,ease:"power1.inOut"},"<").to(ae.position,{x:-V(-200,x)*.1,duration:1.5,ease:"power1.inOut"},"<").to(rt.position,{x:-V(-200,x)*.1,duration:1.5,ease:"power1.inOut"},"<").to(qe.position,{x:-V(-200,x)*.1,duration:1.5,ease:"power1.inOut"},"<").to(w,{left:"-206%",duration:1.5,ease:"power1.inOut"},"<").to(pe,{duration:1.5,ease:"power1.inOut",motionPath:{path:Ha,useRadians:!1},onUpdate:Jt,onComplete:function(){try{d.volume=.2,d.muted=!0}catch{}if(h)try{f.volume=1,f.muted=!1,p=!0}catch{}},onReverseComplete:function(){try{d.volume=1,d.muted=!1}catch{}if(h)try{f.volume=0,f.muted=!0,p=!1}catch{}}},"<").to(qa,{opacity:0,scale:0,duration:.1,delay:.2},"<").to(pe,{duration:1.5,motionPath:{path:Do,useRadians:!1},onUpdate:Jt}).to(Ka,{opacity:1,scale:.8,duration:.1},"<").to($a,{opacity:1,scale:.8,duration:.1},"<").to(N.position,{x:-V(-200,x)*1.94,duration:2,ease:"power1.inOut"}).to(te.position,{x:-V(-200,x)*1.94,duration:2,ease:"power1.inOut"},"<").to(be.position,{x:-V(-200,x)*1.94-10,duration:2,ease:"power1.inOut"},"<").to(dt.position,{x:-V(-150,x)*1.2,duration:2,ease:"power1.inOut"},"<").to(Ct.position,{x:-V(-200,x)*1.94,duration:2,ease:"power1.inOut"},"<").to(G.position,{x:-V(-200,x)*1.94+10,duration:2,ease:"power1.inOut"},"<").to(_e.position,{x:-V(-200,x)*1.94,duration:2,ease:"power1.inOut"},"<").to(ae.position,{x:-V(-200,x)*1.94,duration:2,ease:"power1.inOut"},"<").to(rt.position,{x:-V(-200,x)*1.94,duration:2,ease:"power1.inOut"},"<").to(qe.position,{x:-V(-200,x)*1.94,duration:2,ease:"power1.inOut"},"<").to(w,{left:"-254%",duration:2,ease:"power1.inOut"},"<").to(jt.position,{x:V(-200,x)*1.22,duration:2,ease:"power1.inOut"},"<").to(ye.position,{x:0,duration:2,ease:"power1.inOut"},"<").to(pe,{duration:2,ease:"power1.inOut",motionPath:{path:Va,useRadians:!1},onUpdate:Jt},"<").to(Ka,{opacity:0,scale:0,duration:.1,delay:.2},"<").to($a,{opacity:0,scale:0,duration:.1,delay:.2},"<").to(pe,{duration:1.5,motionPath:{path:Ga,useRadians:!1},onUpdate:Jt,onComplete:function(){}}).to(ja,{opacity:1,scale:.8,duration:.1},"<").to(N.position,{x:Ae,duration:1.5,ease:"power1.inOut"}).to(te.position,{x:Ae,duration:1.5,ease:"power1.inOut"},"<").to(be.position,{x:Ae,duration:1.5,ease:"power1.inOut"},"<").to(dt.position,{x:-k(-150,x)*2.4,duration:1.5,ease:"power1.inOut"},"<").to(Ct.position,{x:Ae,duration:1.5,ease:"power1.inOut"},"<").to(G.position,{x:-k(-200,x)*2+10,duration:1.5,ease:"power1.inOut"},"<").to(_e.position,{x:Ae,duration:1.5,ease:"power1.inOut"},"<").to(ae.position,{x:Ae,duration:1.5,ease:"power1.inOut"},"<").to(rt.position,{x:Ae,duration:1.5,ease:"power1.inOut"},"<").to(qe.position,{x:Ae,duration:1.5,ease:"power1.inOut"},"<").to(w,{left:"-317%",duration:1.5,ease:"power1.inOut"},"<").to(jt.position,{x:-k(-200,x)*3,duration:1.5,ease:"power1.inOut"},"<").from(".telephone-base",{right:fe,duration:1.5,ease:"power1.inOut"},"<").to(pe,{duration:1.5,ease:"power1.inOut",motionPath:{path:Va,useRadians:!1},onUpdate:Jt},"<").to(Ri.scene.rotation,{duration:1.5,ease:"power1.inOut",y:"-=0.5",x:"+=0.2",onComplete:function(){if(h)try{_.volume=.4,_.muted=!1,_.loop=!0,m=!0}catch{}},onReverseComplete:function(){if(h)try{_.volume=0,_.muted=!0,m=!1}catch{}}},"-=1.8").to(ja,{opacity:0,scale:0,duration:.1,delay:.5},"<").to(pe,{duration:.01,ease:"power1.inOut",motionPath:{path:Ga,useRadians:!1},onUpdate:Jt},"lastPos").to(pe,{duration:.02,ease:"power1.inOut",x:"+=0.5"}):kn.to(Q,{height:Se,left:oe,top:ie,xPercent:0,duration:.5}).to(Wa,{opacity:0,duration:.1},"<").to(Wa,{scale:0,duration:.1},"<").to(Z,{filter:"blur(0px)",duration:.5},"<").to(b,{opacity:0,duration:.3},"<").to(N.position,{x:ue,y:0,z:-200,duration:1}).to(Ye.position,{x:ue,y:0,z:-200,duration:1},"<").to(Je.position,{x:ue,y:0,z:-200,duration:1},"<").to(Qe.position,{x:ue,y:0,z:-200,duration:1},"<").to(Ie.position,{x:ue,y:0,z:-200,duration:1},"<").to(be.position,{x:ue-20,y:4,z:-200,duration:1},"<").to(dt.position,{x:k(-150,x)*1.9,y:-20,z:-150,duration:1},"<").to(Ct.position,{x:ue,y:3,z:-200,duration:1,onComplete:function(){s.addClass("active"),t.addClass("back")},onReverseComplete:function(){s.removeClass("active")}},"<").to(pe,{duration:1.5,motionPath:{path:Pt,useRadians:!0,start:.5,rotation:!0},onUpdate:Jt},"-=1.5").to(Ri.scene.scale,{duration:1.5,x:14,y:14,z:14},"<").to(ri.position,{duration:1.5,x:0,y:20,z:-60,ease:"power1.inOut",onComplete:function(){ln=!0}},"<").to(pe,{duration:1.5,motionPath:{path:Zt,useRadians:!1},onUpdate:Jt}).to(Xa,{opacity:1,scale:.8,duration:.1},"<").to(Ya,{opacity:1,scale:.8,duration:.1},"<").to(Ri.scene.rotation,{y:"-=20",duration:.01,onComplete:function(){ln=!1},onReverseComplete:function(){s.removeClass("active")}}).to(w,{left:"-106%",duration:1.8,ease:"power1.inOut"}).to(N.position,{x:V(-200,x)*1.3,duration:1.8,ease:"power1.inOut"},"<").to(Ye.position,{x:V(-200,x)*1.3,duration:1.8,ease:"power1.inOut"},"<").to(Je.position,{x:V(-200,x)*1.3,duration:1.8,ease:"power1.inOut"},"<").to(Qe.position,{x:V(-200,x)*1.3,duration:1.8,ease:"power1.inOut"},"<").to(Ie.position,{x:V(-200,x)*1.3,duration:1.8,ease:"power1.inOut"},"<").to(be.position,{x:V(-200,x)*1.3-30,duration:1.8,ease:"power1.inOut"},"<").to(dt.position,{x:V(-150,x)*1.3,duration:1.8,ease:"power1.inOut"},"<").to(Ct.position,{x:V(-200,x)*1.3,duration:1.8,ease:"power1.inOut"},"<").to(G.position,{x:V(-200,x)*1.3+10,duration:1.8,ease:"power1.inOut"},"<").to(_e.position,{x:V(-200,x)*1.3,duration:1.8,ease:"power1.inOut"},"<").to(ae.position,{x:V(-200,x)*1.3,duration:1.8,ease:"power1.inOut"},"<").to(rt.position,{x:V(-200,x)*1.3,duration:1.8,ease:"power1.inOut"},"<").to(qe.position,{x:V(-200,x)*1.3,duration:1.8,ease:"power1.inOut"},"<").to(pe,{duration:1.8,ease:"power1.inOut",motionPath:{path:mi,useRadians:!1},onUpdate:Jt},"<").to(ri.position,{duration:1.8,x:-200,y:60,ease:"power1.inOut"},"<").to(Xa,{opacity:0,scale:0,duration:.1,delay:.2},"<").to(Ya,{opacity:0,scale:0,duration:.1,delay:.2},"<").to(pe,{duration:1.2,motionPath:{path:Io,useRadians:!1},onUpdate:Jt}).to(qa,{opacity:1,scale:.8,duration:.1},"<").to(N.position,{x:-V(-200,x)*.1,duration:1.5,ease:"power1.inOut"}).to(Ye.position,{x:-V(-200,x)*.1,duration:1.5,ease:"power1.inOut"},"<").to(Je.position,{x:-V(-200,x)*.1,duration:1.5,ease:"power1.inOut"},"<").to(Qe.position,{x:-V(-200,x)*.1,duration:1.5,ease:"power1.inOut"},"<").to(Ie.position,{x:-V(-200,x)*.1,duration:1.5,ease:"power1.inOut"},"<").to(be.position,{x:-V(-200,x)*.1-20,duration:1.5,ease:"power1.inOut"},"<").to(dt.position,{x:V(-150,x)*0,duration:1.5,ease:"power1.inOut"},"<").to(Ct.position,{x:-V(-200,x)*.1,duration:1.5,ease:"power1.inOut"},"<").to(G.position,{x:-V(-200,x)*.1+10,duration:1.5,ease:"power1.inOut"},"<").to(_e.position,{x:-V(-200,x)*.1,duration:1.5,ease:"power1.inOut"},"<").to(ae.position,{x:-V(-200,x)*.1,duration:1.5,ease:"power1.inOut"},"<").to(rt.position,{x:-V(-200,x)*.1,duration:1.5,ease:"power1.inOut"},"<").to(qe.position,{x:-V(-200,x)*.1,duration:1.5,ease:"power1.inOut"},"<").to(w,{left:"-206%",duration:1.5,ease:"power1.inOut"},"<").to(pe,{duration:1.5,ease:"power1.inOut",motionPath:{path:Ha,useRadians:!1},onUpdate:Jt,onComplete:function(){try{d.volume=.2,d.muted=!0}catch{}if(h)try{f.volume=1,f.muted=!1,p=!0}catch{}},onReverseComplete:function(){try{d.volume=1,d.muted=!1}catch{}if(h)try{f.volume=0,f.muted=!0,p=!1}catch{}}},"<").to(qa,{opacity:0,scale:0,duration:.1,delay:.2},"<").to(pe,{duration:1.5,motionPath:{path:Do,useRadians:!1},onUpdate:Jt}).to(Ka,{opacity:1,scale:.8,duration:.1},"<").to($a,{opacity:1,scale:.8,duration:.1},"<").to(N.position,{x:-V(-200,x)*1.94,duration:2,ease:"power1.inOut"}).to(Ye.position,{x:-V(-200,x)*1.94,duration:2,ease:"power1.inOut"},"<").to(Je.position,{x:-V(-200,x)*1.94,duration:2,ease:"power1.inOut"},"<").to(Qe.position,{x:-V(-200,x)*1.94,duration:2,ease:"power1.inOut"},"<").to(Ie.position,{x:-V(-200,x)*1.94,duration:2,ease:"power1.inOut"},"<").to(be.position,{x:-V(-200,x)*1.94-10,duration:2,ease:"power1.inOut"},"<").to(dt.position,{x:-V(-150,x)*1.2,duration:2,ease:"power1.inOut"},"<").to(Ct.position,{x:-V(-200,x)*1.94,duration:2,ease:"power1.inOut"},"<").to(G.position,{x:-V(-200,x)*1.94+10,duration:2,ease:"power1.inOut"},"<").to(_e.position,{x:-V(-200,x)*1.94,duration:2,ease:"power1.inOut"},"<").to(ae.position,{x:-V(-200,x)*1.94,duration:2,ease:"power1.inOut"},"<").to(rt.position,{x:-V(-200,x)*1.94,duration:2,ease:"power1.inOut"},"<").to(qe.position,{x:-V(-200,x)*1.94,duration:2,ease:"power1.inOut"},"<").to(w,{left:"-254%",duration:2,ease:"power1.inOut"},"<").to(jt.position,{x:V(-200,x)*1.22,duration:2,ease:"power1.inOut"},"<").to(ye.position,{x:0,duration:2,ease:"power1.inOut"},"<").to(pe,{duration:2,ease:"power1.inOut",motionPath:{path:Va,useRadians:!1},onUpdate:Jt},"<").to(Ka,{opacity:0,scale:0,duration:.1,delay:.2},"<").to($a,{opacity:0,scale:0,duration:.1,delay:.2},"<").to(pe,{duration:1.5,motionPath:{path:Ga,useRadians:!1},onUpdate:Jt,onComplete:function(){}}).to(ja,{opacity:1,scale:.8,duration:.1},"<").to(N.position,{x:Ae,duration:1.5,ease:"power1.inOut"}).to(Ye.position,{x:Ae,duration:1.5,ease:"power1.inOut"},"<").to(Je.position,{x:Ae,duration:1.5,ease:"power1.inOut"},"<").to(Qe.position,{x:Ae,duration:1.5,ease:"power1.inOut"},"<").to(Ie.position,{x:Ae,duration:1.5,ease:"power1.inOut"},"<").to(be.position,{x:Ae,duration:1.5,ease:"power1.inOut"},"<").to(dt.position,{x:-k(-150,x)*2.4,duration:1.5,ease:"power1.inOut"},"<").to(Ct.position,{x:Ae,duration:1.5,ease:"power1.inOut"},"<").to(G.position,{x:-k(-200,x)*2+10,duration:1.5,ease:"power1.inOut"},"<").to(_e.position,{x:Ae,duration:1.5,ease:"power1.inOut"},"<").to(ae.position,{x:Ae,duration:1.5,ease:"power1.inOut"},"<").to(rt.position,{x:Ae,duration:1.5,ease:"power1.inOut"},"<").to(qe.position,{x:Ae,duration:1.5,ease:"power1.inOut"},"<").to(w,{left:"-317%",duration:1.5,ease:"power1.inOut"},"<").to(jt.position,{x:-k(-200,x)*3,duration:1.5,ease:"power1.inOut"},"<").from(".telephone-base",{right:fe,duration:1.5,ease:"power1.inOut"},"<").to(pe,{duration:1.5,ease:"power1.inOut",motionPath:{path:Va,useRadians:!1},onUpdate:Jt},"<").to(Ri.scene.rotation,{duration:1.5,ease:"power1.inOut",y:"-=0.5",x:"+=0.2",onComplete:function(){if(h)try{_.volume=.4,_.muted=!1,_.loop=!0,m=!0}catch{}},onReverseComplete:function(){if(h)try{_.volume=0,_.muted=!0,m=!1}catch{}}},"-=1.8").to(ja,{opacity:0,scale:0,duration:.1,delay:.5},"<").to(pe,{duration:.01,ease:"power1.inOut",motionPath:{path:Ga,useRadians:!1},onUpdate:Jt},"lastPos").to(pe,{duration:.02,ease:"power1.inOut",x:"+=0.5"}),document.body.scrollHeight,tt.observe({preventDefault:!0,target:window,type:"touch,scroll",dragMinimum:4,allowClicks:!0,ignore:".product-link-wrapper, .brand-logo, .scroll-icon, .product-panel",onUp:function(){return!1},onDown:function(){return!1},onLeft:function(qt){let Uo=kn.progress();qt.deltaX<-2&&(Uo>=.5&&qt.deltaX<-90?Ot.to(window,{scrollTo:kn.scrollTrigger.labelToScroll("lastPos")}):Uo>=.6&&qt.deltaX<-70?Ot.to(window,{scrollTo:kn.scrollTrigger.labelToScroll("lastPos")}):Uo>=.8&&qt.deltaX<-40?Ot.to(window,{scrollTo:kn.scrollTrigger.labelToScroll("lastPos")}):Uo>=.9&&qt.deltaX<-10?Ot.to(window,{scrollTo:kn.scrollTrigger.labelToScroll("lastPos")}):Uo>.99?Ot.to(window,{scrollTo:kn.scrollTrigger.labelToScroll("lastPos")}):Ot.to(window,{scrollTo:{y:"-="+qt.deltaX*22}}))},onRight:function(qt){qt.deltaX>3&&Ot.to(window,{scrollTo:{y:"-="+qt.deltaX*22}})}})}function hg(){document.hidden&&(h=!0),q()}document.addEventListener("visibilitychange",hg,!1);let Dc=!0;const Fd=()=>{const pe=he.getElapsedTime();le.render(C,x),ye.material.uniforms.time.value+=3/60;var Pt=he.getDelta();if(za&&za.update(Pt),ae.position.y=Math.sin(10+pe),_e.position.y=Math.cos(13+pe),rt.position.y=Math.sin(8+pe),qe.position.y=Math.cos(16+pe),ln&&(ri.position.y=Math.sin(.1+pe)+20,ri.position.x=Math.cos(10+pe*3)),!Le){const Zt=dt.geometry.attributes.position;for(let mi=0;mi<Zt.count;mi++){let Io=Zt.getX(mi),Ha=Zt.getY(mi),Do=Zt.getZ(mi);Do=3*Math.cos(Io*2+pe),Zt.setXYZ(mi,Io,Ha,Do)}Zt.needsUpdate=!0,be.material.opacity<=.5&&(Dc=!1),be.material.opacity>=1&&(Dc=!0),Dc?be.material.opacity-=.008:be.material.opacity+=.008}window.requestAnimationFrame(Fd)};Fd();const Bd=new Lenis;Bd.on("scroll",tt.update),Ot.ticker.add(pe=>{Bd.raf(pe*1e3)}),Ot.ticker.lagSmoothing(0),window.addEventListener("resize",()=>{let pe=$(window).height();setTimeout(()=>{(pe>U?pe-U:U-pe)>50&&location.reload()},400)})});
