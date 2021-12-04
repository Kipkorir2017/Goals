import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
 
componentName="goal"
goals:Goal []=[
new Goal  (1,'Watch finding Nemo','Most interesting',new Date(2022,1,22)),
new Goal (2,'Buy cookies','important',new Date(2022,1,11)),
new Goal(3,'Get new Phone case','Will bring more',new Date(2022,1,15)),
];
toggleDetails(index:number){
  this.goals[index].showDescription=!this.goals[index].showDescription

}
deleteGoal(isComplete:boolean, index:number){
  if (isComplete){
    // this.goals.splice(index,1)
let toDelete=confirm(`Are yo sure you want to delete  ${this.goals[index].name}`)
if(toDelete){
  this.goals.splice(index,1)
}
  }
}


addNewGoal(goal:any){
  let goalLength=this.goals.length;
  goal.id =goalLength + 1;
  goal.completeDate =new Date(goal.completeDate)
  this.goals.push(goal)
}
  constructor() {
    // this.goals=["Watching Finding nemo","Buy cookies ","Look for phone cases"]
   }

  ngOnInit(): void {
  }

}
