/**
 *
 * This is a simple state template to use for getting a Phaser game up
 * and running quickly. Simply add your own game logic to the default
 * state object or delete it and make your own.
 *
 */

var state = {
    init: function() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    },

    preload: function() {
        // State preload logic goes here

        //loading word tiles using loop
        // tileImageArray = [];

        // for (i=0; i=25; i++){

        // }

        //loading the word tiles, colored and white
        this.load.image('a_tile', 'img/COOLLetterPieces/A.png');
        this.load.image('a_white', 'img/COOLLetterPieces/A white.png');
        this.load.image('b_tile', 'img/COOLLetterPieces/B.png');
        this.load.image('b_white', 'img/COOLLetterPieces/B white.png');
        this.load.image('c_tile', 'img/COOLLetterPieces/C.png');
        this.load.image('c_white', 'img/COOLLetterPieces/C white.png');
        this.load.image('d_tile', 'img/COOLLetterPieces/D.png');
        this.load.image('d_white', 'img/COOLLetterPieces/D white.png');
        this.load.image('e_tile', 'img/COOLLetterPieces/E.png');
        this.load.image('e_white', 'img/COOLLetterPieces/E white.png');
        this.load.image('f_tile', 'img/COOLLetterPieces/F.png');
        this.load.image('f_white', 'img/COOLLetterPieces/F white.png');
        this.load.image('g_tile', 'img/COOLLetterPieces/G.png');
        this.load.image('g_white', 'img/COOLLetterPieces/G white.png');
        this.load.image('h_tile', 'img/COOLLetterPieces/H.png');
        this.load.image('h_white', 'img/COOLLetterPieces/H white.png');
        this.load.image('i_tile', 'img/COOLLetterPieces/I.png');
        this.load.image('i_white', 'img/COOLLetterPieces/I white.png');
        this.load.image('j_tile', 'img/COOLLetterPieces/J.png');
        this.load.image('j_white', 'img/COOLLetterPieces/J white.png');
        this.load.image('k_tile', 'img/COOLLetterPieces/K.png');
        this.load.image('k_white', 'img/COOLLetterPieces/K white.png');
        this.load.image('l_tile', 'img/COOLLetterPieces/L.png');
        this.load.image('l_white', 'img/COOLLetterPieces/L white.png');
        this.load.image('m_tile', 'img/COOLLetterPieces/M.png');
        this.load.image('m_white', 'img/COOLLetterPieces/M white.png');
        this.load.image('n_tile', 'img/COOLLetterPieces/N.png');
        this.load.image('n_white', 'img/COOLLetterPieces/N white.png');
        this.load.image('o_tile', 'img/COOLLetterPieces/O.png');
        this.load.image('o_white', 'img/COOLLetterPieces/O white.png');
        this.load.image('p_tile', 'img/COOLLetterPieces/P.png');
        this.load.image('p_white', 'img/COOLLetterPieces/P white.png');
        this.load.image('q_tile', 'img/COOLLetterPieces/Q.png');
        this.load.image('q_white', 'img/COOLLetterPieces/Q white.png');
        this.load.image('r_tile', 'img/COOLLetterPieces/R.png');
        this.load.image('r_white', 'img/COOLLetterPieces/R white.png');
        this.load.image('s_tile', 'img/COOLLetterPieces/S.png');
        this.load.image('s_white', 'img/COOLLetterPieces/S white.png');
        this.load.image('t_tile', 'img/COOLLetterPieces/T.png');
        this.load.image('t_white', 'img/COOLLetterPieces/T white.png');
        this.load.image('u_tile', 'img/COOLLetterPieces/U.png');
        this.load.image('u_white', 'img/COOLLetterPieces/U white.png');
        this.load.image('v_tile', 'img/COOLLetterPieces/V.png');
        this.load.image('v_white', 'img/COOLLetterPieces/V white.png');
        this.load.image('w_tile', 'img/COOLLetterPieces/W.png');
        this.load.image('w_white', 'img/COOLLetterPieces/W white.png');
        this.load.image('x_tile', 'img/COOLLetterPieces/X.png');
        this.load.image('x_white', 'img/COOLLetterPieces/X white.png');
        this.load.image('y_tile', 'img/COOLLetterPieces/Y.png');
        this.load.image('y_white', 'img/COOLLetterPieces/Y white.png');
        this.load.image('z_tile', 'img/COOLLetterPieces/Z.png');
        this.load.image('z_white', 'img/COOLLetterPieces/Z white.png');

        this.load.image('blank_tile', 'img/COOLLetterPieces/blank.png');
        this.load.image('empty', 'img/COOLLetterPieces/empty.png');

        //load other graphics
        this.load.image('word_squares_header', 'img/Wordsquares top nav@2x.png.png')

    },

    create: function(){
        //DRAW THE GRAPHICS FOR THE BOARD
        game.stage.backgroundColor = "#ffffff";
        var graphics = game.add.graphics(0, 0);
        graphics.lineStyle(2, 0x0edcfb, 1);

        //wordSquares graphic header
        game.add.sprite(43, 30, 'word_squares_header');

        //draw the rectangle around the board
        var boardRectX = 100;
        var boardRectY = 150;
        var boardSize = 400;
        graphics.drawRect(boardRectX, boardRectY, boardSize, boardSize);
        var invBoardRectX = boardRectX + boardSize;
        var invBoardRectY = boardRectY + boardSize;
        window.graphics = graphics;

        //badges for overlapping tiles
        this.badges = game.add.group();
        badgeGraphics = game.add.graphics(0,0);
        badgeGraphics.beginFill(0x0edcfb, 1);
        badgeGraphics.drawCircle(415, 615, 15);
        badgeText = game.make.text(415, 615, "2", { font: "bold 26px Arial", fill: "white" });
        badgeText.anchor.set(0.5);
        this.badges.add(badgeGraphics);
        this.badges.add(badgeText);

        //second rectangle around the first
        graphics.drawRect(boardRectX - 4, boardRectY - 4, boardSize + 8, boardSize + 8);

        //draw the lines separating tiles in the board
        graphics.moveTo(boardRectX + boardSize/3, boardRectY + 10);
        graphics.lineTo(boardRectX + boardSize/3, boardRectY + boardSize - 10);

        graphics.moveTo(boardRectX + 2*boardSize/3, boardRectY + 10);
        graphics.lineTo(boardRectX + 2*boardSize/3, boardRectY + boardSize - 10);

        graphics.moveTo(boardRectX + 10, boardRectY + boardSize/3);
        graphics.lineTo(boardRectX + boardSize - 10, boardRectY + boardSize/3);

        graphics.moveTo(boardRectX + 10, boardRectY + 2*boardSize/3);
        graphics.lineTo(boardRectX + boardSize - 10, boardRectY + 2*boardSize/3);

        ////BOARD GENERATION

        // create the board iteratively
        // boardSize = 3;
        // puzzle = [];
        // boardTileArray = [null, null, null];

        // for (i=0; i<boardSize; i++){
        //     console.log(i);
        //     this.boardTileArray[i] = this.add.sprite(100+i*200, 100, 'a_tile');
        //     // this.boardTileArray[i].anchor.setTo(0.5, 0.5);
        //     // this.boardTileArray[i].inputEnabled = true;
        // }

        //generating squares one-by-one is very clumsy, fix
        //row one in the grid
        this.squareOneOne = this.add.sprite(boardRectX + 65, boardRectY + 65, 'n_tile');
        this.squareOneOne.scale.setTo(0.5, 0.5);
        this.squareOneOne.anchor.setTo(0.5, 0.5);
        this.squareOneOne.inputEnabled = true;

        this.squareOneTwo = this.add.sprite(300, boardRectY + 65, 'empty');
        this.squareOneTwo.scale.setTo(0.5, 0.5);
        this.squareOneTwo.anchor.setTo(0.5, 0.5);
        this.squareOneTwo.inputEnabled = true;

        this.squareOneThree = this.add.sprite(invBoardRectX - 65, boardRectY + 65, 't_tile');
        this.squareOneThree.scale.setTo(0.5, 0.5);
        this.squareOneThree.anchor.setTo(0.5, 0.5);
        this.squareOneThree.inputEnabled = true;

        //row two in the grid
        this.squareTwoOne = this.add.sprite(boardRectX + 65, boardRectY + 200, 'empty');
        this.squareTwoOne.scale.setTo(0.5, 0.5);
        this.squareTwoOne.anchor.setTo(0.5, 0.5);
        this.squareTwoOne.inputEnabled = true;

        this.squareTwoTwo = this.add.sprite(300, boardRectY + 200, 'g_tile');
        this.squareTwoTwo.scale.setTo(0.5, 0.5);
        this.squareTwoTwo.anchor.setTo(0.5, 0.5);
        this.squareTwoTwo.inputEnabled = true;

        this.squareTwoThree = this.add.sprite(invBoardRectX - 65, boardRectY + 200, 'empty');
        this.squareTwoThree.scale.setTo(0.5, 0.5);
        this.squareTwoThree.anchor.setTo(0.5, 0.5);
        this.squareTwoThree.inputEnabled = true;

        //row three in the grid
        this.squareThreeOne = this.add.sprite(boardRectX + 65, invBoardRectY - 65, 't_tile');
        this.squareThreeOne.scale.setTo(0.5, 0.5);
        this.squareThreeOne.anchor.setTo(0.5, 0.5);
        this.squareThreeOne.inputEnabled = true;

        this.squareThreeTwo = this.add.sprite(300, invBoardRectY - 65, 'h_tile');
        this.squareThreeTwo.scale.setTo(0.5, 0.5);
        this.squareThreeTwo.anchor.setTo(0.5, 0.5);
        this.squareThreeTwo.inputEnabled = true;

        this.squareThreeThree = this.add.sprite(invBoardRectX - 65, invBoardRectY - 65, 'empty');
        this.squareThreeThree.scale.setTo(0.5, 0.5);
        this.squareThreeThree.anchor.setTo(0.5, 0.5);
        this.squareThreeThree.inputEnabled = true;

        //input tiles
        this.inputSquareOne = this.add.sprite(225, 650, 'e_white');
        this.inputSquareOne.scale.setTo(0.5, 0.5);
        this.inputSquareOne.anchor.setTo(0.5, 0.5);
        this.inputSquareOne.inputEnabled = true;
        this.inputSquareOne.input.enableDrag();
        this.inputSquareOne.events.onDragStop.add(onDragStop, this);

        this.inputSquareTwo = this.add.sprite(375, 650, 'o_white');
        this.inputSquareTwo.scale.setTo(0.5, 0.5);
        this.inputSquareTwo.anchor.setTo(0.5, 0.5);
        this.inputSquareTwo.inputEnabled = true;
        this.inputSquareTwo.input.enableDrag();
        this.inputSquareTwo.events.onDragStop.add(onDragStop, this);

        this.inputSquareTwoTwo = this.add.sprite(375, 650, 'o_white');
        this.inputSquareTwoTwo.scale.setTo(0.5, 0.5);
        this.inputSquareTwoTwo.anchor.setTo(0.5, 0.5);
        this.inputSquareTwoTwo.inputEnabled = true;
        this.inputSquareTwoTwo.input.enableDrag();
        this.inputSquareTwoTwo.events.onDragStop.add(onDragStop, this);

        this.inputSquareThree = this.add.sprite(225, 775, 'u_white');
        this.inputSquareThree.scale.setTo(0.5, 0.5);
        this.inputSquareThree.anchor.setTo(0.5, 0.5);
        this.inputSquareThree.inputEnabled = true;
        this.inputSquareThree.input.enableDrag();
        this.inputSquareThree.events.onDragStop.add(onDragStop, this);
    },

    update: function() {
        // State Update Logic goes here.

        //bring the input tile overlap badge to the top
        game.world.bringToTop(this.badges);

        //spin the input tile if moused over
        if (this.inputSquareOne.input.pointerOver()){
            //this.inputSquareOne.angle += 5;
        } else {
            this.inputSquareOne.angle = 0;
        }

        if (this.inputSquareTwo.x == this.inputSquareTwoTwo.x && this.inputSquareTwo.y == this.inputSquareTwoTwo.y){
            console.log("overlapping");
            this.badges.visible = true;
        } else {
            this.badges.visible = false;
        }

    }
};

