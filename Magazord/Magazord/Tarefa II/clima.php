<?php
if (!isset($_GET['lat']) || !isset($_GET['lon'])) {
    echo "<p>Erro: Coordenadas não fornecidas.</p>";
    exit;
}

$latitude = htmlspecialchars($_GET['lat']);
$longitude = htmlspecialchars($_GET['lon']);

$weatherApiUrl = "https://api.open-meteo.com/v1/forecast?latitude={$latitude}&longitude={$longitude}&current_weather=true&timezone=auto";

$weatherResponse = @file_get_contents($weatherApiUrl);
if ($weatherResponse === FALSE) {
    echo "<p>Erro ao obter dados meteorológicos.</p>";
    exit;
}

$weatherData = json_decode($weatherResponse, true);
if (!isset($weatherData['current_weather'])) {
    echo "<p>Erro ao processar os dados do clima.</p>";
    exit;
} 

$temperatura = $weatherData['current_weather']['temperature'];
$condicao_codigo = $weatherData['current_weather']['weathercode'];
$vento = $weatherData['current_weather']['windspeed'];

$condicoes_climaticas = [
    0 => "Céu limpo", 1 => "Principalmente limpo", 2 => "Parcialmente nublado",
    3 => "Nublado", 45 => "Nevoeiro", 48 => "Nevoeiro congelante",
    51 => "Garoa leve", 53 => "Garoa moderada", 55 => "Garoa forte",
    61 => "Chuva leve", 63 => "Chuva moderada", 65 => "Chuva forte",
    80 => "Chuva leve", 81 => "Chuva moderada", 82 => "Chuva forte"
];

$descricao = $condicoes_climaticas[$condicao_codigo] ?? "Condição desconhecida";

echo "<p><strong>Temperatura:</strong> {$temperatura}°C</p>";
echo "<p><strong>Condição:</strong> {$descricao}</p>";
echo "<p><strong>Vento:</strong> {$vento} km/h</p>";
?>
