import { Story } from '@storybook/react';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';
import PageLoader from 'shared/ui/PageLoader/PageLoader';

export const TranslationDecorator = (story: () => Story) => (

    <I18nextProvider i18n={i18n}>
        <Suspense fallback={<PageLoader />}>
            {story}
        </Suspense>
    </I18nextProvider>

);
