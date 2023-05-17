import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { useState } from 'react'
import { order } from '../../../helpers/helpers'
import { IMAGES_DESKTOP, InterfaceDesktopImages } from './images_drop'
import s from './images_drop.module.css'

const ImagesDrop = () => {
  const [images, setImages] = useState<InterfaceDesktopImages[]>(IMAGES_DESKTOP)
  return (
    <DragDropContext
      // eslint-disable-next-line no-console
      onDragEnd={(result) => console.log(result)}
    >
      <Droppable droppableId='horizontal'>
        {(droppableProvided) => (
          <div {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
            {images.map((item, index) => (
              <Draggable key={item.id} draggableId={`${item.id}`} index={index}>
                {(draggableProvided) => (
                  <div
                    {...draggableProvided.draggableProps}
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.dragHandleProps}
                    className={`${s.image_responsive} ${s[`image_responsive--${index}`]}`}
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                )}
              </Draggable>
            ))}
            {droppableProvided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default ImagesDrop
