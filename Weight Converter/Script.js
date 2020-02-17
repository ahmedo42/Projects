document.getElementById('output').style.visibility = "hidden";
    document.getElementById('kgInput').addEventListener('input',function(Weight){
        let kgs = Weight.target.value;
        document.getElementById('gramsOutput').innerHTML = (kgs * 1000).toFixed(2);
        document.getElementById('lbsOutput').innerHTML = (kgs  * 2.20462).toFixed(2);
        document.getElementById('ozOutput').innerHTML = (kgs  * 35.274).toFixed(2);
        document.getElementById('output').style.visibility = "visible";
});