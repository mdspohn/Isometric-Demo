var _0xdfcf=['onClick','onMouseWheel','254WdLCAu','speed','_load','onMouseMove','1284405eWQIkS','361154qYLEPn','prototype','clear','getElementById','error','state','table','4502GpoCgF','undefined','onMouseUp','564832cxLeVQ','6rtJvnQ','map','1ijHJCU','exception','update','1ptJUgf','471253dcTRIJ','info','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','constructor','render','onKeyDown','log','2ZvfmHC','all','width','ctx','height','scaling','apply','camera','1676046tAOxQS','controllers','onMouseOut','function','clearRect','warn','1DjvAWo','canvas','console','initialize','onKeyUp','getContext','ruins','object','83541Gryhkx','onMouseDown','RegExp','onRightClick','toString','trace','bind','prepare','length'];var _0x1c6bfb=_0x151a;(function(_0x87be1a,_0x4b4076){var _0x161a6c=_0x151a;while(!![]){try{var _0x2dfd7f=-parseInt(_0x161a6c(0x131))*-parseInt(_0x161a6c(0x154))+parseInt(_0x161a6c(0x164))*parseInt(_0x161a6c(0x136))+-parseInt(_0x161a6c(0x146))+parseInt(_0x161a6c(0x14c))*parseInt(_0x161a6c(0x163))+-parseInt(_0x161a6c(0x15f))*-parseInt(_0x161a6c(0x12d))+-parseInt(_0x161a6c(0x137))*-parseInt(_0x161a6c(0x133))+-parseInt(_0x161a6c(0x13e))*parseInt(_0x161a6c(0x130));if(_0x2dfd7f===_0x4b4076)break;else _0x87be1a['push'](_0x87be1a['shift']());}catch(_0x54a75e){_0x87be1a['push'](_0x87be1a['shift']());}}}(_0xdfcf,0xe95d0));var _0x312fee=function(){var _0x246793=!![];return function(_0x4da33d,_0x3af816){var _0xb01af0=_0x246793?function(){var _0x503256=_0x151a;if(_0x3af816){var _0x95f174=_0x3af816[_0x503256(0x144)](_0x4da33d,arguments);return _0x3af816=null,_0x95f174;}}:function(){};return _0x246793=![],_0xb01af0;};}(),_0xfa3b6d=_0x312fee(this,function(){var _0x47f36e=_0x151a,_0x2c88d6=typeof window!==_0x47f36e(0x12e)?window:typeof process===_0x47f36e(0x153)&&typeof require===_0x47f36e(0x149)&&typeof global===_0x47f36e(0x153)?global:this,_0x3dbb81=function(){var _0x37d81c=_0x47f36e,_0x1bcb72=new _0x2c88d6[(_0x37d81c(0x156))](_0x37d81c(0x139));return!_0x1bcb72['test'](_0xfa3b6d);};return _0x3dbb81();});function _0x151a(_0x159a3b,_0x5e7fd2){_0x159a3b=_0x159a3b-0x12d;var _0x1703e2=_0xdfcf[_0x159a3b];return _0x1703e2;}_0xfa3b6d();var _0xd5f531=function(){var _0x1ca45d=!![];return function(_0x3a48fe,_0x477963){var _0x287043=_0x1ca45d?function(){var _0x3a2701=_0x151a;if(_0x477963){var _0x14ce6a=_0x477963[_0x3a2701(0x144)](_0x3a48fe,arguments);return _0x477963=null,_0x14ce6a;}}:function(){};return _0x1ca45d=![],_0x287043;};}(),_0x23b975=_0xd5f531(this,function(){var _0x524cd7=_0x151a,_0x471cb9=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global===_0x524cd7(0x153)?global:this,_0x59143f=_0x471cb9['console']=_0x471cb9[_0x524cd7(0x14e)]||{},_0x414ed7=[_0x524cd7(0x13d),_0x524cd7(0x14b),_0x524cd7(0x138),_0x524cd7(0x168),_0x524cd7(0x134),_0x524cd7(0x16a),_0x524cd7(0x159)];for(var _0xeeebf=0x0;_0xeeebf<_0x414ed7[_0x524cd7(0x15c)];_0xeeebf++){var _0x30c7b5=_0xd5f531[_0x524cd7(0x13a)][_0x524cd7(0x165)]['bind'](_0xd5f531),_0x5ada32=_0x414ed7[_0xeeebf],_0x4bab10=_0x59143f[_0x5ada32]||_0x30c7b5;_0x30c7b5['__proto__']=_0xd5f531['bind'](_0xd5f531),_0x30c7b5[_0x524cd7(0x158)]=_0x4bab10['toString'][_0x524cd7(0x15a)](_0x4bab10),_0x59143f[_0x5ada32]=_0x30c7b5;}});_0x23b975();class GameManager{constructor(){var _0x5a7264=_0x151a;this[_0x5a7264(0x14d)]=document[_0x5a7264(0x167)]('canvas'),this[_0x5a7264(0x141)]=this[_0x5a7264(0x14d)][_0x5a7264(0x151)]('2d'),this[_0x5a7264(0x160)]=0x1,this['scaling']=0x4,this[_0x5a7264(0x145)]=new Camera(this[_0x5a7264(0x14d)],this[_0x5a7264(0x141)],this[_0x5a7264(0x143)]),this[_0x5a7264(0x147)]=new Array(0x4),this['controllers'][0x1]=new CombatController(),this[_0x5a7264(0x169)]=null;}async['load'](){var _0x39ac5f=_0x151a;await Promise[_0x39ac5f(0x13f)]([...this[_0x39ac5f(0x147)][_0x39ac5f(0x132)](_0x308c7a=>_0x308c7a[_0x39ac5f(0x161)]()),Area['_load'](),Scenario[_0x39ac5f(0x161)]()]),await this[_0x39ac5f(0x15b)](_0x39ac5f(0x152),STATE_COMBAT),await this[_0x39ac5f(0x14f)](STATE_COMBAT);}async[_0x1c6bfb(0x15b)](_0x55b66b,_0xb31782,_0x259ec9=![]){var _0x59c49d=_0x1c6bfb;_0x259ec9&&await Transitions['curtains'](),await this[_0x59c49d(0x147)][_0xb31782][_0x59c49d(0x15b)](_0x55b66b);}async[_0x1c6bfb(0x14f)](_0xee3c27){var _0x5c9971=_0x1c6bfb;this[_0x5c9971(0x169)]=_0xee3c27,this['controllers'][this[_0x5c9971(0x169)]][_0x5c9971(0x14f)](),await Transitions[_0x5c9971(0x166)]();}['update'](_0x2e7eec){var _0x45a913=_0x1c6bfb;Input['update'](_0x2e7eec),Tools[_0x45a913(0x135)](_0x2e7eec);}['render'](_0x3d26d6){var _0x4bddb9=_0x1c6bfb;Tools['render'](_0x3d26d6),this[_0x4bddb9(0x145)][_0x4bddb9(0x13b)](_0x3d26d6),this['ctx'][_0x4bddb9(0x14a)](0x0,0x0,this[_0x4bddb9(0x14d)][_0x4bddb9(0x140)],this[_0x4bddb9(0x14d)][_0x4bddb9(0x142)]),this[_0x4bddb9(0x147)][this[_0x4bddb9(0x169)]]['render'](_0x3d26d6),Transitions[_0x4bddb9(0x13b)](_0x3d26d6);}[_0x1c6bfb(0x162)](_0x4a4a93){var _0x20a0c4=_0x1c6bfb;if(this[_0x20a0c4(0x169)]==null)return;this[_0x20a0c4(0x147)][this[_0x20a0c4(0x169)]][_0x20a0c4(0x162)](_0x4a4a93);}[_0x1c6bfb(0x148)](_0x56d18d){var _0xc8e878=_0x1c6bfb;if(this[_0xc8e878(0x169)]==null)return;this[_0xc8e878(0x147)][this[_0xc8e878(0x169)]][_0xc8e878(0x148)](_0x56d18d);}[_0x1c6bfb(0x15e)](_0x53d871){var _0x419fb6=_0x1c6bfb;if(this[_0x419fb6(0x169)]==null)return;this[_0x419fb6(0x147)][this[_0x419fb6(0x169)]]['onMouseWheel'](_0x53d871);}[_0x1c6bfb(0x15d)](_0x263ab8){var _0x4cc721=_0x1c6bfb;if(this['state']==null)return;this['controllers'][this[_0x4cc721(0x169)]][_0x4cc721(0x15d)](_0x263ab8);}[_0x1c6bfb(0x155)](_0x1f27aa){var _0x859e06=_0x1c6bfb;if(this['state']==null)return;this[_0x859e06(0x147)][this[_0x859e06(0x169)]][_0x859e06(0x155)](_0x1f27aa);}[_0x1c6bfb(0x12f)](_0x1f6e6a){var _0x18d0c2=_0x1c6bfb;if(this[_0x18d0c2(0x169)]==null)return;this[_0x18d0c2(0x147)][this[_0x18d0c2(0x169)]]['onMouseUp'](_0x1f6e6a);}[_0x1c6bfb(0x157)](_0x39886c){var _0x5d23b9=_0x1c6bfb;if(this[_0x5d23b9(0x169)]==null)return;this[_0x5d23b9(0x147)][this['state']][_0x5d23b9(0x157)](_0x39886c);}[_0x1c6bfb(0x13c)](_0x3a0d65){var _0x42f15d=_0x1c6bfb;if(this[_0x42f15d(0x169)]==null)return;this[_0x42f15d(0x147)][this[_0x42f15d(0x169)]][_0x42f15d(0x13c)](_0x3a0d65);}[_0x1c6bfb(0x150)](_0x390b2c){var _0x1aea8f=_0x1c6bfb;if(this[_0x1aea8f(0x169)]==null)return;this[_0x1aea8f(0x147)][this[_0x1aea8f(0x169)]][_0x1aea8f(0x150)](_0x390b2c);}}