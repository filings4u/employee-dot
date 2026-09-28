window.PORTAL_CONFIG=Object.freeze({
  domain:'employee-dot.screenings4u.com',
  portalCode:'employee_dot',
  label:'DOT Employee / Driver Portal',
  kind:'self',
  surface:'dot',
  agency:null,
  workforceUrl:'https://elpbnytpciqnbexiaebp.supabase.co',
  workforceKey:'sb_publishable_xVI6Mjkk1bNVMGHZCPuK6w_8FSHKdkC',
  mainUrl:'https://elpbnytpciqnbexiaebp.supabase.co',
  mainKey:'sb_publishable_xVI6Mjkk1bNVMGHZCPuK6w_8FSHKdkC',
  pages:[
    {id:'dashboard',label:'Dashboard',icon:'⌂'},
    {id:'profile',label:'My Profile',icon:'◎'},
    {id:'my-testing',label:'My Testing',icon:'◆'},
    {id:'my-results',label:'My Results',icon:'✓'},
    {id:'documents',label:'Documents',icon:'▤'},
    {id:'notifications',label:'Notifications',icon:'●'},
    {id:'consents',label:'Consents & Acknowledgments',icon:'☑'},
    {id:'credentials',label:'Credentials',icon:'◈'},
    {id:'training',label:'Training',icon:'▥'},
    {id:'support',label:'Support',icon:'?'}
  ]
});
/* Reuse one Supabase Auth client per portal/browser context. */
(()=>{const C=window.PORTAL_CONFIG;if(!C)return;const wrap=lib=>{if(!lib?.createClient||lib.__s4uSingleClient)return lib;const create=lib.createClient.bind(lib);lib.createClient=(url,key,options)=>{if(url===C.workforceUrl&&key===C.workforceKey)return window.S4U_SUPABASE||(window.S4U_SUPABASE=create(url,key,options));return create(url,key,options)};try{Object.defineProperty(lib,'__s4uSingleClient',{value:true})}catch{}return lib};if(window.supabase)wrap(window.supabase);else{let assigned;try{Object.defineProperty(window,'supabase',{configurable:true,get(){return assigned},set(v){assigned=wrap(v)}})}catch{}}})();
