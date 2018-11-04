# React Todo
React를 활용한 Todo List

## Screenshot
![TODO](/screenshots/main.png "TODO")
TODO List와 TODO Detail로 이루어져 있다.
TODO List에서는 새로운 할 일을 추가할 수 있다.
추가된 할 일은 목록 형태로 볼 수 있고, 완료 처리 그리고 삭제를 할 수 있다.
우선순위가 높은 일에 대해서는 빨간색으로 표시가 된다.
TODO Detail에서는 내용, 마감 기한 그리고 우선 순위를 정할 수 있다.

## Features
* [✓] 새로운 TODO(제목 + 내용)를 작성한다
* [✓] 사용자의 선택에 의해 TODO에는 마감 기한을 넣을 수 있다.
* [✓] 우선순위를 조절할 수 있다.
* [✓] 완료 처리를 할 수 있다.
* [✘] 마감기한이 지난 TODO에 대해 알림을 노출한다.
* [✓] TODO 목록을 볼 수 있다.
* [✓] TODO 내용을 수정할 수 있다.
* [✓] TODO 항목을 삭제할 수 있다.

## Additional Features
* [✓] Unit Test : store/reducers에 대한 Unit Test 실행
* [✘] Integration Test 
* [✓] AWS등 서버에 배포되어 있어서 기능을 직접 사용해 볼 수 있음 : https://queuestack.github.io/react-todo/

## Procedure
```sh
1. git clone https://github.com/queuestack/react-todo.git
2. cd react-todo
3. yarn
4. yarn run start
```