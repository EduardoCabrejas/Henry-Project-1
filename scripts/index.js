const repository = new Repository();

function createCard(activity) {
    const { id, title, description, imgUrl } = activity;
    const titleElement = document.createElement('h3');
    const pElement = document.createElement('p');
    const imgElement = document.createElement('img');
    const dltBtn = document.createElement('button');
    
    titleElement.innerText = title;
    pElement.innerText = description;
    imgElement.src = imgUrl;
    dltBtn.innerText = 'Eliminar';
    
    titleElement.classList.add('title');
    pElement.classList.add('p');
    imgElement.classList.add('img');
    dltBtn.classList.add('button', 'deleteButton'); 
    
    const divCards = document.createElement('div');

    divCards.appendChild(titleElement);
    divCards.appendChild(pElement);
    divCards.appendChild(imgElement);
    divCards.appendChild(dltBtn);
    divCards.classList.add('div');
    divCards.addEventListener('mouseenter', () => {

        dltBtn.style.display = 'block';
    });
    divCards.addEventListener('mouseleave', () => {
        dltBtn.style.display = 'none';
    });
    dltBtn.addEventListener('click', (event) => {
        event.preventDefault();
        repository.deleteActivity(id);
        divCards.remove();
    });
    
    return divCards;
}

function cardsContainer(){
    const activitiesContainer = document.getElementById('activities');
    activitiesContainer.innerHTML = ''; 
    const activities = repository.getAllActivities();
    const activityElements = activities.map((act) => createCard(act));
    activityElements.forEach((element) => activitiesContainer.appendChild(element))
}

function handler(event) {
    
    event.preventDefault();

    const title = document.getElementById('title-input').value;
    const description = document.getElementById('description-input').value;
    const img = document.getElementById('imgUrl-input').value;
    if (title === '' || description === '' || img === '') {
        alert("Hay datos incompletos. Por favor, rellene todos los campos.");
        return;
    }
    repository.createActivity(title, description, img);
    document.getElementById('title-input').value = '';
    document.getElementById('description-input').value = '';
    document.getElementById('imgUrl-input').value = '';
    cardsContainer();
}

const actBtn = document.getElementById('actBtn');
actBtn.addEventListener('click', handler);
