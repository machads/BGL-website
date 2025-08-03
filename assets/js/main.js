document.addEventListener('DOMContentLoaded',()=>{
const splashScreen=document.getElementById('splash-screen');
const body=document.body;
const heroVideo=document.getElementById('hero-video');

// モバイル検出とビデオ最適化（最適化版）
const isMobile=window.innerWidth<=768||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const isSlowConnection=navigator.connection&&(['slow-2g','2g'].includes(navigator.connection.effectiveType));

if(heroVideo){
// パフォーマンス向上のための最適化
if(isSlowConnection||!window.requestIdleCallback){
heroVideo.style.display='none';
heroVideo.pause();
heroVideo.removeAttribute('autoplay');
}else{
// アイドル時間に動画を読み込み
if(window.requestIdleCallback){
requestIdleCallback(()=>heroVideo.load(),{timeout:1000});
}else{
setTimeout(()=>heroVideo.load(),300);
}
}
}

// スプラッシュ画面の最適化
const hasVisited=sessionStorage.getItem('hasVisited');
if(splashScreen&&!hasVisited){
sessionStorage.setItem('hasVisited','true');
body.classList.add('loading');
const splashLogo=document.getElementById('splash-logo');
if(splashLogo){
splashLogo.addEventListener('animationend',()=>{
requestAnimationFrame(()=>{
splashScreen.classList.add('hidden');
body.classList.remove('loading');
splashScreen.addEventListener('transitionend',()=>{
splashScreen.remove();
},{once:true});
});
},{once:true});
}
}else{
body.classList.remove('loading');
if(splashScreen)splashScreen.remove();
}
});