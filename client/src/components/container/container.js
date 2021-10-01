import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function Container({ choices }) {    
    const [choicearray, updateChoicearray] = useState(choices);
    console.log("WOO", choices);

    function handleOnDragEnd(result) {
        if (!result.destination ) return;
        const items = Array.from(choicearray);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updateChoicearray(items);
        console.log(items);
        const newChoices = items.slice();
        console.log(newChoices);
    };

    return (
        <div className="tile is-fullwidth">
            <article className="tile is-child notification instructions">
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="choices">
                        {(provided) => (
                        <ul className="votechoices" {...provided.droppableProps} ref={provided.innerRef}>
                                {choicearray.map(({name}, index) => {
                                    return (
                                        <Draggable key={index} draggableId={name} index={index} >
                                        {(provided) => (
                                        <li className="votelist" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                            <div className="card">
                                                <div className="card-content">
                                                    <p className="title is-size-4">
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
