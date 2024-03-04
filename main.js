const larguraJogo = 800; 
const alturaJogo = 600; 

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
        
        
        backgroundColor: 'ffffff',
        scene:[scene_one, scene_two],
        parent: 'game',
        dom:{
            createContainer: false
        },
    };
    game = new Phaser.Game(gameConfig); 

    window.focus();
}