
class scene_two extends Phaser.Scene{
    constructor () {
        super({ key: 'scene_two'});
    }


    // variáveis
    cursors;
    _plataforma;
    persona;
    star;
    score = 0;
    scoreText;


preload()
{ this.load.image('fundo', 'assets/fundo.png');
this.load.image('arcoiris', 'assets/arcoiris.png')
this.load.image('_plataforma', 'assets/plataforma2.png');
this.load.image('star', 'assets/star.png');
this.load.spritesheet('persona_jogo',
    'assets/persona_jogo.png',
    { frameWidth: 32, frameHeight: 32 }
);
};

create()
{  // definindo os controles do jogo
    this.cursors = this.input.keyboard.createCursorKeys();
    //criando imagens na página da web
    this.add.image(400, 300, 'fundo');
    this.add.image(400, 400, 'arcoiris');
    // criando a váriavel plataforma como um grupo estático, ou seja, que não sofre interferência da física do jogo.
    this._plataforma = this.physics.add.staticGroup();
    // adicionando todas as plataformas, cada uma em uma posição específica.
    this._plataforma.create(600, 140, '_plataforma').setScale(2).refreshBody();
    this._plataforma.create(200, 250, '_plataforma').setScale(2).refreshBody();
    this._plataforma.create(360, 100, '_plataforma').setScale(2).refreshBody();
    this._plataforma.create(600, 400, '_plataforma').setScale(2).refreshBody();
    this._plataforma.create(750, 280, '_plataforma').setScale(2).refreshBody();
    this._plataforma.create(400, 510, '_plataforma').setScale(2).refreshBody();
    this._plataforma.create(100, 100, '_plataforma').setScale(2).refreshBody();
    this._plataforma.create(400, 300, '_plataforma').setScale(2).refreshBody();
    this._plataforma.create(8, 370, '_plataforma').setScale(2).refreshBody();
    this._plataforma.create(150, 580, '_plataforma').setScale(2).refreshBody();
    this._plataforma.create(280, 450, '_plataforma').setScale(2).refreshBody();
    this._plataforma.create(500, 580, '_plataforma').setScale(2).refreshBody();

    //criando a váriavel persona
    this.persona = this.physics.add.sprite(400, 350, 'persona_jogo');
    // adicionando a física do personagem quicar ao entrar em contato com outro corpo
    this.persona.setBounce(0.2);
    //determinando a colisão com o mundo como falsa
    this.persona.setCollideWorldBounds(false);
    
    this.star = this.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    });

    this.star.children.iterate(function (child) {
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        child.setCollideWorldBounds(true);
        child.setBounce(0.8)
        
    });

    this.physics.add.overlap(this.persona, this.star, this.collectStar, null, this);

    this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    //adicionando as configurações do spritesheet
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('persona_jogo', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [{ key: 'persona_jogo', frame: 4 }],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('persona_jogo', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    // adicionando colisão do personagem com a plataforma
    this.physics.add.collider(this.persona, this._plataforma);
    this.physics.add.collider(this.star, this._plataforma);
};

collectStar (persona, star) {
    star.disableBody(true, true);
    this.score += 10;
    this.scoreText.setText('Score: ' + this.score);
}

update(){
 // estabelecendo as configurações do controle do teclado
    if (this.cursors.left.isDown) {
        this.persona.setVelocityX(-160);
        this.persona.anims.play('left', true);
    }
    else if (this.cursors.right.isDown) {
        this.persona.setVelocityX(160);
        this.persona.anims.play('right', true);
    }
    else {
        this.persona.setVelocityX(0);
        this.persona.anims.play('turn');
    }

    if (this.cursors.up.isDown && this.persona.body.touching.down) {
        this.persona.setVelocityY(-330);
    }
    // sempre que o personagem atingir a posição de y>=600, aparece a mensagem "você perdeu"
    if (this.persona.y>=600) {
        window.alert('voce perdeu')
        this.scene.restart()

    }
}
}
