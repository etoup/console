(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[337],{73828:function(Ue,se,t){"use strict";t.r(se),t.d(se,{default:function(){return $e}});var Z=t(11849),Ne=t(62350),de=t(75443),ke=t(57663),W=t(71577),He=t(34792),O=t(48086),Ge=t(71194),he=t(57016),y=t(3182),F=t(2824),ve=t(94043),r=t.n(ve),w=t(67294),P=t(43653),fe=t(81907),me=t(85224),pe=t(57119),ge=t(2625),k=t(35348);function ye(h){return q.apply(this,arguments)}function q(){return q=(0,y.Z)(r().mark(function h(i){return r().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,k.Z)("/system/notice/list",{method:"GET",params:(0,Z.Z)({},i)}));case 1:case"end":return a.stop()}},h)})),q.apply(this,arguments)}function Ze(){return _.apply(this,arguments)}function _(){return _=(0,y.Z)(r().mark(function h(){return r().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,k.Z)("/system/notice/department"));case 1:case"end":return n.stop()}},h)})),_.apply(this,arguments)}function xe(){return ee.apply(this,arguments)}function ee(){return ee=(0,y.Z)(r().mark(function h(){return r().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,k.Z)("/system/notice/user"));case 1:case"end":return n.stop()}},h)})),ee.apply(this,arguments)}function je(h){return te.apply(this,arguments)}function te(){return te=(0,y.Z)(r().mark(function h(i){return r().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,k.Z)("/system/notice/created",{method:"POST",data:(0,Z.Z)({},i)}));case 1:case"end":return a.stop()}},h)})),te.apply(this,arguments)}function Ce(h){return ne.apply(this,arguments)}function ne(){return ne=(0,y.Z)(r().mark(function h(i){return r().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,k.Z)("/system/notice/deleted",{method:"POST",data:(0,Z.Z)({},i)}));case 1:case"end":return a.stop()}},h)})),ne.apply(this,arguments)}function Se(h){return ae.apply(this,arguments)}function ae(){return ae=(0,y.Z)(r().mark(function h(i){return r().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,k.Z)("/system/notice/withdraw",{method:"POST",data:(0,Z.Z)({},i)}));case 1:case"end":return a.stop()}},h)})),ae.apply(this,arguments)}var Ve=t(57338),le=t(25084),We=t(13062),ue=t(71230),Ye=t(47673),ie=t(4107),Je=t(62999),Ee=t(12010),ze=t(89032),H=t(15746),Ke=t(43358),oe=t(16317),Qe=t(9715),M=t(86585),Xe=t(43185),Fe=t(94412),we=t(84391);function Be(h){return re.apply(this,arguments)}function re(){return re=(0,y.Z)(r().mark(function h(i){return r().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,k.Z)("/common/file/fetchOSSUploadToken",{method:"POST",data:i}));case 1:case"end":return a.stop()}},h)})),re.apply(this,arguments)}var e=t(85893),$={host:"",accessId:"",signature:"",policy:"",key:""},Te=function(i){var n=i.onDone,a=i.onRemove,C=i.fileList,S={action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",listType:"picture",accept:".png, .jpg, .jpeg",fileList:C,data:function(){return T()},beforeUpload:N,onRemove:a,onChange:function(m){return U(m)}},U=function(m){n(m)};function N(l){return B.apply(this,arguments)}function B(){return B=(0,y.Z)(r().mark(function l(m){return r().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.abrupt("return",new Promise(function(Y,b){C.length===10&&(O.default.error("\u6700\u591A\u4E0A\u4F20\u5341\u5F20\u56FE\u7247"),b("\u6700\u591A\u4E0A\u4F20\u5341\u5F20\u56FE\u7247"));var J=m.type==="image/jpeg"||m.type==="image/png";J||(O.default.error("\u53EA\u80FD\u4E0A\u4F20 JPG/PNG \u56FE\u7247"),b("\u53EA\u80FD\u4E0A\u4F20 JPG/PNG \u56FE\u7247"));var V=m.size/1024/1024<2;V||(O.default.error("\u53EA\u80FD\u4E0A\u4F20\u5C0F\u4E8E 2M \u56FE\u7247"),b("\u53EA\u80FD\u4E0A\u4F20\u5C0F\u4E8E 2M \u56FE\u7247"));var A={documentType:3,key:String(Date.now()+Math.floor(Math.random()*(999999-1e5)+1e5)+1)};Be(A).then(function(R){if(R.status==="success"){var L=R.data,Q=L.accessId,z=L.signature,K=L.policy;$.accessId=Q,$.signature=z,$.policy=K,$.key=A.key,Y("\u4E0A\u4F20\u4E2D...")}R.status==="fail"&&b(R.message)})}));case 1:case"end":return I.stop()}},l)})),B.apply(this,arguments)}function T(){return{accessId:$.accessId,signature:$.signature,policy:$.policy,key:$.key}}return(0,e.jsx)(Fe.Z,(0,Z.Z)((0,Z.Z)({},S),{},{children:(0,e.jsxs)(W.Z,{children:[(0,e.jsx)(we.Z,{})," \u4E0A\u4F20\u56FE\u7247"]})}))},De=Te,Ie=function(i){var n=i.visible,a=i.onCancel,C=i.onCreated,S=(0,w.useState)(),U=(0,F.Z)(S,2),N=U[0],B=U[1],T=(0,w.useState)([]),l=(0,F.Z)(T,2),m=l[0],D=l[1],I=(0,w.useState)([]),Y=(0,F.Z)(I,2),b=Y[0],J=Y[1],V=(0,w.useState)(10),A=(0,F.Z)(V,2),R=A[0],L=A[1],Q=(0,P.md)(),z=M.Z.useForm(),K=(0,F.Z)(z,1),j=K[0],X=function(){j.validateFields().then(function(v){C((0,Z.Z)({},v),j),D([])}).catch(function(v){var s=v.errorFields;s.length>0&&O.default.error("\u8BF7\u5B8C\u6210\u5FC5\u586B\u9879\u5185\u5BB9")})},f=function(v){var s=v.file,d=v.fileList;if(s.status==="done"){d=d.map(function(E){return console.log(E),E.response&&(E.url=E.response.url,E.thumbUrl=E.response.thumbUrl),E});var p=d.map(function(E){return E.url});j.setFieldsValue((0,Z.Z)((0,Z.Z)({},j),{},{files:p,path:p[0]}))}D(d)},u=function(v){var s=j.getFieldValue("files");s.splice(s.findIndex(function(d){return d===v.url}),1),j.setFieldsValue((0,Z.Z)((0,Z.Z)({},j),{},{files:s,path:""}))},o=function(){var c=(0,y.Z)(r().mark(function v(s){var d,p;return r().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:x.t0=s,x.next=x.t0===20?3:x.t0===30?8:13;break;case 3:return x.next=5,Ze();case 5:return d=x.sent,d.status==="success"&&(L(s),B(d.data)),x.abrupt("break",14);case 8:return x.next=10,xe();case 10:return p=x.sent,p.status==="success"&&(L(s),J(p.data)),x.abrupt("break",14);case 13:L(s);case 14:case"end":return x.stop()}},v)}));return function(s){return c.apply(this,arguments)}}(),g=[{value:10,label:"\u5168\u90E8\u901A\u77E5"},{value:20,label:"\u6839\u636E\u90E8\u95E8"},{value:30,label:"\u6839\u636E\u4EBA\u5458"}];return(0,e.jsx)(le.Z,{title:"\u65B0\u5EFA\u516C\u544A",width:650,visible:n,onClose:function(){return a(j)},maskClosable:!1,footer:(0,e.jsx)("div",{style:{textAlign:"right",marginRight:10},children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(W.Z,{onClick:function(){return a(j)},style:{marginRight:10},children:"\u5173\u95ED"}),(0,e.jsx)(W.Z,{type:"primary",onClick:X,children:"\u4FDD\u5B58"})]})}),children:(0,e.jsx)(M.Z,{layout:"vertical",form:j,onFinish:X,children:(0,e.jsxs)(ue.Z,{gutter:[16,16],children:[(0,e.jsx)(H.Z,{span:24,children:(0,e.jsx)(M.Z.Item,{name:"type",label:"\u901A\u77E5\u7C7B\u578B",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u901A\u77E5\u7C7B\u578B"}],children:(0,e.jsx)(oe.Z,{allowClear:!0,placeholder:"\u8BF7\u9009\u62E9\u901A\u77E5\u7C7B\u578B",options:g,onChange:o})})}),R===20&&(0,e.jsx)(H.Z,{span:24,children:(0,e.jsx)(M.Z.Item,{name:"key",label:"\u9009\u62E9\u90E8\u95E8",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u901A\u77E5\u90E8\u95E8"}],children:(0,e.jsx)(Ee.Z,{style:{width:"100%"},dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:N,placeholder:"\u8BF7\u9009\u62E9\u901A\u77E5\u90E8\u95E8",treeDefaultExpandAll:!0,multiple:!0,showSearch:!0})})}),R===30&&(0,e.jsx)(H.Z,{span:24,children:(0,e.jsx)(M.Z.Item,{name:"key",label:"\u9009\u62E9\u4EBA\u5458",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u901A\u77E5\u4EBA\u5458"}],children:(0,e.jsx)(oe.Z,{allowClear:!0,placeholder:"\u8BF7\u9009\u62E9\u901A\u77E5\u4EBA\u5458",options:b,mode:"multiple"})})}),(0,e.jsx)(H.Z,{span:24,children:(0,e.jsx)(M.Z.Item,{name:"title",label:"\u6807\u9898",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u6807\u9898"}],children:(0,e.jsx)(ie.Z,{allowClear:!0,placeholder:"\u8BF7\u586B\u5199\u6807\u9898"})})}),(0,e.jsx)(H.Z,{span:24,children:(0,e.jsx)(M.Z.Item,{name:"content",label:"\u5185\u5BB9",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u5185\u5BB9"}],children:(0,e.jsx)(ie.Z.TextArea,{rows:4,placeholder:"\u8BF7\u586B\u5199\u5185\u5BB9"})})}),(0,e.jsx)(H.Z,{span:24,children:(0,e.jsx)(M.Z.Item,{name:"files",label:"\u4E0A\u4F20\u56FE\u7247",children:(0,e.jsx)(De,{fileList:m,onDone:f,onRemove:u})})})]})})})},be=Ie,qe=t(12968),Ae=t(62462),_e=t(98858),G=t(4914),et=t(71153),ce=t(60331),Re=t(30381),Le=t.n(Re),Oe=function(i){var n=i.fields,a=i.visible,C=i.onCancel,S=[{value:10,label:"\u5168\u5458\u901A\u77E5"},{value:20,label:"\u90E8\u95E8\u901A\u77E5"},{value:30,label:"\u4EBA\u5458\u901A\u77E5"}],U=function(){var l=S.find(function(m){return m.value===(n==null?void 0:n.type)});return(0,e.jsx)(ce.Z,{color:"green",children:l==null?void 0:l.label},l==null?void 0:l.value)},N=[{value:10,label:"\u5F85\u53D1\u5E03"},{value:40,label:"\u5DF2\u64A4\u56DE"},{value:80,label:"\u5DF2\u53D1\u5E03"}],B=function(){var l=N.find(function(m){return m.value===(n==null?void 0:n.status)});return(0,e.jsx)(ce.Z,{color:"blue",children:l==null?void 0:l.label},l==null?void 0:l.value)};return(0,e.jsx)(le.Z,{width:800,visible:a,onClose:C,closable:!0,footer:(0,e.jsx)("div",{style:{textAlign:"right",marginRight:10},children:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(W.Z,{onClick:C,children:"\u5173\u95ED"})})}),children:n&&(0,e.jsxs)(G.Z,{title:"\u516C\u544A\u8BE6\u60C5",children:[(0,e.jsx)(G.Z.Item,{label:"\u65F6\u95F4",children:Le()(n.created_at).format("YYYY.MM.DD HH:mm:ss")}),(0,e.jsx)(G.Z.Item,{label:"\u7C7B\u522B",children:n!=null&&n.type?U():"-"}),(0,e.jsx)(G.Z.Item,{label:"\u72B6\u6001",children:n!=null&&n.status?B():"-"}),(0,e.jsx)(G.Z.Item,{label:"\u6807\u9898",span:3,children:n==null?void 0:n.title}),(0,e.jsx)(G.Z.Item,{label:"\u5185\u5BB9",span:3,children:n!=null&&n.content?n==null?void 0:n.content:"-"}),n.files&&n.files.length>0&&(0,e.jsx)(G.Z.Item,{label:"\u56FE\u7247",span:3,children:(0,e.jsx)(ue.Z,{gutter:16,children:n.files.map(function(T,l){return(0,e.jsx)(H.Z,{className:"gutter-row",span:6,children:(0,e.jsx)(Ae.Z,{src:T})},l)})})})]})})},Pe=Oe,Me=function(){var i=(0,w.useState)(!1),n=(0,F.Z)(i,2),a=n[0],C=n[1],S=(0,w.useRef)(),U=(0,w.useState)(),N=(0,F.Z)(U,2),B=N[0],T=N[1],l=(0,w.useState)([]),m=(0,F.Z)(l,2),D=m[0],I=m[1],Y=(0,w.useState)(!1),b=(0,F.Z)(Y,2),J=b[0],V=b[1],A=(0,P.md)(),R=function(){var f=(0,y.Z)(r().mark(function u(o){return r().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:he.Z.confirm({icon:(0,e.jsx)(pe.Z,{}),title:"\u63D0\u793A",content:"\u5220\u9664\u540E\u65E0\u6CD5\u663E\u793A\uFF0C\u786E\u5B9A\u8981\u6279\u91CF\u5220\u9664\u9009\u62E9\u9879\uFF1F",onOk:function(){Ce({key:o.map(function(s){return s.id})}).then(function(s){if(s.status==="success"){var d,p;I([]),(d=S.current)===null||d===void 0||(p=d.reloadAndRest)===null||p===void 0||p.call(d),O.default.success("\u64CD\u4F5C\u6210\u529F")}})}});case 1:case"end":return c.stop()}},u)}));return function(o){return f.apply(this,arguments)}}(),L=function(){var f=(0,y.Z)(r().mark(function u(o,g){var c,v,s;return r().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,je(o);case 2:c=p.sent,c.status==="success"&&(g.resetFields(),V(!1),(v=S.current)===null||v===void 0||(s=v.reloadAndRest)===null||s===void 0||s.call(v),O.default.success("\u64CD\u4F5C\u6210\u529F"));case 4:case"end":return p.stop()}},u)}));return function(o,g){return f.apply(this,arguments)}}(),Q=function(){var f=(0,y.Z)(r().mark(function u(o){var g,c,v;return r().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(!o){d.next=5;break}return d.next=3,Se({id:o});case 3:g=d.sent,g.status==="success"&&((c=S.current)===null||c===void 0||(v=c.reloadAndRest)===null||v===void 0||v.call(c),O.default.success("\u64CD\u4F5C\u6210\u529F"));case 5:case"end":return d.stop()}},u)}));return function(o){return f.apply(this,arguments)}}(),z=function(){var u=A.canNoticeCreated;return u?(0,e.jsx)(W.Z,{type:"primary",onClick:function(){return V(!0)},children:"\u65B0\u589E"}):null},K=function(){var u=A.canNoticeDeleted;return u?(0,e.jsx)(W.Z,{danger:!0,type:"primary",onClick:(0,y.Z)(r().mark(function o(){return r().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,R(D);case 2:case"end":return c.stop()}},o)})),children:(0,e.jsx)(P._H,{id:"pages.searchTable.batchDeletion",defaultMessage:"Batch deletion"})}):null},j=(0,P.YB)(),X=[{title:"\u6807\u9898",dataIndex:"title",key:"title",width:150,ellipsis:!0},{title:"\u8BE6\u60C5",dataIndex:"content",key:"content",width:200,hideInSearch:!0,ellipsis:!0},{title:"\u7C7B\u578B",dataIndex:"type",filters:!0,onFilter:!0,width:150,valueType:"select",valueEnum:{10:{text:"\u5168\u5458\u901A\u77E5"},20:{text:"\u90E8\u95E8\u901A\u77E5"},30:{text:"\u4EBA\u5458\u901A\u77E5"}}},{title:"\u72B6\u6001",dataIndex:"status",filters:!0,onFilter:!0,width:150,valueType:"select",valueEnum:{10:{text:"\u5F85\u53D1\u5E03",status:"Processing"},40:{text:"\u5DF2\u64A4\u56DE",status:"Error"},80:{text:"\u5DF2\u53D1\u5E03",status:"Success"}}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"created_at",key:"created_at",valueType:"dateTime",hideInSearch:!0,sorter:function(u,o){return u.created_at-o.created_at}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"created_at",valueType:"dateRange",hideInTable:!0,search:{transform:function(u){return{startTime:u[0],endTime:u[1]}}}},{title:(0,e.jsx)(P._H,{id:"pages.searchTable.titleOption",defaultMessage:"\u64CD\u4F5C"}),dataIndex:"option",valueType:"option",render:function(u,o){return[(0,e.jsx)("a",{onClick:function(){T(o),C(!0)},children:"\u8BE6\u60C5"},"a"),(0,e.jsx)(P.Nv,{accessible:A.canNoticeWithdraw,fallback:(0,e.jsx)("a",{style:{padding:0},onClick:function(){return O.default.error("\u60A8\u6CA1\u6709\u6743\u9650")},children:"-"}),children:(0,e.jsx)(de.Z,{title:"\u786E\u8BA4\u8981\u64A4\u56DE\u8BE5\u901A\u77E5?",onConfirm:function(){return Q(o.id)},okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",children:(0,e.jsx)("a",{style:{padding:0},children:"\u64A4\u56DE"})})},"b")]}}];return(0,e.jsxs)(fe.ZP,{children:[(0,e.jsx)(ge.ZP,{headerTitle:j.formatMessage({id:"pages.searchTable.title",defaultMessage:"Enquiry form"}),actionRef:S,rowKey:"id",search:{labelWidth:120},toolBarRender:function(){return[(0,e.jsx)(z,{})]},request:function(){var f=(0,y.Z)(r().mark(function u(o,g,c){return r().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",ye((0,Z.Z)((0,Z.Z)({},o),g)));case 1:case"end":return s.stop()}},u)}));return function(u,o,g){return f.apply(this,arguments)}}(),columns:X,rowSelection:{onChange:function(u,o){I(o)}}}),(D==null?void 0:D.length)>0&&(0,e.jsx)(me.Z,{extra:(0,e.jsxs)("div",{children:[(0,e.jsx)(P._H,{id:"pages.searchTable.chosen",defaultMessage:"Chosen"})," ",(0,e.jsx)("a",{style:{fontWeight:600},children:D.length})," ",(0,e.jsx)(P._H,{id:"pages.searchTable.item",defaultMessage:"\u9879"})]}),children:(0,e.jsx)(K,{})}),(0,e.jsx)(be,{visible:J,onCreated:L,onCancel:function(u){V(!1),u.resetFields()}}),(0,e.jsx)(Pe,{fields:B,visible:a,onCancel:function(){return C(!1)}})]})},$e=Me}}]);
