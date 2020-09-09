export const TEST_COMPONENT_TEMPLATE = `import * as React from 'react';
import { shallow } from 'enzyme';

it('{{componentName}}', () => {
  const result = shallow(<Template />).contains(<p>hello</p>);
  expect(result).toBeTruthy();
});
`
