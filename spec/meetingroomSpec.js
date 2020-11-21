describe('MeetingRoom', function(){
    var room;

    beforeEach(function(){ 
        room = new MeetingRoom("TestRoom");
    })

    describe('.enter', function(){
        it('changes the availability to false when you enter it', function(){
            room.enter("testName, testTeam");
            expect(room.available).toEqual(false);
        })
        it('throws an error if you try enter an unavailable room', function(){
            room.enter("testName, testTeam");
            expect(function() {room.enter("testName2, testTeam2")}).toThrowError('Room not available')
        })
    })
    describe('.leave', function(){
        it('changes the availablitiy to true when the room is left',function(){
            room.leave()
            expect(room.available).toEqual(true)
        })
    })
})