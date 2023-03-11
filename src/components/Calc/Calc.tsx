import { ReactComponent as FieldSVG } from "../../assets/img/dropField.svg"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { ElementWrapper } from "../ElementWrapper/ElementWrapper"
import { choiceBlock } from "../../util/choiceBlock"
import { dropItem } from "../../store/dragSlice"

export const Calc = () => {
    const dispatch = useAppDispatch()
    const { idZone, items } = useAppSelector(state => state.drag.calc)

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        dispatch(dropItem())
    }

    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    
    }
    const dragOverHandlerEmpty = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.currentTarget.classList.add('empty')
    }
    const dragLeaveHandlerEmpty = (e: React.DragEvent<HTMLDivElement>) => {
        e.currentTarget.classList.remove('empty')
    }


    return (
        <div className='calc'
            onDrop={(e) => dropHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
        >
            {items.map(item => (
                <ElementWrapper
                    item={item}
                    idZone={idZone}
                    key={item.id}
                >
                    {choiceBlock(item.name)}
                </ElementWrapper>
            ))}

            {items.length === 0 &&
                <div className='calc'
                    onDragOver={(e) => dragOverHandlerEmpty(e)}
                    onDragLeave={(e) => dragLeaveHandlerEmpty(e)}
                >
                    < FieldSVG />
                </div>
            }

        </div>
    )
}
