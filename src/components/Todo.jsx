import React, { forwardRef, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion, useDragControls, useMotionValue } from "framer-motion";
import Checkbox from "components/Checkbox";
import Icon from "components/Icon";
import TodoName from "components/TodoName";

const Wrapper = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  padding: 4px 0;
`;

const DragHandle = styled.div`
  cursor: move;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
`;

const DragIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.grey};
  width: 24px;
  height: 24px;
`;

const StyledCheckbox = styled(Checkbox)`
  flex-shrink: 0;
`;

const Name = styled(TodoName)`
  margin: 2px 12px;
`;

const CloseButton = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: 4px;
  width: 24px;
  height: 24px;
`;

const CloseIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.grey};
  width: 16px;
  height: 16px;
`;

const Todo = forwardRef(
  (
    {
      className,
      index,
      onItemDrag,
      onKeyDown,
      onNameChange,
      onNameKeyDown,
      onRemove,
      onRename,
      onStatusChange,
      setPosition,
      todo,
    },
    ref
  ) => {
    const [isDragging, setIsDragging] = useState(false);
    const dragControls = useDragControls();
    const wrapperRef = useRef(null);
    const dragOriginY = useMotionValue(0);

    useEffect(() => {
      setPosition(index, {
        top: wrapperRef.current.offsetTop,
        height: wrapperRef.current.offsetHeight,
      });
    });

    function onDragStart() {
      setIsDragging(true);
    }

    function onDragEnd() {
      setIsDragging(false);
    }

    function onPointerDown(event) {
      dragControls.start(event);
    }

    const itemVariants = {
      flat: {
        zIndex: 0,
        transition: { delay: 2 },
      },
      onTop: {
        zIndex: 1,
      },
    };

    return (
      <Wrapper
        animate={isDragging ? "onTop" : "flat"}
        drag="y"
        dragControls={dragControls}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={1}
        dragMomentum={false}
        dragListener={false}
        dragOriginY={dragOriginY}
        onDrag={(e, { point }) => onItemDrag(index, point.y)}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        positionTransition={({ delta }) => {
          if (isDragging) {
            dragOriginY.set(dragOriginY.get() + delta.y);
          }
          return !isDragging;
        }}
        ref={wrapperRef}
        variants={itemVariants}
      >
        <DragHandle onPointerDown={onPointerDown}>
          <DragIcon icon="drag" />
        </DragHandle>
        <StyledCheckbox value={todo.isDone} onChange={onStatusChange} />
        <Name
          ref={ref}
          isDone={todo.isDone}
          value={todo.name}
          onChange={onNameChange}
          onKeyDown={(event) => onNameKeyDown(event, todo)}
        />
        <CloseButton onClick={() => onRemove(todo.id)}>
          <CloseIcon icon="cancel_16" />
        </CloseButton>
      </Wrapper>
    );
  }
);

export default Todo;
