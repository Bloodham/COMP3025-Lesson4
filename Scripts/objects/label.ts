module objects {
    export class Label extends createjs.Text{
        //Constructor is the initlizer 
       constructor(public labelString:string, 
       public fontFamily:string, 
       public fontColour:string,
       x:number,
       y:number,
       public centered: boolean){
        super(labelString, fontFamily, fontColour);
        this.Start();
        this.x = x;
        this.y = y;
       } 

       //public methods
       public Start():void{
           if(this.centered){
               this.regX= this.getMeasuredWidth() * 0.5;
               this.regY= this.getMeasuredHeight() * 0.5;
           }

       }
    }
}