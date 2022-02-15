//this is a template folder for you to move into your src folder after you created a boilerplate
import React, {useState} from "react";
// Starting code for if your group Chose CLASS COMPONENTS
// export class Dog extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//        <img alt="dog" src="https://www.dogfoodadvisor.com/wp-content/uploads/2019/08/golden-retriever-puppy-343x335.jpg"></img>
//       <button>I'm more of a cat person!</button>
//       </div>
//     );
//   }
// }

//Starting code for if your group Chose FUNCTION COMPONENTS
export const Dog = props => {
  const animals = [
    {animal:'dog', animalSrc:'https://www.dogfoodadvisor.com/wp-content/uploads/2019/08/golden-retriever-puppy-343x335.jpg', animalSound:'Woof!'},
    {animal:'cat', animalSrc:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Cat_Janna.jpg/150px-Cat_Janna.jpg', animalSound: 'Purr!'}
]

    const [animal, setAnimal] = useState(animals[0].animal)
    const [animalSrc, setAnimalSrc] = useState(animals[0].animalSrc)
    const [animalSound, setAnimalSound] = useState(animals[0].animalSound)
    
    //console.log(animal)

    const thisAlt = animal === animals[0].animal ? animals[0].animal : animals[1].animal;
    const thisSrc = animalSrc === animals[0].animalSrc ? animals[0].animalSrc : animals[1].animalSrc;
    const showAnimalSound = animalSound === animals[0].animalSound ? animals[0].animalSound : animals[1].animalSound;


    function changeAnimal(){
        let newAnimal = '';
        if (animal === 'dog') {
          newAnimal = 'cat';
          setAnimal(newAnimal)
          setAnimalSrc(animals[1].animalSrc)
          setAnimalSound(animals[1].animalSound)
        console.log(`Its a little ${newAnimal}!`)
        } else {
          newAnimal = 'dog';
          setAnimal(newAnimal)
          setAnimalSrc(animals[0].animalSrc)
          setAnimalSound(animals[0].animalSound)
          console.log(`Its a little ${newAnimal}!`)
        }
    }

  return (
    <div className="flexMe">
      <img
        className="sizeMe"
        alt={thisAlt}
        src={thisSrc}
      ></img>
      <button
        onClick={changeAnimal}
      >{animal === 'dog' ? "I'm more of a cat person!" : "I'm more of a dog person!"}
      </button>
      <p>{thisAlt}'s go {showAnimalSound}</p>
    </div>
  );
};

//sorry for the mess, i will comment this later..
