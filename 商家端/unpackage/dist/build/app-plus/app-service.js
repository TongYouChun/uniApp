var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'Complaint flex-column align-items'])
Z([[2,'?:'],[[7],[3,'handle']],[1,true],[1,false]])
Z([[2,'?:'],[[7],[3,'handle']],[1,false],[1,true]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'Delivery'])
Z([[7],[3,'Delivery']])
Z([[7],[3,'Deliverys']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content flex-column flex-overflow'])
Z([3,'Price flex height'])
Z([[2,'?:'],[[7],[3,'qian1']],[1,false],[1,true]])
Z([[2,'?:'],[[7],[3,'qian1']],[1,true],[1,false]])
Z([3,'WaterTicket flex-column width-750  background-f border-top border-bottom'])
Z(z[1])
Z([[2,'?:'],[[7],[3,'qian2']],[1,false],[1,true]])
Z([[2,'?:'],[[7],[3,'qian2']],[1,true],[1,false]])
Z(z[1])
Z([[2,'?:'],[[7],[3,'qian3']],[1,false],[1,true]])
Z([[2,'?:'],[[7],[3,'qian3']],[1,true],[1,false]])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'Content-container flex-column '])
Z([3,'OFF-ON flex font-18 background-F0F4F7 space-around align-items'])
Z([[7],[3,'OFF']])
Z([[7],[3,'ON']])
Z([[7],[3,'diary']])
Z([3,'text3 flex font-24 color-0 space-around align-items border-bottom'])
Z([3,'__e'])
Z([3,'li flex justify-content align-items'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'DaKa1']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'?:'],[[7],[3,'Daka1']],[1,false],[1,true]])
Z([[2,'?:'],[[7],[3,'Daka1']],[1,true],[1,false]])
Z(z[6])
Z(z[7])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'DaKa2']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'?:'],[[7],[3,'Daka2']],[1,false],[1,true]])
Z([[2,'?:'],[[7],[3,'Daka2']],[1,true],[1,false]])
Z(z[6])
Z(z[7])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'DaKa3']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'?:'],[[7],[3,'Daka3']],[1,false],[1,true]])
Z([[2,'?:'],[[7],[3,'Daka3']],[1,true],[1,false]])
Z(z[6])
Z(z[7])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'DaKa4']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'?:'],[[7],[3,'Daka4']],[1,false],[1,true]])
Z([[2,'?:'],[[7],[3,'Daka4']],[1,true],[1,false]])
Z(z[6])
Z(z[7])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'DaKa5']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'?:'],[[7],[3,'Daka5']],[1,false],[1,true]])
Z([[2,'?:'],[[7],[3,'Daka5']],[1,true],[1,false]])
Z(z[6])
Z(z[7])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'DaKa6']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'?:'],[[7],[3,'Daka6']],[1,false],[1,true]])
Z([[2,'?:'],[[7],[3,'Daka6']],[1,true],[1,false]])
Z(z[6])
Z(z[7])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'DaKa7']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'?:'],[[7],[3,'Daka7']],[1,false],[1,true]])
Z([[2,'?:'],[[7],[3,'Daka7']],[1,true],[1,false]])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'city-select'])
Z([3,'city-select-main'])
Z(z[1])
Z([[7],[3,'scrollTop']])
Z([3,'true'])
Z([[7],[3,'isSearch']])
Z([[2,'!'],[[7],[3,'serachCity']]])
Z([[7],[3,'serachCity']])
Z(z[6])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'Distribution'])
Z([[7],[3,'Distribution']])
Z([[7],[3,'Distributions']])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z(z[0])
Z(z[0])
Z([3,'mix-refresh-content'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'pageTouchstart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'pageTouchmove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'pageTouchend']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'transform:'],[[2,'+'],[[2,'+'],[1,'translateY('],[[7],[3,'pageDeviation']]],[1,'px)']]],[1,';']],[[2,'+'],[[2,'+'],[1,'transition:'],[[2,'+'],[[7],[3,'pageTransition']],[1,'s']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[2,'+'],[1,'calc(100vh - '],[[7],[3,'pageTop']]],[1,'px)']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'max-height:'],[[2,'+'],[[2,'+'],[1,'calc(100vh - '],[[7],[3,'pageTop']]],[1,'px)']]],[1,';']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'Kontent width-690 flex-column align-items background-f'])
Z([[7],[3,'xingxi1']])
Z([[7],[3,'xingxi2']])
Z([[7],[3,'xingxi3']])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'canvasId']])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'Ul flex'])
Z([3,'__e'])
Z([3,'li'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'festival']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'Festival1']])
Z(z[1])
Z(z[2])
Z(z[3])
Z([[7],[3,'Festival2']])
Z(z[1])
Z(z[2])
Z(z[3])
Z([[7],[3,'Festival3']])
Z(z[1])
Z(z[2])
Z(z[3])
Z([[7],[3,'Festival4']])
Z(z[1])
Z(z[2])
Z(z[3])
Z([[7],[3,'Festival5']])
Z(z[1])
Z(z[2])
Z(z[3])
Z([[7],[3,'Festival6']])
Z(z[1])
Z(z[2])
Z(z[3])
Z([[7],[3,'Festival7']])
Z(z[1])
Z(z[2])
Z(z[3])
Z([[7],[3,'Festival8']])
Z(z[1])
Z(z[2])
Z(z[3])
Z([[7],[3,'Festival9']])
Z(z[1])
Z(z[2])
Z(z[3])
Z([[7],[3,'Festival10']])
Z(z[1])
Z(z[2])
Z(z[3])
Z([[7],[3,'Festival11']])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'SetUp flex-column background-f align-items'])
Z([[7],[3,'remove1']])
Z([[7],[3,'remove2']])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'Analysis-content flex-column'])
Z([[2,'?:'],[[7],[3,'Profit']],[1,true],[1,false]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'arr']])
Z(z[2])
Z([3,'__l'])
Z([[7],[3,'cHeight']])
Z([[7],[3,'cWidth']])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([[6],[[7],[3,'item']],[3,'chartType']])
Z([3,'vue-ref-in-for'])
Z(z[9])
Z([[6],[[7],[3,'item']],[3,'extraType']])
Z([[6],[[7],[3,'item']],[3,'opts']])
Z([[6],[[6],[[7],[3,'item']],[3,'opts']],[3,'enableScroll']])
Z([[7],[3,'canvas']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z([[2,'?:'],[[7],[3,'Profit']],[1,false],[1,true]])
Z(z[2])
Z(z[3])
Z([[7],[3,'are']])
Z(z[2])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[9])
Z(z[13])
Z(z[14])
Z(z[15])
Z(z[16])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'Product flex-column  background-f border-top border-bottom'])
Z([3,'__e'])
Z([3,'product flex align-items space-between width-710 padding_10_14_0_26 border-bottom_dashed'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'imgA']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'img1']])
Z(z[1])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'imgB']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'img2']])
Z(z[1])
Z([3,'product flex align-items space-between width-710 padding_10_14_0_26 '])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'imgC']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'img3']])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'Chart flex align-items justify-content'])
Z([[2,'?:'],[[7],[3,'Img']],[1,false],[1,true]])
Z([[2,'?:'],[[7],[3,'Img']],[1,true],[1,false]])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'activeCity']])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^cityClick']],[[4],[[5],[[4],[[5],[1,'cityClick']]]]]]]]])
Z([3,'citys'])
Z([[7],[3,'formatName']])
Z([[7],[3,'hotCity']])
Z([1,true])
Z([[7],[3,'obtainCitys']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'commodity-container flex-column background-F0F4F7 height'])
Z([[7],[3,'Yes']])
Z([3,'__l'])
Z([3,'1'])
Z(z[2])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'staff flex-column height align-items background-F0F4F7'])
Z([[7],[3,'NoStaff']])
Z([3,'__l'])
Z([3,'1'])
Z(z[2])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([[7],[3,'Distribution']])
Z([3,'__l'])
Z([3,'1'])
Z([[7],[3,'delivery']])
Z(z[2])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
function gz$gwx_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx_41)return __WXML_GLOBAL__.ops_cached.$gwx_41
__WXML_GLOBAL__.ops_cached.$gwx_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_41);return __WXML_GLOBAL__.ops_cached.$gwx_41
}
function gz$gwx_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx_42)return __WXML_GLOBAL__.ops_cached.$gwx_42
__WXML_GLOBAL__.ops_cached.$gwx_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_42);return __WXML_GLOBAL__.ops_cached.$gwx_42
}
function gz$gwx_43(){
if( __WXML_GLOBAL__.ops_cached.$gwx_43)return __WXML_GLOBAL__.ops_cached.$gwx_43
__WXML_GLOBAL__.ops_cached.$gwx_43=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'Statistics-content flex-column flex-overflow'])
Z([[7],[3,'efficiency']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'arr']])
Z(z[2])
Z([3,'__l'])
Z([[7],[3,'cHeight']])
Z([[7],[3,'cWidth']])
Z([[6],[[7],[3,'item']],[3,'id']])
Z([[6],[[7],[3,'item']],[3,'chartType']])
Z([3,'Charts vue-ref-in-for'])
Z(z[9])
Z([[6],[[7],[3,'item']],[3,'extraType']])
Z([[6],[[7],[3,'item']],[3,'opts']])
Z([[6],[[6],[[7],[3,'item']],[3,'opts']],[3,'enableScroll']])
Z([[7],[3,'canvas']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z([[7],[3,'SalesVolume']])
Z(z[2])
Z(z[3])
Z([[7],[3,'are']])
Z(z[2])
Z(z[6])
Z([[7],[3,'uHeight']])
Z([[7],[3,'uWidth']])
Z(z[9])
Z(z[10])
Z(z[11])
Z(z[9])
Z(z[13])
Z(z[14])
Z(z[15])
Z(z[16])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
Z([[7],[3,'Complaint']])
Z(z[6])
Z([3,'3'])
Z([[7],[3,'evaluate']])
Z(z[6])
Z([3,'4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_43);return __WXML_GLOBAL__.ops_cached.$gwx_43
}
function gz$gwx_44(){
if( __WXML_GLOBAL__.ops_cached.$gwx_44)return __WXML_GLOBAL__.ops_cached.$gwx_44
__WXML_GLOBAL__.ops_cached.$gwx_44=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_44);return __WXML_GLOBAL__.ops_cached.$gwx_44
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/Complaint.wxml','./components/Delivery.wxml','./components/No.wxml','./components/Nostaff.wxml','./components/Yes.wxml','./components/YesStaff.wxml','./components/city-select/city-select.wxml','./components/distribution.wxml','./components/evaluate.wxml','./components/mix-advert/vue/mix-advert.wxml','./components/mix-load-more/mix-load-more.wxml','./components/mix-pulldown-refresh/mix-pulldown-refresh.wxml','./components/promotion.wxml','./components/transaction.wxml','./components/u-charts/u-charts.wxml','./pages/My/My.wxml','./pages/My/activity/Discount.wxml','./pages/My/activity/HolidaySale.wxml','./pages/My/activity/Promotion.wxml','./pages/My/activity/activity.wxml','./pages/My/activity/follow.wxml','./pages/My/capital/Analysis.wxml','./pages/My/capital/History.wxml','./pages/My/capital/Record.wxml','./pages/My/capital/capital.wxml','./pages/My/capital/income.wxml','./pages/My/capital/query.wxml','./pages/My/commodity/Model.wxml','./pages/My/commodity/addproduct.wxml','./pages/My/commodity/brand.wxml','./pages/My/commodity/commodity.wxml','./pages/My/group/Establish.wxml','./pages/My/group/See.wxml','./pages/My/group/group.wxml','./pages/My/group/modify.wxml','./pages/My/query/Information.wxml','./pages/My/query/query.wxml','./pages/My/staff/addstaff.wxml','./pages/My/staff/staff.wxml','./pages/Order/Order.wxml','./pages/Statistics/Complaint/Complaint.wxml','./pages/Statistics/Complaint/detailed.wxml','./pages/Statistics/Statistics.wxml','./pages/index/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,1,e,s,gg)){xC.wxVkey=1
}
var oD=_v()
_(oB,oD)
if(_oz(z,2,e,s,gg)){oD.wxVkey=1
}
xC.wxXCkey=1
oD.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var cF=_n('view')
_rz(z,cF,'class',0,e,s,gg)
var hG=_v()
_(cF,hG)
if(_oz(z,1,e,s,gg)){hG.wxVkey=1
}
var oH=_v()
_(cF,oH)
if(_oz(z,2,e,s,gg)){oH.wxVkey=1
}
hG.wxXCkey=1
oH.wxXCkey=1
_(r,cF)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var aL=_n('view')
_rz(z,aL,'class',0,e,s,gg)
var tM=_n('view')
_rz(z,tM,'class',1,e,s,gg)
var eN=_v()
_(tM,eN)
if(_oz(z,2,e,s,gg)){eN.wxVkey=1
}
var bO=_v()
_(tM,bO)
if(_oz(z,3,e,s,gg)){bO.wxVkey=1
}
eN.wxXCkey=1
bO.wxXCkey=1
_(aL,tM)
var oP=_n('view')
_rz(z,oP,'class',4,e,s,gg)
var xQ=_n('view')
_rz(z,xQ,'class',5,e,s,gg)
var oR=_v()
_(xQ,oR)
if(_oz(z,6,e,s,gg)){oR.wxVkey=1
}
var fS=_v()
_(xQ,fS)
if(_oz(z,7,e,s,gg)){fS.wxVkey=1
}
oR.wxXCkey=1
fS.wxXCkey=1
_(oP,xQ)
var cT=_n('view')
_rz(z,cT,'class',8,e,s,gg)
var hU=_v()
_(cT,hU)
if(_oz(z,9,e,s,gg)){hU.wxVkey=1
}
var oV=_v()
_(cT,oV)
if(_oz(z,10,e,s,gg)){oV.wxVkey=1
}
hU.wxXCkey=1
oV.wxXCkey=1
_(oP,cT)
_(aL,oP)
_(r,aL)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var oX=_n('view')
_rz(z,oX,'class',0,e,s,gg)
var aZ=_n('view')
_rz(z,aZ,'class',1,e,s,gg)
var t1=_v()
_(aZ,t1)
if(_oz(z,2,e,s,gg)){t1.wxVkey=1
}
var e2=_v()
_(aZ,e2)
if(_oz(z,3,e,s,gg)){e2.wxVkey=1
}
t1.wxXCkey=1
e2.wxXCkey=1
_(oX,aZ)
var lY=_v()
_(oX,lY)
if(_oz(z,4,e,s,gg)){lY.wxVkey=1
var b3=_n('view')
_rz(z,b3,'class',5,e,s,gg)
var o4=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],e,s,gg)
var x5=_v()
_(o4,x5)
if(_oz(z,9,e,s,gg)){x5.wxVkey=1
}
var o6=_v()
_(o4,o6)
if(_oz(z,10,e,s,gg)){o6.wxVkey=1
}
x5.wxXCkey=1
o6.wxXCkey=1
_(b3,o4)
var f7=_mz(z,'view',['bindtap',11,'class',1,'data-event-opts',2],[],e,s,gg)
var c8=_v()
_(f7,c8)
if(_oz(z,14,e,s,gg)){c8.wxVkey=1
}
var h9=_v()
_(f7,h9)
if(_oz(z,15,e,s,gg)){h9.wxVkey=1
}
c8.wxXCkey=1
h9.wxXCkey=1
_(b3,f7)
var o0=_mz(z,'view',['bindtap',16,'class',1,'data-event-opts',2],[],e,s,gg)
var cAB=_v()
_(o0,cAB)
if(_oz(z,19,e,s,gg)){cAB.wxVkey=1
}
var oBB=_v()
_(o0,oBB)
if(_oz(z,20,e,s,gg)){oBB.wxVkey=1
}
cAB.wxXCkey=1
oBB.wxXCkey=1
_(b3,o0)
var lCB=_mz(z,'view',['bindtap',21,'class',1,'data-event-opts',2],[],e,s,gg)
var aDB=_v()
_(lCB,aDB)
if(_oz(z,24,e,s,gg)){aDB.wxVkey=1
}
var tEB=_v()
_(lCB,tEB)
if(_oz(z,25,e,s,gg)){tEB.wxVkey=1
}
aDB.wxXCkey=1
tEB.wxXCkey=1
_(b3,lCB)
var eFB=_mz(z,'view',['bindtap',26,'class',1,'data-event-opts',2],[],e,s,gg)
var bGB=_v()
_(eFB,bGB)
if(_oz(z,29,e,s,gg)){bGB.wxVkey=1
}
var oHB=_v()
_(eFB,oHB)
if(_oz(z,30,e,s,gg)){oHB.wxVkey=1
}
bGB.wxXCkey=1
oHB.wxXCkey=1
_(b3,eFB)
var xIB=_mz(z,'view',['bindtap',31,'class',1,'data-event-opts',2],[],e,s,gg)
var oJB=_v()
_(xIB,oJB)
if(_oz(z,34,e,s,gg)){oJB.wxVkey=1
}
var fKB=_v()
_(xIB,fKB)
if(_oz(z,35,e,s,gg)){fKB.wxVkey=1
}
oJB.wxXCkey=1
fKB.wxXCkey=1
_(b3,xIB)
var cLB=_mz(z,'view',['bindtap',36,'class',1,'data-event-opts',2],[],e,s,gg)
var hMB=_v()
_(cLB,hMB)
if(_oz(z,39,e,s,gg)){hMB.wxVkey=1
}
var oNB=_v()
_(cLB,oNB)
if(_oz(z,40,e,s,gg)){oNB.wxVkey=1
}
hMB.wxXCkey=1
oNB.wxXCkey=1
_(b3,cLB)
_(lY,b3)
}
lY.wxXCkey=1
_(r,oX)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var oPB=_n('view')
_rz(z,oPB,'class',0,e,s,gg)
var aRB=_mz(z,'scroll-view',['class',1,'id',1,'scrollTop',2,'scrollY',3],[],e,s,gg)
var tSB=_v()
_(aRB,tSB)
if(_oz(z,5,e,s,gg)){tSB.wxVkey=1
}
var eTB=_v()
_(aRB,eTB)
if(_oz(z,6,e,s,gg)){eTB.wxVkey=1
}
var bUB=_v()
_(aRB,bUB)
if(_oz(z,7,e,s,gg)){bUB.wxVkey=1
}
tSB.wxXCkey=1
eTB.wxXCkey=1
bUB.wxXCkey=1
_(oPB,aRB)
var lQB=_v()
_(oPB,lQB)
if(_oz(z,8,e,s,gg)){lQB.wxVkey=1
}
lQB.wxXCkey=1
_(r,oPB)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var xWB=_n('view')
_rz(z,xWB,'class',0,e,s,gg)
var oXB=_v()
_(xWB,oXB)
if(_oz(z,1,e,s,gg)){oXB.wxVkey=1
}
var fYB=_v()
_(xWB,fYB)
if(_oz(z,2,e,s,gg)){fYB.wxVkey=1
}
oXB.wxXCkey=1
fYB.wxXCkey=1
_(r,xWB)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var o4B=_mz(z,'view',['bindtouchend',0,'bindtouchmove',1,'bindtouchstart',1,'class',2,'data-event-opts',3,'style',4],[],e,s,gg)
var l5B=_n('slot')
_(o4B,l5B)
_(r,o4B)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var t7B=_n('view')
_rz(z,t7B,'class',0,e,s,gg)
var e8B=_v()
_(t7B,e8B)
if(_oz(z,1,e,s,gg)){e8B.wxVkey=1
}
var b9B=_v()
_(t7B,b9B)
if(_oz(z,2,e,s,gg)){b9B.wxVkey=1
}
var o0B=_v()
_(t7B,o0B)
if(_oz(z,3,e,s,gg)){o0B.wxVkey=1
}
e8B.wxXCkey=1
b9B.wxXCkey=1
o0B.wxXCkey=1
_(r,t7B)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var fCC=_v()
_(r,fCC)
if(_oz(z,0,e,s,gg)){fCC.wxVkey=1
}
fCC.wxXCkey=1
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var oFC=_n('view')
_rz(z,oFC,'class',0,e,s,gg)
var cGC=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2],[],e,s,gg)
var oHC=_v()
_(cGC,oHC)
if(_oz(z,4,e,s,gg)){oHC.wxVkey=1
}
oHC.wxXCkey=1
_(oFC,cGC)
var lIC=_mz(z,'view',['bindtap',5,'class',1,'data-event-opts',2],[],e,s,gg)
var aJC=_v()
_(lIC,aJC)
if(_oz(z,8,e,s,gg)){aJC.wxVkey=1
}
aJC.wxXCkey=1
_(oFC,lIC)
var tKC=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2],[],e,s,gg)
var eLC=_v()
_(tKC,eLC)
if(_oz(z,12,e,s,gg)){eLC.wxVkey=1
}
eLC.wxXCkey=1
_(oFC,tKC)
var bMC=_mz(z,'view',['bindtap',13,'class',1,'data-event-opts',2],[],e,s,gg)
var oNC=_v()
_(bMC,oNC)
if(_oz(z,16,e,s,gg)){oNC.wxVkey=1
}
oNC.wxXCkey=1
_(oFC,bMC)
var xOC=_mz(z,'view',['bindtap',17,'class',1,'data-event-opts',2],[],e,s,gg)
var oPC=_v()
_(xOC,oPC)
if(_oz(z,20,e,s,gg)){oPC.wxVkey=1
}
oPC.wxXCkey=1
_(oFC,xOC)
var fQC=_mz(z,'view',['bindtap',21,'class',1,'data-event-opts',2],[],e,s,gg)
var cRC=_v()
_(fQC,cRC)
if(_oz(z,24,e,s,gg)){cRC.wxVkey=1
}
cRC.wxXCkey=1
_(oFC,fQC)
var hSC=_mz(z,'view',['bindtap',25,'class',1,'data-event-opts',2],[],e,s,gg)
var oTC=_v()
_(hSC,oTC)
if(_oz(z,28,e,s,gg)){oTC.wxVkey=1
}
oTC.wxXCkey=1
_(oFC,hSC)
var cUC=_mz(z,'view',['bindtap',29,'class',1,'data-event-opts',2],[],e,s,gg)
var oVC=_v()
_(cUC,oVC)
if(_oz(z,32,e,s,gg)){oVC.wxVkey=1
}
oVC.wxXCkey=1
_(oFC,cUC)
var lWC=_mz(z,'view',['bindtap',33,'class',1,'data-event-opts',2],[],e,s,gg)
var aXC=_v()
_(lWC,aXC)
if(_oz(z,36,e,s,gg)){aXC.wxVkey=1
}
aXC.wxXCkey=1
_(oFC,lWC)
var tYC=_mz(z,'view',['bindtap',37,'class',1,'data-event-opts',2],[],e,s,gg)
var eZC=_v()
_(tYC,eZC)
if(_oz(z,40,e,s,gg)){eZC.wxVkey=1
}
eZC.wxXCkey=1
_(oFC,tYC)
var b1C=_mz(z,'view',['bindtap',41,'class',1,'data-event-opts',2],[],e,s,gg)
var o2C=_v()
_(b1C,o2C)
if(_oz(z,44,e,s,gg)){o2C.wxVkey=1
}
o2C.wxXCkey=1
_(oFC,b1C)
_(r,oFC)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var o4C=_n('view')
_rz(z,o4C,'class',0,e,s,gg)
var f5C=_v()
_(o4C,f5C)
if(_oz(z,1,e,s,gg)){f5C.wxVkey=1
}
var c6C=_v()
_(o4C,c6C)
if(_oz(z,2,e,s,gg)){c6C.wxVkey=1
}
f5C.wxXCkey=1
c6C.wxXCkey=1
_(r,o4C)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var o8C=_mz(z,'promotion',['bind:__l',0,'vueId',1],[],e,s,gg)
_(r,o8C)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var aBD=_n('view')
_rz(z,aBD,'class',0,e,s,gg)
var tCD=_v()
_(aBD,tCD)
if(_oz(z,1,e,s,gg)){tCD.wxVkey=1
var bED=_v()
_(tCD,bED)
var oFD=function(oHD,xGD,fID,gg){
var hKD=_mz(z,'u-charts',['bind:__l',6,'cHeight',1,'cWidth',2,'canvasId',3,'chartType',4,'class',5,'data-ref',6,'extraType',7,'opts',8,'scroll',9,'show',10,'vueId',11],[],oHD,xGD,gg)
_(fID,hKD)
return fID
}
bED.wxXCkey=4
_2z(z,4,oFD,e,s,gg,bED,'item','index','index')
}
var eDD=_v()
_(aBD,eDD)
if(_oz(z,18,e,s,gg)){eDD.wxVkey=1
var oLD=_v()
_(eDD,oLD)
var cMD=function(lOD,oND,aPD,gg){
var eRD=_mz(z,'u-charts',['bind:__l',23,'cHeight',1,'cWidth',2,'canvasId',3,'chartType',4,'class',5,'data-ref',6,'extraType',7,'opts',8,'scroll',9,'show',10,'vueId',11],[],lOD,oND,gg)
_(aPD,eRD)
return aPD
}
oLD.wxXCkey=4
_2z(z,21,cMD,e,s,gg,oLD,'item','index','index')
}
tCD.wxXCkey=1
tCD.wxXCkey=3
eDD.wxXCkey=1
eDD.wxXCkey=3
_(r,aBD)
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var hYD=_n('view')
_rz(z,hYD,'class',0,e,s,gg)
var oZD=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2],[],e,s,gg)
var c1D=_v()
_(oZD,c1D)
if(_oz(z,4,e,s,gg)){c1D.wxVkey=1
}
c1D.wxXCkey=1
_(hYD,oZD)
var o2D=_mz(z,'view',['bindtap',5,'class',1,'data-event-opts',2],[],e,s,gg)
var l3D=_v()
_(o2D,l3D)
if(_oz(z,8,e,s,gg)){l3D.wxVkey=1
}
l3D.wxXCkey=1
_(hYD,o2D)
var a4D=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2],[],e,s,gg)
var t5D=_v()
_(a4D,t5D)
if(_oz(z,12,e,s,gg)){t5D.wxVkey=1
}
t5D.wxXCkey=1
_(hYD,a4D)
_(r,hYD)
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var b7D=_n('view')
_rz(z,b7D,'class',0,e,s,gg)
var o8D=_v()
_(b7D,o8D)
if(_oz(z,1,e,s,gg)){o8D.wxVkey=1
}
var x9D=_v()
_(b7D,x9D)
if(_oz(z,2,e,s,gg)){x9D.wxVkey=1
}
o8D.wxXCkey=1
x9D.wxXCkey=1
_(r,b7D)
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var fAE=_mz(z,'city-select',['activeCity',0,'bind:__l',1,'bind:cityClick',1,'class',2,'data-event-opts',3,'data-ref',4,'formatName',5,'hotCity',6,'isSearch',7,'obtainCitys',8,'vueId',9],[],e,s,gg)
_(r,fAE)
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var hCE=_n('view')
_rz(z,hCE,'class',0,e,s,gg)
var oDE=_v()
_(hCE,oDE)
if(_oz(z,1,e,s,gg)){oDE.wxVkey=1
var cEE=_mz(z,'no-commodity',['bind:__l',2,'vueId',1],[],e,s,gg)
_(oDE,cEE)
}
var oFE=_mz(z,'yes-commodity',['bind:__l',4,'vueId',1],[],e,s,gg)
_(hCE,oFE)
oDE.wxXCkey=1
oDE.wxXCkey=3
_(r,hCE)
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
return r
}
e_[x[35]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
var xME=_mz(z,'transaction',['bind:__l',0,'vueId',1],[],e,s,gg)
_(r,xME)
return r
}
e_[x[36]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
return r
}
e_[x[37]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
var cPE=_n('view')
_rz(z,cPE,'class',0,e,s,gg)
var hQE=_v()
_(cPE,hQE)
if(_oz(z,1,e,s,gg)){hQE.wxVkey=1
var oRE=_mz(z,'nostaff',['bind:__l',2,'vueId',1],[],e,s,gg)
_(hQE,oRE)
}
var cSE=_mz(z,'yes-staff',['bind:__l',4,'vueId',1],[],e,s,gg)
_(cPE,cSE)
hQE.wxXCkey=1
hQE.wxXCkey=3
_(r,cPE)
return r
}
e_[x[38]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
var lUE=_n('view')
_rz(z,lUE,'class',0,e,s,gg)
var aVE=_v()
_(lUE,aVE)
if(_oz(z,1,e,s,gg)){aVE.wxVkey=1
var eXE=_mz(z,'distribution',['bind:__l',2,'vueId',1],[],e,s,gg)
_(aVE,eXE)
}
var tWE=_v()
_(lUE,tWE)
if(_oz(z,4,e,s,gg)){tWE.wxVkey=1
var bYE=_mz(z,'delivery',['bind:__l',5,'vueId',1],[],e,s,gg)
_(tWE,bYE)
}
aVE.wxXCkey=1
aVE.wxXCkey=3
tWE.wxXCkey=1
tWE.wxXCkey=3
_(r,lUE)
return r
}
e_[x[39]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[40]]={}
var m40=function(e,s,r,gg){
var z=gz$gwx_41()
return r
}
e_[x[40]]={f:m40,j:[],i:[],ti:[],ic:[]}
d_[x[41]]={}
var m41=function(e,s,r,gg){
var z=gz$gwx_42()
return r
}
e_[x[41]]={f:m41,j:[],i:[],ti:[],ic:[]}
d_[x[42]]={}
var m42=function(e,s,r,gg){
var z=gz$gwx_43()
var f3E=_n('view')
_rz(z,f3E,'class',0,e,s,gg)
var c4E=_v()
_(f3E,c4E)
if(_oz(z,1,e,s,gg)){c4E.wxVkey=1
var o8E=_v()
_(c4E,o8E)
var l9E=function(tAF,a0E,eBF,gg){
var oDF=_mz(z,'u-charts',['bind:__l',6,'cHeight',1,'cWidth',2,'canvasId',3,'chartType',4,'class',5,'data-ref',6,'extraType',7,'opts',8,'scroll',9,'show',10,'vueId',11],[],tAF,a0E,gg)
_(eBF,oDF)
return eBF
}
o8E.wxXCkey=4
_2z(z,4,l9E,e,s,gg,o8E,'item','index','index')
}
var h5E=_v()
_(f3E,h5E)
if(_oz(z,18,e,s,gg)){h5E.wxVkey=1
var xEF=_v()
_(h5E,xEF)
var oFF=function(cHF,fGF,hIF,gg){
var cKF=_mz(z,'u-charts',['bind:__l',23,'cHeight',1,'cWidth',2,'canvasId',3,'chartType',4,'class',5,'data-ref',6,'extraType',7,'opts',8,'scroll',9,'show',10,'vueId',11],[],cHF,fGF,gg)
_(hIF,cKF)
return hIF
}
xEF.wxXCkey=4
_2z(z,21,oFF,e,s,gg,xEF,'item','index','index')
}
var o6E=_v()
_(f3E,o6E)
if(_oz(z,35,e,s,gg)){o6E.wxVkey=1
var oLF=_mz(z,'complaint',['bind:__l',36,'vueId',1],[],e,s,gg)
_(o6E,oLF)
}
var c7E=_v()
_(f3E,c7E)
if(_oz(z,38,e,s,gg)){c7E.wxVkey=1
var lMF=_mz(z,'evaluate',['bind:__l',39,'vueId',1],[],e,s,gg)
_(c7E,lMF)
}
c4E.wxXCkey=1
c4E.wxXCkey=3
h5E.wxXCkey=1
h5E.wxXCkey=3
o6E.wxXCkey=1
o6E.wxXCkey=3
c7E.wxXCkey=1
c7E.wxXCkey=3
_(r,f3E)
return r
}
e_[x[42]]={f:m42,j:[],i:[],ti:[],ic:[]}
d_[x[43]]={}
var m43=function(e,s,r,gg){
var z=gz$gwx_44()
return r
}
e_[x[43]]={f:m43,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/My/query/query","pages/My/staff/addstaff","pages/My/commodity/addproduct","pages/My/group/See","pages/My/group/modify","pages/Statistics/Statistics","pages/My/capital/Analysis","pages/My/activity/Discount","pages/Statistics/Complaint/Complaint","pages/Statistics/Complaint/detailed","pages/My/commodity/brand","pages/My/commodity/Model","pages/My/group/Establish","pages/My/activity/Promotion","pages/My/activity/HolidaySale","pages/My/activity/follow","pages/My/capital/History","pages/My/query/Information","pages/My/capital/query","pages/My/staff/staff","pages/My/My","pages/My/capital/capital","pages/My/activity/activity","pages/My/capital/Analysis","pages/My/capital/Record","pages/My/capital/income","pages/My/group/group","pages/Order/Order","pages/My/commodity/commodity"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"叮当送水联盟","navigationBarBackgroundColor":"#fff","backgroundColor":"#fff"},"tabBar":{"color":"#666","selectedColor":"#24A1FE","list":[{"iconPath":"/static/Order(1).png","selectedIconPath":"/static/Order.png","pagePath":"pages/Order/Order","text":"订单"},{"iconPath":"/static/Statistics.png","selectedIconPath":"/static/Statistics(1).png","pagePath":"pages/Statistics/Statistics","text":"统计"},{"iconPath":"/static/My(1).png","selectedIconPath":"/static/My.png","pagePath":"pages/My/My","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"水站","compilerVersion":"2.5.1","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/city-select/city-select.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/city-select/city-select.wxml']=$gwx('./components/city-select/city-select.wxml');

__wxAppCode__['components/Complaint.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/Complaint.wxml']=$gwx('./components/Complaint.wxml');

__wxAppCode__['components/Delivery.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/Delivery.wxml']=$gwx('./components/Delivery.wxml');

__wxAppCode__['components/distribution.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/distribution.wxml']=$gwx('./components/distribution.wxml');

__wxAppCode__['components/evaluate.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/evaluate.wxml']=$gwx('./components/evaluate.wxml');

__wxAppCode__['components/mix-advert/vue/mix-advert.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/mix-advert/vue/mix-advert.wxml']=$gwx('./components/mix-advert/vue/mix-advert.wxml');

__wxAppCode__['components/mix-load-more/mix-load-more.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/mix-load-more/mix-load-more.wxml']=$gwx('./components/mix-load-more/mix-load-more.wxml');

__wxAppCode__['components/mix-pulldown-refresh/mix-pulldown-refresh.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/mix-pulldown-refresh/mix-pulldown-refresh.wxml']=$gwx('./components/mix-pulldown-refresh/mix-pulldown-refresh.wxml');

__wxAppCode__['components/No.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/No.wxml']=$gwx('./components/No.wxml');

__wxAppCode__['components/Nostaff.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/Nostaff.wxml']=$gwx('./components/Nostaff.wxml');

__wxAppCode__['components/promotion.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/promotion.wxml']=$gwx('./components/promotion.wxml');

__wxAppCode__['components/transaction.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/transaction.wxml']=$gwx('./components/transaction.wxml');

__wxAppCode__['components/u-charts/u-charts.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/u-charts/u-charts.wxml']=$gwx('./components/u-charts/u-charts.wxml');

__wxAppCode__['components/Yes.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/Yes.wxml']=$gwx('./components/Yes.wxml');

__wxAppCode__['components/YesStaff.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/YesStaff.wxml']=$gwx('./components/YesStaff.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTitleText":"叮当送水联盟","usingComponents":{}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/My/activity/activity.json']={"navigationBarTitleText":"活动促销","usingComponents":{}};
__wxAppCode__['pages/My/activity/activity.wxml']=$gwx('./pages/My/activity/activity.wxml');

__wxAppCode__['pages/My/activity/Discount.json']={"navigationBarTitleText":"创建节日折扣","usingComponents":{}};
__wxAppCode__['pages/My/activity/Discount.wxml']=$gwx('./pages/My/activity/Discount.wxml');

__wxAppCode__['pages/My/activity/follow.json']={"navigationBarTitleText":"分享关注","usingComponents":{}};
__wxAppCode__['pages/My/activity/follow.wxml']=$gwx('./pages/My/activity/follow.wxml');

__wxAppCode__['pages/My/activity/HolidaySale.json']={"navigationBarTitleText":"节日促销","usingComponents":{}};
__wxAppCode__['pages/My/activity/HolidaySale.wxml']=$gwx('./pages/My/activity/HolidaySale.wxml');

__wxAppCode__['pages/My/activity/Promotion.json']={"navigationBarTitleText":"红包促销","usingComponents":{"promotion":"/components/promotion"}};
__wxAppCode__['pages/My/activity/Promotion.wxml']=$gwx('./pages/My/activity/Promotion.wxml');

__wxAppCode__['pages/My/capital/Analysis.json']={"navigationBarTitleText":"收入分析","usingComponents":{"u-charts":"/components/u-charts/u-charts"}};
__wxAppCode__['pages/My/capital/Analysis.wxml']=$gwx('./pages/My/capital/Analysis.wxml');

__wxAppCode__['pages/My/capital/capital.json']={"navigationBarTitleText":"资金管理","usingComponents":{}};
__wxAppCode__['pages/My/capital/capital.wxml']=$gwx('./pages/My/capital/capital.wxml');

__wxAppCode__['pages/My/capital/History.json']={"navigationBarTitleText":"历史收入","usingComponents":{}};
__wxAppCode__['pages/My/capital/History.wxml']=$gwx('./pages/My/capital/History.wxml');

__wxAppCode__['pages/My/capital/income.json']={"navigationBarTitleText":"收入明细","usingComponents":{}};
__wxAppCode__['pages/My/capital/income.wxml']=$gwx('./pages/My/capital/income.wxml');

__wxAppCode__['pages/My/capital/query.json']={"navigationBarTitleText":"详细查询","usingComponents":{}};
__wxAppCode__['pages/My/capital/query.wxml']=$gwx('./pages/My/capital/query.wxml');

__wxAppCode__['pages/My/capital/Record.json']={"navigationBarTitleText":"提现记录","usingComponents":{}};
__wxAppCode__['pages/My/capital/Record.wxml']=$gwx('./pages/My/capital/Record.wxml');

__wxAppCode__['pages/My/commodity/addproduct.json']={"navigationBarTitleText":"添加商品","usingComponents":{}};
__wxAppCode__['pages/My/commodity/addproduct.wxml']=$gwx('./pages/My/commodity/addproduct.wxml');

__wxAppCode__['pages/My/commodity/brand.json']={"navigationBarTitleText":"查询品牌","usingComponents":{"city-select":"/components/city-select/city-select"}};
__wxAppCode__['pages/My/commodity/brand.wxml']=$gwx('./pages/My/commodity/brand.wxml');

__wxAppCode__['pages/My/commodity/commodity.json']={"navigationBarTitleText":"商品管理","usingComponents":{"no-commodity":"/components/No","yes-commodity":"/components/Yes"}};
__wxAppCode__['pages/My/commodity/commodity.wxml']=$gwx('./pages/My/commodity/commodity.wxml');

__wxAppCode__['pages/My/commodity/Model.json']={"navigationBarTitleText":"添加型号","usingComponents":{}};
__wxAppCode__['pages/My/commodity/Model.wxml']=$gwx('./pages/My/commodity/Model.wxml');

__wxAppCode__['pages/My/group/Establish.json']={"navigationBarTitleText":"创建配送组","usingComponents":{}};
__wxAppCode__['pages/My/group/Establish.wxml']=$gwx('./pages/My/group/Establish.wxml');

__wxAppCode__['pages/My/group/group.json']={"navigationBarTitleText":"配送组管理","usingComponents":{}};
__wxAppCode__['pages/My/group/group.wxml']=$gwx('./pages/My/group/group.wxml');

__wxAppCode__['pages/My/group/modify.json']={"navigationBarTitleText":"修改组","usingComponents":{}};
__wxAppCode__['pages/My/group/modify.wxml']=$gwx('./pages/My/group/modify.wxml');

__wxAppCode__['pages/My/group/See.json']={"navigationBarTitleText":"查看组","usingComponents":{}};
__wxAppCode__['pages/My/group/See.wxml']=$gwx('./pages/My/group/See.wxml');

__wxAppCode__['pages/My/My.json']={"navigationBarTitleText":"我的","usingComponents":{}};
__wxAppCode__['pages/My/My.wxml']=$gwx('./pages/My/My.wxml');

__wxAppCode__['pages/My/query/Information.json']={"navigationBarTitleText":"订单","usingComponents":{}};
__wxAppCode__['pages/My/query/Information.wxml']=$gwx('./pages/My/query/Information.wxml');

__wxAppCode__['pages/My/query/query.json']={"navigationBarTitleText":"订单查询","usingComponents":{"transaction":"/components/transaction","mix-pulldown-refresh":"/components/mix-pulldown-refresh/mix-pulldown-refresh","mix-load-more":"/components/mix-load-more/mix-load-more","mix-advert":"/components/mix-advert/vue/mix-advert"}};
__wxAppCode__['pages/My/query/query.wxml']=$gwx('./pages/My/query/query.wxml');

__wxAppCode__['pages/My/staff/addstaff.json']={"navigationBarTitleText":"添加人员","usingComponents":{}};
__wxAppCode__['pages/My/staff/addstaff.wxml']=$gwx('./pages/My/staff/addstaff.wxml');

__wxAppCode__['pages/My/staff/staff.json']={"navigationBarTitleText":"员工管理","usingComponents":{"nostaff":"/components/Nostaff","yes-staff":"/components/YesStaff"}};
__wxAppCode__['pages/My/staff/staff.wxml']=$gwx('./pages/My/staff/staff.wxml');

__wxAppCode__['pages/Order/Order.json']={"navigationBarTitleText":"自动填入店铺名称","usingComponents":{"distribution":"/components/distribution","delivery":"/components/Delivery"}};
__wxAppCode__['pages/Order/Order.wxml']=$gwx('./pages/Order/Order.wxml');

__wxAppCode__['pages/Statistics/Complaint/Complaint.json']={"navigationBarTitleText":"投诉处置","usingComponents":{}};
__wxAppCode__['pages/Statistics/Complaint/Complaint.wxml']=$gwx('./pages/Statistics/Complaint/Complaint.wxml');

__wxAppCode__['pages/Statistics/Complaint/detailed.json']={"navigationBarTitleText":"投诉详细","usingComponents":{}};
__wxAppCode__['pages/Statistics/Complaint/detailed.wxml']=$gwx('./pages/Statistics/Complaint/detailed.wxml');

__wxAppCode__['pages/Statistics/Statistics.json']={"navigationBarTitleText":"统计","usingComponents":{"complaint":"/components/Complaint","evaluate":"/components/evaluate","u-charts":"/components/u-charts/u-charts"}};
__wxAppCode__['pages/Statistics/Statistics.wxml']=$gwx('./pages/Statistics/Statistics.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{1747:function(e,n,t){"use strict";var o=t("e6e6"),u=t.n(o);u.a},"30b4":function(e,n,t){"use strict";(function(e){t("431f"),t("921b");var n=u(t("66fd")),o=u(t("3119"));function u(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){c(e,n,t[n])})}return e}function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}n.default.config.productionTip=!1,o.default.mpType="app";var f=new n.default(r({},o.default));e(f).$mount()}).call(this,t("6e42")["createApp"])},3119:function(e,n,t){"use strict";t.r(n);var o=t("8f84");for(var u in o)"default"!==u&&function(e){t.d(n,e,function(){return o[e]})}(u);t("1747");var r,c,f,a,l=t("f0c5"),i=Object(l["a"])(o["default"],r,c,!1,null,null,null,!1,f,a);n["default"]=i.exports},"8f84":function(e,n,t){"use strict";t.r(n);var o=t("fee3"),u=t.n(o);for(var r in o)"default"!==r&&function(e){t.d(n,e,function(){return o[e]})}(r);n["default"]=u.a},e6e6:function(e,n,t){},fee3:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={onLaunch:function(){console.log(e("App Launch"," at App.vue:4"))},onShow:function(){console.log(e("App Show"," at App.vue:7"))},onHide:function(){console.log(e("App Hide"," at App.vue:10"))}};n.default=t}).call(this,t("0de9")["default"])}},[["30b4","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var o, r, i = t[0], a = t[1], m = t[2], p = 0, l = []; p < i.length; p++) {
      r = i[p], s[r] && l.push(s[r][0]), s[r] = 0;
    }

    for (o in a) {
      Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
    }

    u && u(t);

    while (l.length) {
      l.shift()();
    }

    return c.push.apply(c, m || []), n();
  }

  function n() {
    for (var e, t = 0; t < c.length; t++) {
      for (var n = c[t], o = !0, r = 1; r < n.length; r++) {
        var i = n[r];
        0 !== s[i] && (o = !1);
      }

      o && (c.splice(t--, 1), e = a(a.s = n[0]));
    }

    return e;
  }

  var o = {},
      r = {
    "common/runtime": 0
  },
      s = {
    "common/runtime": 0
  },
      c = [];

  function i(e) {
    return a.p + "" + e + ".js";
  }

  function a(t) {
    if (o[t]) return o[t].exports;
    var n = o[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, a), n.l = !0, n.exports;
  }

  a.e = function (e) {
    var t = [],
        n = {
      "components/mix-advert/vue/mix-advert": 1,
      "components/mix-pulldown-refresh/mix-pulldown-refresh": 1,
      "components/mix-load-more/mix-load-more": 1,
      "components/transaction": 1,
      "components/Complaint": 1,
      "components/evaluate": 1,
      "components/u-charts/u-charts": 1,
      "components/city-select/city-select": 1,
      "components/promotion": 1,
      "components/Nostaff": 1,
      "components/YesStaff": 1,
      "components/Delivery": 1,
      "components/distribution": 1,
      "components/No": 1,
      "components/Yes": 1
    };
    r[e] ? t.push(r[e]) : 0 !== r[e] && n[e] && t.push(r[e] = new Promise(function (t, n) {
      for (var o = ({
        "components/mix-advert/vue/mix-advert": "components/mix-advert/vue/mix-advert",
        "components/mix-pulldown-refresh/mix-pulldown-refresh": "components/mix-pulldown-refresh/mix-pulldown-refresh",
        "components/mix-load-more/mix-load-more": "components/mix-load-more/mix-load-more",
        "components/transaction": "components/transaction",
        "components/Complaint": "components/Complaint",
        "components/evaluate": "components/evaluate",
        "components/u-charts/u-charts": "components/u-charts/u-charts",
        "components/city-select/city-select": "components/city-select/city-select",
        "components/promotion": "components/promotion",
        "components/Nostaff": "components/Nostaff",
        "components/YesStaff": "components/YesStaff",
        "components/Delivery": "components/Delivery",
        "components/distribution": "components/distribution",
        "components/No": "components/No",
        "components/Yes": "components/Yes"
      }[e] || e) + ".wxss", s = a.p + o, c = document.getElementsByTagName("link"), i = 0; i < c.length; i++) {
        var m = c[i],
            p = m.getAttribute("data-href") || m.getAttribute("href");
        if ("stylesheet" === m.rel && (p === o || p === s)) return t();
      }

      var l = document.getElementsByTagName("style");

      for (i = 0; i < l.length; i++) {
        m = l[i], p = m.getAttribute("data-href");
        if (p === o || p === s) return t();
      }

      var u = document.createElement("link");
      u.rel = "stylesheet", u.type = "text/css", u.onload = t, u.onerror = function (t) {
        var o = t && t.target && t.target.src || s,
            c = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
        c.request = o, delete r[e], u.parentNode.removeChild(u), n(c);
      }, u.href = s;
      var f = document.getElementsByTagName("head")[0];
      f.appendChild(u);
    }).then(function () {
      r[e] = 0;
    }));
    var o = s[e];
    if (0 !== o) if (o) t.push(o[2]);else {
      var c = new Promise(function (t, n) {
        o = s[e] = [t, n];
      });
      t.push(o[2] = c);
      var m,
          p = document.createElement("script");
      p.charset = "utf-8", p.timeout = 120, a.nc && p.setAttribute("nonce", a.nc), p.src = i(e), m = function m(t) {
        p.onerror = p.onload = null, clearTimeout(l);
        var n = s[e];

        if (0 !== n) {
          if (n) {
            var o = t && ("load" === t.type ? "missing" : t.type),
                r = t && t.target && t.target.src,
                c = new Error("Loading chunk " + e + " failed.\n(" + o + ": " + r + ")");
            c.type = o, c.request = r, n[1](c);
          }

          s[e] = void 0;
        }
      };
      var l = setTimeout(function () {
        m({
          type: "timeout",
          target: p
        });
      }, 12e4);
      p.onerror = p.onload = m, document.head.appendChild(p);
    }
    return Promise.all(t);
  }, a.m = e, a.c = o, a.d = function (e, t, n) {
    a.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, a.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, a.t = function (e, t) {
    if (1 & t && (e = a(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (a.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      a.d(n, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return n;
  }, a.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return a.d(t, "a", t), t;
  }, a.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, a.p = "/", a.oe = function (e) {
    throw console.error(e), e;
  };
  var m = global["webpackJsonp"] = global["webpackJsonp"] || [],
      p = m.push.bind(m);
  m.push = t, m = m.slice();

  for (var l = 0; l < m.length; l++) {
    t(m[l]);
  }

  var u = p;
  n();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(t,e,n){"use strict";function i(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function r(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(r){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=i(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),o="";if(r.length>1){var a=r.pop();o=r.join("---COMMA---"),0===a.indexOf(" at ")?o+=a:o+="---COMMA---"+a}else o=r[0];return o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},"2a57":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={pages:{"pages/index/index":{navigationBarTitleText:"叮当送水联盟"},"pages/My/query/query":{navigationBarTitleText:"订单查询"},"pages/My/staff/addstaff":{navigationBarTitleText:"添加人员"},"pages/My/commodity/addproduct":{navigationBarTitleText:"添加商品"},"pages/My/group/See":{navigationBarTitleText:"查看组"},"pages/My/group/modify":{navigationBarTitleText:"修改组"},"pages/Statistics/Statistics":{navigationBarTitleText:"统计"},"pages/My/capital/Analysis":{navigationBarTitleText:"收入分析",usingComponents:{},usingAutoImportComponents:{}},"pages/My/activity/Discount":{navigationBarTitleText:"创建节日折扣"},"pages/Statistics/Complaint/Complaint":{navigationBarTitleText:"投诉处置"},"pages/Statistics/Complaint/detailed":{navigationBarTitleText:"投诉详细"},"pages/My/commodity/brand":{navigationBarTitleText:"查询品牌"},"pages/My/commodity/Model":{navigationBarTitleText:"添加型号"},"pages/My/group/Establish":{navigationBarTitleText:"创建配送组"},"pages/My/activity/Promotion":{navigationBarTitleText:"红包促销"},"pages/My/activity/HolidaySale":{navigationBarTitleText:"节日促销"},"pages/My/activity/follow":{navigationBarTitleText:"分享关注"},"pages/My/capital/History":{navigationBarTitleText:"历史收入"},"pages/My/query/Information":{navigationBarTitleText:"订单"},"pages/My/capital/query":{navigationBarTitleText:"详细查询"},"pages/My/staff/staff":{navigationBarTitleText:"员工管理"},"pages/My/My":{navigationBarTitleText:"我的"},"pages/My/capital/capital":{navigationBarTitleText:"资金管理"},"pages/My/activity/activity":{navigationBarTitleText:"活动促销"},"pages/My/capital/Record":{navigationBarTitleText:"提现记录"},"pages/My/capital/income":{navigationBarTitleText:"收入明细"},"pages/My/group/group":{navigationBarTitleText:"配送组管理"},"pages/Order/Order":{navigationBarTitleText:"自动填入店铺名称"},"pages/My/commodity/commodity":{navigationBarTitleText:"商品管理"}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"叮当送水联盟",navigationBarBackgroundColor:"#fff",backgroundColor:"#fff"}};e.default=i},"3e14":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=[{name:"一月",id:"1"},{name:"二月",id:"2"},{name:"三月",id:"3"},{name:"四月",id:"4"},{name:"五月",id:"5"},{name:"六月",id:"6"},{name:"七月",id:"7"},{name:"八月",id:"8"},{name:"九月",id:"9"},{name:"十月",id:"10"},{name:"十一月",id:"11"},{name:"十二月",id:"12"}],r=[{id:1,title:"从亲密无间到相爱相杀，这就是人类一败涂地的真相",author:"TapTap",images:["http://fc-feed.cdn.bcebos.com/0/pic/9107b498a0cbea000842763091e833b6.jpg","http://fc-feed.cdn.bcebos.com/0/pic/dc4b0610241d7016279f4f4652ea0886.jpg","http://fc-feed.cdn.bcebos.com/0/pic/0f6effa42536fb5c2ca945bd46c59335.jpg"],time:"2小时前",type:3},{id:2,title:"别再玩手机了，赶紧学前端，晚一年能少掉5根头发",author:"爱考过",images:["https://paimgcdn.baidu.com/v.777468F4BED7DDDA5B4958C671B07659?src=http%3A%2F%2Ffc-feed.cdn.bcebos.com%2F0%2Fpic%2F0bcc93ff9222cafa4526c980c17f69ec.jpg&rz=ar_3_370_245"],time:"30分钟前",type:1},{id:3,title:"将府公园成居民身边“大绿肺”",author:"新京报",images:["https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1692298215,2450965851&fm=15&gp=0.jpg"],time:"2小时前",type:3},{id:4,title:"骨傲天最偏爱的五位部下 这么多强者还比不过一只仓鼠",author:"神说要唱歌",images:["data:image/jpeg;base64,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"],videoSrc:"https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4",time:"2019-04-10 11:43",type:2},{id:5,title:"继国通倒下后，又一公司放弃快递业务，曾砸20亿战“三通一达”",author:"全球加盟网",images:["https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2892004605,2174659864&fm=26&gp=0.jpg"],videoSrc:"https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4",time:"5分钟前",type:3},{id:6,title:"奔驰车主哭诉维权续：双方再次协商无果",author:"环球网",images:[],time:"5分钟前",type:3},{id:7,title:"靠跑车激发潜能，奔驰Pro跑车首测，怎么那么像意大利跑车设计",author:"车品",images:["https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2133231534,4242817610&fm=173&app=49&f=JPEG?w=218&h=146&s=4FB42BC55E2A26076B2D1301030060C6","https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1276936674,3021787485&fm=173&app=49&f=JPEG?w=218&h=146&s=4FB02FC40B00064332AD45170300D0C7","https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1909353310,863816541&fm=173&app=49&f=JPEG?w=218&h=146&s=25F67E844C002445437DE8810300E0D3"],time:"2019-04-14 ：10:58",type:3},{id:8,title:"程序员浪漫起来有多可怕，看完这3段代码眼睛湿润了!",author:"车品",images:["http://p3-tt.bytecdn.cn/list/pgc-image/15394993934784aeea82ef5","http://p1-tt.bytecdn.cn/list/pgc-image/153949939338547b7a69cf6","http://p1-tt.bytecdn.cn/list/509a000211b25f210c77"],time:"2019-04-14 ：10:58",type:3}],o=[{src:"http://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/77c6a7efce1b9d1663174705fbdeb48f8d546486.jpg",nickname:"Ranth Allngal",time:"09-20 12:54",zan:"54",content:"评论不要太苛刻，不管什么产品都会有瑕疵，客服也说了可以退货并且商家承担运费，我觉得至少态度就可以给五星。"},{src:"http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg",nickname:"Ranth Allngal",time:"09-20 12:54",zan:"54",content:"楼上说的好有道理。"}],a={tabList:i,newsList:r,evaList:o};e.default=a},"431f":function(t,e,n){},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.11
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function i(t){return void 0===t||null===t}function r(t){return void 0!==t&&null!==t}function o(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function l(t){return null!==t&&"object"===typeof t}var c=Object.prototype.toString;function u(t){return"[object Object]"===c.call(t)}function p(t){return"[object RegExp]"===c.call(t)}function h(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function f(t){return r(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||u(t)&&t.toString===c?JSON.stringify(t,null,2):String(t)}function Y(t){var e=parseFloat(t);return isNaN(e)?t:e}function Z(t,e){for(var n=Object.create(null),i=t.split(","),r=0;r<i.length;r++)n[i[r]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}Z("slot,component",!0);var S=Z("key,ref,slot,slot-scope,is");function L(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var g=Object.prototype.hasOwnProperty;function v(t,e){return g.call(t,e)}function y(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var J=/-(\w)/g,T=y(function(t){return t.replace(J,function(t,e){return e?e.toUpperCase():""})}),X=y(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),C=/\B([A-Z])/g,x=y(function(t){return t.replace(C,"-$1").toLowerCase()});function m(t,e){function n(n){var i=arguments.length;return i?i>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function P(t,e){return t.bind(e)}var H=Function.prototype.bind?P:m;function D(t,e){e=e||0;var n=t.length-e,i=new Array(n);while(n--)i[n]=t[n+e];return i}function M(t,e){for(var n in e)t[n]=e[n];return t}function Q(t){for(var e={},n=0;n<t.length;n++)t[n]&&M(e,t[n]);return e}function b(t,e,n){}var B=function(t,e,n){return!1},A=function(t){return t};function F(t,e){if(t===e)return!0;var n=l(t),i=l(e);if(!n||!i)return!n&&!i&&String(t)===String(e);try{var r=Array.isArray(t),o=Array.isArray(e);if(r&&o)return t.length===e.length&&t.every(function(t,n){return F(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(r||o)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return F(t[n],e[n])})}catch(c){return!1}}function W(t,e){for(var n=0;n<t.length;n++)if(F(t[n],e))return n;return-1}function G(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var N=["component","directive","filter"],R=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],K={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:B,isReservedAttr:B,isUnknownElement:B,getTagNamespace:b,parsePlatformTagName:A,mustUseProp:B,async:!0,_lifecycleHooks:R},_=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function w(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function k(t,e,n,i){Object.defineProperty(t,e,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var E=new RegExp("[^"+_.source+".$_\\d]");function O(t){if(!E.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var j,I="__proto__"in{},U="undefined"!==typeof window,q="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,z=q&&WXEnvironment.platform.toLowerCase(),V=U&&window.navigator.userAgent.toLowerCase(),$=V&&/msie|trident/.test(V),tt=(V&&V.indexOf("msie 9.0"),V&&V.indexOf("edge/")>0),et=(V&&V.indexOf("android"),V&&/iphone|ipad|ipod|ios/.test(V)||"ios"===z),nt=(V&&/chrome\/\d+/.test(V),V&&/phantomjs/.test(V),V&&V.match(/firefox\/(\d+)/),{}.watch);if(U)try{var it={};Object.defineProperty(it,"passive",{get:function(){}}),window.addEventListener("test-passive",null,it)}catch(nr){}var rt=function(){return void 0===j&&(j=!U&&!q&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),j},ot=U&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,lt="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);st="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=b,ut=0,pt=function(){"undefined"!==typeof SharedObject?this.id=SharedObject.uid++:this.id=ut++,this.subs=[]};function ht(t){pt.SharedObject.targetStack.push(t),pt.SharedObject.target=t}function ft(){pt.SharedObject.targetStack.pop(),pt.SharedObject.target=pt.SharedObject.targetStack[pt.SharedObject.targetStack.length-1]}pt.prototype.addSub=function(t){this.subs.push(t)},pt.prototype.removeSub=function(t){L(this.subs,t)},pt.prototype.depend=function(){pt.SharedObject.target&&pt.SharedObject.target.addDep(this)},pt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},pt.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},pt.SharedObject.target=null,pt.SharedObject.targetStack=[];var dt=function(t,e,n,i,r,o,a,s){this.tag=t,this.data=e,this.children=n,this.text=i,this.elm=r,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Yt={child:{configurable:!0}};Yt.child.get=function(){return this.componentInstance},Object.defineProperties(dt.prototype,Yt);var Zt=function(t){void 0===t&&(t="");var e=new dt;return e.text=t,e.isComment=!0,e};function St(t){return new dt(void 0,void 0,void 0,String(t))}function Lt(t){var e=new dt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var gt=Array.prototype,vt=Object.create(gt),yt=["push","pop","shift","unshift","splice","sort","reverse"];yt.forEach(function(t){var e=gt[t];k(vt,t,function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];var r,o=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&a.observeArray(r),a.dep.notify(),o})});var Jt=Object.getOwnPropertyNames(vt),Tt=!0;function Xt(t){Tt=t}var Ct=function(t){this.value=t,this.dep=new pt,this.vmCount=0,k(t,"__ob__",this),Array.isArray(t)?(I?t.push!==t.__proto__.push?mt(t,vt,Jt):xt(t,vt):mt(t,vt,Jt),this.observeArray(t)):this.walk(t)};function xt(t,e){t.__proto__=e}function mt(t,e,n){for(var i=0,r=n.length;i<r;i++){var o=n[i];k(t,o,e[o])}}function Pt(t,e){var n;if(l(t)&&!(t instanceof dt))return v(t,"__ob__")&&t.__ob__ instanceof Ct?n=t.__ob__:Tt&&!rt()&&(Array.isArray(t)||u(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Ct(t)),e&&n&&n.vmCount++,n}function Ht(t,e,n,i,r){var o=new pt,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,l=a&&a.set;s&&!l||2!==arguments.length||(n=t[e]);var c=!r&&Pt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return pt.SharedObject.target&&(o.depend(),c&&(c.dep.depend(),Array.isArray(e)&&Qt(e))),e},set:function(e){var i=s?s.call(t):n;e===i||e!==e&&i!==i||s&&!l||(l?l.call(t,e):n=e,c=!r&&Pt(e),o.notify())}})}}function Dt(t,e,n){if(Array.isArray(t)&&h(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var i=t.__ob__;return t._isVue||i&&i.vmCount?n:i?(Ht(i.value,e,n),i.dep.notify(),n):(t[e]=n,n)}function Mt(t,e){if(Array.isArray(t)&&h(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||v(t,e)&&(delete t[e],n&&n.dep.notify())}}function Qt(t){for(var e=void 0,n=0,i=t.length;n<i;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Qt(e)}Ct.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Ht(t,e[n])},Ct.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Pt(t[e])};var bt=K.optionMergeStrategies;function Bt(t,e){if(!e)return t;for(var n,i,r,o=lt?Reflect.ownKeys(e):Object.keys(e),a=0;a<o.length;a++)n=o[a],"__ob__"!==n&&(i=t[n],r=e[n],v(t,n)?i!==r&&u(i)&&u(r)&&Bt(i,r):Dt(t,n,r));return t}function At(t,e,n){return n?function(){var i="function"===typeof e?e.call(n,n):e,r="function"===typeof t?t.call(n,n):t;return i?Bt(i,r):r}:e?t?function(){return Bt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Ft(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Wt(n):n}function Wt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Gt(t,e,n,i){var r=Object.create(t||null);return e?M(r,e):r}bt.data=function(t,e,n){return n?At(t,e,n):e&&"function"!==typeof e?t:At(t,e)},R.forEach(function(t){bt[t]=Ft}),N.forEach(function(t){bt[t+"s"]=Gt}),bt.watch=function(t,e,n,i){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var r={};for(var o in M(r,t),e){var a=r[o],s=e[o];a&&!Array.isArray(a)&&(a=[a]),r[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return r},bt.props=bt.methods=bt.inject=bt.computed=function(t,e,n,i){if(!t)return e;var r=Object.create(null);return M(r,t),e&&M(r,e),r},bt.provide=At;var Nt=function(t,e){return void 0===e?t:e};function Rt(t,e){var n=t.props;if(n){var i,r,o,a={};if(Array.isArray(n)){i=n.length;while(i--)r=n[i],"string"===typeof r&&(o=T(r),a[o]={type:null})}else if(u(n))for(var s in n)r=n[s],o=T(s),a[o]=u(r)?r:{type:r};else 0;t.props=a}}function Kt(t,e){var n=t.inject;if(n){var i=t.inject={};if(Array.isArray(n))for(var r=0;r<n.length;r++)i[n[r]]={from:n[r]};else if(u(n))for(var o in n){var a=n[o];i[o]=u(a)?M({from:o},a):{from:a}}else 0}}function _t(t){var e=t.directives;if(e)for(var n in e){var i=e[n];"function"===typeof i&&(e[n]={bind:i,update:i})}}function wt(t,e,n){if("function"===typeof e&&(e=e.options),Rt(e,n),Kt(e,n),_t(e),!e._base&&(e.extends&&(t=wt(t,e.extends,n)),e.mixins))for(var i=0,r=e.mixins.length;i<r;i++)t=wt(t,e.mixins[i],n);var o,a={};for(o in t)s(o);for(o in e)v(t,o)||s(o);function s(i){var r=bt[i]||Nt;a[i]=r(t[i],e[i],n,i)}return a}function kt(t,e,n,i){if("string"===typeof n){var r=t[e];if(v(r,n))return r[n];var o=T(n);if(v(r,o))return r[o];var a=X(o);if(v(r,a))return r[a];var s=r[n]||r[o]||r[a];return s}}function Et(t,e,n,i){var r=e[t],o=!v(n,t),a=n[t],s=Ut(Boolean,r.type);if(s>-1)if(o&&!v(r,"default"))a=!1;else if(""===a||a===x(t)){var l=Ut(String,r.type);(l<0||s<l)&&(a=!0)}if(void 0===a){a=Ot(i,r,t);var c=Tt;Xt(!0),Pt(a),Xt(c)}return a}function Ot(t,e,n){if(v(e,"default")){var i=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof i&&"Function"!==jt(e.type)?i.call(t):i}}function jt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function It(t,e){return jt(t)===jt(e)}function Ut(t,e){if(!Array.isArray(e))return It(e,t)?0:-1;for(var n=0,i=e.length;n<i;n++)if(It(e[n],t))return n;return-1}function qt(t,e,n){ht();try{if(e){var i=e;while(i=i.$parent){var r=i.$options.errorCaptured;if(r)for(var o=0;o<r.length;o++)try{var a=!1===r[o].call(i,t,e,n);if(a)return}catch(nr){Vt(nr,i,"errorCaptured hook")}}}Vt(t,e,n)}finally{ft()}}function zt(t,e,n,i,r){var o;try{o=n?t.apply(e,n):t.call(e),o&&!o._isVue&&f(o)&&!o._handled&&(o.catch(function(t){return qt(t,i,r+" (Promise/async)")}),o._handled=!0)}catch(nr){qt(nr,i,r)}return o}function Vt(t,e,n){if(K.errorHandler)try{return K.errorHandler.call(null,t,e,n)}catch(nr){nr!==t&&$t(nr,null,"config.errorHandler")}$t(t,e,n)}function $t(t,e,n){if(!U&&!q||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function ie(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var re=Promise.resolve();te=function(){re.then(ie),et&&setTimeout(b)}}else if($||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(ie)}:function(){setTimeout(ie,0)};else{var oe=1,ae=new MutationObserver(ie),se=document.createTextNode(String(oe));ae.observe(se,{characterData:!0}),te=function(){oe=(oe+1)%2,se.data=String(oe)}}function le(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(nr){qt(nr,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ce=new st;function ue(t){pe(t,ce),ce.clear()}function pe(t,e){var n,i,r=Array.isArray(t);if(!(!r&&!l(t)||Object.isFrozen(t)||t instanceof dt)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(r){n=t.length;while(n--)pe(t[n],e)}else{i=Object.keys(t),n=i.length;while(n--)pe(t[i[n]],e)}}}var he=y(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var i="!"===t.charAt(0);return t=i?t.slice(1):t,{name:t,once:n,capture:i,passive:e}});function fe(t,e){function n(){var t=arguments,i=n.fns;if(!Array.isArray(i))return zt(i,null,arguments,e,"v-on handler");for(var r=i.slice(),o=0;o<r.length;o++)zt(r[o],null,t,e,"v-on handler")}return n.fns=t,n}function de(t,e,n,r,a,s){var l,c,u,p;for(l in t)c=t[l],u=e[l],p=he(l),i(c)||(i(u)?(i(c.fns)&&(c=t[l]=fe(c,s)),o(p.once)&&(c=t[l]=a(p.name,c,p.capture)),n(p.name,c,p.capture,p.passive,p.params)):c!==u&&(u.fns=c,t[l]=u));for(l in e)i(t[l])&&(p=he(l),r(p.name,e[l],p.capture))}function Ye(t,e,n,o){var a=e.options.mpOptions&&e.options.mpOptions.properties;if(i(a))return n;var s=e.options.mpOptions.externalClasses||[],l=t.attrs,c=t.props;if(r(l)||r(c))for(var u in a){var p=x(u),h=Se(n,c,u,p,!0)||Se(n,l,u,p,!1);h&&n[u]&&-1!==s.indexOf(p)&&o[T(n[u])]&&(n[u]=o[T(n[u])])}return n}function Ze(t,e,n,o){var a=e.options.props;if(i(a))return Ye(t,e,{},o);var s={},l=t.attrs,c=t.props;if(r(l)||r(c))for(var u in a){var p=x(u);Se(s,c,u,p,!0)||Se(s,l,u,p,!1)}return Ye(t,e,s,o)}function Se(t,e,n,i,o){if(r(e)){if(v(e,n))return t[n]=e[n],o||delete e[n],!0;if(v(e,i))return t[n]=e[i],o||delete e[i],!0}return!1}function Le(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function ge(t){return s(t)?[St(t)]:Array.isArray(t)?ye(t):void 0}function ve(t){return r(t)&&r(t.text)&&a(t.isComment)}function ye(t,e){var n,a,l,c,u=[];for(n=0;n<t.length;n++)a=t[n],i(a)||"boolean"===typeof a||(l=u.length-1,c=u[l],Array.isArray(a)?a.length>0&&(a=ye(a,(e||"")+"_"+n),ve(a[0])&&ve(c)&&(u[l]=St(c.text+a[0].text),a.shift()),u.push.apply(u,a)):s(a)?ve(c)?u[l]=St(c.text+a):""!==a&&u.push(St(a)):ve(a)&&ve(c)?u[l]=St(c.text+a.text):(o(t._isVList)&&r(a.tag)&&i(a.key)&&r(e)&&(a.key="__vlist"+e+"_"+n+"__"),u.push(a)));return u}function Je(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Te(t){var e=Xe(t.$options.inject,t);e&&(Xt(!1),Object.keys(e).forEach(function(n){Ht(t,n,e[n])}),Xt(!0))}function Xe(t,e){if(t){for(var n=Object.create(null),i=lt?Reflect.ownKeys(t):Object.keys(t),r=0;r<i.length;r++){var o=i[r];if("__ob__"!==o){var a=t[o].from,s=e;while(s){if(s._provided&&v(s._provided,a)){n[o]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[o]){var l=t[o].default;n[o]="function"===typeof l?l.call(e):l}else 0}}return n}}function Ce(t,e){if(!t||!t.length)return{};for(var n={},i=0,r=t.length;i<r;i++){var o=t[i],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==e&&o.fnContext!==e||!a||null==a.slot)o.asyncMeta&&o.asyncMeta.data&&"page"===o.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(o):(n.default||(n.default=[])).push(o);else{var s=a.slot,l=n[s]||(n[s]=[]);"template"===o.tag?l.push.apply(l,o.children||[]):l.push(o)}}for(var c in n)n[c].every(xe)&&delete n[c];return n}function xe(t){return t.isComment&&!t.asyncFactory||" "===t.text}function me(t,e,i){var r,o=Object.keys(e).length>0,a=t?!!t.$stable:!o,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&i&&i!==n&&s===i.$key&&!o&&!i.$hasNormal)return i;for(var l in r={},t)t[l]&&"$"!==l[0]&&(r[l]=Pe(e,l,t[l]))}else r={};for(var c in e)c in r||(r[c]=He(e,c));return t&&Object.isExtensible(t)&&(t._normalized=r),k(r,"$stable",a),k(r,"$key",s),k(r,"$hasNormal",o),r}function Pe(t,e,n){var i=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:ge(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:i,enumerable:!0,configurable:!0}),i}function He(t,e){return function(){return t[e]}}function De(t,e){var n,i,o,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),i=0,o=t.length;i<o;i++)n[i]=e(t[i],i,i,i);else if("number"===typeof t)for(n=new Array(t),i=0;i<t;i++)n[i]=e(i+1,i,i,i);else if(l(t))if(lt&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),u=c.next();while(!u.done)n.push(e(u.value,n.length,i++,i)),u=c.next()}else for(a=Object.keys(t),n=new Array(a.length),i=0,o=a.length;i<o;i++)s=a[i],n[i]=e(t[s],s,i,i);return r(n)||(n=[]),n._isVList=!0,n}function Me(t,e,n,i){var r,o=this.$scopedSlots[t];o?(n=n||{},i&&(n=M(M({},i),n)),r=o(n,this,n._i)||e):r=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},r):r}function Qe(t){return kt(this.$options,"filters",t,!0)||A}function be(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Be(t,e,n,i,r){var o=K.keyCodes[e]||n;return r&&i&&!K.keyCodes[e]?be(r,i):o?be(o,t):i?x(i)!==e:void 0}function Ae(t,e,n,i,r){if(n)if(l(n)){var o;Array.isArray(n)&&(n=Q(n));var a=function(a){if("class"===a||"style"===a||S(a))o=t;else{var s=t.attrs&&t.attrs.type;o=i||K.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var l=T(a),c=x(a);if(!(l in o)&&!(c in o)&&(o[a]=n[a],r)){var u=t.on||(t.on={});u["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Fe(t,e){var n=this._staticTrees||(this._staticTrees=[]),i=n[t];return i&&!e?i:(i=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Ge(i,"__static__"+t,!1),i)}function We(t,e,n){return Ge(t,"__once__"+e+(n?"_"+n:""),!0),t}function Ge(t,e,n){if(Array.isArray(t))for(var i=0;i<t.length;i++)t[i]&&"string"!==typeof t[i]&&Ne(t[i],e+"_"+i,n);else Ne(t,e,n)}function Ne(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Re(t,e){if(e)if(u(e)){var n=t.on=t.on?M({},t.on):{};for(var i in e){var r=n[i],o=e[i];n[i]=r?[].concat(r,o):o}}else;return t}function Ke(t,e,n,i){e=e||{$stable:!n};for(var r=0;r<t.length;r++){var o=t[r];Array.isArray(o)?Ke(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return i&&(e.$key=i),e}function _e(t,e){for(var n=0;n<e.length;n+=2){var i=e[n];"string"===typeof i&&i&&(t[e[n]]=e[n+1])}return t}function we(t,e){return"string"===typeof t?e+t:t}function ke(t){t._o=We,t._n=Y,t._s=d,t._l=De,t._t=Me,t._q=F,t._i=W,t._m=Fe,t._f=Qe,t._k=Be,t._b=Ae,t._v=St,t._e=Zt,t._u=Ke,t._g=Re,t._d=_e,t._p=we}function Ee(t,e,i,r,a){var s,l=this,c=a.options;v(r,"_uid")?(s=Object.create(r),s._original=r):(s=r,r=r._original);var u=o(c._compiled),p=!u;this.data=t,this.props=e,this.children=i,this.parent=r,this.listeners=t.on||n,this.injections=Xe(c.inject,r),this.slots=function(){return l.$slots||me(t.scopedSlots,l.$slots=Ce(i,r)),l.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return me(t.scopedSlots,this.slots())}}),u&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=me(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,n,i){var o=on(s,t,e,n,i,p);return o&&!Array.isArray(o)&&(o.fnScopeId=c._scopeId,o.fnContext=r),o}:this._c=function(t,e,n,i){return on(s,t,e,n,i,p)}}function Oe(t,e,i,o,a){var s=t.options,l={},c=s.props;if(r(c))for(var u in c)l[u]=Et(u,c,e||n);else r(i.attrs)&&Ie(l,i.attrs),r(i.props)&&Ie(l,i.props);var p=new Ee(i,l,a,o,t),h=s.render.call(null,p._c,p);if(h instanceof dt)return je(h,i,p.parent,s,p);if(Array.isArray(h)){for(var f=ge(h)||[],d=new Array(f.length),Y=0;Y<f.length;Y++)d[Y]=je(f[Y],i,p.parent,s,p);return d}}function je(t,e,n,i,r){var o=Lt(t);return o.fnContext=n,o.fnOptions=i,e.slot&&((o.data||(o.data={})).slot=e.slot),o}function Ie(t,e){for(var n in e)t[T(n)]=e[n]}ke(Ee.prototype);var Ue={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Ue.prepatch(n,n)}else{var i=t.componentInstance=Ve(t,Xn);i.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,i=e.componentInstance=t.componentInstance;Pn(i,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(Qn(n,"onServiceCreated"),Qn(n,"onServiceAttached"),n._isMounted=!0,Qn(n,"mounted")),t.data.keepAlive&&(e._isMounted?kn(n):Dn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Mn(e,!0):e.$destroy())}},qe=Object.keys(Ue);function ze(t,e,n,a,s){if(!i(t)){var c=n.$options._base;if(l(t)&&(t=c.extend(t)),"function"===typeof t){var u;if(i(t.cid)&&(u=t,t=Yn(u,c),void 0===t))return dn(u,e,n,a,s);e=e||{},fi(t),r(e.model)&&en(t.options,e);var p=Ze(e,t,s,n);if(o(t.options.functional))return Oe(t,p,e,n,a);var h=e.on;if(e.on=e.nativeOn,o(t.options.abstract)){var f=e.slot;e={},f&&(e.slot=f)}$e(e);var d=t.options.name||s,Y=new dt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:p,listeners:h,tag:s,children:a},u);return Y}}}function Ve(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},i=t.data.inlineTemplate;return r(i)&&(n.render=i.render,n.staticRenderFns=i.staticRenderFns),new t.componentOptions.Ctor(n)}function $e(t){for(var e=t.hook||(t.hook={}),n=0;n<qe.length;n++){var i=qe[n],r=e[i],o=Ue[i];r===o||r&&r._merged||(e[i]=r?tn(o,r):o)}}function tn(t,e){var n=function(n,i){t(n,i),e(n,i)};return n._merged=!0,n}function en(t,e){var n=t.model&&t.model.prop||"value",i=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var o=e.on||(e.on={}),a=o[i],s=e.model.callback;r(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(o[i]=[s].concat(a)):o[i]=s}var nn=1,rn=2;function on(t,e,n,i,r,a){return(Array.isArray(n)||s(n))&&(r=i,i=n,n=void 0),o(a)&&(r=rn),an(t,e,n,i,r)}function an(t,e,n,i,o){if(r(n)&&r(n.__ob__))return Zt();if(r(n)&&r(n.is)&&(e=n.is),!e)return Zt();var a,s,l;(Array.isArray(i)&&"function"===typeof i[0]&&(n=n||{},n.scopedSlots={default:i[0]},i.length=0),o===rn?i=ge(i):o===nn&&(i=Le(i)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||K.getTagNamespace(e),a=K.isReservedTag(e)?new dt(K.parsePlatformTagName(e),n,i,void 0,void 0,t):n&&n.pre||!r(l=kt(t.$options,"components",e))?new dt(e,n,i,void 0,void 0,t):ze(l,n,t,i,e)):a=ze(e,n,t,i);return Array.isArray(a)?a:r(a)?(r(s)&&sn(a,s),r(n)&&ln(n),a):Zt()}function sn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),r(t.children))for(var a=0,s=t.children.length;a<s;a++){var l=t.children[a];r(l.tag)&&(i(l.ns)||o(n)&&"svg"!==l.tag)&&sn(l,e,n)}}function ln(t){l(t.style)&&ue(t.style),l(t.class)&&ue(t.class)}function cn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,i=t.$vnode=e._parentVnode,r=i&&i.context;t.$slots=Ce(e._renderChildren,r),t.$scopedSlots=n,t._c=function(e,n,i,r){return on(t,e,n,i,r,!1)},t.$createElement=function(e,n,i,r){return on(t,e,n,i,r,!0)};var o=i&&i.data;Ht(t,"$attrs",o&&o.attrs||n,null,!0),Ht(t,"$listeners",e._parentListeners||n,null,!0)}var un,pn=null;function hn(t){ke(t.prototype),t.prototype.$nextTick=function(t){return le(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,i=n.render,r=n._parentVnode;r&&(e.$scopedSlots=me(r.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=r;try{pn=e,t=i.call(e._renderProxy,e.$createElement)}catch(nr){qt(nr,e,"render"),t=e._vnode}finally{pn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof dt||(t=Zt()),t.parent=r,t}}function fn(t,e){return(t.__esModule||lt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),l(t)?e.extend(t):t}function dn(t,e,n,i,r){var o=Zt();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:i,tag:r},o}function Yn(t,e){if(o(t.error)&&r(t.errorComp))return t.errorComp;if(r(t.resolved))return t.resolved;var n=pn;if(n&&r(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),o(t.loading)&&r(t.loadingComp))return t.loadingComp;if(n&&!r(t.owners)){var a=t.owners=[n],s=!0,c=null,u=null;n.$on("hook:destroyed",function(){return L(a,n)});var p=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null))},h=G(function(n){t.resolved=fn(n,e),s?a.length=0:p(!0)}),d=G(function(e){r(t.errorComp)&&(t.error=!0,p(!0))}),Y=t(h,d);return l(Y)&&(f(Y)?i(t.resolved)&&Y.then(h,d):f(Y.component)&&(Y.component.then(h,d),r(Y.error)&&(t.errorComp=fn(Y.error,e)),r(Y.loading)&&(t.loadingComp=fn(Y.loading,e),0===Y.delay?t.loading=!0:c=setTimeout(function(){c=null,i(t.resolved)&&i(t.error)&&(t.loading=!0,p(!1))},Y.delay||200)),r(Y.timeout)&&(u=setTimeout(function(){u=null,i(t.resolved)&&d(null)},Y.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function Zn(t){return t.isComment&&t.asyncFactory}function Sn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(r(n)&&(r(n.componentOptions)||Zn(n)))return n}}function Ln(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&Jn(t,e)}function gn(t,e){un.$on(t,e)}function vn(t,e){un.$off(t,e)}function yn(t,e){var n=un;return function i(){var r=e.apply(null,arguments);null!==r&&n.$off(t,i)}}function Jn(t,e,n){un=t,de(e,n||{},gn,vn,yn,t),un=void 0}function Tn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var i=this;if(Array.isArray(t))for(var r=0,o=t.length;r<o;r++)i.$on(t[r],n);else(i._events[t]||(i._events[t]=[])).push(n),e.test(t)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(t,e){var n=this;function i(){n.$off(t,i),e.apply(n,arguments)}return i.fn=e,n.$on(t,i),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var i=0,r=t.length;i<r;i++)n.$off(t[i],e);return n}var o,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(o=a[s],o===e||o.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?D(n):n;for(var i=D(arguments,1),r='event handler for "'+t+'"',o=0,a=n.length;o<a;o++)zt(n[o],e,i,e,r)}return e}}var Xn=null;function Cn(t){var e=Xn;return Xn=t,function(){Xn=e}}function xn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function mn(t){t.prototype._update=function(t,e){var n=this,i=n.$el,r=n._vnode,o=Cn(n);n._vnode=t,n.$el=r?n.__patch__(r,t):n.__patch__(n.$el,t,e,!1),o(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Qn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||L(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Qn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Pn(t,e,i,r,o){var a=r.data.scopedSlots,s=t.$scopedSlots,l=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),c=!!(o||t.$options._renderChildren||l);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=o,t.$attrs=r.data.attrs||n,t.$listeners=i||n,e&&t.$options.props){Xt(!1);for(var u=t._props,p=t.$options._propKeys||[],h=0;h<p.length;h++){var f=p[h],d=t.$options.props;u[f]=Et(f,d,e,t)}Xt(!0),t.$options.propsData=e}t._$updateProperties&&t._$updateProperties(t),i=i||n;var Y=t.$options._parentListeners;t.$options._parentListeners=i,Jn(t,i,Y),c&&(t.$slots=Ce(o,r.context),t.$forceUpdate())}function Hn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Dn(t,e){if(e){if(t._directInactive=!1,Hn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Dn(t.$children[n]);Qn(t,"activated")}}function Mn(t,e){if((!e||(t._directInactive=!0,!Hn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Mn(t.$children[n]);Qn(t,"deactivated")}}function Qn(t,e){ht();var n=t.$options[e],i=e+" hook";if(n)for(var r=0,o=n.length;r<o;r++)zt(n[r],t,null,t,i);t._hasHookEvent&&t.$emit("hook:"+e),ft()}var bn=[],Bn=[],An={},Fn=!1,Wn=!1,Gn=0;function Nn(){Gn=bn.length=Bn.length=0,An={},Fn=Wn=!1}var Rn=Date.now;if(U&&!$){var Kn=window.performance;Kn&&"function"===typeof Kn.now&&Rn()>document.createEvent("Event").timeStamp&&(Rn=function(){return Kn.now()})}function _n(){var t,e;for(Rn(),Wn=!0,bn.sort(function(t,e){return t.id-e.id}),Gn=0;Gn<bn.length;Gn++)t=bn[Gn],t.before&&t.before(),e=t.id,An[e]=null,t.run();var n=Bn.slice(),i=bn.slice();Nn(),En(n),wn(i),ot&&K.devtools&&ot.emit("flush")}function wn(t){var e=t.length;while(e--){var n=t[e],i=n.vm;i._watcher===n&&i._isMounted&&!i._isDestroyed&&Qn(i,"updated")}}function kn(t){t._inactive=!1,Bn.push(t)}function En(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Dn(t[e],!0)}function On(t){var e=t.id;if(null==An[e]){if(An[e]=!0,Wn){var n=bn.length-1;while(n>Gn&&bn[n].id>t.id)n--;bn.splice(n+1,0,t)}else bn.push(t);Fn||(Fn=!0,le(_n))}}var jn=0,In=function(t,e,n,i,r){this.vm=t,r&&(t._watcher=this),t._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++jn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=O(e),this.getter||(this.getter=b)),this.value=this.lazy?void 0:this.get()};In.prototype.get=function(){var t;ht(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(nr){if(!this.user)throw nr;qt(nr,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ue(t),ft(),this.cleanupDeps()}return t},In.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},In.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},In.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():On(this)},In.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||l(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(nr){qt(nr,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},In.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},In.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},In.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||L(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Un={enumerable:!0,configurable:!0,get:b,set:b};function qn(t,e,n){Un.get=function(){return this[e][n]},Un.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Un)}function zn(t){t._watchers=[];var e=t.$options;e.props&&Vn(t,e.props),e.methods&&ai(t,e.methods),e.data?$n(t):Pt(t._data={},!0),e.computed&&ni(t,e.computed),e.watch&&e.watch!==nt&&si(t,e.watch)}function Vn(t,e){var n=t.$options.propsData||{},i=t._props={},r=t.$options._propKeys=[],o=!t.$parent;o||Xt(!1);var a=function(o){r.push(o);var a=Et(o,e,n,t);Ht(i,o,a),o in t||qn(t,"_props",o)};for(var s in e)a(s);Xt(!0)}function $n(t){var e=t.$options.data;e=t._data="function"===typeof e?ti(e,t):e||{},u(e)||(e={});var n=Object.keys(e),i=t.$options.props,r=(t.$options.methods,n.length);while(r--){var o=n[r];0,i&&v(i,o)||w(o)||qn(t,"_data",o)}Pt(e,!0)}function ti(t,e){ht();try{return t.call(e,e)}catch(nr){return qt(nr,e,"data()"),{}}finally{ft()}}var ei={lazy:!0};function ni(t,e){var n=t._computedWatchers=Object.create(null),i=rt();for(var r in e){var o=e[r],a="function"===typeof o?o:o.get;0,i||(n[r]=new In(t,a||b,b,ei)),r in t||ii(t,r,o)}}function ii(t,e,n){var i=!rt();"function"===typeof n?(Un.get=i?ri(e):oi(n),Un.set=b):(Un.get=n.get?i&&!1!==n.cache?ri(e):oi(n.get):b,Un.set=n.set||b),Object.defineProperty(t,e,Un)}function ri(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),pt.SharedObject.target&&e.depend(),e.value}}function oi(t){return function(){return t.call(this,this)}}function ai(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?b:H(e[n],t)}function si(t,e){for(var n in e){var i=e[n];if(Array.isArray(i))for(var r=0;r<i.length;r++)li(t,n,i[r]);else li(t,n,i)}}function li(t,e,n,i){return u(n)&&(i=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,i)}function ci(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Dt,t.prototype.$delete=Mt,t.prototype.$watch=function(t,e,n){var i=this;if(u(e))return li(i,t,e,n);n=n||{},n.user=!0;var r=new In(i,t,e,n);if(n.immediate)try{e.call(i,r.value)}catch(o){qt(o,i,'callback for immediate watcher "'+r.expression+'"')}return function(){r.teardown()}}}var ui=0;function pi(t){t.prototype._init=function(t){var e=this;e._uid=ui++,e._isVue=!0,t&&t._isComponent?hi(e,t):e.$options=wt(fi(e.constructor),t||{},e),e._renderProxy=e,e._self=e,xn(e),Ln(e),cn(e),Qn(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&Te(e),zn(e),"mp-toutiao"!==e.mpHost&&Je(e),"mp-toutiao"!==e.mpHost&&Qn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function hi(t,e){var n=t.$options=Object.create(t.constructor.options),i=e._parentVnode;n.parent=e.parent,n._parentVnode=i;var r=i.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function fi(t){var e=t.options;if(t.super){var n=fi(t.super),i=t.superOptions;if(n!==i){t.superOptions=n;var r=di(t);r&&M(t.extendOptions,r),e=t.options=wt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function di(t){var e,n=t.options,i=t.sealedOptions;for(var r in n)n[r]!==i[r]&&(e||(e={}),e[r]=n[r]);return e}function Yi(t){this._init(t)}function Zi(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=D(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Si(t){t.mixin=function(t){return this.options=wt(this.options,t),this}}function Li(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,i=n.cid,r=t._Ctor||(t._Ctor={});if(r[i])return r[i];var o=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=wt(n.options,t),a["super"]=n,a.options.props&&gi(a),a.options.computed&&vi(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,N.forEach(function(t){a[t]=n[t]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=M({},a.options),r[i]=a,a}}function gi(t){var e=t.options.props;for(var n in e)qn(t.prototype,"_props",n)}function vi(t){var e=t.options.computed;for(var n in e)ii(t.prototype,n,e[n])}function yi(t){N.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&u(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function Ji(t){return t&&(t.Ctor.options.name||t.tag)}function Ti(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!p(t)&&t.test(e)}function Xi(t,e){var n=t.cache,i=t.keys,r=t._vnode;for(var o in n){var a=n[o];if(a){var s=Ji(a.componentOptions);s&&!e(s)&&Ci(n,o,i,r)}}}function Ci(t,e,n,i){var r=t[e];!r||i&&r.tag===i.tag||r.componentInstance.$destroy(),t[e]=null,L(n,e)}pi(Yi),ci(Yi),Tn(Yi),mn(Yi),hn(Yi);var xi=[String,RegExp,Array],mi={name:"keep-alive",abstract:!0,props:{include:xi,exclude:xi,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Ci(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Xi(t,function(t){return Ti(e,t)})}),this.$watch("exclude",function(e){Xi(t,function(t){return!Ti(e,t)})})},render:function(){var t=this.$slots.default,e=Sn(t),n=e&&e.componentOptions;if(n){var i=Ji(n),r=this,o=r.include,a=r.exclude;if(o&&(!i||!Ti(o,i))||a&&i&&Ti(a,i))return e;var s=this,l=s.cache,c=s.keys,u=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;l[u]?(e.componentInstance=l[u].componentInstance,L(c,u),c.push(u)):(l[u]=e,c.push(u),this.max&&c.length>parseInt(this.max)&&Ci(l,c[0],c,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},Pi={KeepAlive:mi};function Hi(t){var e={get:function(){return K}};Object.defineProperty(t,"config",e),t.util={warn:ct,extend:M,mergeOptions:wt,defineReactive:Ht},t.set=Dt,t.delete=Mt,t.nextTick=le,t.observable=function(t){return Pt(t),t},t.options=Object.create(null),N.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,M(t.options.components,Pi),Zi(t),Si(t),Li(t),yi(t)}Hi(Yi),Object.defineProperty(Yi.prototype,"$isServer",{get:rt}),Object.defineProperty(Yi.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Yi,"FunctionalRenderContext",{value:Ee}),Yi.version="2.6.11";var Di="[object Array]",Mi="[object Object]";function Qi(t,e){var n={};return bi(t,e),Bi(t,e,"",n),n}function bi(t,e){if(t!==e){var n=Fi(t),i=Fi(e);if(n==Mi&&i==Mi){if(Object.keys(t).length>=Object.keys(e).length)for(var r in e){var o=t[r];void 0===o?t[r]=null:bi(o,e[r])}}else n==Di&&i==Di&&t.length>=e.length&&e.forEach(function(e,n){bi(t[n],e)})}}function Bi(t,e,n,i){if(t!==e){var r=Fi(t),o=Fi(e);if(r==Mi)if(o!=Mi||Object.keys(t).length<Object.keys(e).length)Ai(i,n,t);else{var a=function(r){var o=t[r],a=e[r],s=Fi(o),l=Fi(a);if(s!=Di&&s!=Mi)o!=e[r]&&Ai(i,(""==n?"":n+".")+r,o);else if(s==Di)l!=Di?Ai(i,(""==n?"":n+".")+r,o):o.length<a.length?Ai(i,(""==n?"":n+".")+r,o):o.forEach(function(t,e){Bi(t,a[e],(""==n?"":n+".")+r+"["+e+"]",i)});else if(s==Mi)if(l!=Mi||Object.keys(o).length<Object.keys(a).length)Ai(i,(""==n?"":n+".")+r,o);else for(var c in o)Bi(o[c],a[c],(""==n?"":n+".")+r+"."+c,i)};for(var s in t)a(s)}else r==Di?o!=Di?Ai(i,n,t):t.length<e.length?Ai(i,n,t):t.forEach(function(t,r){Bi(t,e[r],n+"["+r+"]",i)}):Ai(i,n,t)}}function Ai(t,e,n){t[e]=n}function Fi(t){return Object.prototype.toString.call(t)}function Wi(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var i=0;i<n.length;i++)n[i]()}}function Gi(t){return bn.find(function(e){return t._watcher===e})}function Ni(t,e){if(!t.__next_tick_pending&&!Gi(t)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return le(e,t)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var i=t.$scope;console.log("["+ +new Date+"]["+(i.is||i.route)+"]["+t._uid+"]:nextMPTick")}var r;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(nr){qt(nr,t,"nextTick")}else r&&r(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){r=t})}function Ri(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Ki=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var i=this.$scope,r=Object.create(null);try{r=Ri(this)}catch(s){console.error(s)}r.__webviewId__=i.data.__webviewId__;var o=Object.create(null);Object.keys(r).forEach(function(t){o[t]=i.data[t]});var a=Qi(r,o);Object.keys(a).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(i.is||i.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,i.setData(a,function(){n.__next_tick_pending=!1,Wi(n)})):Wi(this)}};function _i(){}function wi(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=_i),t.$options.render||(t.$options.render=_i),"mp-toutiao"!==t.mpHost&&Qn(t,"beforeMount");var i=function(){t._update(t._render(),n)};return new In(t,i,b,{before:function(){t._isMounted&&!t._isDestroyed&&Qn(t,"beforeUpdate")}},!0),n=!1,t}function ki(t,e){return r(t)||r(e)?Ei(t,Oi(e)):""}function Ei(t,e){return t?e?t+" "+e:t:e||""}function Oi(t){return Array.isArray(t)?ji(t):l(t)?Ii(t):"string"===typeof t?t:""}function ji(t){for(var e,n="",i=0,o=t.length;i<o;i++)r(e=Oi(t[i]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Ii(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Ui=y(function(t){var e={},n=/;(?![^(]*\))/g,i=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(i);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function qi(t){return Array.isArray(t)?Q(t):"string"===typeof t?Ui(t):t}var zi=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Vi(t,e){var n=e.split("."),i=n[0];return 0===i.indexOf("__$n")&&(i=parseInt(i.replace("__$n",""))),1===n.length?t[i]:Vi(t[i],n.slice(1).join("."))}function $i(t){t.config.errorHandler=function(t){var e=getApp();e&&e.onError?e.onError(t):console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:D(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Ni(this,t)},zi.forEach(function(e){t.prototype[e]=function(t){return this.$scope&&this.$scope[e]?this.$scope[e](t):"undefined"!==typeof my?"createSelectorQuery"===e?my.createSelectorQuery(t):"createIntersectionObserver"===e?my.createIntersectionObserver(t):void 0:void 0}}),t.prototype.__init_provide=Je,t.prototype.__init_injections=Te,t.prototype.__call_hook=function(t,e){var n=this;ht();var i,r=n.$options[t],o=t+" hook";if(r)for(var a=0,s=r.length;a<s;a++)i=zt(r[a],n,e?[e]:null,n,o);return n._hasHookEvent&&n.$emit("hook:"+t,e),ft(),i},t.prototype.__set_model=function(t,e,n,i){Array.isArray(i)&&(-1!==i.indexOf("trim")&&(n=n.trim()),-1!==i.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return u(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Vi(e||this,t)},t.prototype.__get_class=function(t,e){return ki(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=qi(t),i=e?M(e,n):n;return Object.keys(i).map(function(t){return x(t)+":"+i[t]}).join(";")},t.prototype.__map=function(t,e){var n,i,r,o,a;if(Array.isArray(t)){for(n=new Array(t.length),i=0,r=t.length;i<r;i++)n[i]=e(t[i],i);return n}if(l(t)){for(o=Object.keys(t),n=Object.create(null),i=0,r=o.length;i<r;i++)a=o[i],n[a]=e(t[a],a,i);return n}return[]}}var tr=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function er(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==tr.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,i=n.created;tr.forEach(function(t){n[t]=i}),t.prototype.__lifecycle_hooks__=tr}Yi.prototype.__patch__=Ki,Yi.prototype.$mount=function(t,e){return wi(this,t,e)},er(Yi),$i(Yi),e["default"]=Yi}.call(this,n("c8ba"))},"674c":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("ae10"));function r(t){return t&&t.__esModule?t:{default:t}}var o={getSampleData:function(){var t={Column:{categories:["2012","2013","2014","2015","2016","2017"],series:[{name:"成交量1",data:[15,{value:20,color:"#f04864"},45,37,43,34]},{name:"成交量2",data:[30,{value:40,color:"#facc14"},25,14,34,18]}]},ColumnB:{categories:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],series:[{name:"田小光",data:["170","140","160","120","89","160","220","160","120","100","230","300"]}]},LineA:{categories:["2012","2013","2014","2015","2016","2017"],series:[{name:"成交量A",data:[35,20,25,37,4,20]},{name:"成交量B",data:[70,40,65,100,44,68]},{name:"成交量C",data:[100,80,95,150,112,132]}]},LineB:{categories:["2012","2013","2014","2015","2016","2017"],series:[{name:"成交量A",data:[35,20,25,37,4,20]},{name:"成交量B",data:[70,40,65,100,44,68]},{name:"成交量C",data:[100,80,95,150,112,132]}]},LineC:{categories:["一师","二师","三师","四师","五师","六师","七师","八师","九师","十师","十一师","十二师","十三师","十四师"],series:[{name:"完成度",data:[35,20,25,37,14,20,28,35,20,25,37,24,20,28]}]},Area:{categories:["2012","2013","2014","2015","2016","2017"],series:[{name:"成交量A",data:[100,80,95,150,112,132],color:"#facc14"},{name:"成交量B",data:[70,40,65,100,44,68],color:"#2fc25b"},{name:"成交量C",data:[35,20,25,37,4,20],color:"#1890ff"}]},Pie:{series:[{name:"雀巢优享10L",data:150},{name:"雀巢优享10L",data:58},{name:"娃哈哈优享19L",data:8},{name:"其它品种19L",data:8}]},Ring:{series:[{name:"一师",data:50,format:function(){return"一师:50人"}},{name:"二师",data:30,format:function(){return"二师:30人"}},{name:"三师",data:20,format:function(){return"三师:20人"}},{name:"四师",data:18,format:function(){return"四师:18人"}},{name:"五师",data:8,format:function(){return"五师:8人"}}]},Radar:{categories:["维度1","维度2","维度3","维度4","维度5","维度6"],series:[{name:"成交量1",data:[90,110,165,195,187,172]},{name:"成交量2",data:[190,210,105,35,27,102]}]},Arcbar1:{series:[{name:"正确率",data:.29,color:"#2fc25b"}]},Arcbar2:{series:[{name:"错误率",data:.65,color:"#f04864"}]},Arcbar3:{series:[{name:"完成率",data:.85,color:"#1890ff"}]},Gauge:{categories:[{value:.2,color:"#2fc25b"},{value:.8,color:"#f04864"},{value:1,color:"#1890ff"}],series:[{name:"完成率",data:.85}]},ColumnMeter:{categories:["2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018"],series:[{name:"目标值",data:[35,33,13,34,36,31,35,36,31,33,13,34],color:"#2fc25b"},{name:"完成量",data:[18,24,6,28,27,21,18,27,21,24,6,28],color:"#1890ff"}]}};return t},showCharts:function(e,n,r){return new i.default({$this:r,canvasId:e,width:n.width||r.cWidth||t.upx2px(750)*(n.pixelRatio||r.pixelRatio||1),height:n.height||r.cHeight||t.upx2px(500)*(n.pixelRatio||r.pixelRatio||1),type:n.type,pixelRatio:n.pixelRatio||r.pixelRatio||1,rotate:n.rotate||!1,rotateLock:n.rotateLock||!1,fontSize:n.fontSize||11,background:n.background||"#FFFFFF",enableScroll:n.enableScroll||!1,enableMarkLine:n.enableMarkLine||!1,animation:n.animation||!1,legend:n.legend||"arcbar"!=n.type&&"gauge"!=n.type,dataLabel:n.dataLabel||!0,dataPointShape:n.dataPointShape||!0,disablePieStroke:n.disablePieStroke||!1,categories:n.categories||("gauge"==n.type?[{value:.2,color:"#2fc25b"},{value:.8,color:"#f04864"},{value:1,color:"#1890ff"}]:[]),series:n.series||[],title:n.title||{name:"arcbar"==n.type||"gauge"==n.type?Math.round(100*n.series[0].data)+"%":"",fontSize:n.titlefontSize||11,color:n.titlecolor||("arcbar"==n.type||"gauge"==n.type?n.series[0].color:"#333333"),offsetX:n.titleoffsetX||0,offsetY:n.titleoffsetY||0},subtitle:n.subtitle||{name:"arcbar"==n.type||"gauge"==n.type?n.series[0].name:"",offsetX:n.subtitleoffsetX||0,offsetY:n.subtitleoffsetY||0,fontSize:n.subtitlefontSize||11,color:n.subtitlecolor||"#666666"},xAxis:n.xAxis||{rotateLabel:n.rotateLabel||!0,itemCount:n.itemCount||5,labelCount:n.labelCount,scrollShow:n.scrollShow||!0,scrollAlign:n.scrollAlign||"left",scrollBackgroundColor:n.scrollBackgroundColor||"#EFEBEF",scrollColor:n.scrollColor||"#A6A6A6",disabled:n.xAxisdisabled||!1,disableGrid:n.xAxisdisableGrid||!1,type:n.xAxistype||"calibration",gridColor:n.xAxisgridColor||"#cccccc",gridType:n.xAxisgridType||"solid",dashLength:n.xAxisdashLength||4,fontColor:n.xAxisfontColor||"#666666"},yAxis:n.yAxis||{format:n.yAxisformat||function(t){return t.toFixed(n.fixed||0)+(n.unit||"")},min:n.yAxismin,max:n.yAxismax,title:n.yAxistitle||"",disabled:n.yAxisdisabled||!1,disableGrid:n.yAxisdisableGrid||!1,splitNumber:n.yAxissplitNumber||5,gridType:n.yAxisgridType||"dash",dashLength:n.yAxisdashLength||4,gridColor:n.yAxisgridColor||"#cccccc",fontColor:n.yAxisfontColor||"#666666",titleFontColor:n.yAxistitleFontColor||"#333333"},extra:n.extra||{arcbar:n.arcbar||{type:n.extratype||"default",width:(n.extraWidth||r.arcbarWidth||t.upx2px(12))*(n.pixelRatio||r.pixelRatio||1),backgroundColor:n.backgroundColor||"#ffe3e8",startAngle:n.startAngle||1.25,endAngle:n.endAngle||.75},gauge:n.gauge||{type:n.extratype||"default",width:(n.extraWidth||t.upx2px(30))*(n.pixelRatio||r.pixelRatio||1),labelColor:n.labelColor||"#666666",startAngle:n.startAngle||.75,endAngle:n.endAngle||.25,startNumber:n.startNumber||0,endNumber:n.endNumber||100,splitLine:n.splitLine||{fixRadius:n.fixRadius||0,splitNumber:n.splitNumber||10,width:n.splitLinewidth||t.upx2px(30)*(n.pixelRatio||r.pixelRatio||1),color:n.splitLinecolor||"#FFFFFF",childNumber:n.childNumber||5,childWidth:n.childWidth||.4*t.upx2px(30)*(n.pixelRatio||r.pixelRatio||1)},pointer:n.pointer||{width:n.pointerwidth||.8*t.upx2px(30)*(n.pixelRatio||r.pixelRatio||1),color:n.pointercolor||"auto"}},radar:n.radar||{max:n.max||200,labelColor:n.labelColor||"#666666",gridColor:n.gridColor||"#cccccc"},column:n.column||{type:n.extratype||"group",width:(n.width||r.cWidth||t.upx2px(750))*(n.pixelRatio||r.pixelRatio||1)*.45/("column"==n.type?n.categories.length:5),meter:n.meter||{border:n.border||3,fillColor:n.fillColor||"#E5FDC3"}},pie:n.pie||{activeOpacity:n.activeOpacity||.5,offsetAngle:n.offsetAngle||0,lableWidth:n.lableWidth||15,ringWidth:n.ringWidth||30*(n.pixelRatio||r.pixelRatio||1)},rose:n.rose||{type:n.extratype||"area",minRadius:n.minRadius||50,activeOpacity:n.activeOpacity||.5,offsetAngle:n.offsetAngle||0,lableWidth:n.lableWidth||15},line:n.line||{type:n.extratype||"straight",width:n.extrawidth||2},area:n.area||{type:n.extratype||"straight",opacity:n.opacity||.2,addLine:n.addLine||!1,width:n.extrawidth||2},candle:n.candle||{},bar:n.bar||{type:n.extratype||"group",width:n.extrawidth},markLine:n.markLine||{},tooltip:n.tooltip||{},legendTextColor:n.legendTextColor||"#333333",touchMoveLimit:n.touchMoveLimit||20}})},start:function(t,e){e.scrollStart(t)},move:function(t,e){e.scroll(t)},end:function(t,e){e.scrollEnd(t)},tip:function(t,e){e.showToolTip(t,{format:function(t,e){return(e||"")+" "+t.name+":"+(t.data.value||t.data)}})},touchY:function(t,e){var n=t.changedTouches?t.changedTouches[0].y:t.mp.changedTouches[0].y;return t.changedTouches?t.changedTouches[0].y=n<0?n+e:n:t.mp.changedTouches[0].y=n<0?n+e:n,t},sumArr:function(t){var e=this;t.forEach(function(t){t.table.ts?(t.opts=t.table.ts,e.sumObj(t)):(t.opts=t.table[0],e.sumArray(t))})},sumObj:function(t){"pie"==t.chartType?(t.table.ts&&t.table.ts.series.forEach(function(e){void 0!=t.table.ts.sum&&(t.table.ts.sum+=e.data)}),t.table.ts&&t.table.ts.series.forEach(function(e){t.table.ts.zb&&t.table.ts.zb.push((100*e.data/t.table.ts.sum).toFixed(2))}),t.table.mj&&t.table.mj.series.forEach(function(e){void 0!=t.table.mj.sum&&(t.table.mj.sum+=e.data)}),t.table.je&&t.table.je.series.forEach(function(e){void 0!=t.table.je.sum&&(t.table.je.sum+=e.data)})):"column"==t.chartType&&(t.table.ts&&t.table.ts.series[0].data.forEach(function(e,n){void 0!=t.table.ts.sum&&(t.table.ts.sum+=e.value||e),void 0!=t.table.ts.sum1&&(t.table.ts.sum1+=t.table.ts.series[1].data[n].value||t.table.ts.series[1].data[n]),void 0!=t.table.ts.sum2&&(t.table.ts.sum2+=t.table.ts.series[2].data[n].value||t.table.ts.series[2].data[n]),t.table.ts.ce&&t.table.ts.ce.push(e.value?1*t.table.ts.series[1].data[n].value-1*e.value:1*t.table.ts.series[1].data[n]-1*e),t.table.ts.zb&&t.table.ts.zb.push((e.value?100*e.value/t.table.ts.series[1].data[n].value:100*e/t.table.ts.series[1].data[n]).toFixed(2))}),t.table.ts.ce&&t.table.ts.ce.push(t.table.ts.sum1-t.table.ts.sum),t.table.ts.zb&&t.table.ts.zb.push((100*t.table.ts.sum/t.table.ts.sum1).toFixed(2)),t.table.mj&&t.table.mj.series[0].data.forEach(function(e){void 0!=t.table.mj.sum&&(t.table.mj.sum+=e.value||e)}),t.table.je&&t.table.je.series[0].data.forEach(function(e){void 0!=t.table.je.sum&&(t.table.je.sum+=e.value||e)}))},sumArray:function(t){"pie"==t.chartType?(t.table[0]&&t.table[0].series.forEach(function(e){void 0!=t.table[0].sum&&(t.table[0].sum+=e.data)}),t.table[0]&&t.table[0].series.forEach(function(e){t.table[0].zb&&t.table[0].zb.push((100*e.data/t.table[0].sum).toFixed(2))}),t.table[1]&&t.table[1].series.forEach(function(e){void 0!=t.table[1].sum&&(t.table[1].sum+=e.data)}),t.table[2]&&t.table[2].series.forEach(function(e){void 0!=t.table[2].sum&&(t.table[2].sum+=e.data)}),t.table[3]&&t.table[3].series.forEach(function(e){void 0!=t.table[3].sum&&(t.table[3].sum+=e.data)}),t.table[3]&&(t.table[3].sum=t.table[3].sum/t.table[0].series.length)):"column"==t.chartType&&(t.table[0]&&t.table[0].series[0].data.forEach(function(e,n){void 0!=t.table[0].sum&&(t.table[0].sum+=e.value||e),void 0!=t.table[0].sum1&&(t.table[0].sum1+=t.table[0].series[1].data[n].value||t.table[0].series[1].data[n]),void 0!=t.table[0].sum2&&(t.table[0].sum2+=t.table[0].series[2].data[n].value||t.table[0].series[2].data[n]),t.table[0].ce&&t.table[0].ce.push(e.value?1*t.table[0].series[1].data[n].value-1*e.value:1*t.table[0].series[1].data[n]-1*e),t.table[0].zb&&t.table[0].zb.push((e.value?100*e.value/t.table[0].series[1].data[n].value:100*e/t.table[0].series[1].data[n]).toFixed(2))}),t.table[0].ce&&t.table[0].ce.push(t.table[0].sum1-t.table[0].sum),t.table[0].zb&&t.table[0].zb.push((100*t.table[0].sum/t.table[0].sum1).toFixed(2)),t.table[1]&&t.table[1].series[0].data.forEach(function(e){void 0!=t.table[1].sum&&(t.table[1].sum+=e.value||e)}),t.table[2]&&t.table[2].series[0].data.forEach(function(e){void 0!=t.table[2].sum&&(t.table[2].sum+=e.value||e)}))}},a=o;e.default=a}).call(this,n("6e42")["default"])},"6d34":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=[{cityCode:"1",cityName:"阿尔卑斯",img:"../../../static/img.png"},{cityCode:"2",cityName:"阿尔山",img:"../../../static/img2.png"},{cityCode:"3",cityName:"巴马丽琅",img:"../../../static/img3.png"},{cityCode:"4",cityName:"北贡灵泉",img:"../../../static/img4.png"},{cityCode:"5",cityName:"长白山林海",img:"../../../static/img5.png"},{cityCode:"6",cityName:"洞庭山",img:"../../../static/img6.png"},{cityCode:"12",cityName:"亦阿尔卑斯",img:"../../../static/img.png"},{cityCode:"7",cityName:"复阿尔山",img:"../../../static/img2.png"},{cityCode:"8",cityName:"机巴马丽琅",img:"../../../static/img3.png"},{cityCode:"9",cityName:"赫北贡灵泉",img:"../../../static/img4.png"},{cityCode:"10",cityName:"秒长白山林海",img:"../../../static/img5.png"},{cityCode:"11",cityName:"那洞庭山",img:"../../../static/img6.png"},{cityCode:"13",cityName:"偶阿尔卑斯",img:"../../../static/img.png"},{cityCode:"14",cityName:"上阿尔山",img:"../../../static/img2.png"},{cityCode:"15",cityName:"为巴马丽琅",img:"../../../static/img3.png"},{cityCode:"16",cityName:"开北贡灵泉",img:"../../../static/img4.png"},{cityCode:"17",cityName:"里长白山林海",img:"../../../static/img5.png"},{cityCode:"18",cityName:"做洞庭山",img:"../../../static/img6.png"}];e.default=i},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=de,e.createComponent=Xe,e.createPage=Te,e.default=void 0;var i=r(n("66fd"));function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return l(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done);i=!0)if(n.push(a.value),e&&n.length===e)break}catch(l){r=!0,o=l}finally{try{i||null==s["return"]||s["return"]()}finally{if(r)throw o}}return n}function l(t){if(Array.isArray(t))return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){return f(t)||h(t)||p()}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function h(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function f(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var d=Object.prototype.toString,Y=Object.prototype.hasOwnProperty;function Z(t){return"function"===typeof t}function S(t){return"string"===typeof t}function L(t){return"[object Object]"===d.call(t)}function g(t,e){return Y.call(t,e)}function v(){}function y(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var J=/-(\w)/g,T=y(function(t){return t.replace(J,function(t,e){return e?e.toUpperCase():""})}),X=["invoke","success","fail","complete","returnValue"],C={},x={};function m(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?P(n):n}function P(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function H(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function D(t,e){Object.keys(e).forEach(function(n){-1!==X.indexOf(n)&&Z(e[n])&&(t[n]=m(t[n],e[n]))})}function M(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==X.indexOf(n)&&Z(e[n])&&H(t[n],e[n])})}function Q(t,e){"string"===typeof t&&L(e)?D(x[t]||(x[t]={}),e):L(t)&&D(C,t)}function b(t,e){"string"===typeof t?L(e)?M(x[t],e):delete x[t]:L(t)&&M(C,t)}function B(t){return function(e){return t(e)||e}}function A(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function F(t,e){for(var n=!1,i=0;i<t.length;i++){var r=t[i];if(n)n=Promise.then(B(r));else{var o=r(e);if(A(o)&&(n=Promise.resolve(o)),!1===o)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function W(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var i=e[n];e[n]=function(e){F(t[n],e).then(function(t){return Z(i)&&i(t)||t})}}}),e}function G(t,e){var n=[];Array.isArray(C.returnValue)&&n.push.apply(n,u(C.returnValue));var i=x[t];return i&&Array.isArray(i.returnValue)&&n.push.apply(n,u(i.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function N(t){var e=Object.create(null);Object.keys(C).forEach(function(t){"returnValue"!==t&&(e[t]=C[t].slice())});var n=x[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function R(t,e,n){for(var i=arguments.length,r=new Array(i>3?i-3:0),o=3;o<i;o++)r[o-3]=arguments[o];var a=N(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var s=F(a.invoke,n);return s.then(function(t){return e.apply(void 0,[W(a,t)].concat(r))})}return e.apply(void 0,[W(a,n)].concat(r))}return e.apply(void 0,[n].concat(r))}var K={returnValue:function(t){return A(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},_=/^\$|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,w=/^create|Manager$/,k=/^on/;function E(t){return w.test(t)}function O(t){return _.test(t)}function j(t){return k.test(t)&&"onPush"!==t}function I(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function U(t){return!(E(t)||O(t)||j(t))}function q(t,e){return U(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];return Z(n.success)||Z(n.fail)||Z(n.complete)?G(t,R.apply(void 0,[t,e,n].concat(r))):G(t,I(new Promise(function(i,o){R.apply(void 0,[t,e,Object.assign({},n,{success:i,fail:o})].concat(r)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var z=1e-4,V=750,$=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,i=t.windowWidth;tt=i,et=n,$="ios"===e}function it(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/V*(e||tt);return n<0&&(n=-n),n=Math.floor(n+z),0===n?1!==et&&$?.5:1:t<0?-n:n}var rt={promiseInterceptor:K},ot=Object.freeze({__proto__:null,upx2px:it,interceptors:rt,addInterceptor:Q,removeInterceptor:b}),at={},st=[],lt=[],ct=["success","fail","cancel","complete"];function ut(t,e,n){return function(i){return e(ht(t,i,n))}}function pt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(L(e)){var o=!0===r?e:{};for(var a in Z(n)&&(n=n(e,o)||{}),e)if(g(n,a)){var s=n[a];Z(s)&&(s=s(e[a],e,o)),s?S(s)?o[s]=e[a]:L(s)&&(o[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==ct.indexOf(a)?o[a]=ut(t,e[a],i):r||(o[a]=e[a]);return o}return Z(e)&&(e=ut(t,e,i)),e}function ht(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return Z(at.returnValue)&&(e=at.returnValue(t,e)),pt(t,e,n,{},i)}function ft(t,e){if(g(at,t)){var n=at[t];return n?function(e,i){var r=n;Z(n)&&(r=n(e)),e=pt(t,e,r.args,r.returnValue);var o=[e];"undefined"!==typeof i&&o.push(i);var a=wx[r.name||t].apply(wx,o);return O(t)?ht(t,a,r.returnValue,E(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var dt=Object.create(null),Yt=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function Zt(t){return function(e){var n=e.fail,i=e.complete,r={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};Z(n)&&n(r),Z(i)&&i(r)}}Yt.forEach(function(t){dt[t]=Zt(t)});var St=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new i.default),t};var t}();function Lt(t,e,n){return t[e].apply(t,n)}function gt(){return Lt(St(),"$on",Array.prototype.slice.call(arguments))}function vt(){return Lt(St(),"$off",Array.prototype.slice.call(arguments))}function yt(){return Lt(St(),"$once",Array.prototype.slice.call(arguments))}function Jt(){return Lt(St(),"$emit",Array.prototype.slice.call(arguments))}var Tt=Object.freeze({__proto__:null,$on:gt,$off:vt,$once:yt,$emit:Jt});function Xt(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}function Ct(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,i="0"===t.__uniapp_mask_id?{setStyle:function(t){var e=t.mask;Xt("uni-tabview").setMask({color:e})}}:plus.webview.getWebviewById(t.__uniapp_mask_id),r=t.show,o=t.hide,a=t.close,s=function(){i.setStyle({mask:n})},l=function(){i.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return r.apply(t,n)},t.hide=function(){l();for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return o.apply(t,n)},t.close=function(){l(),e=[];for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return a.apply(t,i)}}}function xt(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&Ct(e),e}var mt=Object.freeze({__proto__:null,getSubNVueById:xt,requireNativePlugin:Xt}),Pt=Page,Ht=Component,Dt=/:/g,Mt=y(function(t){return T(t.replace(Dt,"-"))});function Qt(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];return e.apply(t,[Mt(n)].concat(r))}}}function bt(t,e){var n=e[t];e[t]=n?function(){Qt(this);for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return n.apply(this,e)}:function(){Qt(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return bt("onLoad",t),Pt(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return bt("created",t),Ht(t)};var Bt=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function At(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){g(n,e)&&(t[e]=n[e])})}function Ft(t,e){if(!e)return!0;if(i.default.options&&Array.isArray(i.default.options[t]))return!0;if(e=e.default||e,Z(e))return!!Z(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(Z(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Ft(t,e)}):void 0}function Wt(t,e,n){e.forEach(function(e){Ft(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Gt(t,e){var n;return e=e.default||e,Z(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Nt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Rt(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function Kt(t,e){var n=t.data||{},i=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(r){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(r){}return L(n)||(n={}),Object.keys(i).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||g(n,t)||(n[t]=i[t])}),n}var _t=[String,Number,Boolean,Object,Array,null];function wt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function kt(t,e){var n=t["behaviors"],i=t["extends"],r=t["mixins"],o=t["props"];o||(t["props"]=o=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(o)?(o.push("name"),o.push("value")):(o["name"]={type:String,default:""},o["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),L(i)&&i.props&&a.push(e({properties:Ot(i.props,!0)})),Array.isArray(r)&&r.forEach(function(t){L(t)&&t.props&&a.push(e({properties:Ot(t.props,!0)}))}),a}function Et(t,e,n,i){return Array.isArray(e)&&1===e.length?e[0]:e}function Ot(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:wt(t)}}):L(t)&&Object.keys(t).forEach(function(e){var i=t[e];if(L(i)){var r=i["default"];Z(r)&&(r=r()),i.type=Et(e,i.type),n[e]={type:-1!==_t.indexOf(i.type)?i.type:null,value:r,observer:wt(e)}}else{var o=Et(e,i);n[e]={type:-1!==_t.indexOf(o)?o:null,observer:wt(e)}}}),n}function jt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=v,t.preventDefault=v,t.target=t.target||{},g(t,"detail")||(t.detail={}),L(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function It(t,e){var n=t;return e.forEach(function(e){var i=e[0],r=e[2];if(i||"undefined"!==typeof r){var o=e[1],a=e[3],s=i?t.__get_value(i,n):n;Number.isInteger(s)?n=r:o?Array.isArray(s)?n=s.find(function(e){return t.__get_value(o,e)===r}):L(s)?n=Object.keys(s).find(function(e){return t.__get_value(o,s[e])===r}):console.error("v-for 暂不支持循环数据：",s):n=s[r],a&&(n=t.__get_value(a,n))}}),n}function Ut(t,e,n){var i={};return Array.isArray(e)&&e.length&&e.forEach(function(e,r){"string"===typeof e?e?"$event"===e?i["$"+r]=n:0===e.indexOf("$event.")?i["$"+r]=t.__get_value(e.replace("$event.",""),n):i["$"+r]=t.__get_value(e):i["$"+r]=t:i["$"+r]=It(t,e)}),i}function qt(t){for(var e={},n=1;n<t.length;n++){var i=t[n];e[i[0]]=i[1]}return e}function zt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,a=!1;if(r&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=Ut(t,i,e),l=[];return n.forEach(function(t){"$event"===t?"__set_model"!==o||r?r&&!a?l.push(e.detail.__args__[0]):l.push(e):l.push(e.target.value):Array.isArray(t)&&"o"===t[0]?l.push(qt(t)):"string"===typeof t&&g(s,t)?l.push(s[t]):l.push(t)}),l}var Vt="~",$t="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=jt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var i=n.eventOpts||n["event-opts"];if(!i)return console.warn("事件信息不存在");var r=t.type,o=[];return i.forEach(function(n){var i=n[0],a=n[1],s=i.charAt(0)===$t;i=s?i.slice(1):i;var l=i.charAt(0)===Vt;i=l?i.slice(1):i,a&&te(r,i)&&a.forEach(function(n){var i=n[0];if(i){var r=e.$vm;if(r.$options.generic&&r.$parent&&r.$parent.$parent&&(r=r.$parent.$parent),"$emit"===i)return void r.$emit.apply(r,zt(e.$vm,t,n[1],n[2],s,i));var a=r[i];if(!Z(a))throw new Error(" _vm.".concat(i," is not a function"));if(l){if(a.once)return;a.once=!0}o.push(a.apply(r,zt(e.$vm,t,n[1],n[2],s,i)))}})}),"input"===r&&1===o.length&&"undefined"!==typeof o[0]?o[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function ie(t,e){var n=e.mocks,r=e.initRefs;t.$options.store&&(i.default.prototype.$store=t.$options.store),i.default.prototype.mpHost="app-plus",i.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=c({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(r(this),At(this,n)))}});var o={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};o.globalData=t.$options.globalData||{};var a=t.$options.methods;return a&&Object.keys(a).forEach(function(t){o[t]=a[t]}),Wt(o,ne),o}var re=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function oe(t,e){for(var n,i=t.$children,r=i.length-1;r>=0;r--){var o=i[r];if(o.$scope._$vueId===e)return o}for(var a=i.length-1;a>=0;a--)if(n=oe(i[a],e),n)return n}function ae(t){return Behavior(t)}function se(){return!!this.route}function le(t){this.triggerEvent("__l",t)}function ce(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var i=e.selectAllComponents(".vue-ref-in-for");return i.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function ue(t){var e,n=t.detail||t.value,i=n.vuePid,r=n.vueOptions;i&&(e=oe(this.$vm,i)),e||(e=this.$vm),r.parent=e}function pe(t){return ie(t,{mocks:re,initRefs:ce})}var he=["onUniNViewMessage"];function fe(t){var e=pe(t);return Wt(e,he),e}function de(t){return App(fe(t)),t}function Ye(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,r=e.initRelation,a=Gt(i.default,t),s=o(a,2),l=s[0],c=s[1],u={multipleSlots:!0,addGlobalClass:!0},p={options:u,data:Kt(c,i.default.prototype),behaviors:kt(c,ae),properties:Ot(c.props,!1,c.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Rt(t.vueId,this),r.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new l(e),Nt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:ue,__e:ee}};return Array.isArray(c.wxsCallMethods)&&c.wxsCallMethods.forEach(function(t){p.methods[t]=function(e){return this.$vm[t](e)}}),n?p:[p,l]}function Ze(t){return Ye(t,{isPage:se,initRelation:le})}function Se(t){var e=Ze(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var Le=["onShow","onHide","onUnload"];function ge(t,e){e.isPage,e.initRelation;var n=Se(t);return Wt(n.methods,Le,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function ve(t){return ge(t,{isPage:se,initRelation:le})}Le.push.apply(Le,Bt);var ye=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Je(t){var e=ve(t);return Wt(e.methods,ye),e}function Te(t){return Component(Je(t))}function Xe(t){return Component(Se(t))}st.forEach(function(t){at[t]=!1}),lt.forEach(function(t){var e=at[t]&&at[t].name?at[t].name:t;wx.canIUse(e)||(at[t]=!1)});var Ce={};Object.keys(ot).forEach(function(t){Ce[t]=ot[t]}),Object.keys(Tt).forEach(function(t){Ce[t]=Tt[t]}),Object.keys(mt).forEach(function(t){Ce[t]=q(t,mt[t])}),Object.keys(wx).forEach(function(t){(g(wx,t)||g(at,t))&&(Ce[t]=q(t,ft(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Ce,t.UniEmitter=Tt),wx.createApp=de,wx.createPage=Te,wx.createComponent=Xe;var xe=Ce,me=xe;e.default=me}).call(this,n("c8ba"))},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@alpha",_id:"@dcloudio/uni-stat@2.0.0-alpha-25120200103005",_inBundle:!1,_integrity:"sha512-nYoIrRV2e5o/vzr6foSdWi3Rl2p0GuO+LPY3JctyY6uTKgPnuH99d7aL/QQdJ1SacQjBWO+QGK1qankN7oyrWw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@alpha",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"alpha",saveSpec:null,fetchSpec:"alpha"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-25120200103005.tgz",_shasum:"a77a63481f36474f3e86686868051219d1bb12df",_spec:"@dcloudio/uni-stat@alpha",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"6be187a3dfe15f95dd6146d9fec08e1f81100987",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-alpha-25120200103005"}},8584:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={firstletter:"YDYQSXMWZSSXJBYMGCCZQPSSQBYCDSCDQLDYLYBSSJGYZZJJFKCCLZDHWDWZJLJPFYYNWJJTMYHZWZHFLZPPQHGSCYYYNJQYXXGJHHSDSJNKKTMOMLCRXYPSNQSECCQZGGLLYJLMYZZSECYKYYHQWJSSGGYXYZYJWWKDJHYCHMYXJTLXJYQBYXZLDWRDJRWYSRLDZJPCBZJJBRCFTLECZSTZFXXZHTRQHYBDLYCZSSYMMRFMYQZPWWJJYFCRWFDFZQPYDDWYXKYJAWJFFXYPSFTZYHHYZYSWCJYXSCLCXXWZZXNBGNNXBXLZSZSBSGPYSYZDHMDZBQBZCWDZZYYTZHBTSYYBZGNTNXQYWQSKBPHHLXGYBFMJEBJHHGQTJCYSXSTKZHLYCKGLYSMZXYALMELDCCXGZYRJXSDLTYZCQKCNNJWHJTZZCQLJSTSTBNXBTYXCEQXGKWJYFLZQLYHYXSPSFXLMPBYSXXXYDJCZYLLLSJXFHJXPJBTFFYABYXBHZZBJYZLWLCZGGBTSSMDTJZXPTHYQTGLJSCQFZKJZJQNLZWLSLHDZBWJNCJZYZSQQYCQYRZCJJWYBRTWPYFTWEXCSKDZCTBZHYZZYYJXZCFFZZMJYXXSDZZOTTBZLQWFCKSZSXFYRLNYJMBDTHJXSQQCCSBXYYTSYFBXDZTGBCNSLCYZZPSAZYZZSCJCSHZQYDXLBPJLLMQXTYDZXSQJTZPXLCGLQTZWJBHCTSYJSFXYEJJTLBGXSXJMYJQQPFZASYJNTYDJXKJCDJSZCBARTDCLYJQMWNQNCLLLKBYBZZSYHQQLTWLCCXTXLLZNTYLNEWYZYXCZXXGRKRMTCNDNJTSYYSSDQDGHSDBJGHRWRQLYBGLXHLGTGXBQJDZPYJSJYJCTMRNYMGRZJCZGJMZMGXMPRYXKJNYMSGMZJYMKMFXMLDTGFBHCJHKYLPFMDXLQJJSMTQGZSJLQDLDGJYCALCMZCSDJLLNXDJFFFFJCZFMZFFPFKHKGDPSXKTACJDHHZDDCRRCFQYJKQCCWJDXHWJLYLLZGCFCQDSMLZPBJJPLSBCJGGDCKKDEZSQCCKJGCGKDJTJDLZYCXKLQSCGJCLTFPCQCZGWPJDQYZJJBYJHSJDZWGFSJGZKQCCZLLPSPKJGQJHZZLJPLGJGJJTHJJYJZCZMLZLYQBGJWMLJKXZDZNJQSYZMLJLLJKYWXMKJLHSKJGBMCLYYMKXJQLBMLLKMDXXKWYXYSLMLPSJQQJQXYXFJTJDXMXXLLCXQBSYJBGWYMBGGBCYXPJYGPEPFGDJGBHBNSQJYZJKJKHXQFGQZKFHYGKHDKLLSDJQXPQYKYBNQSXQNSZSWHBSXWHXWBZZXDMNSJBSBKBBZKLYLXGWXDRWYQZMYWSJQLCJXXJXKJEQXSCYETLZHLYYYSDZPAQYZCMTLSHTZCFYZYXYLJXDCJQAGYSLCQLYYYSHMRQQKLDXZSCSSSYDYCJYSFSJBFRSSZQSBXXPXJYSDRCKGJLGDKZJZBDKTCSYQPYHSTCLDJDHMXMCGXYZHJDDTMHLTXZXYLYMOHYJCLTYFBQQXPFBDFHHTKSQHZYYWCNXXCRWHOWGYJLEGWDQCWGFJYCSNTMYTOLBYGWQWESJPWNMLRYDZSZTXYQPZGCWXHNGPYXSHMYQJXZTDPPBFYHZHTJYFDZWKGKZBLDNTSXHQEEGZZYLZMMZYJZGXZXKHKSTXNXXWYLYAPSTHXDWHZYMPXAGKYDXBHNHXKDPJNMYHYLPMGOCSLNZHKXXLPZZLBMLSFBHHGYGYYGGBHSCYAQTYWLXTZQCEZYDQDQMMHTKLLSZHLSJZWFYHQSWSCWLQAZYNYTLSXTHAZNKZZSZZLAXXZWWCTGQQTDDYZTCCHYQZFLXPSLZYGPZSZNGLNDQTBDLXGTCTAJDKYWNSYZLJHHZZCWNYYZYWMHYCHHYXHJKZWSXHZYXLYSKQYSPSLYZWMYPPKBYGLKZHTYXAXQSYSHXASMCHKDSCRSWJPWXSGZJLWWSCHSJHSQNHCSEGNDAQTBAALZZMSSTDQJCJKTSCJAXPLGGXHHGXXZCXPDMMHLDGTYBYSJMXHMRCPXXJZCKZXSHMLQXXTTHXWZFKHCCZDYTCJYXQHLXDHYPJQXYLSYYDZOZJNYXQEZYSQYAYXWYPDGXDDXSPPYZNDLTWRHXYDXZZJHTCXMCZLHPYYYYMHZLLHNXMYLLLMDCPPXHMXDKYCYRDLTXJCHHZZXZLCCLYLNZSHZJZZLNNRLWHYQSNJHXYNTTTKYJPYCHHYEGKCTTWLGQRLGGTGTYGYHPYHYLQYQGCWYQKPYYYTTTTLHYHLLTYTTSPLKYZXGZWGPYDSSZZDQXSKCQNMJJZZBXYQMJRTFFBTKHZKBXLJJKDXJTLBWFZPPTKQTZTGPDGNTPJYFALQMKGXBDCLZFHZCLLLLADPMXDJHLCCLGYHDZFGYDDGCYYFGYDXKSSEBDHYKDKDKHNAXXYBPBYYHXZQGAFFQYJXDMLJCSQZLLPCHBSXGJYNDYBYQSPZWJLZKSDDTACTBXZDYZYPJZQSJNKKTKNJDJGYYPGTLFYQKASDNTCYHBLWDZHBBYDWJRYGKZYHEYYFJMSDTYFZJJHGCXPLXHLDWXXJKYTCYKSSSMTWCTTQZLPBSZDZWZXGZAGYKTYWXLHLSPBCLLOQMMZSSLCMBJCSZZKYDCZJGQQDSMCYTZQQLWZQZXSSFPTTFQMDDZDSHDTDWFHTDYZJYQJQKYPBDJYYXTLJHDRQXXXHAYDHRJLKLYTWHLLRLLRCXYLBWSRSZZSYMKZZHHKYHXKSMDSYDYCJPBZBSQLFCXXXNXKXWYWSDZYQOGGQMMYHCDZTTFJYYBGSTTTYBYKJDHKYXBELHTYPJQNFXFDYKZHQKZBYJTZBXHFDXKDASWTAWAJLDYJSFHBLDNNTNQJTJNCHXFJSRFWHZFMDRYJYJWZPDJKZYJYMPCYZNYNXFBYTFYFWYGDBNZZZDNYTXZEMMQBSQEHXFZMBMFLZZSRXYMJGSXWZJSPRYDJSJGXHJJGLJJYNZZJXHGXKYMLPYYYCXYTWQZSWHWLYRJLPXSLSXMFSWWKLCTNXNYNPSJSZHDZEPTXMYYWXYYSYWLXJQZQXZDCLEEELMCPJPCLWBXSQHFWWTFFJTNQJHJQDXHWLBYZNFJLALKYYJLDXHHYCSTYYWNRJYXYWTRMDRQHWQCMFJDYZMHMYYXJWMYZQZXTLMRSPWWCHAQBXYGZYPXYYRRCLMPYMGKSJSZYSRMYJSNXTPLNBAPPYPYLXYYZKYNLDZYJZCZNNLMZHHARQMPGWQTZMXXMLLHGDZXYHXKYXYCJMFFYYHJFSBSSQLXXNDYCANNMTCJCYPRRNYTYQNYYMBMSXNDLYLYSLJRLXYSXQMLLYZLZJJJKYZZCSFBZXXMSTBJGNXYZHLXNMCWSCYZYFZLXBRNNNYLBNRTGZQYSATSWRYHYJZMZDHZGZDWYBSSCSKXSYHYTXXGCQGXZZSHYXJSCRHMKKBXCZJYJYMKQHZJFNBHMQHYSNJNZYBKNQMCLGQHWLZNZSWXKHLJHYYBQLBFCDSXDLDSPFZPSKJYZWZXZDDXJSMMEGJSCSSMGCLXXKYYYLNYPWWWGYDKZJGGGZGGSYCKNJWNJPCXBJJTQTJWDSSPJXZXNZXUMELPXFSXTLLXCLJXJJLJZXCTPSWXLYDHLYQRWHSYCSQYYBYAYWJJJQFWQCQQCJQGXALDBZZYJGKGXPLTZYFXJLTPADKYQHPMATLCPDCKBMTXYBHKLENXDLEEGQDYMSAWHZMLJTWYGXLYQZLJEEYYBQQFFNLYXRDSCTGJGXYYNKLLYQKCCTLHJLQMKKZGCYYGLLLJDZGYDHZWXPYSJBZKDZGYZZHYWYFQYTYZSZYEZZLYMHJJHTSMQWYZLKYYWZCSRKQYTLTDXWCTYJKLWSQZWBDCQYNCJSRSZJLKCDCDTLZZZACQQZZDDXYPLXZBQJYLZLLLQDDZQJYJYJZYXNYYYNYJXKXDAZWYRDLJYYYRJLXLLDYXJCYWYWNQCCLDDNYYYNYCKCZHXXCCLGZQJGKWPPCQQJYSBZZXYJSQPXJPZBSBDSFNSFPZXHDWZTDWPPTFLZZBZDMYYPQJRSDZSQZSQXBDGCPZSWDWCSQZGMDHZXMWWFYBPDGPHTMJTHZSMMBGZMBZJCFZWFZBBZMQCFMBDMCJXLGPNJBBXGYHYYJGPTZGZMQBQTCGYXJXLWZKYDPDYMGCFTPFXYZTZXDZXTGKMTYBBCLBJASKYTSSQYYMSZXFJEWLXLLSZBQJJJAKLYLXLYCCTSXMCWFKKKBSXLLLLJYXTYLTJYYTDPJHNHNNKBYQNFQYYZBYYESSESSGDYHFHWTCJBSDZZTFDMXHCNJZYMQWSRYJDZJQPDQBBSTJGGFBKJBXTGQHNGWJXJGDLLTHZHHYYYYYYSXWTYYYCCBDBPYPZYCCZYJPZYWCBDLFWZCWJDXXHYHLHWZZXJTCZLCDPXUJCZZZLYXJJTXPHFXWPYWXZPTDZZBDZCYHJHMLXBQXSBYLRDTGJRRCTTTHYTCZWMXFYTWWZCWJWXJYWCSKYBZSCCTZQNHXNWXXKHKFHTSWOCCJYBCMPZZYKBNNZPBZHHZDLSYDDYTYFJPXYNGFXBYQXCBHXCPSXTYZDMKYSNXSXLHKMZXLYHDHKWHXXSSKQYHHCJYXGLHZXCSNHEKDTGZXQYPKDHEXTYKCNYMYYYPKQYYYKXZLTHJQTBYQHXBMYHSQCKWWYLLHCYYLNNEQXQWMCFBDCCMLJGGXDQKTLXKGNQCDGZJWYJJLYHHQTTTNWCHMXCXWHWSZJYDJCCDBQCDGDNYXZTHCQRXCBHZTQCBXWGQWYYBXHMBYMYQTYEXMQKYAQYRGYZSLFYKKQHYSSQYSHJGJCNXKZYCXSBXYXHYYLSTYCXQTHYSMGSCPMMGCCCCCMTZTASMGQZJHKLOSQYLSWTMXSYQKDZLJQQYPLSYCZTCQQPBBQJZCLPKHQZYYXXDTDDTSJCXFFLLCHQXMJLWCJCXTSPYCXNDTJSHJWXDQQJSKXYAMYLSJHMLALYKXCYYDMNMDQMXMCZNNCYBZKKYFLMCHCMLHXRCJJHSYLNMTJZGZGYWJXSRXCWJGJQHQZDQJDCJJZKJKGDZQGJJYJYLXZXXCDQHHHEYTMHLFSBDJSYYSHFYSTCZQLPBDRFRZTZYKYWHSZYQKWDQZRKMSYNBCRXQBJYFAZPZZEDZCJYWBCJWHYJBQSZYWRYSZPTDKZPFPBNZTKLQYHBBZPNPPTYZZYBQNYDCPJMMCYCQMCYFZZDCMNLFPBPLNGQJTBTTNJZPZBBZNJKLJQYLNBZQHKSJZNGGQSZZKYXSHPZSNBCGZKDDZQANZHJKDRTLZLSWJLJZLYWTJNDJZJHXYAYNCBGTZCSSQMNJPJYTYSWXZFKWJQTKHTZPLBHSNJZSYZBWZZZZLSYLSBJHDWWQPSLMMFBJDWAQYZTCJTBNNWZXQXCDSLQGDSDPDZHJTQQPSWLYYJZLGYXYZLCTCBJTKTYCZJTQKBSJLGMGZDMCSGPYNJZYQYYKNXRPWSZXMTNCSZZYXYBYHYZAXYWQCJTLLCKJJTJHGDXDXYQYZZBYWDLWQCGLZGJGQRQZCZSSBCRPCSKYDZNXJSQGXSSJMYDNSTZTPBDLTKZWXQWQTZEXNQCZGWEZKSSBYBRTSSSLCCGBPSZQSZLCCGLLLZXHZQTHCZMQGYZQZNMCOCSZJMMZSQPJYGQLJYJPPLDXRGZYXCCSXHSHGTZNLZWZKJCXTCFCJXLBMQBCZZWPQDNHXLJCTHYZLGYLNLSZZPCXDSCQQHJQKSXZPBAJYEMSMJTZDXLCJYRYYNWJBNGZZTMJXLTBSLYRZPYLSSCNXPHLLHYLLQQZQLXYMRSYCXZLMMCZLTZSDWTJJLLNZGGQXPFSKYGYGHBFZPDKMWGHCXMSGDXJMCJZDYCABXJDLNBCDQYGSKYDQTXDJJYXMSZQAZDZFSLQXYJSJZYLBTXXWXQQZBJZUFBBLYLWDSLJHXJYZJWTDJCZFQZQZZDZSXZZQLZCDZFJHYSPYMPQZMLPPLFFXJJNZZYLSJEYQZFPFZKSYWJJJHRDJZZXTXXGLGHYDXCSKYSWMMZCWYBAZBJKSHFHJCXMHFQHYXXYZFTSJYZFXYXPZLCHMZMBXHZZSXYFYMNCWDABAZLXKTCSHHXKXJJZJSTHYGXSXYYHHHJWXKZXSSBZZWHHHCWTZZZPJXSNXQQJGZYZYWLLCWXZFXXYXYHXMKYYSWSQMNLNAYCYSPMJKHWCQHYLAJJMZXHMMCNZHBHXCLXTJPLTXYJHDYYLTTXFSZHYXXSJBJYAYRSMXYPLCKDUYHLXRLNLLSTYZYYQYGYHHSCCSMZCTZQXKYQFPYYRPFFLKQUNTSZLLZMWWTCQQYZWTLLMLMPWMBZSSTZRBPDDTLQJJBXZCSRZQQYGWCSXFWZLXCCRSZDZMCYGGDZQSGTJSWLJMYMMZYHFBJDGYXCCPSHXNZCSBSJYJGJMPPWAFFYFNXHYZXZYLREMZGZCYZSSZDLLJCSQFNXZKPTXZGXJJGFMYYYSNBTYLBNLHPFZDCYFBMGQRRSSSZXYSGTZRNYDZZCDGPJAFJFZKNZBLCZSZPSGCYCJSZLMLRSZBZZLDLSLLYSXSQZQLYXZLSKKBRXBRBZCYCXZZZEEYFGKLZLYYHGZSGZLFJHGTGWKRAAJYZKZQTSSHJJXDCYZUYJLZYRZDQQHGJZXSSZBYKJPBFRTJXLLFQWJHYLQTYMBLPZDXTZYGBDHZZRBGXHWNJTJXLKSCFSMWLSDQYSJTXKZSCFWJLBXFTZLLJZLLQBLSQMQQCGCZFPBPHZCZJLPYYGGDTGWDCFCZQYYYQYSSCLXZSKLZZZGFFCQNWGLHQYZJJCZLQZZYJPJZZBPDCCMHJGXDQDGDLZQMFGPSYTSDYFWWDJZJYSXYYCZCYHZWPBYKXRYLYBHKJKSFXTZJMMCKHLLTNYYMSYXYZPYJQYCSYCWMTJJKQYRHLLQXPSGTLYYCLJSCPXJYZFNMLRGJJTYZBXYZMSJYJHHFZQMSYXRSZCWTLRTQZSSTKXGQKGSPTGCZNJSJCQCXHMXGGZTQYDJKZDLBZSXJLHYQGGGTHQSZPYHJHHGYYGKGGCWJZZYLCZLXQSFTGZSLLLMLJSKCTBLLZZSZMMNYTPZSXQHJCJYQXYZXZQZCPSHKZZYSXCDFGMWQRLLQXRFZTLYSTCTMJCXJJXHJNXTNRZTZFQYHQGLLGCXSZSJDJLJCYDSJTLNYXHSZXCGJZYQPYLFHDJSBPCCZHJJJQZJQDYBSSLLCMYTTMQTBHJQNNYGKYRQYQMZGCJKPDCGMYZHQLLSLLCLMHOLZGDYYFZSLJCQZLYLZQJESHNYLLJXGJXLYSYYYXNBZLJSSZCQQCJYLLZLTJYLLZLLBNYLGQCHXYYXOXCXQKYJXXXYKLXSXXYQXCYKQXQCSGYXXYQXYGYTQOHXHXPYXXXULCYEYCHZZCBWQBBWJQZSCSZSSLZYLKDESJZWMYMCYTSDSXXSCJPQQSQYLYYZYCMDJDZYWCBTJSYDJKCYDDJLBDJJSODZYSYXQQYXDHHGQQYQHDYXWGMMMAJDYBBBPPBCMUUPLJZSMTXERXJMHQNUTPJDCBSSMSSSTKJTSSMMTRCPLZSZMLQDSDMJMQPNQDXCFYNBFSDQXYXHYAYKQYDDLQYYYSSZBYDSLNTFQTZQPZMCHDHCZCWFDXTMYQSPHQYYXSRGJCWTJTZZQMGWJJTJHTQJBBHWZPXXHYQFXXQYWYYHYSCDYDHHQMNMTMWCPBSZPPZZGLMZFOLLCFWHMMSJZTTDHZZYFFYTZZGZYSKYJXQYJZQBHMBZZLYGHGFMSHPZFZSNCLPBQSNJXZSLXXFPMTYJYGBXLLDLXPZJYZJYHHZCYWHJYLSJEXFSZZYWXKZJLUYDTMLYMQJPWXYHXSKTQJEZRPXXZHHMHWQPWQLYJJQJJZSZCPHJLCHHNXJLQWZJHBMZYXBDHHYPZLHLHLGFWLCHYYTLHJXCJMSCPXSTKPNHQXSRTYXXTESYJCTLSSLSTDLLLWWYHDHRJZSFGXTSYCZYNYHTDHWJSLHTZDQDJZXXQHGYLTZPHCSQFCLNJTCLZPFSTPDYNYLGMJLLYCQHYSSHCHYLHQYQTMZYPBYWRFQYKQSYSLZDQJMPXYYSSRHZJNYWTQDFZBWWTWWRXCWHGYHXMKMYYYQMSMZHNGCEPMLQQMTCWCTMMPXJPJJHFXYYZSXZHTYBMSTSYJTTQQQYYLHYNPYQZLCYZHZWSMYLKFJXLWGXYPJYTYSYXYMZCKTTWLKSMZSYLMPWLZWXWQZSSAQSYXYRHSSNTSRAPXCPWCMGDXHXZDZYFJHGZTTSBJHGYZSZYSMYCLLLXBTYXHBBZJKSSDMALXHYCFYGMQYPJYCQXJLLLJGSLZGQLYCJCCZOTYXMTMTTLLWTGPXYMZMKLPSZZZXHKQYSXCTYJZYHXSHYXZKXLZWPSQPYHJWPJPWXQQYLXSDHMRSLZZYZWTTCYXYSZZSHBSCCSTPLWSSCJCHNLCGCHSSPHYLHFHHXJSXYLLNYLSZDHZXYLSXLWZYKCLDYAXZCMDDYSPJTQJZLNWQPSSSWCTSTSZLBLNXSMNYYMJQBQHRZWTYYDCHQLXKPZWBGQYBKFCMZWPZLLYYLSZYDWHXPSBCMLJBSCGBHXLQHYRLJXYSWXWXZSLDFHLSLYNJLZYFLYJYCDRJLFSYZFSLLCQYQFGJYHYXZLYLMSTDJCYHBZLLNWLXXYGYYHSMGDHXXHHLZZJZXCZZZCYQZFNGWPYLCPKPYYPMCLQKDGXZGGWQBDXZZKZFBXXLZXJTPJPTTBYTSZZDWSLCHZHSLTYXHQLHYXXXYYZYSWTXZKHLXZXZPYHGCHKCFSYHUTJRLXFJXPTZTWHPLYXFCRHXSHXKYXXYHZQDXQWULHYHMJTBFLKHTXCWHJFWJCFPQRYQXCYYYQYGRPYWSGSUNGWCHKZDXYFLXXHJJBYZWTSXXNCYJJYMSWZJQRMHXZWFQSYLZJZGBHYNSLBGTTCSYBYXXWXYHXYYXNSQYXMQYWRGYQLXBBZLJSYLPSYTJZYHYZAWLRORJMKSCZJXXXYXCHDYXRYXXJDTSQFXLYLTSFFYXLMTYJMJUYYYXLTZCSXQZQHZXLYYXZHDNBRXXXJCTYHLBRLMBRLLAXKYLLLJLYXXLYCRYLCJTGJCMTLZLLCYZZPZPCYAWHJJFYBDYYZSMPCKZDQYQPBPCJPDCYZMDPBCYYDYCNNPLMTMLRMFMMGWYZBSJGYGSMZQQQZTXMKQWGXLLPJGZBQCDJJJFPKJKCXBLJMSWMDTQJXLDLPPBXCWRCQFBFQJCZAHZGMYKPHYYHZYKNDKZMBPJYXPXYHLFPNYYGXJDBKXNXHJMZJXSTRSTLDXSKZYSYBZXJLXYSLBZYSLHXJPFXPQNBYLLJQKYGZMCYZZYMCCSLCLHZFWFWYXZMWSXTYNXJHPYYMCYSPMHYSMYDYSHQYZCHMJJMZCAAGCFJBBHPLYZYLXXSDJGXDHKXXTXXNBHRMLYJSLTXMRHNLXQJXYZLLYSWQGDLBJHDCGJYQYCMHWFMJYBMBYJYJWYMDPWHXQLDYGPDFXXBCGJSPCKRSSYZJMSLBZZJFLJJJLGXZGYXYXLSZQYXBEXYXHGCXBPLDYHWETTWWCJMBTXCHXYQXLLXFLYXLLJLSSFWDPZSMYJCLMWYTCZPCHQEKCQBWLCQYDPLQPPQZQFJQDJHYMMCXTXDRMJWRHXCJZYLQXDYYNHYYHRSLSRSYWWZJYMTLTLLGTQCJZYABTCKZCJYCCQLJZQXALMZYHYWLWDXZXQDLLQSHGPJFJLJHJABCQZDJGTKHSSTCYJLPSWZLXZXRWGLDLZRLZXTGSLLLLZLYXXWGDZYGBDPHZPBRLWSXQBPFDWOFMWHLYPCBJCCLDMBZPBZZLCYQXLDOMZBLZWPDWYYGDSTTHCSQSCCRSSSYSLFYBFNTYJSZDFNDPDHDZZMBBLSLCMYFFGTJJQWFTMTPJWFNLBZCMMJTGBDZLQLPYFHYYMJYLSDCHDZJWJCCTLJCLDTLJJCPDDSQDSSZYBNDBJLGGJZXSXNLYCYBJXQYCBYLZCFZPPGKCXZDZFZTJJFJSJXZBNZYJQTTYJYHTYCZHYMDJXTTMPXSPLZCDWSLSHXYPZGTFMLCJTYCBPMGDKWYCYZCDSZZYHFLYCTYGWHKJYYLSJCXGYWJCBLLCSNDDBTZBSCLYZCZZSSQDLLMQYYHFSLQLLXFTYHABXGWNYWYYPLLSDLDLLBJCYXJZMLHLJDXYYQYTDLLLBUGBFDFBBQJZZMDPJHGCLGMJJPGAEHHBWCQXAXHHHZCHXYPHJAXHLPHJPGPZJQCQZGJJZZUZDMQYYBZZPHYHYBWHAZYJHYKFGDPFQSDLZMLJXKXGALXZDAGLMDGXMWZQYXXDXXPFDMMSSYMPFMDMMKXKSYZYSHDZKXSYSMMZZZMSYDNZZCZXFPLSTMZDNMXCKJMZTYYMZMZZMSXHHDCZJEMXXKLJSTLWLSQLYJZLLZJSSDPPMHNLZJCZYHMXXHGZCJMDHXTKGRMXFWMCGMWKDTKSXQMMMFZZYDKMSCLCMPCGMHSPXQPZDSSLCXKYXTWLWJYAHZJGZQMCSNXYYMMPMLKJXMHLMLQMXCTKZMJQYSZJSYSZHSYJZJCDAJZYBSDQJZGWZQQXFKDMSDJLFWEHKZQKJPEYPZYSZCDWYJFFMZZYLTTDZZEFMZLBNPPLPLPEPSZALLTYLKCKQZKGENQLWAGYXYDPXLHSXQQWQCQXQCLHYXXMLYCCWLYMQYSKGCHLCJNSZKPYZKCQZQLJPDMDZHLASXLBYDWQLWDNBQCRYDDZTJYBKBWSZDXDTNPJDTCTQDFXQQMGNXECLTTBKPWSLCTYQLPWYZZKLPYGZCQQPLLKCCYLPQMZCZQCLJSLQZDJXLDDHPZQDLJJXZQDXYZQKZLJCYQDYJPPYPQYKJYRMPCBYMCXKLLZLLFQPYLLLMBSGLCYSSLRSYSQTMXYXZQZFDZUYSYZTFFMZZSMZQHZSSCCMLYXWTPZGXZJGZGSJSGKDDHTQGGZLLBJDZLCBCHYXYZHZFYWXYZYMSDBZZYJGTSMTFXQYXQSTDGSLNXDLRYZZLRYYLXQHTXSRTZNGZXBNQQZFMYKMZJBZYMKBPNLYZPBLMCNQYZZZSJZHJCTZKHYZZJRDYZHNPXGLFZTLKGJTCTSSYLLGZRZBBQZZKLPKLCZYSSUYXBJFPNJZZXCDWXZYJXZZDJJKGGRSRJKMSMZJLSJYWQSKYHQJSXPJZZZLSNSHRNYPZTWCHKLPSRZLZXYJQXQKYSJYCZTLQZYBBYBWZPQDWWYZCYTJCJXCKCWDKKZXSGKDZXWWYYJQYYTCYTDLLXWKCZKKLCCLZCQQDZLQLCSFQCHQHSFSMQZZLNBJJZBSJHTSZDYSJQJPDLZCDCWJKJZZLPYCGMZWDJJBSJQZSYZYHHXJPBJYDSSXDZNCGLQMBTSFSBPDZDLZNFGFJGFSMPXJQLMBLGQCYYXBQKDJJQYRFKZTJDHCZKLBSDZCFJTPLLJGXHYXZCSSZZXSTJYGKGCKGYOQXJPLZPBPGTGYJZGHZQZZLBJLSQFZGKQQJZGYCZBZQTLDXRJXBSXXPZXHYZYCLWDXJJHXMFDZPFZHQHQMQGKSLYHTYCGFRZGNQXCLPDLBZCSCZQLLJBLHBZCYPZZPPDYMZZSGYHCKCPZJGSLJLNSCDSLDLXBMSTLDDFJMKDJDHZLZXLSZQPQPGJLLYBDSZGQLBZLSLKYYHZTTNTJYQTZZPSZQZTLLJTYYLLQLLQYZQLBDZLSLYYZYMDFSZSNHLXZNCZQZPBWSKRFBSYZMTHBLGJPMCZZLSTLXSHTCSYZLZBLFEQHLXFLCJLYLJQCBZLZJHHSSTBRMHXZHJZCLXFNBGXGTQJCZTMSFZKJMSSNXLJKBHSJXNTNLZDNTLMSJXGZJYJCZXYJYJWRWWQNZTNFJSZPZSHZJFYRDJSFSZJZBJFZQZZHZLXFYSBZQLZSGYFTZDCSZXZJBQMSZKJRHYJZCKMJKHCHGTXKXQGLXPXFXTRTYLXJXHDTSJXHJZJXZWZLCQSBTXWXGXTXXHXFTSDKFJHZYJFJXRZSDLLLTQSQQZQWZXSYQTWGWBZCGZLLYZBCLMQQTZHZXZXLJFRMYZFLXYSQXXJKXRMQDZDMMYYBSQBHGZMWFWXGMXLZPYYTGZYCCDXYZXYWGSYJYZNBHPZJSQSYXSXRTFYZGRHZTXSZZTHCBFCLSYXZLZQMZLMPLMXZJXSFLBYZMYQHXJSXRXSQZZZSSLYFRCZJRCRXHHZXQYDYHXSJJHZCXZBTYNSYSXJBQLPXZQPYMLXZKYXLXCJLCYSXXZZLXDLLLJJYHZXGYJWKJRWYHCPSGNRZLFZWFZZNSXGXFLZSXZZZBFCSYJDBRJKRDHHGXJLJJTGXJXXSTJTJXLYXQFCSGSWMSBCTLQZZWLZZKXJMLTMJYHSDDBXGZHDLBMYJFRZFSGCLYJBPMLYSMSXLSZJQQHJZFXGFQFQBPXZGYYQXGZTCQWYLTLGWSGWHRLFSFGZJMGMGBGTJFSYZZGZYZAFLSSPMLPFLCWBJZCLJJMZLPJJLYMQDMYYYFBGYGYZMLYZDXQYXRQQQHSYYYQXYLJTYXFSFSLLGNQCYHYCWFHCCCFXPYLYPLLZYXXXXXKQHHXSHJZCFZSCZJXCPZWHHHHHAPYLQALPQAFYHXDYLUKMZQGGGDDESRNNZLTZGCHYPPYSQJJHCLLJTOLNJPZLJLHYMHEYDYDSQYCDDHGZUNDZCLZYZLLZNTNYZGSLHSLPJJBDGWXPCDUTJCKLKCLWKLLCASSTKZZDNQNTTLYYZSSYSSZZRYLJQKCQDHHCRXRZYDGRGCWCGZQFFFPPJFZYNAKRGYWYQPQXXFKJTSZZXSWZDDFBBXTBGTZKZNPZZPZXZPJSZBMQHKCYXYLDKLJNYPKYGHGDZJXXEAHPNZKZTZCMXCXMMJXNKSZQNMNLWBWWXJKYHCPSTMCSQTZJYXTPCTPDTNNPGLLLZSJLSPBLPLQHDTNJNLYYRSZFFJFQWDPHZDWMRZCCLODAXNSSNYZRESTYJWJYJDBCFXNMWTTBYLWSTSZGYBLJPXGLBOCLHPCBJLTMXZLJYLZXCLTPNCLCKXTPZJSWCYXSFYSZDKNTLBYJCYJLLSTGQCBXRYZXBXKLYLHZLQZLNZCXWJZLJZJNCJHXMNZZGJZZXTZJXYCYYCXXJYYXJJXSSSJSTSSTTPPGQTCSXWZDCSYFPTFBFHFBBLZJCLZZDBXGCXLQPXKFZFLSYLTUWBMQJHSZBMDDBCYSCCLDXYCDDQLYJJWMQLLCSGLJJSYFPYYCCYLTJANTJJPWYCMMGQYYSXDXQMZHSZXPFTWWZQSWQRFKJLZJQQYFBRXJHHFWJJZYQAZMYFRHCYYBYQWLPEXCCZSTYRLTTDMQLYKMBBGMYYJPRKZNPBSXYXBHYZDJDNGHPMFSGMWFZMFQMMBCMZZCJJLCNUXYQLMLRYGQZCYXZLWJGCJCGGMCJNFYZZJHYCPRRCMTZQZXHFQGTJXCCJEAQCRJYHPLQLSZDJRBCQHQDYRHYLYXJSYMHZYDWLDFRYHBPYDTSSCNWBXGLPZMLZZTQSSCPJMXXYCSJYTYCGHYCJWYRXXLFEMWJNMKLLSWTXHYYYNCMMCWJDQDJZGLLJWJRKHPZGGFLCCSCZMCBLTBHBQJXQDSPDJZZGKGLFQYWBZYZJLTSTDHQHCTCBCHFLQMPWDSHYYTQWCNZZJTLBYMBPDYYYXSQKXWYYFLXXNCWCXYPMAELYKKJMZZZBRXYYQJFLJPFHHHYTZZXSGQQMHSPGDZQWBWPJHZJDYSCQWZKTXXSQLZYYMYSDZGRXCKKUJLWPYSYSCSYZLRMLQSYLJXBCXTLWDQZPCYCYKPPPNSXFYZJJRCEMHSZMSXLXGLRWGCSTLRSXBZGBZGZTCPLUJLSLYLYMTXMTZPALZXPXJTJWTCYYZLBLXBZLQMYLXPGHDSLSSDMXMBDZZSXWHAMLCZCPJMCNHJYSNSYGCHSKQMZZQDLLKABLWJXSFMOCDXJRRLYQZKJMYBYQLYHETFJZFRFKSRYXFJTWDSXXSYSQJYSLYXWJHSNLXYYXHBHAWHHJZXWMYLJCSSLKYDZTXBZSYFDXGXZJKHSXXYBSSXDPYNZWRPTQZCZENYGCXQFJYKJBZMLJCMQQXUOXSLYXXLYLLJDZBTYMHPFSTTQQWLHOKYBLZZALZXQLHZWRRQHLSTMYPYXJJXMQSJFNBXYXYJXXYQYLTHYLQYFMLKLJTMLLHSZWKZHLJMLHLJKLJSTLQXYLMBHHLNLZXQJHXCFXXLHYHJJGBYZZKBXSCQDJQDSUJZYYHZHHMGSXCSYMXFEBCQWWRBPYYJQTYZCYQYQQZYHMWFFHGZFRJFCDPXNTQYZPDYKHJLFRZXPPXZDBBGZQSTLGDGYLCQMLCHHMFYWLZYXKJLYPQHSYWMQQGQZMLZJNSQXJQSYJYCBEHSXFSZPXZWFLLBCYYJDYTDTHWZSFJMQQYJLMQXXLLDTTKHHYBFPWTYYSQQWNQWLGWDEBZWCMYGCULKJXTMXMYJSXHYBRWFYMWFRXYQMXYSZTZZTFYKMLDHQDXWYYNLCRYJBLPSXCXYWLSPRRJWXHQYPHTYDNXHHMMYWYTZCSQMTSSCCDALWZTCPQPYJLLQZYJSWXMZZMMYLMXCLMXCZMXMZSQTZPPQQBLPGXQZHFLJJHYTJSRXWZXSCCDLXTYJDCQJXSLQYCLZXLZZXMXQRJMHRHZJBHMFLJLMLCLQNLDXZLLLPYPSYJYSXCQQDCMQJZZXHNPNXZMEKMXHYKYQLXSXTXJYYHWDCWDZHQYYBGYBCYSCFGPSJNZDYZZJZXRZRQJJYMCANYRJTLDPPYZBSTJKXXZYPFDWFGZZRPYMTNGXZQBYXNBUFNQKRJQZMJEGRZGYCLKXZDSKKNSXKCLJSPJYYZLQQJYBZSSQLLLKJXTBKTYLCCDDBLSPPFYLGYDTZJYQGGKQTTFZXBDKTYYHYBBFYTYYBCLPDYTGDHRYRNJSPTCSNYJQHKLLLZSLYDXXWBCJQSPXBPJZJCJDZFFXXBRMLAZHCSNDLBJDSZBLPRZTSWSBXBCLLXXLZDJZSJPYLYXXYFTFFFBHJJXGBYXJPMMMPSSJZJMTLYZJXSWXTYLEDQPJMYGQZJGDJLQJWJQLLSJGJGYGMSCLJJXDTYGJQJQJCJZCJGDZZSXQGSJGGCXHQXSNQLZZBXHSGZXCXYLJXYXYYDFQQJHJFXDHCTXJYRXYSQTJXYEFYYSSYYJXNCYZXFXMSYSZXYYSCHSHXZZZGZZZGFJDLTYLNPZGYJYZYYQZPBXQBDZTZCZYXXYHHSQXSHDHGQHJHGYWSZTMZMLHYXGEBTYLZKQWYTJZRCLEKYSTDBCYKQQSAYXCJXWWGSBHJYZYDHCSJKQCXSWXFLTYNYZPZCCZJQTZWJQDZZZQZLJJXLSBHPYXXPSXSHHEZTXFPTLQYZZXHYTXNCFZYYHXGNXMYWXTZSJPTHHGYMXMXQZXTSBCZYJYXXTYYZYPCQLMMSZMJZZLLZXGXZAAJZYXJMZXWDXZSXZDZXLEYJJZQBHZWZZZQTZPSXZTDSXJJJZNYAZPHXYYSRNQDTHZHYYKYJHDZXZLSWCLYBZYECWCYCRYLCXNHZYDZYDYJDFRJJHTRSQTXYXJRJHOJYNXELXSFSFJZGHPZSXZSZDZCQZBYYKLSGSJHCZSHDGQGXYZGXCHXZJWYQWGYHKSSEQZZNDZFKWYSSTCLZSTSYMCDHJXXYWEYXCZAYDMPXMDSXYBSQMJMZJMTZQLPJYQZCGQHXJHHLXXHLHDLDJQCLDWBSXFZZYYSCHTYTYYBHECXHYKGJPXHHYZJFXHWHBDZFYZBCAPNPGNYDMSXHMMMMAMYNBYJTMPXYYMCTHJBZYFCGTYHWPHFTWZZEZSBZEGPFMTSKFTYCMHFLLHGPZJXZJGZJYXZSBBQSCZZLZCCSTPGXMJSFTCCZJZDJXCYBZLFCJSYZFGSZLYBCWZZBYZDZYPSWYJZXZBDSYUXLZZBZFYGCZXBZHZFTPBGZGEJBSTGKDMFHYZZJHZLLZZGJQZLSFDJSSCBZGPDLFZFZSZYZYZSYGCXSNXXCHCZXTZZLJFZGQSQYXZJQDCCZTQCDXZJYQJQCHXZTDLGSCXZSYQJQTZWLQDQZTQCHQQJZYEZZZPBWKDJFCJPZTYPQYQTTYNLMBDKTJZPQZQZZFPZSBNJLGYJDXJDZZKZGQKXDLPZJTCJDQBXDJQJSTCKNXBXZMSLYJCQMTJQWWCJQNJNLLLHJCWQTBZQYDZCZPZZDZYDDCYZZZCCJTTJFZDPRRTZTJDCQTQZDTJNPLZBCLLCTZSXKJZQZPZLBZRBTJDCXFCZDBCCJJLTQQPLDCGZDBBZJCQDCJWYNLLZYZCCDWLLXWZLXRXNTQQCZXKQLSGDFQTDDGLRLAJJTKUYMKQLLTZYTDYYCZGJWYXDXFRSKSTQTENQMRKQZHHQKDLDAZFKYPBGGPZREBZZYKZZSPEGJXGYKQZZZSLYSYYYZWFQZYLZZLZHWCHKYPQGNPGBLPLRRJYXCCSYYHSFZFYBZYYTGZXYLXCZWXXZJZBLFFLGSKHYJZEYJHLPLLLLCZGXDRZELRHGKLZZYHZLYQSZZJZQLJZFLNBHGWLCZCFJYSPYXZLZLXGCCPZBLLCYBBBBUBBCBPCRNNZCZYRBFSRLDCGQYYQXYGMQZWTZYTYJXYFWTEHZZJYWLCCNTZYJJZDEDPZDZTSYQJHDYMBJNYJZLXTSSTPHNDJXXBYXQTZQDDTJTDYYTGWSCSZQFLSHLGLBCZPHDLYZJYCKWTYTYLBNYTSDSYCCTYSZYYEBHEXHQDTWNYGYCLXTSZYSTQMYGZAZCCSZZDSLZCLZRQXYYELJSBYMXSXZTEMBBLLYYLLYTDQYSHYMRQWKFKBFXNXSBYCHXBWJYHTQBPBSBWDZYLKGZSKYHXQZJXHXJXGNLJKZLYYCDXLFYFGHLJGJYBXQLYBXQPQGZTZPLNCYPXDJYQYDYMRBESJYYHKXXSTMXRCZZYWXYQYBMCLLYZHQYZWQXDBXBZWZMSLPDMYSKFMZKLZCYQYCZLQXFZZYDQZPZYGYJYZMZXDZFYFYTTQTZHGSPCZMLCCYTZXJCYTJMKSLPZHYSNZLLYTPZCTZZCKTXDHXXTQCYFKSMQCCYYAZHTJPCYLZLYJBJXTPNYLJYYNRXSYLMMNXJSMYBCSYSYLCYLXJJQYLDZLPQBFZZBLFNDXQKCZFYWHGQMRDSXYCYTXNQQJZYYPFZXDYZFPRXEJDGYQBXRCNFYYQPGHYJDYZXGRHTKYLNWDZNTSMPKLBTHBPYSZBZTJZSZZJTYYXZPHSSZZBZCZPTQFZMYFLYPYBBJQXZMXXDJMTSYSKKBJZXHJCKLPSMKYJZCXTMLJYXRZZQSLXXQPYZXMKYXXXJCLJPRMYYGADYSKQLSNDHYZKQXZYZTCGHZTLMLWZYBWSYCTBHJHJFCWZTXWYTKZLXQSHLYJZJXTMPLPYCGLTBZZTLZJCYJGDTCLKLPLLQPJMZPAPXYZLKKTKDZCZZBNZDYDYQZJYJGMCTXLTGXSZLMLHBGLKFWNWZHDXUHLFMKYSLGXDTWWFRJEJZTZHYDXYKSHWFZCQSHKTMQQHTZHYMJDJSKHXZJZBZZXYMPAGQMSTPXLSKLZYNWRTSQLSZBPSPSGZWYHTLKSSSWHZZLYYTNXJGMJSZSUFWNLSOZTXGXLSAMMLBWLDSZYLAKQCQCTMYCFJBSLXCLZZCLXXKSBZQCLHJPSQPLSXXCKSLNHPSFQQYTXYJZLQLDXZQJZDYYDJNZPTUZDSKJFSLJHYLZSQZLBTXYDGTQFDBYAZXDZHZJNHHQBYKNXJJQCZMLLJZKSPLDYCLBBLXKLELXJLBQYCXJXGCNLCQPLZLZYJTZLJGYZDZPLTQCSXFDMNYCXGBTJDCZNBGBQYQJWGKFHTNPYQZQGBKPBBYZMTJDYTBLSQMPSXTBNPDXKLEMYYCJYNZCTLDYKZZXDDXHQSHDGMZSJYCCTAYRZLPYLTLKXSLZCGGEXCLFXLKJRTLQJAQZNCMBYDKKCXGLCZJZXJHPTDJJMZQYKQSECQZDSHHADMLZFMMZBGNTJNNLGBYJBRBTMLBYJDZXLCJLPLDLPCQDHLXZLYCBLCXZZJADJLNCMMSSSMYBHBSQKBHRSXXJMXSDZNZPXLGBRHWGGFCXGMSKLLTSJYYCQLTSKYWYYHYWXBXQYWPYWYKQLSQPTNTKHQCWDQKTWPXXHCPTHTWUMSSYHBWCRWXHJMKMZNGWTMLKFGHKJYLSYYCXWHYECLQHKQHTTQKHFZLDXQWYZYYDESBPKYRZPJFYYZJCEQDZZDLATZBBFJLLCXDLMJSSXEGYGSJQXCWBXSSZPDYZCXDNYXPPZYDLYJCZPLTXLSXYZYRXCYYYDYLWWNZSAHJSYQYHGYWWAXTJZDAXYSRLTDPSSYYFNEJDXYZHLXLLLZQZSJNYQYQQXYJGHZGZCYJCHZLYCDSHWSHJZYJXCLLNXZJJYYXNFXMWFPYLCYLLABWDDHWDXJMCXZTZPMLQZHSFHZYNZTLLDYWLSLXHYMMYLMBWWKYXYADTXYLLDJPYBPWUXJMWMLLSAFDLLYFLBHHHBQQLTZJCQJLDJTFFKMMMBYTHYGDCQRDDWRQJXNBYSNWZDBYYTBJHPYBYTTJXAAHGQDQTMYSTQXKBTZPKJLZRBEQQSSMJJBDJOTGTBXPGBKTLHQXJJJCTHXQDWJLWRFWQGWSHCKRYSWGFTGYGBXSDWDWRFHWYTJJXXXJYZYSLPYYYPAYXHYDQKXSHXYXGSKQHYWFDDDPPLCJLQQEEWXKSYYKDYPLTJTHKJLTCYYHHJTTPLTZZCDLTHQKZXQYSTEEYWYYZYXXYYSTTJKLLPZMCYHQGXYHSRMBXPLLNQYDQHXSXXWGDQBSHYLLPJJJTHYJKYPPTHYYKTYEZYENMDSHLCRPQFDGFXZPSFTLJXXJBSWYYSKSFLXLPPLBBBLBSFXFYZBSJSSYLPBBFFFFSSCJDSTZSXZRYYSYFFSYZYZBJTBCTSBSDHRTJJBYTCXYJEYLXCBNEBJDSYXYKGSJZBXBYTFZWGENYHHTHZHHXFWGCSTBGXKLSXYWMTMBYXJSTZSCDYQRCYTWXZFHMYMCXLZNSDJTTTXRYCFYJSBSDYERXJLJXBBDEYNJGHXGCKGSCYMBLXJMSZNSKGXFBNBPTHFJAAFXYXFPXMYPQDTZCXZZPXRSYWZDLYBBKTYQPQJPZYPZJZNJPZJLZZFYSBTTSLMPTZRTDXQSJEHBZYLZDHLJSQMLHTXTJECXSLZZSPKTLZKQQYFSYGYWPCPQFHQHYTQXZKRSGTTSQCZLPTXCDYYZXSQZSLXLZMYCPCQBZYXHBSXLZDLTCDXTYLZJYYZPZYZLTXJSJXHLPMYTXCQRBLZSSFJZZTNJYTXMYJHLHPPLCYXQJQQKZZSCPZKSWALQSBLCCZJSXGWWWYGYKTJBBZTDKHXHKGTGPBKQYSLPXPJCKBMLLXDZSTBKLGGQKQLSBKKTFXRMDKBFTPZFRTBBRFERQGXYJPZSSTLBZTPSZQZSJDHLJQLZBPMSMMSXLQQNHKNBLRDDNXXDHDDJCYYGYLXGZLXSYGMQQGKHBPMXYXLYTQWLWGCPBMQXCYZYDRJBHTDJYHQSHTMJSBYPLWHLZFFNYPMHXXHPLTBQPFBJWQDBYGPNZTPFZJGSDDTQSHZEAWZZYLLTYYBWJKXXGHLFKXDJTMSZSQYNZGGSWQSPHTLSSKMCLZXYSZQZXNCJDQGZDLFNYKLJCJLLZLMZZNHYDSSHTHZZLZZBBHQZWWYCRZHLYQQJBEYFXXXWHSRXWQHWPSLMSSKZTTYGYQQWRSLALHMJTQJSMXQBJJZJXZYZKXBYQXBJXSHZTSFJLXMXZXFGHKZSZGGYLCLSARJYHSLLLMZXELGLXYDJYTLFBHBPNLYZFBBHPTGJKWETZHKJJXZXXGLLJLSTGSHJJYQLQZFKCGNNDJSSZFDBCTWWSEQFHQJBSAQTGYPQLBXBMMYWXGSLZHGLZGQYFLZBYFZJFRYSFMBYZHQGFWZSYFYJJPHZBYYZFFWODGRLMFTWLBZGYCQXCDJYGZYYYYTYTYDWEGAZYHXJLZYYHLRMGRXXZCLHNELJJTJTPWJYBJJBXJJTJTEEKHWSLJPLPSFYZPQQBDLQJJTYYQLYZKDKSQJYYQZLDQTGJQYZJSUCMRYQTHTEJMFCTYHYPKMHYZWJDQFHYYXWSHCTXRLJHQXHCCYYYJLTKTTYTMXGTCJTZAYYOCZLYLBSZYWJYTSJYHBYSHFJLYGJXXTMZYYLTXXYPZLXYJZYZYYPNHMYMDYYLBLHLSYYQQLLNJJYMSOYQBZGDLYXYLCQYXTSZEGXHZGLHWBLJHEYXTWQMAKBPQCGYSHHEGQCMWYYWLJYJHYYZLLJJYLHZYHMGSLJLJXCJJYCLYCJPCPZJZJMMYLCQLNQLJQJSXYJMLSZLJQLYCMMHCFMMFPQQMFYLQMCFFQMMMMHMZNFHHJGTTHHKHSLNCHHYQDXTMMQDCYZYXYQMYQYLTDCYYYZAZZCYMZYDLZFFFMMYCQZWZZMABTBYZTDMNZZGGDFTYPCGQYTTSSFFWFDTZQSSYSTWXJHXYTSXXYLBYQHWWKXHZXWZNNZZJZJJQJCCCHYYXBZXZCYZTLLCQXYNJYCYYCYNZZQYYYEWYCZDCJYCCHYJLBTZYYCQWMPWPYMLGKDLDLGKQQBGYCHJXY",getFirstLetter:function(t){if(!t||/^ +$/g.test(t))return"";if(i.firstletter){var e=t.charCodeAt(0),n=t.charAt(0);n=e>=19968&&e<=40869?i.firstletter.charAt(e-19968):e>=97&&e<=122||e>=65&&e<=90?n.toLocaleUpperCase():"#";var r={unicode:e,firstletter:n};return r}return""}},r=i;e.default=r},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function i(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?r(t):e}function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}var p=e.version,h="https://tongji.dcloud.io/uni/stat",f="https://tongji.dcloud.io/uni/stat.gif",d=1800,Y=300,Z=10,S="__DC_STAT_UUID",L="__DC_UUID_VALUE";function g(){var e="";if("n"===T()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(S)}catch(n){e=L}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(S,e)}catch(n){t.setStorageSync(S,L)}}return e}var v=function(t){var e=Object.keys(t),n=e.sort(),i={},r="";for(var o in n)i[n[o]]=t[n[o]],r+=n[o]+"="+t[n[o]]+"&";return{sign:"",options:r.substr(0,r.length-1)}},y=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},J=function(){return parseInt((new Date).getTime()/1e3)},T=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},X=function(){var e="";return"wx"!==T()&&"qq"!==T()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},C=function(){return"n"===T()?plus.runtime.version:""},x=function(){var t=T(),e="";return"n"===t&&(e=plus.runtime.channel),e},m=function(e){var n=T(),i="";return e||("wx"===n&&(i=t.getLaunchOptionsSync().scene),i)},P="First__Visit__Time",H="Last__Visit__Time",D=function(){var e=t.getStorageSync(P),n=0;return e?n=e:(n=J(),t.setStorageSync(P,n),t.removeStorageSync(H)),n},M=function(){var e=t.getStorageSync(H),n=0;return n=e||"",t.setStorageSync(H,J()),n},Q="__page__residence__time",b=0,B=0,A=function(){return b=J(),"n"===T()&&t.setStorageSync(Q,J()),b},F=function(){return B=J(),"n"===T()&&(b=t.getStorageSync(Q)),B-b},W="Total__Visit__Count",G=function(){var e=t.getStorageSync(W),n=1;return e&&(n=e,n++),t.setStorageSync(W,n),n},N=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},R=0,K=0,_=function(){var t=(new Date).getTime();return R=t,K=0,t},w=function(){var t=(new Date).getTime();return K=t,t},k=function(t){var e=0;if(0!==R&&(e=K-R),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>Y;return{residenceTime:e,overtime:n}}if("page"===t){var i=e>d;return{residenceTime:e,overtime:i}}return{residenceTime:e}},E=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===T()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},O=function(t){var e=getCurrentPages(),n=e[e.length-1],i=n.$vm,r=t._query,o=r&&"{}"!==JSON.stringify(r)?"?"+JSON.stringify(r):"";return t._query="","bd"===T()?i.$mp&&i.$mp.page.is+o:i.$scope&&i.$scope.route+o||i.$mp&&i.$mp.page.route+o},j=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},I=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},U=n("2a57").default,q=n("c4d9").default||n("c4d9"),z=t.getSystemInfoSync(),V=function(){function e(){l(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:g(),ut:T(),mpn:X(),ak:q.appid,usv:p,v:C(),ch:x(),cn:"",pn:"",ct:"",t:J(),tt:"",p:"android"===z.platform?"a":"i",brand:z.brand||"",md:z.model,sv:z.system.replace(/(Android|iOS)\s/,""),mpsdk:z.SDKVersion||"",mpv:z.version||"",lang:z.language,pr:z.pixelRatio,ww:z.windowWidth,wh:z.windowHeight,sw:z.screenWidth,sh:z.screenHeight}}return u(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){w();var t=k("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,w();var n=k();_();var i=O(this);this._sendHideRequest({urlref:i,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=O(this),e=E();if(this._navigationBarTitle.config=U&&U.pages[e]&&U.pages[e].titleNView&&U.pages[e].titleNView.titleText||U&&U.pages[e]&&U.pages[e].navigationBarTitleText||"",this.__licationShow)return _(),this.__licationShow=!1,void(this._lastPageRoute=t);w(),this._lastPageRoute=t;var n=k("page");if(n.overtime){var i={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(i)}_()}},{key:"_pageHide",value:function(){if(!this.__licationHide){w();var t=k("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=J(),this.statData.sc=m(t.scene),this.statData.fvts=D(),this.statData.lvts=M(),this.statData.tvc=G(),"n"===T()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,i=t.urlref_ts;this._navigationBarTitle.lt="11";var r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:J(),p:this.statData.p};this.request(r)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,i=t.urlref_ts,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:J(),p:this.statData.p};this.request(r,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,i=t.value,r=void 0===i?"":i,o=this._lastPageRoute,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:o,ch:this.statData.ch,e_n:n,e_v:"object"===typeof r?JSON.stringify(r):r.toString(),usv:this.statData.usv,t:J(),p:this.statData.p};this.request(a)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;q.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var i=this,r=J(),o=this._navigationBarTitle;e.ttn=o.page,e.ttpj=o.config,e.ttc=o.report;var a=this._reportingRequestData;if("n"===T()&&(a=t.getStorageSync("__UNI__STAT__DATA")||{}),a[e.lt]||(a[e.lt]=[]),a[e.lt].push(e),"n"===T()&&t.setStorageSync("__UNI__STAT__DATA",a),!(F()<Z)||n){var s=this._reportingRequestData;"n"===T()&&(s=t.getStorageSync("__UNI__STAT__DATA")),A();var l=[],c=[],u=[],h=function(t){var e=s[t];e.forEach(function(e){var n=y(e);0===t?l.push(n):3===t?u.push(n):c.push(n)})};for(var f in s)h(f);l.push.apply(l,c.concat(u));var d={usv:p,t:r,requests:JSON.stringify(l)};this._reportingRequestData={},"n"===T()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==T()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){i._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:h,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=v(N(t)).options;e.src=f+"?"+n}},{key:"sendEvent",value:function(t,e){I(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),$=function(e){function n(){var e;return l(this,n),e=i(this,o(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return a(n,e),u(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),u(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,A(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,j(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,j(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:J(),p:this.statData.p};this.request(n)}}]),n}(V),tt=$.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function it(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}it()}).call(this,n("6e42")["default"])},"96cf":function(t,e){!function(e){"use strict";var n,i=Object.prototype,r=i.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag",c="object"===typeof t,u=e.regeneratorRuntime;if(u)c&&(t.exports=u);else{u=e.regeneratorRuntime=c?t.exports:{},u.wrap=v;var p="suspendedStart",h="suspendedYield",f="executing",d="completed",Y={},Z={};Z[a]=function(){return this};var S=Object.getPrototypeOf,L=S&&S(S(Q([])));L&&L!==i&&r.call(L,a)&&(Z=L);var g=X.prototype=J.prototype=Object.create(Z);T.prototype=g.constructor=X,X.constructor=T,X[l]=T.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===T||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,X):(t.__proto__=X,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(g),t},u.awrap=function(t){return{__await:t}},C(x.prototype),x.prototype[s]=function(){return this},u.AsyncIterator=x,u.async=function(t,e,n,i){var r=new x(v(t,e,n,i));return u.isGeneratorFunction(e)?r:r.next().then(function(t){return t.done?t.value:r.next()})},C(g),g[l]="Generator",g[a]=function(){return this},g.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},u.values=Q,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(D),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(i,r){return s.type="throw",s.arg=t,e.next=i,r&&(e.method="next",e.arg=n),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,Y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),Y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),D(n),Y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;D(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:Q(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=n),Y}}}function v(t,e,n,i){var r=e&&e.prototype instanceof J?e:J,o=Object.create(r.prototype),a=new M(i||[]);return o._invoke=m(t,n,a),o}function y(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(i){return{type:"throw",arg:i}}}function J(){}function T(){}function X(){}function C(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function x(t){function e(n,i,o,a){var s=y(t[n],t,i);if("throw"!==s.type){var l=s.arg,c=l.value;return c&&"object"===typeof c&&r.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(c).then(function(t){l.value=t,o(l)},function(t){return e("throw",t,o,a)})}a(s.arg)}var n;function i(t,i){function r(){return new Promise(function(n,r){e(t,i,n,r)})}return n=n?n.then(r,r):r()}this._invoke=i}function m(t,e,n){var i=p;return function(r,o){if(i===f)throw new Error("Generator is already running");if(i===d){if("throw"===r)throw o;return b()}n.method=r,n.arg=o;while(1){var a=n.delegate;if(a){var s=P(a,n);if(s){if(s===Y)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===p)throw i=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=f;var l=y(t,e,n);if("normal"===l.type){if(i=n.done?d:h,l.arg===Y)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(i=d,n.method="throw",n.arg=l.arg)}}}function P(t,e){var i=t.iterator[e.method];if(i===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,P(t,e),"throw"===e.method))return Y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return Y}var r=y(i,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,Y;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,Y):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,Y)}function H(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(H,this),this.reset(!0)}function Q(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function e(){while(++i<t.length)if(r.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:b}}function b(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a34a:function(t,e,n){t.exports=n("bbdd")},ae10:function(t,e,n){"use strict";(function(e,n){var i={yAxisWidth:15,yAxisSplit:5,xAxisHeight:15,xAxisLineHeight:15,legendHeight:15,yAxisTitleWidth:15,padding:12,pixelRatio:1,rotate:!1,columePadding:3,fontSize:13,dataPointShape:["circle","circle","circle","circle"],colors:["#1890ff","#2fc25b","#facc14","#f04864","#8543e0","#90ed7d","#5caf20","#30b0d7","#ff6d58","#1A79B9","#f97723","#f3792c"],pieChartLinePadding:15,pieChartTextPadding:5,xAxisTextPadding:3,titleColor:"#333333",titleFontSize:20,subtitleColor:"#999999",subtitleFontSize:15,toolTipPadding:3,toolTipBackground:"#000000",toolTipOpacity:.7,toolTipLineHeight:20,radarGridCount:3,radarLabelTextMargin:15,gaugeLabelTextMargin:15};function r(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(t),i=1;i<arguments.length;i++){var r=arguments[i];if(null!=r)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n}var o={toFixed:function(t,e){return e=e||2,this.isFloat(t)&&(t=t.toFixed(e)),t},isFloat:function(t){return t%1!==0},approximatelyEqual:function(t,e){return Math.abs(t-e)<1e-10},isSameSign:function(t,e){return Math.abs(t)===t&&Math.abs(e)===e||Math.abs(t)!==t&&Math.abs(e)!==e},isSameXCoordinateArea:function(t,e){return this.isSameSign(t.x,e.x)},isCollision:function(t,e){t.end={},t.end.x=t.start.x+t.width,t.end.y=t.start.y-t.height,e.end={},e.end.x=e.start.x+e.width,e.end.y=e.start.y-e.height;var n=e.start.x>t.end.x||e.end.x<t.start.x||e.end.y>t.start.y||e.start.y<t.end.y;return!n}};function a(t,e){var n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,i=t.replace(n,function(t,e,n,i){return e+e+n+n+i+i}),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i),o=parseInt(r[1],16),a=parseInt(r[2],16),s=parseInt(r[3],16);return"rgba("+o+","+a+","+s+","+e+")"}function s(t,e,n){if(isNaN(t))throw new Error("[wxCharts] unvalid series data!");n=n||10,e=e||"upper";var i=1;while(n<1)n*=10,i*=10;t="upper"===e?Math.ceil(t*i):Math.floor(t*i);while(t%n!==0)"upper"===e?t++:t--;return t/i}function l(t,e,n,i){for(var r=[],o=0;o<t.length;o++){for(var a={data:[],name:e[o],color:n[o]},s=0,l=i.length;s<l;s++)if(s<t[o])a.data.push(null);else{for(var c=0,u=0;u<t[o];u++)c+=i[s-u][1];a.data.push(+(c/t[o]).toFixed(3))}r.push(a)}return r}function c(t,e,n,i){var r=i.width-n.padding-e.xAxisPoints[0],o=e.eachSpacing*i.categories.length,a=t;return t>=0?a=0:Math.abs(t)>=o-r&&(a=r-o),a}function u(t,e,n){function i(t){while(t<0)t+=2*Math.PI;while(t>2*Math.PI)t-=2*Math.PI;return t}return t=i(t),e=i(e),n=i(n),e>n&&(n+=2*Math.PI,t<e&&(t+=2*Math.PI)),t>=e&&t<=n}function p(t,e,n){var i=t,r=n-e,o=i+(n-r-i)/Math.sqrt(2);o*=-1;var a=(n-r)*(Math.sqrt(2)-1)-(n-r-i)/Math.sqrt(2);return{transX:o,transY:a}}function h(t,e){function n(t,e){return!(!t[e-1]||!t[e+1])&&(t[e].y>=Math.max(t[e-1].y,t[e+1].y)||t[e].y<=Math.min(t[e-1].y,t[e+1].y))}var i=.2,r=.2,o=null,a=null,s=null,l=null;if(e<1?(o=t[0].x+(t[1].x-t[0].x)*i,a=t[0].y+(t[1].y-t[0].y)*i):(o=t[e].x+(t[e+1].x-t[e-1].x)*i,a=t[e].y+(t[e+1].y-t[e-1].y)*i),e>t.length-3){var c=t.length-1;s=t[c].x-(t[c].x-t[c-1].x)*r,l=t[c].y-(t[c].y-t[c-1].y)*r}else s=t[e+1].x-(t[e+2].x-t[e].x)*r,l=t[e+1].y-(t[e+2].y-t[e].y)*r;return n(t,e+1)&&(l=t[e+1].y),n(t,e)&&(a=t[e].y),{ctrA:{x:o,y:a},ctrB:{x:s,y:l}}}function f(t,e,n){return{x:n.x+t,y:n.y-e}}function d(t,e){if(e)while(o.isCollision(t,e))t.start.x>0?t.start.y--:t.start.x<0?t.start.y++:t.start.y>0?t.start.y++:t.start.y--;return t}function Y(t,e){var n=0;return t.map(function(t){return t.color||(t.color=e.colors[n],n=(n+1)%e.colors.length),t})}function Z(t,e){return t.map(function(t){return t.type||(t.type=e.type),t})}function S(t,e){var n=0,i=e-t;return n=i>=1e4?1e3:i>=1e3?100:i>=100?10:i>=10?5:i>=1?1:i>=.1?.1:.01,{minRange:s(t,"lower",n),maxRange:s(e,"upper",n)}}function L(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.fontSize;t=String(t);t=t.split("");for(var n=0,r=0;r<t.length;r++){var o=t[r];/[a-zA-Z]/.test(o)?n+=7:/[0-9]/.test(o)?n+=5.5:/\./.test(o)?n+=2.7:/-/.test(o)?n+=3.25:/[\u4e00-\u9fa5]/.test(o)?n+=10:/\(|\)/.test(o)?n+=3.73:/\s/.test(o)?n+=2.5:/%/.test(o)?n+=8:n+=10}return n*e/10}function g(t){return t.reduce(function(t,e){return(t.data?t.data:t).concat(e.data)},[])}function v(t){for(var e=new Array(t[0].data.length),n=0;n<e.length;n++)e[n]=0;for(var i=0;i<t.length;i++)for(n=0;n<e.length;n++)e[n]+=t[i].data[n];return t.reduce(function(t,n){return(t.data?t.data:t).concat(n.data).concat(e)},[])}function y(t,e,n){var i,r;return t.clientX?e.rotate?(r=e.height-t.clientX*e.pixelRatio,i=(t.pageY-n.currentTarget.offsetTop-e.height/e.pixelRatio/2*(e.pixelRatio-1))*e.pixelRatio):(i=t.clientX*e.pixelRatio,r=(t.pageY-n.currentTarget.offsetTop-e.height/e.pixelRatio/2*(e.pixelRatio-1))*e.pixelRatio):e.rotate?(r=e.height-t.x*e.pixelRatio,i=t.y*e.pixelRatio):(i=t.x*e.pixelRatio,r=t.y*e.pixelRatio),{x:i,y:r}}function J(t,e){for(var n=[],i=0;i<t.length;i++){var r=t[i];if(null!==r.data[e]&&"undefined"!==typeof r.data[e]){var o={};o.color=r.color,o.type=r.type,o.style=r.style,o.shape=r.shape,o.disableLegend=r.disableLegend,o.name=r.name,o.data=r.format?r.format(r.data[e]):r.data[e],n.push(o)}}return n}function T(t){var e=t.map(function(t){return L(t)});return Math.max.apply(null,e)}function X(t){for(var e=2*Math.PI/t,n=[],i=0;i<t;i++)n.push(e*i);return n.map(function(t){return-1*t+Math.PI/2})}function C(t,e,n,i){for(var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=t.map(function(t){return{text:r.format?r.format(t,i[n]):t.name+": "+t.data,color:t.color}}),a=[],s={x:0,y:0},l=0;l<e.length;l++){var c=e[l];"undefined"!==typeof c[n]&&null!==c[n]&&a.push(c[n])}for(var u=0;u<a.length;u++){var p=a[u];s.x=Math.round(p.x),s.y+=p.y}return s.y/=a.length,{textList:o,offset:s}}function x(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=t.map(function(t){return{text:r.format?r.format(t,i[n]):t.name+": "+t.data,color:t.color,disableLegend:!!t.disableLegend}});o=o.filter(function(t){if(!0!==t.disableLegend)return t});for(var a=[],s={x:0,y:0},l=0;l<e.length;l++){var c=e[l];"undefined"!==typeof c[n]&&null!==c[n]&&a.push(c[n])}for(var u=0;u<a.length;u++){var p=a[u];s.x=Math.round(p.x),s.y+=p.y}return s.y/=a.length,{textList:o,offset:s}}function m(t,e,n,i,r,o){arguments.length>6&&void 0!==arguments[6]&&arguments[6];var a=o.color.upFill,s=o.color.downFill,l=[a,a,s,a],c=[],u={text:r[i],color:null};c.push(u),e.map(function(e){0==i&&e.data[1]-e.data[0]<0?l[1]=s:(e.data[0]<t[i-1][1]&&(l[0]=s),e.data[1]<e.data[0]&&(l[1]=s),e.data[2]>t[i-1][1]&&(l[2]=a),e.data[3]<t[i-1][1]&&(l[3]=s));var n={text:"开盘："+e.data[0],color:l[0]},r={text:"收盘："+e.data[1],color:l[1]},o={text:"最低："+e.data[2],color:l[2]},u={text:"最高："+e.data[3],color:l[3]};c.push(n,r,o,u)});for(var p=[],h={x:0,y:0},f=0;f<n.length;f++){var d=n[f];"undefined"!==typeof d[i]&&null!==d[i]&&p.push(d[i])}return h.x=Math.round(p[0][0].x),{textList:c,offset:h}}function P(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=-1;return H(t,n,i)&&e.forEach(function(e,n){t.x+r>e&&(o=n)}),o}function H(t,e,n){return t.x<e.width-n.padding&&t.x>n.padding+n.yAxisWidth+n.yAxisTitleWidth&&t.y>n.padding&&t.y<e.height-n.legendHeight-n.xAxisHeight-n.padding}function D(t,e,n){var i=2*Math.PI/n,r=-1;if(Q(t,e.center,e.radius)){var o=function(t){return t<0&&(t+=2*Math.PI),t>2*Math.PI&&(t-=2*Math.PI),t},a=Math.atan2(e.center.y-t.y,t.x-e.center.x);a*=-1,a<0&&(a+=2*Math.PI);var s=e.angleList.map(function(t){return t=o(-1*t),t});s.forEach(function(t,e){var n=o(t-i/2),s=o(t+i/2);s<n&&(s+=2*Math.PI),(a>=n&&a<=s||a+2*Math.PI>=n&&a+2*Math.PI<=s)&&(r=e)})}return r}function M(t,e){var n=-1;if(Q(t,e.center,e.radius)){var i=Math.atan2(e.center.y-t.y,t.x-e.center.x);i=-i;for(var r=0,o=e.series.length;r<o;r++){var a=e.series[r];if(u(i,a._start_,a._start_+2*a._proportion_*Math.PI)){n=r;break}}}return n}function Q(t,e,n){return Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)<=Math.pow(n,2)}function b(t){var e=[],n=[];return t.forEach(function(t,i){null!==t?n.push(t):(n.length&&e.push(n),n=[])}),n.length&&e.push(n),e}function B(t,e,n){if(!1===e.legend)return{legendList:[],legendHeight:0};for(var i=5*e.pixelRatio,r=8*e.pixelRatio,o=15*e.pixelRatio,a=[],s=0,l=[],c=0;c<t.length;c++){var u=t[c],p=3*i+o+L(u.name||"undefined");s+p>e.width?(a.push(l),s=p,l=[u]):(s+=p,l.push(u))}return l.length&&a.push(l),{legendList:a,legendHeight:a.length*(n.fontSize+r)+i}}function A(t,e,n){var i={angle:0,xAxisHeight:n.xAxisHeight},r=O(t,e,n),o=r.eachSpacing,a=t.map(function(t){return L(t)}),s=Math.max.apply(this,a);return 1==e.xAxis.rotateLabel&&s+2*n.xAxisTextPadding>o&&(i.angle=45*Math.PI/180,i.xAxisHeight=2*n.xAxisTextPadding+s*Math.sin(i.angle)),i}function F(t,e,n,i,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,a=r.extra.radar||{};a.max=a.max||0;for(var s=Math.max(a.max,Math.max.apply(null,g(i))),l=[],c=function(r){var a=i[r],c={};c.color=a.color,c.data=[],a.data.forEach(function(i,r){var a={};a.angle=t[r],a.proportion=i/s,a.position=f(n*a.proportion*o*Math.cos(a.angle),n*a.proportion*o*Math.sin(a.angle),e),c.data.push(a)}),l.push(c)},u=0;u<i.length;u++)c(u);return l}function W(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=0,r=0,o=0;o<t.length;o++){var a=t[o];a.data=null===a.data?0:a.data,i+=a.data}for(var s=0;s<t.length;s++){var l=t[s];l.data=null===l.data?0:l.data,l._proportion_=0===i?1/t.length*n:l.data/i*n,l._radius_=e}for(var c=0;c<t.length;c++){var u=t[c];u._start_=r,r+=2*u._proportion_*Math.PI}return t}function G(t,e,n,i){for(var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=0,a=0,s=[],l=0;l<t.length;l++){var c=t[l];c.data=null===c.data?0:c.data,o+=c.data,s.push(c.data)}for(var u=s.pop(),p=s.shift(),h=i-n,f=0;f<t.length;f++){var d=t[f];d.data=null===d.data?0:d.data,d._proportion_=0===o||"area"==e?1/t.length*r:d.data/o*r,d._radius_=n+h*((d.data-u)/(p-u))}for(var Y=0;Y<t.length;Y++){var Z=t[Y];Z._start_=a,a+=2*Z._proportion_*Math.PI}return t}function N(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;1==n&&(n=.999999);for(var i=0;i<t.length;i++){var r=t[i];r.data=null===r.data?0:r.data;var o=void 0;o="default"==e.type?e.startAngle-e.endAngle+1:2,r._proportion_=o*r.data*n+e.startAngle,r._proportion_>=2&&(r._proportion_=r._proportion_%2)}return t}function R(t,e,n){for(var i=e-n+1,r=e,o=0;o<t.length;o++)t[o].value=null===t[o].value?0:t[o].value,t[o]._startAngle_=r,t[o]._endAngle_=i*t[o].value+e,t[o]._endAngle_>=2&&(t[o]._endAngle_=t[o]._endAngle_%2),r=t[o]._endAngle_;return t}function K(t,e,n){for(var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=0;r<t.length;r++){var o=t[r];if(o.data=null===o.data?0:o.data,"auto"==n.pointer.color){for(var a=0;a<e.length;a++)if(o.data<=e[a].value){o.color=e[a].color;break}}else o.color=n.pointer.color;var s=n.startAngle-n.endAngle+1;o._endAngle_=s*o.data+n.startAngle,o._oldAngle_=n.oldAngle,n.oldAngle<n.endAngle&&(o._oldAngle_+=2),o.data>=n.oldData?o._proportion_=(o._endAngle_-o._oldAngle_)*i+n.oldAngle:o._proportion_=o._oldAngle_-(o._oldAngle_-o._endAngle_)*i,o._proportion_>=2&&(o._proportion_=o._proportion_%2)}return t}function _(t){t=W(t);for(var e=0,n=0;n<t.length;n++){var i=t[n],r=i.format?i.format(+i._proportion_.toFixed(2)):o.toFixed(100*i._proportion_)+"%";e=Math.max(e,L(r))}return e}function w(t,e,n,i,r,o){return t.map(function(t){return null===t?null:(t.width=(e-2*r.columePadding)/n,o.extra.column&&o.extra.column.width&&+o.extra.column.width>0?t.width=Math.min(t.width,+o.extra.column.width):t.width=Math.min(t.width,25),t.x+=(i+.5-n/2)*t.width,t)})}function k(t,e,n,i,r,o,a){return t.map(function(t){return null===t?null:(t.width=e-2*r.columePadding,o.extra.column&&o.extra.column.width&&+o.extra.column.width>0?t.width=Math.min(t.width,+o.extra.column.width):t.width=Math.min(t.width,25),i>0&&(t.width-=2*a),t)})}function E(t,e,n,i,r,o,a){return t.map(function(t,n){return null===t?null:(t.width=e-2*r.columePadding,o.extra.column&&o.extra.column.width&&+o.extra.column.width>0?t.width=Math.min(t.width,+o.extra.column.width):t.width=Math.min(t.width,25),t)})}function O(t,e,n){var i=n.yAxisWidth+n.yAxisTitleWidth,r=e.width-2*n.padding-i,o=e.enableScroll?Math.min(e.xAxis.itemCount,t.length):t.length,a=r/o,s=[],l=n.padding+i,c=e.width-n.padding;return t.forEach(function(t,e){s.push(l+e*a)}),!0===e.enableScroll?s.push(l+t.length*a):s.push(c),{xAxisPoints:s,startX:l,endX:c,eachSpacing:a}}function j(t,e,n,i,r,o,a){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,l=[],c=o.height-2*a.padding-a.xAxisHeight-a.legendHeight;return t.forEach(function(t,u){if(null===t)l.push(null);else{var p=[];t.forEach(function(t,l){var h={};h.x=i[u]+Math.round(r/2);var f=t.value||t,d=c*(f-e)/(n-e);d*=s,h.y=o.height-a.xAxisHeight-a.legendHeight-Math.round(d)-a.padding,p.push(h)}),l.push(p)}}),l}function I(t,e,n,i,r,o,a){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,l=[],c=o.height-2*a.padding-a.xAxisHeight-a.legendHeight;return t.forEach(function(t,u){if(null===t)l.push(null);else{var p={};p.color=t.color,p.x=i[u]+Math.round(r/2);var h=t;"object"===typeof t&&null!==t&&(h=t.value);var f=c*(h-e)/(n-e);f*=s,p.y=o.height-a.xAxisHeight-a.legendHeight-Math.round(f)-a.padding,l.push(p)}}),l}function U(t,e,n,i,r,o,a,s,l){var c=arguments.length>9&&void 0!==arguments[9]?arguments[9]:1,u=[],p=o.height-2*a.padding-a.xAxisHeight-a.legendHeight;return t.forEach(function(t,h){if(null===t)u.push(null);else{var f={};if(f.color=t.color,f.x=i[h]+Math.round(r/2),s>0){for(var d=0,Y=0;Y<=s;Y++)d+=l[Y].data[h];var Z=d-t,S=p*(d-e)/(n-e),L=p*(Z-e)/(n-e)}else d=t,S=p*(d-e)/(n-e),L=0;var g=L;S*=c,g*=c,f.y=o.height-a.xAxisHeight-a.legendHeight-Math.round(S)-a.padding,f.y0=o.height-a.xAxisHeight-a.legendHeight-Math.round(g)-a.padding,u.push(f)}}),u}function q(t,e,n,i){var r;r="stack"==i?v(t):g(t);var o=[];r=r.filter(function(t){return"object"===typeof t&&null!==t?t.constructor==Array?null!==t:null!==t.value:null!==t}),r.map(function(t){"object"===typeof t?t.constructor==Array?t.map(function(t){o.push(t)}):o.push(t.value):o.push(t)});var a=0,s=0;if(o.length>0&&(a=Math.min.apply(this,o),s=Math.max.apply(this,o)),"number"===typeof e.yAxis.min&&(a=Math.min(e.yAxis.min,a)),"number"===typeof e.yAxis.max&&(s=Math.max(e.yAxis.max,s)),a===s){var l=s||10;s+=l}for(var c=S(a,s),u=c.minRange,p=c.maxRange,h=[],f=(p-u)/n.yAxisSplit,d=0;d<=n.yAxisSplit;d++)h.push(u+f*d);return h.reverse()}function z(t,e,n){var i=r({},e.extra.column||{type:""}),a=q(t,e,n,i.type),s=n.yAxisWidth,l=a.map(function(t){return t=o.toFixed(t,2),t=e.yAxis.format?e.yAxis.format(Number(t)):t,s=Math.max(s,L(t)+5),t});return!0===e.yAxis.disabled&&(s=0),{rangesFormat:l,ranges:a,yAxisWidth:s}}function V(t,e,n,i,r){var o=q(e,n,i),a=n.height-2*i.padding-i.xAxisHeight-i.legendHeight,s=o[0],l=o[o.length-1],c=i.padding,u=i.padding+a,p=s-(s-l)*(t-c)/(u-c);return p=n.yAxis.format?n.yAxis.format(Number(p)):p,p}function $(t,e){!0!==e.rotateLock?(t.translate(e.height,0),t.rotate(90*Math.PI/180)):!0!==e._rotate_&&(t.translate(e.height,0),t.rotate(90*Math.PI/180),e._rotate_=!0)}function tt(t,e,n,i,r){i.beginPath(),i.setStrokeStyle("#ffffff"),i.setLineWidth(1*r.pixelRatio),i.setFillStyle(e),"diamond"===n?t.forEach(function(t,e){null!==t&&(i.moveTo(t.x,t.y-4.5),i.lineTo(t.x-4.5,t.y),i.lineTo(t.x,t.y+4.5),i.lineTo(t.x+4.5,t.y),i.lineTo(t.x,t.y-4.5))}):"circle"===n?t.forEach(function(t,e){null!==t&&(i.moveTo(t.x+3.5*r.pixelRatio,t.y),i.arc(t.x,t.y,4*r.pixelRatio,0,2*Math.PI,!1))}):"rect"===n?t.forEach(function(t,e){null!==t&&(i.moveTo(t.x-3.5,t.y-3.5),i.rect(t.x-3.5,t.y-3.5,7,7))}):"triangle"===n&&t.forEach(function(t,e){null!==t&&(i.moveTo(t.x,t.y-4.5),i.lineTo(t.x-4.5,t.y+4.5),i.lineTo(t.x+4.5,t.y+4.5),i.lineTo(t.x,t.y-4.5))}),i.closePath(),i.fill(),i.stroke()}function et(t,e,n){var i=t.title.fontSize||e.titleFontSize,r=t.subtitle.fontSize||e.subtitleFontSize,o=t.title.name||"",a=t.subtitle.name||"",s=t.title.color||e.titleColor,l=t.subtitle.color||e.subtitleColor,c=o?i:0,u=a?r:0,p=5;if(a){var h=L(a,r),f=(t.width-h)/2+(t.subtitle.offsetX||0),d=(t.height-e.legendHeight+r)/2+(t.subtitle.offsetY||0);o&&(d-=(c+p)/2),n.beginPath(),n.setFontSize(r),n.setFillStyle(l),n.fillText(a,f,d),n.closePath(),n.stroke()}if(o){var Y=L(o,i),Z=(t.width-Y)/2+(t.title.offsetX||0),S=(t.height-e.legendHeight+i)/2+(t.title.offsetY||0);a&&(S+=(u+p)/2),n.beginPath(),n.setFontSize(i),n.setFillStyle(s),n.fillText(o,Z,S),n.closePath(),n.stroke()}}function nt(t,e,n,i){var r=e.data,o=void 0==e.textColor?"#666666":e.textColor;t.forEach(function(t,a){if(null!==t){i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(o);var s=r[a];"object"===typeof r[a]&&null!==r[a]&&(s=r[a].value);var l=e.format?e.format(s):s;i.fillText(l,t.x-L(l)/2,t.y-2),i.closePath(),i.stroke()}})}function it(t,e,n,i,r,o){e-=t.width/2+r.gaugeLabelTextMargin;for(var a=t.startAngle-t.endAngle+1,s=a/t.splitLine.splitNumber,l=t.endNumber-t.startNumber,c=l/t.splitLine.splitNumber,u=t.startAngle,p=t.startNumber,h=0;h<t.splitLine.splitNumber+1;h++){var f={x:e*Math.cos(u*Math.PI),y:e*Math.sin(u*Math.PI)};f.x+=n.x-L(p)/2,f.y+=n.y;var d=f.x,Y=f.y;o.beginPath(),o.setFontSize(r.fontSize),o.setFillStyle(t.labelColor||"#666666"),o.fillText(p,d,Y+r.fontSize/2),o.closePath(),o.stroke(),u+=s,u>=2&&(u%=2),p+=c}}function rt(t,e,n,i,r,a){var s=i.extra.radar||{};e+=r.radarLabelTextMargin,t.forEach(function(t,l){var c={x:e*Math.cos(t),y:e*Math.sin(t)},u=f(c.x,c.y,n),p=u.x,h=u.y;o.approximatelyEqual(c.x,0)?p-=L(i.categories[l]||"")/2:c.x<0&&(p-=L(i.categories[l]||"")),a.beginPath(),a.setFontSize(r.fontSize),a.setFillStyle(s.labelColor||"#666666"),a.fillText(i.categories[l]||"",p,h+r.fontSize/2),a.closePath(),a.stroke()})}function ot(t,e,n,i,r,a){for(var s=n.pieChartLinePadding,l=[],c=null,u=t.map(function(t){var e=2*Math.PI-(t._start_+2*Math.PI*t._proportion_/2),n=t.format?t.format(+t._proportion_.toFixed(2)):o.toFixed(100*t._proportion_)+"%",i=t.color,r=t._radius_;return{arc:e,text:n,color:i,radius:r}}),p=0;p<u.length;p++){var h=u[p],Y=Math.cos(h.arc)*(h.radius+s),Z=Math.sin(h.arc)*(h.radius+s),S=Math.cos(h.arc)*h.radius,g=Math.sin(h.arc)*h.radius,v=Y>=0?Y+n.pieChartTextPadding:Y-n.pieChartTextPadding,y=Z,J=L(h.text),T=y;c&&o.isSameXCoordinateArea(c.start,{x:v})&&(T=v>0?Math.min(y,c.start.y):Y<0?Math.max(y,c.start.y):y>0?Math.max(y,c.start.y):Math.min(y,c.start.y)),v<0&&(v-=J);var X={lineStart:{x:S,y:g},lineEnd:{x:Y,y:Z},start:{x:v,y:T},width:J,height:n.fontSize,text:h.text,color:h.color};c=d(X,c),l.push(c)}for(var C=0;C<l.length;C++){var x=l[C],m=f(x.lineStart.x,x.lineStart.y,a),P=f(x.lineEnd.x,x.lineEnd.y,a),H=f(x.start.x,x.start.y,a);i.setLineWidth(1*e.pixelRatio),i.setFontSize(n.fontSize),i.beginPath(),i.setStrokeStyle(x.color),i.setFillStyle(x.color),i.moveTo(m.x,m.y);var D=x.start.x<0?H.x+x.width:H.x,M=x.start.x<0?H.x-5:H.x+5;i.quadraticCurveTo(P.x,P.y,D,H.y),i.moveTo(m.x,m.y),i.stroke(),i.closePath(),i.beginPath(),i.moveTo(H.x+x.width,H.y),i.arc(D,H.y,2,0,2*Math.PI),i.closePath(),i.fill(),i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle("#666666"),i.fillText(x.text,M,H.y+3),i.closePath(),i.stroke(),i.closePath()}}function at(t,e,n,i){var r=e.extra.tooltip||{};r.gridType=void 0==r.gridType?"solid":r.gridType,r.dashLength=void 0==r.dashLength?4:r.dashLength;var o=n.padding,s=e.height-n.padding-n.xAxisHeight-n.legendHeight;if("dash"==r.gridType&&i.setLineDash([r.dashLength,r.dashLength]),i.beginPath(),i.setStrokeStyle(r.gridColor||"#cccccc"),i.setLineWidth(1*e.pixelRatio),i.moveTo(t,o),i.lineTo(t,s),i.closePath(),i.stroke(),i.setLineDash([]),r.xAxisLabel){var l=e.categories[e.tooltip.index];i.setFontSize(n.fontSize);var c=i.measureText(l).width,u=t-n.toolTipPadding-.5*c,p=s;i.beginPath(),i.setFillStyle(a(r.labelBgColor||n.toolTipBackground,r.labelBgOpacity||n.toolTipOpacity)),i.setStrokeStyle(r.labelBgColor||n.toolTipBackground),i.setLineWidth(1*e.pixelRatio),i.rect(u,p,c+2*n.toolTipPadding,n.fontSize+2*n.toolTipPadding),i.closePath(),i.stroke(),i.fill(),i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(r.labelFontColor||n.fontColor),i.fillText(l,u+2*n.toolTipPadding,p+n.toolTipPadding+n.fontSize),i.closePath(),i.stroke()}}function st(t,e,n,i,r){var o=t.extra.tooltip||{};o.gridType=void 0==o.gridType?"solid":o.gridType,o.dashLength=void 0==o.dashLength?4:o.dashLength;var s=e.padding+e.yAxisWidth+e.yAxisTitleWidth,l=t.width-e.padding;if("dash"==o.gridType&&n.setLineDash([o.dashLength,o.dashLength]),n.beginPath(),n.setStrokeStyle(o.gridColor||"#cccccc"),n.setLineWidth(1*t.pixelRatio),n.moveTo(s,t.tooltip.offset.y),n.lineTo(l,t.tooltip.offset.y),n.closePath(),n.stroke(),n.setLineDash([]),o.yAxisLabel){var c=V(t.tooltip.offset.y,t.series,t,e,i);n.setFontSize(e.fontSize);var u=n.measureText(c).width,p=s-2*e.toolTipPadding-u,h=t.tooltip.offset.y;n.beginPath(),n.setFillStyle(a(o.labelBgColor||e.toolTipBackground,o.labelBgOpacity||e.toolTipOpacity)),n.setStrokeStyle(o.labelBgColor||e.toolTipBackground),n.setLineWidth(1*t.pixelRatio),n.rect(p,h-.5*e.fontSize-e.toolTipPadding,u+2*e.toolTipPadding,e.fontSize+2*e.toolTipPadding),n.closePath(),n.stroke(),n.fill(),n.beginPath(),n.setFontSize(e.fontSize),n.setFillStyle(o.labelFontColor||e.fontColor),n.fillText(c,p+e.toolTipPadding,h+.5*e.fontSize),n.closePath(),n.stroke()}}function lt(t,e,n,i,r){var o=e.extra.tooltip||{activeBgColor:"#000000",activeBgOpacity:.08};o.activeBgColor=o.activeBgColor?o.activeBgColor:"#000000",o.activeBgOpacity=o.activeBgOpacity?o.activeBgOpacity:.08;var s=n.padding,l=e.height-n.padding-n.xAxisHeight-n.legendHeight;i.beginPath(),i.setFillStyle(a(o.activeBgColor,o.activeBgOpacity)),i.rect(t-r/2,s,r,l-s),i.closePath(),i.fill()}function ct(t,e,n,i,o,s,l){var c=n.extra.tooltip||{bgColor:"#000000",bgOpacity:.7,fontColor:"#FFFFFF"};c.bgColor=c.bgColor?c.bgColor:"#000000",c.bgOpacity=c.bgOpacity?c.bgOpacity:.7,c.fontColor=c.fontColor?c.fontColor:"#FFFFFF";var u=4*n.pixelRatio,p=5*n.pixelRatio,h=8*n.pixelRatio,f=!1;"line"!=n.type&&"area"!=n.type&&"candle"!=n.type&&"mix"!=n.type||at(n.tooltip.offset.x,n,i,o),e=r({x:0,y:0},e),e.y-=8*n.pixelRatio;var d=t.map(function(t){return L(t.text)}),Y=u+p+4*i.toolTipPadding+Math.max.apply(null,d),Z=2*i.toolTipPadding+t.length*i.toolTipLineHeight;e.x-Math.abs(n._scrollDistance_)+h+Y>n.width&&(f=!0),o.beginPath(),o.setFillStyle(a(c.bgColor||i.toolTipBackground,c.bgOpacity||i.toolTipOpacity)),f?(o.moveTo(e.x,e.y+10*n.pixelRatio),o.lineTo(e.x-h,e.y+10*n.pixelRatio-5*n.pixelRatio),o.lineTo(e.x-h,e.y),o.lineTo(e.x-h-Math.round(Y),e.y),o.lineTo(e.x-h-Math.round(Y),e.y+Z),o.lineTo(e.x-h,e.y+Z),o.lineTo(e.x-h,e.y+10*n.pixelRatio+5*n.pixelRatio),o.lineTo(e.x,e.y+10*n.pixelRatio)):(o.moveTo(e.x,e.y+10*n.pixelRatio),o.lineTo(e.x+h,e.y+10*n.pixelRatio-5*n.pixelRatio),o.lineTo(e.x+h,e.y),o.lineTo(e.x+h+Math.round(Y),e.y),o.lineTo(e.x+h+Math.round(Y),e.y+Z),o.lineTo(e.x+h,e.y+Z),o.lineTo(e.x+h,e.y+10*n.pixelRatio+5*n.pixelRatio),o.lineTo(e.x,e.y+10*n.pixelRatio)),o.closePath(),o.fill(),t.forEach(function(t,n){if(null!==t.color){o.beginPath(),o.setFillStyle(t.color);var r=e.x+h+2*i.toolTipPadding,a=e.y+(i.toolTipLineHeight-i.fontSize)/2+i.toolTipLineHeight*n+i.toolTipPadding+1;f&&(r=e.x-Y-h+2*i.toolTipPadding),o.fillRect(r,a,u,i.fontSize),o.closePath()}}),t.forEach(function(t,n){var r=e.x+h+2*i.toolTipPadding+u+p;f&&(r=e.x-Y-h+2*i.toolTipPadding+ +u+p);var a=e.y+(i.toolTipLineHeight-i.fontSize)/2+i.toolTipLineHeight*n+i.toolTipPadding;o.beginPath(),o.setFontSize(i.fontSize),o.setFillStyle(c.fontColor),o.fillText(t.text,r,a+i.fontSize),o.closePath(),o.stroke()})}function ut(t,e,n,i){var r=n.xAxisHeight+(e.height-n.xAxisHeight-L(t))/2;i.save(),i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(e.yAxis.titleFontColor||"#333333"),i.translate(0,e.height),i.rotate(-90*Math.PI/180),i.fillText(t,r,n.padding+.5*n.fontSize),i.closePath(),i.stroke(),i.restore()}function pt(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.extra.column||{type:{},meter:{}};o.type=void 0==o.type?"group":o.type,o.meter=o.meter||{},o.meter.border=void 0==o.meter.border?4:o.meter.border,o.meter.fillColor=void 0==o.meter.fillColor?"#FFFFFF":o.meter.fillColor;var a=z(t,e,n),s=a.ranges,l=O(e.categories,e,n),c=l.xAxisPoints,u=l.eachSpacing,p=s.pop(),h=s.shift(),f=[];return i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&i.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===r&&lt(e.tooltip.offset.x,e,n,i,u),t.forEach(function(a,s){var l=a.data;switch(o.type){case"group":var d=I(l,p,h,c,u,e,n,r),Y=U(l,p,h,c,u,e,n,s,t,r);f.push(Y),d=w(d,u,t.length,s,n,e),d.forEach(function(t,r){if(null!==t){i.beginPath(),i.setFillStyle(t.color||a.color);var o=t.x-t.width/2+1,s=e.height-t.y-n.padding-n.xAxisHeight-n.legendHeight;i.moveTo(o,t.y),i.fillRect(o,t.y,t.width-2,s),i.closePath(),i.fill()}});break;case"stack":d=U(l,p,h,c,u,e,n,s,t,r);f.push(d),d=E(d,u,t.length,s,n,e,t),d.forEach(function(t,r){if(null!==t){i.beginPath(),i.setFillStyle(t.color||a.color);var o=t.x-t.width/2+1,l=e.height-t.y-n.padding-n.xAxisHeight-n.legendHeight,c=e.height-t.y0-n.padding-n.xAxisHeight-n.legendHeight;s>0&&(l-=c),i.moveTo(o,t.y),i.fillRect(o,t.y,t.width-2,l),i.closePath(),i.fill()}});break;case"meter":d=I(l,p,h,c,u,e,n,r);f.push(d),d=k(d,u,t.length,s,n,e,o.meter.border),0==s?d.forEach(function(t,r){if(null!==t){i.beginPath(),i.setFillStyle(o.meter.fillColor);var s=t.x-t.width/2+1,l=e.height-t.y-n.padding-n.xAxisHeight-n.legendHeight;i.moveTo(s,t.y),i.fillRect(s,t.y,t.width-2,l),i.closePath(),i.fill(),i.beginPath(),i.setStrokeStyle(a.color),i.setLineWidth(o.meter.border*e.pixelRatio),i.moveTo(s+.5*o.meter.border,t.y+l),i.lineTo(s+.5*o.meter.border,t.y+.5*o.meter.border),i.lineTo(s+t.width-o.meter.border,t.y+.5*o.meter.border),i.lineTo(s+t.width-o.meter.border,t.y+l),i.stroke()}}):d.forEach(function(t,r){if(null!==t){i.beginPath(),i.setFillStyle(t.color||a.color);var o=t.x-t.width/2+1,s=e.height-t.y-n.padding-n.xAxisHeight-n.legendHeight;i.moveTo(o,t.y),i.rect(o,t.y,t.width-2,s),i.closePath(),i.fill()}});break}}),!1!==e.dataLabel&&1===r&&t.forEach(function(a,s){var l=a.data;switch(o.type){case"group":var f=I(l,p,h,c,u,e,n,r);f=w(f,u,t.length,s,n,e),nt(f,a,n,i);break;case"stack":f=U(l,p,h,c,u,e,n,s,t,r);nt(f,a,n,i);break;case"meter":f=I(l,p,h,c,u,e,n,r);nt(f,a,n,i);break}}),i.restore(),{xAxisPoints:c,calPoints:f,eachSpacing:u}}function ht(t,e,n,i,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,a=n.extra.candle||{color:{},average:{}};a.color.upLine=a.color.upLine?a.color.upLine:"#f04864",a.color.upFill=a.color.upFill?a.color.upFill:"#f04864",a.color.downLine=a.color.downLine?a.color.downLine:"#2fc25b",a.color.downFill=a.color.downFill?a.color.downFill:"#2fc25b",a.average.show=!0===a.average.show,a.average.name=a.average.name?a.average.name:[],a.average.day=a.average.day?a.average.day:[],a.average.color=a.average.color?a.average.color:["#1890ff","#2fc25b","#facc14","#f04864","#8543e0","#90ed7d"],n.extra.candle=a;var s=z(t,n,i),l=s.ranges,c=O(n.categories,n,i),u=c.xAxisPoints,p=c.eachSpacing,f=l.pop(),d=l.shift(),Y=[];return r.save(),n._scrollDistance_&&0!==n._scrollDistance_&&!0===n.enableScroll&&r.translate(n._scrollDistance_,0),a.average.show&&e.forEach(function(t,e){var a=t.data,s=I(a,f,d,u,p,n,i,o),l=b(s);l.forEach(function(e,n){r.beginPath(),r.setStrokeStyle(t.color),r.setLineWidth(1),1===e.length?(r.moveTo(e[0].x,e[0].y),r.arc(e[0].x,e[0].y,1,0,2*Math.PI)):(r.moveTo(e[0].x,e[0].y),e.forEach(function(t,n){if(n>0){var i=h(e,n-1);r.bezierCurveTo(i.ctrA.x,i.ctrA.y,i.ctrB.x,i.ctrB.y,t.x,t.y)}}),r.moveTo(e[0].x,e[0].y)),r.closePath(),r.stroke()})}),t.forEach(function(t,e){var s=t.data,l=j(s,f,d,u,p,n,i,o);Y.push(l);var c=b(l);c=c[0],c.forEach(function(t,e){r.beginPath(),s[e][1]-s[e][0]>0?(r.setStrokeStyle(a.color.upLine),r.setFillStyle(a.color.upFill),r.setLineWidth(1*n.pixelRatio),r.moveTo(t[3].x,t[3].y),r.lineTo(t[1].x,t[1].y),r.lineTo(t[1].x-p/4,t[1].y),r.lineTo(t[0].x-p/4,t[0].y),r.lineTo(t[0].x,t[0].y),r.lineTo(t[2].x,t[2].y),r.lineTo(t[0].x,t[0].y),r.lineTo(t[0].x+p/4,t[0].y),r.lineTo(t[1].x+p/4,t[1].y),r.lineTo(t[1].x,t[1].y),r.moveTo(t[3].x,t[3].y)):(r.setStrokeStyle(a.color.downLine),r.setFillStyle(a.color.downFill),r.setLineWidth(1*n.pixelRatio),r.moveTo(t[3].x,t[3].y),r.lineTo(t[0].x,t[0].y),r.lineTo(t[0].x-p/4,t[0].y),r.lineTo(t[1].x-p/4,t[1].y),r.lineTo(t[1].x,t[1].y),r.lineTo(t[2].x,t[2].y),r.lineTo(t[1].x,t[1].y),r.lineTo(t[1].x+p/4,t[1].y),r.lineTo(t[0].x+p/4,t[0].y),r.lineTo(t[0].x,t[0].y),r.moveTo(t[3].x,t[3].y)),r.closePath(),r.fill(),r.stroke()})}),r.restore(),{xAxisPoints:u,calPoints:Y,eachSpacing:p}}function ft(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.extra.area||{type:"straight",opacity:.5,addLine:!1,width:2};o.type=o.type?o.type:"straight",o.opacity=o.opacity?o.opacity:.2,o.addLine=1==o.addLine,o.width=o.width?o.width:2;var s=z(t,e,n),l=s.ranges,c=O(e.categories,e,n),u=c.xAxisPoints,p=c.eachSpacing,f=l.pop(),d=l.shift(),Y=e.height-n.padding-n.xAxisHeight-n.legendHeight,Z=[];return i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&i.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===r&&at(e.tooltip.offset.x,e,n,i),t.forEach(function(t,s){var l=t.data,c=I(l,f,d,u,p,e,n,r);Z.push(c);for(var S=b(c),L=function(n){var r=S[n];if(i.beginPath(),i.setStrokeStyle(a(t.color,o.opacity)),i.setFillStyle(a(t.color,o.opacity)),i.setLineWidth(o.width*e.pixelRatio),r.length>1){var s=r[0],l=r[r.length-1];i.moveTo(s.x,s.y),"curve"===o.type?r.forEach(function(t,e){if(e>0){var n=h(r,e-1);i.bezierCurveTo(n.ctrA.x,n.ctrA.y,n.ctrB.x,n.ctrB.y,t.x,t.y)}}):r.forEach(function(t,e){e>0&&i.lineTo(t.x,t.y)}),i.lineTo(l.x,Y),i.lineTo(s.x,Y),i.lineTo(s.x,s.y)}else{var c=r[0];i.moveTo(c.x-p/2,c.y),i.lineTo(c.x+p/2,c.y),i.lineTo(c.x+p/2,Y),i.lineTo(c.x-p/2,Y),i.moveTo(c.x-p/2,c.y)}i.closePath(),i.fill(),o.addLine&&(i.beginPath(),i.setStrokeStyle(t.color),i.setLineWidth(o.width*e.pixelRatio),1===r.length?(i.moveTo(r[0].x,r[0].y),i.arc(r[0].x,r[0].y,1,0,2*Math.PI)):(i.moveTo(r[0].x,r[0].y),"curve"===o.type?r.forEach(function(t,e){if(e>0){var n=h(r,e-1);i.bezierCurveTo(n.ctrA.x,n.ctrA.y,n.ctrB.x,n.ctrB.y,t.x,t.y)}}):r.forEach(function(t,e){e>0&&i.lineTo(t.x,t.y)}),i.moveTo(r[0].x,r[0].y)),i.closePath(),i.stroke())},g=0;g<S.length;g++)L(g);if(!1!==e.dataPointShape){var v=n.dataPointShape[s%n.dataPointShape.length];tt(c,t.color,v,i,e)}}),!1!==e.dataLabel&&1===r&&t.forEach(function(t,o){var a=t.data,s=I(a,f,d,u,p,e,n,r);nt(s,t,n,i)}),i.restore(),{xAxisPoints:u,calPoints:Z,eachSpacing:p}}function dt(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.extra.line||{type:"straight",width:2};o.type=o.type?o.type:"straight",o.width=o.width?o.width:2;var a=z(t,e,n),s=a.ranges,l=O(e.categories,e,n),c=l.xAxisPoints,u=l.eachSpacing,p=s.pop(),f=s.shift(),d=[];return i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&i.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===r&&at(e.tooltip.offset.x,e,n,i),t.forEach(function(t,a){var s=t.data,l=I(s,p,f,c,u,e,n,r);d.push(l);var Y=b(l);if(Y.forEach(function(n,r){i.beginPath(),i.setStrokeStyle(t.color),i.setLineWidth(o.width*e.pixelRatio),1===n.length?(i.moveTo(n[0].x,n[0].y),i.arc(n[0].x,n[0].y,1,0,2*Math.PI)):(i.moveTo(n[0].x,n[0].y),"curve"===o.type?n.forEach(function(t,e){if(e>0){var r=h(n,e-1);i.bezierCurveTo(r.ctrA.x,r.ctrA.y,r.ctrB.x,r.ctrB.y,t.x,t.y)}}):n.forEach(function(t,e){e>0&&i.lineTo(t.x,t.y)}),i.moveTo(n[0].x,n[0].y)),i.closePath(),i.stroke()}),!1!==e.dataPointShape){var Z=n.dataPointShape[a%n.dataPointShape.length];tt(l,t.color,Z,i,e)}}),!1!==e.dataLabel&&1===r&&t.forEach(function(t,o){var a=t.data,s=I(a,p,f,c,u,e,n,r);nt(s,t,n,i)}),i.restore(),{xAxisPoints:c,calPoints:d,eachSpacing:u}}function Yt(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=z(t,e,n),a=o.ranges,s=O(e.categories,e,n),l=s.xAxisPoints,c=s.eachSpacing,u=a.pop(),p=a.shift(),f=e.height-n.padding-n.xAxisHeight-n.legendHeight,d=[],Y=0,Z=0;if(t.forEach(function(t,e){"column"==t.type&&(Z+=1)}),i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&i.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===r&&at(e.tooltip.offset.x,e,n,i),t.forEach(function(t,o){var a=t.data,s=I(a,u,p,l,c,e,n,r);if(d.push(s),"column"==t.type&&(s=w(s,c,Z,Y,n,e),s.forEach(function(r,o){if(null!==r){i.beginPath(),i.setFillStyle(r.color||t.color);var a=r.x-r.width/2+1,s=e.height-r.y-n.padding-n.xAxisHeight-n.legendHeight;i.moveTo(a,r.y),i.rect(a,r.y,r.width-2,s),i.closePath(),i.fill()}}),Y+=1),"area"==t.type)for(var S=b(s),L=function(n){var r=S[n];if(i.beginPath(),i.setStrokeStyle(t.color),i.setFillStyle(t.color),i.setGlobalAlpha(.2),i.setLineWidth(2*e.pixelRatio),r.length>1){v=r[0];var o=r[r.length-1];i.moveTo(v.x,v.y),"curve"===t.style?r.forEach(function(t,e){if(e>0){var n=h(r,e-1);i.bezierCurveTo(n.ctrA.x,n.ctrA.y,n.ctrB.x,n.ctrB.y,t.x,t.y)}}):r.forEach(function(t,e){e>0&&i.lineTo(t.x,t.y)}),i.lineTo(o.x,f),i.lineTo(v.x,f),i.lineTo(v.x,v.y)}else{var a=r[0];i.moveTo(a.x-c/2,a.y),i.lineTo(a.x+c/2,a.y),i.lineTo(a.x+c/2,f),i.lineTo(a.x-c/2,f),i.moveTo(a.x-c/2,a.y)}i.closePath(),i.fill(),i.setGlobalAlpha(1)},g=0;g<S.length;g++){var v;L(g)}if("line"==t.type){var y=b(s);y.forEach(function(n,r){i.beginPath(),i.setStrokeStyle(t.color),i.setLineWidth(2*e.pixelRatio),1===n.length?(i.moveTo(n[0].x,n[0].y),i.arc(n[0].x,n[0].y,1,0,2*Math.PI)):(i.moveTo(n[0].x,n[0].y),"curve"==t.style?n.forEach(function(t,e){if(e>0){var r=h(n,e-1);i.bezierCurveTo(r.ctrA.x,r.ctrA.y,r.ctrB.x,r.ctrB.y,t.x,t.y)}}):n.forEach(function(t,e){e>0&&i.lineTo(t.x,t.y)}),i.moveTo(n[0].x,n[0].y)),i.closePath(),i.stroke()})}if("point"==t.type){y=b(s);y.forEach(function(n,r){i.beginPath(),i.setStrokeStyle(t.color),i.setLineWidth(2*e.pixelRatio),i.moveTo(n[0].x,n[0].y),i.arc(n[0].x,n[0].y,1,0,2*Math.PI),i.closePath(),i.stroke()})}if(!1!==e.dataPointShape&&"column"!==t.type){var J=n.dataPointShape[o%n.dataPointShape.length];tt(s,t.color,J,i,e)}}),!1!==e.dataLabel&&1===r){Y=0;t.forEach(function(t,o){var a=t.data,s=I(a,u,p,l,c,e,n,r);"column"!==t.type?nt(s,t,n,i):(s=w(s,c,Z,Y,n,e),nt(s,t,n,i),Y+=1)})}return i.restore(),{xAxisPoints:l,calPoints:d,eachSpacing:c}}function Zt(t,e,n,i,r,o){var a=t.extra.tooltip||{};a.horizentalLine&&t.tooltip&&1===i&&("line"==t.type||"area"==t.type||"column"==t.type||"candle"==t.type||"mix"==t.type)&&st(t,e,n,r,o),n.save(),t._scrollDistance_&&0!==t._scrollDistance_&&!0===t.enableScroll&&n.translate(t._scrollDistance_,0),t.tooltip&&t.tooltip.textList&&t.tooltip.textList.length&&1===i&&ct(t.tooltip.textList,t.tooltip.offset,t,e,n,r,o),n.restore()}function St(t,e,n,i){var r=O(t,e,n),o=r.xAxisPoints,a=r.startX,s=r.endX,l=r.eachSpacing,c=e.height-n.padding-n.xAxisHeight-n.legendHeight,u=n.padding;if(e.enableScroll&&e.xAxis.scrollShow){var h=e.height-n.padding-n.legendHeight+6*e.pixelRatio,f=s-a,d=l*(o.length-1),Y=f*f/d,Z=0;e._scrollDistance_&&(Z=-e._scrollDistance_*f/d),i.beginPath(),i.setLineCap("round"),i.setLineWidth(6*e.pixelRatio),i.setStrokeStyle(e.xAxis.scrollBackgroundColor||"#EFEBEF"),i.moveTo(a,h),i.lineTo(s,h),i.stroke(),i.closePath(),i.beginPath(),i.setLineCap("round"),i.setLineWidth(6*e.pixelRatio),i.setStrokeStyle(e.xAxis.scrollColor||"#A6A6A6"),i.moveTo(a+Z,h),i.lineTo(a+Z+Y,h),i.stroke(),i.setLineCap("butt"),i.closePath()}if(i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&i.translate(e._scrollDistance_,0),i.beginPath(),i.setStrokeStyle(e.xAxis.gridColor||"#cccccc"),i.setLineCap("butt"),i.setLineWidth(1*e.pixelRatio),"dash"==e.xAxis.gridType&&i.setLineDash([e.xAxis.dashLength,e.xAxis.dashLength]),!0!==e.xAxis.disableGrid&&("calibration"===e.xAxis.type?o.forEach(function(t,n){n>0&&(i.moveTo(t-l/2,c),i.lineTo(t-l/2,c+4*e.pixelRatio))}):o.forEach(function(t,e){i.moveTo(t,c),i.lineTo(t,u)})),i.closePath(),i.stroke(),i.setLineDash([]),!0!==e.xAxis.disabled){var S=e.width-2*n.padding-n.yAxisWidth-n.yAxisTitleWidth,g=t.length;0===n._xAxisTextAngle_?e.xAxis.labelCount&&(g=e.xAxis.itemCount?Math.ceil(t.length/e.xAxis.itemCount*e.xAxis.labelCount):e.xAxis.labelCount,g-=1):g=Math.min(t.length,Math.ceil(S/n.fontSize/1.5));for(var v=Math.ceil(t.length/g),y=[],J=t.length,T=0;T<J;T++)T%v!==0?y.push(""):y.push(t[T]);y[J-1]=t[J-1],0===n._xAxisTextAngle_?y.forEach(function(t,r){var a=l/2-L(t)/2;i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(e.xAxis.fontColor||"#666666"),i.fillText(t,o[r]+a,c+n.fontSize+5),i.closePath(),i.stroke()}):y.forEach(function(t,r){i.save(),i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(e.xAxis.fontColor||"#666666");var a=L(t),s=l/2-a,u=p(o[r]+l/2,c+n.fontSize/2+5,e.height),h=u.transX,f=u.transY;i.rotate(-1*n._xAxisTextAngle_),i.translate(h,f),i.fillText(t,o[r]+s,c+n.fontSize+5),i.closePath(),i.stroke(),i.restore()})}i.restore()}function Lt(t,e,n,i){if(!0!==e.yAxis.disableGrid){for(var r=e.height-2*n.padding-n.xAxisHeight-n.legendHeight,o=Math.floor(r/n.yAxisSplit),a=n.yAxisWidth+n.yAxisTitleWidth,s=n.padding+a,l=O(t,e,n),c=l.xAxisPoints,u=l.eachSpacing,p=u*(c.length-1),h=s+p,f=[],d=0;d<n.yAxisSplit;d++)f.push(n.padding+o*d);f.push(n.padding+o*n.yAxisSplit+2),i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&i.translate(e._scrollDistance_,0),"dash"==e.yAxis.gridType&&i.setLineDash([e.yAxis.dashLength,e.yAxis.dashLength]),i.beginPath(),i.setStrokeStyle(e.yAxis.gridColor||"#cccccc"),i.setLineWidth(1*e.pixelRatio),f.forEach(function(t,e){i.moveTo(s,t),i.lineTo(h,t)}),i.closePath(),i.stroke(),i.setLineDash([]),i.restore()}}function gt(t,e,n,i){if(!0!==e.yAxis.disabled){var r=z(t,e,n),o=r.rangesFormat,a=n.yAxisWidth+n.yAxisTitleWidth,s=e.height-2*n.padding-n.xAxisHeight-n.legendHeight,l=Math.floor(s/n.yAxisSplit),c=n.padding+a,u=e.width-n.padding,p=e.height-n.padding-n.xAxisHeight-n.legendHeight+n.xAxisTextPadding;i.beginPath(),i.setFillStyle(e.background||"#ffffff"),e._scrollDistance_<0&&i.fillRect(0,0,c,p+n.xAxisHeight),i.fillRect(u,0,e.width,p+n.xAxisHeight),i.closePath(),i.stroke();for(var h=[],f=0;f<=n.yAxisSplit;f++)h.push(n.padding+l*f);o.forEach(function(t,r){var o=h[r]?h[r]:p;i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(e.yAxis.fontColor||"#666666"),i.fillText(t,n.padding+n.yAxisTitleWidth,o+n.fontSize/2),i.closePath(),i.stroke()}),e.yAxis.title&&ut(e.yAxis.title,e,n,i)}}function vt(t,e,n,i){if(!1!==e.legend){var r=B(t,e,n),o=r.legendList,a=5*e.pixelRatio,s=10*e.pixelRatio,l=15*e.pixelRatio;o.forEach(function(t,r){for(var o=0,c=0;c<t.length;c++){var u=t[c];u.name=u.name||"undefined",o+=3*a+L(u.name)+l}var p=(e.width-o)/2+a,h=e.height-n.padding-n.legendHeight+r*(n.fontSize+s)+a+s;i.setFontSize(n.fontSize);for(var f=0;f<t.length;f++){var d=t[f];switch(e.type){case"line":i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(d.color),i.setFillStyle(d.color),i.moveTo(p+7.5*e.pixelRatio,h+5*e.pixelRatio),i.arc(p+7.5*e.pixelRatio,h+5*e.pixelRatio,6*e.pixelRatio,0,2*Math.PI),i.closePath(),i.fill(),i.stroke();break;case"pie":i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(d.color),i.setFillStyle(d.color),i.moveTo(p+7.5*e.pixelRatio,h+5*e.pixelRatio),i.arc(p+7.5*e.pixelRatio,h+5*e.pixelRatio,6*e.pixelRatio,0,2*Math.PI),i.closePath(),i.fill(),i.stroke();break;case"ring":case"rose":i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(d.color),i.setFillStyle(d.color),i.moveTo(p+7.5*e.pixelRatio,h+5*e.pixelRatio),i.arc(p+7.5*e.pixelRatio,h+5*e.pixelRatio,6*e.pixelRatio,0,2*Math.PI),i.closePath(),i.fill(),i.stroke();break;case"gauge":break;case"arcbar":break;default:i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(d.color),i.setFillStyle(d.color),i.moveTo(p,h),i.fillRect(p,h,15*e.pixelRatio,10*e.pixelRatio),i.closePath(),i.fill(),i.stroke()}p+=a+l,i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(e.extra.legendTextColor||"#333333"),i.fillText(d.name,p,h+6*e.pixelRatio+3*e.pixelRatio),i.closePath(),i.stroke(),p+=L(d.name)+2*a}})}}function yt(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.extra.pie||{},s={x:e.width/2,y:(e.height-n.legendHeight)/2},l=Math.min(s.x-n.pieChartLinePadding-n.pieChartTextPadding-n._pieTextMaxLength_,s.y-n.pieChartLinePadding-n.pieChartTextPadding);e.dataLabel?l-=10:l-=2*n.padding,t=W(t,l,r);var c=n.pieChartLinePadding/2;if(t=t.map(function(t){return t._start_+=(o.offsetAngle||0)*Math.PI/180,t}),t.forEach(function(t,n){e.tooltip&&e.tooltip.index==n&&(i.beginPath(),i.setFillStyle(a(t.color,e.extra.pie.activeOpacity||.5)),i.moveTo(s.x,s.y),i.arc(s.x,s.y,t._radius_+c,t._start_,t._start_+2*t._proportion_*Math.PI),i.closePath(),i.fill()),i.beginPath(),i.setLineWidth(2*e.pixelRatio),i.lineJoin="round",i.setStrokeStyle("#ffffff"),i.setFillStyle(t.color),i.moveTo(s.x,s.y),i.arc(s.x,s.y,t._radius_,t._start_,t._start_+2*t._proportion_*Math.PI),i.closePath(),i.fill(),!0!==e.disablePieStroke&&i.stroke()}),"ring"===e.type){var u=.6*l;"number"===typeof e.extra.pie.ringWidth&&e.extra.pie.ringWidth>0&&(u=Math.max(0,l-e.extra.pie.ringWidth)),i.beginPath(),i.setFillStyle(e.background||"#ffffff"),i.moveTo(s.x,s.y),i.arc(s.x,s.y,u,0,2*Math.PI),i.closePath(),i.fill()}if(!1!==e.dataLabel&&1===r){for(var p=!1,h=0,f=t.length;h<f;h++)if(t[h].data>0){p=!0;break}p&&ot(t,e,n,i,l,s)}return 1===r&&"ring"===e.type&&et(e,n,i),{center:s,radius:l,series:t}}function Jt(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.extra.rose||{};o.type=o.type||"area";var s={x:e.width/2,y:(e.height-n.legendHeight)/2},l=Math.min(s.x-n.pieChartLinePadding-n.pieChartTextPadding-n._pieTextMaxLength_,s.y-n.pieChartLinePadding-n.pieChartTextPadding);e.dataLabel?l-=10:l-=2*n.padding;var c=o.minRadius||.5*l;t=G(t,o.type,c,l,r);var u=n.pieChartLinePadding/2;if(t=t.map(function(t){return t._start_+=(o.offsetAngle||0)*Math.PI/180,t}),t.forEach(function(t,n){e.tooltip&&e.tooltip.index==n&&(i.beginPath(),i.setFillStyle(a(t.color,o.activeOpacity||.5)),i.moveTo(s.x,s.y),i.arc(s.x,s.y,u+t._radius_,t._start_,t._start_+2*t._proportion_*Math.PI),i.closePath(),i.fill()),i.beginPath(),i.setLineWidth(2*e.pixelRatio),i.lineJoin="round",i.setStrokeStyle("#ffffff"),i.setFillStyle(t.color),i.moveTo(s.x,s.y),i.arc(s.x,s.y,t._radius_,t._start_,t._start_+2*t._proportion_*Math.PI),i.closePath(),i.fill(),!0!==e.disablePieStroke&&i.stroke()}),!1!==e.dataLabel&&1===r){for(var p=!1,h=0,f=t.length;h<f;h++)if(t[h].data>0){p=!0;break}p&&ot(t,e,n,i,l,s)}return{center:s,radius:l,series:t}}function Tt(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.extra.arcbar||{};o.startAngle=o.startAngle?o.startAngle:.75,o.endAngle=o.endAngle?o.endAngle:.25,o.type=o.type?o.type:"default",t=N(t,o,r);var a={x:e.width/2,y:e.height/2},s=Math.min(a.x,a.y);"number"===typeof o.width&&o.width>0?o.width=o.width:o.width=12*e.pixelRatio,s-=n.padding+o.width/2,i.setLineWidth(o.width),i.setStrokeStyle(o.backgroundColor||"#E9E9E9"),i.setLineCap("round"),i.beginPath(),"default"==o.type?i.arc(a.x,a.y,s,o.startAngle*Math.PI,o.endAngle*Math.PI,!1):i.arc(a.x,a.y,s,0,2*Math.PI,!1),i.stroke();for(var l=0;l<t.length;l++){var c=t[l];i.setLineWidth(o.width),i.setStrokeStyle(c.color),i.setLineCap("round"),i.beginPath(),i.arc(a.x,a.y,s,o.startAngle*Math.PI,c._proportion_*Math.PI,!1),i.stroke()}return et(e,n,i),{center:a,radius:s,series:t}}function Xt(t,e,n,i,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,a=n.extra.gauge||{};a.startAngle=a.startAngle?a.startAngle:.75,void 0==a.oldAngle&&(a.oldAngle=a.startAngle),void 0==a.oldData&&(a.oldData=0),a.endAngle=a.endAngle?a.endAngle:.25,t=R(t,a.startAngle,a.endAngle);var s={x:n.width/2,y:n.height/2},l=Math.min(s.x,s.y);"number"===typeof a.width&&a.width>0?a.width=a.width:a.width=15*n.pixelRatio,l-=i.padding+a.width/2;var c=l-a.width;r.setLineWidth(a.width),r.setLineCap("butt");for(var u=0;u<t.length;u++){var p=t[u];r.beginPath(),r.setStrokeStyle(p.color),r.arc(s.x,s.y,l,p._startAngle_*Math.PI,p._endAngle_*Math.PI,!1),r.stroke()}r.save();var h=a.startAngle-a.endAngle+1;a.splitLine.fixRadius=a.splitLine.fixRadius?a.splitLine.fixRadius:0,a.splitLine.splitNumber=a.splitLine.splitNumber?a.splitLine.splitNumber:10,a.splitLine.width=a.splitLine.width?a.splitLine.width:15*n.pixelRatio,a.splitLine.color=a.splitLine.color?a.splitLine.color:"#FFFFFF",a.splitLine.childNumber=a.splitLine.childNumber?a.splitLine.childNumber:5,a.splitLine.childWidth=a.splitLine.childWidth?a.splitLine.childWidth:5*n.pixelRatio;var f=h/a.splitLine.splitNumber,d=h/a.splitLine.splitNumber/a.splitLine.childNumber,Y=-l-.5*a.width-a.splitLine.fixRadius,Z=-l-.5*a.width-a.splitLine.fixRadius+a.splitLine.width,S=-l-.5*a.width-a.splitLine.fixRadius+a.splitLine.childWidth;r.translate(s.x,s.y),r.rotate((a.startAngle-1)*Math.PI);for(var L=0;L<a.splitLine.splitNumber+1;L++)r.beginPath(),r.setStrokeStyle(a.splitLine.color),r.setLineWidth(2*n.pixelRatio),r.moveTo(Y,0),r.lineTo(Z,0),r.stroke(),r.rotate(f*Math.PI);r.restore(),r.save(),r.translate(s.x,s.y),r.rotate((a.startAngle-1)*Math.PI);for(var g=0;g<a.splitLine.splitNumber*a.splitLine.childNumber+1;g++)r.beginPath(),r.setStrokeStyle(a.splitLine.color),r.setLineWidth(1*n.pixelRatio),r.moveTo(Y,0),r.lineTo(S,0),r.stroke(),r.rotate(d*Math.PI);r.restore(),a.pointer.width=a.pointer.width?a.pointer.width:15*n.pixelRatio,void 0==a.pointer.color||"auto"==a.pointer.color?a.pointer.color:(a.pointer.color,a.pointer.color),e=K(e,t,a,o);for(var v=0;v<e.length;v++){var y=e[v];r.save(),r.translate(s.x,s.y),r.rotate((y._proportion_-1)*Math.PI),r.beginPath(),r.setFillStyle(y.color),r.moveTo(a.pointer.width,0),r.lineTo(0,-a.pointer.width/2),r.lineTo(-c,0),r.lineTo(0,a.pointer.width/2),r.lineTo(a.pointer.width,0),r.closePath(),r.fill(),r.beginPath(),r.setFillStyle("#FFFFFF"),r.arc(0,0,a.pointer.width/6,0,2*Math.PI,!1),r.fill(),r.restore()}return!1!==n.dataLabel&&it(a,l,s,n,i,r),et(n,i,r),1===o&&"gauge"===n.type&&(a.oldAngle=e[0]._proportion_,a.oldData=e[0].data),{center:s,radius:l,innerRadius:c,categories:t,totalAngle:h}}function Ct(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.extra.radar||{},a=X(e.categories.length),s={x:e.width/2,y:(e.height-n.legendHeight)/2},l=Math.min(s.x-(T(e.categories)+n.radarLabelTextMargin),s.y-n.radarLabelTextMargin);l-=n.padding,i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(o.gridColor||"#cccccc"),a.forEach(function(t){var e=f(l*Math.cos(t),l*Math.sin(t),s);i.moveTo(s.x,s.y),i.lineTo(e.x,e.y)}),i.stroke(),i.closePath();for(var c=function(t){var r={};i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(o.gridColor||"#cccccc"),a.forEach(function(e,o){var a=f(l/n.radarGridCount*t*Math.cos(e),l/n.radarGridCount*t*Math.sin(e),s);0===o?(r=a,i.moveTo(a.x,a.y)):i.lineTo(a.x,a.y)}),i.lineTo(r.x,r.y),i.stroke(),i.closePath()},u=1;u<=n.radarGridCount;u++)c(u);var p=F(a,s,l,t,e,r);return p.forEach(function(t,r){if(i.beginPath(),i.setFillStyle(t.color),i.setGlobalAlpha(.3),t.data.forEach(function(t,e){0===e?i.moveTo(t.position.x,t.position.y):i.lineTo(t.position.x,t.position.y)}),i.closePath(),i.fill(),i.setGlobalAlpha(1),!1!==e.dataPointShape){var o=n.dataPointShape[r%n.dataPointShape.length],a=t.data.map(function(t){return t.position});tt(a,t.color,o,i,e)}}),rt(a,l,s,e,n,i),{center:s,radius:l,angleList:a}}function xt(t,e){e.draw()}var mt={easeIn:function(t){return Math.pow(t,3)},easeOut:function(t){return Math.pow(t-1,3)+1},easeInOut:function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},linear:function(t){return t}};function Pt(t){this.isStop=!1,t.duration="undefined"===typeof t.duration?1e3:t.duration,t.timing=t.timing||"linear";var e=17,n=function(){return"undefined"!==typeof requestAnimationFrame?requestAnimationFrame:"undefined"!==typeof setTimeout?function(t,e){setTimeout(function(){var e=+new Date;t(e)},e)}:function(t){t(null)}},i=n(),r=null,o=function(n){if(null===n||!0===this.isStop)return t.onProcess&&t.onProcess(1),void(t.onAnimationFinish&&t.onAnimationFinish());if(null===r&&(r=n),n-r<t.duration){var a=(n-r)/t.duration,s=mt[t.timing];a=s(a),t.onProcess&&t.onProcess(a),i(o,e)}else t.onProcess&&t.onProcess(1),t.onAnimationFinish&&t.onAnimationFinish()};o=o.bind(this),i(o,e)}function Ht(t,e,n,i){var o=this,a=e.series,s=e.categories;a=Y(a,n),a=Z(a,e);var c=null;if("candle"==t){var u=r({},e.extra.candle.average);u.show&&(c=l(u.day,u.name,u.color,a[0].data),e.seriesMA=c)}var p=B(a,e,n),h=p.legendHeight;n.legendHeight=h;var f=z(a,e,n),d=f.yAxisWidth;if(n.yAxisWidth=d,s&&s.length){var S=A(s,e,n),L=S.xAxisHeight,g=S.angle;n.xAxisHeight=L,n._xAxisTextAngle_=g}"pie"!==t&&"ring"!==t&&"rose"!==t||(n._pieTextMaxLength_=!1===e.dataLabel?0:_(a));var v=e.animation?1e3:0;switch(this.animationInstance&&this.animationInstance.stop(),i.clearRect(0,0,e.width,e.height),t){case"line":this.animationInstance=new Pt({timing:"easeIn",duration:v,onProcess:function(t){e.rotate&&$(i,e),Lt(s,e,n,i),St(s,e,n,i);var r=dt(a,e,n,i,t),l=r.xAxisPoints,c=r.calPoints,u=r.eachSpacing;o.chartData.xAxisPoints=l,o.chartData.calPoints=c,o.chartData.eachSpacing=u,vt(e.series,e,n,i),gt(a,e,n,i),Zt(e,n,i,t,u,l),xt(e,i)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"mix":this.animationInstance=new Pt({timing:"easeIn",duration:v,onProcess:function(t){e.rotate&&$(i,e),Lt(s,e,n,i),St(s,e,n,i);var r=Yt(a,e,n,i,t),l=r.xAxisPoints,c=r.calPoints,u=r.eachSpacing;o.chartData.xAxisPoints=l,o.chartData.calPoints=c,o.chartData.eachSpacing=u,vt(e.series,e,n,i),gt(a,e,n,i),Zt(e,n,i,t,u,l),xt(e,i)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"column":this.animationInstance=new Pt({timing:"easeIn",duration:v,onProcess:function(t){e.rotate&&$(i,e),Lt(s,e,n,i),St(s,e,n,i);var r=pt(a,e,n,i,t),l=r.xAxisPoints,c=r.calPoints,u=r.eachSpacing;o.chartData.xAxisPoints=l,o.chartData.calPoints=c,o.chartData.eachSpacing=u,vt(e.series,e,n,i),gt(a,e,n,i),Zt(e,n,i,t,u,l),xt(e,i)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"area":this.animationInstance=new Pt({timing:"easeIn",duration:v,onProcess:function(t){e.rotate&&$(i,e),Lt(s,e,n,i),St(s,e,n,i);var r=ft(a,e,n,i,t),l=r.xAxisPoints,c=r.calPoints,u=r.eachSpacing;o.chartData.xAxisPoints=l,o.chartData.calPoints=c,o.chartData.eachSpacing=u,vt(e.series,e,n,i),gt(a,e,n,i),Zt(e,n,i,t,u,l),xt(e,i)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"ring":case"pie":this.animationInstance=new Pt({timing:"easeInOut",duration:v,onProcess:function(t){e.rotate&&$(i,e),o.chartData.pieData=yt(a,e,n,i,t),vt(e.series,e,n,i),Zt(e,n,i,t),xt(e,i)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"rose":this.animationInstance=new Pt({timing:"easeInOut",duration:v,onProcess:function(t){e.rotate&&$(i,e),o.chartData.pieData=Jt(a,e,n,i,t),vt(e.series,e,n,i),Zt(e,n,i,t),xt(e,i)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"radar":this.animationInstance=new Pt({timing:"easeInOut",duration:v,onProcess:function(t){e.rotate&&$(i,e),o.chartData.radarData=Ct(a,e,n,i,t),vt(e.series,e,n,i),Zt(e,n,i,t),xt(e,i)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"arcbar":this.animationInstance=new Pt({timing:"easeInOut",duration:v,onProcess:function(t){e.rotate&&$(i,e),o.chartData.arcbarData=Tt(a,e,n,i,t),xt(e,i)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"gauge":this.animationInstance=new Pt({timing:"easeInOut",duration:v,onProcess:function(t){e.rotate&&$(i,e),o.chartData.gaugeData=Xt(s,a,e,n,i,t),xt(e,i)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break;case"candle":this.animationInstance=new Pt({timing:"easeIn",duration:v,onProcess:function(t){e.rotate&&$(i,e),Lt(s,e,n,i),St(s,e,n,i);var r=ht(a,c,e,n,i,t),l=r.xAxisPoints,u=r.calPoints,p=r.eachSpacing;o.chartData.xAxisPoints=l,o.chartData.calPoints=u,o.chartData.eachSpacing=p,vt(c||e.series,e,n,i),gt(a,e,n,i),Zt(e,n,i,t,p,l),xt(e,i)},onAnimationFinish:function(){o.event.trigger("renderComplete")}});break}}function Dt(){this.events={}}Pt.prototype.stop=function(){this.isStop=!0},Dt.prototype.addEventListener=function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},Dt.prototype.trigger=function(){for(var t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];var r=n[0],o=n.slice(1);this.events[r]&&this.events[r].forEach(function(t){try{t.apply(null,o)}catch(n){console.error(e(n," at components\\u-charts\\js\\u-charts.js:3612"))}})};var Mt=function(t){t.fontSize=t.fontSize?t.fontSize*t.pixelRatio:13*t.pixelRatio,t.title=t.title||{},t.subtitle=t.subtitle||{},t.yAxis=t.yAxis||{},t.yAxis.gridType=t.yAxis.gridType?t.yAxis.gridType:"solid",t.yAxis.dashLength=t.yAxis.dashLength?t.yAxis.dashLength:4*t.pixelRatio,t.xAxis=t.xAxis||{},t.xAxis.rotateLabel=!!t.xAxis.rotateLabel,t.xAxis.type=t.xAxis.type?t.xAxis.type:"calibration",t.xAxis.gridType=t.xAxis.gridType?t.xAxis.gridType:"solid",t.xAxis.dashLength=t.xAxis.dashLength?t.xAxis.dashLength:4*t.pixelRatio,t.xAxis.scrollAlign=t.xAxis.scrollAlign?t.xAxis.scrollAlign:"left",t.extra=t.extra||{},t.legend=!1!==t.legend,t.rotate=!!t.rotate,t.animation=!1!==t.animation;var e=r({},i);if(e.yAxisTitleWidth=!0!==t.yAxis.disabled&&t.yAxis.title?e.yAxisTitleWidth:0,"pie"!=t.type&&"ring"!=t.type||(e.pieChartLinePadding=!1===t.dataLabel?0:t.extra.pie.lableWidth*t.pixelRatio||e.pieChartLinePadding*t.pixelRatio),e.pieChartTextPadding=!1===t.dataLabel?0:e.pieChartTextPadding*t.pixelRatio,e.yAxisSplit=t.yAxis.splitNumber?t.yAxis.splitNumber:i.yAxisSplit,e.rotate=t.rotate,t.rotate){var o=t.width,a=t.height;t.width=a,t.height=o}if(e.yAxisWidth=i.yAxisWidth*t.pixelRatio,e.xAxisHeight=i.xAxisHeight*t.pixelRatio,t.enableScroll&&t.xAxis.scrollShow&&(e.xAxisHeight+=6*t.pixelRatio),e.xAxisLineHeight=i.xAxisLineHeight*t.pixelRatio,e.legendHeight=i.legendHeight*t.pixelRatio,e.padding=i.padding*t.pixelRatio,e.fontSize=t.fontSize,e.titleFontSize=i.titleFontSize*t.pixelRatio,e.subtitleFontSize=i.subtitleFontSize*t.pixelRatio,e.toolTipPadding=i.toolTipPadding*t.pixelRatio,e.toolTipLineHeight=i.toolTipLineHeight*t.pixelRatio,e.columePadding=i.columePadding*t.pixelRatio,i.pixelRatio=t.pixelRatio,i.fontSize=t.fontSize,i.rotate=t.rotate,this.opts=t,this.config=e,t.$this=t.$this?t.$this:this,this.context=n.createCanvasContext(t.canvasId,t.$this),this.chartData={},this.event=new Dt,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0},t.enableScroll&&"right"==t.xAxis.scrollAlign){var s=z(t.series,t,e),l=s.yAxisWidth;e.yAxisWidth=l;var c=0,u=O(t.categories,t,e),p=u.xAxisPoints,h=u.startX,f=u.endX,d=u.eachSpacing,Y=d*(p.length-1),Z=f-h;c=Z-Y,this.scrollOption={currentOffset:c,startTouchX:c,distance:0,lastMoveTime:0},t._scrollDistance_=c}Ht.call(this,t.type,t,e,this.context)};Mt.prototype.updateData=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.opts=r({},this.opts,t),this.opts.yAxis.format=t.unit?function(e){return e.toFixed(t.fixed||0)+(t.unit||"")}:this.opts.yAxis.format;var e=t.scrollPosition||"current";switch(e){case"current":this.opts._scrollDistance_=this.scrollOption.currentOffset;break;case"left":this.opts._scrollDistance_=0,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0};break;case"right":var n=z(this.opts.series,this.opts,this.config),i=n.yAxisWidth;this.config.yAxisWidth=i;var o=0,a=O(this.opts.categories,this.opts,this.config),s=a.xAxisPoints,l=a.startX,c=a.endX,u=a.eachSpacing,p=u*(s.length-1),h=c-l;o=h-p,this.scrollOption={currentOffset:o,startTouchX:o,distance:0,lastMoveTime:0},this.opts._scrollDistance_=o;break}var f=void 0==t.animation?this.opts.animation:t.animation;this.opts.animation=f,this.opts.title=r({},this.opts.title,t.title||{}),this.opts.subtitle=r({},this.opts.subtitle,t.subtitle||{}),Ht.call(this,this.opts.type,this.opts,this.config,this.context)},Mt.prototype.zoom=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.opts.xAxis.itemCount;if(!0===this.opts.enableScroll){var n=Math.round(Math.abs(this.scrollOption.currentOffset)/this.chartData.eachSpacing)+Math.round(this.opts.xAxis.itemCount/2);this.opts.animation=!1,this.opts.xAxis.itemCount=t.itemCount;var i=z(this.opts.series,this.opts,this.config),r=i.yAxisWidth;this.config.yAxisWidth=r;var o=0,a=O(this.opts.categories,this.opts,this.config),s=a.xAxisPoints,l=a.startX,c=a.endX,u=a.eachSpacing,p=u*n,h=c-l,f=h-u*(s.length-1);o=h/2-p,o>0&&(o=0),o<f&&(o=f),this.scrollOption={currentOffset:o,startTouchX:o,distance:0,lastMoveTime:0},this.opts._scrollDistance_=o,Ht.call(this,this.opts.type,this.opts,this.config,this.context)}else console.log(e("请启用滚动条后使用！"," at components\\u-charts\\js\\u-charts.js:3768"))},Mt.prototype.stopAnimation=function(){this.animationInstance&&this.animationInstance.stop()},Mt.prototype.addEventListener=function(t,e){this.event.addEventListener(t,e)},Mt.prototype.getCurrentDataIndex=function(t){var e=t.mp.changedTouches[0]||t.changedTouches[0];if(e){var n=y(e,this.opts,t);return"pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type?M({x:n.x,y:n.y},this.chartData.pieData):"radar"===this.opts.type?D({x:n.x,y:n.y},this.chartData.radarData,this.opts.categories.length):P({x:n.x,y:n.y},this.chartData.xAxisPoints,this.opts,this.config,Math.abs(this.scrollOption.currentOffset))}return-1},Mt.prototype.showToolTip=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.mp.changedTouches[0]||t.changedTouches[0],i=y(n,this.opts,t);if("line"===this.opts.type||"area"===this.opts.type||"column"===this.opts.type){var o=this.getCurrentDataIndex(t),a=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:a,animation:!1});if(o>-1){var l=J(this.opts.series,o);if(0!==l.length){var c=C(l,this.chartData.calPoints,o,this.opts.categories,e),u=c.textList,p=c.offset;p.y=i.y,s.tooltip={textList:u,offset:p,option:e,index:o}}}Ht.call(this,s.type,s,this.config,this.context)}if("mix"===this.opts.type){o=this.getCurrentDataIndex(t),a=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:a,animation:!1});if(o>-1){l=J(this.opts.series,o);if(0!==l.length){var h=x(l,this.chartData.calPoints,o,this.opts.categories,e);u=h.textList,p=h.offset;p.y=i.y,s.tooltip={textList:u,offset:p,option:e,index:o}}}Ht.call(this,s.type,s,this.config,this.context)}if("candle"===this.opts.type){o=this.getCurrentDataIndex(t),a=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:a,animation:!1});if(o>-1){l=J(this.opts.series,o);if(0!==l.length){c=m(this.opts.series[0].data,l,this.chartData.calPoints,o,this.opts.categories,this.opts.extra.candle,e),u=c.textList,p=c.offset;p.y=i.y,s.tooltip={textList:u,offset:p,option:e,index:o}}}Ht.call(this,s.type,s,this.config,this.context)}if("pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type){o=this.getCurrentDataIndex(t),a=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:a,animation:!1});if(o>-1){l=this.opts.series[o],u=[{text:e.format?e.format(l):l.name+": "+l.data,color:l.color}],p={x:i.x,y:i.y};s.tooltip={textList:u,offset:p,option:e,index:o}}Ht.call(this,s.type,s,this.config,this.context)}if("radar"===this.opts.type){o=this.getCurrentDataIndex(t),a=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:a,animation:!1});if(o>-1){l=J(this.opts.series,o);if(0!==l.length){u=l.map(function(t){return{text:e.format?e.format(t):t.name+": "+t.data,color:t.color}}),p={x:i.x,y:i.y};s.tooltip={textList:u,offset:p,option:e,index:o}}}Ht.call(this,s.type,s,this.config,this.context)}},Mt.prototype.translate=function(t){this.scrollOption={currentOffset:t,startTouchX:t,distance:0,lastMoveTime:0};var e=r({},this.opts,{_scrollDistance_:t,animation:!1});Ht.call(this,this.opts.type,e,this.config,this.context)},Mt.prototype.scrollStart=function(t){var e=t.mp.changedTouches[0]||t.changedTouches[0],n=y(e,this.opts,t);e&&!0===this.opts.enableScroll&&(e.x?this.scrollOption.startTouchX=n.x:this.scrollOption.startTouchX=n.clientX)},Mt.prototype.scroll=function(t){0===this.scrollOption.lastMoveTime&&(this.scrollOption.lastMoveTime=Date.now());var e=this.opts.extra.touchMoveLimit||20,n=Date.now(),i=n-this.scrollOption.lastMoveTime;if(!(i<Math.floor(1e3/e))){this.scrollOption.lastMoveTime=n;var o=t.mp.changedTouches[0]||t.changedTouches[0],a=y(o,this.opts,t);if(o&&!0===this.opts.enableScroll){var s;s=o.x?a.x-this.scrollOption.startTouchX:a.clientX-this.scrollOption.startTouchX;var l=this.scrollOption.currentOffset,u=c(l+s,this.chartData,this.config,this.opts);this.scrollOption.distance=s=u-l;var p=r({},this.opts,{_scrollDistance_:l+s,animation:!1});return Ht.call(this,p.type,p,this.config,this.context),l+s}}},Mt.prototype.scrollEnd=function(t){if(!0===this.opts.enableScroll){var e=this.scrollOption,n=e.currentOffset,i=e.distance;this.scrollOption.currentOffset=n+i,this.scrollOption.distance=0}},t.exports=Mt}).call(this,n("0de9")["default"],n("6e42")["default"])},b3cc:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=null,i=null,r=null;function o(e,i){var r={top:"0px",left:"0px",backgroundColor:"#333333",height:"100%",width:"100%"};n=new plus.nativeObj.View("advert",r);var o={tag:"img",id:"adverBg",src:e,position:{top:"0px",left:"0px",width:"100%",height:"100%"}};n.draw([o]),n.show(),n.addEventListener("click",function(){t.navigateTo({url:i}),s()},!1)}function a(e){var n=t.getSystemInfoSync().statusBarHeight||34,o=t.getSystemInfoSync().windowWidth,a={top:n+10+"px",left:o-t.upx2px(170)+"px",height:"28px",width:"68px"};i=new plus.nativeObj.View("adverts",a);var l={tag:"rect",id:"rect",rectStyles:{color:"rgba(0,0,0,0.4)",radius:"14px"},position:{top:0,left:0,width:"68px",height:"28px"}},c={tag:"font",id:"adverText",text:"跳过",position:{top:"0px",left:"0px",width:"68px",height:"28px",zIndex:"11"},textStyles:{size:"15px",color:"#fff"}};c.text="跳过 ".concat(e),i.draw([l,c]),i.show(),r=setInterval(function(){e--,e<1?s():(c.text="跳过 ".concat(e),i.draw([c,l]))},1e3),i.addEventListener("click",function(){s()},!1)}function s(){r&&clearInterval(r),r=null,n.close(),i.close()}function l(t){var e=t.timer,n=t.url,i=t.imageUrl;e=e||4,o(i,n),a(e)}var c={initAdvert:l};e.default=c}).call(this,n("6e42")["default"])},bbdd:function(t,e,n){var i=function(){return this||"object"===typeof self&&self}()||Function("return this")(),r=i.regeneratorRuntime&&Object.getOwnPropertyNames(i).indexOf("regeneratorRuntime")>=0,o=r&&i.regeneratorRuntime;if(i.regeneratorRuntime=void 0,t.exports=n("96cf"),r)i.regeneratorRuntime=o;else try{delete i.regeneratorRuntime}catch(a){i.regeneratorRuntime=void 0}},c4d9:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={appid:"__UNI__3F51016"};e.default=i},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}t.exports=n},f0c5:function(t,e,n){"use strict";function i(t,e,n,i,r,o,a,s,l,c){var u,p="function"===typeof t?t.options:t;if(l&&(p.components=Object.assign(l,p.components||{})),c&&((c.beforeCreate||(c.beforeCreate=[])).unshift(function(){this[c.__module]=this}),(p.mixins||(p.mixins=[])).push(c)),e&&(p.render=e,p.staticRenderFns=n,p._compiled=!0),i&&(p.functional=!0),o&&(p._scopeId="data-v-"+o),a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},p._ssrRegister=u):r&&(u=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),u)if(p.functional){p._injectStyles=u;var h=p.render;p.render=function(t,e){return u.call(e),h(t,e)}}else{var f=p.beforeCreate;p.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:p}}n.d(e,"a",function(){return i})}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/city-select/city-select';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/city-select/city-select.js';

define('components/city-select/city-select.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/city-select/city-select"], {
  4464: function _(t, i, e) {
    "use strict";

    e.r(i);
    var n = e("eb32"),
        a = e("8f6f");

    for (var c in a) {
      "default" !== c && function (t) {
        e.d(i, t, function () {
          return a[t];
        });
      }(c);
    }

    e("97ad");
    var s,
        r = e("f0c5"),
        o = Object(r["a"])(a["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], s);
    i["default"] = o.exports;
  },
  "78d5": function d5(t, i, e) {},
  "8f6f": function f6f(t, i, e) {
    "use strict";

    e.r(i);
    var n = e("b026"),
        a = e.n(n);

    for (var c in n) {
      "default" !== c && function (t) {
        e.d(i, t, function () {
          return n[t];
        });
      }(c);
    }

    i["default"] = a.a;
  },
  "97ad": function ad(t, i, e) {
    "use strict";

    var n = e("78d5"),
        a = e.n(n);
    a.a;
  },
  b026: function b026(t, i, e) {
    "use strict";

    (function (t, n) {
      Object.defineProperty(i, "__esModule", {
        value: !0
      }), i.default = void 0;
      var a = c(e("8584"));

      function c(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      var s = {
        props: {
          formatName: {
            type: String,
            default: "cityName"
          },
          activeCity: {
            type: Object,
            default: function _default() {
              return null;
            }
          },
          hotCity: {
            type: Array,
            default: function _default() {
              return [];
            }
          },
          obtainCitys: {
            type: Array,
            default: function _default() {
              return [];
            }
          },
          isSearch: {
            type: Boolean,
            default: !0
          }
        },
        data: function data() {
          return {
            scrollTop: 0,
            cityindexs: [],
            activeCityIndex: "",
            handleCity: [],
            serachCity: "",
            cityData: []
          };
        },
        computed: {
          sortItems: function sortItems() {
            for (var t = 0; t < this.handleCity.length; t++) {
              if (this.handleCity[t].isCity) {
                var i = this.handleCity[t].citys;
                i = i.sort(function (t, i) {
                  var e = t.unicode,
                      n = i.unicode;
                  return e - n;
                });
              }
            }

            return this.handleCity;
          },
          searchDatas: function searchDatas() {
            for (var t = [], i = 0; i < this.cityData.length; i++) {
              -1 !== this.cityData[i][this.formatName].indexOf(this.serachCity) && t.push({
                oldData: this.cityData[i],
                name: this.cityData[i][this.formatName]
              });
            }

            return t;
          }
        },
        created: function created() {
          this.cityData = this.obtainCitys, this.initializationCity(), this.buildCityindexs();
        },
        watch: {
          obtainCitys: function obtainCitys(t) {
            this.updateCitys(t);
          }
        },
        methods: {
          updateCitys: function updateCitys(t) {
            t && t.length && (this.cityData = t, this.initializationCity(), this.buildCityindexs());
          },
          keyInput: function keyInput(i) {
            this.serachCity = i.detail.value, console.log(t(this.serachCity, " at components\\city-select\\city-select.vue:139"));
          },
          initializationCity: function initializationCity() {
            this.handleCity = [];

            for (var t = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "#"], i = 0; i < t.length; i++) {
              this.handleCity.push({
                name: t[i],
                isCity: !1,
                citys: []
              });
            }
          },
          getLetter: function getLetter(t) {
            return a.default.getFirstLetter(t[0]);
          },
          buildCityindexs: function buildCityindexs() {
            this.cityindexs = [];

            for (var t = 0; t < this.cityData.length; t++) {
              var i = this.getLetter(this.cityData[t][this.formatName]).firstletter,
                  e = this.getLetter(this.cityData[t][this.formatName]).unicode,
                  n = this.cityIndexPosition(i);
              -1 === this.cityindexs.indexOf(i) && (this.handleCity[n].isCity = !0, this.cityindexs.push(i)), this.handleCity[n].citys.push({
                cityName: this.cityData[t][this.formatName],
                unicode: e,
                oldData: this.cityData[t]
              });
            }
          },
          cityindex: function cityindex(t) {
            var i = n.createSelectorQuery().in(this),
                e = this;
            e.scrollTop = 0, setTimeout(function () {
              i.select("#city-letter-" + ("#" === t ? "0" : t)).boundingClientRect(function (t) {
                t && (e.scrollTop = t.top);
              }).exec();
            }, 0);
          },
          cityIndexPosition: function cityIndexPosition(t) {
            if (!t) return "";
            var i = 65;
            return "#" === t ? 26 : t.charCodeAt(0) - i;
          },
          cityTrigger: function cityTrigger(t, i) {
            this.$emit("cityClick", t.oldData ? t.oldData : t);
          }
        }
      };
      i.default = s;
    }).call(this, e("0de9")["default"], e("6e42")["default"]);
  },
  eb32: function eb32(t, i, e) {
    "use strict";

    var n,
        a = function a() {
      var t = this,
          i = t.$createElement;
      t._self._c;
    },
        c = [];

    e.d(i, "b", function () {
      return a;
    }), e.d(i, "c", function () {
      return c;
    }), e.d(i, "a", function () {
      return n;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/city-select/city-select-create-component', {
  'components/city-select/city-select-create-component': function componentsCitySelectCitySelectCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("4464"));
  }
}, [['components/city-select/city-select-create-component']]]);
});
require('components/city-select/city-select.js');
__wxRoute = 'components/Complaint';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/Complaint.js';

define('components/Complaint.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/Complaint"], {
  "20bf": function bf(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var e = {
        data: function data() {
          return {
            handle: !1,
            te1: "te",
            te2: ""
          };
        },
        methods: {
          ToProcess: function ToProcess() {
            t.navigateTo({
              url: "/pages/Statistics/Complaint/Complaint"
            });
          },
          Handle: function Handle(t) {
            "未处理" === t._relatedInfo.anchorTargetText ? (this.te1 = "te", this.te2 = "", this.handle = !1) : "已处理" === t._relatedInfo.anchorTargetText && (this.te1 = "", this.te2 = "te", this.handle = !0);
          }
        }
      };
      n.default = e;
    }).call(this, e("6e42")["default"]);
  },
  "3d59": function d59(t, n, e) {
    "use strict";

    e.r(n);
    var a = e("20bf"),
        u = e.n(a);

    for (var c in a) {
      "default" !== c && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(c);
    }

    n["default"] = u.a;
  },
  4618: function _(t, n, e) {
    "use strict";

    var a = e("c3c8"),
        u = e.n(a);
    u.a;
  },
  9786: function _(t, n, e) {
    "use strict";

    e.r(n);
    var a = e("dd81"),
        u = e("3d59");

    for (var c in u) {
      "default" !== c && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(c);
    }

    e("4618");
    var r,
        i = e("f0c5"),
        o = Object(i["a"])(u["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], r);
    n["default"] = o.exports;
  },
  c3c8: function c3c8(t, n, e) {},
  dd81: function dd81(t, n, e) {
    "use strict";

    var a,
        u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        c = [];

    e.d(n, "b", function () {
      return u;
    }), e.d(n, "c", function () {
      return c;
    }), e.d(n, "a", function () {
      return a;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/Complaint-create-component', {
  'components/Complaint-create-component': function componentsComplaintCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("9786"));
  }
}, [['components/Complaint-create-component']]]);
});
require('components/Complaint.js');
__wxRoute = 'components/Delivery';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/Delivery.js';

define('components/Delivery.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/Delivery"], {
  "1aeb": function aeb(e, t, n) {
    "use strict";

    n.r(t);
    var i = n("2f68"),
        r = n("c0fb");

    for (var u in r) {
      "default" !== u && function (e) {
        n.d(t, e, function () {
          return r[e];
        });
      }(u);
    }

    n("7c92");
    var c,
        l = n("f0c5"),
        s = Object(l["a"])(r["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], c);
    t["default"] = s.exports;
  },
  "2f68": function f68(e, t, n) {
    "use strict";

    var i,
        r = function r() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        u = [];

    n.d(t, "b", function () {
      return r;
    }), n.d(t, "c", function () {
      return u;
    }), n.d(t, "a", function () {
      return i;
    });
  },
  "7c92": function c92(e, t, n) {
    "use strict";

    var i = n("856f"),
        r = n.n(i);
    r.a;
  },
  "856f": function f(e, t, n) {},
  "8ea6": function ea6(e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var i = {
      data: function data() {
        return {
          Delivery: !1,
          Deliverys: !1
        };
      },
      methods: {
        delivery: function delivery() {
          this.Delivery ? (this.Delivery = !1, this.Deliverys = !1) : (this.Delivery = !0, this.Deliverys = !1);
        },
        deliverys: function deliverys() {
          this.Deliverys ? (this.Delivery = !1, this.Deliverys = !1) : (this.Delivery = !1, this.Deliverys = !0);
        }
      }
    };
    t.default = i;
  },
  c0fb: function c0fb(e, t, n) {
    "use strict";

    n.r(t);
    var i = n("8ea6"),
        r = n.n(i);

    for (var u in i) {
      "default" !== u && function (e) {
        n.d(t, e, function () {
          return i[e];
        });
      }(u);
    }

    t["default"] = r.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/Delivery-create-component', {
  'components/Delivery-create-component': function componentsDeliveryCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("1aeb"));
  }
}, [['components/Delivery-create-component']]]);
});
require('components/Delivery.js');
__wxRoute = 'components/distribution';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/distribution.js';

define('components/distribution.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/distribution"], {
  5746: function _(t, i, n) {
    "use strict";

    var u,
        s = function s() {
      var t = this,
          i = t.$createElement;
      t._self._c;
    },
        r = [];

    n.d(i, "b", function () {
      return s;
    }), n.d(i, "c", function () {
      return r;
    }), n.d(i, "a", function () {
      return u;
    });
  },
  "7d89": function d89(t, i, n) {
    "use strict";

    var u = n("f21d"),
        s = n.n(u);
    s.a;
  },
  9805: function _(t, i, n) {
    "use strict";

    n.r(i);
    var u = n("5746"),
        s = n("eed6");

    for (var r in s) {
      "default" !== r && function (t) {
        n.d(i, t, function () {
          return s[t];
        });
      }(r);
    }

    n("7d89");
    var o,
        e = n("f0c5"),
        c = Object(e["a"])(s["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], o);
    i["default"] = c.exports;
  },
  d852: function d852(t, i, n) {
    "use strict";

    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var u = {
      data: function data() {
        return {
          Distribution: !1,
          Distributions: !1
        };
      },
      methods: {
        distribution: function distribution() {
          this.Distribution ? (this.Distribution = !1, this.Distributions = !1) : (this.Distribution = !0, this.Distributions = !1);
        },
        distributions: function distributions() {
          this.Distributions ? (this.Distribution = !1, this.Distributions = !1) : (this.Distribution = !1, this.Distributions = !0);
        }
      }
    };
    i.default = u;
  },
  eed6: function eed6(t, i, n) {
    "use strict";

    n.r(i);
    var u = n("d852"),
        s = n.n(u);

    for (var r in u) {
      "default" !== r && function (t) {
        n.d(i, t, function () {
          return u[t];
        });
      }(r);
    }

    i["default"] = s.a;
  },
  f21d: function f21d(t, i, n) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/distribution-create-component', {
  'components/distribution-create-component': function componentsDistributionCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("9805"));
  }
}, [['components/distribution-create-component']]]);
});
require('components/distribution.js');
__wxRoute = 'components/evaluate';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/evaluate.js';

define('components/evaluate.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/evaluate"], {
  "053a": function a(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("8bf2"),
        r = n.n(a);

    for (var i in a) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(i);
    }

    e["default"] = r.a;
  },
  "2b66": function b66(t, e, n) {
    "use strict";

    n.r(e);
    var a = n("3fc8"),
        r = n("053a");

    for (var i in r) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return r[t];
        });
      }(i);
    }

    n("cfd6");
    var u,
        f = n("f0c5"),
        c = Object(f["a"])(r["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], u);
    e["default"] = c.exports;
  },
  "3fc8": function fc8(t, e, n) {
    "use strict";

    var a,
        r = function r() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        i = [];

    n.d(e, "b", function () {
      return r;
    }), n.d(e, "c", function () {
      return i;
    }), n.d(e, "a", function () {
      return a;
    });
  },
  "6afa": function afa(t, e, n) {},
  "8bf2": function bf2(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var a = {
      data: function data() {
        return {
          Te1: "te",
          Te2: "",
          Te3: "",
          Te4: ""
        };
      },
      methods: {
        evaluate: function evaluate(t) {
          "全部" === t._relatedInfo.anchorTargetText ? (this.Te1 = "te", this.Te2 = "", this.Te3 = "", this.Te4 = "") : "好评" === t._relatedInfo.anchorTargetText ? (this.Te1 = "", this.Te2 = "te", this.Te3 = "", this.Te4 = "") : "中评" === t._relatedInfo.anchorTargetText ? (this.Te1 = "", this.Te2 = "", this.Te3 = "te", this.Te4 = "") : "差评" === t._relatedInfo.anchorTargetText && (this.Te1 = "", this.Te2 = "", this.Te3 = "", this.Te4 = "te");
        }
      }
    };
    e.default = a;
  },
  cfd6: function cfd6(t, e, n) {
    "use strict";

    var a = n("6afa"),
        r = n.n(a);
    r.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/evaluate-create-component', {
  'components/evaluate-create-component': function componentsEvaluateCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("2b66"));
  }
}, [['components/evaluate-create-component']]]);
});
require('components/evaluate.js');
__wxRoute = 'components/mix-advert/vue/mix-advert';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/mix-advert/vue/mix-advert.js';

define('components/mix-advert/vue/mix-advert.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mix-advert/vue/mix-advert"], {
  "0857": function _(t, e, n) {
    "use strict";

    var r,
        u = function u() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        i = [];

    n.d(e, "b", function () {
      return u;
    }), n.d(e, "c", function () {
      return i;
    }), n.d(e, "a", function () {
      return r;
    });
  },
  "0ff1": function ff1(t, e, n) {},
  "39a1": function a1(t, e, n) {
    "use strict";

    var r = n("0ff1"),
        u = n.n(r);
    u.a;
  },
  a539: function a539(t, e, n) {
    "use strict";

    n.r(e);
    var r = n("b3b2"),
        u = n.n(r);

    for (var i in r) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return r[t];
        });
      }(i);
    }

    e["default"] = u.a;
  },
  b3b2: function b3b2(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = u(n("b3cc"));

    function u(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var i = {
      data: function data() {
        return {
          advertState: 0,
          interval: null,
          timer: 8
        };
      },
      props: {
        timedown: {
          type: Number,
          default: 8
        },
        imageUrl: {
          type: String,
          default: "/static/advert.jpg"
        },
        url: {
          type: String,
          default: "/pages/test1/test1"
        }
      },
      created: function created() {
        this.timer = this.timedown;
      },
      methods: {
        initAdvert: function initAdvert() {
          this.clickEvent;
          var t = {
            timer: this.timer,
            imageUrl: this.imageUrl,
            url: this.url
          };
          r.default.initAdvert(t);
        }
      }
    };
    e.default = i;
  },
  da2f: function da2f(t, e, n) {
    "use strict";

    n.r(e);
    var r = n("0857"),
        u = n("a539");

    for (var i in u) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(i);
    }

    n("39a1");
    var a,
        f = n("f0c5"),
        c = Object(f["a"])(u["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], a);
    e["default"] = c.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/mix-advert/vue/mix-advert-create-component', {
  'components/mix-advert/vue/mix-advert-create-component': function componentsMixAdvertVueMixAdvertCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("da2f"));
  }
}, [['components/mix-advert/vue/mix-advert-create-component']]]);
});
require('components/mix-advert/vue/mix-advert.js');
__wxRoute = 'components/mix-load-more/mix-load-more';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/mix-load-more/mix-load-more.js';

define('components/mix-load-more/mix-load-more.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mix-load-more/mix-load-more"], {
  "562f": function f(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("d958"),
        r = e.n(u);

    for (var a in u) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(a);
    }

    n["default"] = r.a;
  },
  "82a4": function a4(t, n, e) {
    "use strict";

    var u,
        r = function r() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        a = [];

    e.d(n, "b", function () {
      return r;
    }), e.d(n, "c", function () {
      return a;
    }), e.d(n, "a", function () {
      return u;
    });
  },
  bf4d: function bf4d(t, n, e) {
    "use strict";

    var u = e("c82d"),
        r = e.n(u);
    r.a;
  },
  c82d: function c82d(t, n, e) {},
  d958: function d958(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      name: "mix-load-more",
      props: {
        status: {
          type: Number,
          default: 0
        },
        text: {
          type: Array,
          default: function _default() {
            return ["上拉显示更多", "正在加载...", "没有更多数据了"];
          }
        }
      }
    };
    n.default = u;
  },
  f0e0: function f0e0(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("82a4"),
        r = e("562f");

    for (var a in r) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return r[t];
        });
      }(a);
    }

    e("bf4d");
    var f,
        o = e("f0c5"),
        c = Object(o["a"])(r["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], f);
    n["default"] = c.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/mix-load-more/mix-load-more-create-component', {
  'components/mix-load-more/mix-load-more-create-component': function componentsMixLoadMoreMixLoadMoreCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("f0e0"));
  }
}, [['components/mix-load-more/mix-load-more-create-component']]]);
});
require('components/mix-load-more/mix-load-more.js');
__wxRoute = 'components/mix-pulldown-refresh/mix-pulldown-refresh';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/mix-pulldown-refresh/mix-pulldown-refresh.js';

define('components/mix-pulldown-refresh/mix-pulldown-refresh.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mix-pulldown-refresh/mix-pulldown-refresh"], {
  "098b": function b(e, t, n) {
    "use strict";

    n.r(t);
    var i = n("978a"),
        r = n("ae0d");

    for (var a in r) {
      "default" !== a && function (e) {
        n.d(t, e, function () {
          return r[e];
        });
      }(a);
    }

    n("e017");
    var s,
        o = n("f0c5"),
        u = Object(o["a"])(r["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], s);
    t["default"] = u.exports;
  },
  "5b1b": function b1b(e, t, n) {},
  "978a": function a(e, t, n) {
    "use strict";

    var i,
        r = function r() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        a = [];

    n.d(t, "b", function () {
      return r;
    }), n.d(t, "c", function () {
      return a;
    }), n.d(t, "a", function () {
      return i;
    });
  },
  ae0d: function ae0d(e, t, n) {
    "use strict";

    n.r(t);
    var i = n("c255"),
        r = n.n(i);

    for (var a in i) {
      "default" !== a && function (e) {
        n.d(t, e, function () {
          return i[e];
        });
      }(a);
    }

    t["default"] = r.a;
  },
  c255: function c255(e, t, n) {
    "use strict";

    (function (e, n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var i,
          r,
          a,
          s,
          o = 500,
          u = 0,
          f = {
        props: {
          top: {
            type: Number,
            default: 0
          }
        },
        data: function data() {
          return {
            pageDeviation: 0,
            pageTransition: 0,
            refreshReady: !1,
            refreshing: !1
          };
        },
        computed: {
          pageTop: function pageTop() {
            return e.upx2px(this.top);
          }
        },
        created: function created() {
          e.getSystemInfo({
            success: function success(e) {
              console.log(n(e, " at components\\mix-pulldown-refresh\\mix-pulldown-refresh.vue:74")), a = e.platform, o = e.windowHeight;
            }
          });
        },
        methods: {
          pageTouchstart: function pageTouchstart(e) {
            s = !1, this.pageTransition = 0, i = e.touches[0].pageY;
          },
          pageTouchmove: function pageTouchmove(e) {
            s || (r = .4 * (e.touches[0].pageY - i), r >= 0 && (this.pageDeviation = r, this.$emit("setEnableScroll", !1)), r >= 50 && !1 === this.refreshReady ? this.refreshReady = !0 : r < 50 && !0 === this.refreshReady && (this.refreshReady = !1), "ios" === a && e.touches[0].pageY > o + 10 && this.pageTouchend());
          },
          pageTouchend: function pageTouchend() {
            s = !0, 0 !== r && (this.pageTransition = .3, r >= 50 ? this.startPulldownRefresh() : this.pageDeviation = 0, !0 === this.refreshReady && (this.refreshReady = !1), this.$emit("setEnableScroll", !0), i = r = 0);
          },
          startPulldownRefresh: function startPulldownRefresh() {
            +new Date() - u < 100 || (u = +new Date(), this.refreshing = !0, this.pageDeviation = e.upx2px(90), this.$emit("refresh"));
          },
          endPulldownRefresh: function endPulldownRefresh() {
            this.refreshing = !1, this.pageDeviation = e.upx2px(0);
          }
        }
      };
      t.default = f;
    }).call(this, n("6e42")["default"], n("0de9")["default"]);
  },
  e017: function e017(e, t, n) {
    "use strict";

    var i = n("5b1b"),
        r = n.n(i);
    r.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/mix-pulldown-refresh/mix-pulldown-refresh-create-component', {
  'components/mix-pulldown-refresh/mix-pulldown-refresh-create-component': function componentsMixPulldownRefreshMixPulldownRefreshCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("098b"));
  }
}, [['components/mix-pulldown-refresh/mix-pulldown-refresh-create-component']]]);
});
require('components/mix-pulldown-refresh/mix-pulldown-refresh.js');
__wxRoute = 'components/No';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/No.js';

define('components/No.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/No"], {
  1121: function _(t, n, u) {
    "use strict";

    u.r(n);
    var e = u("5384d"),
        o = u("f213");

    for (var a in o) {
      "default" !== a && function (t) {
        u.d(n, t, function () {
          return o[t];
        });
      }(a);
    }

    u("5587");
    var r,
        c = u("f0c5"),
        f = Object(c["a"])(o["default"], e["b"], e["c"], !1, null, null, null, !1, e["a"], r);
    n["default"] = f.exports;
  },
  "5384d": function d(t, n, u) {
    "use strict";

    var e,
        o = function o() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        a = [];

    u.d(n, "b", function () {
      return o;
    }), u.d(n, "c", function () {
      return a;
    }), u.d(n, "a", function () {
      return e;
    });
  },
  5587: function _(t, n, u) {
    "use strict";

    var e = u("7b32"),
        o = u.n(e);
    o.a;
  },
  "7b32": function b32(t, n, u) {},
  9676: function _(t, n, u) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var u = {
        data: function data() {
          return {};
        },
        methods: {
          addCommodity: function addCommodity() {
            t.navigateTo({
              url: "/pages/My/commodity/addproduct"
            });
          }
        }
      };
      n.default = u;
    }).call(this, u("6e42")["default"]);
  },
  f213: function f213(t, n, u) {
    "use strict";

    u.r(n);
    var e = u("9676"),
        o = u.n(e);

    for (var a in e) {
      "default" !== a && function (t) {
        u.d(n, t, function () {
          return e[t];
        });
      }(a);
    }

    n["default"] = o.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/No-create-component', {
  'components/No-create-component': function componentsNoCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("1121"));
  }
}, [['components/No-create-component']]]);
});
require('components/No.js');
__wxRoute = 'components/Nostaff';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/Nostaff.js';

define('components/Nostaff.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/Nostaff"], {
  3424: function _(t, n, u) {
    "use strict";

    var e,
        f = function f() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        a = [];

    u.d(n, "b", function () {
      return f;
    }), u.d(n, "c", function () {
      return a;
    }), u.d(n, "a", function () {
      return e;
    });
  },
  "466b": function b(t, n, u) {
    "use strict";

    u.r(n);
    var e = u("3424"),
        f = u("75f4");

    for (var a in f) {
      "default" !== a && function (t) {
        u.d(n, t, function () {
          return f[t];
        });
      }(a);
    }

    u("bfb4");
    var r,
        c = u("f0c5"),
        o = Object(c["a"])(f["default"], e["b"], e["c"], !1, null, null, null, !1, e["a"], r);
    n["default"] = o.exports;
  },
  "75f4": function f4(t, n, u) {
    "use strict";

    u.r(n);
    var e = u("e440"),
        f = u.n(e);

    for (var a in e) {
      "default" !== a && function (t) {
        u.d(n, t, function () {
          return e[t];
        });
      }(a);
    }

    n["default"] = f.a;
  },
  "842b": function b(t, n, u) {},
  bfb4: function bfb4(t, n, u) {
    "use strict";

    var e = u("842b"),
        f = u.n(e);
    f.a;
  },
  e440: function e440(t, n, u) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var u = {
        data: function data() {
          return {};
        },
        methods: {
          add: function add() {
            t.navigateTo({
              url: "/pages/My/staff/addstaff"
            });
          }
        }
      };
      n.default = u;
    }).call(this, u("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/Nostaff-create-component', {
  'components/Nostaff-create-component': function componentsNostaffCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("466b"));
  }
}, [['components/Nostaff-create-component']]]);
});
require('components/Nostaff.js');
__wxRoute = 'components/promotion';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/promotion.js';

define('components/promotion.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/promotion"], {
  "0f03": function f03(n, i, t) {
    "use strict";

    Object.defineProperty(i, "__esModule", {
      value: !0
    }), i.default = void 0;
    var e = {
      data: function data() {
        return {
          time1: "12:01",
          time2: "12:01",
          time3: "12:01",
          xingxi1: !0,
          xingxi2: !1,
          xingxi3: !1
        };
      },
      methods: {
        bindTimeChange1: function bindTimeChange1(n) {
          this.time1 = n.target.value;
        },
        bindTimeChange2: function bindTimeChange2(n) {
          this.time2 = n.target.value;
        },
        bindTimeChange3: function bindTimeChange3(n) {
          this.time3 = n.target.value;
        },
        shanchu1: function shanchu1() {
          this.xingxi1 = !1;
        },
        shanchu2: function shanchu2() {
          this.xingxi2 = !1;
        },
        shanchu3: function shanchu3() {
          this.xingxi3 = !1;
        },
        tianjia: function tianjia() {
          !1 === this.xingxi1 ? this.xingxi1 = !0 : this.xingxi1 && !0 === this.xingxi2 ? this.xingxi3 = !0 : this.xingxi1 && (this.xingxi2 = !0);
        }
      }
    };
    i.default = e;
  },
  1869: function _(n, i, t) {
    "use strict";

    var e,
        u = function u() {
      var n = this,
          i = n.$createElement;
      n._self._c;
    },
        a = [];

    t.d(i, "b", function () {
      return u;
    }), t.d(i, "c", function () {
      return a;
    }), t.d(i, "a", function () {
      return e;
    });
  },
  "427b": function b(n, i, t) {
    "use strict";

    t.r(i);
    var e = t("1869"),
        u = t("7eb8");

    for (var a in u) {
      "default" !== a && function (n) {
        t.d(i, n, function () {
          return u[n];
        });
      }(a);
    }

    t("f864");
    var c,
        f = t("f0c5"),
        o = Object(f["a"])(u["default"], e["b"], e["c"], !1, null, null, null, !1, e["a"], c);
    i["default"] = o.exports;
  },
  "459d": function d(n, i, t) {},
  "7eb8": function eb8(n, i, t) {
    "use strict";

    t.r(i);
    var e = t("0f03"),
        u = t.n(e);

    for (var a in e) {
      "default" !== a && function (n) {
        t.d(i, n, function () {
          return e[n];
        });
      }(a);
    }

    i["default"] = u.a;
  },
  f864: function f864(n, i, t) {
    "use strict";

    var e = t("459d"),
        u = t.n(e);
    u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/promotion-create-component', {
  'components/promotion-create-component': function componentsPromotionCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("427b"));
  }
}, [['components/promotion-create-component']]]);
});
require('components/promotion.js');
__wxRoute = 'components/transaction';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/transaction.js';

define('components/transaction.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/transaction"], {
  "08bf": function bf(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("3d19"),
        r = e("2e61");

    for (var a in r) {
      "default" !== a && function (n) {
        e.d(t, n, function () {
          return r[n];
        });
      }(a);
    }

    e("96eb");
    var c,
        o = e("f0c5"),
        f = Object(o["a"])(r["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], c);
    t["default"] = f.exports;
  },
  "2e61": function e61(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("c1c9"),
        r = e.n(u);

    for (var a in u) {
      "default" !== a && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(a);
    }

    t["default"] = r.a;
  },
  "3d19": function d19(n, t, e) {
    "use strict";

    var u,
        r = function r() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        a = [];

    e.d(t, "b", function () {
      return r;
    }), e.d(t, "c", function () {
      return a;
    }), e.d(t, "a", function () {
      return u;
    });
  },
  "96eb": function eb(n, t, e) {
    "use strict";

    var u = e("f5db"),
        r = e.n(u);
    r.a;
  },
  c1c9: function c1c9(n, t, e) {
    "use strict";

    (function (n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var e = {
        data: function data() {
          return {};
        },
        methods: {
          Information: function Information() {
            n.navigateTo({
              url: "/pages/My/query/Information"
            });
          }
        }
      };
      t.default = e;
    }).call(this, e("6e42")["default"]);
  },
  f5db: function f5db(n, t, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/transaction-create-component', {
  'components/transaction-create-component': function componentsTransactionCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("08bf"));
  }
}, [['components/transaction-create-component']]]);
});
require('components/transaction.js');
__wxRoute = 'components/u-charts/u-charts';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/u-charts/u-charts.js';

define('components/u-charts/u-charts.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/u-charts/u-charts"], {
  "0526": function _(t, e, a) {
    "use strict";

    var n,
        r = function r() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        u = [];

    a.d(e, "b", function () {
      return r;
    }), a.d(e, "c", function () {
      return u;
    }), a.d(e, "a", function () {
      return n;
    });
  },
  "0939": function _(t, e, a) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = r(a("674c"));

      function r(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      var u = {},
          c = {
        props: {
          chartType: {
            required: !0,
            type: String,
            default: "column"
          },
          extraType: {
            type: String,
            default: "group"
          },
          opts: {
            required: !0,
            type: Object,
            default: function _default() {
              return null;
            }
          },
          canvasId: {
            type: String,
            default: "u-canvas"
          },
          cWidth: {
            type: Number,
            default: 375
          },
          cHeight: {
            type: Number,
            default: 250
          },
          pixelRatio: {
            type: Number,
            default: 1
          },
          show: {
            type: Boolean,
            default: !0
          },
          scrollTop: {
            type: Number,
            default: 0
          }
        },
        mounted: function mounted() {
          this.init();
        },
        methods: {
          init: function init() {
            this.opts.type = this.chartType, this.extraType && (this.opts.extra && this.opts.extra[this.chartType] ? this.opts.extra[this.chartType].type = this.extraType : this.opts.extra ? this.opts.extra[this.chartType] = {
              type: this.extraType
            } : this.opts.extra = JSON.parse('{"' + this.chartType + '":{"type":"' + this.extraType + '"}}')), u[this.canvasId] = n.default.showCharts(this.canvasId, this.opts, this);
          },
          changeData: function changeData(t, e, a, n) {
            a && (e.type = a), n && (e.extra && e.extra[a] ? e.extra[a].type = n : e.extra ? e.extra[a] = {
              type: n
            } : e.extra = JSON.parse('{"' + a + '":{"type":"' + n + '"}}')), u[t].updateData(e);
          },
          touchStart: function touchStart(t) {
            t = this.touchY(t, this.scrollTop), u[this.canvasId].showToolTip(t, {
              format: function format(t, e) {
                return (e || "") + " " + t.name + ":" + (t.data.value || t.data);
              }
            }), u[this.canvasId].scrollStart(t);
          },
          touchMove: function touchMove(t) {
            t = this.touchY(t, this.scrollTop), u[this.canvasId].scroll(t);
          },
          touchEnd: function touchEnd(t) {
            t = this.touchY(t, this.scrollTop), u[this.canvasId].scrollEnd(t);
          },
          error: function error(e) {
            console.log(t(e, " at components\\u-charts\\u-charts.vue:97"));
          },
          touchY: function touchY(t, e) {
            var a = t.changedTouches ? t.changedTouches[0].y : t.mp.changedTouches[0].y;
            return t.changedTouches ? t.changedTouches[0].y = a < 0 ? a + e : a : t.mp.changedTouches[0].y = a < 0 ? a + e : a, t;
          }
        }
      };
      e.default = c;
    }).call(this, a("0de9")["default"]);
  },
  4459: function _(t, e, a) {
    "use strict";

    var n = a("e0ab"),
        r = a.n(n);
    r.a;
  },
  "7a32": function a32(t, e, a) {
    "use strict";

    a.r(e);
    var n = a("0939"),
        r = a.n(n);

    for (var u in n) {
      "default" !== u && function (t) {
        a.d(e, t, function () {
          return n[t];
        });
      }(u);
    }

    e["default"] = r.a;
  },
  "91a1": function a1(t, e, a) {
    "use strict";

    a.r(e);
    var n = a("0526"),
        r = a("7a32");

    for (var u in r) {
      "default" !== u && function (t) {
        a.d(e, t, function () {
          return r[t];
        });
      }(u);
    }

    a("4459");
    var c,
        s = a("f0c5"),
        o = Object(s["a"])(r["default"], n["b"], n["c"], !1, null, "435f51c8", null, !1, n["a"], c);
    e["default"] = o.exports;
  },
  e0ab: function e0ab(t, e, a) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/u-charts/u-charts-create-component', {
  'components/u-charts/u-charts-create-component': function componentsUChartsUChartsCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("91a1"));
  }
}, [['components/u-charts/u-charts-create-component']]]);
});
require('components/u-charts/u-charts.js');
__wxRoute = 'components/Yes';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/Yes.js';

define('components/Yes.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/Yes"], {
  "16ff": function ff(n, t, u) {
    "use strict";

    u.r(t);
    var i = u("a5c8"),
        c = u.n(i);

    for (var o in i) {
      "default" !== o && function (n) {
        u.d(t, n, function () {
          return i[n];
        });
      }(o);
    }

    t["default"] = c.a;
  },
  3800: function _(n, t, u) {},
  5384: function _(n, t, u) {
    "use strict";

    var i = u("3800"),
        c = u.n(i);
    c.a;
  },
  a5c8: function a5c8(n, t, u) {
    "use strict";

    (function (n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var u = {
        data: function data() {
          return {
            qian1: !1,
            qian2: !1,
            qian3: !1
          };
        },
        methods: {
          touchT1: function touchT1() {
            this.qian1 = !1;
          },
          touchM1: function touchM1() {
            this.qian1 = !0;
          },
          touchT2: function touchT2() {
            this.qian2 = !1;
          },
          touchM2: function touchM2() {
            this.qian2 = !0;
          },
          touchT3: function touchT3() {
            this.qian3 = !1;
          },
          touchM3: function touchM3() {
            this.qian3 = !0;
          },
          addCommodity: function addCommodity() {
            n.navigateTo({
              url: "/pages/My/commodity/addproduct"
            });
          }
        }
      };
      t.default = u;
    }).call(this, u("6e42")["default"]);
  },
  f0c9: function f0c9(n, t, u) {
    "use strict";

    var i,
        c = function c() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        o = [];

    u.d(t, "b", function () {
      return c;
    }), u.d(t, "c", function () {
      return o;
    }), u.d(t, "a", function () {
      return i;
    });
  },
  f825: function f825(n, t, u) {
    "use strict";

    u.r(t);
    var i = u("f0c9"),
        c = u("16ff");

    for (var o in c) {
      "default" !== o && function (n) {
        u.d(t, n, function () {
          return c[n];
        });
      }(o);
    }

    u("5384");
    var a,
        f = u("f0c5"),
        e = Object(f["a"])(c["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], a);
    t["default"] = e.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/Yes-create-component', {
  'components/Yes-create-component': function componentsYesCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("f825"));
  }
}, [['components/Yes-create-component']]]);
});
require('components/Yes.js');
__wxRoute = 'components/YesStaff';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/YesStaff.js';

define('components/YesStaff.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/YesStaff"], {
  "183c": function c(a, t, n) {
    "use strict";

    var i,
        s = function s() {
      var a = this,
          t = a.$createElement;
      a._self._c;
    },
        u = [];

    n.d(t, "b", function () {
      return s;
    }), n.d(t, "c", function () {
      return u;
    }), n.d(t, "a", function () {
      return i;
    });
  },
  "2a18": function a18(a, t, n) {
    "use strict";

    (function (a) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = {
        data: function data() {
          return {
            tes: "tes",
            OFF: !0,
            ON: !1,
            diary: !1,
            Daka1: !1,
            Daka2: !1,
            Daka3: !1,
            Daka4: !1,
            Daka5: !0,
            Daka6: !1,
            Daka7: !1
          };
        },
        methods: {
          DaKa1: function DaKa1() {
            !0 === this.Daka1 ? this.Daka1 = !1 : this.Daka1 = !0;
          },
          DaKa2: function DaKa2() {
            !0 === this.Daka2 ? this.Daka2 = !1 : this.Daka2 = !0;
          },
          DaKa3: function DaKa3() {
            !0 === this.Daka3 ? this.Daka3 = !1 : this.Daka3 = !0;
          },
          DaKa4: function DaKa4() {
            !0 === this.Daka4 ? this.Daka4 = !1 : this.Daka4 = !0;
          },
          DaKa5: function DaKa5() {
            !0 === this.Daka5 ? this.Daka5 = !1 : this.Daka5 = !0;
          },
          DaKa6: function DaKa6() {
            !0 === this.Daka6 ? this.Daka6 = !1 : this.Daka6 = !0;
          },
          DaKa7: function DaKa7() {
            !0 === this.Daka7 ? this.Daka7 = !1 : this.Daka7 = !0;
          },
          add: function add() {
            a.navigateTo({
              url: "/pages/My/staff/addstaff"
            });
          },
          off: function off() {
            this.tes = "tes", this.OFF = !0, this.ON = !1, this.diary = !1;
          },
          on: function on() {
            this.tes = "", this.OFF = !1, this.ON = !0, this.diary = !0;
          }
        }
      };
      t.default = n;
    }).call(this, n("6e42")["default"]);
  },
  ba75: function ba75(a, t, n) {
    "use strict";

    n.r(t);
    var i = n("2a18"),
        s = n.n(i);

    for (var u in i) {
      "default" !== u && function (a) {
        n.d(t, a, function () {
          return i[a];
        });
      }(u);
    }

    t["default"] = s.a;
  },
  ca26: function ca26(a, t, n) {
    "use strict";

    var i = n("f70a"),
        s = n.n(i);
    s.a;
  },
  f70a: function f70a(a, t, n) {},
  f8c5: function f8c5(a, t, n) {
    "use strict";

    n.r(t);
    var i = n("183c"),
        s = n("ba75");

    for (var u in s) {
      "default" !== u && function (a) {
        n.d(t, a, function () {
          return s[a];
        });
      }(u);
    }

    n("ca26");
    var f,
        c = n("f0c5"),
        e = Object(c["a"])(s["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], f);
    t["default"] = e.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/YesStaff-create-component', {
  'components/YesStaff-create-component': function componentsYesStaffCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("f8c5"));
  }
}, [['components/YesStaff-create-component']]]);
});
require('components/YesStaff.js');

__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{1434:function(n,t,e){"use strict";e.r(t);var u=e("14b8"),r=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);t["default"]=r.a},"14b8":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{}},onLoad:function(){},methods:{GetInto:function(){n.switchTab({url:"/pages/Order/Order"})}}};t.default=e}).call(this,e("6e42")["default"])},"3db0":function(n,t,e){"use strict";var u,r=function(){var n=this,t=n.$createElement;n._self._c},c=[];e.d(t,"b",function(){return r}),e.d(t,"c",function(){return c}),e.d(t,"a",function(){return u})},"3ffd":function(n,t,e){"use strict";e.r(t);var u=e("3db0"),r=e("1434");for(var c in r)"default"!==c&&function(n){e.d(t,n,function(){return r[n]})}(c);e("4ce3");var f,a=e("f0c5"),o=Object(a["a"])(r["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],f);t["default"]=o.exports},"4ce3":function(n,t,e){"use strict";var u=e("5539"),r=e.n(u);r.a},5539:function(n,t,e){},"6e66":function(n,t,e){"use strict";(function(n){e("431f"),e("921b");u(e("66fd"));var t=u(e("3ffd"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])}},[["6e66","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/My/query/query';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/My/query/query.js';

define('pages/My/query/query.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/My/query/query"],{1378:function(e,t,n){"use strict";n.r(t);var r=n("c70c"),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t["default"]=a.a},"5d7f":function(e,t,n){},"9f58":function(e,t,n){"use strict";n.r(t);var r=n("c1da"),a=n("1378");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("e7df");var i,u=n("f0c5"),s=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);t["default"]=s.exports},aaf3:function(e,t,n){"use strict";(function(e){n("431f"),n("921b");r(n("66fd"));var t=r(n("9f58"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},c1da:function(e,t,n){"use strict";var r,a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"b",function(){return a}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return r})},c70c:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("a34a")),a=o(n("3e14"));function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,r,a,o,i){try{var u=e[o](i),s=u.value}catch(c){return void n(c)}u.done?t(s):Promise.resolve(s).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function u(e){i(o,r,a,u,s,"next",e)}function s(e){i(o,r,a,u,s,"throw",e)}u(void 0)})}}var s,c=function(){return Promise.all([n.e("common/vendor"),n.e("components/mix-advert/vue/mix-advert")]).then(n.bind(null,"da2f"))},f=function(){return Promise.all([n.e("common/vendor"),n.e("components/mix-pulldown-refresh/mix-pulldown-refresh")]).then(n.bind(null,"098b"))},d=function(){return n.e("components/mix-load-more/mix-load-more").then(n.bind(null,"f0e0"))},l=function(){return n.e("components/transaction").then(n.bind(null,"08bf"))},h=0,m=!1,b={data:function(){return{search:"../../../static/xiabiao2.png",tabCurrentIndex:0,scrollLeft:0,enableScroll:!0,tabBars:[]}},components:{transaction:l,mixPulldownRefresh:f,mixLoadMore:d,mixAdvert:c},computed:{advertNavUrl:function(){var e={title:"测试跳转新闻详情",author:"测试作者",time:"2019-04-26 21:21"};return"/pages/details/details?data=".concat(JSON.stringify(e))}},onLoad:function(){var t=u(r.default.mark(function t(){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:h=e.getSystemInfoSync().windowWidth,this.loadTabbars();case 2:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),onReady:function(){this.$refs.mixAdvert.initAdvert()},methods:{loadTabbars:function(){var e=a.default.tabList;e.forEach(function(e){e.newsList=[],e.loadMoreStatus=0,e.refreshing=0}),this.tabBars=e,this.loadNewsList("add")},loadNewsList:function(e){var t=this,n=this.tabBars[this.tabCurrentIndex];if("add"===e){if(2===n.loadMoreStatus)return;n.loadMoreStatus=1}else"refresh"===e&&(n.refreshing=!0);setTimeout(function(){var r=a.default.newsList;r.sort(function(e,t){return Math.random()>.5?-1:1}),"refresh"===e&&(n.newsList=[]),r.forEach(function(e){e.id=parseInt(1e4*Math.random()),n.newsList.push(e)}),"refresh"===e&&(t.$refs.mixPulldownRefresh&&t.$refs.mixPulldownRefresh.endPulldownRefresh(),n.refreshing=!1,n.loadMoreStatus=0),"add"===e&&(n.loadMoreStatus=n.newsList.length>40?2:0)},600)},changeTab:function(){var e=u(r.default.mark(function e(t){var n,a,o,i,u,c=this;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(m&&(clearTimeout(m),m=!1),n=t,"object"===typeof t&&(n=t.detail.current),"object"===typeof s){e.next=7;break}return e.next=6,this.getElSize("nav-bar");case 6:s=e.sent;case 7:s.scrollLeft,a=0,o=0,i=0;case 11:if(!(i<=n)){e.next=20;break}return e.next=14,this.getElSize("tab"+i);case 14:u=e.sent,a+=u.width,i===n&&(o=u.width);case 17:i++,e.next=11;break;case 20:"number"===typeof t&&(this.tabCurrentIndex=n),m=setTimeout(function(){c.scrollLeft=a-o/2>h/2?a-o/2-h/2:0,"object"===typeof t&&(c.tabCurrentIndex=n),c.tabCurrentIndex=n;var e=c.tabBars[c.tabCurrentIndex];0!==c.tabCurrentIndex&&!0!==e.loaded&&(c.loadNewsList("add"),e.loaded=!0)},300);case 22:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),getElSize:function(t){return new Promise(function(n,r){var a=e.createSelectorQuery().select("#"+t);a.fields({size:!0,scrollOffset:!0,rect:!0},function(e){n(e)}).exec()})}}};t.default=b}).call(this,n("6e42")["default"])},e7df:function(e,t,n){"use strict";var r=n("5d7f"),a=n.n(r);a.a}},[["aaf3","common/runtime","common/vendor"]]]);
});
require('pages/My/query/query.js');
__wxRoute = 'pages/My/staff/addstaff';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/My/staff/addstaff.js';

define('pages/My/staff/addstaff.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/My/staff/addstaff"],{"2a50":function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{Te:"",complete1:!1,complete2:!1,complete3:!1,complete4:!1}},onLoad:function(){this.Te="Te"},methods:{formSubmit:function(e){console.log(t(JSON.stringify(e.detail.value)," at pages\\My\\staff\\addstaff.vue:70"))},tel:function(){n.scanCode({success:function(e){console.log(t(e.result," at pages\\My\\staff\\addstaff.vue:75"))}})}}};e.default=a}).call(this,n("0de9")["default"],n("6e42")["default"])},6698:function(t,e,n){"use strict";(function(t){n("431f"),n("921b");a(n("66fd"));var e=a(n("accb"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"67cf":function(t,e,n){"use strict";var a,u=function(){var t=this,e=t.$createElement;t._self._c},c=[];n.d(e,"b",function(){return u}),n.d(e,"c",function(){return c}),n.d(e,"a",function(){return a})},"6edd":function(t,e,n){"use strict";var a=n("8907"),u=n.n(a);u.a},8907:function(t,e,n){},a5ac:function(t,e,n){"use strict";n.r(e);var a=n("2a50"),u=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);e["default"]=u.a},accb:function(t,e,n){"use strict";n.r(e);var a=n("67cf"),u=n("a5ac");for(var c in u)"default"!==c&&function(t){n.d(e,t,function(){return u[t]})}(c);n("6edd");var f,o=n("f0c5"),r=Object(o["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],f);e["default"]=r.exports}},[["6698","common/runtime","common/vendor"]]]);
});
require('pages/My/staff/addstaff.js');
__wxRoute = 'pages/My/commodity/addproduct';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/My/commodity/addproduct.js';

define('pages/My/commodity/addproduct.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/My/commodity/addproduct"],{"09e7":function(t,n,e){"use strict";var o=e("de45"),a=e.n(o);a.a},3757:function(t,n,e){"use strict";(function(t){e("431f"),e("921b");o(e("66fd"));var n=o(e("ac48"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},ac48:function(t,n,e){"use strict";e.r(n);var o=e("cdf2"),a=e("c941");for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);e("09e7");var i,u=e("f0c5"),c=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);n["default"]=c.exports},c941:function(t,n,e){"use strict";e.r(n);var o=e("e6c3"),a=e.n(o);for(var r in o)"default"!==r&&function(t){e.d(n,t,function(){return o[t]})}(r);n["default"]=a.a},cdf2:function(t,n,e){"use strict";var o,a=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return r}),e.d(n,"a",function(){return o})},de45:function(t,n,e){},e6c3:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{Te:"",text:"",TheStyle:{background:"",color:"",font:""},Img:!1,image:"",ime:"请选择",Brand:"农夫山泉"}},onLoad:function(t){this.Te="Te",this.ime=t.name,this.Brand=t.nane,this.drawPic()},methods:{shuaxin:function(){t.redirectTo({url:"/pages/My/commodity/addproduct"})},randomNum:function(t,n){return Math.floor(Math.random()*(n-t)+t)},randomColor:function(t,n){var e=this.randomNum(t,n),o=this.randomNum(t,n),a=this.randomNum(t,n);return"rgba("+e+","+o+","+a+")"},drawPic:function(){this.TheStyle.background=this.randomColor(180,240);for(var t="ABCEFGHJKLMNPQRSTWXY123456789",n=0;n<4;n++){var e=t[this.randomNum(0,t.length)];this.TheStyle.color=this.randomColor(50,160),this.TheStyle.font=this.randomNum(20,26)+"px SimHei";this.randomNum(20,25),this.randomNum(-20,20);this.text+=e}},Chart:function(){var n=this;t.chooseImage({count:1,sizeType:"original",success:function(t){n.image=t.tempFilePaths,n.Img=!0}})},brand:function(){t.navigateTo({url:"/pages/My/commodity/brand"})},Model:function(){t.navigateTo({url:"/pages/My/commodity/Model"})}}};n.default=e}).call(this,e("6e42")["default"])}},[["3757","common/runtime","common/vendor"]]]);
});
require('pages/My/commodity/addproduct.js');
__wxRoute = 'pages/My/group/See';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/My/group/See.js';

define('pages/My/group/See.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/My/group/See"],{3010:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{}},methods:{Modify:function(){n.navigateTo({url:"/pages/My/group/modify"})}}};t.default=e}).call(this,e("6e42")["default"])},"32f3":function(n,t,e){"use strict";e.r(t);var u=e("3010"),c=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=c.a},"3bdc":function(n,t,e){"use strict";e.r(t);var u=e("3ec2"),c=e("32f3");for(var a in c)"default"!==a&&function(n){e.d(t,n,function(){return c[n]})}(a);e("acc1");var r,f=e("f0c5"),o=Object(f["a"])(c["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);t["default"]=o.exports},"3ec2":function(n,t,e){"use strict";var u,c=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"b",function(){return c}),e.d(t,"c",function(){return a}),e.d(t,"a",function(){return u})},acc1:function(n,t,e){"use strict";var u=e("c176"),c=e.n(u);c.a},c176:function(n,t,e){},cfa2:function(n,t,e){"use strict";(function(n){e("431f"),e("921b");u(e("66fd"));var t=u(e("3bdc"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])}},[["cfa2","common/runtime","common/vendor"]]]);
});
require('pages/My/group/See.js');
__wxRoute = 'pages/My/group/modify';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/My/group/modify.js';

define('pages/My/group/modify.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/My/group/modify"],{"2daa":function(t,n,e){"use strict";var u=e("3a8e"),a=e.n(u);a.a},"3a8e":function(t,n,e){},8456:function(t,n,e){"use strict";var u,a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return i}),e.d(n,"a",function(){return u})},"9b47":function(t,n,e){"use strict";(function(t){e("431f"),e("921b");u(e("66fd"));var n=u(e("adbc"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},adbc:function(t,n,e){"use strict";e.r(n);var u=e("8456"),a=e("e599");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("2daa");var r,c=e("f0c5"),o=Object(c["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);n["default"]=o.exports},d05f:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{multiAraay:[["星期一","星期二","星期三","星期四","星期五","星期六","星期日"],["星期一","星期二","星期三","星期四","星期五","星期六","星期日"]],region:["1","2"],time1:"9:00",time2:"21:00"}},methods:{bindPickerChange:function(t){this.region=t.detail.value},bindTimeChange1:function(t){this.time1=t.target.value},bindTimeChange2:function(t){this.time2=t.target.value}}};n.default=u},e599:function(t,n,e){"use strict";e.r(n);var u=e("d05f"),a=e.n(u);for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);n["default"]=a.a}},[["9b47","common/runtime","common/vendor"]]]);
});
require('pages/My/group/modify.js');
__wxRoute = 'pages/Statistics/Statistics';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/Statistics/Statistics.js';

define('pages/Statistics/Statistics.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Statistics/Statistics"],{"1a7a":function(t,e,n){"use strict";n.r(e);var i=n("ae46"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},"33cb":function(t,e,n){"use strict";(function(t){n("431f"),n("921b");i(n("66fd"));var e=i(n("8721"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"56ab":function(t,e,n){"use strict";var i=n("a423"),a=n.n(i);a.a},"6aca":function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return i})},8721:function(t,e,n){"use strict";n.r(e);var i=n("6aca"),a=n("1a7a");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("56ab");var s,u=n("f0c5"),o=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);e["default"]=o.exports},a423:function(t,e,n){},ae46:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("a34a")),a=r(n("674c"));function r(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,i,a,r,s){try{var u=t[r](s),o=u.value}catch(c){return void n(c)}u.done?e(o):Promise.resolve(o).then(i,a)}function u(t){return function(){var e=this,n=arguments;return new Promise(function(i,a){var r=t.apply(e,n);function u(t){s(r,i,a,u,o,"next",t)}function o(t){s(r,i,a,u,o,"throw",t)}u(void 0)})}}var o=function(){return n.e("components/u-charts/u-charts").then(n.bind(null,"91a1"))},c=function(){return n.e("components/Complaint").then(n.bind(null,"9786"))},l=function(){return n.e("components/evaluate").then(n.bind(null,"2b66"))},h={data:function(){return{array:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],index:1,text:"",canvas:!0,cWidth:"",cHeight:"",uWidth:"",uHeight:"",arr:[],are:[],efficiency:!0,evaluate:!1,Complaint:!1,SalesVolume:!1,te1:"te",te2:"",te3:"",te4:""}},components:{Complaint:c,evaluate:l,uCharts:o},onLoad:function(t){this.init()},onReady:function(){},methods:{bindPickerChange:function(t){this.index=t.target.value,this.text="text"},init:function(){this.cWidth=t.upx2px(710),this.cHeight=t.upx2px(400),this.uWidth=t.upx2px(750),this.uHeight=t.upx2px(600),this.getServerData()},getServerData:function(){var t=u(i.default.mark(function t(){var e,n,r,s,u,o,c;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=a.default.getSampleData(),n={enableScroll:!1,unit:"单"},n.categories=e.LineA.categories,n.series=e.LineA.series,r={rotate:!1,enableScroll:!1,unit:"单"},r.categories=e.LineB.categories,r.series=e.LineB.series,s={enableScroll:!1,unit:"单"},s.categories=e.ColumnB.categories,s.series=e.ColumnB.series,u={enableScroll:!1,unit:""},u.categories=e.ColumnMeter.categories,u.series=e.ColumnMeter.series,o=[{group:"",title:"",btn:[],opts:e.Pie,chartType:"ring",id:"c5"}],c=[{title:"",btn:[],opts:s,chartType:"column",extraType:"stack",id:"c1"}],this.are=o,this.arr=c;case 17:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),selector:function(t){"效率"===t._relatedInfo.anchorTargetText?(this.te1="te",this.te2="",this.te3="",this.te4="",this.text="",this.efficiency=!0,this.evaluate=!1,this.Complaint=!1,this.SalesVolume=!1):"投诉"===t._relatedInfo.anchorTargetText?(this.te1="",this.te2="te",this.te3="",this.te4="",this.text="",this.efficiency=!1,this.evaluate=!1,this.SalesVolume=!1,this.Complaint=!0):"评论"===t._relatedInfo.anchorTargetText?(this.te1="",this.te2="",this.te3="te",this.te4="",this.text="",this.efficiency=!1,this.evaluate=!0,this.SalesVolume=!1,this.Complaint=!1):"销量"===t._relatedInfo.anchorTargetText&&(this.te1="",this.te2="",this.te3="",this.te4="te",this.text="",this.efficiency=!1,this.evaluate=!1,this.SalesVolume=!0,this.Complaint=!1)}}};e.default=h}).call(this,n("6e42")["default"])}},[["33cb","common/runtime","common/vendor"]]]);
});
require('pages/Statistics/Statistics.js');
__wxRoute = 'pages/My/capital/Analysis';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/My/capital/Analysis.js';

define('pages/My/capital/Analysis.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/My/capital/Analysis"],{1252:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("a34a")),i=a(n("674c"));function a(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n,r,i,a,o){try{var c=t[a](o),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,i)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var a=t.apply(e,n);function c(t){o(a,r,i,c,s,"next",t)}function s(t){o(a,r,i,c,s,"throw",t)}c(void 0)})}}var s=function(){return n.e("components/u-charts/u-charts").then(n.bind(null,"91a1"))},u={data:function(){return{canvas:!0,cWidth:"",cHeight:"",arr:[],are:[],Profit:!0,te1:"te",te2:"",te3:"",te4:""}},components:{uCharts:s},onLoad:function(t){this.init()},onReady:function(){},methods:{init:function(){this.cWidth=t.upx2px(710),this.cHeight=t.upx2px(400),this.getServerData()},getServerData:function(){var t=c(r.default.mark(function t(){var e,n,a,o,c,s,u;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=i.default.getSampleData(),n={enableScroll:!1,unit:"单"},n.categories=e.LineA.categories,n.series=e.LineA.series,a={rotate:!1,enableScroll:!1,unit:"单"},a.categories=e.LineB.categories,a.series=e.LineB.series,o={enableScroll:!1,unit:"单"},o.categories=e.ColumnB.categories,o.series=e.ColumnB.series,c={enableScroll:!1,unit:""},c.categories=e.ColumnMeter.categories,c.series=e.ColumnMeter.series,s=[{title:"",btn:[],opts:o,chartType:"area",extraType:"curve",id:"c1"}],u=[{title:"",btn:[],opts:o,chartType:"column",extraType:"stack",id:"c4"}],this.are=s,this.arr=u;case 17:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),Choice:function(t){"日收益"===t._relatedInfo.anchorTargetText?(this.te1="te",this.te2="",this.te3="",this.te4="",this.Profit=!0):"月收益"===t._relatedInfo.anchorTargetText?(this.te1="",this.te2="te",this.te3="",this.te4="",this.Profit=!0):"年收益"===t._relatedInfo.anchorTargetText?(this.te1="",this.te2="",this.te3="te",this.te4="",this.Profit=!0):"累计收益"===t._relatedInfo.anchorTargetText&&(this.te1="",this.te2="",this.te3="",this.te4="te",this.Profit=!1)}}};e.default=u}).call(this,n("6e42")["default"])},2071:function(t,e,n){"use strict";n.r(e);var r=n("9b44"),i=n("a127");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("c45b");var o,c=n("f0c5"),s=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);e["default"]=s.exports},"9b44":function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return r})},a127:function(t,e,n){"use strict";n.r(e);var r=n("1252"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e["default"]=i.a},af89:function(t,e,n){"use strict";(function(t){n("431f"),n("921b");r(n("66fd"));var e=r(n("2071"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},c45b:function(t,e,n){"use strict";var r=n("c727"),i=n.n(r);i.a},c727:function(t,e,n){}},[["af89","common/runtime","common/vendor"]]]);
});
require('pages/My/capital/Analysis.js');
__wxRoute = 'pages/My/activity/Discount';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/My/activity/Discount.js';

define('pages/My/activity/Discount.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/My/activity/Discount"],{"0522":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{Festival1:!1,Festival2:!1,Festival3:!1,Festival4:!1,Festival5:!1,Festival6:!1,Festival7:!1,Festival8:!1,Festival9:!1,Festival10:!1,Festival11:!1}},methods:{festival:function(t){"春节"===t._relatedInfo.anchorTargetText?this.Festival1?this.Festival1=!1:this.Festival1=!0:"中秋节"===t._relatedInfo.anchorTargetText?this.Festival2?this.Festival2=!1:this.Festival2=!0:"端午节"===t._relatedInfo.anchorTargetText?this.Festival3?this.Festival3=!1:this.Festival3=!0:"儿童节"===t._relatedInfo.anchorTargetText?this.Festival4?this.Festival4=!1:this.Festival4=!0:"国庆节"===t._relatedInfo.anchorTargetText?this.Festival5?this.Festival5=!1:this.Festival5=!0:"38妇女节"===t._relatedInfo.anchorTargetText?this.Festival6?this.Festival6=!1:this.Festival6=!0:"七夕节"===t._relatedInfo.anchorTargetText?this.Festival7?this.Festival7=!1:this.Festival7=!0:"元旦"===t._relatedInfo.anchorTargetText?this.Festival8?this.Festival8=!1:this.Festival8=!0:"重阳节"===t._relatedInfo.anchorTargetText?this.Festival9?this.Festival9=!1:this.Festival9=!0:"清明节"===t._relatedInfo.anchorTargetText?this.Festival10?this.Festival10=!1:this.Festival10=!0:"劳动节"===t._relatedInfo.anchorTargetText&&(this.Festival11?this.Festival11=!1:this.Festival11=!0)}}};e.default=i},"334e":function(t,e,a){"use strict";(function(t){a("431f"),a("921b");i(a("66fd"));var e=i(a("ba95"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"8a41":function(t,e,a){"use strict";var i,s=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"b",function(){return s}),a.d(e,"c",function(){return n}),a.d(e,"a",function(){return i})},ba95:function(t,e,a){"use strict";a.r(e);var i=a("8a41"),s=a("cdc3");for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);a("c27b");var l,r=a("f0c5"),c=Object(r["a"])(s["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],l);e["default"]=c.exports},c27b:function(t,e,a){"use strict";var i=a("c2c5"),s=a.n(i);s.a},c2c5:function(t,e,a){},cdc3:function(t,e,a){"use strict";a.r(e);var i=a("0522"),s=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=s.a}},[["334e","common/runtime","common/vendor"]]]);
});
require('pages/My/activity/Discount.js');
__wxRoute = 'pages/Statistics/Complaint/Complaint';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/Statistics/Complaint/Complaint.js';

define('pages/Statistics/Complaint/Complaint.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Statistics/Complaint/Complaint"],{"0ab5":function(t,n,e){"use strict";var a,u=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"b",function(){return u}),e.d(n,"c",function(){return c}),e.d(n,"a",function(){return a})},1973:function(t,n,e){"use strict";var a=e("7c03"),u=e.n(a);u.a},"7c03":function(t,n,e){},"88a5":function(t,n,e){"use strict";(function(t){e("431f"),e("921b");a(e("66fd"));var n=a(e("cd3d"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},cd3d:function(t,n,e){"use strict";e.r(n);var a=e("0ab5"),u=e("e455");for(var c in u)"default"!==c&&function(t){e.d(n,t,function(){return u[t]})}(c);e("1973");var i,r=e("f0c5"),o=Object(r["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);n["default"]=o.exports},e0b9:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{}},methods:{Handle:function(){t.navigateTo({url:"/pages/Statistics/Complaint/detailed"})}}};n.default=e}).call(this,e("6e42")["default"])},e455:function(t,n,e){"use strict";e.r(n);var a=e("e0b9"),u=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(n,t,function(){return a[t]})}(c);n["default"]=u.a}},[["88a5","common/runtime","common/vendor"]]]);
});
require('pages/Statistics/Complaint/Complaint.js');
__wxRoute = 'pages/Statistics/Complaint/detailed';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/Statistics/Complaint/detailed.js';

define('pages/Statistics/Complaint/detailed.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Statistics/Complaint/detailed"],{"638c":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{}},methods:{}};n.default=u},"66ff":function(t,n,e){"use strict";var u=e("6a59"),c=e.n(u);c.a},"6a59":function(t,n,e){},"81af":function(t,n,e){"use strict";e.r(n);var u=e("638c"),c=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);n["default"]=c.a},b867:function(t,n,e){"use strict";var u,c=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",function(){return c}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return u})},cd3e:function(t,n,e){"use strict";e.r(n);var u=e("b867"),c=e("81af");for(var a in c)"default"!==a&&function(t){e.d(n,t,function(){return c[t]})}(a);e("66ff");var f,r=e("f0c5"),o=Object(r["a"])(c["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],f);n["default"]=o.exports},fcc4:function(t,n,e){"use strict";(function(t){e("431f"),e("921b");u(e("66fd"));var n=u(e("cd3e"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])}},[["fcc4","common/runtime","common/vendor"]]]);
});
require('pages/Statistics/Complaint/detailed.js');
__wxRoute = 'pages/My/commodity/brand';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/My/commodity/brand.js';

define('pages/My/commodity/brand.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/My/commodity/brand"],{"206f":function(t,n,e){"use strict";e.r(n);var c=e("8898"),o=e("a5f9");for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);e("e14c");var u,i=e("f0c5"),r=Object(i["a"])(o["default"],c["b"],c["c"],!1,null,null,null,!1,c["a"],u);n["default"]=r.exports},"3f32":function(t,n,e){},4848:function(t,n,e){"use strict";(function(t,c){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(e("6d34"));function a(t){return t&&t.__esModule?t:{default:t}}console.log(t(o.default.length," at pages\\My\\commodity\\brand.vue:18"));var u=function(){return Promise.all([e.e("common/vendor"),e.e("components/city-select/city-select")]).then(e.bind(null,"4464"))},i={data:function(){return{formatName:"title",obtainCitys:[]}},components:{citySelect:u},onLoad:function(){var t=this;setTimeout(function(){t.formatName="cityName",t.obtainCitys=o.default})},methods:{cityClick:function(t){c.navigateTo({url:"/pages/My/commodity/addproduct?id=".concat(t.cityCode,"&nane=").concat(t.cityName)})}}};n.default=i}).call(this,e("0de9")["default"],e("6e42")["default"])},"7bce":function(t,n,e){"use strict";(function(t){e("431f"),e("921b");c(e("66fd"));var n=c(e("206f"));function c(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},8898:function(t,n,e){"use strict";var c,o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return c})},a5f9:function(t,n,e){"use strict";e.r(n);var c=e("4848"),o=e.n(c);for(var a in c)"default"!==a&&function(t){e.d(n,t,function(){return c[t]})}(a);n["default"]=o.a},e14c:function(t,n,e){"use strict";var c=e("3f32"),o=e.n(c);o.a}},[["7bce","common/runtime","common/vendor"]]]);
});
require('pages/My/commodity/brand.js');
__wxRoute = 'pages/My/commodity/Model';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/My/commodity/Model.js';

define('pages/My/commodity/Model.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/My/commodity/Model"],{1586:function(t,e,i){"use strict";var n=i("7a31"),a=i.n(n);a.a},"5a21":function(t,e,i){"use strict";i.r(e);var n=i("9035"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"7a31":function(t,e,i){},9035:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{img1:!1,img2:!1,img3:!1,te1:"",te2:"te",te3:"",te4:""}},methods:{imgA:function(){!1===this.img1?(this.img1=!0,this.img2=!1,this.img3=!1,t.navigateTo({url:"/pages/My/commodity/addproduct?id=1&name=18.9L雀巢优活包装饮用水"})):this.img1=!1},imgB:function(){!1===this.img2?(this.img2=!0,this.img1=!1,this.img3=!1,t.navigateTo({url:"/pages/My/commodity/addproduct?id=1&name=18.9L雀巢优活包装饮用水"})):this.img2=!1},imgC:function(){!1===this.img3?(this.img3=!0,this.img1=!1,this.img2=!1,t.navigateTo({url:"/pages/My/commodity/addproduct?id=1&name=18.9L雀巢优活包装饮用水"})):this.img3=!1},te:function(t){"全部"===t._relatedInfo.anchorTargetText?(this.te1="te",this.te2="",this.te3="",this.te4=""):"18.9L"===t._relatedInfo.anchorTargetText?(this.te1="",this.te2="te",this.te3="",this.te4=""):"4.5-5L"===t._relatedInfo.anchorTargetText?(this.te1="",this.te2="",this.te3="te",this.te4=""):"其他"===t._relatedInfo.anchorTargetText&&(this.te1="",this.te2="",this.te3="",this.te4="te")}}};e.default=i}).call(this,i("6e42")["default"])},cd00:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement;t._self._c},o=[];i.d(e,"b",function(){return a}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return n})},e8e4:function(t,e,i){"use strict";i.r(e);var n=i("cd00"),a=i("5a21");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("1586");var u,r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],u);e["default"]=s.exports},ff6f:function(t,e,i){"use strict";(function(t){i("431f"),i("921b");n(i("66fd"));var e=n(i("e8e4"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])}},[["ff6f","common/runtime","common/vendor"]]]);
});
require('pages/My/commodity/Model.js');
__wxRoute = 'pages/My/group/Establish';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/My/group/Establish.js';

define('pages/My/group/Establish.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/My/group/Establish"],{"3a5d":function(t,n,e){"use strict";var u=e("d1f5"),i=e.n(u);i.a},"3c42":function(t,n,e){"use strict";(function(t){e("431f"),e("921b");u(e("66fd"));var n=u(e("a903"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},a903:function(t,n,e){"use strict";e.r(n);var u=e("d42d"),i=e("dc11");for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);e("3a5d");var r,c=e("f0c5"),d=Object(c["a"])(i["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);n["default"]=d.exports},b4c6:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{array:["星期一","星期二","星期三","星期四","星期五","星期六","星期日"],index1:2,index2:6,time1:"9:00",time2:"21:00"}},methods:{bindPickerChange1:function(t){this.index1=t.target.value},bindPickerChange2:function(t){this.index2=t.target.value},bindTimeChange1:function(t){this.time1=t.target.value},bindTimeChange2:function(t){this.time2=t.target.value}}};n.default=u},d1f5:function(t,n,e){},d42d:function(t,n,e){"use strict";var u,i=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",function(){return i}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return u})},dc11:function(t,n,e){"use strict";e.r(n);var u=e("b4c6"),i=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);n["default"]=i.a}},[["3c42","common/runtime","common/vendor"]]]);
});
require('pages/My/group/Establish.js');
__wxRoute = 'pages/My/activity/Promotion';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/My/activity/Promotion.js';

define('pages/My/activity/Promotion.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/My/activity/Promotion"],{"3e04":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){return e.e("components/promotion").then(e.bind(null,"427b"))},o={data:function(){return{}},components:{Promotion:u}};t.default=o},"684f":function(n,t,e){},"807f":function(n,t,e){"use strict";(function(n){e("431f"),e("921b");u(e("66fd"));var t=u(e("971f"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"8f4f":function(n,t,e){"use strict";var u=e("684f"),o=e.n(u);o.a},"971f":function(n,t,e){"use strict";e.r(t);var u=e("d3e8"),o=e("d168");for(var r in o)"default"!==r&&function(n){e.d(t,n,function(){return o[n]})}(r);e("8f4f");var f,c=e("f0c5"),i=Object(c["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],f);t["default"]=i.exports},d168:function(n,t,e){"use strict";e.r(t);var u=e("3e04"),o=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);t["default"]=o.a},d3e8:function(n,t,e){"use strict";var u,o=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"b",function(){return o}),e.d(t,"c",function(){return r}),e.d(t,"a",function(){return u})}},[["807f","common/runtime","common/vendor"]]]);
});
require('pages/My/activity/Promotion.js');
__wxRoute = 'pages/My/activity/HolidaySale';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/My/activity/HolidaySale.js';

define('pages/My/activity/HolidaySale.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/My/activity/HolidaySale"],{1616:function(t,n,e){"use strict";e.r(n);var u=e("d068"),c=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);n["default"]=c.a},"7a6c":function(t,n,e){"use strict";e.r(n);var u=e("fc06"),c=e("1616");for(var a in c)"default"!==a&&function(t){e.d(n,t,function(){return c[t]})}(a);e("c4ef");var o,i=e("f0c5"),r=Object(i["a"])(c["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],o);n["default"]=r.exports},"983f":function(t,n,e){},b312:function(t,n,e){"use strict";(function(t){e("431f"),e("921b");u(e("66fd"));var n=u(e("7a6c"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},c4ef:function(t,n,e){"use strict";var u=e("983f"),c=e.n(u);c.a},d068:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{remove1:!0,remove2:!0}},methods:{shanchu1:function(){this.remove1=!1},shanchu2:function(){this.remove2=!1},Discount:function(){t.navigateTo({url:"/pages/My/activity/Discount"})}}};n.default=e}).call(this,e("6e42")["default"])},fc06:function(t,n,e){"use strict";var u,c=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",function(){return c}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return u})}},[["b312","common/runtime","common/vendor"]]]);
});
require('pages/My/activity/HolidaySale.js');
__wxRoute = 'pages/My/activity/follow';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/My/activity/follow.js';

define('pages/My/activity/follow.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/My/activity/follow"],{"035c":function(t,n,e){"use strict";(function(t){e("431f"),e("921b");u(e("66fd"));var n=u(e("fd8a"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"2a25":function(t,n,e){"use strict";e.r(n);var u=e("d8ea"),a=e.n(u);for(var c in u)"default"!==c&&function(t){e.d(n,t,function(){return u[t]})}(c);n["default"]=a.a},"35e2":function(t,n,e){"use strict";var u=e("9177"),a=e.n(u);a.a},9177:function(t,n,e){},9181:function(t,n,e){"use strict";var u,a=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return c}),e.d(n,"a",function(){return u})},d8ea:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{}},methods:{formSubmit:function(n){console.log(t(n," at pages\\My\\activity\\follow.vue:70"))}}};n.default=e}).call(this,e("0de9")["default"])},fd8a:function(t,n,e){"use strict";e.r(n);var u=e("9181"),a=e("2a25");for(var c in a)"default"!==c&&function(t){e.d(n,t,function(){return a[t]})}(c);e("35e2");var o,f=e("f0c5"),r=Object(f["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],o);n["default"]=r.exports}},[["035c","common/runtime","common/vendor"]]]);
});
require('pages/My/activity/follow.js');
__wxRoute = 'pages/My/capital/History';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/My/capital/History.js';

define('pages/My/capital/History.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/My/capital/History"],{"0651":function(t,n,e){},"146a":function(t,n,e){"use strict";var u=e("0651"),a=e.n(u);a.a},"1f5c":function(t,n,e){"use strict";(function(t){e("431f"),e("921b");u(e("66fd"));var n=u(e("415c"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"2adb":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{}},methods:{detailed:function(){t.navigateTo({url:"/pages/My/capital/income"})}}};n.default=e}).call(this,e("6e42")["default"])},"415c":function(t,n,e){"use strict";e.r(n);var u=e("f163"),a=e("dd7c");for(var c in a)"default"!==c&&function(t){e.d(n,t,function(){return a[t]})}(c);e("146a");var r,f=e("f0c5"),i=Object(f["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);n["default"]=i.exports},dd7c:function(t,n,e){"use strict";e.r(n);var u=e("2adb"),a=e.n(u);for(var c in u)"default"!==c&&function(t){e.d(n,t,function(){return u[t]})}(c);n["default"]=a.a},f163:function(t,n,e){"use strict";var u,a=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return c}),e.d(n,"a",function(){return u})}},[["1f5c","common/runtime","common/vendor"]]]);
});
require('pages/My/capital/History.js');
__wxRoute = 'pages/My/query/Information';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/My/query/Information.js';

define('pages/My/query/Information.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/My/query/Information"],{3264:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{}}};t.default=u},"6ce5":function(n,t,e){},"6fcf":function(n,t,e){"use strict";var u=e("6ce5"),r=e.n(u);r.a},7122:function(n,t,e){"use strict";e.r(t);var u=e("3264"),r=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);t["default"]=r.a},b3d3:function(n,t,e){"use strict";(function(n){e("431f"),e("921b");u(e("66fd"));var t=u(e("d8dd"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},d8dd:function(n,t,e){"use strict";e.r(t);var u=e("fb28"),r=e("7122");for(var c in r)"default"!==c&&function(n){e.d(t,n,function(){return r[n]})}(c);e("6fcf");var f,a=e("f0c5"),o=Object(a["a"])(r["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],f);t["default"]=o.exports},fb28:function(n,t,e){"use strict";var u,r=function(){var n=this,t=n.$createElement;n._self._c},c=[];e.d(t,"b",function(){return r}),e.d(t,"c",function(){return c}),e.d(t,"a",function(){return u})}},[["b3d3","common/runtime","common/vendor"]]]);
});
require('pages/My/query/Information.js');
__wxRoute = 'pages/My/capital/query';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/My/capital/query.js';

define('pages/My/capital/query.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/My/capital/query"],{"034f":function(t,n,e){},"293f":function(t,n,e){"use strict";e.r(n);var u=e("49ad"),a=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);n["default"]=a.a},"49ad":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{}},methods:{button:function(){t.navigateTo({url:"/pages/My/query/Information"})}}};n.default=e}).call(this,e("6e42")["default"])},6048:function(t,n,e){"use strict";var u,a=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return r}),e.d(n,"a",function(){return u})},"6fe3":function(t,n,e){"use strict";var u=e("034f"),a=e.n(u);a.a},b722:function(t,n,e){"use strict";(function(t){e("431f"),e("921b");u(e("66fd"));var n=u(e("c232"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},c232:function(t,n,e){"use strict";e.r(n);var u=e("6048"),a=e("293f");for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);e("6fe3");var f,c=e("f0c5"),o=Object(c["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],f);n["default"]=o.exports}},[["b722","common/runtime","common/vendor"]]]);
});
require('pages/My/capital/query.js');
__wxRoute = 'pages/My/staff/staff';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/My/staff/staff.js';

define('pages/My/staff/staff.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/My/staff/staff"],{"0dd7":function(n,t,e){"use strict";(function(n){e("431f"),e("921b");f(e("66fd"));var t=f(e("8d8d"));function f(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"283a":function(n,t,e){"use strict";e.r(t);var f=e("da8d"),u=e.n(f);for(var a in f)"default"!==a&&function(n){e.d(t,n,function(){return f[n]})}(a);t["default"]=u.a},"8d8d":function(n,t,e){"use strict";e.r(t);var f=e("a6fe"),u=e("283a");for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);var o,r=e("f0c5"),c=Object(r["a"])(u["default"],f["b"],f["c"],!1,null,null,null,!1,f["a"],o);t["default"]=c.exports},a6fe:function(n,t,e){"use strict";var f,u=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"b",function(){return u}),e.d(t,"c",function(){return a}),e.d(t,"a",function(){return f})},da8d:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var f=function(){return e.e("components/Nostaff").then(e.bind(null,"466b"))},u=function(){return e.e("components/YesStaff").then(e.bind(null,"f8c5"))},a={data:function(){return{NoStaff:!1}},components:{Nostaff:f,YesStaff:u},methods:{}};t.default=a}},[["0dd7","common/runtime","common/vendor"]]]);
});
require('pages/My/staff/staff.js');
__wxRoute = 'pages/My/My';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/My/My.js';

define('pages/My/My.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/My/My"],{"038d":function(t,n,a){"use strict";var e,u=function(){var t=this,n=t.$createElement;t._self._c},i=[];a.d(n,"b",function(){return u}),a.d(n,"c",function(){return i}),a.d(n,"a",function(){return e})},"4dba":function(t,n,a){"use strict";a.r(n);var e=a("82e8"),u=a.n(e);for(var i in e)"default"!==i&&function(t){a.d(n,t,function(){return e[t]})}(i);n["default"]=u.a},"55da":function(t,n,a){},"615b":function(t,n,a){"use strict";(function(t){a("431f"),a("921b");e(a("66fd"));var n=e(a("7045"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,a("6e42")["createPage"])},7045:function(t,n,a){"use strict";a.r(n);var e=a("038d"),u=a("4dba");for(var i in u)"default"!==i&&function(t){a.d(n,t,function(){return u[t]})}(i);a("faae");var o,c=a("f0c5"),r=Object(c["a"])(u["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],o);n["default"]=r.exports},"82e8":function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{}},methods:{activity:function(){t.navigateTo({url:"/pages/My/activity/activity"})},capital:function(){t.navigateTo({url:"/pages/My/capital/capital"})},group:function(){t.navigateTo({url:"/pages/My/group/group"})},staff:function(){t.navigateTo({url:"/pages/My/staff/staff"})},commodity:function(){t.navigateTo({url:"/pages/My/commodity/commodity"})},query:function(){t.navigateTo({url:"/pages/My/query/query"})}}};n.default=a}).call(this,a("6e42")["default"])},faae:function(t,n,a){"use strict";var e=a("55da"),u=a.n(e);u.a}},[["615b","common/runtime","common/vendor"]]]);
});
require('pages/My/My.js');
__wxRoute = 'pages/My/capital/capital';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/My/capital/capital.js';

define('pages/My/capital/capital.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/My/capital/capital"],{"0569":function(t,n,a){"use strict";a.r(n);var e=a("a94e"),u=a.n(e);for(var c in e)"default"!==c&&function(t){a.d(n,t,function(){return e[t]})}(c);n["default"]=u.a},"15c8":function(t,n,a){"use strict";a.r(n);var e=a("9ca4"),u=a("0569");for(var c in u)"default"!==c&&function(t){a.d(n,t,function(){return u[t]})}(c);a("9818");var i,r=a("f0c5"),o=Object(r["a"])(u["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],i);n["default"]=o.exports},2563:function(t,n,a){},"4c2a":function(t,n,a){"use strict";(function(t){a("431f"),a("921b");e(a("66fd"));var n=e(a("15c8"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,a("6e42")["createPage"])},9818:function(t,n,a){"use strict";var e=a("2563"),u=a.n(e);u.a},"9ca4":function(t,n,a){"use strict";var e,u=function(){var t=this,n=t.$createElement;t._self._c},c=[];a.d(n,"b",function(){return u}),a.d(n,"c",function(){return c}),a.d(n,"a",function(){return e})},a94e:function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{}},methods:{query:function(){t.navigateTo({url:"/pages/My/capital/query"})},Analysis:function(){t.navigateTo({url:"/pages/My/capital/Analysis"})},Record:function(){t.navigateTo({url:"/pages/My/capital/Record"})},History:function(){t.navigateTo({url:"/pages/My/capital/History"})}}};n.default=a}).call(this,a("6e42")["default"])}},[["4c2a","common/runtime","common/vendor"]]]);
});
require('pages/My/capital/capital.js');
__wxRoute = 'pages/My/activity/activity';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/My/activity/activity.js';

define('pages/My/activity/activity.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/My/activity/activity"],{"4d4d":function(t,n,e){},"598e":function(t,n,e){"use strict";e.r(n);var a=e("f1dc"),u=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=u.a},"86e4":function(t,n,e){"use strict";(function(t){e("431f"),e("921b");a(e("66fd"));var n=a(e("be3c"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},a1bf:function(t,n,e){"use strict";var a=e("4d4d"),u=e.n(a);u.a},be3c:function(t,n,e){"use strict";e.r(n);var a=e("fba0"),u=e("598e");for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);e("a1bf");var i,c=e("f0c5"),f=Object(c["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);n["default"]=f.exports},f1dc:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{}},methods:{HolidaySale:function(){t.navigateTo({url:"/pages/My/activity/HolidaySale"})},follow:function(){t.navigateTo({url:"/pages/My/activity/follow"})},Promotion:function(){t.navigateTo({url:"/pages/My/activity/Promotion"})}}};n.default=e}).call(this,e("6e42")["default"])},fba0:function(t,n,e){"use strict";var a,u=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"b",function(){return u}),e.d(n,"c",function(){return o}),e.d(n,"a",function(){return a})}},[["86e4","common/runtime","common/vendor"]]]);
});
require('pages/My/activity/activity.js');
__wxRoute = 'pages/My/capital/Analysis';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/My/capital/Analysis.js';

define('pages/My/capital/Analysis.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/My/capital/Analysis"],{1252:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("a34a")),i=a(n("674c"));function a(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n,r,i,a,o){try{var c=t[a](o),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,i)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var a=t.apply(e,n);function c(t){o(a,r,i,c,s,"next",t)}function s(t){o(a,r,i,c,s,"throw",t)}c(void 0)})}}var s=function(){return n.e("components/u-charts/u-charts").then(n.bind(null,"91a1"))},u={data:function(){return{canvas:!0,cWidth:"",cHeight:"",arr:[],are:[],Profit:!0,te1:"te",te2:"",te3:"",te4:""}},components:{uCharts:s},onLoad:function(t){this.init()},onReady:function(){},methods:{init:function(){this.cWidth=t.upx2px(710),this.cHeight=t.upx2px(400),this.getServerData()},getServerData:function(){var t=c(r.default.mark(function t(){var e,n,a,o,c,s,u;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=i.default.getSampleData(),n={enableScroll:!1,unit:"单"},n.categories=e.LineA.categories,n.series=e.LineA.series,a={rotate:!1,enableScroll:!1,unit:"单"},a.categories=e.LineB.categories,a.series=e.LineB.series,o={enableScroll:!1,unit:"单"},o.categories=e.ColumnB.categories,o.series=e.ColumnB.series,c={enableScroll:!1,unit:""},c.categories=e.ColumnMeter.categories,c.series=e.ColumnMeter.series,s=[{title:"",btn:[],opts:o,chartType:"area",extraType:"curve",id:"c1"}],u=[{title:"",btn:[],opts:o,chartType:"column",extraType:"stack",id:"c4"}],this.are=s,this.arr=u;case 17:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),Choice:function(t){"日收益"===t._relatedInfo.anchorTargetText?(this.te1="te",this.te2="",this.te3="",this.te4="",this.Profit=!0):"月收益"===t._relatedInfo.anchorTargetText?(this.te1="",this.te2="te",this.te3="",this.te4="",this.Profit=!0):"年收益"===t._relatedInfo.anchorTargetText?(this.te1="",this.te2="",this.te3="te",this.te4="",this.Profit=!0):"累计收益"===t._relatedInfo.anchorTargetText&&(this.te1="",this.te2="",this.te3="",this.te4="te",this.Profit=!1)}}};e.default=u}).call(this,n("6e42")["default"])},2071:function(t,e,n){"use strict";n.r(e);var r=n("9b44"),i=n("a127");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("c45b");var o,c=n("f0c5"),s=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);e["default"]=s.exports},"9b44":function(t,e,n){"use strict";var r,i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return r})},a127:function(t,e,n){"use strict";n.r(e);var r=n("1252"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e["default"]=i.a},af89:function(t,e,n){"use strict";(function(t){n("431f"),n("921b");r(n("66fd"));var e=r(n("2071"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},c45b:function(t,e,n){"use strict";var r=n("c727"),i=n.n(r);i.a},c727:function(t,e,n){}},[["af89","common/runtime","common/vendor"]]]);
});
require('pages/My/capital/Analysis.js');
__wxRoute = 'pages/My/capital/Record';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/My/capital/Record.js';

define('pages/My/capital/Record.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/My/capital/Record"],{"32c2":function(n,t,u){},"4d9e":function(n,t,u){"use strict";var e,c=function(){var n=this,t=n.$createElement;n._self._c},a=[];u.d(t,"b",function(){return c}),u.d(t,"c",function(){return a}),u.d(t,"a",function(){return e})},"551a":function(n,t,u){"use strict";u.r(t);var e=u("990d"),c=u.n(e);for(var a in e)"default"!==a&&function(n){u.d(t,n,function(){return e[n]})}(a);t["default"]=c.a},"59b9":function(n,t,u){"use strict";u.r(t);var e=u("4d9e"),c=u("551a");for(var a in c)"default"!==a&&function(n){u.d(t,n,function(){return c[n]})}(a);u("df23");var r,f=u("f0c5"),o=Object(f["a"])(c["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],r);t["default"]=o.exports},"990d":function(n,t,u){},da49:function(n,t,u){"use strict";(function(n){u("431f"),u("921b");e(u("66fd"));var t=e(u("59b9"));function e(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,u("6e42")["createPage"])},df23:function(n,t,u){"use strict";var e=u("32c2"),c=u.n(e);c.a}},[["da49","common/runtime","common/vendor"]]]);
});
require('pages/My/capital/Record.js');
__wxRoute = 'pages/My/capital/income';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/My/capital/income.js';

define('pages/My/capital/income.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/My/capital/income"],{"11ee":function(n,t,c){},"66f4":function(n,t,c){"use strict";var e,u=function(){var n=this,t=n.$createElement;n._self._c},f=[];c.d(t,"b",function(){return u}),c.d(t,"c",function(){return f}),c.d(t,"a",function(){return e})},8546:function(n,t,c){},b9df:function(n,t,c){"use strict";(function(n){c("431f"),c("921b");e(c("66fd"));var t=e(c("cd4c"));function e(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,c("6e42")["createPage"])},c8fb:function(n,t,c){"use strict";c.r(t);var e=c("8546"),u=c.n(e);for(var f in e)"default"!==f&&function(n){c.d(t,n,function(){return e[n]})}(f);t["default"]=u.a},cd4c:function(n,t,c){"use strict";c.r(t);var e=c("66f4"),u=c("c8fb");for(var f in u)"default"!==f&&function(n){c.d(t,n,function(){return u[n]})}(f);c("d910");var r,a=c("f0c5"),o=Object(a["a"])(u["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],r);t["default"]=o.exports},d910:function(n,t,c){"use strict";var e=c("11ee"),u=c.n(e);u.a}},[["b9df","common/runtime","common/vendor"]]]);
});
require('pages/My/capital/income.js');
__wxRoute = 'pages/My/group/group';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/My/group/group.js';

define('pages/My/group/group.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/My/group/group"],{"3a09":function(e,t,n){"use strict";var u=n("7be4"),a=n.n(u);a.a},"4d6a":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{}},methods:{Edit:function(t){e.navigateTo({url:"/pages/My/group/See"})},Bu:function(){e.navigateTo({url:"/pages/My/group/Establish"})}}};t.default=n}).call(this,n("6e42")["default"])},7274:function(e,t,n){"use strict";var u,a=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"b",function(){return a}),n.d(t,"c",function(){return r}),n.d(t,"a",function(){return u})},"7be4":function(e,t,n){},def8:function(e,t,n){"use strict";n.r(t);var u=n("7274"),a=n("e4e1");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);n("3a09");var o,c=n("f0c5"),f=Object(c["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],o);t["default"]=f.exports},e1ea:function(e,t,n){"use strict";(function(e){n("431f"),n("921b");u(n("66fd"));var t=u(n("def8"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},e4e1:function(e,t,n){"use strict";n.r(t);var u=n("4d6a"),a=n.n(u);for(var r in u)"default"!==r&&function(e){n.d(t,e,function(){return u[e]})}(r);t["default"]=a.a}},[["e1ea","common/runtime","common/vendor"]]]);
});
require('pages/My/group/group.js');
__wxRoute = 'pages/Order/Order';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/Order/Order.js';

define('pages/Order/Order.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Order/Order"],{"0bc9":function(t,e,n){},5392:function(t,e,n){"use strict";var i,r=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",function(){return r}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return i})},8610:function(t,e,n){"use strict";n.r(e);var i=n("5392"),r=n("e5af");for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);n("c2d5");var o,l=n("f0c5"),s=Object(l["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);e["default"]=s.exports},9304:function(t,e,n){"use strict";(function(t){n("431f"),n("921b");i(n("66fd"));var e=i(n("8610"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},a368:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){return n.e("components/distribution").then(n.bind(null,"9805"))},r=function(){return n.e("components/Delivery").then(n.bind(null,"1aeb"))},u={data:function(){return{Delivery:"",distribution:"blue",whole:"",Distribution:!0,delivery:!1}},components:{distribution:i,Delivery:r},methods:{option:function(t){"待配送"===t._relatedInfo.anchorTargetText?(this.Delivery="blue",this.distribution="",this.whole="",this.Distribution=!1,this.delivery=!0):"待分配"===t._relatedInfo.anchorTargetText?(this.Delivery="",this.distribution="blue",this.whole="",this.Distribution=!0,this.delivery=!1):"全部"===t._relatedInfo.anchorTargetText&&(this.Delivery="",this.distribution="",this.whole="blue",this.Distribution=!0,this.delivery=!0)}}};e.default=u},c2d5:function(t,e,n){"use strict";var i=n("0bc9"),r=n.n(i);r.a},e5af:function(t,e,n){"use strict";n.r(e);var i=n("a368"),r=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);e["default"]=r.a}},[["9304","common/runtime","common/vendor"]]]);
});
require('pages/Order/Order.js');
__wxRoute = 'pages/My/commodity/commodity';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/My/commodity/commodity.js';

define('pages/My/commodity/commodity.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/My/commodity/commodity"],{"0fa9":function(n,t,e){"use strict";e.r(t);var o=e("23b4"),u=e.n(o);for(var r in o)"default"!==r&&function(n){e.d(t,n,function(){return o[n]})}(r);t["default"]=u.a},"23b4":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){return e.e("components/No").then(e.bind(null,"1121"))},u=function(){return e.e("components/Yes").then(e.bind(null,"f825"))},r={data:function(){return{Yes:!1}},components:{NoCommodity:o,YesCommodity:u},methods:{}};t.default=r},"4ea1":function(n,t,e){"use strict";(function(n){e("431f"),e("921b");o(e("66fd"));var t=o(e("6523"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},6523:function(n,t,e){"use strict";e.r(t);var o=e("78b0"),u=e("0fa9");for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);var c,a=e("f0c5"),f=Object(a["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);t["default"]=f.exports},"78b0":function(n,t,e){"use strict";var o,u=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"b",function(){return u}),e.d(t,"c",function(){return r}),e.d(t,"a",function(){return o})}},[["4ea1","common/runtime","common/vendor"]]]);
});
require('pages/My/commodity/commodity.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

