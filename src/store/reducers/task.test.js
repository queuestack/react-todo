import reducer from './task';
import { addTask, setTask, removeTask, toggleTask, setTaskPriority, setTaskDueDate, receiveTaskData } from '../actions';
import expect from 'expect';
import { formatTask } from '../../utils/helpers';

describe('task reducer', () => {
  const taskData = {
    authedUser: 'oxoxx',
    tasks: [{
        title: 'title1',
        body: 'body1',
        dueDate: 1541150030181,
        priority: 'high',
        done: false
    }, {
        title: 'title2',
        body: 'body2',
        dueDate: 1541150040181,
        priority: 'normal',
        done: true,
    }, {
        title: 'title3',
        body: 'body3',
        dueDate: 1551150040181,
        priority: 'normal',
        done: false,            
    }]
  }
  const task1 = formatTask('1', '1', 1111, 'normal', false)
  const task2 = formatTask('2', '2', 2222, 'normal', false)
  const toggledTask2 = formatTask('2', '2', 2222, 'normal', true)
  const highPriTask2 = formatTask('2', '2', 2222, 'high', false)
  const dueDateTask2 = formatTask('2', '2', 7777, 'normal', false)
  const task3 = formatTask('3', '3', 3333, 'high', false)
  const initState = {
    authedUser: '',
    tasks: []
  }
  const testState = {
    ...initState,
    tasks: [
      task1,
      task2
    ]
  }
  
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initState);
  });
  it('should receive task data', () => {
    expect(reducer(initState, receiveTaskData(taskData))).toEqual(
      {
        ...taskData
      }
    )
  })
  it('should add task', () => {
    expect(reducer(initState, addTask(task1))).toEqual(
      {
        ...initState,
        tasks: [
          task1
        ]
      }
    )
  })
  it('should set task', () => {
    expect(reducer(testState, setTask(task3, 1))).toEqual(
      {
        ...testState,
        tasks: [
          task1,
          task3
        ]
      }
    )
  })
  it('should remove task', () => {
    expect(reducer(testState, removeTask(0))).toEqual(
      {
        ...testState,
        tasks: [
          task2     
        ]
      }
    )
  })
  it('should toggle task done status', () => {
    expect(reducer(testState, toggleTask(1))).toEqual(
      {
        ...testState,
        tasks: [
          task1,
          toggledTask2
        ]
      }
    )
  })
  it('should set task priority', () => {
    expect(reducer(testState, setTaskPriority(1, 'high'))).toEqual(
      {
        ...testState,
        tasks: [
          task1,
          highPriTask2
        ]
      }
    )
  })
  it('should set task due date', () => {
    expect(reducer(testState, setTaskDueDate(1, 7777))).toEqual(
      {
        ...testState,
        tasks: [
          task1,
          dueDateTask2
        ]
      }
    )
  })
});