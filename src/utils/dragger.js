import dragula from 'dragula'
import 'dragula/dist/dragula.css'

const dragger = {
  init(container) {
    return dragula([...container])
  },
  // candidates : target의 후보들
  // type : drag&drop 대상이 리스트인지 타깃인지를 type으로 받는다.
  sibling({el, wrapper, candidates, type}) {
    const curId = el.dataset[type+'Id'] * 1
    let prev = null
    let next = null

    candidates.forEach((el, idx, arr) => {
      const id = el.dataset[type + 'Id'] * 1
      if(id == curId) { // card-item 중 targetCard와 같은 경우
        prev = idx > 0 ? {
          id: arr[idx -1].dataset[type + 'Id'] * 1,
          pos: arr[idx -1].dataset[type + 'Pos'] * 1
        } : null
        next = idx < arr.length - 1 ? {
          id: arr[idx + 1].dataset[type + 'Id'] * 1,
          pos: arr[idx + 1].dataset[type + 'Pos'] * 1
        } : null
      }
    })
    return {prev, next}
  }
}

export default dragger
