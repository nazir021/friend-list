import React from 'react';
import Person from'./Person'
const PersonList = (props) =>{
    const people=[
      {
        img:62,name:'John',job:'Developer'
      },
      {
        img:64,name:'Bappy',job:'Marchendizer'
      },
      {
        img:66,name:'Akib',job:'Developer'
      },
      {
        img:68,name:'Shamrat',job:'Network Engineer'
      },
      {
        img:70,name:'Masud',job:'Textile Engineer'
      }
    ]
    return(
      <section>
        <Person person={people[0]}/>
        <Person person={people[1]}>BGMEA</Person>
        <Person person={people[2]}/>
        <Person person={people[3]}/>
        <Person person={people[4]}/>
      </section>
    )
  }

  
export default PersonList;