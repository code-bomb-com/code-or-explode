import React, { Component } from 'react'

export default class MazeInstructions extends Component {
    render() {
        return (
            <div className="textBlock">
                <p>
                On the Subject of Mazes
                <br></br>
                This seems to be some kind of maze, probably stolen off of a restaurant placemat.
                Find the maze with matching circular markings.
                The defuser must navigate the white light to the red
                triangle using the arrow buttons.
                Warning: Do not cross the lines shown in the maze. These
                lines are invisible on the bomb.
                </p>
            </div>
        )
    }
}
