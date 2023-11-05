import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const BugButton = () => {
    const [error, setError] = useState(false);
    const throwError = () => setError(true);
    const { t } = useTranslation();

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={throwError}
        >
            {t('Добавить ошибку')}
        </Button>
    );
};

export default BugButton;
