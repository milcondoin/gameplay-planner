(()=>{var A={};A.id=7149,A.ids=[7149],A.modules={72934:A=>{"use strict";A.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:A=>{"use strict";A.exports=require("next/dist/client/components/request-async-storage.external")},54580:A=>{"use strict";A.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:A=>{"use strict";A.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:A=>{"use strict";A.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:A=>{"use strict";A.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:A=>{"use strict";A.exports=require("path")},57310:A=>{"use strict";A.exports=require("url")},61259:(A,e,t)=>{"use strict";t.r(e),t.d(e,{GlobalError:()=>r.a,__next_app__:()=>c,originalPathname:()=>u,pages:()=>g,routeModule:()=>d,tree:()=>s});var i=t(67096),a=t(16132),l=t(37284),r=t.n(l),o=t(32564),n={};for(let A in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(A)&&(n[A]=()=>o[A]);t.d(e,n);let s=["",{children:["residue",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,70583)),"C:\\Users\\denys\\Documents\\GitHub\\gameplay-planner\\src\\app\\residue\\page.js"]}]},{metadata:{icon:[async A=>(await Promise.resolve().then(t.bind(t,73881))).default(A)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,31941)),"C:\\Users\\denys\\Documents\\GitHub\\gameplay-planner\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async A=>(await Promise.resolve().then(t.bind(t,73881))).default(A)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],g=["C:\\Users\\denys\\Documents\\GitHub\\gameplay-planner\\src\\app\\residue\\page.js"],u="/residue/page",c={require:t,loadChunk:()=>Promise.resolve()},d=new i.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/residue/page",pathname:"/residue",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:s}})},28098:(A,e,t)=>{Promise.resolve().then(t.bind(t,98925))},98925:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>Residue});var i=t(30784);t(16467);var a=t(9885),l=t(3779);t(25628),t(11263);var r=t(79366),o=t(5492);let n={attack:{img:{src:"/_next/static/media/ShopUpgrade1AtkBonusSelected.e27775d7.png",height:211,width:211,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+ATcdAPvJ4wAEcGtnAD5AQgD7+/sACAcHANvb2gD18u78AYSAfP8QFRoADQwMAOHi4QAMCgsAGx8fALC0tgA6MCoAAbu4tv8JDQ8AUEJJAOz58gA3Sk4AV1NTADgqJgDq5uQAAbGvrP8hIycAvMO+ANPU2wBMTU0AHhYTAOXk5ADIxMAAAXl1cfz8Agj/JCEXAPwGCQAvJSoA6erpAFNTVAAfAAABAR8AAP/hAAAAhoeGAB0dHAAMCw0ABwcHAJmamwDezK8AAU9AL4Wxy/LEAPXfC2tscBUyMzAB//7/62SHlfRIEeU8AWVNJ3ALBgjAAwgPC+zhwv3bxAAAAgAAAy9NH/b7AQ0/HnVeUdNdga0AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},unlock:0,key:"CowShopAttackBonus",bonus:A=>{let e=r.Z.pow(1.01,A),t=r.Z.subtractDecimal(e,1),i=r.Z.multiplyDecimal(t,100);return i},cost:A=>{let e=1.05+2e-4*A,t=r.Z.pow(e,A),i=r.Z.multiplyDecimal(10,t).floor();return i},weight:A=>4},hp:{img:{src:"/_next/static/media/ShopUpgrade2HPBonusSelected.8cbea039.png",height:211,width:211,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+ATcbAPvJ5QAEXGpkAEg9QAD8/fwAAwUGAOnf3wD28u78AYaBfv8IERUAPQIFAO39/AD7BAQAKB8gAHuqqAA9MiwAAbi6uP8XBQcAGFxsAPsoIQD2vb4AH21tANdQSADf8u0AAbOysP8aFhkAADg3AAsAAAD/AAAABzM8ANNzbADG0csAAXt0cfzzBwr/TxscAB1qaQADAAAA1HZ3AE+KiQAkAAABAR0AAP/jAAAAi5SUAB7z9AALCAcAAS0tAJuSkwDezrEAAU9ALoWx2f7EAOfUC2F6fBU4MC8BBvDx62GJlvRIEug8AWVNJ3ALBQXABQwXC/DNvf3b1QAA+gAAAzFOIPX7AAxAx/lcXRxnqNQAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},unlock:0,key:"CowShopHPBonus",bonus:A=>{let e=r.Z.pow(1.01,A),t=r.Z.subtractDecimal(e,1),i=r.Z.multiplyDecimal(t,100);return i},cost:A=>{let e=1.05+2e-4*A,t=r.Z.pow(e,A),i=r.Z.multiplyDecimal(10,t).floor();return i},weight:A=>1},potato:{img:{src:"/_next/static/media/ShopUpgrade3PotatoBonusSelected.b3980036.png",height:211,width:211,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+ATYbAPvK5QAEa2loADg4NwD8+/sACw0OAODe3AD49PD8AYWAfP8MFBsAFwwEACH91AD9+/UA+B9OAKOwuQAxJyAAAb25tf8ACQ8A2KdlAEEvGAD49tsA8BJnAAorSwDo4doAAbOvrP8cIykA6NTDABnuqAD9/fsA4AZHAAMdNADIv7gAAXt0cPz3BA3/STQjAA/higDj7ggA6hVaAGlwdAAZAAABAR0AAP/jAAAAioiHAAr77gAMExoAGCIqAJeXlwDezLAAAU9AL4Wx0vfEAO7aC256gRU1LSoB+vbz62OGlfRIEuY8AWVNJ3ALBgbABAgRC+vTwv3U0gAABwAAAzFOIPb7AAw/cBhlQZgYoIsAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},unlock:0,key:"CowShopPotatoBonus",bonus:A=>{let e=r.Z.pow(1.01,A),t=r.Z.subtractDecimal(e,1),i=r.Z.multiplyDecimal(t,100);return i},cost:A=>{let e=1.0525+2e-4*A,t=r.Z.pow(e,A),i=r.Z.multiplyDecimal(20,t).floor();return i},weight:A=>5},class:{img:{src:"/_next/static/media/ShopUpgrade4ExpBonusSelected.3790534d.png",height:211,width:211,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABAklEQVR42mMwl2H4zcDA8L8gO+3/utUr/q9cuvj/ymWL/3e1Nf9vqi75zdDSWPt/xsxZ/xctXvy/oaHx/4SJk/6fPHXqf3Zu/v9J/T3/GXbt2Pp/y5at/xkYGOC4tbnx/6bNm4EmrvzPsH7NKqCuiXBJEUFuMG3n4PS/MCfjP0NVWfGf+vqG352dnb9dXFx+e7i7/85JT/zNJyr5W4mR4Q+DDFTnxAkT/i9ftvz/+vXr/+/YseO/j6/ff11Jhv8M/g56rQxiWp4MDAwhGVm5mfMWLMyaPXtOKIOCgaeHqVQrQ6qvekFBkI5BaayTdYINg4UZA4OFNQODdbafomGan04BAHtMej2gWKtLAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},unlock:0,key:"CowShopClassExpBonus",bonus:A=>{let e=r.Z.pow(1.01,A),t=r.Z.subtractDecimal(e,1),i=r.Z.multiplyDecimal(t,100);return i},cost:A=>{let e=1.055+2e-4*A,t=r.Z.pow(e,A),i=r.Z.multiplyDecimal(30,t).floor();return i},weight:A=>5},skull:{img:{src:"/_next/static/media/ShopUpgrade5PerkBonusSelected.9de8c7ac.png",height:211,width:211,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+ATYaAPvK5gAEcG9rADg3OgD6+voADA4MAN7b2wD18ez8AYaCf/8JDxIA+9vVABEnIwAFCAcAAOzxALfQ2AA8OTUAAby7uf8F//4AuUZJAF3EjgAJDAoAmTBoADWjoAAHEhMAAba0sv8MDRAAmnZdAHqSeAAJCggAf2Z8ADdcegDr6OQAAXp2cPz4/gn/QD0oABkR7AACAQIA0dn1AGJkfAAgAAABAR4AAP/iAAAAioqLAB4bDAAJCQkABAYUAJqcnQDfy68AAU9ALoWx0vnEAO7ZC2BmdBU5NjEBBQP762KBkPRIFeo8AWVNJ3ALBQbABAkSC+/jwf3ZwgAA+wAAAzVOIfb6AAs/yi5cgmP7g00AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},unlock:0,key:"CowShopPerkBonus",bonus:A=>{let e=r.Z.pow(1.01,A),t=r.Z.subtractDecimal(e,1),i=r.Z.multiplyDecimal(t,100);return i},cost:A=>{let e=1.06+2e-4*A,t=r.Z.pow(e,A),i=r.Z.multiplyDecimal(75,t).floor();return i},weight:A=>5},confection:{img:{src:"/_next/static/media/ShopUpgrade6ConfectionExpBonusSelected.7650938d.png",height:211,width:211,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABC0lEQVR42gVAv0oCcQD+oK0HiMhoCKFFrIZMsCFoycEa1KGxIa0u60xDzBuO8hAKgs7+QUQd5nFidxdRXUFEQU4HDeUT9Bo/4QtEhiEAUJYytC2TrYbBttXkYU3jXqUgUFUVnp1fUNdPuFra5LKW46P3zGxW4vHRAfH26vGr0+FAHyhlwHod/Pzw6PvfdNsW8eDa/Pnt0ry94rUG/r0H2fVfeHf/xFIhR5SL+d5uRRGm2RRzEYitGsTlzakAIAJAD0MAAVBRFBbLO6zqGh3XYTKZZmgQxOLsuIb+YBxASlX31+yWs24YjTRGwvH5qYCGlcSYnE+GJ7aXZmKpIKIBIDoNxDYWRicziZD8D/bKhMNeWoMYAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},unlock:0,key:"CowShopConfectionBonus",bonus:A=>{let e=r.Z.pow(1.01,A),t=r.Z.subtractDecimal(e,1),i=r.Z.multiplyDecimal(t,100);return i},cost:A=>{let e=1.055+2e-4*A,t=r.Z.pow(e,A),i=r.Z.multiplyDecimal(30,t).floor();return i},weight:A=>.5},reinc:{img:{src:"/_next/static/media/ShopUpgrade7ReincExpBonusSelected.4decf056.png",height:211,width:211,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+ATYXAPvK6QAEbWFbACchIQD++PkAFystAOLm5wD37+n8AYWCfv8KDRIA5KebADwJ7AAD9ukA9C5eALr0+wAzOjUAAbe7uf8U8e8A2FRYAMciEgAWDAUAKtLpAA6PjAD4JicAAbK3tv8R4d0A/ohtAP4+HgAI9/sA/+bnAOc5bADGCA8AAXt6d/zq3+P/VvqmABkfAAD9+AAA7+8AAIOnAAC9AAABASAAAP/gAAUAdGJUADAH3AD/Dx8ADSU/AJq0wQDlyKwAAU9AL4WxwO3EAADkC0VnchVJNjIBDgwL63h6gfQzEuo8AWZNJ3AJBQXBAwD/Cv3x1f3evQAA7gAAAzBOIfb7AAs/JRZnUWf0yw0AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},unlock:0,key:"CowShopReincarnationBonus",bonus:A=>{let e=r.Z.pow(1.01,A),t=r.Z.subtractDecimal(e,1),i=r.Z.multiplyDecimal(t,100);return i},cost:A=>{let e=1.065+2e-4*A,t=r.Z.pow(e,A),i=r.Z.multiplyDecimal(100,t).floor();return i},weight:A=>100},ir:{img:{src:"/_next/static/media/ShopUpgrade8ItemRatingBonusSelected.26582a70.png",height:211,width:211,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABD0lEQVR4nAWAO0gCYQCAv78kRbNoMIdOQRSUKIoWRewxRSjVWnPUEpJLS0QJXtDm0N5am+iQDVKURYRDY6QVpDRZkpHPu/NC+B0ojxUMO9FtAsEAna6K1TzIW+mFduNHFfLhvj5ilzBrdTrlMmZdxRYMkc494PO4ELnLrG6yWkiG51icBKkHypqMNBuh8lpEZFIp3e2R+Mye8124xdT9wB6J8TU2wX3uCrG3G1PbhiE9LFnR83F6vw1qM1HW5ROcIIQD9ApwLCdwCg2DpmB0+zjNXPB+fYZYXZg6Sj+17qgXLVsHCZt/3CtoNasb8eTf0mg1JDaXvTHLgPHGYBw21wp57bkEfdA/veJqKljm/wHjVWY+2sQPKAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},unlock:0,key:"CowShopItemRatingBonus",bonus:A=>{let e=r.Z.pow(1.01,A),t=r.Z.subtractDecimal(e,1),i=r.Z.multiplyDecimal(t,100);return i},cost:A=>{let e=1.07+2e-4*A,t=r.Z.pow(e,A),i=r.Z.multiplyDecimal(150,t).floor();return i},weight:A=>A>=15?50:30},calcium:{img:{src:"/_next/static/media/ShopUpgrade9CalciumBonusSelected.ec5b3744.png",height:211,width:211,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABEElEQVR4nA3LPUsCYQDA8f9zdoPdNcRxLpYJDWGDB5m1BDVlS/UJcsohCJGGhoagwbbchCToGwTWFESB4RBBY0RIwxlpUViKpnAvT32An5gL49y/MZTd2iSRnMdzXTR9hLpt0+9+uyJ/sC/1URPDMJiOxVAUhV6vS+nklKQVQ1xfXUoUFd/3seIWnU4Hz/dotVp8NF4RF+UzGYlO8tNuMx4eAwm1lxr9wYC7agWxt7vjDjxFrqSWCQQCSClpNBukN9JMgBCRf1MHCkcFzJBJMBhE1zSKxyXshzJifSmeP3/2qjQfte1szpxNzAjHcT4zh8VuynhfEJnVqZymqhVVCw1/2Tfe0y0MQcBai/466It/FotoUl05zJIAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},unlock:6,key:"CowShopCalciumBonus",bonus:A=>{let e=r.Z.pow(1.01,A),t=r.Z.subtractDecimal(e,1),i=r.Z.multiplyDecimal(t,100);return i},cost:A=>{let e=1.1+2e-4*A,t=r.Z.pow(e,A),i=r.Z.multiplyDecimal(5e3,t).floor();return i},weight:A=>.5},ferment:{img:{src:"/_next/static/media/ShopUpgrade10FermentingBonusSelected.8063aa8b.png",height:211,width:211,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+ATYcAPvK5AAEcGtnAD5AQgD6+voAAgICAODg3wD48/D8AYSAff8PFBgADw4NAOHh4AAQEBAAMzIzAJqdoAAyLScAAbu4tv8KDQ8AOzs8AAAA/wAADTgAwreQAAcEAADm5OIAAbSwrf8VICQA8frwABEI+gAGBwcAAQcVAN/X4gDHurQAAXRta/wXKSf/YGRPAAUC/QD9/PsA+/8EAIGBlQCXiI4BARwAAP/kAAAAjJWVACEjIAAICAcAAf0BAJiUlgDgyq0AAVBBL4Wwv+zEAADlC11UXhU6PjkBAwMB62aFk/NIHPA9AWVNJ3AMBgjBBQ8YCvDquf3ctAAA/AAAAy5PJfb6/gY/w8pdKdVbdzsAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},unlock:7,key:"CowShopFermentingExp",bonus:A=>{let e=r.Z.pow(1.01,A),t=r.Z.subtractDecimal(e,1),i=r.Z.multiplyDecimal(t,100);return i},cost:A=>{let e=1.125+2e-4*A,t=r.Z.pow(e,A),i=r.Z.multiplyDecimal(1e4,t).floor();return i},weight:A=>.5},rp:{img:{src:"/_next/static/media/ShopUpgrade11R\xe9incPointBonusSelected.8911fdab.png",height:211,width:211,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABEklEQVR4nAWAzytDcQDAP9+Hl97bsMNY2lJzWJofpcWYEicp8Q/g5LbDmpKDRUwu7q6ym1JLTRwWaZTDhKO1OdDEHDaWPXtv70mMutHv3miOhpcZCYbQDQPV1kE+V6BWLRtiZytmOTq7ME0nz98BRF1nuu+Fs+tT+nu9iPRFypIUJ9n4A+m2EHZNY1bK4I4EqFWKiPNU0pJaXZTDh7iCEpKh81WQ+Vga4/31ERFbXzWKP4blrzgYl24xGxr3up/w8QE9IEQ3WEVgO76HqkkodgWXz8NRIkHu5gSxMDW0m7ysZiCvRjc3nMMDg8Kq/ZUW1/arM57ShFiZ80VssnwlWtrVz2ym8ZQDGZqC897fuqlM/gMLGmhl2wPZVwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},unlock:12,key:"CowShopReincPtsBonus",bonus:A=>{let e=r.Z.pow(1.01,A),t=r.Z.subtractDecimal(e,1),i=r.Z.multiplyDecimal(t,100);return i},cost:A=>{let e=1.25+2e-4*A,t=r.Z.pow(e,A),i=r.Z.multiplyDecimal(1e9,t).floor();return i},weight:A=>2},milk:{img:{src:"/_next/static/media/ShopUpgrade12MilkSelected.9d14e70a.png",height:211,width:211,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+ATYbAPvK5QAEcGplADA0NwD5+fkAEhEPAODf4AD28+/8AYWBff8NEhgAEQ8NAC42OQD3+vwA+/DrAJ2gowAzLScAAb26uP8BBQYAuLi4AHN4fADw9PcA9e3nAPr4+ADo5eIAAbSxr/8ZHB4A9vf3ACAmKQDz9voA+PDqAOHf3gDJxcIAAXt3dPzw9Pj/YmNiAB4kKADy9vgA1s3IAE1LSgAiAwABASECAP/f/gAAmJiYADI3OQD/AQMA8uzoAJCQkADl07cAAU9ALoWx3wHEAOHRC1NTVBVDQkEBBQcI62aKl/RGD+U8AWVNJ3ALBAPABw8cC/Pt1P3Zs+YA+gAAAy5NHvb7AQ4/NK9xXbX6Nk4AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},unlock:1,key:"CowShopMilkBonus",bonus:A=>{let e=r.Z.pow(1.01,A),t=r.Z.subtractDecimal(e,1),i=r.Z.multiplyDecimal(t,100);return i},cost:A=>{let e=1.075+2e-4*A,t=r.Z.pow(e,A),i=r.Z.multiplyDecimal(200,t).floor();return i},weight:A=>8},worm_qty:{img:{src:"/_next/static/media/ShopUpgrade13WormQtySelected.60183f26.png",height:211,width:211,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+ATYdAPvK4wAEcGtnADc8QAD6+/sADAkGAN3c3AD59O/8AYWBff8NExgAEA4NABT76AADAPwA/xgwAKyztAAuJiAAAb26t/8CCA0Av5JiAEUzDgD48cwAAzCYAAslNwDm3tgAAbWyr/8UGB4A6s20ABf6xQDz8/YA7Q1AAP4ZMQDTy8QAAXp1cPz0AQv/TCgLAAbklADk9CwA7BNCAHB3eAAdAAABARwAAP/kAAAAgnt1AA344wATKDwAFyAoAJWTkwDgzrEAAU9AL4WxyvLEAPbfC2d0fhU6MSoB+vXz62WKmPRHEeY8AWVNJ3ALBgfABAYKC+7byP3SzAAABwAAAzBOH/b7AA0/nXZjStXUFuEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},unlock:2,key:"CowShopWormQtyBonus",bonus:A=>{let e=r.Z.pow(1.01,A),t=r.Z.subtractDecimal(e,1),i=r.Z.multiplyDecimal(t,100);return i},cost:A=>{let e=1.08+2e-4*A,t=r.Z.pow(e,A),i=r.Z.multiplyDecimal(300,t).floor();return i},weight:A=>.5},brew:{img:{src:"/_next/static/media/ShopUpgrade14BrewerySelected.1370fc71.png",height:211,width:211,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABC0lEQVR42hXLP0sCYQDH8d9LaAiXWqIhSDKFiCsbXZ4igrAIjCgulWzoBq2ujKxOogI1raUazrv+GyImJpRt3duIehuP8OsaPssXvhjthQRAbT3OauWJj3c2X54feHps8HAnKWFk9li6uKRZtpg5OGIhX+Bnu80VNcZi7ox4bzXpOA49Hg8BcMS1vTpP58thrVoh3hp1frhHROmisTjOqBimPtVNu2wyrW8R+2m9k0yl5OwgZDQAGRqA3E0sSSGEBNDBUA94a1u8t02W8idsNRv8/fnm9c0VARBC6c8CEMuqGs6dF9dq9deEZVlz/21yrC+L+IxX24xM+Bd8CIYABa4AENwI+/yxaa/2B1OngfzGPBMWAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},unlock:3,key:"CowShopBrewExp",bonus:A=>{let e=r.Z.pow(1.01,A),t=r.Z.subtractDecimal(e,1),i=r.Z.multiplyDecimal(t,100);return i},cost:A=>{let e=1.085+2e-4*A,t=r.Z.pow(e,A),i=r.Z.multiplyDecimal(500,t).floor();return i},weight:A=>.5},poop:{img:{src:"/_next/static/media/ShopUpgrade15PoopSelected.4aef5827.png",height:211,width:211,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABCklEQVR42g3DTUvCAAAG4PfUxVN00CJEOuShIX1QSF7qEkmIIXoykqAPKosVMvrA0KkUEQQzAkMIK8M12yAyCDpuB9fVfs2Etz3wYG4UDgCK+zvUNZVq85laq8nryzLl85yDciHP6t09G40nFooyFaVK07SY2dikcntD/Hx/0bQsegaHCIBL0wK7dpe2/UujrRIfxjt7vT8+1GpcBLgSGGDr9YWfnQ6lo0PiTDru5yTJOVhPOzOAE3TPu+H2An34AcKdWUvz4vSEVyWZj/U6E8kUBR+I+EKoguGJKDzeZL5Y2tV0Y++trafgD0WXZ0cq2IoFRTEhTGZXhUgygLAPCI8DkWx8bGo7Joj/rO596yoKtg0AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},unlock:4,key:"CowShopPoopBonus",bonus:A=>{let e=r.Z.pow(1.01,A),t=r.Z.subtractDecimal(e,1),i=r.Z.multiplyDecimal(t,100);return i},cost:A=>{let e=1.09+2e-4*A,t=r.Z.pow(e,A),i=r.Z.multiplyDecimal(600,t).floor();return i},weight:A=>.5},pet_dmg:{img:{src:"/_next/static/media/ShopUpgrade16PetDamageSelected.b88c2486.png",height:211,width:211,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+ATgdAPvI4wAEa2ZgAD9AQgD7+/sAAQIDAObl5AD28+/8AYJ+ev8QFRoA/gICAPv9/gD+/v8AKygnALKwrwAqJSEAAbm2s/8UFhoAmp6cAAUSFQAFAgIATUI/AA4MDQDm4+EAAbKvrP8gIycA5OPjAKeVhgAHCAoAWmt3AAEDAwC4sq8AAXhzb/z+BQr/KCIgAJNmZwD1AAAAbI6MAK62ugDAvLoBAR0AAP/jAAAAiYmJAN7Y1gASExIAOj5BAJaYmQDm07UAAU9ALoWxzPbEAPTcC3h6fBUvLy4B+vn662qGkfQ8DeQ8AWVNJ3AMBgbAAgcQC+bTw/3O0wAADwAAAzZPIvX6/gpA40RjLnM+Yn8AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},unlock:14,key:"CowShopPetDamageBonus",bonus:A=>{let e=r.Z.pow(1.01,A),t=r.Z.subtractDecimal(e,1),i=r.Z.multiplyDecimal(t,100);return i},cost:A=>{let e=1.3+2e-4*A,t=r.Z.pow(e,A),i=r.Z.multiplyDecimal(1e11,t).floor();return i},weight:A=>100},pet_exp:{img:{src:"/_next/static/media/ShopUpgrade17PetExpSelected.d5641f22.png",height:211,width:211,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABCklEQVR42g3FXStDYQAH8D9u3biRtF1QKE4LkWU3cyOLTQk3kivKaI21aYQzOrRpnbYhNi+JNLaWl7bznI9xznybZ/V3Ln79MOWCBMBYJMxapczP9zfnD6a1c6YOYxKaeszC9S3viyWqqTOmM1cUpsnwboSFXJYQ9V82m39UT1UCoMtRKt7RsmzWf76I71qVlm3TaDS45le4MTtOYTRoCJOJvQiRjO+3EgdJ+fryLEcAqTjyela2d/XITqAFN0A4dF1n5vKCN/kchRCcXwjS424jFv0eDd3DAQDLRyfqdrlSDT88Pq10DEwE5iZ7NWwGh6LRJWU0vj7jWx2Etx/wTgO+nVDf2FZIif4DNdODPJ0zthAAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},unlock:5,key:"CowShopPetLevelExp",bonus:A=>{let e=r.Z.pow(1.01,A),t=r.Z.subtractDecimal(e,1),i=r.Z.multiplyDecimal(t,100);return i},cost:A=>{let e=1.095+2e-4*A,t=r.Z.pow(e,A),i=r.Z.multiplyDecimal(2500,t).floor();return i},weight:A=>A>=15?10:50},pet_rank:{img:{src:"/_next/static/media/ShopUpgrade18PetRankSelected.9b592b76.png",height:211,width:211,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+ATgeAPvI4gAEcWtoADs/QAD8/PwABQQEAN3d3AD59PD8AYSAfP8PFBoADg4OAOvk4AADAwIALTM2AKusrQAqJiMAAby5tv8IDA8Ag047AP/tAAAAAAAAHnifAFZGKgD58eEAAbazr/8PFBwAeIrFAPvYsgAEBssAF0OQAEMsFADp3L8AAXtzY/zvBUH/JEJRAK+stAD9rFcAGXvdAK2vnwATxIQBARgAAP/oADAAVnJ3ADQg/gAeFPwA8wImAKakmQDy0qAAAVBBMoWwv87EAAAAC3p4bBUoLTwBCP/l62p6c/QzFyA8AWVNJnAMBxDA/QYaC+nVsP3Z0QAA9QAAA0VOK/b8AAA/X55gYg+4pk4AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},unlock:9,key:"CowShopPetRankExp",bonus:A=>{let e=r.Z.pow(1.01,A),t=r.Z.subtractDecimal(e,1),i=r.Z.multiplyDecimal(t,100);return i},cost:A=>{let e=1.175+2e-4*A,t=r.Z.pow(e,A),i=r.Z.multiplyDecimal(1e6,t).floor();return i},weight:A=>A>=15?10:20},card_pow:{img:{src:"/_next/static/media/ShopUpgrade19CardPowerSelected.f3667ec3.png",height:211,width:211,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+ATccAPvJ5AAEa2lmADE2QQAIBPwADAkEANra3AD49O/8AYWBfP8KEhoAGxAKAD0j4gDU4PsA7wk9AL+8sgApIx4AAby6t/8DBg0AJfo8AA4bAACAiwAAY1ZdAPUTbQDl5OAAAbOysv8bFRIAMRU8AMPiJgDi4AkAWz7RAKzIowDN09IAAXx3cvzs9AH/dU7qABMYowAPFQAA18xFACpOuwAkAgABAR8AAP/hAAAAiIaJADwl9QAEBgwA6wEpAJufoQDhyqwAAU9AL4WxzvLEAPLfCz1hghVOOiwBFAf062R+i/REFe48AWVNJ3ALBQbABQkPC/noxP3fvQAA7gAAAzBOIvb7AAo/SAZeWiHnW1EAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},unlock:8,key:"CowShopCardPowerBonus",bonus:A=>{let e=r.Z.pow(1.01,A),t=r.Z.subtractDecimal(e,1),i=r.Z.multiplyDecimal(t,100);return i},cost:A=>{let e=1.15+2e-4*A,t=r.Z.pow(e,A),i=r.Z.multiplyDecimal(1e5,t).floor();return i},weight:A=>A>=15?100:5},card_exp:{img:{src:"/_next/static/media/ShopUpgrade20CardExpSelected.41935c49.png",height:211,width:211,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+ATcbAPvJ5QAEd3JuAC0uLgD6+foAExUWANnZ2AD49PD8AYWBff8MEhcA5uTkAMbT2wD69/MAX1VQAMvO0QAxKyUAAby4tv8HCw4APT08AIZeHgD+++YAKlWoAB0eIQDj4NwAAbOvrP8eJCkA2dDEAATZlgAC//4AETt+APD+DADGvbYAAXl0cPz7Awr/QjgvABDdjwAJBf0A2wZSAFZpeQAfAAABAR4AAP/iAAAAiIqMABcA6gARDQwABB40AJubmwDey68AAU9ALoWx0vrEAO7YC2NyfBUzMC4BCP3262KCkPRIFOo8AWVNJ3ALBgbABAkTC/DbwP3fyQAA9gAAAzJOIfb7AAs/VSZlRWT15P0AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},unlock:10,key:"CowShopCardExp",bonus:A=>{let e=r.Z.pow(1.01,A),t=r.Z.subtractDecimal(e,1),i=r.Z.multiplyDecimal(t,100);return i},cost:A=>{let e=1.2+2e-4*A,t=r.Z.pow(e,A),i=r.Z.multiplyDecimal(1e7,t).floor();return i},weight:A=>A>=15?10:5},locked:{img:{src:"/_next/static/media/locked.ba3e44ce.png",height:211,width:211,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA9klEQVR42hXJzysEYRgH8O/7zDu7s7PaGabMrNjSFvlxUnuXOClbwtW/6IabOymKpLaIkEI7zcxre9/3eY3T5/ARx4M5ndtA+sSw+hfMgCMfQgBZm438nDTkedlEVOdPKQAS6PhALhoYwkjpEaHnMXxmdFoEB6DV9DHlBDyPQGw1nl4/4ATB1vsvSYm353e4+iiIZt3RcBdaG66cM4rZKKX44HAPQZQ6Od9fFmGasVpfodHlNYEdFgcb6C90WYdEMp5JHr/LYilJ05Otze0zsixu4+ZOURX72XQykvbl4SJsx+Nufn9qyruragIkatVyutZzX+ObP/rta4MaV0BQAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}}};var s=t(65438);let g={src:"/_next/static/media/info_white_thick.d541c30c.svg",height:123,width:123,blurWidth:0,blurHeight:0};var u=t(27428),c=t(35877),d=t.n(c),p=t(52451),D=t.n(p);l.ZP.initialize([{trackingId:"G-GGLPK02VH8"}]);let ResidueCard=({data:A,params:e})=>{let[t,l]=(0,a.useState)(!1),r=A[e.key],u=!t&&A.AscensionCount<e.unlock;return(0,i.jsxs)("div",{className:"importantText residueCard",onMouseEnter:()=>{l(!0)},onMouseLeave:()=>{l(!1)},children:[i.jsx("div",{className:"residueCardHeader",children:i.jsx("div",{children:u?"?????":`${e.key_inner}: ${r}`})}),(0,i.jsxs)("div",{className:"residueCardBody",children:[i.jsx("div",{style:{position:"absolute",right:"8px",top:"8px",zIndex:"2"},children:i.jsx(s.Z,{tooltip:(0,i.jsxs)("div",{children:[i.jsx("div",{children:`Cost: ${e.cost(r).toExponential(2)}`}),i.jsx("div",{children:`Bonus: ${o.Z.numberWithCommas(e.bonus(r).ceil().toString())}%`})]}),children:i.jsx("div",{style:{position:"relative",width:"30px",height:"30px"},children:i.jsx(D(),{src:g,fill:!0,unoptimized:!0,alt:"letter i in a circle"})})})}),!u&&(0,i.jsxs)("div",{style:{position:"absolute",left:"8px",bottom:"8px",zIndex:"2",display:"flex",alignItems:"center"},children:[i.jsx("div",{children:"Weight:"}),i.jsx("div",{style:{marginLeft:"6px"},children:i.jsx("input",{"aria-label":"Specify how important this bonus is",className:"importantText textMedium2",style:{borderRadius:"4px",width:"48px",height:"12px",backgroundColor:"#1D1D1D"},type:"number",value:e.weight(r),onChange:A=>-1,min:"0",max:"9999"})})]}),!!u&&i.jsx(D(),{src:n.locked.img,fill:!0,unoptimized:!0,alt:`${e.key} bonus from in game`}),!u&&i.jsx(D(),{src:e.img,fill:!0,unoptimized:!0,alt:`${e.key} bonus from in game`})]}),i.jsx("div",{className:"residueCardFooter"})]})};function Residue(){let[A,e]=d()("userData",u),[t,l]=(0,a.useState)(u);return(0,a.useEffect)(()=>{l(A)},[A]),console.log(t),r.Z.createDecimal(t.CurrentResidueBD),i.jsx("div",{style:{display:"flex",flex:"1",backgroundColor:"black",position:"relative"},children:i.jsx("div",{style:{display:"flex",flex:"1",backgroundColor:"rgba(255,255,255, 0.05)",paddingLeft:"12px"},children:(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignSelf:"start",width:"50%",border:"2px solid rgba(255,255,255,0.8)",margin:"12px 36px 12px 0px",borderRadius:"12px",height:"calc(100vh - 74px)",paddingBottom:"12px"},children:[i.jsx("div",{style:{backgroundColor:"rgba(255,255,255, 0.05)"},children:i.jsx("div",{className:"importantText",style:{fontSize:"36px",display:"flex",alignItems:"center",justifyContent:"center",margin:"12px 0"},children:"Current Residue - WORK IN PROGRESS"})}),i.jsx("div",{style:{height:"calc(100% - 53px)",padding:"0 6px"},children:i.jsx("div",{style:{display:"flex",flexWrap:"wrap",maxHeight:"100%",overflowY:"auto"},children:Object.entries(n).filter(A=>"locked"!==A[0]).map((A,e)=>{let a=A[0],l=A[1];return i.jsx(ResidueCard,{data:t,params:{...l,key_inner:a}},e)})})})]})})})}},70583:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>Page,generateMetadata:()=>generateMetadata,viewport:()=>s});var i=t(4656),a=t(95153);let l=(0,a.createProxy)(String.raw`C:\Users\denys\Documents\GitHub\gameplay-planner\src\app\residue\page_content.jsx`),{__esModule:r,$$typeof:o}=l,n=l.default;async function generateMetadata({params:A,searchParams:e},t){return{title:"Residue / Milk Guide - Gameplay Planner",description:"Residue + Milk - Help you build, plan and optimise your milk / residue purchases. Includes a weight list to prioritise stats bonuses. Displays cost, time to purchase, level, hidden and future bonuses"}}let s={width:"device-width",initialScale:1};function Page(){return i.jsx(n,{})}},16467:()=>{}};var e=require("../../webpack-runtime.js");e.C(A);var __webpack_exec__=A=>e(e.s=A),t=e.X(0,[3367,1843,6990,5877,7419,5492,424,5340,5438,5628,2989,1263],()=>__webpack_exec__(61259));module.exports=t})();