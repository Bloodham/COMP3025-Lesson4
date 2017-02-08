module objects{
    export class Button extends createjs.Bitmap{
         
         //Constructor is the initlizer 
       constructor(public imagePath:string,
       x:number,
       y:number,
       public centered: boolean){
        super(imagePath);
        this.Start();
        this.x = x;
        this.y = y;

        this.on("mouseover", this._Over);
        this.on("mouseout", this._Out);
       } 

       //public methods
       public Start():void{
           if(this.centered){
               this.regX= this.getBounds().width * 0.5;
               this.regY= this.getBounds().height * 0.5;
           }
    }
//Private methods
private _Over(event:createjs.MouseEvent):void{
this.alpha = 0.7; //30% transparent
    }

private _Out(event:createjs.MouseEvent):void{
this.alpha = 1;

        }
    }
}