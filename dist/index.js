"use strict";var c=function(a,i){return function(){return i||a((i={exports:{}}).exports,i),i.exports}};var m=c(function(I,x){
var g=require('@stdlib/strided-base-reinterpret-complex128/dist'),w=require('@stdlib/complex-float64-real/dist'),E=require('@stdlib/complex-float64-imag/dist'),o=5;function M(a,i,s,n,_){var e,t,u,r,q,f,v;if(a<=0||(t=w(i),u=E(i),t===0&&u===0))return s;if(e=g(s,0),r=_*2,q=n*2,n===1){if(f=a%o,f>0)for(v=0;v<f;v++)e[r]-=t,e[r+1]-=u,r+=q;if(a<o)return s;for(v=f;v<a;v+=o)e[r]-=t,e[r+1]-=u,e[r+2]-=t,e[r+3]-=u,e[r+4]-=t,e[r+5]-=u,e[r+6]-=t,e[r+7]-=u,e[r+8]-=t,e[r+9]-=u,r+=o*2;return s}for(v=0;v<a;v++)e[r]-=t,e[r+1]-=u,r+=q;return s}x.exports=M
});var d=c(function(J,y){
var O=require('@stdlib/strided-base-stride2offset/dist'),b=m();function k(a,i,s,n){return b(a,i,s,n,O(a,n))}y.exports=k
});var l=c(function(K,j){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=d(),B=m();A(z,"ndarray",B);j.exports=z
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=l(),p,R=D(C(__dirname,"./native.js"));F(R)?p=G:p=R;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
