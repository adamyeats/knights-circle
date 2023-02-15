/**
 * ListNode is a generic class that can be used to create a linked list.
 */
export class ListNode<T extends ListNode<T>> {
  public next: T | null = null;
}
