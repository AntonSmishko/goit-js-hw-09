import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */let t={email:"",message:""};const a="feedback-form-state",r=document.querySelector(".feedback-form"),o=r.querySelector("textarea"),s=r.querySelector("input"),m=e=>{e.preventDefault();const{email:n,message:i}=e.target.elements;if(n.value===""||i.value===""){alert("Fill please all fields");return}console.log(t),localStorage.removeItem(a),e.target.reset()};r.addEventListener("submit",m);o.addEventListener("input",u);s.addEventListener("input",c);function c(e){t.email=e.target.value,localStorage.setItem(a,JSON.stringify(t))}function u(e){t.message=e.target.value,localStorage.setItem(a,JSON.stringify(t))}let l=localStorage.getItem(a);if(l){let e=JSON.parse(l);o.value=e.message,s.value=e.email}
//# sourceMappingURL=2-form.js.map
