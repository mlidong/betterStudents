function Clock() {
	this.elem = canvas;
	this.ctx = canvas.getContext("2d");
}
Object.assign(Clock.prototype, {
	init: function() {
		this.drawCanvas();
		this.setInterval();

	},

	drawCanvas: function() {
		this.getTimes();
		this.drawPannel();
		this.drawCenterPoint();
		this.drawMinutes();
		this.drawHours();
		this.drawHoursNum();
		this.drawHourPointer();
		this.drawMinutesPointer();
		this.drawSecondsPointer();
	},

	setInterval: function() {
		var this_ = this;
		setInterval(function() {
			this_.ctx.clearRect(0, 0, 500, 500);
			this_.drawCanvas();
		},1000)
	},

	getTimes: function() {
		var date = new Date();
		this.hours = date.getHours() + (date.getMinutes() / 60);
		if(this.hours > 12){
			this.hours = this.hours - 12;
		}
		this.minutes = date.getMinutes();
		this.seconds = date.getSeconds();
		
	},

	drawPannel: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath();
		this.ctx.arc(0, 0, 100, 0, Math.PI * 2);
		this.ctx.lineWidth = 10;
		this.ctx.strokeStyle = "red";
		this.ctx.fillStyle = "yellow";
		this.ctx.fill();
		this.ctx.stroke();
		this.ctx.restore();
	},

	drawCenterPoint: function() {
		this.ctx.beginPath();
		this.ctx.arc(250, 250, 4, 0, Math.PI * 2);
		this.ctx.fillStyle = "red";
		this.ctx.fill();
	},

	drawMinutes: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		
		for(var i = 0; i < 60;i++) {
			this.ctx.beginPath();
			this.ctx.moveTo(0, -95);
			this.ctx.lineTo(0, -92);
			this.ctx.lineWidth = 2;
			this.ctx.stroke();
			this.ctx.rotate(Math.PI / 180 * 6);
		}
		this.ctx.restore();

	},
	drawHours: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		
		for(var i = 0; i < 12;i++) {
			this.ctx.beginPath();
			this.ctx.moveTo(0, -95);
			this.ctx.lineTo(0, -88);
			this.ctx.lineWidth = 2;
			this.ctx.stroke();
			this.ctx.rotate(Math.PI / 180 * 30);
		}
		this.ctx.restore();
	},
	drawHoursNum: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.textAlign = "center";
		this.ctx.textBaseline = "middle";
		for(var i = 1; i < 13; i++){
			this.ctx.beginPath();
			var x = Math.sin(Math.PI / 180 * 30 * i) * 80;
			var y = -Math.cos(Math.PI / 180 * 30 * i) * 80;
			this.ctx.font = "20px Arial";
			this.ctx.fillStyle = "rgba("+ (i+200) + "," + (i+100) + "," + (i+50) + "," + "1)";
			this.ctx.fillText(i, x, y);
		}	
		this.ctx.restore();
	},

	drawHourPointer: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath();
		this.ctx.rotate(Math.PI / 180 * 30 * this.hours);
		this.ctx.moveTo(0, -50);
		this.ctx.lineTo(0, 10);
		this.ctx.lineWidth = 2;
		this.ctx.stroke();
		this.ctx.restore();
	},

	drawMinutesPointer: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath();
		this.ctx.rotate(Math.PI / 180 * 6 * this.minutes);
		this.ctx.moveTo(0, -60);
		this.ctx.lineTo(0, 10);
		this.ctx.lineWidth = 2;
		this.ctx.stroke();
		this.ctx.restore();
	},

	drawSecondsPointer: function() {
		this.ctx.save();
		this.ctx.translate(250, 250);
		this.ctx.beginPath();
		this.ctx.strokeStyle = "red";
		this.ctx.rotate(Math.PI / 180 * 6 * this.seconds);
		this.ctx.moveTo(0, -50);
		this.ctx.lineTo(0, 10);
		this.ctx.stroke();
		this.ctx.restore();
	}



});