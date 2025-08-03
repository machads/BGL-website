document.addEventListener('DOMContentLoaded',()=>{
const splashScreen=document.getElementById('splash-screen');
const body=document.body;
const heroVideo=document.getElementById('hero-video');

// モバイル検出とビデオ最適化（修正版）
const isMobile=window.innerWidth<=768||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const isSlowConnection=navigator.connection&&(['slow-2g','2g'].includes(navigator.connection.effectiveType));

if(heroVideo){
// 極端に低速な回線の場合のみ動画を無効化
if(isSlowConnection&&navigator.connection.effectiveType==='slow-2g'){
heroVideo.style.display='none';
heroVideo.pause();
heroVideo.removeAttribute('autoplay');
}else{
// 動画の読み込みを確実に行う
heroVideo.load();
// モバイルでの自動再生を確実にする
if(isMobile){
heroVideo.muted=true;
heroVideo.setAttribute('playsinline','');
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