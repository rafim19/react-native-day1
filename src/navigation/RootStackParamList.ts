import { ITodoListItem } from "../interfaces";

export type RootStackParamList = {
  CounterScreen: undefined,
  TodoListScreen: undefined,
  DetailTodoScreen: {
    item: ITodoListItem
  }
}