<?php 

header("Content-type: text/xml");

echo '<?xml version="1.0" encoding="UTF-8" ?>';

$API_KEY = "{{MOB4H_API_KEY}}";
$API_HOST = "https://backoffice.mob4h.pt/server/index.php/api/operadores/list";

function getOperators($url, $key) {
    $cURL = curl_init();
    $setopt_array = array(
        CURLOPT_URL => $url,
        CURLOPT_HTTPHEADER => array("authorization: $key"),
        CURLOPT_POST => 1,
        CURLOPT_RETURNTRANSFER => true
    ); 
    curl_setopt_array($cURL, $setopt_array);
    $json_response_data = curl_exec($cURL);
    curl_close($cURL);
    return json_decode($json_response_data, true);
}

?>

<urlset xmlns="http://www.google.com/schemas/sitemap/0.84" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.google.com/schemas/sitemap/0.84 http://www.google.com/schemas/sitemap/0.84/sitemap.xsd">

    <url>
        <loc>https://www.mob4h.pt/</loc>
        <lastmod>2010-04-20</lastmod>
        <changefreq>never</changefreq>
        <priority>0.5</priority>
    </url>

    <url>
        <loc>https://www.mob4h.pt/sobre_nos</loc>
        <lastmod>2020-04-19</lastmod>
        <changefreq>never</changefreq>
        <priority>0.5</priority>
    </url>

    <url>
        <loc>https://www.mob4h.pt/registo/operador</loc>
        <lastmod>2020-04-19</lastmod>
        <changefreq>never</changefreq>
        <priority>0.5</priority>
    </url>

    <url>
        <loc>https://www.mob4h.pt/campanhas</loc>
        <lastmod>2020-04-19</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.00</priority>
    </url>

    <url>
        <loc>https://www.mob4h.pt/about.php</loc>
        <lastmod>2020-04-19</lastmod>
        <changefreq>never</changefreq>
        <priority>0.5</priority>
    </url><?php

    $operators = getOperators($API_HOST, $API_KEY);
    
    foreach($operators["value"] as $operator) {
        $operator_id = stripslashes($operator['operadoresid']);
        $date = date("Y-m-d", time());
        echo "

    <url>
        <loc>https://www.mob4h.pt/operador/$operator_id</loc>
        <lastmod>$date</lastmod>
        <changefreq>never</changefreq>
        <priority>0.8</priority>
    </url>";
    }?>

</urlset>
