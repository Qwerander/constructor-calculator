import { AppStyled } from './App.styled';
import { Constructor } from './components/Constructor/Constructor';
import { Switch } from './components/Switch/Switch';
import { Calc } from './components/Calc/Calc';
import { useAppSelector } from './store/hooks';
import { Mode } from './store/dragSlice';


export function App() {

  const mode = useAppSelector(state => state.drag.mode)

  return (
    <AppStyled mode={mode}>
      <div className="container">
        <div className="main">
          <Switch />
           {mode === Mode.CONSTRUCTOR ? <Constructor /> : <div className='calc'></div>}
          <Calc />
        </div>
      </div>
    </AppStyled>
  );
}