var mainState = {
	
	preload: function() {
		game.load.image('player', 'assets/player.png');
	},

	create: function() {
		game.stage.backgroundColor = '#3498db';
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.renderer.renderSession.roundRixels = true;

		this.player = game.add.sprite(game.width/2, game.height/2, 'player');

	},

	update: function() {

	},
};
	
var game = new Phaser.Game(500,	340, Phaser.AUTO, 'gameDiv');

game.state.add('main', mainState);
game.state.start('main');

