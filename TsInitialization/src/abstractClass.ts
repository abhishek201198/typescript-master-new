  abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}
  
    abstract getSepia(): void
    getReelTime():number {
        //  some complex calculation
        return 8;
    }
     
 }

 class whatsApp  extends TakePhoto{
           constructor(
                  public cameraMode: string,
                  public filter : string,
                  public burst: number
           ){
            
            super(cameraMode, filter)
           }
           
           getSepia(): void {
            console.log("sepia")
           }
 }

 const ht = new whatsApp('text' , 'text', 3)
 ht.getReelTime()