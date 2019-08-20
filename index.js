window.onclick = function (){
    document.querySelector("#Excuse").innerHTML = excusegenerator();
    console.log('Hello World!! ');
};

var excusegenerator = function(){

    let pronoun = ['The '];
    let subject = ['Clown ', 'Police ', 'Girl ', 'Bear ', 'Dog '];
    let action = ['stole my ', 'took my ', 'ate my '];
    let posetion = ['car ', 'keys ', 'money ', 'underwear ', 'homework '];
    let where = ['on the beach. ', 'in my house. ', 'in my car. '];

    let prIndex = Math.floor (Math.random() * pronoun.length);
    let sIndex = Math.floor (Math.random() * subject.length);
    let aIndex = Math.floor (Math.random() * action.length);
    let pIndex = Math.floor (Math.random() * posetion.length);
    let wIndex = Math.floor (Math.random() * where.length);

    return pronoun[prIndex] + '' + subject[sIndex] +''+ action[aIndex] +''+ posetion[pIndex] +''+ where[wIndex];
};