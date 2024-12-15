namespace Subjects {
    // Declaration merging to add experienceTeachingC
    export interface Teacher {
        experienceTeachingC?: number;
    }

    export class Cpp extends Subject {
        getRequirements(): string {
            return "Here is the list of requirements for Cpp";
        }

        getAvailableTeacher(): string {
            return this.teacher.experienceTeachingC && this.teacher.experienceTeachingC > 0
                ? `Available Teacher: ${this.teacher.firstName}`
                : "No available teacher";
        }
    }
}