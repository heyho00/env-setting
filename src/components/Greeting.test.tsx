import { render, screen } from '@testing-library/react'
import Greeting from './Greeting'

test('Greeting', () => {
    render(<Greeting name="harry" />)
    expect(screen.queryByText(/Hi/)).toBeFalsy()
    screen.getByText('Hello, harry') //못찾아 라는 에러
    // 이런식으로 사용.
    expect(screen.queryByText(/Hi/)).not.toBeInTheDocument() //없으면 toBeInthedocument가 실패하는 에러. 두 에러 종류가 좀 다름.
})