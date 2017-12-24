var expect = require('chai').expect;

xdescribe('GAME INSTANCE FUNCTIONS', function(){
    describe('checkGameStatus', function(){
        it('should tell me when the game is over');
    });
    it('some other stuff', function(){

    });

    describe('takeTurn', function(){
        var takeTurn = require('../game_logic/game_instance').takeTurn;
        var guess, player;

        beforeEach(function(){
            guess = function(){return [0,0]}
            player = {
                ships:[
                    {
                        locations:[[0,0]],
                        damage: []
                    }
                ]
            }
        });

        it('should return false if the game ends', function(){
            var actual = takeTurn(player, guess);
            expect(actual).to.be.false;
        });
    });

    function saveGame(){
        setTimeout(function(){
            callback();
        }, 1000);
    }

    describe('saveGame', function(){
        it("should update save status", function(done){
            var status = 'game not saved';
            saveGame(function(){
                status = 'game saved';
                expect(status).to.equal('game saved');
                done();
            });
            
        });
    });
});