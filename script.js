//global variables
var hungerlvl, petCodes,count, petSelected;
//allow end user to select a new pet 3x.

//setup default webpage
function init(){
  var start;
  start = true;
  if(start){
count = 0;
petSelected = false;
  }
 //implement luck.
}

init();



function selectPetCount(){
  var btnClicked;
  //count isn't increasing past 1 which means each new pet selection is separated.
  count = 0;
  btnClicked = document.querySelector('#petSelect');
  console.log(btnClicked);
  if(genPetCode){
    count ++;
  console.log(count);
    if(count > 3){
      console.log(count);
    return alert('sorry you have selected a pet 3x and cannot choose again!');
  }
    
     
  }
  
 
}

var pets = {
      //common//
    lizard: {
      name: 'lizard',
      personality: 'friendly',
      energy: 'low',
      greet: function(){
        alert('hiss');
      },
      hunger: 6, //not hungry
      
    },
    slug: {
      name: 'slug',
      personality: 'friendly',
      energy: 'medium',
      greet: function(){
        alert('blinks eyes');
      },
      hunger: 6, //not hungry
      
    },
    rabbit: {
      name: 'rabbit',
      personality: 'friendly',
      energy: 'high',
      greet: function(){
        alert('hop, hop');
      },
      hunger: 4, //a bit hungry
      
    },
    cat : {
      name: 'cat',
      personality: 'friendly',
      energy: 'medium',
      greet : function(){
        alert('meow');
      },
      hunger: 5, //start out a bit hungry
    },
    
    dog: {
      name: 'dog',
      personality: 'friendly',
      energy: 'high',
      greet : function(){
        alert('bark');
      },
      hunger: 4,//should eat soon.
    },
   //less common//
    duck: {
      name: 'duck',
      personality: 'friendly',
      energy: 'medium',
      greet : function(){
        alert('QUACKK');
      },
      hunger: 4,//should eat soon.
    },
    cow: {
      name: 'cow',
      personality: 'friendly',
      energy: 'medium',
      greet : function(){
        alert('moo');
      },
      hunger: 4,//should eat soon.
    },
    
    seal : {
      name: 'seal',
      personality: 'warily',
      energy: 'medium',
      greet: function(){
        alert('claps fins');
      },
      hunger: 3, //hungry
      
    },
   owl : {
      name: 'owl',
      personality: 'friendly',
      energy: 'low',
      greet: function(){
        alert('hoot, hoot');
      },
      hunger: 3, //hungry
      
    },
    //rare//
    monkey: {

      name: 'monkey',
      personality: 'friendly',
      energy: 'high',
      greet: function(){
        alert("scream");
      },
      hunger: 3,
    },
    tRex: {
      name: 'tRex',
      personality: 'angry',
      energy: 'high',
      greet: function(){
        alert("ROAR");
      },
      hunger: 2,
    },
    unicorn: {
      name: 'unicorn',
      personality: 'angry',
      energy: 'high',
      greet: function(){
        alert("stomps foot");
      },
      hunger: 2,
    }
  
}


function genPetTier(){
  var tier;
  //gen a random num btwn 1 and 4 to select a tier.
  //Math.floor(Math.random() *4) + 1;
  tier = Math.floor(Math.random() *4) + 1;
    return tier;
}

function genPetCode(){
  var code;
  
  //gen a random num btwn 0 and 2 b/c there are 3 animals
  code = Math.floor(Math.random() *3);
  
    return code;
}

petCodes = {// 4 levels with 3 pets at each level.
  code1 : ['lizard','slug','rabbit'],
  code2: ['cat','dog','duck'],
  code3: ['cow', 'seal','owl' ],
  code4: ['monkey','tRex','unicorn'],
}

function isPetHungry(){
  //hungerlvl 0 is not hungry //  1 is hungry // 2 is very hungry..
  
  if(hungerlvl === 6){
    return 0;
  } else if(hungerlvl > 4 && hungerlvl < 2){
    return 1;
  } else {//I want to make it so that the pet is thinking of leaving at this point.
    return 2;
  }
}
  
