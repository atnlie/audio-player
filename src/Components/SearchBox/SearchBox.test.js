import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import * as redux from 'react-redux';

import {SearchBox} from './SearchBox';

describe('Test SearchBox Component', () => {
  const useSelectorMock = jest.spyOn(redux, 'useSelector');
  const useDispatchMock = jest.spyOn(redux, 'useDispatch');

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  useDispatchMock.mockReturnValue(null);
  useSelectorMock.mockReturnValue(null);

  test('Renders SearchBox correctly', () => {
    const {getByTestId} = render(<SearchBox />);
    const component = getByTestId('searchBox');

    expect(component).toBeTruthy();
  });

  test('SearchBox set some value action', () => {
    useSelectorMock.mockReturnValue('love song');
    const {getByTestId} = render(<SearchBox />);
    const component = getByTestId('searchBox');
    expect(component).toBeTruthy();
  });

  test('SearcBox input action', () => {
    const onChangeTextMock = jest.fn();
    const CHANGE_TEXT = 'love song';
    useSelectorMock.mockReturnValue('love song');
    const {getByTestId} = render(<SearchBox onChangeText={onChangeTextMock} />);
    // const component = getByTestId('searchBox');
    // expect(component).toBeTruthy();
    // fireEvent.changeText(getByTestId('searchBox'), CHANGE_TEXT);
  });
});
