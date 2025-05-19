import { Main } from '@strapi/design-system';
import { useIntl } from 'react-intl';
import { useFetchClient } from '@strapi/strapi/admin';
const { get } = useFetchClient();

import { getTranslation } from '../utils/getTranslation';

async function onclick() {
  const res = await get('api//demo');
  alert(JSON.stringify(res))
} 

const HomePage = () => {
  const { formatMessage } = useIntl();

  return (
    <Main>
      <h1>Welcome to {formatMessage({ id: getTranslation('plugin.name') })}</h1>
      <h2>Hello Yxjie Welcome Strapi Plugin </h2>
      <button onClick={() => onclick}>hello world</button>
    </Main>
  );
};

export { HomePage };
