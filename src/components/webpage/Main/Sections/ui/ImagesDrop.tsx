import { order } from '../../../../../helpers/helpers'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import * as style from '../../../../../styles/webpage/main/sections/interface'
import { IMAGES_DESKTOP } from '../../../../../constant/constant'
import { InterfaceDesktopImages } from '../../../../interface/interface'
import { useState } from 'react'


const ImagesDrop = () => {
  const [images, setImages] = useState<InterfaceDesktopImages[]>(IMAGES_DESKTOP)
  return (
    <DragDropContext
      onDragEnd={(result) => {
        const { source, destination } = result
        if (!destination) {
          return
        }
        if (source.index === destination.index && source.droppableId === destination.droppableId) {
          return
        }
        setImages(order(images, source.index, destination.index))
      }}
    >
      <Droppable droppableId='horizontal' direction='horizontal'>
        {(droppableProvided) => (
          <div {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
            {images.map((item, index) => (
              <Draggable key={item.id} draggableId={`${item.id}`} index={index}>
                {(draggableProvided) => (
                  <style.ImageBoxResponsive
                    {...draggableProvided.draggableProps}
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.dragHandleProps}
                    className={`${index}`}
                    id={item.image}
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
