(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{17:function(t,e,n){t.exports={item:"ContactList_item__w0nYq",btn:"ContactList_btn__3uEGf"}},21:function(t,e,n){t.exports={label:"Filter_label__h-W-U",input:"Filter_input__QgBIh"}},22:function(t,e,n){t.exports={title:"Section_title__dph5V"}},23:function(t,e,n){t.exports={container:"Container_container__3vaGu"}},48:function(t,e,n){},50:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),o=n(11),i=n.n(o),s=n(6),l=n(8),u=n(12),b=n(13),d=n(16),j=n(15),h=n(9),m=n.n(h),p=n(51),O=n(5),f=n(3),C={addContact:Object(f.b)("phonebook/addContact",(function(t){return{payload:Object(l.a)({id:Object(p.a)()},t)}})),deleteContact:Object(f.b)("phonebook/deleteContact"),changeFilter:Object(f.b)("phonebook/changeFilter")},x=n(7),_=n.n(x),g=n(1),v={name:"",number:""},y=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state=Object(l.a)({},v),t.nameInputId=m.a.generate(),t.numberInputId=m.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(s.a)({id:Object(p.a)()},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState(Object(l.a)({},v))},t}return Object(b.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{children:Object(g.jsxs)("form",{className:_.a.form,onSubmit:this.handleSubmit,children:[Object(g.jsxs)("label",{className:_.a.label,htmlFor:this.nameInputId,children:["Name",Object(g.jsx)("input",{className:_.a.input,type:"text",name:"name",id:this.nameInputId,value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange})]}),Object(g.jsxs)("label",{htmlFor:this.numberInputId,children:["Number",Object(g.jsx)("input",{className:_.a.input,type:"tel",name:"number",id:this.numberInputId,value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange})]}),Object(g.jsx)("button",{className:_.a.btn,type:"submit",children:"Add contact"})]})})}}]),n}(c.Component),k=Object(O.b)(null,(function(t){return{onSubmit:function(e){return t(C.addContact(e))}}}))(y),F=n(17),N=n.n(F),I=function(t,e){var n=t.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},w=Object(O.b)((function(t){var e=t.phonebook,n=e.filter,a=e.contacts;return{contacts:I(n,a)}}),(function(t){return{onDeleteContact:function(e){return t(C.deleteContact(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return e.length?Object(g.jsx)("ul",{className:N.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(g.jsxs)("li",{className:N.a.item,children:[a,": ",c,Object(g.jsx)("button",{className:N.a.btn,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))}):Object(g.jsx)("p",{children:"You have no contacts in your list"})})),S=n(21),A=n.n(S),z=m.a.generate(),D=Object(O.b)((function(t){return{value:t.phonebook.filter}}),(function(t){return{onChange:function(e){return t(C.changeFilter(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(g.jsxs)("label",{className:A.a.label,htmlFor:z,children:["Find contacts by name",Object(g.jsx)("input",{className:A.a.input,id:z,type:"text",value:e,onChange:n})]})})),L=n(23),q=n.n(L),B=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{className:q.a.container,children:this.props.children})}}]),n}(c.Component),J=n(22),M=n.n(J),Z=function(t){var e=t.title,n=t.children;return Object(g.jsxs)("section",{className:M.a.section,children:[Object(g.jsx)("h2",{className:M.a.title,children:e}),n]})},E=function(){return Object(g.jsxs)(B,{children:[Object(g.jsx)(Z,{title:"Phonebook",children:Object(g.jsx)(k,{})}),Object(g.jsxs)(Z,{title:"Contacts",children:[Object(g.jsx)(D,{}),Object(g.jsx)(w,{})]})]})},G=n(14),Q=n(2),T=Object(f.c)([],(a={},Object(s.a)(a,C.addContact,(function(t,e){var n=e.payload;return t.find((function(t){return t.name===n.name}))?(alert("".concat(n.name," is alredy in contacts")),t):[].concat(Object(G.a)(t),[n])})),Object(s.a)(a,C.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),U=Object(f.c)("",Object(s.a)({},C.changeFilter,(function(t,e){return e.payload}))),Y=Object(Q.b)({contacts:T,filter:U}),P=n(24),R=n.n(P),V=n(4),W=n(25),$=n.n(W),H=[].concat(Object(G.a)(Object(f.d)({serializableCheck:{ignoredActions:[V.a,V.f,V.b,V.c,V.d,V.e]}})),[R.a]),K={key:"contacts",storage:$.a,blacklist:["filter"]},X=Object(f.a)({reducer:{phonebook:Object(V.g)(K,Y)},middleware:H,devTools:!1}),tt={store:X,persistor:Object(V.h)(X)},et=n(26);n(48),n(49);i.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(O.a,{store:tt.store,children:Object(g.jsx)(et.a,{loading:null,persistor:tt.persistor,children:Object(g.jsx)(E,{})})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={form:"ContactForm_form__40RkM",label:"ContactForm_label__DfbUu",input:"ContactForm_input__3lg1Q",btn:"ContactForm_btn__34LfF"}}},[[50,1,2]]]);
//# sourceMappingURL=main.d26b5def.chunk.js.map