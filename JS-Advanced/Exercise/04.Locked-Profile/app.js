async function lockedProfile() {
    let main = document.querySelector('main');
    let url = 'http://localhost:3030/jsonstore/advanced/profiles';

    let response = await fetch(url);
    let data = await response.json();
    let objectsFromData = Object.values(data);

    createProfile(objectsFromData[0]);
    createProfile(objectsFromData[1]);
    createProfile(objectsFromData[2]);
    createProfile(objectsFromData[3]);
    createProfile(objectsFromData[4]);

    let showBtns = document.querySelectorAll('button');

    for (let el of showBtns) {
        el.addEventListener('click', show);
    }



}

function show(event) {
    let curProfile = event.target.parentElement;

    let isChecked = curProfile.querySelector('input[value="lock"]:checked');

    if (isChecked == null) {

        if (event.target.textContent == 'Show more') {
            let btn = curProfile.querySelector('button');
            let toShow = curProfile.querySelector('.user1Username');
            toShow.style.display = 'block';
            btn.textContent = 'Hide it';
        } else {
            let toHide = curProfile.querySelector('.user1Username');
            let btn = curProfile.querySelector('button');
            btn.textContent = 'Show more';
            toHide.style.display = 'none';
        }
    } else {
        let toHide = curProfile.querySelector('.user1Username');
        let btn = curProfile.querySelector('button');
        btn.textContent = 'Show more';
        toHide.style.display = 'none';
    }
}


// function hide(event) {
//     let curSection = event.target.parentElement;

//     let toHide = curSection.querySelector('.user1Username');
//     let btn = curSection.querySelector('button');
//     btn.textContent = 'Show more';
//     toHide.style.display = 'none';
// }
function createProfile(obj) {
    main.innerHTML += `<div class="profile">
        <img src="./iconProfile2.png" class="userIcon" />
        <label>Lock</label>
        <input type="radio" name="user1Locked" value="lock" checked>
        <label>Unlock</label>
        <input type="radio" name="user1Locked" value="unlock"><br>
        <hr>
        <label>Username</label>
        <input type="text" name="user1Username" value="${obj.username}" disabled readonly />
        <div class="user1Username" style = "display:none;">
            <hr>
            <label>Email:</label>
            <input type="email" name="user1Email" value="${obj.email}" disabled readonly />
            <label>Age:</label>
            <input type="text" name="user1Age" value="${obj.age}" disabled readonly />
        </div>
        
        <button>Show more</button>
    </div>`
}

