class scene_one extends Phaser.Scene {
    constructor () {
        super({ key: 'scene_one'});
    }

    preload () {
      this.load.image ('start1', 'assets/start1.png');
      this.load.image ('start2', 'assets/start2.png');
    }

    create () {
    
        this.play = this.add.image (250, 300, 'start1').setScale(1);
        this.play.setInteractive();

        this.play.on('pointerover', () => {
            this.play.setTexture('start2'); 
        });

      
        this.play.on('pointerout', () => {
            this.play.setTexture('start1'); 
        });

        
        this.play.on('pointerdown', () => {
            this.scene.stop('scene_one');
            this.scene.start('scene_two');
        });
    
    }

    update () {

    }
}