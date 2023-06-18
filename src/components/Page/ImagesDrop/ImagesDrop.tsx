import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { useState } from 'react'
import { IMAGES_DESKTOP, InterfaceDesktopImages } from './images_drop'
import s from './images_drop.module.css'
import './images_drop.css'

const ImagesDrop = () => {
  const [images, setImages] = useState<InterfaceDesktopImages[]>(IMAGES_DESKTOP)
  const order = (
    arr: InterfaceDesktopImages[],
    starti: number,
    endi: number,
  ): InterfaceDesktopImages[] => {
    const result = [...arr]
    const [removed] = result.splice(starti, 1)
    result.splice(endi, 0, removed)
    return result
  }
  return (
    <DragDropContext
      // eslint-disable-next-line no-console
      onDragEnd={result => {
        const { source, destination } = result
        if (!destination) return
        if (source.index === destination.index && source.droppableId === destination.droppableId)
          return
        setImages(image => order(image, source.index, destination.index))
      }}
    >
      <Droppable droppableId='images' direction='horizontal'>
        {droppableProvided => (
          <div {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
            {images.map((item, idx) => (
              <Draggable key={item.id} draggableId={`${item.id}`} index={idx}>
                {draggableProvided => (
                  <div
                    {...draggableProvided.draggableProps}
                    {...draggableProvided.dragHandleProps}
                    ref={draggableProvided.innerRef}
                  >
                    <div
                      style={{ backgroundImage: `url("${item.image}")` }}
                      className={`${s.image_responsive} webpage_image_responsive--${idx}`}
                    ></div>
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default ImagesDrop
