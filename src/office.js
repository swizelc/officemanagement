class Office {
    constructor(){
        this.rooms = []
    }
    add_room(room){
        this.rooms.push(room);
    }
    list_rooms(){
        return this.rooms;
    }
    list_available_rooms(){
        this.available_rooms = []
        for (var i = 0; i < this.rooms.length; i++){
            if (this.rooms[i].available === true) {
                this.available_rooms.push(this.rooms[i]);
            }
        }
        return this.available_rooms
    }

}