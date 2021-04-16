class Hero {
  constructor(x,y,r)
	{
		var options = { 
			density: 10, 
			frictionAir: 0.5
		};
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("superhero1.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
		World.add(world, this.body);

	}
	
	display()
	{
			
			var heroPos=this.body.position;		
			push()
			translate(heroPos.x, heroPos.y-100);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,90,this.r+200, this.r)
			
			pop()
			//ellipse(this.body.position.x,this.body.position.y,this.r)
			
	}
}
