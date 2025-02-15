class Employee {
    constructor(name, id, dateOfJoining, addresses) {
        this.name = name;
        this.id = id;
        this.dateOfJoining = new Date(dateOfJoining);
        this.addresses = addresses.map(addr => ({
            ...addr
        })); // Deep copy
        Object.freeze(this); // Make immutable
    }
}

document.getElementById("showEmployee").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const id = document.getElementById("id").value;
    const date = document.getElementById("date").value;

    const address1 = {
        street: document.getElementById("street1").value,
        city: document.getElementById("city1").value
    };

    const address2 = {
        street: document.getElementById("street2").value,
        city: document.getElementById("city2").value
    };

    if (!name || !id || !date || !address1.street || !address1.city || !address2.street || !address2.city) {
        alert("Please fill in all fields.");
        return;
    }

    const employee = new Employee(name, id, date, [address1, address2]);

    document.getElementById("output").innerHTML = `
        <strong>Name:</strong> ${employee.name} <br>
        <strong>ID:</strong> ${employee.id} <br>
        <strong>Date of Joining:</strong> ${employee.dateOfJoining.toDateString()} <br>
        <strong>Addresses:</strong> <br>
        ${employee.addresses.map(addr => `${addr.street}, ${addr.city}`).join("<br>")}
    `;
});