/// <reference types="react-scripts"/>

type EventState = {
  day: number;
  title: string;
  description: string;
  time: string;
  label: string;
  id: number;
};

enum ActionType {
  PUSH = 'PUSH',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE'
}

interface Action {
  type: ActionType;
  payload: EventState;
}
