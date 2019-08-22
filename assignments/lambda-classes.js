// CODE here for your Lambda Classes
class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(attrIns) {
        super(attrIns);
        this.specialty = attrIns.specialty;
        this.favLanguage = attrIns.favLanguage;
        this.catchPhrase = attrIns.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(Student, subject) {
       return `${Student.name} receives a perfect score on ${subject}`; 
    }
}

class Student extends Person {
    constructor(attrStu) {
        super(attrStu);
        this.previousBackground = attrStu.previousBackground;
        this.className = attrStu.className;
        this.favSubjects = attrStu.favSubjects;
    }
    listsSubjects() {
        return `My favorite subjects are: ${this.favSubjects}`;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(attrPm) {
        super(attrPm);
        this.gradClassName = attrPm.gradClassName;
        this.favInstructor = attrPm.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(Student, subject) {
        return `${this.name} debugs ${Student.name}'s code on ${subject}`;
    }
}

const fred = new Person({
    name: 'Fred',
    age: 37,
    location: 'Bedrock'
});

const joe = new Person({
    name: 'Joe',
    age: 44,
    location: 'New York'
})

const jeff = new Instructor({
    name: 'Jeff',
    age: 32,
    location: 'Los Angeles',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const annie = new Instructor({
    name: 'Annie',
    age: 38,
    location: 'Jupiter',
    favLanguage: 'React',
    specialty: 'Back-end',
    catchPhrase: `Dolla dolla bills yall`
})

const larissa = new Student({
    name: 'Larissa',
    age: 30,
    location: 'Boulder',
    previousBackground: 'Student',
    className: 'WEB19',
    favSubjects: 'JavaScript, Node, React'
})

const amy = new Student({
    name: 'Amy',
    age: 24,
    location: 'Denver',
    previousBackground: 'Waitress',
    className: 'WEB23',
    favSubjects: 'HTML, CSS'
})

const steph = new ProjectManager({
    name: 'Steph',
    age: 28,
    location: 'Miami',
    gradClassName: 'WEB16',
    favInstructor: 'Brit'
})

const dennis = new ProjectManager({
    name: 'Dennis',
    age: 34,
    location: 'Paris',
    gradClassName: 'UX1',
    favInstructor: 'Kevin'
})

console.log(jeff.speak());
console.log(steph.age);
console.log(amy.location);
console.log(steph.gradClassName);
console.log(steph.grade(amy, 'JavaScript'));
console.log(annie.demo('CSS'));
console.log(larissa.listsSubjects());
console.log(amy.PRAssignment('React'));
console.log(larissa.sprintChallenge('CSS'));
console.log(steph.standUp('Steph23'));
console.log(dennis.debugsCode(larissa, 'HTML'));