<script>
</script>
<template>
  <div class="card" v-for="card in cardsValue">
  </div>
</template>

<style>
body {
	 --text-color: #a1a1aa;
	 --card-background-color: rgba(255, 255, 255, 0.015);
	 --card-border-color: rgba(255, 255, 255, 0.1);
	 --card-box-shadow-1: rgba(0, 0, 0, 0.05);
	 --card-box-shadow-1-y: 3px;
	 --card-box-shadow-1-blur: 6px;
	 --card-box-shadow-2: rgba(0, 0, 0, 0.1);
	 --card-box-shadow-2-y: 8px;
	 --card-box-shadow-2-blur: 15px;
	 --card-label-color: #fff;
	 --card-icon-color: #d4d4d8;
	 --card-icon-background-color: rgba(255, 255, 255, 0.08);
	 --card-icon-border-color: rgba(255, 255, 255, 0.12);
	 --card-shine-opacity: 0.1;
	 --card-shine-gradient: conic-gradient(from 205deg at 50% 50%, rgba(16, 185, 129, 0) 0deg, #10b981 25deg, rgba(52, 211, 153, 0.18) 295deg, rgba(16, 185, 129, 0) 360deg);
	 --card-line-color: #2a2b2c;
	 --card-tile-color: rgba(16, 185, 129, 0.05);
	 --card-hover-border-color: rgba(255, 255, 255, 0.2);
	 --card-hover-box-shadow-1: rgba(0, 0, 0, 0.04);
	 --card-hover-box-shadow-1-y: 5px;
	 --card-hover-box-shadow-1-blur: 10px;
	 --card-hover-box-shadow-2: rgba(0, 0, 0, 0.3);
	 --card-hover-box-shadow-2-y: 15px;
	 --card-hover-box-shadow-2-blur: 25px;
	 --card-hover-icon-color: #34d399;
	 --card-hover-icon-background-color: rgba(52, 211, 153, 0.1);
	 --card-hover-icon-border-color: rgba(52, 211, 153, 0.2);
	 --blur-opacity: 0.01;
}
 
 body.toggle .grid * {
	 transition-duration: 0s !important;
}
 .grid {
	 display: grid;
	 grid-template-columns: repeat(2, 240px);
	 grid-gap: 32px;
	 position: relative;
	 z-index: 1;
}
 .card {
  --background-color: #18181b;
	 box-shadow: 0px var(--card-box-shadow-1-y) var(--card-box-shadow-1-blur) var(--card-box-shadow-1), 0px var(--card-box-shadow-2-y) var(--card-box-shadow-2-blur) var(--card-box-shadow-2), 0 0 0 1px var(--card-border-color);
	 padding: 56px 16px 16px 16px;
	 border-radius: 15px;
	 cursor: pointer;
	 position: relative;
	 transition: box-shadow 0.25s;
}
 .card::before {
	 content: "";
	 position: absolute;
	 inset: 0;
	 border-radius: 15px;
	 background-color: var(--card-background-color);
}
 .card h4 {
	 z-index: 2;
	 position: relative;
	 margin: 12px 0 4px 0;
	 font-family: inherit;
	 font-weight: 600;
	 font-size: 14px;
	 line-height: 2;
	 color: var(--card-label-color);
}
 .card p {
	 z-index: 2;
	 position: relative;
	 margin: 0;
	 font-size: 14px;
	 line-height: 1.7;
	 color: var(--text-color);
}
 .card .background {
	 border-radius: inherit;
	 position: absolute;
	 inset: 0;
	 overflow: hidden;
	 -webkit-mask-image: radial-gradient(circle at 60% 5%, black 0%, black 15%, transparent 60%);
	 mask-image: radial-gradient(circle at 60% 5%, black 0%, black 15%, transparent 60%);
}
 .card .background .tiles {
	 opacity: 0;
	 transition: opacity 0.25s;
}

 @keyframes tile {
	 0%, 12.5%, 100% {
		 opacity: 1;
	}
	 25%, 82.5% {
		 opacity: 0;
	}
}
.card:hover {
	 box-shadow: 0px 3px 6px var(--card-hover-box-shadow-1), 0px var(--card-hover-box-shadow-2-y) var(--card-hover-box-shadow-2-blur) var(--card-hover-box-shadow-2), 0 0 0 1px var(--card-hover-border-color);
}

 .card:hover .background .tiles {
	 opacity: 1;
	 transition-delay: 0.25s;
}
 .card:hover .background .tiles .tile {
	 animation-name: tile;
}
 .card:hover .background .line {
	 opacity: 1;
	 transition-duration: 0.15s;
}
 .card:hover .background .line:before {
	 transform: scaleX(1);
}
 .card:hover .background .line:after {
	 transform: scaleY(1);
}
 .card:hover .background .line.line-1:before, .card:hover .background .line.line-1:after {
	 transition-delay: 0s;
}
 .card:hover .background .line.line-2:before, .card:hover .background .line.line-2:after {
	 transition-delay: 0.15s;
}
 .card:hover .background .line.line-3:before, .card:hover .background .line.line-3:after {
	 transition-delay: 0.3s;}
  

 html {
	 box-sizing: border-box;
	 -webkit-font-smoothing: antialiased;
}
 * {
	 box-sizing: inherit;
}
 *:before, *:after {
	 box-sizing: inherit;
}
 body {
	 min-height: 100vh;
	 display: flex;
	 font-family: "Inter", Arial;
	 justify-content: center;
	 align-items: center;
	 background-color: var(--background-color);
	 overflow: hidden;
}
 body:before {
	 content: "";
	 position: absolute;
	 inset: 0 -60% 65% -60%;
	 background-image: radial-gradient(ellipse at top, #10b981 0%, var(--background-color) 50%);
	 opacity: var(--blur-opacity);
 }
 
</style>