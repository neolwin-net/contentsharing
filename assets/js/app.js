/* SP Networking Guide — site interactions */
'use strict';

const root=document.documentElement;
document.getElementById('themeBtn').addEventListener('click',()=>{root.classList.toggle('light');document.querySelector('meta[name="theme-color"]').content=root.classList.contains('light')?'#f5f7fb':'#10151f';});
document.getElementById('menuBtn').addEventListener('click',()=>document.getElementById('sidebar').classList.toggle('open'));
document.querySelectorAll('[data-toggle]').forEach(btn=>btn.addEventListener('click',()=>{const panel=document.getElementById(btn.dataset.toggle);panel.hidden=!panel.hidden;btn.querySelector('span').textContent=panel.hidden?'›':'⌄';}));
document.querySelectorAll('.copy').forEach(btn=>btn.addEventListener('click',async()=>{const text=btn.closest('.codebox').querySelector('code').innerText;try{await navigator.clipboard.writeText(text);btn.textContent='Copied!';setTimeout(()=>btn.textContent='Copy',1400)}catch(e){btn.textContent='Select code to copy';}}));
const search=document.getElementById('searchInput');
search.addEventListener('input',()=>{const q=search.value.trim().toLowerCase();document.querySelectorAll('.navitems a,.topiccard').forEach(el=>{const target=el.classList.contains('topiccard')?el:document.querySelector(el.getAttribute('href'));const text=(el.innerText+' '+(target?.innerText||'')).toLowerCase();el.style.display=!q||text.includes(q)?'':'none';});});
document.querySelectorAll('.navitems a').forEach(a=>a.addEventListener('click',()=>{document.querySelectorAll('.navitems a').forEach(x=>x.classList.remove('active'));a.classList.add('active');document.getElementById('sidebar').classList.remove('open');}));
