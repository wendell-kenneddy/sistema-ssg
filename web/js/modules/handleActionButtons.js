import { toggleModal } from './handleModals.js'
import { handleChar } from './handleChar.js'
import { attributeForm } from './handleAttributesModify.js'
import { rollForm } from './handleAttributeRollForm.js'
import { addItemForm } from './handleItemAddItemForm.js'
import { removeItemPrompt } from './handleItemRemove.js'
import { statusModifyForm } from './handleStatusModifyForm.js'
import { arbitraryAttributesForm } from './handleArbitraryAttributesForm.js';

export const watchDelete = e => {
  const btnConfirm = document.getElementById('confirm-char-delete')
  const btnCancel = document.getElementById('cancel-char-delete')

  if (e.target == btnConfirm) {
    toggleModal(2, 'hide')
    handleChar.deleteChar()
  }
  if (e.target == btnCancel) {
    toggleModal(2, 'hide')
    document.getElementById('dialogue-box').removeEventListener('click', watchDelete)
  }
}

export const watchClick = () => {
  document.getElementById('player-actions').addEventListener('click', e => {

    if (e.target == document.getElementById('char-attributes-modify')) {
      toggleModal(1, 'show')
      attributeForm.watchModify()
      return
    }

    else if (e.target == document.getElementById('char-delete')) {
      toggleModal(2, 'show')
      document.getElementById('dialogue-box').addEventListener('click', watchDelete)
      return
    }

    else if (e.target == document.getElementById('char-roll-test')) {
      toggleModal(3, 'show')
      rollForm.watchRoll()
      return
    }

    else if (e.target == document.getElementById('char-add-item')) {
      toggleModal(4, 'show')
      addItemForm.watchItemAdd()
      return
    }

    else if (e.target == document.getElementById('char-remove-item')) {
      toggleModal(5, 'show')
      removeItemPrompt.watchRemove()
      return
    }

    else if (e.target == document.getElementById('char-status-modify')) {
      toggleModal(6, 'show')
      statusModifyForm.watchStatusModify()
      return
    }

    else if (e.target == document.getElementById('char-arbitrary-attributes')) {
      toggleModal(7, 'show')
      arbitraryAttributesForm.watchArbitraryModify()
      return
    }
  })
}
