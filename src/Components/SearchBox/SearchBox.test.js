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

  test('SearchBox find song list by input', () => {
    useDispatchMock.mockReturnValue(jest.fn());

    const {getByTestId} = render(<SearchBox />);
    const component = getByTestId('searchBox');
    // search song by title 'love song'
    fireEvent.changeText(component, 'love song');

    // set to null
    fireEvent.changeText(component, '');
  });
});
