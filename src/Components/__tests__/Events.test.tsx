import { render as rtlRender, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import store from '../../store/store'
import Headline from '../Headline/Headline'
import { Provider } from 'react-redux'
import Event from '../ListsEvents/Event/Event'
import { initialState } from '../../store/reducer'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import axios from 'axios'

import validApi from '../../../___mocks__/validApi.json'

const render = (component: any) => rtlRender(
    <Provider store={store}>
        {component}
    </Provider>
)
const history = createMemoryHistory({
    initialEntries: ['/events'],
    initialIndex: 0
});

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('testing components and response api', () => {
    test('Headline component', () => {
        render(<Headline title={'List Event'} />)
        expect(screen.getByText('List Event')).toBeInTheDocument()
    })
    test('Event component', () => {
        render(<Router location={'/'} navigator={history} ><Event event={initialState.events[0]} id={0} /></Router>)
        expect(screen.getByTestId('image')).toBeInTheDocument()
    })
    test('ListsEvents component', async () => {
        mockedAxios.get.mockReturnValueOnce(Promise.resolve(JSON.stringify(validApi)));
    })
})


