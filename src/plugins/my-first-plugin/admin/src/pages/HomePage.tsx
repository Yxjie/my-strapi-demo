import { Main } from '@strapi/design-system';
import { useIntl } from 'react-intl';
import { PLUGIN_ID } from '../pluginId';

import { getTranslation } from '../utils/getTranslation';

import axios from 'axios';

async function onclick() {
  console.log(`/api/${PLUGIN_ID}/demo`)
  // const base_url = env.host + ":"+env.port;
  // console.log(base_url)
  const res = await axios.get(`/api/${PLUGIN_ID}/demo`);
  
  // alert(`/api/${PLUGIN_ID}/demo`)
}

const HomePage = () => {
  const { formatMessage } = useIntl();

  return (
    <Main>
      <h1>Welcome to {formatMessage({ id: getTranslation('plugin.name') })}</h1>
      <h2>Hello Yxjie Welcome Strapi Plugin </h2>
      
      <button onClick={()=>onclick()}>hello world</button>
    </Main>
  );
};

export { HomePage };
