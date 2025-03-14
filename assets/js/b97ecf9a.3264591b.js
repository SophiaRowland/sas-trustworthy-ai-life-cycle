"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[25],{1372:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"monitor-model","title":"7. Monitor model","description":"Models become less effective over time, so it is important to monitor models for potential decay or other issues.","source":"@site/docs/7-monitor-model.md","sourceDirName":".","slug":"/monitor-model","permalink":"/sas-trustworthy-ai-life-cycle/monitor-model","draft":false,"unlisted":false,"editUrl":"https://github.com/SophiaRowland/sas-trustworthy-ai-life-cycle/tree/main/website/docs/7-monitor-model.md","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"defaultSidebar","previous":{"title":"6. Deploy model","permalink":"/sas-trustworthy-ai-life-cycle/deploy-model"},"next":{"title":"8. Review project","permalink":"/sas-trustworthy-ai-life-cycle/review-project"}}');var o=s(4848),r=s(8453);const i={sidebar_position:8},l="7. Monitor model",d={},a=[{value:"7.1 Monitor model",id:"71-monitor-model",level:2},{value:"7.1.1 Create model monitoring plan",id:"711-create-model-monitoring-plan",level:3},{value:"7.1.2 Execute and schedule model monitoring and KPIs",id:"712-execute-and-schedule-model-monitoring-and-kpis",level:3},{value:"7.1.3 Review project KPI thresholds",id:"713-review-project-kpi-thresholds",level:3}];function c(e){const t={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",header:"header",input:"input",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"7-monitor-model",children:"7. Monitor model"})}),"\n",(0,o.jsx)(t.p,{children:"Models become less effective over time, so it is important to monitor models for potential decay or other issues."}),"\n",(0,o.jsx)(t.h2,{id:"71-monitor-model",children:"7.1 Monitor model"}),"\n",(0,o.jsx)(t.h3,{id:"711-create-model-monitoring-plan",children:"7.1.1 Create model monitoring plan"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Model developer or model engineer"}),": Create a model monitoring plan. Document the Key Performance Indicators (KPIs) that you will monitor, their thresholds, and the frequency with which they will be monitored:"]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("br",{}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"712-execute-and-schedule-model-monitoring-and-kpis",children:"7.1.2 Execute and schedule model monitoring and KPIs"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Model developer or model engineer"}),": Execute and schedule your model monitoring plan. Document or save the model's performance for the chosen KPIs. Repeat at each cadence."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("br",{}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"713-review-project-kpi-thresholds",children:"7.1.3 Review project KPI thresholds"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Model owner"}),": Review the project's KPI thresholds at the cadence that was deemed appropriate by your organization.\nIf at any time the KPIs fail to meet one of the predetermined thresholds, choose one of the following steps:"]}),"\n",(0,o.jsx)(t.p,{children:"The model no longer meets predetermined thresholds. What are the next steps?"}),"\n",(0,o.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,o.jsxs)(t.li,{className:"task-list-item",children:[(0,o.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Retrain models with new data. If selected, return to ",(0,o.jsx)(t.a,{href:"/sas-trustworthy-ai-life-cycle/prepare-and-assess-data",children:"step 3"}),"."]}),"\n",(0,o.jsxs)(t.li,{className:"task-list-item",children:[(0,o.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Fine-tune the models with existing data. If selected, return to ",(0,o.jsx)(t.a,{href:"/sas-trustworthy-ai-life-cycle/train-model",children:"step 4"}),"."]}),"\n",(0,o.jsxs)(t.li,{className:"task-list-item",children:[(0,o.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Set a new champion model. If selected, return to ",(0,o.jsx)(t.a,{href:"/sas-trustworthy-ai-life-cycle/test-model",children:"step 5"}),"."]}),"\n",(0,o.jsxs)(t.li,{className:"task-list-item",children:[(0,o.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Update the project documentation. If selected, return to ",(0,o.jsx)(t.a,{href:"/sas-trustworthy-ai-life-cycle/document-project",children:"step 2"}),"."]}),"\n",(0,o.jsxs)(t.li,{className:"task-list-item",children:[(0,o.jsx)(t.input,{type:"checkbox",disabled:!0})," ","End the workflow. If selected, depreciate the project and update ",(0,o.jsx)(t.a,{href:"/sas-trustworthy-ai-life-cycle/document-project",children:"step 2.1.1"}),"."]}),"\n",(0,o.jsxs)(t.li,{className:"task-list-item",children:[(0,o.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Move forward with the model. If selected, continue with ",(0,o.jsx)(t.a,{href:"#712-execute-and-schedule-model-monitoring-and-kpis",children:"step 7.1.2"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("br",{}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>l});var n=s(6540);const o={},r=n.createContext(o);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);