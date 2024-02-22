class BookClub {
    constructor(library) {
        this.library = library;
        this.books = [];
        this.members = [];
    }

    addBook(title, author) {
        let data = this.books.find(book => book.title == title);

        if (!data) {
            this.books.push({ title, author });
            return `The book "${title}" by ${author} has been added to ${this.library} library.`
        }


        return `The book "${title}" by ${author} is already in ${this.library} library.`

    }

    addMember(memberName) {

        if (this.members.includes(memberName)) {
            return `Member ${memberName} is already a part of the book club.`
        }

        this.members.push(memberName);
        return `Member ${memberName} has been joined to the book club.`
    }

    assignBookToMember(memberName, bookTitle) {
        let data = this.books.find(book => book.title === bookTitle);

        if (!data) {
            throw new Error(`Book "${bookTitle}" not found.`);
        }

        if (!this.members.includes(memberName)) {
            throw new Error(`Member ${memberName} not found.`);
        }

        let indx = this.books.indexOf(data);
        this.books.splice(indx, 1);
        return `Member ${memberName} has been assigned the book "${bookTitle}" by ${data.author}.`;
    }

    generateReadingReport() {
        if (this.members.length == 0) {
            return `No members in the book club.`
        }

        if (this.books.length == 0) {
            return `No available books in the library.`
        }

        let result = [`Available Books in ${this.library} library:`]

        for (let { title, author } of this.books) {
            result.push(`"${title}" by ${author}`);
        }

        return result.join('\n');
    }
}

const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Peter"));
console.log(myBookClub.assignBookToMember("Peter", "1984"));
console.log(myBookClub.assignBookToMember("Alice", "To Kill a Mockingbird"));
console.log(myBookClub.generateReadingReport());