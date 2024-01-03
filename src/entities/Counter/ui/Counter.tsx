import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const { t } = useTranslation();
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
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="increment-btn" onClick={incremenet}>
                {t('Увеличить')}
            </Button>
            <Button data-testid="decrement-btn" onClick={decremenet}>
                {t('Уменьшить')}
            </Button>
        </div>
    );
};
