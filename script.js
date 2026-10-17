let studentsList = [];
let rollNumberTracker = 101;

// Switch Pages
function showPage(pageId, element) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));

    const menuItems = document.querySelectorAll('.nav-menu li');
    menuItems.forEach(m => m.classList.remove('active'));

    document.getElementById(pageId).classList.add('active');
    element.classList.add('active');
}

// Save New Student Admission
function saveStudent(event) {
    event.preventDefault();

    const name = document.getElementById('stdName').value;
    const father = document.getElementById('fatherName').value;
    const className = document.getElementById('stdClass').value;
    const phone = document.getElementById('stdPhone').value;

    const newStudent = {
        roll: rollNumberTracker++,
        name: name,
        father: father,
        class: className,
        phone: phone
    };

    studentsList.push(newStudent);
    refreshTable();
    addActivityLog(`New Admission: ${name} in Class ${className}`);

    document.getElementById('admissionForm').reset();
    alert(`Admission Successful! Roll No: ${newStudent.roll}`);

    // Automatically switch to Student Directory to view result
    showPage('students', document.querySelectorAll('.nav-menu li')[1]);
}

// Update Table in Directory
function refreshTable() {
    const tbody = document.getElementById('studentTableBody');
    tbody.innerHTML = '';

    studentsList.forEach(student => {
        const row = `<tr>
            <td>${student.roll}</td>
            <td>${student.name}</td>
            <td>${student.father}</td>
            <td>${student.class}</td>
            <td>${student.phone}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

// Process Fee
function processFee(event) {
    event.preventDefault();
    const name = document.getElementById('feeStudentName').value;
    const amount = document.getElementById('feeAmount').value;

    addActivityLog(`Fee Received: ₹${amount} from ${name}`);
    alert(`Fee Receipt Generated Successfully for ${name} (₹${amount})`);

    document.getElementById('feeStudentName').value = '';
    document.getElementById('feeAmount').value = '';
}

// Add Activity Log
function addActivityLog(text) {
    const logList = document.getElementById('activityLog');
    const li = document.createElement('li');
    li.innerHTML = `<span class="dot green"></span> ${text}`;
    logList.insertBefore(li, logList.firstChild);
}