import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ItemType = {
  id: number
  name: string
  order: number
  isRemoved: boolean
}

export enum Mode {
  CONSTRUCTOR = 'constructor',
  CALC = 'calc'
}

export type ModeOrId = Mode.CONSTRUCTOR | Mode.CALC

export type CalcType = {
  idZone: ModeOrId
  items: Array<ItemType>
}

export enum Block {
  SCREEN = 'screen',
  OPERATORS = 'operators',
  NUMBERS = 'numbers',
  EQUAL = 'equal'
}


type CalcStateTape = {
  mode: ModeOrId
  constructor: CalcType
  move: Array<ItemType>
  currentOrder: number
  calc: CalcType
}


const initialState: CalcStateTape = {
  mode: Mode.CONSTRUCTOR,
  constructor: {
    idZone: Mode.CONSTRUCTOR,
    items: [
      { id: 1, name: Block.SCREEN, order: 1, isRemoved: false },
      { id: 2, name: Block.OPERATORS, order: 2, isRemoved: false },
      { id: 3, name: Block.NUMBERS, order: 3, isRemoved: false },
      { id: 4, name: Block.EQUAL, order: 4, isRemoved: false },
    ]
  },
  move: [],
  currentOrder: 0,
  calc: {
    idZone: Mode.CALC,
    items: []
  }
}

export const dragSlice = createSlice({
  name: 'drag',
  initialState,

  reducers: {
    changeMode: (state) => {
      state.mode = state.mode === Mode.CONSTRUCTOR ? Mode.CALC : Mode.CONSTRUCTOR
    },
    dragItem: (state, action: PayloadAction<{ item: ItemType }>) => {
      state.move = []
      state.move.push(action.payload.item)
    },
    dropItem: (state) => {
      if (!state.calc.items.find(i => i.id === state.move[0].id)) {
        state.calc.items.push(state.move[0])
        state.constructor.items.find(item => item.id === state.move[0].id)!.isRemoved = true
      }
    },
    setCurrentOrder: (state, action: PayloadAction<{ order: number }>) => {
      state.currentOrder = action.payload.order
    },
    deleteItem: (state, action: PayloadAction<{ id: number }>) => {
      const itemIndex = state.calc.items.findIndex(item => item.id === action.payload.id)
      state.constructor.items.find(item => item.id === action.payload.id)!.isRemoved = false
      if (itemIndex || itemIndex === 0) {
        state.calc.items.splice(itemIndex, 1)
      }
    },
    sortItems: (state, action: PayloadAction<{ orderA: number, orderB: number }>) => {
      const itemA = state.calc.items.find(item => item.id === action.payload.orderA && item.name !== Block.SCREEN)
      const itemB = state.calc.items.find(item => item.id === action.payload.orderB && item.name !== Block.SCREEN)
      const itemC = state.calc.items.find(item => item.name === Block.SCREEN)

      if (itemA && itemB && (action.payload.orderA !== action.payload.orderB)) {
        const temp = itemA.order
        itemA.order = itemB.order
        itemB.order = temp
      }
      if (itemC) {
        itemC.order = 0
      }

      state.calc.items.sort((a, b) => a.order - b.order)
    },
  },

});

export const {
  changeMode,
  sortItems,
  dragItem,
  dropItem,
  setCurrentOrder,
  deleteItem
} = dragSlice.actions;


export default dragSlice.reducer;
