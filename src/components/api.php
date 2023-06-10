<?php
// Mengambil dataFinal dari body permintaan
$dataFinal = json_decode(file_get_contents('php://input'), true);

// Menghubungkan ke database
$servername = "localhost";
$username = "tras8447_atqiya";
$password = "t+~IViO[WeQJ"; // Ganti dengan password MySQL Anda
$dbname = "tras8447_pandaData"; // Ganti dengan nama database Anda

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Koneksi database gagal: " . $conn->connect_error);
}

// Mengambil nilai dari dataFinal
$value0 = json_encode($dataFinal[0]);
$value1 = json_encode($dataFinal[1]);

// Menyimpan data ke database
$sql = "INSERT INTO panda_data2 (col0, col1) VALUES ('$value0', '$value1')";
if ($conn->query($sql) === true) {
    echo "Data berhasil disimpan";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Menutup koneksi database
$conn->close();
?>