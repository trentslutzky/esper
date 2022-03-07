"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[553],{90110:(e,t,a)=>{a.d(t,{q:()=>R,o:()=>O});var n=a(63038),l=a.n(n),r=a(59713),i=a.n(r),o=a(67294),c=a.n(o),s=a(94184),u=a.n(s),d=a(69518),m=a.n(d),g=a(50020),f=a(96895),p=a(20657),E=a(83692),y=a(24656),C=a(69010),v=a(80946),w=a(6116),b=a(38209),k=a(40080);const h="l_MW0G9qeeCKlVJwBykT",D="BKsbV2Xl786X9a09XROH",S="HbKLiGoYM4dpuK8L4TMX",T="_APVWqivXc4YqgsnpFkP",x="VmwiDoU6RpqyzK_n7XRO",L="rEx3EYgBzS8SoY7dmC6x",N="z3zia5snl987x676qe5w";var R;!function(e){e[e.sm=24]="sm",e[e.md=32]="md"}(R||(R={}));var A=function(e){var t=e.currentTarget;e.detail>0&&t&&t.blur()},O=function(e){var t=e.uri,a=e.isFollowing,n=e.onFollow,r=e.size,s=void 0===r?R.sm:r,d=e.className,O=e.onClick,_=void 0===O?function(){}:O,P=i()({},"--size","".concat(s,"px")),I=(0,o.useContext)(y.I),B=I.useDownloading,M=I.useDownloadCapability,U=(0,o.useState)(!1),z=l()(U,2),K=z[0],F=z[1],G=M(m().isEpisode(t)),Q=l()(G,2),V=Q[0],W=Q[1],X=(0,o.useState)(!1),q=l()(X,2),Y=q[0],Z=q[1],J=B(t),j=J.currentAvailability,H=J.progress,$=J.beginDownload,ee=J.clearDownload;!function(e,t){var a=(0,b.r)(),n=(0,o.useRef)(!1);(0,o.useEffect)((function(){e===C.V8.DOWNLOADING&&!1===n.current&&(n.current=!0,a.say(p.ag.get("download.downloading",t.totalItems)))}),[a,e,t]);var l=(0,k.D)(e);(0,o.useEffect)((function(){l===C.V8.DOWNLOADING&&e===C.V8.YES&&(n.current=!1,a.say(p.ag.get("download.complete")))}),[a,l,e])}(j,H);var te=(0,o.useCallback)((function(e){W===C.v$.DOWNLOADING_NOT_ALLOWED?Z(!0):!1===a?(n(),F(!0)):$(),_(e),A(e)}),[$,W,a,_,n]),ae=(0,o.useCallback)((function(e){ee(),A(e),_(e)}),[ee,_]);return(0,o.useEffect)((function(){!0===K&&!0===a&&($(),F(!1))}),[a,K,$]),V===C.PQ.NO_DOWNLOAD_CAPABILITY?null:W===C.v$.DOWNLOADING_NOT_ALLOWED?c().createElement("div",{className:D},c().createElement(E.w,{label:p.ag.get("download.download")},c().createElement("button",{className:u()(S,d),role:"switch",onClick:te,"aria-label":p.ag.get("download.download"),"aria-checked":!1},c().createElement(g.a,{iconSize:s}))),Y&&c().createElement("div",{className:N},c().createElement(v.E,{withTopLeftPointer:!0,horizontal:!0,onClose:function(){Z(!1)}},p.ag.get("download.upsell")))):j===C.V8.YES?c().createElement(E.w,{label:p.ag.get("download.remove")},c().createElement("button",{className:u()(S,d,T),role:"switch",onClick:ae,"aria-label":p.ag.get("download.remove"),"aria-checked":!0},c().createElement(f.C,{iconSize:s}))):j===C.V8.NO?c().createElement(E.w,{label:p.ag.get("download.download")},c().createElement("button",{className:u()(S,d),role:"switch",onClick:te,"aria-label":p.ag.get("download.download"),"aria-checked":!1},c().createElement(g.a,{iconSize:s}))):c().createElement("div",{className:u()(x,d),role:"switch","aria-checked":!0},c().createElement(E.w,{label:p.ag.get("download.cancel")},c().createElement("button",{style:P,className:u()(S,h,d),onClick:ae,"aria-label":p.ag.get("download.cancel")})),c().createElement("span",{style:P,className:u()(L,h)},c().createElement(w.e,{"aria-valuetext":p.ag.get("progress.downloading-tracks"),percentage:H.percentage,size:s})))}},55546:(e,t,a)=>{a.r(t),a.d(t,{LikedSongs:()=>M,LikedSongsContainer:()=>U,default:()=>z,likedSongscolumns:()=>B});a(68309),a(57327),a(41539),a(66992),a(78783),a(33948),a(41637),a(74916),a(64765);var n=a(67294),l=a.n(n),r=a(16528),i=a(20657),o=a(30947),c=a(55911),s=a(53646),u=a(49955),d=a(7692),m=a(92510);var g=a(45342),f=a(84242),p=a(1169),E=a(4236),y=a(30520),C=a(90110),v=a(70369),w=a(37338),b=a(19565),k=a(42273),h=a(59482),D=a(72907),S=a(61048),T=function(){return l().createElement("svg",{width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M47 18.538L48 16.806L31.478 7.26801V42.327C29.826 40.299 27.313 39 24.5 39C19.538 39 15.5 43.038 15.5 48C15.5 52.963 19.538 57 24.5 57C29.27 57 33.175 53.266 33.471 48.569L33.478 48.433C33.485 48.288 33.485 47.711 33.478 47.566V10.732L47 18.538ZM31.478 48.434C31.252 52.091 28.213 55 24.5 55C20.64 55 17.5 51.86 17.5 48C17.5 44.141 20.64 41 24.5 41C28.213 41 31.252 43.909 31.478 47.566V48.434Z",fill:"currentColor"}))},x=a(1663),L=a(55120),N=a(71927),R=a(32129),A=a(22423),O=a(28248),_=a(78462),P=a(14893),I=a(2751),B=[O.QD.INDEX,O.QD.TITLE,O.QD.ALBUM,O.QD.ADDED_AT,O.QD.DURATION],M=function(e){var t=e.metadata,a=e.canFilter,g=e.canSort,O=t.uri,P=t.name,M=t.images,U=t.totalLength,z=t.owner,K=(0,p.Q)(),F=K.filterBoxApiRef,G=K.filterBoxDomRef,Q=K.tracklistDomRef,V=K.handleKeyDown,W=(0,E.k)()&&U>0,X=U>0,q=(0,n.useMemo)((function(){return{id:z.username,uri:z.uri,name:z.username,displayName:z.displayName||void 0,images:z.images||[]}}),[z]),Y=(0,s.Y5)("#5038a0"),Z=(0,n.useContext)(A.fo).filter,J=(0,n.useContext)(_.Gb).sortState,j=(0,r.k6)(),H="POP"!==j.action?new URLSearchParams(j.location.search).get("uri"):null,$=(0,f.n)(function(e,t,a){var n={uri:e};return(0,u.R4)(n,t),(0,d.IC)(n,(0,m.cj)(a)),n}(O,(0,y.w)(J),Z),{featureIdentifier:"your_library",referrerIdentifier:"your_library"}),ee=$.isPlaying,te=$.togglePlay,ae=$.usePlayContextItem,ne=function(){return te()};return l().createElement("section",{role:"presentation",className:I.Z.playlist,"data-testid":"playlist-page",onKeyDown:V},l().createElement(v.$,null,i.ag.get("playlist.page-title",P)),l().createElement(k.gF,{backgroundColor:Y},l().createElement(h.W,null,l().createElement(L.$,{size:c.qE.sm,onClick:ne,isPlaying:ee,uri:O,ariaPauseLabel:i.ag.get("liked-songs.a11y.pause",P),ariaPlayLabel:i.ag.get("playlist.a11y.play",P)}),l().createElement(D.i,{text:P})),l().createElement("div",{className:I.Z.playlistImageContainer},l().createElement(w.T,{canEdit:!1,name:P,images:M,onClick:function(){},placeholderType:"playlist"})),l().createElement(k.sP,null,l().createElement(k.dy,{small:!0,uppercase:!0},i.ag.get("playlist")),l().createElement(k.xd,{canEdit:!1,onClick:function(){}},P),l().createElement(k.QS,{creators:[q],totalTracks:U}))),l().createElement(o.o,{backgroundColor:Y},l().createElement(o.F,null,X?l().createElement(L.$,{onClick:ne,isPlaying:ee,size:c.qE.lg,uri:O,ariaPauseLabel:i.ag.get("liked-songs.a11y.pause",P),ariaPlayLabel:i.ag.get("playlist.a11y.play",P)}):null,W?l().createElement(C.o,{uri:O,isFollowing:!0,onFollow:function(){},size:C.q.md}):null,a&&g&&l().createElement("div",{className:I.Z.searchBoxContainer},l().createElement(n.Suspense,{fallback:null},l().createElement(S.K,{placeholder:i.ag.get("playlist.search_in_playlist"),filterBoxApiRef:F,outerRef:G})),l().createElement(R.c,{columns:_.P0})))),l().createElement("div",{className:"contentSpacing"},U>0?l().createElement(n.Suspense,{fallback:l().createElement(x.h,{hasError:!1,errorMessage:i.ag.get("error.request-collection-tracks-failure")})},l().createElement(N.p,{nrTracks:U,columns:B,collectionUri:O,scrollToUri:H,usePlayContextItem:ae,outerDomRef:Q})):l().createElement(b.u,{message:i.ag.get("collection.empty-page.songs-subtitle"),title:i.ag.get("collection.empty-page.songs-title"),linkTo:"/search",linkTitle:i.ag.get("collection.empty-page.songs-cta"),renderInline:!0},l().createElement(T,null))))},U=l().memo((function(){var e=(0,P.b)(),t=(0,n.useContext)(g.H).getCapabilities();return e?l().createElement(_.kz,{uri:e.uri},l().createElement(A.hz,{uri:e.uri},l().createElement(M,{metadata:e,canFilter:t.canFilter&&e.totalLength>0,canSort:t.canSort&&e.totalLength>0}))):l().createElement(x.h,{hasError:!1,errorMessage:i.ag.get("error.not_found.title.playlist"),loadOffline:t.canModifyOffline})}));const z=U},70369:(e,t,a)=>{a.d(t,{$:()=>n.$});var n=a(22578)},37338:(e,t,a)=>{a.d(t,{T:()=>f});var n=a(63038),l=a.n(n),r=(a(68309),a(67294)),i=a.n(r),o=a(15212),c=a(25678),s=a(33732),u=a(42273),d=a(22023);const m="Ws8Ec3GREpT5PAUesr9b",g="kHu_FTRgoBLSLeAJtyKY";var f=function(e){var t=e.onClick,a=e.name,n=e.images,r=e.canEdit,f=e.placeholderType,p=e.shape,E=void 0===p?u.Kc.SQUARE:p,y=e.dragUri,C=void 0===y?"":y,v=(0,s.RH)(n),w=l()(v,2),b=w[0],k=w[1],h=(0,c.VO)(b,k)===c.KO.loaded,D=(0,o.O1)([C],a);return i().createElement("div",{className:m,"data-testid":"".concat(f,"-image"),draggable:!!C,onDragStart:D},i().createElement(u.Oe,{loading:"eager",name:a,images:n,placeholderType:f,shape:E}),r&&i().createElement("div",{className:g},i().createElement(d.F,{overlay:h,onClick:t,rounded:E===u.Kc.CIRCLE})))}},71927:(e,t,a)=>{a.d(t,{p:()=>S});var n=a(48926),l=a.n(n),r=a(319),i=a.n(r),o=a(63038),c=a.n(o),s=a(87757),u=a.n(s),d=(a(66992),a(41539),a(70189),a(78783),a(33948),a(57327),a(21249),a(68309),a(67294)),m=a.n(d),g=a(20657),f=a(42922),p=a(45342),E=a(49961),y=a(30520),C=a(36132),v=a(35308),w=a(22423),b=a(28248),k=a(78462),h=new Set(k.P0),D=new Set([]),S=m().memo((function(e){var t=e.nrTracks,a=e.collectionUri,n=e.columns,r=e.uri,o=e.sortable,s=void 0===o||o,S=e.scrollToUri,T=e.usePlayContextItem,x=e.outerDomRef,L=(0,d.useContext)(p.H),N=(0,d.useRef)(null),R=(0,d.useState)(t),A=c()(R,2),O=A[0],_=A[1],P=(0,d.useContext)(w.fo).filter,I=(0,d.useRef)((function(){})),B=(0,d.useState)([]),M=c()(B,2),U=M[0],z=M[1],K=(0,d.useContext)(k.Gb),F=K.sortState,G=K.setSortState,Q=(0,d.useCallback)((function(e){G((0,C.VK)(e,F))}),[G,F]);(0,d.useEffect)((function(){N.current&&N.current.update()}),[F,P]),(0,d.useEffect)((function(){N.current&&""===P&&N.current.scrollToFirstSelected()}),[P,O]),(0,d.useEffect)((function(){_(t)}),[t]),(0,d.useEffect)((function(){N.current&&S&&N.current.scrollToItem({uri:S})}),[S]);var V=(0,d.useCallback)((function(e){var t=e.map((function(e){return e.uri}));I.current(),null==L||L.remove.apply(L,i()(t))}),[L]),W=(0,d.useCallback)((function(e,t){I.current=t,e.length>1?z(e):V(e)}),[V]),X=(0,d.useCallback)(function(){var e=l()(u().mark((function e(t,a){var n,l,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null==L?void 0:L.getTracks({offset:t,limit:a,uri:r,sort:(0,y.w)(F),filter:P});case 2:return n=e.sent,l=null==n?void 0:n.totalLength,i=(null==n?void 0:n.items)||[],"number"==typeof l&&l!==O&&_(l),e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),[P,L,O,F,r]),q=(0,d.useCallback)((function(e,t){var n,l=(0,E.X)(null===(n=e.album)||void 0===n?void 0:n.images,{desiredSize:40,desiredLabel:"small"});return m().createElement(b.dx,{key:t+e.uri,index:t,contextUri:a,uri:e.uri,isPlayable:e.isPlayable,duration_ms:e.duration.milliseconds,name:e.name,artists:e.artists,albumOrShow:e.album,isExplicit:e.isExplicit,isCollaborative:!1,isMixedMedia:!1,isPaywalled:!1,isUserSubscribed:!1,isLocal:e.isLocal,addedBy:[],dateAdded:e.addedAt,hasDecoratedAddedBy:!1,release_date:"",isMOGEFRestricted:e.is19PlusOnly,type:e.type,imgUrl:(null==l?void 0:l.url)||"",onMove:function(){},onInsert:function(){},usePlayContextItem:T,allowedDropTypes:[],isDisliked:!1,playlistName:""})}),[a,T]);return m().createElement(m().Fragment,null,m().createElement(f.ZP,{value:"liked-songs-tracklist"},m().createElement(b.Pv,{ariaLabel:g.ag.get("sidebar.liked_songs"),key:a,hasHeaderRow:!0,columns:n,sortableColumns:null!=L&&L.getCapabilities().canSort&&s?h:D,sortState:F,onSort:Q,renderRow:q,resolveUri:function(e){return e.uri},resolveUid:function(e){return e.uri},onRemove:W,nrTracks:O,fetchTracks:X,limit:50,canFetchAllTracks:null==L?void 0:L.getCapabilities().canFetchAllTracks,outerRef:N,outerDomRef:x})),m().createElement(v.h,{title:g.ag.get("remove_from_your_liked_songs"),isOpen:U.length>0,tracks:U,onClose:function(e){e.stopPropagation(),z([])},onRemove:V}))}))},32129:(e,t,a)=>{a.d(t,{c:()=>f});var n=a(319),l=a.n(n),r=(a(40561),a(57327),a(41539),a(21249),a(67294)),i=a.n(r),o=a(20657),c=a(36132),s=a(95289),u=a(5292),d=a(28248),m=a(78462);function g(e){return!!e}var f=function(e){var t=e.columns,a=l()(t);a.splice(2,0,d.QD.ARTIST);var n=(0,r.useContext)(m.Gb),f=n.sortState,p=n.setSortState,E=function(e){return null===e.column?u.mE[d.QD.INDEX]:(0,c.cB)(e.column,e.order)?u.mE[d.QD.ARTIST]:u.mE[e.column]}(f),y=(0,r.useCallback)((function(e){p((0,u.WQ)(e,f.column,f.order))}),[p,f.column,f.order]),C=(0,r.useCallback)((function(){return null!==f.column}),[f.column]),v=a.map((function(e){return u.mE[e]})).filter(g);return i().createElement(s.A,{options:v,onSelect:y,selected:E,isSelectionChanged:C,sortOrder:f.order,heading:o.ag.get("drop_down.sort_by")})}},35308:(e,t,a)=>{a.d(t,{h:()=>p});a(82526),a(41817);var n=a(67294),l=a.n(n),r=a(28760),i=a(73753),o=a(20657),c=a(16229),s=a(85105);const u="J0xJcBaKhwl9EIuzvhLg",d="ce3qMCnc2kDVSi7k74fh",m="tlBLfMv0fCxd31jPTQhL",g="AytCc2WKUld6N212Pcpu",f="Uw9aTbBCa7QzSsZSGAG5";var p=l().memo((function(e){var t=e.onClose,a=e.onRemove,p=e.isOpen,E=e.tracks,y=e.title,C=(0,n.useCallback)((function(e){a(E),t(e)}),[a,t,E]);return l().createElement(s.Z,{shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,onRequestClose:t,contentLabel:y,isOpen:p},l().createElement("div",{className:u},l().createElement(r.Dy,{as:"h2",variant:"cello",className:d},y),l().createElement(r.Dy,{as:"p",variant:"mesto",className:m,paddingBottom:i.g4V},o.ag.get("playlist.remove_multiple_description")),l().createElement("div",{className:g},l().createElement(c.Y,{className:f,version:"tertiary",onClick:t},o.ag.get("playlist.delete-cancel")),l().createElement(c.Y,{version:"primary",onClick:C},o.ag.get("remove")))))}))},30520:(e,t,a)=>{a.d(t,{w:()=>u});var n,l=a(59713),r=a.n(l),i=a(74483),o=a(59916),c=a(36132),s=(n={},r()(n,o.bD.ADDED_AT,i._1.ADDED_AT),r()(n,o.bD.ADDED_BY,null),r()(n,o.bD.ALBUM,i._1.ALBUM_NAME),r()(n,o.bD.ARTIST,i._1.ARTIST_NAME),r()(n,o.bD.DURATION,null),r()(n,o.bD.TITLE,i._1.NAME),n),u=function(e){var t=(0,c._j)(e);if(t){var a=s[t.field],n=t.order;if(a&&n)return{field:a,order:n}}}},40080:(e,t,a)=>{a.d(t,{D:()=>l});var n=a(67294);function l(e){var t=(0,n.useRef)();return(0,n.useEffect)((function(){t.current=e}),[e]),t.current}},2751:(e,t,a)=>{a.d(t,{Z:()=>n});const n={xs:"(min-width: 0px)",xsOnly:"(min-width: 0px) and (max-width: 767px)",sm:"(min-width: 768px)",smOnly:"(min-width: 768px) and (max-width: 1023px)",md:"(min-width: 1024px)",mdOnly:"(min-width: 1024px) and (max-width: 1279px)",lg:"(min-width: 1280px)",lgOnly:"(min-width: 1280px) and (max-width: 1919px)",xl:"(min-width: 1920px)",playlist:"dZ3U5sTGUTdanNamXe1z",searchBoxContainer:"KodyK77Gzjb8NqPGpcgw",recommendedTrackList:"kwe0I8sSNMv3gYBjkRYP",playlistContent:"rezqw3Q4OEPB1m4rmwfw",playlistDescription:"fUYMR7LuRXv0KJWFvRZA",top:"PZkwbwJD1afoCmJkGt8w",header:"yP3JLuwUNDIQHxRFilK3",subtitle:"NCKSUYdZaTMrobq8ilkc",refreshButton:"QmGi2oa43BTcEZ5MCr9T",playlistImageContainer:"oq1ci28WPaRsWkvRiB_J",playlistInlineCurationSection:"Ykd_JWqkR9gSLHISDBwP",playlistInlineCurationWrapper:"g9xHCCSXDR8S5NvTbfwL",playlistInlineCurationTitle:"SMJIXlalPk_TESlyt2pC",playlistInlineCurationCloseButton:"FC40AOSbVM9LXjVi7bjO",playlistInlineCurationBackButton:"hVcUafGrnsA6nD1dJzc5",artistResultListTitle:"rARdlCShKVQsvuXamFOX",seeMore:"STDuzt77yRCueC4Ohenl",emptyStateContainer:"Bl_kg24BjWgcXPokgEKy",searchResultListContainer:"sAPXlA_oxu_8x1Cn0NTC",emptySearchTermContainer:"_Z2TnFjt8GB5ryOtvyti",icon:"tzeKawjOOKFw1KfQ34mG"}}}]);
//# sourceMappingURL=xpui-routes-collection-songs.js.map