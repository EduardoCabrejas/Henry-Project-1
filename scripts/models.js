class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl; 
    }
}

class Repository {
    constructor() {
        this.activities = [];
        this.id = 0;
    }
    
    getAllActivities() {
        return this.activities;
    }
    
    createActivity(title, description, imgUrl) {
        this.id++;
        const activity = new Activity(this.id, title, description, imgUrl);
        this.activities.push(activity);
    }
    
    deleteActivity(id) {
        const activityIndex = this.activities.findIndex(x => x.id === id);
        if (activityIndex !== -1) {
            this.activities.splice(activityIndex, 1);
        } else {
            return "No se encontró ninguna actividad con el ID proporcionado.";
        }
    }
}