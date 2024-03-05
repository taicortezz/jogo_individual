class scene_one extends Phaser.Scene {
    constructor () {
        super({ key: 'scene_one'});
    }

    // carregando imagens do start
    preload () {
      this.load.image ('start1', 'assets/start1.png');
      this.load.image ('start2', 'assets/start2.png');
    }


    create () {
    
        this.play = this.add.image (250, 300, 'start1').setScale(1); // criando as imagens na web
        this.play.setInteractive(); // criando a interação ao apertar o play

        this.play.on('pointerover', () => {
            this.play.setTexture('start2'); // definindo a imagem quando o mouse não se sobrepõe ao play
        });

      
        this.play.on('pointerout', () => {
            this.play.setTexture('start1'); //definindo a imagem quando o mouse se sobrepõe ao play
        });

        
        this.play.on('pointerdown', () => { //ao apertar start inicia a segunda cena
            this.scene.stop('scene_one');
            this.scene.start('scene_two');
        });
    
    }

    update () {

    }
}