//check if the dragged tile is over an empty space
function onDragStop(sprite, pointer) {

    console.log(sprite);
    var boardRectX = 100;
    var boardRectY = 150;
    var boardSize = 400;
    var invBoardRectX = boardRectX + boardSize;
    var invBoardRectY = boardRectY + boardSize;

    if (pointer.x > 232 && pointer.x < 365 && pointer.y > 153 && pointer.y < 282) {
        sprite.x = 300;
        sprite.y = boardRectY + 65;
        console.log("top middle");
        console.log(pointer.x, pointer.y)
    } else if (pointer.x > 107 && pointer.x < 233 && pointer.y > 284 && pointer.y < 416){
        sprite.x = boardRectX + 65;
        sprite.y = boardRectY + 200;
        console.log("middle left");
        console.log(pointer.x, pointer.y)
    } else if (pointer.x > 365 && pointer.x < 494 && pointer.y > 287 && pointer.y < 414){
        sprite.x = invBoardRectX - 65;
        sprite.y = boardRectY + 200;
        console.log("middle right");
        console.log(pointer.x, pointer.y)
    } else if (pointer.x > 365 && pointer.x < 494 && pointer.y > 419 && pointer.y < 545){
        sprite.x = invBoardRectX - 65;
        sprite.y = invBoardRectY - 65;
        console.log("bottom right");
        console.log(pointer.x, pointer.y)
    } else if (sprite.z == 11){
        sprite.x = 225;
        sprite.y = 650;
        console.log("no drop point");
        console.log(pointer.x, pointer.y)
    } else if (sprite.z == 12 || sprite.z == 13){
        sprite.x = 375;
        sprite.y = 650;
        console.log("no drop point");
        console.log(sprite.x, sprite.y);
        console.log(pointer.x, pointer.y)
    } else if (sprite.z == 14){
        sprite.x = 225;
        sprite.y = 775;
        console.log("no drop point");
        console.log(pointer.x, pointer.y)
    }



}

var game = new Phaser.Game(
    600,
    900,
    Phaser.AUTO,
    'game',
    state
);