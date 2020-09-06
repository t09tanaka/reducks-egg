import { ComponentTemplate } from './ComponentTemplate'

test('index', () => {
  expect(new ComponentTemplate('accountDetail', 'AccountNameField').component)
    .toEqual(`import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export interface TemplateProps {
  yourValue: string;
  handleYourValue: (title: string) => void;
  error: boolean;
}

export const Template: React.FC<TemplateProps> = (props: TemplateProps) => {
  const { yourValue, handleYourValue, error } = props;
  const id = "yourValue"

  return (
    <div className="form-group">
      <div className="input-group">
        <label className="input-label" htmlFor={id}>
          YOUR VALUE
        </label>
        <input
          type="text"
          placeholder="ENTER YOUR PLACEHOLDER"
          id={id}
          name={id}
          value={yourValue}
          onChange={(e) => handleYourValue(e.target.value)}
        />

        {error && (
          <div className="alert alert-danger">ERROR!</div>
        )}
      </div>
    </div>
  );
};

const AccountNameField: React.FC = () => {
  const { yourValue, error } = useSelector(getAccountDetailState);
  const dispatch = useDispatch();

  const handleYourValue = (yourValue: string) =>
    dispatch(AccountDetailReducer.updateTitle(yourValue));

  const _props: TemplateProps = {
    yourValue,
    handleYourValue,
    error: error?.yourValue === true,
  };
  return <Template {..._props} />;
};

export default AccountNameField;
`)
})
