document.addEventListener('DOMContentLoaded',()=>{
const splashScreen=document.getElementById('splash-screen');
const body=document.body;
const heroVideo=document.getElementById('hero-video');

// モバイル検出とビデオ最適化
const isMobile=window.innerWidth<=768||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const isSlowConnection=navigator.connection&&(navigator.connection.effectiveType==='slow-2g'||navigator.connection.effectiveType==='2g');

if(heroVideo){
// モバイルまたは低速回線のみで動画を無効化
if(isSlowConnection){
heroVideo.style.display='none';
heroVideo.pause();
heroVideo.removeAttribute('autoplay');
}else{
// 遅延読み込みでパフォーマンス向上
setTimeout(()=>{
heroVideo.load();
},500);
}
}

if(splashScreen&&!sessionStorage.getItem('hasVisited')){
sessionStorage.setItem('hasVisited','true');
body.classList.add('loading');
const splashLogo=document.getElementById('splash-logo');
splashLogo.addEventListener('animationend',()=>{
requestAnimationFrame(()=>{
splashScreen.classList.add('hidden');
body.classList.remove('loading');
splashScreen.addEventListener('transitionend',()=>{
splashScreen.style.display='none';
},{once:true});
});
},{once:true});
}else{
body.classList.remove('loading');
if(splashScreen){
splashScreen.style.display='none';
}
}
});