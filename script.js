//setup default webpage
function init(){
  var start;
  
  
}



var pets = {
      
    
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
      hunger: 4, //start out a bit hungry
    },
    
    
    dog: {
      name: 'dog',
      personality: 'friendly',
      energy: 'high',
      greet : function(){
        alert('bark');
      },
      hunger: 3,//should eat soon.
    },
   
    duck: {
      name: 'duck',
      personality: 'friendly',
      energy: 'medium',
      greet : function(){
        alert('QUACKK');
      },
      hunger: 3,//should eat soon.
    },
    cow: {
      name: 'cow',
      personality: 'friendly',
      energy: 'medium',
      greet : function(){
        alert('moo');
      },
      hunger: 3,//should eat soon.
    },
    
    seal : {
      name: 'seal',
      personality: 'warily',
      energy: 'medium',
      greet: function(){
        alert('claps fins');
      },
      hunger: 2, //hungry
      
    },
   owl : {
      name: 'owl',
      personality: 'friendly',
      energy: 'low',
      greet: function(){
        alert('hoot, hoot');
      },
      hunger: 2, //hungry
      
    },
    
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
      name: 'T-Rex',
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
  //gen a random num btwn 1 and 4
  //Math.floor(Math.random() *4) + 1;
  tier = Math.floor(Math.random() *4) + 1;
    return tier;
}

function genPetCode(){
  var code;
  //gen a random num btwn 0 and 2
  code = Math.floor(Math.random() *3);
    return code;
}

petCodes = {// 4 levels with 3 pets at each level.
  code1 : ['lizard','slug','rabbit'],
  code2: ['cat','dog','duck'],
  code3: ['cow', 'seal','owl' ],
  code4: ['monkey','tRex','unicorn'],
}
  
function getPet(){//eventually want to add in logic that only allows you to select 3x.
  var pet,petInfo,num,secondNum,chosenNum, count, petImage;
  
  petInfo = document.getElementById('displayArea');
  num = genPetTier();
  chosenNum = num;
    console.log(chosenNum);
  
  if(chosenNum === 1){
    secondNum = genPetCode();
    //selects a random pet from the specified tier.
      pet = petCodes.code1[secondNum];
      console.log(pet);
      petInfo.textContent = pets[pet].name;
      pets[pet].greet();
      displayPet(pet);
      
      return pet;
      
  }
  
  else if(chosenNum === 2){
    secondNum = genPetCode();
      pet = petCodes.code2[secondNum];
      petInfo.textContent = pets[pet].name;
      pets[pet].greet();
      displayPet(pet);
      
  
      return pet;
  }
  else if(chosenNum === 3){
    secondNum = genPetCode();
      pet = petCodes.code3[secondNum];
      petInfo.textContent = pets[pet].name;
      pets[pet].greet();
      displayPet(pet);
      
      return pet;
  }
  else if(chosenNum === 4){
    secondNum = genPetCode();
      pet = petCodes.code4[secondNum];
      petInfo.textContent = pets[pet].name;
      pets[pet].greet();
      displayPet(pet);
      return pet;
    }
}

//after end user has chosen pet
function displayPet(pet){
  var chosenPet,description;
  description = document.getElementById('displayArea');
  //this.pet = chosenPet;
  //chosenPet = pets[pet];
  
  if(pets[pet].hunger > 5){
     description.textContent =`Your pet is a ${pets[pet].name} it's temperment is ${pets[pet].personality} and is currently not hungry`;
    //console.log(`your pet ${pets[pet].name} is not hungry `);
   
  } else if(pets[pet].hunger < 5 || pets[pet].hunger > 2 ){
    description.textContent =`Your pet is a ${pets[pet].name} it's temperment is ${pets[pet].personality} and is currently hungry`;
    //console.log(`your pet ${pets[pet].name} is hungry `);
    
  } else {
    //console.log(`your pet ${pets[pet].name} is about to leave to live with their counsin.`);
   description.textContent =`Your pet is a ${pets[pet].name} it's temperment is ${pets[pet].personality} and is currently about to leave to live with their counsin.`;
  }
  
  //description.textContent =`Your pet is a ${pets[pet].name} it's temperment is ${pets[pet].personality} and is currently ${pets[pet].hunger}`;

  
}

//play games with pet.
