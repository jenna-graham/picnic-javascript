const pickSoda = document.getElementById('soda');
const button = document.getElementById('button');

pickSoda.addEventListener('click', () => {
    console.log('you clicked the soda!');
    pickSoda.classList.toggle('picked');
});

const pickCheese = document.getElementById('cheese');

pickCheese.addEventListener('click', () => {
    console.log('you clicked the cheese!');
    pickCheese.classList.toggle('picked');
});

const pickGrapes = document.getElementById('grapes');

pickGrapes.addEventListener('click', () => {
    console.log('you clicked the grapes!');
    pickGrapes.classList.toggle('picked');
});

const pickBread = document.getElementById('bread');

pickBread.addEventListener('click', () => {
    console.log('you clicked the bread!');
    pickBread.classList.toggle('picked');
});

const pickWatermelon = document.getElementById('watermelon');

pickWatermelon.addEventListener('click', () => {
    console.log('you clicked the watermelon!');
    pickWatermelon.classList.toggle('picked');
});

button.addEventListener('click', () => {
    pickSoda.classList.remove('picked');
    pickCheese.classList.remove('picked');
    pickGrapes.classList.remove('picked');
    pickBread.classList.remove('picked');
    pickWatermelon.classList.remove('picked');

    console.log('picking random food!');

    var food = ['soda', 'cheese', 'grapes', 'bread', 'watermelon'];
    let randomFood = food[Math.floor(Math.random() * 5)];
    
    console.log('random food added');

    if (randomFood === 'soda') {
        pickSoda.classList.add('picked');
    } else if (randomFood === 'cheese') {
        pickCheese.classList.add('picked');
    } else if (randomFood === 'grapes') {
        pickGrapes.classList.add('picked');
    } else if (randomFood === 'bread') {
        pickBread.classList.add('picked');
    } else {
        pickWatermelon.classList.add('picked');
    }
});
