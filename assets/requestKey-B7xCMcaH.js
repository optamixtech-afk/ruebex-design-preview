function e(){const r=new Uint8Array(16);return crypto.getRandomValues(r),Array.from(r,t=>t.toString(16).padStart(2,"0")).join("")}export{e as r};
