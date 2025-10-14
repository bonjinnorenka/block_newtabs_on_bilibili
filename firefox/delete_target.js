/*
setInterval(()=>{
    let atags = document.getElementsByTagName("a");
    for(let x=0;x<atags.length;x++){
        if(atags[x].target=="_blank"){
            atags[x].target = "";
        }
    }
},200)
*/

const replace_atag = () =>{
    let atags = document.getElementsByTagName("a");
    for(let x=0;x<atags.length;x++){
        if(atags[x].target=="_blank"){
            atags[x].target = "";
        }
    }
}

let obs = new MutationObserver(replace_atag);
let config = {childList: true, subtree: true};
obs.observe(document.body, config);
replace_atag();//初回実行?

const ins_el = document.createElement("script");
ins_el.innerText = 'const window_open_origin = window.open;let before_request = "";window.open = (url,target,features)=>{if(before_request!=url){before_request = url;window_open_origin(url,"_self",features);}}'
document.body.appendChild(ins_el);
