class MeetingRoom {
    constructor(name){
        this.name = name
        this.available = true 
    }
    enter(meeting_name, team) {
        this.meeting = new Meeting(meeting_name, team);
        this.available = false;
        
    }
    leave(){
        this.available = true
    }
}