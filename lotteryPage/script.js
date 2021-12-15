// Spin Function
(function(){
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.button');
    let deg = 0;
    

    // This function displays the chosen slot when the "LOCK-IN" button was clicked
    let lockIn = document.querySelector('#lock');
    lockIn.addEventListener('click', () => {
        let obj = document.getElementById("mySelect");
        let demo = document.querySelector('#demo');
        demo.textContent = obj.options[obj.selectedIndex].text;
    })
    
    // This function will be triggered when the startButton was clicked
    startButton.addEventListener('click', () =>{
        // SFX for the wheel's spin
        let spinAudio = new Audio('./spinAudio.mp3');
        spinAudio.play();
        startButton.getElementsByClassName.pointerEvents = 'none';
        // Wheel's spin animation and randomization
        deg = Math.floor(5000 + Math.random()*5000);
        wheel.style.transition = 'all 10s ease';
        wheel.style.transform = `rotate(${deg}deg)`;
        wheel.classList.add('blur');
    });
    // Function that will automatically run after the wheel's spin
    wheel.addEventListener('transitionend',() =>{
        // SFX for results
        let winAudio = new Audio('./winAudio.mp3');
        winAudio.play();
        // Since the spin is already finished, it is necessary to remove the transitions and animations that was initially set
        wheel.classList.remove('blur');
        startButton.getElementsByClassName.pointerEvents = 'auto';
        wheel.style.transition = 'none';
        
        const actualDeg = deg%360; // Let's declare a variable for the full circle (360 degrees)
        wheel.style.transform = `rotate(${actualDeg}deg)`;
        
        let element = document.querySelector('#result');

        // Conditional results (based on degree)
        // Since a full circle has 360 degrees, I split it into the number of slots (37)
        if (actualDeg >=0 && actualDeg <9.72){
            document.querySelector('#result').textContent = "26";
            element.classList.remove('green');
            element.classList.remove('red');
            element.classList.add('black');
        } if (actualDeg >=9.73 && actualDeg <19.44){
            document.querySelector('#result').textContent = "3";
            element.classList.remove('green');
            element.classList.remove('black');
            element.classList.add('red');
        } if (actualDeg >=19.45 && actualDeg <29.16){
            document.querySelector('#result').textContent = "35";
            element.classList.remove('green');
            element.classList.remove('red');
            element.classList.add('black');
        } if (actualDeg >=29.17 && actualDeg <39.88){
            document.querySelector('#result').textContent = "12";
            element.classList.remove('green');
            element.classList.remove('black');
            element.classList.add('red');
        } if (actualDeg >=39.89 && actualDeg <48.6){
            document.querySelector('#result').textContent = "28";
            element.classList.remove('green');
            element.classList.remove('red');
            element.classList.add('black');
        } if (actualDeg >=48.61 && actualDeg <58.32){
            document.querySelector('#result').textContent = "7";
            element.classList.remove('green');
            element.classList.remove('black');
            element.classList.add('red');
        } if (actualDeg >=58.33 && actualDeg <68.04){
            document.querySelector('#result').textContent = "29";
            element.classList.remove('green');
            element.classList.remove('red');
            element.classList.add('black');
        } if (actualDeg >=68.05 && actualDeg <77.76){
            document.querySelector('#result').textContent = "18";
            element.classList.remove('green');
            element.classList.remove('black');
            element.classList.add('red');
        } if (actualDeg >=77.77 && actualDeg <87.48){
            document.querySelector('#result').textContent = "22";
            element.classList.remove('green');
            element.classList.remove('red');
            element.classList.add('black');
        } if (actualDeg >=87.49 && actualDeg <97.2){
            document.querySelector('#result').textContent = "9";
            element.classList.remove('green');
            element.classList.remove('black');
            element.classList.add('red');
        } if (actualDeg >=97.3 && actualDeg <106.92){
            document.querySelector('#result').textContent = "31";
            element.classList.remove('green');
            element.classList.remove('red');
            element.classList.add('black');
        } if (actualDeg >=106.93 && actualDeg <116.64){
            document.querySelector('#result').textContent = "14";
            element.classList.remove('green');
            element.classList.remove('black');
            element.classList.add('red');
        } if (actualDeg >=116.65 && actualDeg <126.36){
            document.querySelector('#result').textContent = "20";
            element.classList.remove('green');
            element.classList.remove('red');
            element.classList.add('black');
        } if (actualDeg >=126.37 && actualDeg <136.08){
            document.querySelector('#result').textContent = "1";
            element.classList.remove('green');
            element.classList.remove('black');
            element.classList.add('red');
        } if (actualDeg >=136.09 && actualDeg <146.8){
            document.querySelector('#result').textContent = "33";
            element.classList.remove('green');
            element.classList.remove('red');
            element.classList.add('black');
        } if (actualDeg >=146.81 && actualDeg <155.52){
            document.querySelector('#result').textContent = "16";
            element.classList.remove('green');
            element.classList.remove('black');
            element.classList.add('red');
        } if (actualDeg >=155.53 && actualDeg <165.24){
            document.querySelector('#result').textContent = "24";
            element.classList.remove('green');
            element.classList.remove('red');
            element.classList.add('black');
        } if (actualDeg >=165.25 && actualDeg <174.96){
            document.querySelector('#result').textContent = "5";
            element.classList.remove('green');
            element.classList.remove('black');
            element.classList.add('red');
        } if (actualDeg >=174.97 && actualDeg <184.68){
            document.querySelector('#result').textContent = "10";
            element.classList.remove('green');
            element.classList.remove('red');
            element.classList.add('black');
        } if (actualDeg >=184.69 && actualDeg <194.4){
            document.querySelector('#result').textContent = "23";
            element.classList.remove('green');
            element.classList.remove('black');
            element.classList.add('red');
        } if (actualDeg >=194.41 && actualDeg <204.12){
            document.querySelector('#result').textContent = "8";
            element.classList.remove('green');
            element.classList.remove('red');
            element.classList.add('black');
        } if (actualDeg >=204.13 && actualDeg <213.84){
            document.querySelector('#result').textContent = "30";
            element.classList.remove('green');
            element.classList.remove('black');
            element.classList.add('red');
        } if (actualDeg >=213.85 && actualDeg <224.56){
            document.querySelector('#result').textContent = "11";
            element.classList.remove('green');
            element.classList.remove('red');
            element.classList.add('black');
        } if (actualDeg >=224.57 && actualDeg <233.28){
            document.querySelector('#result').textContent = "36";
            element.classList.remove('green');
            element.classList.remove('black');
            element.classList.add('red');
        } if (actualDeg >=233.29 && actualDeg <243){
            document.querySelector('#result').textContent = "13";
            element.classList.remove('green');
            element.classList.remove('red');
            element.classList.add('black');
        } if (actualDeg >=243.01 && actualDeg <252.72){
            document.querySelector('#result').textContent = "27";
            element.classList.remove('green');
            element.classList.remove('black');
            element.classList.add('red');
        } if (actualDeg >=252.73 && actualDeg <262.44){
            document.querySelector('#result').textContent = "6";
            element.classList.remove('green');
            element.classList.remove('red');
            element.classList.add('black');
        } if (actualDeg >=262.45 && actualDeg <272.16){
            document.querySelector('#result').textContent = "34";
            element.classList.remove('green');
            element.classList.remove('black');
            element.classList.add('red');
        } if (actualDeg >=272.17 && actualDeg <281.88){
            document.querySelector('#result').textContent = "17";
            element.classList.remove('green');
            element.classList.remove('red');
            element.classList.add('black');
        } if (actualDeg >=281.89 && actualDeg <291.6){
            document.querySelector('#result').textContent = "25";
            element.classList.remove('green');
            element.classList.remove('black');
            element.classList.add('red');
        } if (actualDeg >=291.61 && actualDeg <301.32){
            document.querySelector('#result').textContent = "2";
            element.classList.remove('green');
            element.classList.remove('red');
            element.classList.add('black');
        } if (actualDeg >=301.33 && actualDeg <311.04){
            document.querySelector('#result').textContent = "21";
            element.classList.remove('green');
            element.classList.remove('black');
            element.classList.add('red');
        } if (actualDeg >=311.05 && actualDeg <320.76){
            document.querySelector('#result').textContent = "4";
            element.classList.remove('green');
            element.classList.remove('red');
            element.classList.add('black');
        } if (actualDeg >=320.77 && actualDeg <330.48){
            document.querySelector('#result').textContent = "19";
            element.classList.remove('green');
            element.classList.remove('black');
            element.classList.add('red');
        } if (actualDeg >=330.49 && actualDeg <340.2){
            document.querySelector('#result').textContent = "15";
            element.classList.remove('green');
            element.classList.remove('red');
            element.classList.add('black');
        } if (actualDeg >=340.21 && actualDeg <349.92){
            document.querySelector('#result').textContent = "32";
            element.classList.remove('green');
            element.classList.remove('black');
            element.classList.add('red');
        } if (actualDeg >=349.93 && actualDeg <360){
            document.querySelector('#result').textContent = "0";
            element.classList.remove('black');
            element.classList.remove('red');
            element.classList.add('green');
        }
    })
})();