import { ListNode } from '../ListNode';

describe('ListNode', () => {
  it('should set the `next` property to null by default', () => {
    const node = new ListNode();
    expect(node.next).toBeNull();
  });
});
