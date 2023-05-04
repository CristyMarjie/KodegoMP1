
const radioMulti = document.querySelector('#multiType');  
// const howToOrder = document.querySelector('.callInstructionModal');  
const radioOne = document.querySelector('#oneType');       
const topRadioBtn = document.querySelectorAll('input[name="typeOfProduct"]');
const chkbx = document.querySelector('#existingProd');  
const myInstruction= document.getElementById('instructionModal');
const modal = new bootstrap.Modal(myInstruction);
const modalHeading = document.getElementById('modalHeading');
const modalContent = document.getElementById('modalContent');


radioMulti.addEventListener("click", () => {
    chkbx.checked = false;
    modal.show();
    modalHeading.innerText='Instruction'
    modalContent.innerHTML=`<p class="modal-title">
    <small>To us, multiple product types means multiple specs. We need a detailed specs for every type of product you want. For us to get those details, you may follow 
    the steps below :</small>
    </p><br/>
    <p class="modal-title">
    1. If you don’t have a specs document yet, you may download our CSV file where you can fill in the details of the products. Just click the ‘Download CSV’ button and fill in the details on the CSV.
    </p>
    <p class="modal-title">
    2. After filling in the details, upload the file, just click ‘Upload CSV file’.
    </p>
    <p class="modal-title">
    3. If all necessary details are filled-in, click submit.
    </p>
    <p class="modal-title">
    4. We will respond to you using the email you provided within 48 hours or less.
    </p>`;
    
    // output.innerText = selectedSize ? `You selected ${selectedSize}` : `You haven't selected any size`;
});

radioOne.addEventListener("click", () => {
    chkbx.checked = true;
});

howToOrder = () => {
    modal.show();
    modalHeading.innerText='How to Order'
    modalContent.innerHTML=`<p class="modal-title" >
            1. Login or register for an account
        </p>
        <p class="modal-title" >
            2. Choose type of product
        </p>
        <p class="modal-title">
            3. Fill out the order information
        </p>
        <p class="modal-title" >
            4. Submit artwork by: <br>
            &nbsp;&nbsp;a. Uploading a design, or<br>
            &nbsp;&nbsp;b. Choosing a design from the browser, or<br>
            &nbsp;&nbsp;c. Create your own design using the online 
            &nbsp;&nbsp;editing tool (applicable in desktop only)
        </p>
        <p class="modal-title">
            5. Verify order information and accept the Terms and Conditions (please read before proceeding)
        </p>
        <p class="modal-title">
            6. Verify shipping and billing address
        </p> 
        <p class="modal-title" >
            7. Select shipping type
        </p>
        <p class="modal-title">
            8. Confirm order and proceed to checkout
        </p>
        <p class="modal-title">
            9. Payment
        </p>
        <p class="modal-title fst-italic">
            Note: You will receive an email of your 
            order transaction.
        </p>`;
};
