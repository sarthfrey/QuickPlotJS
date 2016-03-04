var QuickPlot=function(t){this.canvas,this.canvasContext,this.canvasWidth,this.canvasHeight,this.canvasBackgroundColor,this.functionColor,this.graphDomain,this.graphRange,this.drawAxis,this.functionLambda,this.functionDomain,this.functionRange,this.notifyCanvasSizeUpdate=function(t){this.canvasWidth=this.canvas.width,this.canvasHeight=this.canvas.height,t&&this.drawGraph()},this.setDrawAxis=function(t){this.drawAxis=t},this.setBackgroundColor=function(t){this.canvasBackgroundColor=t},this.setFunctionColor=function(t){this.functionColor=t},this.setGraphDomain=function(t,i){this.graphDomain={from:t,to:i},void 0==this.functionDomain&&(this.functionDomain=this.graphDomain)},this.setGraphRange=function(t,i){this.graphRange={from:t,to:i},void 0==this.functionRange&&(this.functionRange=this.graphRange)},this.setFunction=function(t){this.functionLambda=t},this.setFunctionDomain=function(t,i){this.functionDomain={from:t,to:i}},this.setFunctionRange=function(t,i){this.functionRange={from:t,to:i}},this.getDrawAxis=function(){return this.drawAxis},this.getBackgroundColor=function(){return this.canvasBackgroundColor},this.getFunctionColor=function(){return this.functionColor},this.getGraphDomain=function(){return this.graphDomain},this.getGraphRange=function(){return this.graphRange},this.getFunctionDomain=function(){return this.functionDomain},this.getFunctionRange=function(){return this.functionRange},this.getFunctionLambda=function(){return this.functionLambda},this.drawGraph=function(){var t=!1;if((void 0==this.canvas||void 0==this.canvasContext)&&(t=!0,console.error("QuickPlot Error: Canvas not defined")),(this.canvasWidth<=0||this.canvasHeight<=0)&&(t=!0,console.error("QuickPlot Error: Canvas dimension error.")),(void 0==this.functionLambda||void 0==this.functionLambda)&&(t=!0,console.error("QuickPlot Error: Function not defined.")),(void 0==this.graphDomain||void 0==this.graphRange)&&(t=!0,console.error("QuickPlot Error: Graph domain or range not set.")),this.graphDomain.to-this.graphDomain.from<=0&&(t=!0,console.error("QuickPlot Error: Graph domain error.")),t)return!1;if(this.canvasContext.fillStyle=void 0==this.canvasBackgroundColor?"#FFFFFF":this.canvasBackgroundColor,this.canvasContext.fillRect(0,0,this.canvasWidth,this.canvasHeight),this.drawAxis){var i=-1*this.graphDomain.from*this.canvasWidth/(this.graphDomain.to-this.graphDomain.from),n=-1*this.graphRange.from*this.canvasHeight/(this.graphRange.to-this.graphRange.from);this.canvasContext.fillStyle="#000000",this.canvasContext.fillRect(i,0,1,this.canvasHeight),this.canvasContext.fillRect(0,this.canvasHeight-n,this.canvasWidth,1)}this.canvasContext.fillStyle=void 0==this.functionColor?"#AA0000":this.functionColor;for(var a=null,o=null,s=0;s<=this.canvasWidth;s++){var h=s*((this.graphDomain.to-this.graphDomain.from)/this.canvasWidth)+this.graphDomain.from;if(!(h<this.functionDomain.from||h>this.functionDomain.to)){var r=null==a?this.functionLambda(h):a,c=this.functionLambda(h+(this.graphDomain.to-this.graphDomain.from)/this.canvasWidth),e=null==o?(r-this.graphRange.from)*this.canvasHeight/(this.graphRange.to-this.graphRange.from):o,g=(c-this.graphRange.from)*this.canvasHeight/(this.graphRange.to-this.graphRange.from),u=Math.max(e,g),f=Math.abs(e-g)+1;this.canvasContext.fillRect(s,this.canvasHeight-u,1,f),a=c,o=g}}},this.init=function(){return"canvas"!=t.nodeName.toLowerCase()?(console.error("Invalid canvas passed to QuickPlot"),1):(this.canvas=t,this.canvasContext=t.getContext("2d"),this.canvasWidth=t.width,this.canvasHeight=t.height,void(this.drawAxis=!0))},this.init(t)};