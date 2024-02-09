window.addEventListener('load', solve);

function solve() {
        let nextBtn = document.getElementById('next-btn');
        nextBtn.addEventListener('click', moveToPartInfo);
        let model = '';
        let year = '';
        let part = '';
        let partNum = '';
        let condition = '';

        function moveToPartInfo(event) {
                event.preventDefault();
                nextBtn.disabled = true;

                let [carModelRef, carYearRef, partRef, partNumRef] = document.querySelectorAll('input');
                let conditionRef = document.getElementById('condition');

                if (carModelRef.value == '' || carYearRef.value == '' || partRef.value == '' || partNumRef.value == '' || conditionRef.value == '') {
                        return;
                }

                if (carYearRef.value < 1980 || carYearRef.value > 2023) {
                        return;
                }

                model = carModelRef.value;
                year = carYearRef.value;
                part = partRef.value;
                partNum = partNumRef.value;
                condition = conditionRef.value;

                createPartInfo(model, year, part, partNum, condition);

                carModelRef.value = '';
                carYearRef.value = '';
                partRef.value = '';
                partNumRef.value = '';
                conditionRef.value = '';

                let img = document.getElementById('complete-img');
                img.style.visibility = 'hidden';
                let p = document.getElementById('complete-text');
                p.textContent = '';

        }

        function createPartInfo(model, year, part, partNum, condition) {
                let ulEl = document.querySelector('.info-list');

                let liEl = document.createElement('li');
                liEl.classList.add('part-content');
                let articleEl = document.createElement('article');
                let pModel = document.createElement('p');
                pModel.textContent = `Car Model: ${model}`;
                let pYear = document.createElement('p');
                pYear.textContent = `Car Year: ${year}`;
                let pPart = document.createElement('p');
                pPart.textContent = `Part Name: ${part}`;
                let pPartNum = document.createElement('p');
                pPartNum.textContent = `Part Number: ${partNum}`;
                let pCondition = document.createElement('p');
                pCondition.textContent = `Condition: ${condition}`
                articleEl.appendChild(pModel);
                articleEl.appendChild(pYear);
                articleEl.appendChild(pPart);
                articleEl.appendChild(pPartNum);
                articleEl.appendChild(pCondition);
                liEl.appendChild(articleEl);
                let editBtn = document.createElement('button');
                editBtn.textContent = 'Edit';
                editBtn.addEventListener('click', moveBack);
                editBtn.classList.add('edit-btn');
                let continueBtn = document.createElement('button');
                continueBtn.addEventListener('click', moveToOrder);
                continueBtn.textContent = 'Continue';
                continueBtn.classList.add('continue-btn');
                liEl.appendChild(editBtn);
                liEl.appendChild(continueBtn);
                ulEl.appendChild(liEl);
        }

        function moveBack() {
                let ulEl = document.querySelector('.info-list');

                //let liEl = document.querySelector('.part-content');

                while (ulEl.firstChild) {
                        ulEl.removeChild(ulEl.firstChild);
                }

                let [carModelRef, carYearRef, partRef, partNumRef] = document.querySelectorAll('input');
                let conditionRef = document.getElementById('condition');

                carModelRef.value = model;
                carYearRef.value = year;
                partRef.value = part;
                partNumRef.value = partNum;
                conditionRef.value = condition;
                nextBtn.disabled = false;

        }

        function moveToOrder() {
                let ulEl = document.querySelector('.confirm-list');
                let ulEl2 = document.querySelector('.info-list');

                //let liEl = document.querySelector('.part-content');

                while (ulEl2.firstChild) {
                        ulEl2.removeChild(ulEl2.firstChild);
                }
                // Creating a new list item
                let liEl = document.createElement('li');
                liEl.classList.add('part-content');
                let articleEl = document.createElement('article');
                let pModel = document.createElement('p');
                pModel.textContent = `Car Model: ${model}`;
                let pYear = document.createElement('p');
                pYear.textContent = `Car Year: ${year}`;
                let pPart = document.createElement('p');
                pPart.textContent = `Part Name: ${part}`;
                let pPartNum = document.createElement('p');
                pPartNum.textContent = `Part Number: ${partNum}`;
                let pCondition = document.createElement('p');
                pCondition.textContent = `Condition: ${condition}`
                articleEl.appendChild(pModel);
                articleEl.appendChild(pYear);
                articleEl.appendChild(pPart);
                articleEl.appendChild(pPartNum);
                articleEl.appendChild(pCondition);
                liEl.appendChild(articleEl);
                let confirmBtn = document.createElement('button');
                confirmBtn.textContent = 'Confirm';
                confirmBtn.addEventListener('click', removeLi);
                confirmBtn.classList.add('confirm-btn');
                let cancelBtn = document.createElement('button');
                cancelBtn.addEventListener('click', cancel);
                cancelBtn.textContent = 'Cancel';
                cancelBtn.classList.add('cancel-btn');
                liEl.appendChild(confirmBtn);
                liEl.appendChild(cancelBtn);

                // Appending the new list item to the confirm list
                ulEl.appendChild(liEl);
        }


        function removeLi() {
                let ulEl = document.querySelector('.confirm-list');

                //let liEl = document.querySelector('ul.confirm-list li.part-content');

                while (ulEl.firstChild) {
                        ulEl.removeChild(ulEl.firstChild);
                }


                nextBtn.disabled = false;

                let img = document.getElementById('complete-img');
                img.style.visibility = 'visible';
                let p = document.getElementById('complete-text');
                p.textContent = 'Part is Ordered!';
        }

        function cancel() {
                let ulEl = document.querySelector('.confirm-list');

                // Selecting the last child (latest added) of the confirm list
                let liEl = ulEl.lastElementChild;

                // Removing its child elements
                while (liEl.firstChild) {
                        liEl.removeChild(liEl.firstChild);
                }

                // Enabling the next button
                nextBtn.disabled = false;
        }

};




