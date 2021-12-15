let spin = document.querySelector('#spin');
let win = document.querySelector('#win');

// Array of the prizes
const arrayPrizes = [0,2,3,5,10,20,100,300,500,1000];
document.getElementById('win').value = 0;

// Function triggered when the Spin Button was clicked
spin.addEventListener('click', function turn(){
    
    let balance = parseInt(document.querySelector('#amount').value);
    let bet = parseInt(document.querySelector('#bet').value);
    let win = parseInt(document.querySelector('#win').value);
    let prize = 0;
    if(balance >= bet) {
        document.getElementById('amount').value = balance - bet;
        //          Images  0,1,2,3,4,5,6,7,8,9
        let arrayFigures = [0,0,0,0,0,0,0,0,0,0];

        // Randomizer for each slot
        let n1 = Math.floor(Math.random() * 10);
        arrayFigures[n1]++;
        let n2 = Math.floor(Math.random() * 10);
        arrayFigures[n2]++;
        let n3 = Math.floor(Math.random() * 10);
        arrayFigures[n3]++;

        document.getElementById('reel1').src = `./Images/${n1}.png`;
        document.getElementById('reel2').src = `./Images/${n2}.png`;
        document.getElementById('reel3').src = `./Images/${n3}.png`;

        for (i=0; i < arrayFigures.length; i++) {
            if (arrayFigures[i] == 3) { // Conditional result
                prize = arrayPrizes[i] * bet;
                document.getElementById('win').value = win + prize;
                let winAudio = new Audio('./winAudio.mp3'); // SFX (only triggered if the round was won)
                winAudio.play();
                break;
            }
        }
    }
})