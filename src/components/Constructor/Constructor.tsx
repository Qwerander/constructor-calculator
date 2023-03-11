import { useAppSelector } from "../../store/hooks"
import { choiceBlock } from "../../util/choiceBlock"
import { ElementWrapper } from "../ElementWrapper/ElementWrapper"

export const Constructor = () => {
    const { idZone, items } = useAppSelector(state => state.drag.constructor)

    return (
        <div className="constructor">
            {items.map(item => (
                <ElementWrapper 
                    item={item}
                    idZone={idZone}
                    key={item.id}
                >
                    {choiceBlock(item.name)}
                </ElementWrapper>
            ))}
        </div>
    )
}