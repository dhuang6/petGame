//make the pets using objects?
/*
energy is how many times they can play games for winning coins.
code is how rare
0 = not rare
3 is very rare

function luck(){
  var lucky;
  lucky = Math.floor(Math.random() *2);
  if(lucky ===1){
    var total = genPetTier() +1;
    return total;
  }
  return;
}



 parrot: {
      name: 'parrot',
      personality: 'friendly',
      energy: 'high',
      greet : function(){
        alert('SQUAKK');
      },
      hunger: 3,//should eat soon.
    },

roll a random number at beginning to get new pet.
*/
var pet = {
  //hunger is a range from 1 very hungry 5 not hungry at all.
  lizard: {
      code: 1,
      name: 'lizard',
      personality: 'friendly',
      energy: 'low',
      greet: function(){
        alert('hiss');
      },
      hunger: 5, //not hungry
      
    },
    slug: {
      code: 1,
      name: 'slug',
      personality: 'friendly',
      energy: 'medium',
      greet: function(){
        alert('blinks eyes');
      },
      hunger: 5, //not hungry
      
    },
    rabbit: {
      code: 1,
      name: 'rabbit',
      personality: 'friendly',
      energy: 'high',
      greet: function(){
        alert('hop, hop');
      },
      hunger: 4, //not hungry
      
    },
    cat : {
      code: 2,
      name: 'cat',
      personality: 'friendly',
      energy: 'medium',
      greet : function(){
        alert('meow');
      },
      hunger: 4, //start out a bit hungry
    },
    
    
    dog: {
      code: 2,
      name: 'dog',
      personality: 'friendly',
      energy: 'high',
      greet : function(){
        alert('bark');
      },
      hunger: 3,//should eat soon.
    },
    parrot: {
      code: 2,
      name: 'parrot',
      personality: 'friendly',
      energy: 'high',
      greet : function(){
        alert('SQUAKK');
      },
      hunger: 3,//should eat soon.
    },
    duck: {
      code: 2,
      name: 'duck',
      personality: 'friendly',
      energy: 'medium',
      greet : function(){
        alert('QUACKK');
      },
      hunger: 3,//should eat soon.
    },
    cow: {
      code: 3,
      name: 'cow',
      personality: 'friendly',
      energy: 'medium',
      greet : function(){
        alert('moo');
      },
      hunger: 3,//should eat soon.
    },
    
    seal : {
      code: 3,
      name: 'seal',
      personality: 'warily',
      energy: 'medium',
      greet: function(){
        alert('claps fins');
      },
      hunger: 2, //hungry
      
    },
   owl : {
      code: 3,
      name: 'owl',
      personality: 'friendly',
      energy: 'low',
      greet: function(){
        alert('hoot, hoot');
      },
      hunger: 2, //hungry
      
    },
    
    monkey: {
      code: 4,
      name: 'monkey',
      personality: 'friendly',
      energy: 'high',
      greet: function(){
        alert("scream");
      },
      hunger: 3,
    },
    tRex: {
      code: 4,
      name: 'T-Rex',
      personality: 'angry',
      energy: 'high',
      greet: function(){
        alert("ROAR");
      },
      hunger: 2,
    },
    unicorn: {
       code: 4,
      name: 'unicorn',
      personality: 'angry',
      energy: 'high',
      greet: function(){
        alert("stomps foot");
      },
      hunger: 2,
    }
  
}
function genNum(){
  var num;
  //gen a random num btwn 1 and 4
return num = Math.floor(Math.random() *4) + 1;
  
}

function petEquation(num){
  var petPick,tier1, tier2, tier3, tier4;
  tier1 = ['lizard','slug','rabbit'];
  
  tier1 = ['cat','dog'];
  
  tier2 = ['cow'];
  tier3 = ['monkey','trex','unicorn'];
 var genPet = genNum();
  if(genPet === 1){
    petPick = genNum();
    for(let i = 0; i < tier1.length; i++){
      petPick === tier1[i];
      console.log(tier1[i]);
    }
  }
  if(genPet === 2){
    petPick = genNum();
      console.log(petPick);
    }
  }
  if(genPet === 3){
    petPick = genNum();
   
      console.log(petPick);
  }
  }
  if(genPet === 4){
    petPick = genNum();
   
      console.log(petPick);
    }
  }
}

function genPet(){
  var count, petNum,choice;
  count = 0;
  
  
  if(count <3){
    petNum = genNum();
    if(petNum === 1){
      choice = genNum();
      console.log(choice);
      /*
      for(let i = 0; i < tier0.length; i++){
         choice === tier0[i];
         count++;
        console.log(choice);
        */
      }
        
      }
      
    }
   else {
    alert('Sorry you cannot roll for a new pet!');
  }
}



//play games with pet.
/*
makes them happier and can win food
*/





//feed pet



//shop to buy supplies randomly generate

//can only visit a certain number of times.

