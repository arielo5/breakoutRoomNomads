import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const choices = [
    {
        id: "1",
        name: "Spaghetti and Meatballs"
    },
    {
        id: "2",
        name: "Pizza Pie"
    },{
        id: "3",
        name: "Hot Peanuts and Mustard"
    },{
        id: "4",
        name: "Warm Gin"
    },{
        id: "5",
        name: "Day Old Bread"
    }
]


export default function Container() {    
    const [choicearray, updateChoicearray] = useState(choices);

    function handleOnDragEnd(result) {
        if (!result.destination ) return;
        const items = Array.from(choicearray);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updateChoicearray(items);
    }
    return (
        <div class="tile is-fullwidth">
            <article class="tile is-child notification instructions">
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="choices">
                        {(provided) => (
                        <ul className="votechoices" {...provided.droppableProps} ref={provided.innerRef}>
                                {choicearray.map(({id, name}, index) => {
                                    return (
                                        <Draggable key={id} draggableId={id} index={index} >
                                        {(provided) => (
                                        <li class="votelist" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                            <div class="card">
                                                <div class="card-content">
                                                    <p class="title is-size-4">
                                                        { name }
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        )}
                                    </Draggable>
                                    );
                                })}
                                {provided.placeholder}
                            </ul>            
                        )}
                    </Droppable>
                </DragDropContext>
            </article>
        </div>
    );
}
