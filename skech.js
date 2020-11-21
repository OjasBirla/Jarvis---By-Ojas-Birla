let Query;

const Speech = new p5.Speech();
Speech.onLoad = Greet;

function Greet(){
    Speech.speak('Welcome Sir');
    Speech.speak(`I'm Jarvis, Here to Help you Out`);

    const IHaveGreeted = document.createElement('div');
    IHaveGreeted.classList.add('Computer-Container');
    IHaveGreeted.innerText = `Welcome Sir, I'm Jarvis, Here to Help you Out`
    document.getElementById('Parent').appendChild(IHaveGreeted);
}

const speechRec = new p5.SpeechRec(navigator.language || 'en-US', gotQuery);
speechRec.start(true, false);

function gotQuery(){
    if(speechRec.resultValue){
        Query = speechRec.resultString;

        const youSaid = document.createElement('div');
        youSaid.classList.add('User-Container');
        youSaid.innerText = Query;
        document.getElementById('Parent').appendChild(youSaid);

        // Speech.speak(Query);
        ResolveQuery();
    }   else{
        Query = document .getElementById('QueryInput').value;
        document .getElementById('QueryInput').value = '';

        const youAsked = document.createElement('div');
        youAsked.classList.add('User-Container');
        youAsked.innerText = Query;
        document.getElementById('Parent').appendChild(youAsked);

        // Speech.speak(Query);
        ResolveQuery();
    }
}

 function ResolveQuery(){
     if(Query === 'How Are You' || Query === 'How are you' || Query === 'how are you' || Query === 'How are You'){
        const Response = 'I am Fine, Thanks for asking';
        Speech.speak(Response);

        const response = document.createElement('div');
        response.classList.add('Computer-Container');
        response.innerText = Response;
        document.getElementById('Parent').appendChild(response);
     }

     else if(Query === 'Open Youtube' || Query === 'Open youtube' || Query === "open Youtube" || Query === 'open youtube' || Query === 'open YouTube'){
        const Response = 'Opening Youtube';
        Speech.speak(Response);

        const response = document.createElement('div');
        response.classList.add('Computer-Container');
        response.innerText = Response;
        document.getElementById('Parent').appendChild(response);

        window.open('https://www.youtube.com');
     }

     else if(Query === 'Open Google' || Query === 'open Google' || Query === 'Open google' || Query === 'open google'){
        const Response = 'Opening Google';
        Speech.speak(Response);

        const response = document.createElement('div');
        response.classList.add('Computer-Container');
        response.innerText = Response;
        document.getElementById('Parent').appendChild(response);

        window.open('https://google.com');
     }

     else if(Query === 'Open Gmail' || Query === "Open Mail" || Query === 'open Gmail' || Query === "open Mail" || Query === 'Open gmail' || Query === "Open mail" || Query === 'open gmail' || Query === "open mail"){
        const Response = 'Opening Gmail';
        Speech.speak(Response);

        const response = document.createElement('div');
        response.classList.add('Computer-Container');
        response.innerText = Response;
        document.getElementById('Parent').appendChild(response);

        window.open('https://accounts.google.com/b/1/AddMailService');
     }

     else if(Query === 'Open Google Classroom' || Query === 'open Google Classroom' || Query === 'open google Classroom' || Query === 'open google classroom' || Query === 'Open google classroom' || Query === 'Open Google classroom' || Query === 'open Google classroom'){
         const Response = 'Opening Google Classroom';
         Speech.speak(Response);

         const response = document.createElement('div');
         response.classList.add('Computer-Container');
         response.innerText = Response;
         document.getElementById('Parent').appendChild(response);

         window.open('https://classroom.google.com/u/0/h');
     }
 }   