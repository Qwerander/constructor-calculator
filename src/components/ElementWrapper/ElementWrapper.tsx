import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { ItemType, Mode, ModeOrId, dragItem, setCurrentOrder, sortItems, deleteItem } from '../../store/dragSlice';
import { ElemetWrapperStyled } from './ElementWrapper.styles';

interface ItemWrapperProps {
    children: React.ReactNode | React.ReactElement,
    idZone: ModeOrId
    item: ItemType
}

export const ElementWrapper: FC<ItemWrapperProps> = ({ children, idZone, item }) => {

    const dispatch = useAppDispatch();

    const currentItemOrder = useAppSelector(state => state.drag.currentOrder)
    const mode = useAppSelector(state => state.drag.mode)

    const dragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
        dispatch(dragItem({ item }))
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const target = e.currentTarget
        target.classList.remove('active');
    }

    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const target = e.currentTarget
        if (target.className === 'wrapper-calc') {
            target.classList.add('active')
        }
        dispatch(setCurrentOrder({ order: item.order }))
    }

    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        const target = e.currentTarget
        target.classList.remove('active');
    }

    const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
        const target = e.currentTarget
        target.classList.remove('active');
        dispatch(sortItems({ orderA: item.order, orderB: currentItemOrder }))
    }

    const deleteElement = () => {
        dispatch(deleteItem({id: item.id}))
    }

    return (
        <ElemetWrapperStyled isRemoved={item.isRemoved} mode={mode}>
            {
                idZone === Mode.CONSTRUCTOR
                    ?
                    <div
                        draggable={!item.isRemoved}
                        onDragStart={(e) => dragStartHandler(e)}
                        onDragEnd={(e) => dragEndHandler(e)}
                        className="wrapper"
                    >
                        {children}
                    </div>
                    :
                    mode === Mode.CONSTRUCTOR
                        ?
                        <div
                            draggable={mode === Mode.CONSTRUCTOR}
                            onDragStart={(e) => dragStartHandler(e)}
                            onDrop={(e) => dropHandler(e)}
                            onDragOver={(e) => dragOverHandler(e)}
                            onDragLeave={(e) => dragLeaveHandler(e)}
                            onDragEnd={(e) => dragEndHandler(e)}
                            onDoubleClick={() => deleteElement()}
                            className="wrapper-calc"
                        >
                            {children}
                        </div>
                        :
                        <div
                            className="wrapper-calc"
                        >
                            {children}
                        </div>
            }
        </ElemetWrapperStyled>
    );
};
