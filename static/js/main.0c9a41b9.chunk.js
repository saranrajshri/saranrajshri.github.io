(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{54:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(1),i=a.n(s),n=a(14),r=a.n(n),l=(a(54),a(15)),o=a(47),j=a(5),d=a(18),h=a(45),b=a(22),O=a.n(b),m=(a(73),a(4)),x=Object(s.createContext)(),u={isDarkModeEnabled:!1,socialMediaLinks:{resume:"#",linkedIn:"http://linkedin.com/in/saranrajshri",github:"http://github.com/saranrajshri",leetCode:"https://leetcode.com/saranrajshri/",codeChef:"https://www.codechef.com/users/saranrajshri",hackerRank:"https://www.hackerrank.com/shrisaranraj",email:"shrisaranraj2001@gmail.com"},projects:[{date:"May 2020",title:"Postman-ify (Postman Clone)",descriptionParagraph1:"A Duplicate version of Postman desktop app built on top of Electron and React. This application can be used test API's.",descriptionParagraph2:"Some of the features of this application are Working on multiple tabs, test GET and POST methods, View response JSON data, etc.",sourceCodeLink:"https://github.com/saranrajshri/Postman-Clone"},{date:"April 2020",title:"Sentiment Analaysis and Visualization Dashboard On Covid-19 Tweets",descriptionParagraph1:"This is one of the award winning projects of IBM Hack Challenge 2020.",descriptionParagraph2:"This application is used to collect the live tweets about COVID-19. It analyzes the data and visualizes the current sentiment and emotion levels of the people in India.",sourceCodeLink:"https://github.com/saranrajshri/tweezy"},{date:"March 2020",title:"Algorithm Visualization Gallery",descriptionParagraph1:"An interactive react-based application that shows how algorithms works by animating each and every step.",descriptionParagraph2:"It consists of various algorithms such as Sorting, Searching, Backtracking, Dynamic Programming, etc",sourceCodeLink:"https://github.com/saranrajshri/Algorithm-Visualizer"},{date:"Septemeber 2019",title:"Friend Affinity Finder",descriptionParagraph1:"Selected as one of the top 30 projects of IBM Hack Challenge 2019.",descriptionParagraph2:"A web-based application that finds the person matching to your character and interests  using Machine Learning.",sourceCodeLink:"https://github.com/saranrajshri/IBM-Hack-Challenge-2019"}]},p=function(e,t){switch(t.type){default:case"SET_DARK_MODE":return Object(l.a)(Object(l.a)({},e),{},{isDarkModeEnabled:t.payload})}},v=function(e){var t=Object(s.useReducer)(p,u),a=Object(m.a)(t,2),i=a[0],n=a[1];return Object(c.jsx)(x.Provider,{value:[i,n],children:e.children})},_=function(){window.scrollTo({top:0,behavior:"smooth"})},f=(a(74),function(){return Object(c.jsxs)("div",{className:"customDivider",children:[Object(c.jsx)("div",{className:"customDivider__left"}),Object(c.jsxs)("div",{className:"customDivider__center",children:[Object(c.jsx)("div",{className:"customDivider__centerBlueHalf"}),Object(c.jsx)("div",{className:"customDivider__centerGreyHalf"})]}),Object(c.jsx)("div",{className:"customDivider__right"})]})}),g=a(46),N=a.n(g),y=(a(76),a(8)),k=a(9),L=function(){var e=Object(s.useState)(!1),t=Object(m.a)(e,2),a=(t[0],t[1]),i=Object(s.useContext)(x),n=Object(m.a)(i,2),r=n[0],l=n[1];return Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("div",{className:"header__logo",children:Object(c.jsxs)("a",{href:"/#/#",children:["Shri",Object(c.jsx)("span",{className:"header__logoBold",children:"SaranRaj"})]})}),Object(c.jsxs)("div",{className:"header__menu",children:[Object(c.jsxs)("div",{className:"header__menuList",children:[Object(c.jsx)("a",{href:"/#/",children:"Home"}),Object(c.jsx)("a",{href:"/#/projects",children:"Projects"}),Object(c.jsx)("a",{href:"/#/achievements",children:"Achievements"}),Object(c.jsx)("a",{href:"/#/contact",children:"Contact"}),Object(c.jsx)("a",{href:"/#",children:Object(c.jsx)(N.a,{height:14,width:30,uncheckedIcon:!1,onChange:function(e){return function(e){a(e),l({type:"SET_DARK_MODE",payload:e}),e?document.getElementsByTagName("HTML")[0].setAttribute("data-theme","dark"):document.getElementsByTagName("HTML")[0].setAttribute("data-theme","light")}(e)},checked:r.isDarkModeEnabled})})]}),Object(c.jsx)("div",{className:"header__hamBurger",children:Object(c.jsx)(y.a,{icon:k.c})})]})]})},w=a(3),M=(a(79),function(e){var t=void 0!==e.delayDuration?e.delayDuration:3,a=Object(s.useContext)(x),i=Object(m.a)(a,1)[0],n=Object(s.useState)(!1),r=Object(m.a)(n,2),l=r[0],o=r[1],j=Object(s.useState)(0),d=Object(m.a)(j,2),h=d[0],b=d[1];return Object(s.useEffect)((function(){window.addEventListener("scroll",(function(){var e=window.scrollY;o(!0),b(e)}),!1)}),[h]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(w.a.div,{initial:{opacity:0},animate:{opacity:l?1:0},transition:{delay:t,duration:2},children:[Object(c.jsxs)("div",{className:"footer",children:[Object(c.jsx)("div",{className:"footer__left"}),Object(c.jsx)("div",{className:"footer__center",children:Object(c.jsxs)("p",{className:"footer__shortText",children:["If you have any questions or just want to say hello, don't hesitate to",Object(c.jsxs)("a",{href:"mailto:".concat(i.socialMediaLinks.email),children:[" ","send an email"]})]})}),Object(c.jsx)("div",{className:"footer__right"})]}),Object(c.jsx)(f,{}),Object(c.jsx)("center",{children:Object(c.jsxs)("div",{className:"footer__bottomLinks",children:[Object(c.jsxs)("div",{className:"footer_menu",children:[Object(c.jsx)("a",{href:"/#/",children:"Home"}),Object(c.jsx)("a",{href:"/#/projects",children:"Projects"}),Object(c.jsx)("a",{href:"/#/achievements",children:"Achievements"}),Object(c.jsx)("a",{href:"/#/#",children:"Blog"}),Object(c.jsx)("a",{href:"/#/contact",children:"Contact"})]}),Object(c.jsxs)("p",{className:"footer__tradeMark",children:["Made with ",Object(c.jsx)(y.a,{icon:k.d})," Shri Saran Raj"]})]})})]})})}),C=(a(80),a.p+"static/media/avatar-capped.071f2a80.png"),S=function(){var e=Object(s.useState)(!1),t=Object(m.a)(e,2),a=t[0],i=t[1],n=Object(s.useState)(0),r=Object(m.a)(n,2),l=r[0],o=r[1];return Object(s.useEffect)((function(){window.addEventListener("scroll",(function(){var e=window.scrollY;i(!0),o(e)}),!1)}),[l]),Object(c.jsxs)(c.Fragment,{children:[" ",Object(c.jsxs)(w.a.div,{initial:{opacity:0},animate:{opacity:a?1:0},transition:{delay:2,duration:2},children:[Object(c.jsxs)("div",{className:"aboutMe",children:[Object(c.jsx)("div",{className:"aboutMe__left"}),Object(c.jsxs)("div",{className:"aboutMe__center",children:[Object(c.jsxs)("div",{className:"aboutMe__header",children:[Object(c.jsx)("div",{className:"aboutMe__avatar",children:Object(c.jsx)("img",{src:C,alt:"avatar"})}),Object(c.jsxs)("div",{className:"aboutMe__title",children:[Object(c.jsx)("div",{className:"aboutMe__titleUpper",children:"About"}),Object(c.jsx)("div",{className:"aboutMe__titleBelow",children:"Read more about me"})]})]}),Object(c.jsxs)("p",{className:"aboutMe__shortText",children:["I'm from Chennai, TamilNadu. I started writing code since my"," ",Object(c.jsx)("span",{className:"aboutMe__boldText",children:"9th Grade."})," From that time I got"," ",Object(c.jsx)("span",{className:"aboutMe__boldText",children:"addicted to programming."})]}),Object(c.jsxs)("p",{className:"aboutMe__shortText",children:["I started off with"," ",Object(c.jsx)("span",{className:"aboutMe__boldText",children:"HTML, CSS, JS and PHP"}),". Then, I moved to"," ",Object(c.jsx)("span",{className:"aboutMe__boldText",children:"React.js for FrontEnd and Node.js for Backend"}),". I have participated in many hackathons and I have also won some",Object(c.jsxs)("span",{className:"aboutMe__boldText",children:[" ","National Level Hackathons."]})]})," ",Object(c.jsxs)("p",{className:"aboutMe__shortText",children:["I have done couple of internships as a"," ",Object(c.jsx)("span",{className:"aboutMe__boldText",children:"Software Developer Intern and FrontEnd Development Intern"}),". I also do freelancing projects."]}),Object(c.jsxs)("p",{className:"aboutMe__shortText",children:["Parallely, I'm trying to improve"," ",Object(c.jsx)("span",{className:"aboutMe__boldText",children:"competitive programming skills"})," ","and",Object(c.jsxs)("span",{className:"aboutMe__boldText",children:[" ","Data Structures and Algorithms Knowledge"]}),"."]})]}),Object(c.jsx)("div",{className:"aboutMe__right"})]}),Object(c.jsx)(f,{})]})]})},E=a(16),I=(a(88),a.p+"static/media/avatar.81ac0ea1.png"),T=function(){return Object(c.jsx)(E.Element,{name:"centerBanner",children:Object(c.jsxs)("div",{className:"banner",children:[Object(c.jsx)("div",{className:"banner__avatar",children:Object(c.jsx)("img",{src:I,alt:"avatar"})}),Object(c.jsx)(w.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:2},children:Object(c.jsx)("div",{className:"banner__title",children:Object(c.jsx)("h1",{className:"banner__titleText",children:"Hii! I'm Saran Raj"})})}),Object(c.jsx)(w.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:3,duration:2},children:Object(c.jsx)(w.a.div,{whileHover:{y:-3},children:Object(c.jsx)(E.Link,{activeClass:"active",to:"centerBanner",spy:!0,smooth:!0,offset:400,duration:500,children:Object(c.jsxs)("button",{className:"banner__exploreButton",children:["EXPLORE",Object(c.jsx)(y.a,{icon:k.a,style:{marginLeft:10}})]})})})})]})})},B=(a(89),function(){var e=Object(s.useContext)(x),t=Object(m.a)(e,1)[0],a=Object(s.useState)(!1),i=Object(m.a)(a,2),n=i[0],r=i[1],l=Object(s.useState)(0),o=Object(m.a)(l,2),j=o[0],d=o[1];return Object(s.useEffect)((function(){window.addEventListener("scroll",(function(){var e=window.scrollY;r(!0),d(e)}),!1)}),[j]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(w.a.div,{initial:{opacity:0},animate:{opacity:n?1:0},transition:{duration:2},children:[Object(c.jsxs)("div",{className:"shortIntro",children:[Object(c.jsx)("div",{className:"shortIntro__left"}),Object(c.jsxs)("div",{className:"shortIntro__center",children:[Object(c.jsx)("p",{children:"My Name is Shri Saran Raj. I'm a 3rd Year CSE Student and I'm a Full Stack Web and Mobile app developer."}),Object(c.jsxs)("p",{className:"shortIntro__shortText",children:["I am currently looking to SDE oportunities. If you want, you can view my"," ",Object(c.jsx)("a",{href:"".concat(t.socialMediaLinks.linkedIn),target:"_blank",rel:"noreferrer",children:"LinkedIn profile"}),", download my",Object(c.jsxs)("a",{href:"".concat(t.socialMediaLinks.resume),target:"_blank",rel:"noreferrer",children:[" ","updated resume"]})," ","or see my latest work in"," ",Object(c.jsx)("a",{href:"".concat(t.socialMediaLinks.github),target:"_blank",rel:"noreferrer",children:"GitHub"})]}),Object(c.jsxs)("p",{className:"shortIntro__shortText",children:["I also do competitive programming. I regularly practice on"," ",Object(c.jsx)("a",{href:"".concat(t.socialMediaLinks.leetCode),target:"_blank",rel:"noreferrer",children:"LeetCode"}),",",Object(c.jsxs)("a",{href:"".concat(t.socialMediaLinks.codeChef),target:"_blank",rel:"noreferrer",children:[" ","CodeChef"]}),","," ",Object(c.jsxs)("a",{href:"".concat(t.socialMediaLinks.hackerRank),target:"_blank",rel:"noreferrer",children:[" ","HackerRank"]})]})]}),Object(c.jsx)("div",{className:"shortIntro__right"})]}),Object(c.jsx)(f,{})]})})}),D=(a(90),a.p+"static/media/notes.64f1f7d6.png"),P=function(){return Object(c.jsx)(E.Element,{name:"banner",children:Object(c.jsxs)(w.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:[Object(c.jsxs)("div",{className:"banner",children:[Object(c.jsx)("div",{className:"banner__avatar",children:Object(c.jsx)("img",{src:D,alt:"avatar"})}),Object(c.jsxs)("div",{className:"banner__title",children:[Object(c.jsx)("h4",{children:"My Projects"}),Object(c.jsx)(w.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:Object(c.jsx)(w.a.div,{whileHover:{y:-3},children:Object(c.jsx)(E.Link,{activeClass:"active",to:"banner",spy:!0,smooth:!0,offset:400,duration:500,children:Object(c.jsxs)("button",{className:"banner__exploreButton",children:["EXPLORE",Object(c.jsx)(y.a,{icon:k.a,style:{marginLeft:10}})]})})})})]})]}),Object(c.jsx)(f,{})]})})},F=(a(91),function(){var e=Object(s.useContext)(x),t=Object(m.a)(e,1)[0];return Object(c.jsxs)("div",{className:"projectsList",children:[Object(c.jsx)("div",{className:"projectsList__left"}),Object(c.jsx)("div",{className:"projectsList__center",children:t.projects.map((function(e,t){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(w.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3,duration:1},children:[Object(c.jsxs)("div",{className:"projectsListItem",children:[Object(c.jsx)("div",{className:"project__title",children:Object(c.jsx)("h6",{children:e.title})}),Object(c.jsx)("p",{children:e.descriptionParagraph1}),Object(c.jsx)("p",{children:e.descriptionParagraph2}),Object(c.jsxs)("a",{href:"".concat(e.sourceCodeLink),target:"_blank",rel:"noreferrer",children:["Read more"," ",Object(c.jsx)(y.a,{icon:k.b,style:{marginLeft:5}})]})]},t),Object(c.jsx)(f,{})]})})}))}),Object(c.jsx)("div",{className:"projectsList__right"})]})}),R=(a(92),a.p+"static/media/cup.ca2aff75.png"),H=function(){return Object(c.jsx)(E.Element,{name:"banner",children:Object(c.jsxs)(w.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:[Object(c.jsxs)("div",{className:"banner",children:[Object(c.jsx)("div",{className:"banner__avatar",children:Object(c.jsx)("img",{src:R,alt:"avatar"})}),Object(c.jsxs)("div",{className:"banner__title",children:[Object(c.jsx)("h2",{children:"My Achievements and Skills"}),Object(c.jsx)(w.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:Object(c.jsx)(w.a.div,{whileHover:{y:-3},children:Object(c.jsx)(E.Link,{activeClass:"active",to:"banner",spy:!0,smooth:!0,offset:400,duration:500,children:Object(c.jsxs)("button",{className:"banner__exploreButton",children:["EXPLORE",Object(c.jsx)(y.a,{icon:k.a,style:{marginLeft:10}})]})})})})]})]}),Object(c.jsx)(f,{})]})})},A=(a(93),function(){var e=Object(s.useState)(!1),t=Object(m.a)(e,2),a=t[0],i=t[1],n=Object(s.useState)(0),r=Object(m.a)(n,2),l=r[0],o=r[1];return Object(s.useEffect)((function(){window.addEventListener("scroll",(function(){var e=window.scrollY;i(!0),o(e)}),!1)}),[l]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(w.a.div,{initial:{opacity:0},animate:{opacity:a?1:0},transition:{duration:2},children:[Object(c.jsxs)("div",{className:"achievementsList",children:[Object(c.jsx)("div",{className:"achievementsList__left"}),Object(c.jsxs)("div",{className:"achievementsList__center",children:[Object(c.jsx)("h1",{children:"Achievements"}),Object(c.jsxs)("p",{children:["I have participated in"," ",Object(c.jsx)("span",{className:"achievementsList__textBold",children:"many hackathons and other coding competitions"}),". I won some national level hackathons in India."]}),Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{className:"achievementsList__textBold",children:"Smart India Hackathon 2019"})," ","Runner"]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{className:"achievementsList__textBold",children:"TechGig Code Gladiators 2019"})," ","Top 15 Finalist"]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{className:"achievementsList__textBold",children:"IBM Hack Challenge 2019"})," ","Top 30 Finalist"]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{className:"achievementsList__textBold",children:"HERE Location Campus Hackathon"})," ","Winner"]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{className:"achievementsList__textBold",children:"Smart India Hackathon 2020"})," ","Winner"," "]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{className:"achievementsList__textBold",children:"TechGig Code Gladiators 2020"})," ","Finalist"]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{className:"achievementsList__textBold",children:"IBM Hack Challenge 2020"})," ","Winner"]})]})]}),Object(c.jsx)("div",{className:"achievementsList__right"})]}),Object(c.jsx)(f,{})]})})}),G=(a(94),function(){var e=Object(s.useState)(!1),t=Object(m.a)(e,2),a=t[0],i=t[1],n=Object(s.useState)(0),r=Object(m.a)(n,2),l=r[0],o=r[1];return Object(s.useEffect)((function(){window.addEventListener("scroll",(function(){var e=window.scrollY;i(!0),o(e)}),!1)}),[l]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(w.a.div,{initial:{opacity:0},animate:{opacity:a?1:0},transition:{delay:1.5,duration:2},children:[Object(c.jsxs)("div",{className:"skillsList",children:[Object(c.jsx)("div",{className:"skillsList__left"}),Object(c.jsxs)("div",{className:"skillsList__center",children:[Object(c.jsx)("h1",{children:"Skills"}),Object(c.jsxs)("div",{className:"skillsListContainer",children:[Object(c.jsxs)("div",{className:"skillsListContainer__section",children:[Object(c.jsx)("h3",{children:"Languages"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"C / C++"}),Object(c.jsx)("li",{children:"Java"}),Object(c.jsx)("li",{children:"Python"}),Object(c.jsx)("li",{children:"JavaScript"}),Object(c.jsx)("li",{children:"Dart"})]})]}),Object(c.jsxs)("div",{className:"skillsListContainer__section",children:[Object(c.jsx)("h3",{children:"Frame Works"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"React.js"}),Object(c.jsx)("li",{children:"Express"}),Object(c.jsx)("li",{children:"React Native"}),Object(c.jsx)("li",{children:"Flutter"}),Object(c.jsx)("li",{children:"Selenium"})]})]}),Object(c.jsxs)("div",{className:"skillsListContainer__section",children:[" ",Object(c.jsx)("h3",{children:"Database"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"SQL"}),Object(c.jsx)("li",{children:"MongoDB"}),Object(c.jsx)("li",{children:"Firebase"})]})]}),Object(c.jsxs)("div",{className:"skillsListContainer__section",children:[" ",Object(c.jsx)("h3",{children:"Other Tools"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"Git"}),Object(c.jsx)("li",{children:"Docker"}),Object(c.jsx)("li",{children:"Azure"})]})]})]})]}),Object(c.jsx)("div",{className:"skillsList__right"})]}),Object(c.jsx)(f,{})]})})}),Y=a(21),z=(a(95),{BASE_URL:"https://saranrajshri.herokuapp.com/api/"}),W=function(){var e=Object(d.c)(),t=Object(s.useState)({name:"",email:"",description:""}),a=Object(m.a)(t,2),i=a[0],n=a[1],r=function(e){n(Object(l.a)(Object(l.a)({},i),{},Object(Y.a)({},e.target.name,e.target.value)))};return Object(c.jsx)("div",{className:"contactFormWrapper",children:Object(c.jsxs)(w.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:[Object(c.jsxs)("div",{className:"banner",children:[Object(c.jsx)("div",{className:"banner__avatar",children:Object(c.jsx)("img",{src:I,alt:"avatar"})}),Object(c.jsx)("div",{className:"contactForm__title",children:Object(c.jsx)("h3",{children:"Send me a message "})}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"contactFrom__formContainer",children:[Object(c.jsx)("input",{type:"text",placeholder:"Your Name",name:"name",onChange:r,value:i.name,className:"contactForm__input"}),Object(c.jsx)("input",{type:"text",placeholder:"Your Email",name:"email",value:i.email,onChange:r,className:"contactForm__input"}),Object(c.jsx)("textarea",{rows:3,placeholder:"Enter your message here..",name:"description",onChange:r,value:i.description,className:"contactForm__input"})]}),Object(c.jsx)("center",{children:Object(c.jsxs)("button",{onClick:function(){O.a.post("".concat(z.BASE_URL,"/sendMail"),i).then((function(t){200===t.status&&(e.success("Message Sent"),n({name:"",email:"",description:""}))})).catch((function(t){e.error("Failed")}))},className:"banner__exploreButton",style:{marginTop:20},children:[Object(c.jsx)(y.a,{icon:k.e,style:{marginRight:10}}),"Send Message"]})})]})]}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)(f,{})]})})},J=function(){return Object(s.useEffect)((function(){_()}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)(L,{}),Object(c.jsx)(H,{}),Object(c.jsx)(A,{}),Object(c.jsx)(G,{}),Object(c.jsx)(M,{delayDuration:0})]})},U=function(){return Object(s.useEffect)((function(){_()}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)(L,{}),Object(c.jsx)(W,{}),Object(c.jsx)(M,{delayDuration:0})]})},V=function(){return Object(s.useEffect)((function(){_()}),[]),Object(c.jsx)("div",{children:Object(c.jsxs)(w.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1},children:[Object(c.jsx)(L,{}),Object(c.jsx)(T,{}),Object(c.jsx)(B,{}),Object(c.jsx)(S,{}),Object(c.jsx)(M,{})]})})},K=function(){return Object(s.useEffect)((function(){_()}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)(L,{}),Object(c.jsx)(P,{}),Object(c.jsx)(F,{}),Object(c.jsx)(M,{delayDuration:0})]})},X={timeout:5e3,position:d.b.BOTTOM_CENTER},q=function(){return Object(s.useEffect)((function(){O.a.get("".concat(z.BASE_URL,"/wakeUp")).then((function(){})).catch((function(){}))}),[]),Object(c.jsx)("div",{children:Object(c.jsx)(v,{children:Object(c.jsx)(d.a,Object(l.a)(Object(l.a)({template:h.a},X),{},{children:Object(c.jsx)(o.a,{basename:"/",children:Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{path:"/",exact:!0,component:V}),Object(c.jsx)(j.a,{path:"/projects",exact:!0,component:K}),Object(c.jsx)(j.a,{path:"/achievements",exact:!0,component:J}),Object(c.jsx)(j.a,{path:"/contact",exact:!0,component:U})]})})}))})})},Q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,102)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),i(e),n(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(q,{})}),document.getElementById("root")),Q()}},[[98,1,2]]]);
//# sourceMappingURL=main.0c9a41b9.chunk.js.map