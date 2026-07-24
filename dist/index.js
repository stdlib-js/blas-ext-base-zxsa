"use strict";var c=function(a,i){return function(){try{return i||a((i={exports:{}}).exports,i),i.exports}catch(t){throw (i=0, t)}};};var m=c(function(I,x){
var g=require('@stdlib/strided-base-reinterpret-complex128/dist'),w=require('@stdlib/complex-float64-real/dist'),E=require('@stdlib/complex-float64-imag/dist'),o=5;function M(a,i,t,n,_){var e,u,v,r,q,f,s;if(a<=0||(u=w(i),v=E(i),u===0&&v===0))return t;if(e=g(t,0),r=_*2,q=n*2,n===1){if(f=a%o,f>0)for(s=0;s<f;s++)e[r]-=u,e[r+1]-=v,r+=q;if(a<o)return t;for(s=f;s<a;s+=o)e[r]-=u,e[r+1]-=v,e[r+2]-=u,e[r+3]-=v,e[r+4]-=u,e[r+5]-=v,e[r+6]-=u,e[r+7]-=v,e[r+8]-=u,e[r+9]-=v,r+=o*2;return t}for(s=0;s<a;s++)e[r]-=u,e[r+1]-=v,r+=q;return t}x.exports=M
});var d=c(function(J,y){
var O=require('@stdlib/strided-base-stride2offset/dist'),b=m();function k(a,i,t,n){return b(a,i,t,n,O(a,n))}y.exports=k
});var l=c(function(K,j){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=d(),B=m();A(z,"ndarray",B);j.exports=z
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=l(),p,R=D(C(__dirname,"./native.js"));F(R)?p=G:p=R;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
