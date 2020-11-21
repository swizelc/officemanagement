describe('Office', function(){
    var office;
    var room;
    beforeEach(function(){
        office = new Office();
        room = jasmine.createSpyObj('room', ['available']);
    })
    describe('#add_room', function(){
        beforeEach(function(){
            room.available.and.returnValue(true);
        })
        it('adds a meeting room to the office', function(){
            office.add_room(room)
            expect(office.rooms.length).toEqual(1)
        })
    })
    describe('.list_rooms', function(){
        beforeEach(function(){
            room.available.and.returnValue(true);
        })
        it('returns all the rooms',function(){
            expect(office.list_rooms()).toEqual([])
        })
    })
    //doesn't work yikes
    describe('.list_available_rooms', function(){
        it('return the rooms that are available', function(){
            office.add_room(room)
            room.available.and.returnValue(true);
            expect(office.list_available_rooms().length).toEqual(1)
        })
    })
})