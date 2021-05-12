const btnAdd = document.querySelector('#btn-add')
const inputReason = document.querySelector('#input-reason')
const inputAmount = document.querySelector('#input-amount')
const btnClear = document.querySelector('#btn-clear')
const listExpenses = document.querySelector('#list-expenses')
const txtTotalExpenses = document.querySelector('#txt-total-expenses')
const alertCtrl = document.querySelector('ion-alert-controller')

let totalExpenses = 0

const clearFields = () => {
    inputReason.value = ""
    inputAmount.value = ""
}

const printInr = (amount) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(amount);
}

btnAdd.addEventListener('click', () => {
    const reason = inputReason.value
    const amount = inputAmount.value

    if (reason.trim().length <= 0 || amount.trim().length <= 0) {
        alertCtrl
            .create({
                message: 'Please enter valid reason and amount.',
                header: 'Invalid inputs',
                buttons: ['Okay']
            })
            .then(alertElement => {
                alertElement.present()
            })
        return
    }

    if (amount <= 0) {
        alertCtrl
            .create({
                message: 'Please enter amount greater than zero.',
                header: 'Invalid amount',
                buttons: ['Okay']
            })
            .then(alertElement => {
                alertElement.present()
            })
        return
    }

    const newListItem = document.createElement('ion-item')
    newListItem.textContent = reason + ': ' + printInr(amount)
    listExpenses.appendChild(newListItem)

    totalExpenses += +amount
    txtTotalExpenses.textContent = printInr(totalExpenses)

    clearFields()
})

btnClear.addEventListener('click', clearFields)