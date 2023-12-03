function followers(arr) {
    let line = arr.shift();

    let fb = {};

    while (line != 'Log out') {
        let tokens = line.split(': ');
        let command = tokens[0];

        if (command == 'New follower') {
            let userName = tokens[1];
            if (!(userName in fb)) {
                let person = {
                    likes: 0,
                    comments: 0
                }

                fb[userName] = person;
            }
        } else if (command == 'Like') {
            let userName = tokens[1];
            let count = Number(tokens[2]);

            if (userName in fb) {
                fb[userName].likes += count;
            } else {
                let person = {
                    likes: count,
                    comments: 0
                }
                fb[userName] = person;
            }
        } else if (command == 'Comment') {
            let userName = tokens[1];
            if (userName in fb) {
                fb[userName].comments += 1;
            } else {
                let person = {
                    likes: 0,
                    comments: 1
                }

                fb[userName] = person;
            }
        } else if (command == 'Blocked') {
            let userName = tokens[1];
            if (userName in fb) {
                delete fb[userName];
            } else {
                console.log(`${userName} doesn't exist.`);
            }
        }

        line = arr.shift();
    }

    let entries = Object.entries(fb);
    console.log(`${entries.length} followers`);

    for (let entry of entries) {
        let user = entry[0];
        let { likes, comments } = entry[1];

        let total = Number(likes) + Number(comments);
        console.log(`${user}: ${total}`);
    }
}

followers(["Blocked: Amy",

    "Comment: Amy",

    "New follower: Amy",

    "Like: Tom: 5",

    "Like: Ellie: 5",

    "Log out"]);