const larguraJogo = 800; //definindo largura do jogo
const alturaJogo = 600; //definindo altura do jogo

// algumas confugurações básicas
window.onload = function()
{
    let gameConfig = 
    {
        type: Phaser.AUTO,

        scale:{
            width:larguraJogo, 
            height:alturaJogo,
            autoCenter:Phaser.Scale.CENTER,
           
        },

        
        physics: { 
            default: 'arcade', 
            arcade: {
                gravity: { y: 300 }, 
                debug: false 
            }
        },
        
        
        backgroundColor: 'ffffff', // colocando a cor de fundo branca
        scene:[scene_one, scene_two], // colocando as duas cenas do jogo
        parent: 'game',
        dom:{
            createContainer: false
        },
    };
    game = new Phaser.Game(gameConfig); 

    window.focus();
}