(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{133:function(e,s,a){"use strict";(function(e){a.d(s,"a",(function(){return o})),a.d(s,"b",(function(){return b})),a.d(s,"c",(function(){return x})),a.d(s,"d",(function(){return h}));var i=a(1),t=a.n(i),c=a(5),n=a(32),r=a(64),m=new n.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),j=new n.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),l=new n.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),o=function(){var e=Object(c.a)(t.a.mark((function e(s,a,i){var n,r,m,j,l,o=arguments;return t.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>3&&void 0!==o[3]?o[3]:"recent",r=o.length>4&&void 0!==o[4]&&o[4],m=!1,j={slot:0,confirmations:0,err:null},l=0,e.next=7,new Promise(function(){var e=Object(c.a)(t.a.mark((function e(o,g){return t.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){m||(m=!0,console.log("Rejecting for timeout..."),g({timeout:!0}))}),a);try{l=i.onSignature(s,(function(e,s){m=!0,j={err:e.err,slot:s.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),g(j)):(console.log("Resolved via websocket",e),o(j))}),n)}catch(b){m=!0,console.error("WS error in setup",s,b)}case 2:if(m||!r){e.next=8;break}return Object(c.a)(t.a.mark((function e(){var a;return t.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.getSignatureStatuses([s]);case 3:a=e.sent,j=a&&a.value[0],m||(j?j.err?(console.log("REST error for",s,j),m=!0,g(j.err)):j.confirmations?(console.log("REST confirmation for",s,j),m=!0,o(j)):console.log("REST no confirmations for",s,j):console.log("REST null result for",s,j)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),m||console.log("REST connection error: txid",s,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,u(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(s,a){return e.apply(this,arguments)}}());case 7:return j=e.sent,i._signatureSubscriptions[l]&&i.removeSignatureListener(l),m=!0,console.log("Returning status",j),e.abrupt("return",j);case 12:case"end":return e.stop()}}),e)})));return function(s,a,i){return e.apply(this,arguments)}}(),g=function(s,a,i,t){var c=[{pubkey:a,isSigner:!0,isWritable:!0},{pubkey:s,isSigner:!1,isWritable:!0},{pubkey:i,isSigner:!1,isWritable:!1},{pubkey:t,isSigner:!1,isWritable:!1},{pubkey:n.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:r.b,isSigner:!1,isWritable:!1},{pubkey:n.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new n.d.TransactionInstruction({keys:c,programId:j,data:e.from([])})},b=function(){var e=Object(c.a)(t.a.mark((function e(s,a,i){var c,r,j,l,o,g,b,d,p;return t.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=new n.b(i,s,{preflightCommitment:"recent"}),e.next=3,n.a.fetchIdl(m,c);case 3:return r=e.sent,j=new n.a(r,m,c),l={id:a,connection:i,program:j},e.next=8,j.account.candyMachine.fetch(a);case 8:return o=e.sent,g=o.data.itemsAvailable.toNumber(),b=o.itemsRedeemed.toNumber(),d=g-b,p=o.data.goLiveDate.toNumber(),p=new Date(1e3*p),console.log({itemsAvailable:g,itemsRedeemed:b,itemsRemaining:d,goLiveDate:p}),e.abrupt("return",{candyMachine:l,itemsAvailable:g,itemsRedeemed:b,itemsRemaining:d,goLiveDate:p});case 16:case"end":return e.stop()}}),e)})));return function(s,a,i){return e.apply(this,arguments)}}(),d=function(){var s=Object(c.a)(t.a.mark((function s(a){return t.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,n.d.PublicKey.findProgramAddress([e.from("metadata"),l.toBuffer(),a.toBuffer(),e.from("edition")],l);case 2:return s.abrupt("return",s.sent[0]);case 3:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}(),p=function(){var s=Object(c.a)(t.a.mark((function s(a){return t.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,n.d.PublicKey.findProgramAddress([e.from("metadata"),l.toBuffer(),a.toBuffer()],l);case 2:return s.abrupt("return",s.sent[0]);case 3:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}(),O=function(){var e=Object(c.a)(t.a.mark((function e(s,a){return t.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.d.PublicKey.findProgramAddress([s.toBuffer(),r.b.toBuffer(),a.toBuffer()],j);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(s,a){return e.apply(this,arguments)}}(),x=function(){var e=Object(c.a)(t.a.mark((function e(s,a,i,c){var m,j,o,b,x,h,u;return t.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m=n.d.Keypair.generate(),e.next=3,O(i,m.publicKey);case 3:return j=e.sent,o=s.connection,b=s.program,e.next=7,p(m.publicKey);case 7:return x=e.sent,e.next=10,d(m.publicKey);case 10:return h=e.sent,e.next=13,o.getMinimumBalanceForRentExemption(r.a.span);case 13:return u=e.sent,e.next=16,b.rpc.mintNft({accounts:{config:a,candyMachine:s.id,payer:i,wallet:c,mint:m.publicKey,metadata:x,masterEdition:h,mintAuthority:i,updateAuthority:i,tokenMetadataProgram:l,tokenProgram:r.b,systemProgram:n.d.SystemProgram.programId,rent:n.d.SYSVAR_RENT_PUBKEY,clock:n.d.SYSVAR_CLOCK_PUBKEY},signers:[m],instructions:[n.d.SystemProgram.createAccount({fromPubkey:i,newAccountPubkey:m.publicKey,space:r.a.span,lamports:u,programId:r.b}),r.c.createInitMintInstruction(r.b,m.publicKey,0,i,i),g(j,i,i,m.publicKey),r.c.createMintToInstruction(r.b,m.publicKey,j,i,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(s,a,i,t){return e.apply(this,arguments)}}(),h=function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(e.slice(0,s),"...").concat(e.slice(-s))},u=function(e){return new Promise((function(s){return setTimeout(s,e)}))}}).call(this,a(8).Buffer)},353:function(e,s,a){},354:function(e,s,a){},357:function(e,s){},359:function(e,s){},375:function(e,s){},376:function(e,s){},407:function(e,s){},463:function(e,s){},465:function(e,s){},479:function(e,s){},483:function(e,s){},485:function(e,s){},495:function(e,s){},497:function(e,s){},524:function(e,s){},526:function(e,s){},531:function(e,s){},533:function(e,s){},539:function(e,s){},541:function(e,s){},553:function(e,s){},556:function(e,s){},568:function(e,s){},569:function(e,s,a){"use strict";a.r(s);var i,t,c,n,r=a(2),m=a.n(r),j=a(29),l=a.n(j),o=(a(353),a(354),a(13)),g=a(1),b=a.n(g),d=a(5),p=a(14),O=a(132),x=a(134),h=a(313),u=a(596),f=a(601),N=a(605),v=a(604),T=a(16),y=a(52),S=a(175),k=a(133),w=a(3),A=Object(x.a)(S.a)(i||(i=Object(O.a)([""]))),B=x.a.span(t||(t=Object(O.a)([""]))),P=x.a.div(c||(c=Object(O.a)([""]))),R=Object(x.a)(u.a)(n||(n=Object(O.a)([""]))),C=function(e){var s=e.days,a=e.hours,i=e.minutes,t=e.seconds;e.completed;return Object(w.jsxs)(B,{children:[a+24*(s||0)," hours, ",i," minutes, ",t," seconds"]})},K=function(e){var s=Object(r.useState)(),a=Object(p.a)(s,2),i=a[0],t=a[1],c=Object(r.useState)(!1),n=Object(p.a)(c,2),m=n[0],j=n[1],l=Object(r.useState)(!1),g=Object(p.a)(l,2),O=g[0],x=g[1],u=Object(r.useState)(!1),S=Object(p.a)(u,2),B=S[0],K=S[1],L=Object(r.useState)(0),M=Object(p.a)(L,2),I=(M[0],M[1]),E=Object(r.useState)(0),D=Object(p.a)(E,2),W=(D[0],D[1]),G=Object(r.useState)(0),F=Object(p.a)(G,2),_=F[0],U=F[1],Y=Object(r.useState)({open:!1,message:"",severity:void 0}),z=Object(p.a)(Y,2),H=z[0],J=z[1],V=Object(r.useState)(new Date(e.startDate)),q=Object(p.a)(V,2),Q=q[0],X=q[1],Z=Object(y.c)(),$=Object(r.useState)(),ee=Object(p.a)($,2),se=ee[0],ae=ee[1],ie=function(){Object(d.a)(b.a.mark((function s(){var a,i,t,c,n,r;return b.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object(k.b)(Z,e.candyMachineId,e.connection);case 2:a=s.sent,i=a.candyMachine,t=a.goLiveDate,c=a.itemsAvailable,n=a.itemsRemaining,r=a.itemsRedeemed,I(c),U(n),W(r),x(0===n),X(t),ae(i);case 14:case"end":return s.stop()}}),s)})))()},te=function(){var s=Object(d.a)(b.a.mark((function s(){var a,i,c,n;return b.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(s.prev=0,K(!0),!Z||!(null===se||void 0===se?void 0:se.program)){s.next=10;break}return s.next=5,Object(k.c)(se,e.config,Z.publicKey,e.treasury);case 5:return a=s.sent,s.next=8,Object(k.a)(a,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(i=s.sent)||void 0===i?void 0:i.err)?J({open:!0,message:"Mint failed! Please try again!",severity:"error"}):J({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"});case 10:s.next=17;break;case 12:s.prev=12,s.t0=s.catch(0),c=s.t0.msg||"Minting failed! Please try again!",s.t0.msg?311===s.t0.code?(c="SOLD OUT!",x(!0)):312===s.t0.code&&(c="Minting period hasn't started yet."):s.t0.message.indexOf("0x138")||(s.t0.message.indexOf("0x137")?c="SOLD OUT!":s.t0.message.indexOf("0x135")&&(c="Insufficient funds to mint. Please fund your wallet.")),J({open:!0,message:c,severity:"error"});case 17:if(s.prev=17,!Z){s.next=23;break}return s.next=21,e.connection.getBalance(Z.publicKey);case 21:n=s.sent,t(n/T.LAMPORTS_PER_SOL);case 23:return K(!1),ie(),s.finish(17);case 26:case"end":return s.stop()}}),s,null,[[0,12,17,26]])})));return function(){return s.apply(this,arguments)}}();return Object(r.useEffect)((function(){Object(d.a)(b.a.mark((function s(){var a;return b.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(!Z){s.next=5;break}return s.next=3,e.connection.getBalance(Z.publicKey);case 3:a=s.sent,t(a/T.LAMPORTS_PER_SOL);case 5:case"end":return s.stop()}}),s)})))()}),[Z,e.connection]),Object(r.useEffect)(ie,[Z,e.candyMachineId,e.connection]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("header",{className:"header",children:Object(w.jsxs)("nav",{className:"navbar",children:[Object(w.jsx)("a",{href:"#root",className:"nav-logo",children:"SolWalkers."}),Object(w.jsxs)("ul",{className:"nav-menu",children:[Object(w.jsx)("li",{className:"remaining-li",children:Object(w.jsxs)("p",{className:"remaining",children:["Remaining: ",_]})}),Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)("a",{href:"#rarity-section",className:"nav-link",children:"Attributes Ranking"})}),Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)(P,{children:Z?Object(w.jsx)("ul",{className:"ul-wallet",children:Object(w.jsxs)("p",{className:"wallet",children:[Object(k.d)(Z.publicKey.toBase58()||""),Object(w.jsx)("br",{}),(i||0).toLocaleString()," SOL"]})}):Object(w.jsx)(A,{children:"Connect Wallet"})})})]}),Object(w.jsxs)("div",{className:"hamburger",children:[Object(w.jsx)("span",{className:"bar"}),Object(w.jsx)("span",{className:"bar"}),Object(w.jsx)("span",{className:"bar"})]})]})}),Object(w.jsxs)("section",{className:"sect-1",children:[Object(w.jsxs)("div",{className:"img-caroussel",children:[Object(w.jsx)("img",{src:"assets/images/caroussel/4.png",id:"img-carou",alt:"img"}),Object(w.jsx)("div",{className:"mint-button",children:Object(w.jsx)(P,{children:Z?Object(w.jsx)(R,{disabled:O||B||!m,onClick:te,variant:"contained",children:O?"SOLD OUT":m?B?Object(w.jsx)(f.a,{}):"MINT     0.5 SOL":Object(w.jsx)(h.a,{date:Q,onMount:function(e){return e.completed&&j(!0)},onComplete:function(){return j(!0)},renderer:C})}):Object(w.jsx)(w.Fragment,{})})})]}),Object(w.jsx)("div",{className:"desc-caroussel",children:Object(w.jsxs)("p",{children:[Object(w.jsx)("br",{}),"Get your own Solwalker among ",Object(w.jsx)("br",{}),"a 10 000 NFT collection!",Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),"Try to drop the most incredible ",Object(w.jsx)("br",{}),"combination from head to toe",Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),"If you're lucky enough you may even get the majestic Golden Suit",Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),"Good Luck!"]})})]}),Object(w.jsxs)("section",{className:"rarity-sect",id:"rarity-section",children:[Object(w.jsx)("div",{className:"section-head",children:Object(w.jsx)("h1",{children:"Attributes Ranking"})}),Object(w.jsxs)("div",{className:"rarity-div-rank",children:[Object(w.jsx)("h2",{children:"C-RANK"}),Object(w.jsxs)("div",{className:"myGallery",children:[Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/C/1.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 11"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/C/2.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 12"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/C/3.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/C/4.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/C/5.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/C/6.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/C/7.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/C/8.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/C/9.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/C/10.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/C/11.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/C/12.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/C/13.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/C/14.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/C/15.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/C/16.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/C/17.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/C/18.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]})]})]}),Object(w.jsxs)("div",{className:"rarity-div-rank",children:[Object(w.jsx)("h2",{children:"B-RANK"}),Object(w.jsxs)("div",{className:"myGallery",children:[Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/B/1.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 11"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/B/2.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 12"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/B/3.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/B/4.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/B/5.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/B/6.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/B/7.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/B/8.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/B/9.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/B/10.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/B/11.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/B/12.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/B/13.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/B/14.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/B/15.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/B/16.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/B/17.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/B/18.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/B/19.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/B/20.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/B/21.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/B/22.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/B/23.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/B/24.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/B/25.png",id:"white-stars"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]})]})]}),Object(w.jsxs)("div",{className:"rarity-div-rank",children:[Object(w.jsx)("h2",{children:"A-RANK"}),Object(w.jsxs)("div",{className:"myGallery",children:[Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/A/1.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 11"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/A/2.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 12"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/A/3.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/A/4.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/A/5.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/A/6.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/A/7.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/A/8.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/A/9.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/A/10.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/A/11.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/A/12.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/A/13.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/A/14.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/A/15.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/A/16.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/A/17.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]})]})]}),Object(w.jsxs)("div",{className:"rarity-div-rank",children:[Object(w.jsx)("h2",{children:"S-RANK"}),Object(w.jsxs)("div",{className:"myGallery",children:[Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/S/1.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 11"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/S/2.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 12"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/S/3.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/S/4.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/S/6.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/S/7.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/S/8.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/S/9.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/S/10.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/S/11.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/S/12.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/S/13.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/S/14.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]})]})]}),Object(w.jsxs)("div",{className:"rarity-div-rank",children:[Object(w.jsx)("h2",{children:"SS-RANK"}),Object(w.jsxs)("div",{className:"myGallery",children:[Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/SS/1.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 11"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/SS/2.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 12"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/SS/3.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]}),Object(w.jsxs)("div",{className:"item",children:[Object(w.jsx)("img",{src:"assets/images/elements/SS/4.png"}),Object(w.jsx)("span",{className:"caption",children:"This is an image caption for image 13"})]})]})]})]}),Object(w.jsx)(N.a,{open:H.open,autoHideDuration:6e3,onClose:function(){return J(Object(o.a)(Object(o.a)({},H),{},{open:!1}))},children:Object(w.jsx)(v.a,{onClose:function(){return J(Object(o.a)(Object(o.a)({},H),{},{open:!1}))},severity:H.severity,children:H.message})})]})},L=a(32),M=a(116),I=a(340),E=a(602),D=new L.d.PublicKey("CsjfUPQySD9iQiAyh5tjuTuH7GXzAFLd4nw87NYvff8V"),W=new L.d.PublicKey("3pSzKWe8PgFTAKmJcPD7M67ocLXj432iLh1BUZjHPPgv"),G=new L.d.PublicKey("FQiayEaum39dzd3Kxd1i7YyzJjzttxA9GSR7oHgBdhhj"),F="devnet",_=new L.d.Connection("https://explorer-api.devnet.solana.com"),U=parseInt("1633248000",10),Y=Object(I.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),z=function(){var e=Object(r.useMemo)((function(){return Object(T.clusterApiUrl)(F)}),[]),s=Object(r.useMemo)((function(){return[Object(M.a)(),Object(M.b)(),Object(M.c)(),Object(M.e)({network:F}),Object(M.d)({network:F})]}),[]);return Object(w.jsx)(E.a,{theme:Y,children:Object(w.jsx)(y.a,{endpoint:e,children:Object(w.jsx)(y.b,{wallets:s,autoConnect:!0,children:Object(w.jsx)(S.b,{children:Object(w.jsx)(K,{candyMachineId:G,config:W,connection:_,startDate:U,treasury:D,txTimeout:3e4})})})})})},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,606)).then((function(s){var a=s.getCLS,i=s.getFID,t=s.getFCP,c=s.getLCP,n=s.getTTFB;a(e),i(e),t(e),c(e),n(e)}))};l.a.render(Object(w.jsx)(m.a.StrictMode,{children:Object(w.jsx)(z,{})}),document.getElementById("root")),H()}},[[569,1,2]]]);
//# sourceMappingURL=main.34ef9b74.chunk.js.map