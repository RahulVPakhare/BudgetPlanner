const btnAdd = document.querySelector('#btn-add')
const inputReason = document.querySelector('#input-reason')
const inputAmount = document.querySelector('#input-amount')
const btnClear = document.querySelector('#btn-clear')
const listExpenses = document.querySelector('#list-expenses')

btnAdd.addEventListener('click', () => {
    const reason = inputReason.value
    const amount = inputAmount.value

    if (reason.trim().length <= 0 || amount <= 0 || amount.trim().length <= 0) {
        return
    }

    const newListItem = document.createElement('ion-item')
    newListItem.textContent = reason + ': ' + new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(amount);
    listExpenses.appendChild(newListItem)

    clearFields()
})

btnClear.addEventListener('click', () => {
    clearFields()
})

function clearFields() {
    inputReason.value = ""
    inputAmount.value = ""
}