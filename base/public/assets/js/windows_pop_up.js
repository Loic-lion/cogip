"use strict";
const allInvoices = document.querySelectorAll(".dynamic__dashboard__modify__invoices");
const allInvoicesButton = document.querySelectorAll(".modify-button-invoices");
// console.log(allInvoicesButton);
function modify_invoices(allInvoices, allInvoicesButton) {
    // allinvoices.forEach(){}
    const newInvoices = document.getElementById("new__invoices");
    newInvoices.insertAdjacentHTML("afterbegin", `
    <div class="container__dynamic__dashboard__invoices__pop__up container__dynamic__dashboard__pop__up" id="invoices_pop_up">
        <form class="container__dynamic__dashboard__invoices__pop__up__form container__dynamic__dashboard__pop__up__form">
            <div>
                <label for="invoice-number">Invoice number : </label>
                <input name="invoice-number" type="text" name="invoice-number" id="">
            </div>
            <div>
                <label for="due-dates">Due dates : </label>
                <input name="due-dates" type="date" id="">
            </div>
            <div>
                <label for="company">Company : </label>
                <input name="company" type="text" id="">
            </div>
            <div>
                <label for="created-at">Created at : </label>
                <input name="created-at" type="date" id="">
            </div>
            <input type="submit" value="Submit" id="button_submit_invoices_pop_up">
            <input type="submit" value="Cancel" id="button_cancel_invoices_pop_up">
        </form>
    </div>
    `);
    const invoicesPopUp = document.getElementById("invoices_pop_up");
    invoicesPopUp.style.display = "none";
    allInvoicesButton.forEach((element, event) => {
        const id = element.getAttribute("id");
        element.addEventListener("click", (event) => {
            var _a, _b, _c, _d;
            event.preventDefault();
            invoicesPopUp.style.display = "block";
            // console.log(id);
            // console.log(element.parentElement);
            const idNumber = id.match(/\d+/)[0];
            // console.log(idNumber);
            const tr = document.getElementById(`modify-tr-invoices-${idNumber}`);
            // console.log(tr);
            // console.log(tr?.children);
            const invoiceNumber = (_a = tr === null || tr === void 0 ? void 0 : tr.children[2]) === null || _a === void 0 ? void 0 : _a.textContent;
            const dueDates = (_b = tr === null || tr === void 0 ? void 0 : tr.children[3]) === null || _b === void 0 ? void 0 : _b.textContent;
            const company = (_c = tr === null || tr === void 0 ? void 0 : tr.children[4]) === null || _c === void 0 ? void 0 : _c.textContent;
            const created_at = (_d = tr === null || tr === void 0 ? void 0 : tr.children[5]) === null || _d === void 0 ? void 0 : _d.textContent;
            console.log(invoiceNumber);
            console.log(dueDates);
            console.log(company);
            console.log(created_at);
            const inputInvoiceNumber = document.querySelector(`input[name="invoice-number"]`);
            inputInvoiceNumber.setAttribute("value", `${invoiceNumber === null || invoiceNumber === void 0 ? void 0 : invoiceNumber.trim()}`);
            const inputDueDates = document.querySelector(`input[name="due-dates"]`);
            const formattedInputDueDates = String(dueDates === null || dueDates === void 0 ? void 0 : dueDates.split('/').reverse().join('-').replace(/\s/g, ''));
            inputDueDates.setAttribute("value", `${formattedInputDueDates}`);
            const inputCompany = document.querySelector(`input[name="company"]`);
            inputCompany.setAttribute("value", `${company === null || company === void 0 ? void 0 : company.trim()}`);
            const inputCreatedDates = document.querySelector(`input[name="created-at"]`);
            const formattedInputCreatedDates = String(created_at === null || created_at === void 0 ? void 0 : created_at.split('/').reverse().join('-').replace(/\s/g, ''));
            inputCreatedDates.setAttribute("value", `${formattedInputCreatedDates}`);
            // placeholder="invoice-number"
        });
        const buttonCancelInvoicesPopUp = document.getElementById("button_cancel_invoices_pop_up");
        buttonCancelInvoicesPopUp === null || buttonCancelInvoicesPopUp === void 0 ? void 0 : buttonCancelInvoicesPopUp.addEventListener("click", (event) => {
            event.preventDefault();
            // EXPORTER LES DONNEES !
            invoicesPopUp.style.display = "none";
        });
        const buttonSubmitInvoicesPopUp = document.getElementById("button_submit_invoices_pop_up");
        buttonSubmitInvoicesPopUp === null || buttonSubmitInvoicesPopUp === void 0 ? void 0 : buttonSubmitInvoicesPopUp.addEventListener("click", (event) => {
            // alert("Infos pas encore envoyées, presque !");
            event.preventDefault();
            // EXPORTER LES DONNEES !
            invoicesPopUp.style.display = "none";
        });
    });
}
modify_invoices(allInvoices, allInvoicesButton);
