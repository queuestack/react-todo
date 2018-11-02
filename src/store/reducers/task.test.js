import reducer from './task';
import { addTask, setTask } from '../actions';
import { TaskTypes } from '../constants';
import expect from 'expect';
import { formatTask } from '../../utils/helpers';

describe('task reducer', () => {
  const initState = {
    authedUser: '',
    tasks: []
  }
  const addTestTask = formatTask("hi", "hello", new Date().getTime(), 'high')
  const setTestState = {
    ...initState,
    tasks: [
      formatTask('1', '1', 1111, 'low'),
      formatTask('2', '2', 2222, 'middle'),
      formatTask('3', '3', 3333, 'high')
    ]
  }
  const setTestTask = formatTask("bye", "good bye", new Date().getTime(), 'low')

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initState);
  });
  it('should add task', () => {
    expect(reducer(initState, addTask(addTestTask))).toEqual(
      {
        ...initState,
        tasks: [
          addTestTask
        ]
      }
    )
  })
  it('should set task', () => {
    expect(reducer(setTestState, setTask(setTestTask, 1))).toEqual(
      {
        ...setTestState,
        tasks: [
          formatTask('1', '1', 1111, 'low'),
          setTestTask,
          formatTask('3', '3', 3333, 'high')
        ]
      }
    )
  })
});