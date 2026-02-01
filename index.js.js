function login(event) {
    event.preventDefault(); 

    var u = document.getElementById('username').value;
    var p = document.getElementById('password').value;

    // لو المستخدم الأول دخل (المدير مثلاً)
    if (u === "admin" && p === "123") {
        window.location.href = "https://magnificent-cat-439b89.netlify.app";
    } 
    // لو مستخدم تاني خالص (العميل مثلاً)
    else if (u === "user" && p === "456") {
        window.location.href = "https://www.google.com"; // حط هنا رابط الموقع التاني
    } 
    // لو حد كتب أي حاجة غلط
    else {
        alert("البيانات دي مش مسجلة عندنا يا بطل!");
    }
}