
// PASS
test('숫자 더하기', () => {
    expect(1 + 2).toBe(3)
})

//fail 원래는 테스트가 올바라야됨.
// test('숫자 더하기', () => {
//     expect(1 + 21).toBe(3)
// })


function add(x: number, y: number) {
    return x + y
}

//PASS
test('숫자 더하기', () => {
    expect(add(1, 2)).toBe(3)
})


//npx jest --watchAll 하면 p -> 파일명으로 찾아서 계속 테스트를 켜놓을 수 있다.


describe('add 함수', () => {
    it('returns sum of two numbers', () => {
        expect(add(1, 2)).toBe(3)
    })
})

// npx jest --verbose 하면 describe 문은   add 함수
//    ✓ returns sum of two numbers 이렇게 나옴.

