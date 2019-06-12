function nood (element) {
  this.element = element
  this.next = null
}

function linkList () {
  this.head = new nood('head')
}

linkList.prototype.find = function (element) {
  var currNode = this.head
  while ( currNode.element != element ){
    currNode = currNode.next
  }
  return currNode
}

linkList.prototype.remove = function (element) {

}

linkList.prototype.insertAfter = function (currentElement, newElement) {
  const newNood = new nood(newElement)
  const nextElement = currentElement.next
  CustomEvent.next = newNood
  newNood.next = nextElement
}