function getPet(){//eventually want to add in logic that only allows you to select 3x.
  var pet,petInfo,num,secondNum,chosenNum, petImage;
  //show the gen info for new pet.
  petInfo = document.getElementById('displayArea');
  
  //show image of pet.
  petImage = document.getElementById('defaultPetImage');
  
  chosenNum = genPetTier();
  console.log(chosenNum);
  if(count < 3 && petSelected === false){
    
    console.log(count);
  if(chosenNum === 1){
    secondNum = genPetCode();
    //selects a random pet from the specified tier.
      pet = petCodes.code1[secondNum];
      console.log(pet);
      petInfo.textContent = pets[pet].name;
      pets[pet].greet();
      displayPet(pet);
      //displays the pet picture based on petCodes.
      petImage.src='default' + pets[pet].name +'.jpeg';
      
      
      
  }
  
  else if(chosenNum === 2){
    secondNum = genPetCode();
      pet = petCodes.code2[secondNum];
      petInfo.textContent = pets[pet].name;
      pets[pet].greet();
      displayPet(pet);
      petImage.src='default' + pets[pet].name+'.jpeg';
  
      
  }
  else if(chosenNum === 3){
    secondNum = genPetCode();
      pet = petCodes.code3[secondNum];
      petInfo.textContent = pets[pet].name;
      pets[pet].greet();
      displayPet(pet);
      petImage.src='default' + pets[pet].name+'.jpeg';
    
      
  }
  else if(chosenNum === 4){
    secondNum = genPetCode();
      pet = petCodes.code4[secondNum];
      petInfo.textContent = pets[pet].name;
      pets[pet].greet();
      displayPet(pet);
      petImage.src='default' + pets[pet].name+'.jpeg';
      
      }
      count++;
      console.log(count);
      return pet, chosenNum;
    }
    
    else if(petSelected === true){
      alert('congrats on choosing your new pet!');
    }
    else {
      alert('sorry you have rolled for a pet 3x!');
    }
}

function showBtns(){
  //displays buttons related to pet after pet has been chosen.
  var showFeedBtn, showPlayBtn;
  
  if(petSelected || count ===3){
    showPlayBtn = document.getElementById('playGames').style.visibility ='visible';
    showFeedBtn = document.getElementById('feed').style.visibility ='visible';
   // return showFeedBtn, showPlayBtn;
  }
}

function hideBtns(){
  var hideChoosePetBtn, petChosen, petChosenVal;
  //hide btns that aren't needed after pet has been chosen.
  if(petSelected || count > 3 ){
  if(genPetCode){
    hideChoosePetBtn = document.getElementById('start').style.visibility = 'hidden';
    return hideChoosePetBtn;
    }
  }
}

//button for making it so you can't change pets.
function petConfirmed(){
  var userConfirmed;
  userConfirmed = document.getElementById('confirmPet').addEventListener('click', function(e){
        userConfirmed = true;
       petSelected = true;
       console.log(userConfirmed);
      alert('congrats on your new pet!');
      //petSelected
      return petSelected;

  });
 
}


//after end user has chosen pet
function displayPet(pet){
  //need to add in images for each pet next.
  var chosenPet,description;
  description = document.getElementById('displayArea');
  //this.pet = chosenPet;
  //chosenPet = pets[pet];
  console.log(isPetHungry(pet));
  showBtns();
  
  if(isPetHungry(pet) > 5){
     description.textContent =`Your pet is a ${pets[pet].name} it's temperment is ${pets[pet].personality} and is currently not hungry`;
     
    //console.log(`your pet ${pets[pet].name} is not hungry `);
   
  } else if(isPetHungry(pet) < 5 || isPetHungry(pet) > 2 ){
    description.textContent =`Your pet is a ${pets[pet].name} it's temperment is ${pets[pet].personality} and is currently hungry`;
  
    //console.log(`your pet ${pets[pet].name} is hungry `);
    
  } else {
    //console.log(`your pet ${pets[pet].name} is about to leave to live with their counsin.`);
   description.textContent =`Your pet is a ${pets[pet].name} it's temperment is ${pets[pet].personality} and is currently about to leave to live with their counsin.`;
  
  }
  
  //description.textContent =`Your pet is a ${pets[pet].name} it's temperment is ${pets[pet].personality} and is currently ${pets[pet].hunger}`;

  
}



//play games with pet.
//coin flip games
//higher or lower.


//figure out how to earn food either through games.