import { useEffect, useState } from 'react';
import { Base } from '../Base';
import { mockBase } from '../Base/mock';
import { mapData } from '../../api/map-data';
import { PageNotFound } from '../PageNotFound';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch(
          'http://localhosta:1337/pages/?slug=landing-page',
        );
        const json = await data.json();
        const pageData = mapData(json);
        setData(pageData[0]);
      } catch (e) {
        setData(undefined);
      }
    };

    load();
  }, []);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <h1>Loading...</h1>;
  }

  return <Base {...mockBase} />;
}

export default Home;
