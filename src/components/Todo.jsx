import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion, useDragControls, useMotionValue } from "framer-motion";
import Checkbox from "components/Checkbox";
import Icon from "components/Icon";

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
`;

const DragIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.grey};
  width: 24px;
  height: 24px;
`;

// const NameInput = styled.input`
//   color: ${({ theme }) => theme.colors.darkGrey};
//   font-size: ${({ theme }) => theme.fontSize.m};
// `;

const Name = styled.p`
  color: ${({ theme }) => theme.colors.icons};
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: 20px;
  margin: 2px 12px;
  text-align: left;
  text-decoration: ${({ isDone }) => (isDone ? "line-through" : "none")};
  width: 70%;
`;

const CloseButton = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  width: 24px;
  height: 24px;
`;

const CloseIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.grey};
  width: 16px;
  height: 16px;
`;

const Todo = ({
  className,
  index,
  onItemDrag,
  onRemove,
  onRename,
  onStatusChange,
  setPosition,
  todo,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const dragControls = useDragControls();
  const ref = useRef(null);
  const dragOriginY = useMotionValue(0);

  useEffect(() => {
    setPosition(index, {
      top: ref.current.offsetTop,
      height: ref.current.offsetHeight,
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
      ref={ref}
      variants={itemVariants}
    >
      <DragHandle onPointerDown={onPointerDown}>
        <DragIcon icon="drag" />
      </DragHandle>
      <Checkbox value={todo.isDone} onChange={onStatusChange} />
      <Name isDone={todo.isDone}>{todo.name}</Name>
      <CloseButton onClick={() => onRemove(todo.id)}>
        <CloseIcon icon="cancel_16" />
      </CloseButton>
    </Wrapper>
  );
};

export default Todo;
// <NameInput value={todo.name} onChange={onRename} />
