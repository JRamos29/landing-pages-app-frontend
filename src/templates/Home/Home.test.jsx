import Home from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Home />', () => {
  it('should render home', () => {
    renderTheme(<Home />);
    // const headingContainer = screen.getByRole('heading', { name: 'Hello!' }).parentElement;
    // expect(headingContainer).toHaveStyle({
    //   background: theme.colors.mainBg,
    // });
    // expect(headingContainer).toHaveStyleRule('background', 'red');
    // expect(headingContainer).toMatchSnapshot();
  });
});
