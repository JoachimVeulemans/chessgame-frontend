export class User {
    id: string;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    bio: string;
    password: string;
    salt: string;
    language: string;

    /** constructor */
    constructor(id: string = '', username: string = '', firstname: string = '', lastname: string = '', email: string = '', bio: string = '', password: string = '', salt: string = '', language: string = '') {
        this.id = id;
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.bio = bio;
        this.password = password;
        this.salt = salt;
        this.language = language;
    }

    editProfile(user: User, username: string, firstname: string, lastname: string, email: string, bio: string, language: string): User {
        user.username = username;
        user.firstname = firstname;
        user.lastname = lastname;
        user.email = email;
        user.bio = bio;
        user.language = language;

        return user;
    }
}
