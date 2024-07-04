class m_Video{
	constructor( dirVideo ){
        this.x = random (500, 900);
        this.y = random (400, 500);
        this.video = createVideo(dirVideo,() => {
                console.log("termino carga")
                this.yaPuedoDarPlay = true;});
        this.video.size(600,600);
        console.log(this.video.style);
        this.video.style("display: none");
        this.yaPuedoDarPlay = false;

        // this.estado = "espera";
        // this.tinta = color(100, 100, 255);
	}
    dibujar(){
        imageMode(CENTER); 
        let img = this.video.get();
        image(img,this.x,this.y);

        // if (this.estado.equals("pinta")){
        //     if(this.video.available()){
        //         this.video.read();


        //         let img = this.video.get();
        //         img.mask(img);
        //         push();
        //         tint (this.tinta);
        //         image(img,this.x,this.y);
        //         pop();


        //     }
        // }
        
    }
    play(){
        if(this.yaPuedoDarPlay){
            this.video.play();
            this.yaPuedoDarPlay = false;
        }
    }   
}
