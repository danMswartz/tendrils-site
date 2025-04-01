(function () {
  const canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.zIndex = '0';
  canvas.style.pointerEvents = 'none';

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const ctx = canvas.getContext('2d');
  console.log("Canvas context is:", ctx);

  // Draw a test shape
  ctx.fillStyle = 'lime';
  ctx.fillRect(100, 100, 200, 100); // green box
})();
