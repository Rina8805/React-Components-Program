import { Component } from "react";

export class Counter extends Component{

    constructor()
    {
        super();
        this.state={
            no:0
        }
        this.onIncreaseCount=this.onIncreaseCount.bind(this)
    }

    onIncreaseCount()
    {
        this.setState(previousState => ({no:previousState.no+1}))
    }

     render()
     {
        // let no=0;
        // function onIncreaseCount()
        // {
        //    no++;
        //    console.log(no);
        // }

        return <div>
               <h1>Count :- {this.state.no}</h1>
               <button onClick={this.onIncreaseCount}>Increase Count</button>
        </div>
     }

}