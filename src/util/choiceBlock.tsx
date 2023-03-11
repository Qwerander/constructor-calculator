import { EqualBlock } from "../components/EqualBlock/EqualBlock";
import { NumbersBlock } from "../components/NumberBlock/NumbersBlock";
import { OperatorBlock } from "../components/OperatorsBlock/OperatorBlock";
import { ScreenBlock } from "../components/ScreenBlock/ScreenBlock";
import { Block } from "../store/dragSlice";

export const choiceBlock = (name: string) => {
  switch (name) {
    case Block.SCREEN:
      return <ScreenBlock />
    case Block.OPERATORS:
      return <OperatorBlock />
    case Block.NUMBERS:
      return <NumbersBlock />
    case Block.EQUAL:
      return <EqualBlock />
  }
};