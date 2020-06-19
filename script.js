window.onload = function () {
    let clickedMe = document.querySelector('#generate-button');

    clickedMe.addEventListener('click', (e) => {
        let minValue = parseInt(document.getElementById("min").value, 10);
        let maxValue = parseInt(document.getElementById("max").value, 10);
        let rand = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        this.console.log(rand);
        document.querySelector('#number-wrapper').textContent = rand;

        let numiconArea = document.querySelector("#numicon-area");
        
        numiconArea.textContent = "";

        while (rand > 0) {
            generate(rand > 10 ? 10 : rand, numiconArea);
            rand = rand - 10;
        }
    });

    function generate(boxCount, targetElement) {
        let numiconWrapper = document.createElement("div");
        numiconWrapper.className = "numicon-wrapper";
        targetElement.appendChild(numiconWrapper);

        if (boxCount != 1 && boxCount % 2 != 0) {
            this.console.log("odd number");
            let blankDiv = document.createElement("div");
            blankDiv.className = "numicon-box numicon-box-blank";
            numiconWrapper.appendChild(blankDiv);
        }

        for (i = 0; i < boxCount; i++) {
            let numiconDiv = document.createElement("div");
            numiconDiv.className = "numicon-box numicon-" + boxCount;
            let numiconInner = document.createElement("div");
            numiconInner.className = "numicon-box-inner";
            numiconDiv.appendChild(numiconInner);
            let numiconCircle = document.createElement("div");
            numiconCircle.className = "numicon-circle";
            numiconInner.appendChild(numiconCircle);
            numiconWrapper.appendChild(numiconDiv);
        }
    }
}