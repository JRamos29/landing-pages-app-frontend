import { GridContent } from '../../components/GridContent';

export const PageNotFound = () => {
  return (
    <GridContent
      title="Error 404"
      html='<p>The page was not found. <a href="/">Back</a></p>'
    />
  );
};
