function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.energy = 10;
    this.strength = 2;
    this.mealsToday = 0;
    this.hungryWalks = 0;
    this.cleanliness = 10;
    this.isAlive = true;
    console.log("Hi im " + name + ", nice to meet you!")
}

Pet.prototype.walk = function () {
    
    if (this.isAlive === false) {
        console.log("unfortunately " + this.name + " is dead")
    }else{
        if (this.hungryWalks > 1){
            //died from walking too much
            this.isAlive = false
            console.log("You've overworked " + this.name + ", unfortunately its died")
        }else{
        
            if (this.hungryWalks > 1){console.log("Are you ever going to feed me?")}    //walking hungry too much
            
            if (this.hunger < 8){
                if (this.energy < 5){
                    this.energy = 0;
                    console.log("im exhausted, i need a nap")
                }else{
                    this.energy -= 5;
                }

                this.cleanliness -= 3;

                //increase strengh when below age 15
                if (this.age <= 15){
                    if (this.strength <= 9){this.strength += 1;}
                }else{
                    //decrease strength and more energy when walking over age 15
                    console.log("im getting too old for this")
                    if (this.strength > 3){
                        this.strength-= 0.3;
                        if (this.energy > 0){this.energy -= 1}
                    }
                }
                this.hunger += 3;
            }else{
                console.log("only a short one, im starving!")
                this.hunger += 1;
                this.hungryWalks += 1;
                this.cleanliness -= 1;
            }
            if (this.cleanliness < 4){console.log("im starting to smell a bit now, any chance of a bath?")}  //walking hungry too much    
        }
        
    }
}
Pet.prototype.sleep = function () {
    
    if (this.isAlive === false) {
        console.log("unfortunately " + this.name + " is dead")
    }else{
        console.log("goodnight!")
        this.energy = 10;      //reset the energy
        if (this.age <= 15){
            this.strength += 1;     //increase the strength
        }else{
            this.strength -= 2;     //decrease the strength
            if (this.strength < 3){
                //died from walking too much
                this.isAlive = false;
                console.log(this.name + " was too old and week and has unfortunately died in its sleep")
            }
        }
        this.age += 1;          //increase age by 1
        
        //increase huger by 4 max 10
        if (this.hunger > 7){
            this.hunger = 10;
        }else{
            this.hunger += 4;
        }
        this.mealsToday = 0;
    
    }
}
Pet.prototype.feed = function () {
    if (this.isAlive === false) {
        console.log("unfortunately " + this.name + " has passed away")
    }else{
        if (this.mealsToday === 0){console.log("Breakfast time!")}
        if (this.mealsToday === 1){console.log("whats for lunch?")}
        if (this.mealsToday === 2){console.log("any chance of steak tonight?")}

        // limit to 3 meals a day
        if (this.mealsToday === 3){
            console.log("ive had my 3 meals today, i dont want to get fat")
        }else{
            if (this.hunger < 5){
                this.hunger = 0;
            }else{
                this.hunger -= 5;
            }

            this.mealsToday += 1;
            this.hungryWalks = 0;
            this.energy += 3;
        }
    }
}

Pet.prototype.clean = function () {
    if (this.isAlive === false) {
        console.log("unfortunately " + this.name + " has passed away")
    }else{
        console.log("Bath time!")
        this.cleanliness = 10;
    }
}
module.exports = Pet;

