import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const incremenet = () => {
        dispatch(counterActions.increment());
    };
    const decremenet = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            <h1>
                value =
                {' '}
                {counterValue}
            </h1>
            <Button onClick={incremenet}>
                increment
            </Button>
            <Button onClick={decremenet}>
                decrement
            </Button>
        </div>
    );
};
