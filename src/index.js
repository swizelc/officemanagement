debugger
const office = new Office();

const list_rooms = document.getElementById('list-rooms');
list_rooms.addEventListener('click',function(){
    let rooms = office.list_rooms();
    list_of_rooms = "<ul>"
    for (var i = 0; i< rooms.length; i++) {
        list_of_rooms += "<li>"+ rooms[i].name
    }
    list_of_rooms += "</ul>"
    document.getElementById("rooms").innerHTML = list_of_rooms;
})

const available_rooms = document.getElementById('available-rooms');
available_rooms.addEventListener('click',function(){
    let rooms = office.list_available_rooms()
    list_of_rooms = "<ul>"
    for (var i = 0; i< rooms.length; i++) {
        list_of_rooms += "<li>"+ rooms[i].name
    }
    list_of_rooms += "</ul>"
    document.getElementById("list-available-rooms").innerHTML = list_of_rooms;
})
const add_room = document.getElementById('add-room')
add_room.addEventListener('click', function(e){
    e.preventDefault();
    const room_name = document.getElementById('new-room-name').value;
    office.add_room(new MeetingRoom(room_name))
    document.getElementById('confirm').innerHTML = "Meeting room added to office!";
    document.getElementById('new-room-name').value = ""
})
const submit_button = document.getElementById('submit-button');
submit_button.addEventListener('click', function(e){
    e.preventDefault();
    const name = document.getElementById('room-name').value;
    rooms = office.rooms 
    for (var i = 0; i< rooms.length; i++) {
        if (rooms[i].name === name) {
            if (rooms[i].available)  { 
                document.getElementById('meeting').innerHTML = 'Meeting name'
                document.getElementById('team').innerHTML = 'Team name'
                document.getElementById('meeting-name').type = 'text'
                document.getElementById('team-name').type = 'text'
                get_in(rooms[i])
            }
            else{
                get_out(rooms[i])
            }

        }
    }
})

function get_in(room){
    const enter_btn = document.getElementById('enter')
    enter_btn.disabled = false
    enter_btn.addEventListener('click', function(){
        const meeting_name = document.getElementById('meeting-name').value 
        const team_name = document.getElementById('team-name').value 
        room.enter(meeting_name, team_name)
        console.log('yikes')
    })
}

function get_out(room){
    const leave_btn = document.getElementById('leave')
    leave_btn.disabled = false
    leave_btn.addEventListener('click', function(){
        room.leave()
    })
}
