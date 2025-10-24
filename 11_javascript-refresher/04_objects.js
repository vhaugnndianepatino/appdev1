let aboutMe = {
    name: "Vhaugnn Diane Patiño",
    age: 23,
    course: "BSIS",
    introduce: function() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

aboutMe.introduce();
aboutMe.hobby = "Reading books";

console.log("Hobby:", aboutMe.hobby);
