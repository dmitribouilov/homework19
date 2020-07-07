import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Filter from "./components/Filter";
import Title from "./components/Title";
import friends from "./friends.json";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
   friends,
   order: "Ascending"
  }

 

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  filterToFire= toFire=> {

   
    
    
    const friends = this.state.friends.filter(friend=> friend.toFire !== toFire);
    this.setState({ friends });

  };

  filterAscDesc= AscDesc=> {
    console.log(AscDesc);


    let orderedVar = 1
    let reverseVar = 12

   if (AscDesc === "Asc") {
    
    for (let index = 0; index < this.state.friends.length; index++) {
      
      console.log(index);
      //console.log(this.state.friends[0].id)

     

      this.state.friends[index].id = reverseVar

      reverseVar = reverseVar - 1

      console.log(this.state.friends[index].id);

    }

      
   }else{ 

    for (let index = 10; index > this.state.friends.length; index--) {
      
      console.log("hello from descending");
      //console.log(this.state.friends[0].id)

      this.state.friends[index].id = orderedVar

      orderedVar = orderedVar + 1

      console.log(this.state.friends[index].id);

    }
    
     
    
    
    
    
    //console.log("Bls")
   }
    
    this.setState({ friends });
    
    //const friends = this.state.friends.filter(friend=> friend.toFire !== toFire);
    //this.setState({ friends });

  };

  reset= ()=> {

    console.log("reset clicked")

    this.setState({ friends });

  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>

        {(

        <Filter
        filterToFire = {this.filterToFire}
        filterAscDesc = {this.filterAscDesc}
        reset = {this.reset}
        />

         

        )}
         
        <Title>Employee List</Title>
        
        {this.state.friends.map(friend => (
          <FriendCard
            toFire = {this.filterToFire}
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
