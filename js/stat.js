'use strict';

var getMaxElement = function(arr) {
  var maxTime = -1;
  var maxIndex = -1;   

  for (var i = 0 ; i < arr.length; i++) {
    var time = arr[i];
    if (time > maxTime) {
      maxTime = time;
      maxIndex = i;
    }
  }
  return maxTime;
}

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = '0, 0, 0, 0.7)'; // gray
  ctx.strokeRect(110, 20, 420, 270);
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)'; // white;
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000'; // black;
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
   
   
  var max = getMaxElement(times);

  var histogramWidth = 150;              // px;
  var step = histogramWidth / (max - 0); // px;
  
  ctx.fillText('Список результатов:',120, 60);
  
  var barWidth = 40;       // px; 
  var indent = 90;          // px;
  var initialX = 140;       // px;
  var initialY = 250;        // px;
  var histogramMargin = 15; // px;
  
  for(var i = 0; i < times.length; i++) {
    if ( names[i] == 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(initialX  + indent * i, initialY - (times[i] * step), barWidth, times[i] * step);
      ctx.fillStyle = '#000'; 
      ctx.fillText(names[i], initialX + indent * i, initialY + histogramMargin); 
      ctx.fillText(times[i].toFixed(), initialX + indent * i, (initialY - (times[i] * step)) - histogramMargin / 2);
    } else {
      ctx.fillStyle = 'rgba(2, 14, 134,'+ Math.random() + '1)'; 
      ctx.fillRect(initialX  + indent * i, initialY - (times[i] * step), barWidth, times[i] * step); 
      ctx.fillStyle = '#000'; 
      ctx.fillText(names[i], initialX + indent * i, initialY + histogramMargin);
      ctx.fillText(times[i].toFixed(), initialX + indent * i, (initialY - (times[i] * step)) - histogramMargin / 2);
    }
  }
};